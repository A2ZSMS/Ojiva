import CTA from '@/components/ui/CTA';
import { FadeUp } from '@/components/ui/Animations';
import FAQ from '@/components/services/whatsapp-chatbot/FAQ';
import RelatedServices from '@/components/ui/RelatedServices';
import Hero from './Hero';
import Capabilities from './Capabilities';
import Comparison from './Comparison';
import HowItWorks from './HowItWorks';
import ApiSection from './ApiSection';
import Industries from './Industries';
import ExploreServices from './ExploreServices';

export default function RcsPageContent({ faqs }) {
  return (
    <>
      <Hero />
      <Capabilities />
      <Comparison />
      <HowItWorks />
      <ApiSection />
      <Industries />
      <ExploreServices />
      {faqs && <FAQ faqs={faqs} subtitle="Everything you need to know about RCS Business Messaging." />}
      <RelatedServices currentPath="/rcs" />
      <FadeUp>
        <CTA title="Upgrade Your SMS to Rich RCS Today" subtitle="Get Google-verified, send carousels and rich cards, and see 3× higher click-through rates." primaryLabel="Start with RCS" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      </FadeUp>
    </>
  );
}
