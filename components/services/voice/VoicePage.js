import ServiceLeadForm from '@/components/ui/ServiceLeadForm';
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
      <ServiceLeadForm
        source="voice-service"
        eyebrow="AI VOICE CALL AUTOMATION"
        heading="Let AI Answer Your Calls — 24×7"
        headingHighlight="24×7"
        description="Deploy intelligent voice bots that handle outbound campaigns, payment reminders, appointment confirmations, and inbound support — in any Indian language."
        perks={[
          'Outbound dialer & inbound IVR on one platform',
          'Multi-language support (Hindi, Tamil, Telugu, +8 more)',
          'AI NLP for natural conversations',
          'Auto-retry logic to maximise contact rates',
          'Real-time call analytics & recordings',
        ]}
        stats={[{ val: '24×7', lbl: 'Always On' }, { val: '10+', lbl: 'Languages' }, { val: '24hr', lbl: 'Deployment' }]}
        formTitle="Get AI Voice Call Access"
        formSubtitle="Deploy your first voice bot in 24 hours."
        formBadge="Multi-language · 24×7 · No lock-in"
        submitLabel="Get Started with Voice →"
      />
    </>
  );
}
