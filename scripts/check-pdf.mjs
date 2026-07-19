import { readFile } from "node:fs/promises";
import { PDFDocument } from "pdf-lib";

const EXPECTED_PDFS = [
  "dist/carlos-torres-cv.pdf",
  "dist/carlos-torres-cv-en.pdf",
  "dist/carlos-torres-cv-ca.pdf",
  "dist/carlos-torres-cv-es.pdf",
];
const MIN_BYTES = 50_000;
const MAX_PAGES = 4;

let failed = false;

for (const path of EXPECTED_PDFS) {
  try {
    const bytes = await readFile(path);
    const doc = await PDFDocument.load(bytes);
    const pages = doc.getPageCount();
    const problems = [];
    if (bytes.length < MIN_BYTES) problems.push(`only ${bytes.length} bytes`);
    if (pages < 1 || pages > MAX_PAGES) problems.push(`${pages} pages`);
    if (problems.length) {
      console.error(`FAIL ${path}: ${problems.join(", ")}`);
      failed = true;
    } else {
      console.log(`OK   ${path}: ${pages} pages, ${bytes.length} bytes`);
    }
  } catch (error) {
    console.error(`FAIL ${path}: ${error.message}`);
    failed = true;
  }
}

process.exit(failed ? 1 : 0);
