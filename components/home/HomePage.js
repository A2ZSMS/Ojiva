import dynamic from 'next/dynamic';

// Above-fold — loaded immediately (affect LCP)
import Hero    from './Hero';
import TrustBar from './sections/TrustBar';

// Below-fold — code-split, loaded only when needed
const Services             = dynamic(() => import('./sections/Services'));
const Industries           = dynamic(() => import('./sections/Industries'));
const SecuritySection      = dynamic(() => import('./SecuritySection'));
const HowItWorks           = dynamic(() => import('./sections/HowItWorks'));
const FeatureDeepDive      = dynamic(() => import('./FeatureDeepDive'));
const PlatformCapabilities = dynamic(() => import('./sections/PlatformCapabilities'));
const Testimonials         = dynamic(() => import('./sections/Testimonials'));
const WhyOjiva             = dynamic(() => import('./sections/WhyOjiva'));
const BlogPreview          = dynamic(() => import('./BlogPreview'));
const FaqSchema            = dynamic(() => import('./sections/FaqSchema'));
const CTA                  = dynamic(() => import('@/components/ui/CTA'));

/* ─────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <Hero />

      {/* ══ 2. TRUST / STATS BAR ═════════════════════════════ */}
      <TrustBar />

      {/* ══ 3. CORE SERVICES ═════════════════════════════════ */}
      <Services />

      {/* ══ 3b. INDUSTRIES ═══════════════════════════════════ */}
      <Industries />

      {/* ══ 4. SECURITY & COMPLIANCE ═════════════════════════ */}
      <SecuritySection />

      {/* ══ 5. HOW IT WORKS ══════════════════════════════════ */}
      <HowItWorks />

      {/* ══ 6. FEATURE DEEP-DIVE ══════════════════════════════ */}
      <FeatureDeepDive />

      {/* ══ 7. PLATFORM CAPABILITIES ══════════════════════════ */}
      <PlatformCapabilities />

      {/* ══ 8. TESTIMONIALS ═══════════════════════════════════ */}
      <Testimonials />

      {/* ══ 9. WHY OJIVA AI ═══════════════════════════════════ */}
      <WhyOjiva />

      {/* ══ 10. BLOG PREVIEW ═════════════════════════════════ */}
      <BlogPreview />

      {/* ══ FAQ Schema (JSON-LD) ══════════════════════════════ */}
      <FaqSchema />

      {/* ══ 11. CTA ═══════════════════════════════════════════ */}
      <CTA
        title="Ready to 10× Your Messaging Results?"
        subtitle="Join 500+ companies using Ojiva AI to deliver smarter messages, qualify leads faster, and grow without limits. Free demo — no commitment required."
        primaryLabel="Book a Free Demo"
        primaryHref="/contact"
        secondaryLabel="Explore the Platform"
        secondaryHref="/platform"
      />
    </>
  );
}
