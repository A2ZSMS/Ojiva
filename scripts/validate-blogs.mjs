#!/usr/bin/env node
/**
 * validate-blogs.mjs
 *
 * Automatic guardrail against the two ways a new blog post has actually
 * broken in production:
 *
 *   1. A `category` string that doesn't exactly match a key in
 *      lib/blogCategories.js — silently drops the post's accent colour
 *      to the default and makes it match zero other posts in the
 *      Related Blogs sidebar (it filters by exact category equality).
 *
 *   2. An `image` path (cover, or an inline block image inside the
 *      post's own content JSON) that doesn't exist in public/ — a
 *      broken image in the blog card, the OG/Twitter share preview,
 *      or the article body.
 *
 * Runs automatically before every `npm run build` (see package.json's
 * "prebuild" script). Run it by hand any time with:
 *
 *   npm run validate:blogs
 *
 * Exits non-zero (failing the build) if anything is wrong.
 */

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];

// ── ANSI colours (only when TTY) ─────────────────────────
const c = process.stdout.isTTY
  ? {
      red: (s) => `\x1b[31m${s}\x1b[0m`,
      green: (s) => `\x1b[32m${s}\x1b[0m`,
      bold: (s) => `\x1b[1m${s}\x1b[0m`,
      grey: (s) => `\x1b[90m${s}\x1b[0m`,
    }
  : { red: (s) => s, green: (s) => s, bold: (s) => s, grey: (s) => s };

// ── Canonical category list — extracted from lib/blogCategories.js so ──
// there's exactly one place (that file) to add a new category to.
const categoriesSrc = readFileSync(resolve(ROOT, "lib/blogCategories.js"), "utf8");
const validCategories = [...categoriesSrc.matchAll(/^\s*'([^']+)':\s*'#/gm)].map((m) => m[1]);

// ── Data files ────────────────────────────────────────────
const blogs = JSON.parse(readFileSync(resolve(ROOT, "public/data/blog.json"), "utf8"));
const metadata = JSON.parse(readFileSync(resolve(ROOT, "public/data/metadata.json"), "utf8"));
const metaBySlug = new Map(metadata.map((m) => [m.slug, m]));

const imageExists = (imgPath) => imgPath && existsSync(resolve(ROOT, "public", imgPath.replace(/^\//, "")));

// ── Walk public/data/blogs/**/*.json to check inline body images ────────
function walkJsonFiles(dir) {
  let out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out = out.concat(walkJsonFiles(full));
    else if (entry.endsWith(".json")) out.push(full);
  }
  return out;
}
const contentFiles = walkJsonFiles(resolve(ROOT, "public/data/blogs"));
const contentBySlug = new Map();
for (const file of contentFiles) {
  const content = JSON.parse(readFileSync(file, "utf8"));
  if (content.slug) contentBySlug.set(content.slug, { file, content });
}

// ── Validate each published blog ─────────────────────────
for (const blog of blogs) {
  const tag = `"${blog.title}" (${blog.slug})`;

  if (!validCategories.includes(blog.category)) {
    errors.push(
      `${tag}\n    category "${blog.category}" is not in lib/blogCategories.js — ` +
        `valid values: ${validCategories.join(", ")}`,
    );
  }

  if (!imageExists(blog.image)) {
    errors.push(`${tag}\n    cover image "${blog.image}" not found in public/`);
  }

  const metaEntry = metaBySlug.get(blog.slug);
  if (!metaEntry) {
    errors.push(`${tag}\n    missing matching entry in metadata.json`);
  } else if (metaEntry.category !== blog.category) {
    errors.push(
      `${tag}\n    category mismatch between blog.json ("${blog.category}") and metadata.json ("${metaEntry.category}")`,
    );
  } else if (metaEntry.image !== blog.image) {
    errors.push(
      `${tag}\n    image mismatch between blog.json ("${blog.image}") and metadata.json ("${metaEntry.image}")`,
    );
  }

  const entry = contentBySlug.get(blog.slug);
  if (!entry) {
    errors.push(`${tag}\n    no content JSON found under public/data/blogs/ with this slug`);
    continue;
  }

  for (const section of entry.content.sections || []) {
    for (const block of section.blocks || []) {
      if (block.type === "image" && !imageExists(block.src)) {
        errors.push(
          `${tag}\n    inline image "${block.src}" (section "${section.id}") not found in public/`,
        );
      }
    }
  }
}

// ── Report ────────────────────────────────────────────────
console.log("");
if (errors.length === 0) {
  console.log(c.green(c.bold(`✓ All ${blogs.length} blogs passed validation.`)));
  process.exit(0);
}

console.log(c.red(c.bold(`✗ ${errors.length} problem${errors.length === 1 ? "" : "s"} found across ${blogs.length} blogs:`)));
console.log("");
for (const err of errors) {
  console.log(c.red("  • ") + err);
  console.log("");
}
process.exit(1);
