import CTA from '@/components/ui/CTA';
import { FadeUp } from '@/components/ui/Animations';
import Hero from './Hero';
import ChannelPortals from './ChannelPortals';
import HowItWorks from './HowItWorks';
import UnifiedTools from './UnifiedTools';
import Integrations from './Integrations';
import ApiSection from './ApiSection';

export default function PlatformPageContent() {
  return (
    <>
      <Hero />
      <ChannelPortals />
      <HowItWorks />
      <UnifiedTools />
      <hr className="gradient-divider" />
      <Integrations />
      <ApiSection />

      <FadeUp>
      <CTA
        title="One login. Every channel. Ready in 48 hours."
        subtitle="Get access to the Ojiva AI portal and run Bulk SMS, WhatsApp API, RCS and Voice from a single dashboard — with white-glove onboarding included."
        primaryLabel="Get Portal Access"
        secondaryLabel="Talk to Sales"
        secondaryHref="/contact"
      />
      </FadeUp>
    </>
  );
}
