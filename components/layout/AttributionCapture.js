'use client';

import { useEffect } from 'react';
import { captureAttributionFromUrl } from '@/lib/attribution';

/**
 * Runs once on mount to capture UTM params + ad click IDs from the URL
 * and stash them in sessionStorage. Forms read them on submit and send
 * to TeleCRM as UTM Source / UTM Medium / UTM Campaign.
 * Renders nothing.
 */
export default function AttributionCapture() {
  useEffect(() => {
    captureAttributionFromUrl();
  }, []);
  return null;
}
