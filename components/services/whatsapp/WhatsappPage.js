import CTA from '@/components/ui/CTA';
import { FadeUp } from '@/components/ui/Animations';
import FAQ from '@/components/services/whatsapp-chatbot/FAQ';
import RelatedServices from '@/components/ui/RelatedServices';
import Hero from './Hero';
import MessageTypes from './MessageTypes';
import PlatformFeatures from './PlatformFeatures';
import HowItWorks from './HowItWorks';
import ApiSection from './ApiSection';
import Industries from './Industries';
import ExploreServices from './ExploreServices';

export default function WhatsappPageContent({ faqs }) {
  return (
    <>
      <Hero />
      <MessageTypes />
      <PlatformFeatures />
      <HowItWorks />
      <ApiSection />
      <Industries />
      <ExploreServices />
      {faqs && <FAQ faqs={faqs} subtitle="Everything you need to know about WhatsApp Business API." />}
      <RelatedServices currentPath="/whatsapp" />
      <FadeUp>
        <CTA title="Start Conversations That Convert on WhatsApp" subtitle="Join 500+ businesses using Ojiva AI WhatsApp API. Official Meta BSP, Green Tick support, and live in 48 hours." primaryLabel="Get WhatsApp API" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      </FadeUp>
    </>
  );
}
