#!/usr/bin/env node
/**
 * image-variants.mjs  (runs in postbuild)
 *
 * Static export can't use Next's image optimiser, so every blog/solutions
 * image shipped at full size (~1,600 px, ~180 KB) even into a 64 px sidebar
 * thumbnail or a phone screen (SEO audit, Oct 2026). This writes smaller WebP
 * copies next to the export:
 *
 *   public/image/x.webp      → out/image/w320/x.webp, w640/…, w1024/…
 *   public/solutions/x.webp  → out/solutions/w320/x.webp, …
 *
 * lib/imageSrcSet.js points <img srcset> at these paths in production builds.
 * Variants are cached in node_modules/.cache/ojiva-img so rebuilds are fast.
 * The build fails if any variant can't be produced — a srcset pointing at a
 * missing file would show a broken image.
 */
import { readdirSync, statSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIRS = ["image", "solutions"];
const WIDTHS = [320, 640, 1024];
const CACHE = join(ROOT, "node_modules/.cache/ojiva-img");

let made = 0, cached = 0;
for (const dir of DIRS) {
  const src = join(ROOT, "public", dir);
  for (const name of readdirSync(src)) {
    if (!name.endsWith(".webp")) continue;
    const input = join(src, name);
    const mtime = statSync(input).mtimeMs;
    for (const w of WIDTHS) {
      const cacheFile = join(CACHE, dir, `w${w}`, name);
      if (!existsSync(cacheFile) || statSync(cacheFile).mtimeMs < mtime) {
        mkdirSync(dirname(cacheFile), { recursive: true });
        await sharp(input).resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(cacheFile);
        made++;
      } else cached++;
      const outFile = join(ROOT, "out", dir, `w${w}`, name);
      mkdirSync(dirname(outFile), { recursive: true });
      copyFileSync(cacheFile, outFile);
    }
  }
}
console.log(`image variants: ${made} generated, ${cached} from cache → out/{${DIRS.join(",")}}/w{${WIDTHS.join(",")}}/`);
