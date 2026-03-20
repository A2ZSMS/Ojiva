export const dynamic = 'force-static';

export async function GET() {
  const base = 'https://ojiva.ai';
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const pages = [
    { loc: `${base}/`,           priority: '1.0', changefreq: 'weekly',  lastmod: today },
    { loc: `${base}/platform/`,  priority: '0.9', changefreq: 'weekly',  lastmod: today },
    { loc: `${base}/sms/`,       priority: '0.9', changefreq: 'weekly',  lastmod: today },
    { loc: `${base}/whatsapp/`,  priority: '0.9', changefreq: 'weekly',  lastmod: today },
    { loc: `${base}/whatsapp-chatbot/`, priority: '0.9', changefreq: 'weekly', lastmod: today },
    { loc: `${base}/rcs/`,       priority: '0.9', changefreq: 'weekly',  lastmod: today },
    { loc: `${base}/voice/`,     priority: '0.9', changefreq: 'weekly',  lastmod: today },
    { loc: `${base}/book-demo/`, priority: '0.9', changefreq: 'monthly', lastmod: today },
    { loc: `${base}/about/`,     priority: '0.8', changefreq: 'monthly', lastmod: today },
    { loc: `${base}/support/`,   priority: '0.8', changefreq: 'monthly', lastmod: today },
    { loc: `${base}/contact/`,   priority: '0.7', changefreq: 'monthly', lastmod: today },
    { loc: `${base}/privacy/`,   priority: '0.5', changefreq: 'yearly',  lastmod: '2026-03-03' },
    { loc: `${base}/terms/`,     priority: '0.5', changefreq: 'yearly',  lastmod: '2026-03-03' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ loc, priority, changefreq, lastmod }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
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
