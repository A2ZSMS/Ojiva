#!/usr/bin/env node
/**
 * subset-icons.mjs
 *
 * Scans the codebase for `bi-*` icon class usages and rewrites
 * public/icons/bootstrap-icons.min.css to contain ONLY:
 *   1. The @font-face rule.
 *   2. The base `.bi::before, [class*=" bi-"]::before, [class^=bi-]::before` rule
 *      (shared font-family / smoothing setup).
 *   3. `.bi-NAME::before { content: "\fXXX" }` rules for the icons actually used.
 *
 * The original CSS is preserved as `bootstrap-icons.min.css.original` (backup)
 * the first time this script runs.
 *
 * The woff2 font file is NOT modified — dropping only the CSS rules is enough
 * to prevent the browser from ever asking for unused glyphs.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const CSS_PATH = path.join(ROOT, "public/icons/bootstrap-icons.min.css");
const BACKUP_PATH = CSS_PATH + ".original";

// Directories to scan for `bi-*` usages.
const SCAN_DIRS = ["components", "app", "lib", "public/data"];

// File extensions considered as source.
const CODE_EXTS = new Set([".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs"]);
const DATA_EXTS = new Set([".json"]);

// Regex: `bi-` followed by lowercase letter, then lowercase/digit/hyphen.
// We deliberately require the class prefix `bi-` (bootstrap icons naming).
const BI_RE = /bi-[a-z][a-z0-9-]*/g;

// Names that are NOT icons but might match the pattern (e.g. `bi-directional`
// in prose or a CSS variable). We prune anything that isn't in the CSS map
// after parsing, so no explicit blocklist needed.

async function walk(dir, acc = []) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code === "ENOENT") return acc;
    throw err;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
      await walk(full, acc);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (CODE_EXTS.has(ext) || DATA_EXTS.has(ext)) acc.push(full);
    }
  }
  return acc;
}

async function collectUsedIcons() {
  const used = new Set();
  const files = [];
  for (const dir of SCAN_DIRS) {
    await walk(path.join(ROOT, dir), files);
  }
  for (const file of files) {
    const text = await fs.readFile(file, "utf8");
    const matches = text.match(BI_RE);
    if (!matches) continue;
    for (const m of matches) used.add(m);
  }
  return { used, filesScanned: files.length };
}

/**
 * Parse the bootstrap-icons.min.css into:
 *   - fontFace: the `@font-face { ... }` rule (string, with braces).
 *   - baseRule: the `.bi::before, [class*=" bi-"]::before, [class^=bi-]::before { ... }` rule.
 *   - iconRules: Map<iconName, ruleString>  e.g. "bi-alarm-fill" -> `.bi-alarm-fill::before{content:"\f101"}`
 *   - header: leading comment/banner to preserve.
 */
function parseCss(css) {
  const result = { header: "", fontFace: "", baseRule: "", iconRules: new Map() };

  // Extract leading comment block (banner).
  const commentMatch = css.match(/^\s*\/\*[\s\S]*?\*\//);
  if (commentMatch) {
    result.header = commentMatch[0];
  }

  // @font-face rule.
  const fontFaceMatch = css.match(/@font-face\s*\{[^}]*\}/);
  if (fontFaceMatch) result.fontFace = fontFaceMatch[0];

  // Base rule (matches the multi-selector rule that sets font-family etc.).
  // The selectors include `.bi::before` and `[class*=" bi-"]::before` etc.
  const baseRuleMatch = css.match(
    /\.bi::before[^{]*\{[^}]*\}/
  );
  if (baseRuleMatch) result.baseRule = baseRuleMatch[0];

  // Individual icon rules: `.bi-NAME::before{content:"\fXXX"}`
  const iconRe = /\.(bi-[a-z0-9-]+)::before\s*\{[^}]*\}/g;
  let m;
  while ((m = iconRe.exec(css)) !== null) {
    result.iconRules.set(m[1], m[0]);
  }

  return result;
}

async function main() {
  const originalRaw = await fs.readFile(CSS_PATH, "utf8");
  const originalSize = Buffer.byteLength(originalRaw, "utf8");

  // Backup once.
  try {
    await fs.access(BACKUP_PATH);
  } catch {
    await fs.writeFile(BACKUP_PATH, originalRaw);
    console.log(`Backup created: ${path.relative(ROOT, BACKUP_PATH)}`);
  }

  // Always parse the ORIGINAL (backup) so re-running the script never
  // subsets an already-subsetted file (data loss risk).
  const sourceRaw = await fs.readFile(BACKUP_PATH, "utf8");
  const parsed = parseCss(sourceRaw);

  if (!parsed.fontFace) throw new Error("Could not find @font-face rule in source CSS.");
  if (!parsed.baseRule) throw new Error("Could not find base .bi::before rule in source CSS.");
  if (parsed.iconRules.size === 0) throw new Error("Could not parse any .bi-* rules in source CSS.");

  const { used, filesScanned } = await collectUsedIcons();

  // Intersect used names with the icon-rule map (drops non-icon `bi-*` false positives).
  const kept = new Map();
  const missing = [];
  for (const name of used) {
    const rule = parsed.iconRules.get(name);
    if (rule) kept.set(name, rule);
    else missing.push(name);
  }

  // Sort kept by name for deterministic output.
  const sortedNames = [...kept.keys()].sort();

  const out = [
    parsed.header,
    parsed.fontFace,
    parsed.baseRule,
    ...sortedNames.map((n) => kept.get(n)),
  ]
    .filter(Boolean)
    .join("");

  await fs.writeFile(CSS_PATH, out);

  const newSize = Buffer.byteLength(out, "utf8");

  const format = (n) => (n / 1024).toFixed(2) + " KB";
  console.log("");
  console.log("bootstrap-icons subset");
  console.log("──────────────────────");
  console.log(`Source files scanned : ${filesScanned}`);
  console.log(`Used bi-* names found: ${used.size}`);
  console.log(`Non-icon matches     : ${missing.length}${missing.length ? " (" + missing.slice(0, 6).join(", ") + (missing.length > 6 ? ", …" : "") + ")" : ""}`);
  console.log(`Icons kept in CSS    : ${kept.size} / ${parsed.iconRules.size}`);
  console.log(`Original size        : ${format(originalSize)}`);
  console.log(`New size             : ${format(newSize)}`);
  console.log(`Reduction            : ${(100 * (1 - newSize / originalSize)).toFixed(1)}%`);
  console.log("");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
