import CTA from '@/components/ui/CTA';
import { FadeUp } from '@/components/ui/Animations';
import Hero from './Hero';
import Capabilities from './Capabilities';
import Comparison from './Comparison';
import HowItWorks from './HowItWorks';
import ApiSection from './ApiSection';
import Industries from './Industries';
import ExploreServices from './ExploreServices';

export default function RcsPageContent() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Comparison />
      <HowItWorks />
      <ApiSection />
      <Industries />
      <ExploreServices />
      <FadeUp>
        <CTA title="Upgrade Your SMS to Rich RCS Today" subtitle="Get Google-verified, send carousels and rich cards, and see 3× higher click-through rates." primaryLabel="Start with RCS →" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      </FadeUp>
    </>
  );
}
