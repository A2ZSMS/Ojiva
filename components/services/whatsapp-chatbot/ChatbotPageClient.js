'use client';

import ServiceLeadForm from '@/components/ui/ServiceLeadForm';
import Hero from './Hero';
import Capabilities from './Capabilities';
import NoCodeBuilder from './NoCodeBuilder';
import ComparisonTable from './ComparisonTable';
import UseCases from './UseCases';
import HowItWorks from './HowItWorks';
import FAQ from './FAQ';
import ExploreServices from './ExploreServices';
import RelatedServices from '@/components/ui/RelatedServices';

export default function ChatbotPageClient({ faqs }) {
  return (
    <>
      <Hero />
      <Capabilities />
      <NoCodeBuilder />
      <ComparisonTable />
      <UseCases />
      <HowItWorks />
      <FAQ faqs={faqs} />
      <ExploreServices />
      <RelatedServices currentPath="/whatsapp-chatbot" />
      <ServiceLeadForm
        source="whatsapp-chatbot-service"
        eyebrow="WHATSAPP CHATBOT"
        heading="Build Your WhatsApp Chatbot Today"
        headingHighlight="Today"
        description="No-code builder + AI NLP — deploy a 24/7 WhatsApp chatbot that qualifies leads, answers support queries, and drives sales without any human intervention."
        perks={[
          'No-code visual flow builder — no developers needed',
          'AI NLP for natural, human-like conversations',
          '87% of queries auto-resolved without human agents',
          'Multi-language support for Indian customers',
          'CRM integration — HubSpot, Salesforce, Zoho',
        ]}
        stats={[{ val: '87%', lbl: 'Auto-Resolved' }, { val: '24×7', lbl: 'Always On' }, { val: '48hr', lbl: 'Deployment' }]}
        formTitle="Build Your WhatsApp Chatbot"
        formSubtitle="No-code deployment. Live in 48 hours."
        formBadge="No-Code · AI NLP · No lock-in"
        submitLabel="Get Chatbot Access →"
      />
    </>
  );
}
