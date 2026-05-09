import Hero from './Hero';
import FeatureDeepDive from './FeatureDeepDive';
import SecuritySection from './SecuritySection';
import BlogPreview from './BlogPreview';
import TrustBar from './sections/TrustBar';
import Services from './sections/Services';
import HowItWorks from './sections/HowItWorks';
import PlatformCapabilities from './sections/PlatformCapabilities';
import Testimonials from './sections/Testimonials';
import WhyOjiva from './sections/WhyOjiva';
import FaqSchema from './sections/FaqSchema';
import CTA from '@/components/ui/CTA';

/* ─────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <Hero />

      {/* ══ 2b. TRUST / STATS BAR ════════════════════════════ */}
      <TrustBar />

      {/* ══ 3. CORE SERVICES ═════════════════════════════════ */}
      <Services />

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

      {/* ══ 10. CTA ═══════════════════════════════════════════ */}
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
