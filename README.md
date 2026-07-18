My CV.

The purpose of this repository is to create a resume that can be edited just by modifying one file (`/src/data/cv.ts`) and looks good in several formats:

- Large screen version (computer), resembling a DIN A4 paper, but with no height limitation.
- Mobile screen version, in this case it does not have to resemble a DIN A4 paper.
- Can be exported in a digital DIN A4 format (with links)
- Printed DIN A4 format (where interactive elements are not shown)

See PDF and web versions [here](https://github.com/carlostxrres/cv/blob/main/src/data/urls.ts).

## PDF generation

The PDF is **not committed to the repo** — it is a build artifact, regenerated on every deploy so it always matches the site.

### How it works

- `npm run build:pdf` builds the site and runs `scripts/generate-pdf.mjs`, which serves `dist/` with Vite preview, renders it in headless Chromium (Playwright) and writes `dist/carlos-torres-cv.pdf`.
- Pagination is plain CSS paged media, defined in `src/print.css`: `@page { size: A4; margin: 10mm 0 }` plus `break-inside: avoid` rules, so content flows over as many pages as needed.
- Fonts are self-hosted via `@fontsource` packages (imported in `src/main.ts`), so the PDF renders identically everywhere. The script switches to print media **before** waiting for `document.fonts.ready`, because print-only fonts (Roboto Condensed) are otherwise never downloaded — that was the cause of a serif-fallback bug.
- On push to `main`, `.github/workflows/deploy.yml` regenerates the PDF and deploys `dist/` to Netlify (needs `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` repo secrets; Netlify's own repo-linked builds are stopped). The "See as PDF" button links to the site-relative `/carlos-torres-cv.pdf`.

### The margin-band workaround

**Issue:** we want the green sidebar to bleed to the physical page edges *and* a 10mm top/bottom margin so content never touches the edge at page breaks. Chromium cannot do both: it never paints anything (canvas backgrounds, `@page` backgrounds, margin boxes) into the `@page` margin area, so those margins come out white. No pure-CSS solution exists; alternatives (Paged.js, table-header spacer hacks) are heavier or uglier.

**Solution:** the `@page` margin area is guaranteed to contain no content, so after rendering, `generate-pdf.mjs` paints the sidebar color into the top and bottom margin bands of every page with `pdf-lib` (`paintMarginBands()`). The color is read from the rendered page's own computed styles, so it never needs manual syncing. Note this polish only exists in the generated PDF — printing straight from the browser still shows white bands.

### Editing / maintenance

- Content changes (`src/data/cv.ts`): nothing to do — push to `main` and the PDF regenerates.
- If you change `@page` margins in `src/print.css`, update `MARGIN_MM` in `scripts/generate-pdf.mjs`.
- If you change the `.page` grid columns (`45%`) in `src/components/CvPage.vue`, update `ASIDE_RATIO` in the script and the `45%` stops of the print gradient in `src/print.css`.
- Colors (e.g. `--hue`) need no syncing — the script derives the band color at run time.
- Local preview: `npm run build:pdf` (first time: `npx playwright install chromium`), then open `dist/carlos-torres-cv.pdf`.
