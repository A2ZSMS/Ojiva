import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { organizationSchema, websiteSchema, softwareAppSchema, searchConsoleVerification, BRAND_KEYWORDS } from '@/lib/metadata';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BootstrapClient from './BootstrapClient';
import CustomCursor from '@/components/CustomCursor';
import Analytics, { GTMNoScript, searchConsoleVerification as scMeta } from '@/components/Analytics';


export const metadata = {
  title: {
    default: 'Ojiva AI — Intelligent AI Communication Platform',
    template: '%s | Ojiva AI',
  },
  description:
    'Ojiva AI is an advanced AI-powered business automation platform delivering intelligent communication systems, AI messaging, voice automation, and workflow orchestration for modern enterprises.',
  keywords: BRAND_KEYWORDS.join(', '),
  metadataBase: new URL('https://ojiva.ai'),
  openGraph: {
    siteName: 'Ojiva AI',
    locale: 'en_US',
    type: 'website',
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
    <html lang="en">
      <head>
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
      <body>
        {/* GTM no-script fallback (activates when GTM_CONTAINER_ID is set) */}
        <GTMNoScript />

        <CustomCursor />
        <a href="#main-content" className="visually-hidden-focusable">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <BootstrapClient />

        {/* All tracking scripts — GA4, GTM, etc. */}
        <Analytics />
      </body>
    </html>
  );
}
