'use client';

import CTA from '@/components/ui/CTA';
import { FadeUp } from '@/components/ui/Animations';
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

      {/* ══ CTA ══ */}
      <FadeUp>
        <CTA
          title="Ready to Build Your WhatsApp Chatbot?"
          subtitle="Join 500+ businesses automating WhatsApp conversations, qualifying leads, and driving sales 24/7."
          primaryLabel="Build Your Chatbot"
          primaryHref="/contact"
          secondaryLabel="Book a Demo"
          secondaryHref="/book-demo"
        />
      </FadeUp>
    </>
  );
}
