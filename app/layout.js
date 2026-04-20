import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { organizationSchema, websiteSchema, softwareAppSchema, BRAND_KEYWORDS } from '@/lib/metadata';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BootstrapClient from './BootstrapClient';
import Analytics, { GTMNoScript, searchConsoleVerification as scMeta } from '@/components/layout/Analytics';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700', '900'],
  variable: '--font-inter',
});


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
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    other: [
      { rel: 'manifest', url: '/favicon/site.webmanifest' },
    ],
  },
  openGraph: {
    siteName: 'Ojiva AI',
    locale: 'en_IN',
    type: 'website',
    url: 'https://ojiva.ai',
    title: 'Ojiva AI — India\'s #1 AI Communication Platform',
    description: 'Ojiva AI delivers Bulk SMS, WhatsApp API, RCS Messaging & AI Voice automation at enterprise scale. Trusted by 500+ businesses across India.',
    images: [{ url: 'https://ojiva.ai/og-image.jpg', width: 1200, height: 630, alt: "Ojiva AI — India's #1 AI Communication Platform" }],
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
    <html lang="en-IN" className={inter.className} suppressHydrationWarning>
      <head>
        {/* ── Performance: DNS prefetch ── */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Bootstrap Icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

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

        <a href="#main-content" className="visually-hidden-focusable">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" style={{ overflowX: 'hidden' }}>{children}</main>
        <Footer />
        <BootstrapClient />

        {/* All tracking scripts — GA4, GTM, etc. */}
        <Analytics />

        {/* Intercom live chat — deferred until page is interactive */}
        <Script
          id="intercom-widget"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.intercomSettings = { api_base: "https://api-iam.intercom.io", app_id: "a5mrjdl9" };
              (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/a5mrjdl9';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
            `,
          }}
        />
      </body>
    </html>
  );
}
