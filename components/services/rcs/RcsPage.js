import ServiceLeadForm from '@/components/ui/ServiceLeadForm';
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
      <ServiceLeadForm
        source="rcs-service"
        eyebrow="RCS BUSINESS MESSAGING"
        heading="Upgrade Your SMS to Rich RCS"
        headingHighlight="Rich RCS"
        description="Google-verified business identity, rich cards, interactive buttons, and read receipts — all in the native Android message app. No app download needed."
        perks={[
          'Google-verified sender identity & branding',
          'Rich cards, carousels & interactive buttons',
          '94% read rate — 3× higher CTR than SMS',
          'Real-time delivery & read receipts',
          'No app download required for end users',
        ]}
        stats={[{ val: '94%', lbl: 'Read Rate' }, { val: '3×', lbl: 'Higher CTR' }, { val: '48hr', lbl: 'Go-Live' }]}
        formTitle="Get Free RCS Access & Pricing"
        formSubtitle="Google verification handled by us. Go live in 48 hours."
        formBadge="Google Verified · No App Needed · No lock-in"
        submitLabel="Get Started with RCS →"
      />
    </>
  );
}
