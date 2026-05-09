'use client';

import CTA from '@/components/ui/CTA';
import { FadeUp } from '@/components/ui/Animations';

export default function FinalCta() {
  return (
    <FadeUp>
      <CTA
        title="Secure Your Users With Instant OTP"
        subtitle="Sub-3-second delivery. 99.9% success rate. DLT compliant. Get a free API key and go live today."
        primaryLabel="Book a Free Demo"
        primaryHref="/contact"
        secondaryLabel="Get API Key"
        secondaryHref="/contact"
      />
    </FadeUp>
  );
}
