export const dynamic = 'force-static';

export async function GET() {
  const base = 'https://ojiva.ai';
  const pages = [
    { loc: `${base}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${base}/platform`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${base}/about`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${base}/support`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${base}/contact`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${base}/privacy`, priority: '0.5', changefreq: 'yearly' },
    { loc: `${base}/terms`, priority: '0.5', changefreq: 'yearly' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ loc, priority, changefreq }) => `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
}
