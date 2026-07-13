import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { Inter, EB_Garamond } from 'next/font/google';
import Script from 'next/script';
import { organizationSchema, websiteSchema, softwareAppSchema, BRAND_KEYWORDS } from '@/lib/metadata';
import LayoutShell from '@/components/layout/LayoutShell';
import BootstrapClient from './BootstrapClient';
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
    "India's #1 CPaaS — WhatsApp API, Bulk SMS, RCS & AI Voice. 98% open rates, 99.9% uptime, 48-hr go-live. Trusted by 500+ businesses.",
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
    title: "Ojiva AI — India's #1 AI Communication Platform",
    description:
      "Ojiva AI delivers Bulk SMS, WhatsApp API, RCS Messaging & AI Voice automation at enterprise scale. Trusted by 500+ businesses across India.",
    images: [
      {
        url: "https://www.ojiva.ai/og-image.jpg",
        width: 1200,
        height: 1200,
        alt: "Ojiva AI — India's #1 AI Communication Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ojiva AI — India's #1 AI Communication Platform",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${ebGaramond.variable}`} suppressHydrationWarning>
      <head>
        {/* ── Google Tag Manager — as high in <head> as possible ── */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TJ8ZDFS2');` }} />

        {/* ── First-paint splash: shows the Ojiva logo before any content, fades on load ── */}
        <style dangerouslySetInnerHTML={{ __html: `#ojiva-splash{position:fixed;inset:0;z-index:2147483647;background:#060d1a;display:flex;align-items:center;justify-content:center;opacity:1;transition:opacity .45s ease}#ojiva-splash.is-hiding{opacity:0;pointer-events:none}#ojiva-splash .os-galaxy{position:relative;width:200px;height:200px;display:flex;align-items:center;justify-content:center}#ojiva-splash .os-core{position:relative;z-index:3;display:flex;align-items:center;justify-content:center;width:80px;height:80px;border-radius:50%;background:radial-gradient(circle,rgba(0,200,248,.20),transparent 70%)}#ojiva-splash .os-logo{width:62px;height:62px;object-fit:contain}#ojiva-splash .os-orbit{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,.09);border-radius:50%}#ojiva-splash .os-o1{width:124px;height:124px;animation:osrot 4.5s linear infinite}#ojiva-splash .os-o2{width:188px;height:188px;animation:osrot 7s linear infinite reverse}#ojiva-splash .os-node{position:absolute;top:-5px;left:50%;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:var(--c);box-shadow:0 0 10px var(--c)}#ojiva-splash .os-node.b{top:auto;bottom:-5px}#ojiva-splash .os-node.l{top:50%;left:-5px;margin-top:-5px;margin-left:0}#ojiva-splash .os-node.r{top:50%;left:auto;right:-5px;margin-top:-5px;margin-left:0}@keyframes osrot{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(360deg)}}@media (prefers-reduced-motion:reduce){#ojiva-splash .os-o1,#ojiva-splash .os-o2{animation:none}}` }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(){var s=document.createElement('div');s.id='ojiva-splash';s.innerHTML='<div class="os-galaxy"><div class="os-orbit os-o1"><span class="os-node" style="--c:#25d366"></span><span class="os-node b" style="--c:#3b82f6"></span></div><div class="os-orbit os-o2"><span class="os-node" style="--c:#0ea5e9"></span><span class="os-node b" style="--c:#8b5cf6"></span><span class="os-node l" style="--c:#f59e0b"></span><span class="os-node r" style="--c:#10b981"></span></div><div class="os-core"><img class="os-logo" src="/ojiva-logo-white.webp" alt="Ojiva AI" width="62" height="62"/></div></div>';(document.documentElement||document.body).appendChild(s);var MIN=800,MAX=4000,st=Date.now(),done=false;function hide(){if(done)return;done=true;var w=Math.max(0,MIN-(Date.now()-st));setTimeout(function(){s.className='is-hiding';setTimeout(function(){if(s.parentNode){s.parentNode.removeChild(s);}},500);},w);}if(document.readyState==='complete'){hide();}else{window.addEventListener('load',hide,{once:true});}setTimeout(hide,MAX);})();` }} />

        {/* ── Performance: preconnect & DNS prefetch ── */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://widget.intercom.io" />
        <link rel="dns-prefetch" href="https://api-iam.intercom.io" />

        {/* Bootstrap Icons — preload (warms cache without render-block) then
            swap to a stylesheet via a tiny inline script. Falls back to plain
            <link> when JS is disabled. Saves ~150-300ms on first paint. */}
        <link
          rel="preload"
          href="/icons/bootstrap-icons.min.css"
          as="style"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='/icons/bootstrap-icons.min.css';document.head.appendChild(l);})();`,
          }}
        />
        <noscript>
          <link rel="stylesheet" href="/icons/bootstrap-icons.min.css" />
        </noscript>

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
        <LayoutShell>
          <main id="main-content" style={{ overflowX: 'hidden' }}>{children}</main>
        </LayoutShell>
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
