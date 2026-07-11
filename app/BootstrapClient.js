'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Only Collapse is used site-wide (FAQ accordions; the navbar toggle is
    // React state). Loading just this component drops the full bundle + Popper
    // (~30KB gzip/page). Synchronous require runs the module's click data-api
    // that auto-wires every data-bs-toggle="collapse".
    require('bootstrap/js/dist/collapse.js');
  }, []);
  return null;
}
