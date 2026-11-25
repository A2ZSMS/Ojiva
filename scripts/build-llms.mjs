/**
 * Builds out/llms.txt — a plain-text map of the site for AI assistants and
 * answer engines (https://llmstxt.org).
 *
 * Runs after `next build` (postbuild). Page titles and descriptions are read
 * from the finished HTML and blog entries from metadata.json, so the file
 * always matches the live pages and never needs editing by hand.
 */
import fs from 'node:fs';
import path from 'node:path';

const OUT = 'out';
const SITE = 'https://www.ojiva.ai';

const GROUPS = [
  ['Products', ['/sms/', '/whatsapp/', '/rcs/', '/voice/', '/otp/', '/whatsapp-chatbot/', '/platform/']],
  ['Industry solutions', [
    '/solutions/', '/solutions/banking-finance/', '/solutions/ecommerce-retail/', '/solutions/healthcare/',
    '/solutions/education/', '/solutions/real-estate/', '/solutions/logistics-delivery/',
    '/solutions/insurance/', '/solutions/travel-hospitality/',
  ]],
  ['Company', ['/about/', '/contact/', '/book-demo/', '/support/', '/blogs/']],
];

const decode = (s) => s
  .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
  .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");

function pageMeta(route) {
  const file = path.join(OUT, route, 'index.html');
  if (!fs.existsSync(file)) { console.warn(`llms: skipped ${route} (not built)`); return null; }
  const html = fs.readFileSync(file, 'utf8');
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? route);
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  return { title, description };
}

const line = (title, url, description) => `- [${title}](${url})${description ? `: ${description}` : ''}`;

const home = pageMeta('/');
const lines = ['# Ojiva AI', ''];
if (home?.description) lines.push(`> ${home.description}`, '');

for (const [heading, routes] of GROUPS) {
  const items = routes.map((r) => [r, pageMeta(r)]).filter(([, m]) => m);
  if (!items.length) continue;
  lines.push(`## ${heading}`, '');
  for (const [route, m] of items) lines.push(line(m.title, `${SITE}${route}`, m.description));
  lines.push('');
}

const posts = JSON.parse(fs.readFileSync('public/data/metadata.json', 'utf8'))
  .filter((p) => p?.slug && p?.title)
  .sort((a, b) => String(b.date).localeCompare(String(a.date)));
if (posts.length) {
  lines.push('## Guides', '');
  for (const p of posts) lines.push(line(p.title, `${SITE}/blogs/${p.slug}/`, p.description));
  lines.push('');
}

fs.writeFileSync(path.join(OUT, 'llms.txt'), lines.join('\n'));
console.log(`llms: ${lines.filter((l) => l.startsWith('- ')).length} links → out/llms.txt`);
