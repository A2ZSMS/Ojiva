'use client';

import CTA from '@/components/ui/CTA';
import { FadeUp } from '@/components/ui/Animations';

export default function FinalCTA() {
  return (
    <FadeUp>
      <CTA
        title="Start Your Free 14-Day Trial Today"
        subtitle="Full Business plan access. No credit card. No lock-in. Go live in under 10 minutes."
        primaryLabel="Start Free Trial"
        primaryHref="/contact"
        secondaryLabel="Talk to Sales"
        secondaryHref="/contact"
      />
    </FadeUp>
  );
}
