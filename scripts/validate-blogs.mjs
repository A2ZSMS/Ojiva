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
const registeredSlugs = new Set(blogs.map((b) => b.slug));
for (const file of contentFiles) {
  const content = JSON.parse(readFileSync(file, "utf8"));
  if (!content.slug) continue;
  const rel = file.replace(ROOT + "/", "");
  const dup = contentBySlug.get(content.slug);
  if (dup) {
    // Two content files claiming one slug means one of them is silently
    // unreachable — this is exactly how a content/slug swap hid from the
    // validator in Sep 2026 (Aug24.json vs whatsapp-flows-guide.json).
    errors.push(
      `duplicate internal slug "${content.slug}" in two content files\n` +
        `    ${dup.file.replace(ROOT + "/", "")}\n    ${rel}`,
    );
    continue;
  }
  contentBySlug.set(content.slug, { file, content });
  if (!registeredSlugs.has(content.slug)) {
    // Warning only (not a build failure) so unpublished drafts are allowed —
    // but make it loud, because an orphaned file is usually a mistake.
    console.warn(
      c.grey(`  ⚠ ${rel} has slug "${content.slug}" but no entry in blog.json — it is not rendered anywhere.`),
    );
  }
}

// ── Alt-text reuse across DIFFERENT image files ──────────
// One alt string on two or more distinct images is the copy-paste
// fingerprint that left 32 images mislabelled in Sep 2026 (voice images
// captioned "RCS", DLT images captioned "WhatsApp pricing"). The same
// image file used in two posts legitimately shares one alt — that's fine.
// Warn only, so drafts and quick fixes never block a build.
{
  const srcsByAlt = new Map();
  for (const { file, content } of contentBySlug.values()) {
    for (const section of content.sections || []) {
      for (const block of section.blocks || []) {
        if (block.type !== "image" || !block.alt) continue;
        const key = block.alt.trim().toLowerCase();
        if (!srcsByAlt.has(key)) srcsByAlt.set(key, new Map());
        srcsByAlt.get(key).set(block.src, file.replace(ROOT + "/", ""));
      }
    }
  }
  for (const [alt, srcs] of srcsByAlt) {
    if (srcs.size < 2) continue;
    console.warn(
      c.grey(`  ⚠ alt text reused on ${srcs.size} different images — each image should describe itself:\n` +
        `      "${alt.slice(0, 70)}${alt.length > 70 ? "…" : ""}"\n` +
        [...srcs].map(([src, f]) => `      ${src}  (${f})`).join("\n")),
    );
  }
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

// ── Internal links inside post content ───────────────────
// A link to a /blogs/ slug that isn't registered is a 404 for readers and a
// leak of link equity — 9 of these shipped in Sep 2026 before anyone noticed.
// Error for dead /blogs/ links; warn for other internal paths with no route.
{
  const appRoutes = new Set();
  (function walk(dir, base) {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (!statSync(full).isDirectory()) continue;
      if (entry.startsWith("(") || entry.startsWith("[") || entry.startsWith("_")) continue;
      const route = `${base}/${entry}`;
      if (existsSync(join(full, "page.js"))) appRoutes.add(`${route}/`);
      walk(full, route);
    }
  })(resolve(ROOT, "app"), "");
  for (const { file, content } of contentBySlug.values()) {
    if (!registeredSlugs.has(content.slug)) continue;
    const raw = readFileSync(file, "utf8");
    const hrefs = new Set();
    for (const m of raw.matchAll(/href(?:\\)?"\s*:\s*"([^"]+)"|href=\\"([^"\\]+)\\"/g)) hrefs.add(m[1] || m[2]);
    for (let href of hrefs) {
      href = href.replace(/^https?:\/\/(www\.)?ojiva\.ai/, "");
      if (!href.startsWith("/") || href.startsWith("//")) continue;
      const path = href.split("#")[0].split("?")[0];
      if (!path || /\.[a-z0-9]+$/i.test(path)) continue;
      const norm = path.endsWith("/") ? path : `${path}/`;
      const rel = file.replace(ROOT + "/", "");
      const blog = norm.match(/^\/blogs\/([^/]+)\/$/);
      if (blog) {
        if (!registeredSlugs.has(blog[1])) {
          errors.push(`${rel}\n    links to "${path}" — no blog post has slug "${blog[1]}"`);
        }
      } else if (norm !== "/" && norm !== "/blogs/" && !appRoutes.has(norm)) {
        console.warn(c.grey(`  ⚠ ${rel} links to "${path}" — no page exists at that path.`));
      }
    }
  }
}

// ── Unbalanced HTML inside post content ──────────────────
// An unclosed tag (e.g. "<em>By …" with no </em>) makes the browser carry the
// tag into every later element; React's tree then no longer matches and the
// whole post re-renders client-side (hydration error #418, Oct 2026).
{
  const TAGS = ["em", "strong", "b", "i", "u", "a", "span", "code", "pre", "p", "div", "ul", "ol", "li", "table", "tr", "td", "th", "blockquote", "h2", "h3", "h4"];
  for (const { file, content } of contentBySlug.values()) {
    if (!registeredSlugs.has(content.slug)) continue;
    const rel = file.replace(ROOT + "/", "");
    (function scan(node, path) {
      if (typeof node === "string") {
        if (!node.includes("<")) return;
        for (const t of TAGS) {
          const open = (node.match(new RegExp(`<${t}(\\s[^>]*)?>`, "gi")) || []).length;
          const close = (node.match(new RegExp(`</${t}>`, "gi")) || []).length;
          if (open !== close) {
            errors.push(`${rel}\n    unbalanced <${t}> (${open} open, ${close} close) at ${path}: "${node.slice(0, 70)}…"`);
          }
        }
      } else if (Array.isArray(node)) node.forEach((v, i) => scan(v, `${path}[${i}]`));
      else if (node && typeof node === "object") for (const [k, v] of Object.entries(node)) scan(v, `${path}.${k}`);
    })(content, "");
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
