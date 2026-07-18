import { readFile, writeFile } from "node:fs/promises";
import { preview } from "vite";
import { chromium } from "playwright";
import { PDFDocument, rgb } from "pdf-lib";

const OUT = "dist/carlos-torres-cv.pdf";

// Keep in sync with src/print.css: @page margin and .page grid columns
const MARGIN_MM = 10;
const ASIDE_RATIO = 0.45;

// Chromium cannot paint backgrounds into the @page margin area, which would
// leave white bands at the top and bottom of every page. Those areas are
// guaranteed empty of content, so paint the sidebar color there directly.
async function paintMarginBands(path, asideColor) {
  const doc = await PDFDocument.load(await readFile(path));
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

await page.goto(url, { waitUntil: "networkidle" });
// Apply print styles first so print-only fonts (Roboto Condensed) get
// requested, then wait for every font to finish loading.
await page.emulateMedia({ media: "print" });
await page.evaluate(() => document.fonts.ready);

// Resolve the sidebar's computed color to sRGB via a canvas, so the margin
// bands always match whatever the CSS says (no hard-coded color to sync).
const [r, g, b] = await page.evaluate(() => {
  const color = getComputedStyle(document.querySelector(".aside")).backgroundColor;
  const ctx = document.createElement("canvas").getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  return [...ctx.getImageData(0, 0, 1, 1).data];
});

await page.pdf({
  path: OUT,
  format: "A4",
  preferCSSPageSize: true,
  printBackground: true,
});

await browser.close();
await server.close();

await paintMarginBands(OUT, rgb(r / 255, g / 255, b / 255));
console.log(`Wrote ${OUT}`);
