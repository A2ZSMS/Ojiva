'use client';

import FAQ from '@/components/services/whatsapp-chatbot/FAQ';

const OTP_FAQS = [
  {
    q: 'How fast is OTP delivery via Ojiva AI?',
    a: 'Over 95% of OTPs are delivered within 3 seconds of the API call. We use direct telecom operator routes (no aggregator hops) to minimize latency. Our SLA guarantees sub-5 second delivery during normal network conditions.',
  },
  {
    q: 'Is your OTP service TRAI DLT compliant?',
    a: 'Yes. All SMS OTP routes are registered on the TRAI DLT platform under the Transactional category. Templates are pre-approved. You simply provide your PE ID and we handle the rest.',
  },
  {
    q: 'What happens if the OTP SMS is not delivered?',
    a: 'Ojiva AI has automatic retry logic. If delivery fails on the primary route, the system retries on a backup route within 5 seconds. You can also configure multi-channel fallback — e.g., SMS → WhatsApp → Voice — via a single API call.',
  },
  {
    q: 'How is OTP pricing calculated?',
    a: 'OTP SMS is priced at ₹0.15–₹0.18 per message depending on volume. WhatsApp OTP is priced per Meta conversation pricing. Voice OTP is billed per minute. See our pricing page for full details. No monthly fees — pure pay-as-you-go.',
  },
  {
    q: 'Can I configure OTP expiry time and length?',
    a: 'Yes. Via the API you can set OTP length (4–8 digits), expiry time (30s–600s), maximum retry attempts, and cooldown period between retries. All configurable per request or at the account level.',
  },
];

export default function Faq({ faqs }) {
  // Prefer FAQs passed from page-level (so JSON-LD + UI stay in sync) but
  // fall back to the local copy so the component stays self-contained.
  const renderFaqs = (faqs && faqs.length) ? faqs : OTP_FAQS;
  return (
    <FAQ faqs={renderFaqs} subtitle="Everything you need to know about OTP delivery, compliance, and pricing." />
  );
}
