const BASE_URL = 'https://ojiva.ai';
const SITE_NAME = 'Ojiva AI';
const DEFAULT_DESCRIPTION =
  'Ojiva AI is an advanced AI-powered business automation platform delivering intelligent communication systems, AI messaging, voice automation, and workflow orchestration for modern enterprises.';

// ── Global brand keywords (included on every page) ──────────────────────────
export const BRAND_KEYWORDS = [
  'Ojiva',
  'Ojiva AI',
  'ojiva.ai',
  'AI communication platform',
  'business automation platform',
  'AI messaging platform',
  'AI voice automation',
  'lead intelligence software',
  'workflow orchestration tool',
  'enterprise AI platform',
  'WhatsApp automation',
  'SMS automation for business',
  'AI-powered CRM integration',
  'conversational AI platform',
  'marketing automation AI',
  'sales automation software',
  'intelligent communication system',
  'AI business communication India',
  'Bengaluru AI startup',
];

/**
 * buildMetadata — generates Next.js metadata for any page.
 * Pass `keywords` (string[] of page-specific keywords) to extend the brand list.
 */
export function buildMetadata({ title, description, path, image, keywords = [] }) {
  const url = `${BASE_URL}${path || ''}`;
  const ogImage = image || `${BASE_URL}/og-image.jpg`;
  const pageDesc = description || DEFAULT_DESCRIPTION;
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Intelligent AI Communication Platform`;
  const allKeywords = [...new Set([...BRAND_KEYWORDS, ...keywords])].join(', ');

  return {
    title: fullTitle,
    description: pageDesc,
    keywords: allKeywords,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: pageDesc,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: pageDesc,
      images: [ogImage],
      creator: '@OjivaAI',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  };
}

// ── Organization JSON-LD ─────────────────────────────────────────────────────
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  alternateName: ['Ojiva', 'Ojiva AI Platform'],
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.svg`,
    width: 512,
    height: 512,
  },
  description: DEFAULT_DESCRIPTION,
  foundingDate: '2023',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '183, 2nd Floor, G Block, Opposite Reliance Trends, Sahakara Nagar Main Rd, Byatarayanapura',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560092',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-843-108-6185',
      contactType: 'customer support',
      availableLanguage: ['English', 'Hindi'],
      areaServed: ['IN', 'US', 'GB', 'AU'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: `${BASE_URL}/contact`,
      availableLanguage: ['English'],
    },
  ],
  sameAs: [
    'https://twitter.com/OjivaAI',
    'https://linkedin.com/company/ojiva-ai',
    'https://facebook.com/OjivaAI',
  ],
  knowsAbout: [
    'AI Communication',
    'Business Automation',
    'SMS Marketing Automation',
    'WhatsApp Business API',
    'Voice AI',
    'Lead Intelligence',
    'Workflow Orchestration',
    'Enterprise Software',
    'Conversational AI',
    'Marketing Technology',
  ],
};

// ── WebSite JSON-LD (enables Google Sitelinks Search Box) ───────────────────
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  alternateName: 'Ojiva',
  url: BASE_URL,
  description: DEFAULT_DESCRIPTION,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/support?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// ── SoftwareApplication JSON-LD (surfaces in software/product searches) ─────
export const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  operatingSystem: 'Web',
  applicationCategory: 'BusinessApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free demo available. Enterprise pricing on request.',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '312',
  },
  description: DEFAULT_DESCRIPTION,
  url: BASE_URL,
  author: {
    '@type': 'Organization',
    name: SITE_NAME,
  },
};

