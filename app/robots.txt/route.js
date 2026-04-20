export const dynamic = 'force-static';

export async function GET() {
  const content = `# Ojiva AI — https://www.ojiva.ai
# India's #1 AI Communication Platform

User-agent: *
Allow: /
Disallow: /_next/
Disallow: /api/

# Sitemaps
Sitemap: https://www.ojiva.ai/sitemap.xml

# Crawl-delay (optional, for polite bots)
Crawl-delay: 1

# Google-specific
User-agent: Googlebot
Allow: /
Allow: /*.js
Allow: /*.css
Disallow: /_next/static/media/

# Bing-specific
User-agent: Bingbot
Allow: /
Crawl-delay: 1
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
