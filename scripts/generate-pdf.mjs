import { copyFile, readFile, writeFile } from "node:fs/promises";
import { preview } from "vite";
import { chromium } from "playwright";
import { PDFDocument, rgb } from "pdf-lib";

const LANGS = ["en", "ca", "es"];
const LEGACY_OUT = "dist/carlos-torres-cv.pdf"; // English copy, kept for old links
const outFor = (lang) => `dist/carlos-torres-cv-${lang}.pdf`;

const METADATA = {
  en: { title: "Carlos Torres — CV", subject: "CS Andon Cord Subject Matter Expert" },
  ca: { title: "Carlos Torres — Currículum", subject: "CS Andon Cord Subject Matter Expert" },
  es: { title: "Carlos Torres — Currículum", subject: "CS Andon Cord Subject Matter Expert" },
};

// Keep in sync with src/print.css: @page margin and .page grid columns
const MARGIN_MM = 10;
const ASIDE_RATIO = 0.45;

// Chromium cannot paint backgrounds into the @page margin area, which would
// leave white bands at the top and bottom of every page. Those areas are
// guaranteed empty of content, so paint the sidebar color there directly.
// The same pdf-lib pass also sets the document metadata.
async function paintMarginBands(path, asideColor, lang) {
  const doc = await PDFDocument.load(await readFile(path));

  doc.setTitle(METADATA[lang].title);
  doc.setAuthor("Carlos Torres Moral");
  doc.setSubject(METADATA[lang].subject);
  doc.setKeywords(["CV", "resume", "Carlos Torres", "software development"]);
  doc.setLanguage(lang);
  const marginPt = (MARGIN_MM / 25.4) * 72;
  const overlapPt = 2; // bleed into the content area to avoid hairline seams

  for (const page of doc.getPages()) {
    const { width, height } = page.getSize();
    for (const y of [-overlapPt, height - marginPt - overlapPt]) {
      page.drawRectangle({
        x: 0,
        y,
        width: width * ASIDE_RATIO,
        height: marginPt + 2 * overlapPt,
        color: asideColor,
      });
    }
  }

  await writeFile(path, await doc.save());
}

const server = await preview({ preview: { port: 4173, strictPort: false } });
const url = server.resolvedUrls.local[0];

const browser = await chromium.launch();
const page = await browser.newPage();
// Print styles must apply before waiting for fonts, so print-only fonts
// (Roboto Condensed) get requested too. Emulation persists across gotos.
await page.emulateMedia({ media: "print" });

let asideColor;

for (const lang of LANGS) {
  await page.goto(`${url}?lang=${lang}`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  // Resolve the sidebar's computed color to sRGB via a canvas, so the margin
  // bands always match whatever the CSS says (no hard-coded color to sync).
  asideColor ??= rgb(
    ...(await page.evaluate(() => {
      const color = getComputedStyle(document.querySelector(".aside")).backgroundColor;
      const ctx = document.createElement("canvas").getContext("2d");
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);
      return [...ctx.getImageData(0, 0, 1, 1).data.slice(0, 3)];
    })).map((v) => v / 255),
  );

  await page.pdf({
    path: outFor(lang),
    format: "A4",
    preferCSSPageSize: true,
    printBackground: true,
  });

  await paintMarginBands(outFor(lang), asideColor, lang);
  console.log(`Wrote ${outFor(lang)}`);
}

await browser.close();
await server.close();

await copyFile(outFor("en"), LEGACY_OUT);
console.log(`Wrote ${LEGACY_OUT} (copy of en)`);
