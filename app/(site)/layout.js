// Site-wide styles for every normal page (home, services, blogs, pricing…).
// They live here instead of the root layout so the Google Ads landing pages
// (app/whatsapp-api-service, bulk-sms, rcs-messaging, website-development),
// which sit outside this (site) group, don't download ~37 KB of render-blocking
// CSS they never use. Those pages import styles/landing-base.css instead.
// The route group "(site)" does not change any URL.
//
// Trimmed to the Bootstrap rules the site actually uses (scripts/trim-bootstrap.mjs,
// regenerated on every dev start and build). Was the full 230 KB stylesheet.
import '@/styles/bootstrap.trimmed.css';
import '@/styles/globals.css';

export default function SiteLayout({ children }) {
  return children;
}
