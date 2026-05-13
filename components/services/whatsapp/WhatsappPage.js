import ServiceLeadForm from '@/components/ui/ServiceLeadForm';
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
      <ServiceLeadForm
        source="whatsapp-service"
        eyebrow="WHATSAPP BUSINESS API"
        heading="Start Conversations That Convert"
        headingHighlight="That Convert"
        description="Official Meta BSP. Go live in 48 hours with WhatsApp Business API — AI chatbot, multi-agent inbox, CRM integration, and full India support included."
        perks={[
          'Official Meta Business Service Provider',
          'Green Tick verification support',
          'AI chatbot + multi-agent inbox included',
          'No DLT registration needed',
          'Dedicated onboarding specialist (IST hours)',
        ]}
        stats={[{ val: '98%', lbl: 'Open Rate' }, { val: '500+', lbl: 'Businesses' }, { val: '48hr', lbl: 'Go-Live' }]}
        formTitle="Get WhatsApp API Access"
        formSubtitle="No credit card. No DLT needed. Setup in 48 hours."
        formBadge="Official Meta BSP · No DLT needed · No lock-in"
        submitLabel="Get WhatsApp API →"
      />
    </>
  );
}
