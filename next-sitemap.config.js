/** @type {import('next-sitemap').IConfig} */
const blogPosts = require('./public/data/blog.json');

// ── Per-URL rules (path-based, longest/most-specific match wins) ────────────
// Rules with exact: true only match the exact path; exact: false = prefix match.
// Entries are tested most-specific first, so order within the array matters only
// for same-length ties (which shouldn't occur with this config).
const PATH_RULES = [
  // Homepage — 1.0 / daily
  { path: '/',                     exact: true,  priority: 1.0, changefreq: 'daily' },

  // Core service pages — 0.9 / weekly
  { path: '/sms/',                  exact: true,  priority: 0.9, changefreq: 'weekly' },
  { path: '/whatsapp/',             exact: true,  priority: 0.9, changefreq: 'weekly' },
  { path: '/whatsapp-chatbot/',     exact: true,  priority: 0.9, changefreq: 'weekly' },
  { path: '/rcs/',                  exact: true,  priority: 0.9, changefreq: 'weekly' },
  { path: '/voice/',                exact: true,  priority: 0.9, changefreq: 'weekly' },
  { path: '/pricing/',              exact: true,  priority: 0.9, changefreq: 'weekly' },
  { path: '/otp/',                  exact: true,  priority: 0.9, changefreq: 'weekly' },
  { path: '/platform/',             exact: true,  priority: 0.9, changefreq: 'weekly' },

  // SEO landing pages — high-volume keyword targeting — 0.9 / weekly
  { path: '/bulk-sms/',             exact: true,  priority: 0.9, changefreq: 'weekly' },
  { path: '/rcs-messaging/',        exact: true,  priority: 0.9, changefreq: 'weekly' },

  // Solutions hub — 0.8 / weekly
  { path: '/solutions/',            exact: true,  priority: 0.8, changefreq: 'weekly' },

  // Individual industry solution pages — 0.8 / monthly
  { path: '/solutions/',            exact: false, priority: 0.8, changefreq: 'monthly' },

  // Blog listing — 0.7 / weekly
  { path: '/blogs/',                exact: true,  priority: 0.7, changefreq: 'weekly' },

  // Individual blog posts — 0.7 / monthly
  { path: '/blogs/',                exact: false, priority: 0.7, changefreq: 'monthly' },

  // Conversion funnel — 0.8 / monthly
  { path: '/book-demo/',            exact: true,  priority: 0.8, changefreq: 'monthly' },

  // Company — 0.6 / monthly
  { path: '/about/',                exact: true,  priority: 0.6, changefreq: 'monthly' },
  { path: '/contact/',              exact: true,  priority: 0.6, changefreq: 'monthly' },
  { path: '/support/',              exact: true,  priority: 0.6, changefreq: 'monthly' },

  // Legal — 0.5 / yearly
  { path: '/privacy/',              exact: true,  priority: 0.5, changefreq: 'yearly' },
  { path: '/terms/',                exact: true,  priority: 0.5, changefreq: 'yearly' },
];

function getRuleForPath(loc) {
  // Normalise: ensure trailing slash
  const p = loc.endsWith('/') ? loc : `${loc}/`;

  // Exact matches take priority
  const exactMatch = PATH_RULES.find(r => r.exact && p === r.path);
  if (exactMatch) return exactMatch;

  // Longest prefix match among non-exact rules
  const prefixMatches = PATH_RULES.filter(r => !r.exact && p.startsWith(r.path));
  if (prefixMatches.length) {
    return prefixMatches.reduce((a, b) => a.path.length >= b.path.length ? a : b);
  }
  return null;
}

// Paths to completely skip from the sitemap
const EXCLUDED_PATH_PREFIXES = [
  '/whatsapp-api-service',
  '/robots.txt',
];

module.exports = {
  siteUrl: 'https://www.ojiva.ai',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  // Default priority/changefreq — overridden by transform per URL
  priority: 0.7,
  changefreq: 'weekly',

  // Exclude patterns (these are paths relative to siteUrl)
  exclude: [
    '/404',
    '/admin/*',
    '/whatsapp-api-service',
    '/whatsapp-api-service/*',
    '/robots.txt',
  ],

  // transform is called for EVERY URL next-sitemap discovers
  transform: async (config, loc) => {
    // Normalise path
    const p = loc.endsWith('/') ? loc : `${loc}/`;

    // Skip excluded paths
    if (EXCLUDED_PATH_PREFIXES.some(ex => p.startsWith(ex) || p === ex + '/')) {
      return null;
    }
    // Skip the robots.txt route from the sitemap
    if (p === '/robots.txt/') return null;

    const rule = getRuleForPath(p);
    const priority = rule ? rule.priority : 0.7;
    const changefreq = rule ? rule.changefreq : 'weekly';

    // Inject real lastmod for blog posts
    let lastmod;
    if (p.startsWith('/blogs/') && p !== '/blogs/') {
      const slug = p.replace('/blogs/', '').replace(/\/$/, '');
      const post = blogPosts.find(bp => bp.slug === slug);
      if (post && post.date) lastmod = post.date;
    }

    return {
      loc: p,
      changefreq,
      priority,
      lastmod: lastmod || (config.autoLastmod ? new Date().toISOString() : undefined),
      alternateRefs: config.alternateRefs || [],
    };
  },

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      {
        userAgent: '*',
        disallow: [
          '/404',
          '/admin/',
          // Ad / pay-per-click landing pages — keep out of organic index
          '/whatsapp-api-service/',
        ],
      },
    ],
    additionalSitemaps: [
      'https://www.ojiva.ai/sitemap.xml',
    ],
  },
};
