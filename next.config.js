/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // generates the out/ folder
  trailingSlash: true,    // /about → /about/index.html (works on all static hosts)
  reactStrictMode: true,
  compress: true,
  images: {
    unoptimized: true,    // required for static export (no server to optimize images)
  },
};

module.exports = nextConfig;
