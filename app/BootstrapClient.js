'use client';

import { useEffect } from 'react';

const AD_ROUTES = ['/whatsapp-api-service', '/bulk-sms', '/rcs-messaging', '/website-development'];

export default function BootstrapClient() {
  useEffect(() => {
    // Only Collapse is used site-wide (FAQ accordions; the navbar toggle is
    // React state). Loading just this component drops the full bundle + Popper
    // (~30KB gzip/page). Importing the module runs its click data-api, which
    // auto-wires every data-bs-toggle="collapse" (delegated, so late load is fine).
    // Ad landing pages use <details> instead, so they skip it entirely; elsewhere
    // it loads as its own chunk after the page is interactive.
    if (AD_ROUTES.some(r => window.location.pathname.startsWith(r))) return;
    import('bootstrap/js/dist/collapse.js');
  }, []);
  return null;
}
