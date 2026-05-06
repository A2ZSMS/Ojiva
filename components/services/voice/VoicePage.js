import CTA from '@/components/ui/CTA';
import { FadeUp } from '@/components/ui/Animations';
import FAQ from '@/components/services/whatsapp-chatbot/FAQ';
import RelatedServices from '@/components/ui/RelatedServices';
import Hero from './Hero';
import VoiceTypes from './VoiceTypes';
import PlatformFeatures from './PlatformFeatures';
import HowItWorks from './HowItWorks';
import Industries from './Industries';
import ExploreServices from './ExploreServices';

export default function VoicePageContent({ faqs }) {
  return (
    <>
      <Hero />
      <VoiceTypes />
      <PlatformFeatures />
      <HowItWorks />
      <Industries />
      <ExploreServices />
      {faqs && <FAQ faqs={faqs} subtitle="Everything you need to know about Ojiva AI Voice Call Automation." />}
      <RelatedServices currentPath="/voice" />
      <FadeUp>
        <CTA title="Let AI Answer Your Calls — 24×7, in Any Language" subtitle="Join 500+ businesses using Ojiva AI Bulk Voice Call. Deploy your first voice bot in 24 hours." primaryLabel="Get Started with Bulk Voice Call" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      </FadeUp>
    </>
  );
}
