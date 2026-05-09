'use client';

import CTA from '@/components/ui/CTA';
import Hero from './sections/Hero';
import QuickLinks from './sections/QuickLinks';
import SystemStatus from './sections/SystemStatus';
import ContactChannels from './sections/ContactChannels';
import SupportHub from './sections/SupportHub';
import FAQ, { FAQS } from './sections/FAQ';
import ChatWidget from './sections/ChatWidget';

const SUPPORT_FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function SupportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SUPPORT_FAQ_SCHEMA) }} />
      <Hero />
      <QuickLinks />
      <SystemStatus />
      <ContactChannels />
      <SupportHub />
      <FAQ />
      <CTA
        title="Need enterprise-grade support?"
        subtitle="Talk to our solutions team and let us build a support plan tailored to your team's size, stack, and SLA requirements."
        primaryLabel="Contact Enterprise Team"
        primaryHref="/contact"
        secondaryLabel="Explore the Platform"
        secondaryHref="/platform"
      />
      <ChatWidget />
    </>
  );
}
