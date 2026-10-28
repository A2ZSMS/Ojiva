/**
 * Builds out/api/ai-knowledge.txt — the reference text the AI chat assistant
 * (public/api/ai-chat.php) answers from.
 *
 * Runs after `next build` (postbuild), so it reads the finished HTML of the
 * site's own pages: whatever the website says, the assistant says. No copy is
 * duplicated by hand, and it can never drift from the live pages.
 *
 * Per page it keeps the <main> text (no nav/footer/scripts) plus FAQ answers
 * from the FAQPage JSON-LD, and drops lines already seen on earlier pages
 * (repeated CTAs, trust badges).
 */
import fs from 'node:fs';
import path from 'node:path';

const OUT = 'out';
const SITE = 'https://www.ojiva.ai';
const PER_PAGE_CHARS = 9000;
const PRICE = /₹|\bRs\.?\s?\d|\bINR\b|\bper (sms|message|msg|month|conversation|call|minute)\b|\/mo(nth)?\b|\bpaise\b/i;

// Most useful first: if the file is ever trimmed, the core pages stay.
const PAGES = [
  '/', '/pricing/', '/sms/', '/whatsapp/', '/rcs/', '/voice/', '/otp/', '/whatsapp-chatbot/',
  '/platform/', '/about/', '/solutions/',
  '/solutions/banking-finance/', '/solutions/ecommerce-retail/', '/solutions/healthcare/',
  '/solutions/education/', '/solutions/real-estate/', '/solutions/logistics-delivery/',
  '/solutions/insurance/', '/solutions/travel-hospitality/',
  '/support/', '/contact/', '/book-demo/',
];

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', mdash: '—', ndash: '–', hellip: '…', rarr: '→', middot: '·', bull: '•' };
const decode = (s) => s
  .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
  .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
  .replace(/&([a-z]+);/gi, (m, n) => ENTITIES[n.toLowerCase()] ?? m);

function pageText(html) {
  const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? html.match(/<body\b[\s\S]*<\/body>/i)?.[0] ?? '';
  return decode(main
    .replace(/<(script|style|noscript|svg|nav|footer|template)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<(br|\/p|\/h[1-6]|\/li|\/div|\/section|\/tr|\/dt|\/dd|\/a|\/button)\b[^>]*>/gi, '\n')
    .replace(/<li\b[^>]*>/gi, '\n• ')
    .replace(/<[^>]+>/g, ' '))
    .split('\n')
    .map((l) => l.replace(/\s+/g, ' ').trim())
    .filter((l) => l && l !== '•' && !/^[\s•→✓★·|–—-]+$/.test(l))
    // Lines with a clock time come from chat/phone mockups, not real copy
    .filter((l) => !/\b\d{1,2}:\d{2}\s?(AM|PM)\b/i.test(l))
    // Prices are never shared by the assistant — a sales agent quotes them
    .filter((l) => !PRICE.test(l));
}

function faqs(html) {
  const out = [];
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(json);
      for (const node of [data, ...(data['@graph'] || [])]) {
        if (node['@type'] !== 'FAQPage') continue;
        for (const q of node.mainEntity || []) {
          const answer = decode(String(q.acceptedAnswer?.text || '')).replace(/<[^>]+>/g, '');
          if (PRICE.test(answer) || PRICE.test(q.name)) continue;
          out.push(`Q: ${q.name}`, `A: ${answer}`);
        }
      }
    } catch { /* not JSON we care about */ }
  }
  return out;
}

const seen = new Set();
const sections = [];
for (const route of PAGES) {
  const file = path.join(OUT, route, 'index.html');
  if (!fs.existsSync(file)) { console.warn(`ai-knowledge: skipped ${route} (not built)`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? route);
  const lines = [];
  for (const line of [...pageText(html), ...faqs(html)]) {
    const key = line.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    lines.push(line);
  }
  let body = lines.join('\n');
  if (body.length > PER_PAGE_CHARS) body = body.slice(0, body.lastIndexOf('\n', PER_PAGE_CHARS));
  sections.push(`=== PAGE: ${title}\nURL: ${SITE}${route}\n${body}`);
}

// Blog posts: titles + links only, so the assistant can point to a guide.
const blogs = JSON.parse(fs.readFileSync('public/data/blog.json', 'utf8'));
const posts = (Array.isArray(blogs) ? blogs : blogs.posts || blogs.blogs || [])
  .filter((p) => p?.slug && p?.title)
  .map((p) => `• ${p.title} — ${SITE}/blogs/${p.slug}/`);
if (posts.length) sections.push(`=== BLOG GUIDES\n${posts.join('\n')}`);

const text = sections.join('\n\n');
fs.mkdirSync(path.join(OUT, 'api'), { recursive: true });
fs.writeFileSync(path.join(OUT, 'api', 'ai-knowledge.txt'), text);
console.log(`ai-knowledge: ${sections.length} sections, ${(text.length / 1024).toFixed(0)} KB → out/api/ai-knowledge.txt`);
