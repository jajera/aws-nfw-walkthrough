#!/usr/bin/env node
/**
 * Render the committed PNG site assets from their SVG sources.
 *
 *   public/og.svg      -> public/og.png              (1200x630 social card)
 *   public/favicon.svg -> public/favicon-32.png      (legacy/crawler fallback)
 *                      -> public/apple-touch-icon.png (180x180, opaque)
 *
 * SVGs are rasterised at 2x then downsampled so text and hairlines stay clean.
 * Run after editing either SVG:  npm run images
 */

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
);

const BRAND_BG = "#071014";

/** Rasterise an SVG at `scale`x, then resize down to the target box. */
async function render(svg, { width, height, scale = 2 }) {
  return sharp(svg, { density: 96 * scale })
    .resize(width, height, { fit: "contain", kernel: "lanczos3" })
    .png({ compressionLevel: 9 });
}

const og = await readFile(path.join(publicDir, "og.svg"));
const favicon = await readFile(path.join(publicDir, "favicon.svg"));

const outputs = [
  ["og.png", await (await render(og, { width: 1200, height: 630 })).toBuffer()],
  [
    "favicon-32.png",
    await (await render(favicon, { width: 32, height: 32, scale: 8 })).toBuffer(),
  ],
  [
    // iOS ignores transparency and composites on black, so flatten to brand bg.
    "apple-touch-icon.png",
    await (await render(favicon, { width: 180, height: 180, scale: 4 }))
      .flatten({ background: BRAND_BG })
      .toBuffer(),
  ],
];

for (const [name, buffer] of outputs) {
  const file = path.join(publicDir, name);
  await writeFile(file, buffer);
  const { width, height } = await sharp(buffer).metadata();
  console.log(`${name.padEnd(22)} ${width}x${height}  ${buffer.length} bytes`);
}
