// Trimmed to the Bootstrap rules the site actually uses (scripts/trim-bootstrap.mjs,
// regenerated on every dev start and build). Was the full 230 KB stylesheet.
import '@/styles/bootstrap.trimmed.css';
import '../styles/globals.css';
import { Inter, EB_Garamond } from 'next/font/google';
import Script from 'next/script';
import { organizationSchema, websiteSchema, softwareAppSchema, BRAND_KEYWORDS } from '@/lib/metadata';
import LayoutShell from '@/components/layout/LayoutShell';
import BootstrapClient from './BootstrapClient';
import iconsVersion from '@/lib/icons-version.json';
import Analytics, { GTMNoScript, searchConsoleVerification as scMeta } from '@/components/layout/Analytics';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'],
  variable: '--font-eb-garamond',
});


export const metadata = {
  title: {
    default: "Ojiva AI — Bulk SMS, WhatsApp API & RCS Platform India",
  },
  description:
    "Indian CPaaS for WhatsApp API, Bulk SMS, RCS & AI Voice. 98% open rates, 99.9% uptime, 48-hr go-live. Trusted by 500+ businesses.",
  keywords: BRAND_KEYWORDS.join(", "),
  metadataBase: new URL("https://www.ojiva.ai"),
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/favicon/site.webmanifest" }],
  },
  openGraph: {
    siteName: "Ojiva AI",
    locale: "en_IN",
    type: "website",
    url: "https://www.ojiva.ai/",
    title: "Ojiva AI — Bulk SMS, WhatsApp API & RCS Platform India",
    description:
      "Ojiva AI delivers Bulk SMS, WhatsApp API, RCS Messaging & AI Voice automation at enterprise scale. Trusted by 500+ businesses across India.",
    images: [
      {
        url: "https://www.ojiva.ai/og-image.jpg",
        width: 1200,
        height: 1200,
        alt: "Ojiva AI — Bulk SMS, WhatsApp API & RCS Platform India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ojiva AI — Bulk SMS, WhatsApp API & RCS Platform India",
    description:
      "Bulk SMS, WhatsApp API, RCS & AI Voice automation. Enterprise-grade. Trusted by 500+.",
    images: ["https://www.ojiva.ai/og-image.jpg"],
    creator: "@OjivaAi",
    site: "@OjivaAi",
  },
  alternates: {
    canonical: "https://www.ojiva.ai/",
    languages: { "en-IN": "https://www.ojiva.ai/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Google Search Console verification (auto-populated from Analytics.js config)
  ...(scMeta && {
    verification: {
      google: scMeta,
    },
  }),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#060c18',
};

// Versioned so a changed icon set is never served from a year-long browser cache.
const ICONS_CSS = `/icons/bootstrap-icons.min.css?v=${iconsVersion.css}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${ebGaramond.variable}`} suppressHydrationWarning>
      <head>
        {/* ── Deferred third-party loader (speed audit, Oct 2026) ──
            Tracking + chat scripts (GTM, GA4, Meta, OpenAI, Intercom) competed with the page on load
            (mobile Lighthouse 30/100). They now load on the visitor's first interaction
            (scroll, tap, key, mouse move) or 3.5s after the page has loaded, whichever is
            first. Thank-you pages and paid-ad landing pages load them immediately so no
            conversion or ad-click session is missed.
            Queue stubs (dataLayer, gtag, fbq, oaiq) are defined right away, so any event
            pushed before the real scripts arrive is replayed when they load. */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d){w.dataLayer=w.dataLayer||[];w.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});w.gtag=w.gtag||function(){w.dataLayer.push(arguments);};var q=[],done=false,p=w.location.pathname,now=p.indexOf('thank-you')>-1||['/whatsapp-api-service','/bulk-sms','/rcs-messaging','/website-development'].indexOf(p.replace(/.$/,function(c){return c==='/'?'':c;}))>-1;w.__ojvLoad=function(f){if(done){f();}else{q.push(f);}};function go(){if(done)return;done=true;ev.forEach(function(e){w.removeEventListener(e,go,true);});var f;while((f=q.shift())){try{f();}catch(e){}}}var ev=['scroll','pointerdown','keydown','touchstart','mousemove'];ev.forEach(function(e){w.addEventListener(e,go,{once:true,passive:true,capture:true});});function arm(){setTimeout(go,3500);}if(d.readyState==='complete'){arm();}else{w.addEventListener('load',arm,{once:true});}w.__ojvLoad(function(){var j=d.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=GTM-TJ8ZDFS2';d.head.appendChild(j);});if(now)go();})(window,document);` }} />

        {/* ── Performance: preconnect & DNS prefetch ── */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://widget.intercom.io" />
        <link rel="dns-prefetch" href="https://api-iam.intercom.io" />

        {/* Bootstrap Icons — preload (warms cache without render-block) then
            swap to a stylesheet via a tiny inline script. Falls back to plain
            <link> when JS is disabled. Saves ~150-300ms on first paint. */}
        <link
          rel="preload"
          href={ICONS_CSS}
          as="style"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='${ICONS_CSS}';document.head.appendChild(l);})();`,
          }}
        />
        <noscript>
          <link rel="stylesheet" href={ICONS_CSS} />
        </noscript>

        {/* Theme color for mobile browsers */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <LayoutShell>
          <main id="main-content" style={{ overflowX: 'clip' }}>{children}</main>
        </LayoutShell>
        <BootstrapClient />

        {/* All tracking scripts — GA4, GTM, etc. */}
        <Analytics />

        {/* Intercom live chat — widget loads on first user intent (or after 15s), so the
            ~300KB bundle never competes with page load. The old 8s idle fallback fired
            during load on slow phones (speed audit, Oct 2026). */}
        <Script
          id="intercom-widget"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              if (!['/whatsapp-api-service','/whatsapp-api-service/','/bulk-sms','/bulk-sms/','/rcs-messaging','/rcs-messaging/','/website-development','/website-development/'].includes(window.location.pathname)) {
              window.intercomSettings = { api_base: "https://api-iam.intercom.io", app_id: "a5mrjdl9" };
              (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/a5mrjdl9';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};var loaded=false,evts=['mousemove','scroll','touchstart','keydown','click'];function go(){if(loaded)return;loaded=true;evts.forEach(function(e){w.removeEventListener(e,go);});l();}evts.forEach(function(e){w.addEventListener(e,go,{once:true,passive:true});});setTimeout(go,15000);}})();
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
