import './HomePremium.css';

// Above-fold — loaded immediately (affect LCP)
import Hero    from './Hero';

// Below-fold — server components (no client JS); only small islands inside
// them (ChannelStory, chat mockup, spotlight, count-up) hydrate
import Services from './sections/Services';
import ChannelStory from './sections/ChannelStory';
import Industries from './sections/Industries';
import SecuritySection from './SecuritySection';
import HowItWorks from './sections/HowItWorks';
import FeatureDeepDive from './FeatureDeepDive';
import PlatformCapabilities from './sections/PlatformCapabilities';
import Testimonials from './sections/Testimonials';
import WhyOjiva from './sections/WhyOjiva';
import BlogPreview from './BlogPreview';
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

      {/* ══ 3. CORE SERVICES ═════════════════════════════════ */}
      <Services />

      {/* ══ 3a. ONE MESSAGE, FOUR CHANNELS (scroll story) ══════ */}
      <ChannelStory />

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
        title="Ready for Better Conversations?"
        subtitle="Talk to our team about the right channels for your business."
        primaryLabel="Book a Demo"
        primaryHref="/book-demo"
        secondaryLabel={null}
        trustItems={[]}
      />
    </>
  );
}
