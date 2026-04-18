const BASE_URL = 'https://ojiva.ai';
const SITE_NAME = 'Ojiva AI';
const DEFAULT_DESCRIPTION =
  'Ojiva AI is India\'s leading AI-powered business communication platform — delivering Bulk SMS, WhatsApp Business API, RCS Messaging, and AI Voice Call automation at enterprise scale.';

// ── Global brand keywords ────────────────────────────────────────────────────
export const BRAND_KEYWORDS = [
  // Brand
  'Ojiva',
  'Ojiva AI',
  'ojiva.ai',
  'Ojiva AI platform',
  'Ojiva SMS',
  'Ojiva WhatsApp',
  'Ojiva Voice',
  'Ojiva RCS',

  // Core services — SMS
  'bulk SMS platform India',
  'bulk SMS service provider',
  'SMS marketing automation',
  'transactional SMS gateway',
  'promotional SMS service',
  'enterprise SMS API',
  'SMS campaign software',
  'automated SMS for business',
  'OTP SMS service India',
  'best bulk SMS provider India',

  // Core services — WhatsApp
  'WhatsApp Business API',
  'WhatsApp Business API provider India',
  'WhatsApp automation platform',
  'WhatsApp bulk messaging',
  'WhatsApp chatbot for business',
  'WhatsApp marketing tool',
  'WhatsApp campaign automation',
  'WhatsApp API integration',
  'BSP WhatsApp India',
  'WhatsApp ecommerce automation',

  // Core services — RCS
  'RCS messaging platform',
  'RCS Business Messaging India',
  'Rich Communication Services',
  'RCS SMS API',
  'RCS vs SMS',
  'RCS marketing tool',
  'interactive RCS campaigns',
  'RCS chatbot India',

  // Core services — Voice Call
  'AI voice call automation',
  'bulk voice call service India',
  'voice broadcasting platform',
  'IVR automation software',
  'outbound call automation AI',
  'AI voice bot for sales',
  'auto call software India',
  'voice OTP service',
  'missed call marketing platform',
  'click-to-call API',

  // Platform
  'omnichannel communication platform',
  'AI communication platform India',
  'business automation platform',
  'conversational AI platform',
  'lead generation automation',
  'workflow orchestration tool',
  'AI-powered CRM integration',
  'marketing automation AI India',
  'sales communication automation',
  'intelligent communication system',
  'AI business communication India',
  'Bengaluru AI startup',
  'best CPaaS platform India',
  'customer engagement platform',
];

/**
 * buildMetadata — generates Next.js metadata for any page.
 */
export function buildMetadata({ title, description, path, image, keywords = [] }) {
  const url = `${BASE_URL}${path || ''}`;
  const ogImage = image || `${BASE_URL}/og-image.jpg`;
  const pageDesc = description || DEFAULT_DESCRIPTION;
  // Don't append '| Ojiva AI' if the title already contains it
  const fullTitle = title
    ? (title.toLowerCase().includes('ojiva') ? title : `${title} | ${SITE_NAME}`)
    : `${SITE_NAME} — AI-Powered SMS, WhatsApp, RCS & Voice Platform India`;
  const allKeywords = [...new Set([...BRAND_KEYWORDS, ...keywords])].join(', ');

  return {
    title: fullTitle,
    description: pageDesc,
    keywords: allKeywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
      languages: { 'en-IN': url },
    },
    openGraph: {
      title: fullTitle,
      description: pageDesc,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: pageDesc,
      images: [ogImage],
      creator: '@OjivaAi',
      site: '@OjivaAi',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// ── Organization JSON-LD ─────────────────────────────────────────────────────
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  alternateName: ['Ojiva', 'Ojiva AI Platform', 'Ojiva Communications'],
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/OJIVA%20AI%20MAIN%20LOGO%20WHITE%20PNG.png`,
    width: 512,
    height: 150,
  },
  description: DEFAULT_DESCRIPTION,
  foundingDate: '2023',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '183, 2nd Floor, G Block, Opposite Reliance Trends, Sahakara Nagar',
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
      areaServed: ['IN', 'US', 'GB', 'AU', 'AE'],
    },
    {
      '@type': 'ContactPoint',
      email: 'info@ojiva.ai',
      contactType: 'sales',
      url: `${BASE_URL}/contact`,
      availableLanguage: ['English'],
    },
  ],
  sameAs: [
    'https://x.com/OjivaAi',
    'https://www.linkedin.com/company/112715285/',
    'https://www.instagram.com/ojiva.ai/',
    'https://youtube.com/@ojivaai',
    'https://wa.me/918431086185',
  ],
  knowsAbout: [
    'Bulk SMS',
    'WhatsApp Business API',
    'RCS Messaging',
    'AI Voice Call Automation',
    'Business Communication Automation',
    'Conversational AI',
    'Lead Intelligence',
    'Workflow Orchestration',
    'Enterprise CPaaS',
    'Marketing Automation',
    'IVR Replacement',
    'SMS Gateway',
  ],
};

// ── WebSite JSON-LD ─────────────────────────────────────────────────────────
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

// ── SoftwareApplication JSON-LD ───────────────────────────────────────────────
export const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  operatingSystem: 'Web',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'CommunicationApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
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
  featureList: [
    'Bulk SMS API',
    'WhatsApp Business API Integration',
    'RCS Business Messaging',
    'AI Voice Call Automation',
    'Two-way Messaging',
    'OTP / Transactional SMS',
    'Voice Broadcasting',
    'IVR AI Replacement',
    'Lead Scoring & Routing',
    'No-code Workflow Builder',
    'Real-time Analytics Dashboard',
  ],
};

// ── BreadcrumbList JSON-LD ───────────────────────────────────────────────────
export function breadcrumbSchema(items) {
  // items: [{ name, url }]  — first item should always be Home
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, url }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: url,
    })),
  };
}

// ── Service JSON-LD ──────────────────────────────────────────────────────────
export function serviceSchema({ name, description, url, keywords = [] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
    areaServed: { '@type': 'Country', name: 'India' },
    serviceType: name,
    keywords: keywords.join(', '),
  };
}

// ── FAQPage JSON-LD ──────────────────────────────────────────────────────────
export function faqSchema(faqs) {
  // faqs: [{ q, a }]
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
