/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,                // gzip in dev (production HTML is gzipped by host)
  poweredByHeader: false,        // strip X-Powered-By header
  productionBrowserSourceMaps: false,  // smaller production bundle
  images: {
    unoptimized: true,           // required for static export
    formats: ['image/webp'],     // hint for next/image when not unoptimized
  },
  // Strip dev-only console.* statements from production bundle (keep error/warn)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },
  experimental: {
    optimizePackageImports: [
      'react-icons',
      'framer-motion',
      'react-syntax-highlighter',
    ],
  },
  // Long-term cache headers for static assets (effective on Node/Vercel deploys).
  // Skip the immutable cache in dev — Turbopack reuses chunk URLs across content
  // changes, so a 1-year cache freezes stale CSS/JS in the browser.
  async headers() {
    const isDev = process.env.NODE_ENV !== 'production';
    return [
      ...(isDev ? [] : [{
        source: '/:path*.(js|css|woff2|woff|ttf|webp|png|jpg|jpeg|svg|ico|mp4)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      }]),
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          ...(isDev ? [{ key: 'Cache-Control', value: 'no-store, must-revalidate' }] : []),
        ],
      },
    ];
  },
};

module.exports = nextConfig;
