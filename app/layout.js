import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/tailwind.css';
import '../styles/globals.css';
import { organizationSchema, websiteSchema, softwareAppSchema, BRAND_KEYWORDS } from '@/lib/metadata';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BootstrapClient from './BootstrapClient';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import Analytics, { GTMNoScript, searchConsoleVerification as scMeta } from '@/components/Analytics';


export const metadata = {
  title: {
    default: 'Ojiva AI — India\'s #1 AI Communication Platform | Bulk SMS, WhatsApp API, RCS & Voice',
    template: '%s | Ojiva AI',
  },
  description:
    'Ojiva AI is India\'s leading AI-powered communication platform for Bulk SMS, WhatsApp Business API, RCS Messaging & AI Voice Call automation. 10M+ messages monthly. Enterprise-grade security with AES-256 & 2FA. Trusted by 500+ businesses.',
  keywords: BRAND_KEYWORDS.join(', '),
  metadataBase: new URL('https://ojiva.ai'),
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/OJIVA%20AI%20MAIN%20LOGO%20WHITE%20PNG.png',
  },
  openGraph: {
    siteName: 'Ojiva AI',
    locale: 'en_IN',
    type: 'website',
    url: 'https://ojiva.ai',
    title: 'Ojiva AI — India\'s #1 AI Communication Platform',
    description: 'Ojiva AI delivers Bulk SMS, WhatsApp API, RCS Messaging & AI Voice automation at enterprise scale. Trusted by 500+ businesses across India.',
    images: [{ url: 'https://ojiva.ai/og-image.jpg', width: 1200, height: 630, alt: 'Ojiva AI Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ojiva AI — India\'s #1 AI Communication Platform',
    description: 'Bulk SMS, WhatsApp API, RCS & AI Voice automation. Enterprise-grade. Trusted by 500+.',
    images: ['https://ojiva.ai/og-image.jpg'],
    creator: '@OjivaAi',
    site: '@OjivaAi',
  },
  alternates: {
    canonical: 'https://ojiva.ai',
    languages: { 'en-IN': 'https://ojiva.ai' },
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
  // Google Search Console verification (auto-populated from Analytics.js config)
  ...(scMeta && {
    verification: {
      google: scMeta,
    },
  }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ── Performance: DNS prefetch + preconnect ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* ── Google Fonts via <link> (faster than CSS @import) ── */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#060c18" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Structured Data — Organisation schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* WebSite schema — Google Sitelinks Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* SoftwareApplication schema — rich results for software queries */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        {/* GTM no-script fallback (activates when GTM_CONTAINER_ID is set) */}
        <GTMNoScript />

        <ScrollProgress />
        <CustomCursor />
        <a href="#main-content" className="visually-hidden-focusable">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" style={{ overflowX: 'hidden' }}>{children}</main>
        <Footer />
        <BootstrapClient />

        {/* All tracking scripts — GA4, GTM, etc. */}
        <Analytics />
      </body>
    </html>
  );
}
