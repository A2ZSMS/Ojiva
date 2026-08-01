#!/usr/bin/env node
/**
 * list-blogs.mjs
 *
 * Prints every blog from public/data/blog.json grouped by month,
 * sorted newest first. Handy for a quick "what did we publish and when"
 * overview without opening the JSON.
 *
 * Usage:
 *   node scripts/list-blogs.mjs                   # all blogs, grouped by month
 *   node scripts/list-blogs.mjs --category="RCS"  # filter by category substring
 *   node scripts/list-blogs.mjs --year=2026       # only that year
 *   node scripts/list-blogs.mjs --month=2026-07   # only that month
 *   node scripts/list-blogs.mjs --count           # just totals per month
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const ROOT   = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const BLOGS  = JSON.parse(readFileSync(resolve(ROOT, "public/data/blog.json"), "utf8"));
const SITE   = "https://www.ojiva.ai";

// ── Args ─────────────────────────────────────────────────
const args = Object.fromEntries(
  process.argv.slice(2).flatMap((a) => {
    if (a === "--count") return [["count", true]];
    const m = a.match(/^--([a-z]+)=?(.*)$/);
    return m ? [[m[1], m[2] || true]] : [];
  }),
);

// ── ANSI colours (only when TTY) ─────────────────────────
const c = process.stdout.isTTY
  ? {
      dim:    (s) => `\x1b[2m${s}\x1b[0m`,
      bold:   (s) => `\x1b[1m${s}\x1b[0m`,
      cyan:   (s) => `\x1b[36m${s}\x1b[0m`,
      yellow: (s) => `\x1b[33m${s}\x1b[0m`,
      grey:   (s) => `\x1b[90m${s}\x1b[0m`,
    }
  : { dim: (s) => s, bold: (s) => s, cyan: (s) => s, yellow: (s) => s, grey: (s) => s };

// ── Filter ───────────────────────────────────────────────
let blogs = [...BLOGS].filter((b) => b.date);
if (args.category) blogs = blogs.filter((b) => b.category?.toLowerCase().includes(String(args.category).toLowerCase()));
if (args.year)     blogs = blogs.filter((b) => b.date.startsWith(String(args.year)));
if (args.month)    blogs = blogs.filter((b) => b.date.startsWith(String(args.month)));

// ── Group by year-month, newest first ────────────────────
const byMonth = new Map();
for (const b of blogs) {
  const ym = b.date.slice(0, 7);
  if (!byMonth.has(ym)) byMonth.set(ym, []);
  byMonth.get(ym).push(b);
}
const months = [...byMonth.keys()].sort().reverse();

// ── Print ────────────────────────────────────────────────
const MONTHS = ["", "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];

console.log("");
console.log(c.bold("═══ Ojiva AI blogs ═══"));
console.log(c.grey(`${blogs.length} blog${blogs.length === 1 ? "" : "s"} total · newest first`));
console.log("");

for (const ym of months) {
  const [y, m] = ym.split("-");
  const posts = byMonth.get(ym).sort((a, b) => (a.date < b.date ? 1 : -1));
  console.log(c.bold(c.cyan(`📅 ${MONTHS[+m]} ${y}`)) + c.grey(`  (${posts.length})`));
  if (args.count) continue;
  for (const b of posts) {
    const day = b.date.slice(8, 10);
    const cat = (b.category || "—").padEnd(18);
    console.log(`   ${c.yellow(day)}  ${c.grey(cat)}  ${b.title}`);
    console.log(`         ${c.dim(`${SITE}/blogs/${b.slug}/`)}`);
  }
  console.log("");
}

if (blogs.length === 0) {
  console.log(c.dim("(no blogs matched the filter)"));
}
