import ServiceLeadForm from '@/components/ui/ServiceLeadForm';
import FAQ from '@/components/services/whatsapp-chatbot/FAQ';
import RelatedServices from '@/components/ui/RelatedServices';
import Hero from './Hero';
import SmsTypes from './SmsTypes';
import Features from './Features';
import DltCompliance from './DltCompliance';
import ApiSection from './ApiSection';
import Industries from './Industries';
import ExploreServices from './ExploreServices';

export default function SmsPageContent({ faqs }) {
  return (
    <>
      <Hero />
      <SmsTypes />
      <Features />
      <DltCompliance />
      <ApiSection />
      <Industries />
      <ExploreServices />
      {faqs && <FAQ faqs={faqs} subtitle="Everything you need to know about Ojiva AI Bulk SMS." />}
      <RelatedServices currentPath="/sms" />
      <ServiceLeadForm
        source="sms-service"
        eyebrow="BULK SMS SERVICE"
        heading="Start Sending SMS at Scale Today"
        headingHighlight="at Scale Today"
        description="India's fastest bulk SMS gateway — transactional, promotional, and OTP. DLT compliant, 99% delivery, and live in under 24 hours."
        perks={[
          '100% DLT compliant & TRAI registered',
          'Transactional, Promotional & OTP SMS',
          '99% delivery rate across all Indian operators',
          'Sub-3 second OTP delivery',
          'Dedicated support team (IST hours)',
        ]}
        stats={[{ val: '10M+', lbl: 'Messages/Day' }, { val: '99%', lbl: 'Delivery Rate' }, { val: '24hr', lbl: 'Go-Live' }]}
        formTitle="Get Bulk SMS Access & Pricing"
        formSubtitle="No credit card. DLT handled by us. Live in 24 hours."
        formBadge="DLT Compliant · 99% Delivery · No lock-in"
        submitLabel="Get Started with SMS →"
      />
    </>
  );
}
