import FAQAccordion from '@/components/ui/FAQAccordion';
import { faqSchema } from '@/lib/metadata';

const HOME_FAQS = [
  {
    q: 'What is Ojiva AI?',
    a: 'Ojiva AI brings SMS, WhatsApp Business API, RCS, and Voice campaigns together in one communication platform.',
  },
  {
    q: 'What services does Ojiva AI offer?',
    a: 'Services include Bulk SMS, WhatsApp Business API, RCS, Voice, OTP verification, chatbots, and workflow automation.',
  },
  {
    q: 'How can I try Ojiva AI?',
    a: 'Book a demo to explore the platform and ask our team about current trial options.',
  },
  {
    q: 'How much does Ojiva AI cost?',
    a: 'Pricing depends on your channels, message volume, and setup. Contact sales for a quote that fits your requirements.',
  },
  {
    q: 'Does Ojiva AI support WhatsApp Business API?',
    a: 'Yes. Use WhatsApp Business API for campaigns, interactive templates, and automated conversations.',
  },
  {
    q: 'How secure is Ojiva AI?',
    a: 'Security features include encryption, two-factor authentication, and role-based access. Our team can discuss your specific security and compliance requirements.',
  },
  {
    q: 'Where is Ojiva AI based?',
    a: 'Ojiva AI is based in Sahakara Nagar, Bengaluru, Karnataka, India.',
  },
];

const HOME_FAQ_SCHEMA = faqSchema(HOME_FAQS);

export default function FaqSchema() {
  return (
    <>
      {/* Visible FAQ accordion — required for valid FAQPage rich results */}
      <FAQAccordion
        faqs={HOME_FAQS}
        tag="FAQ"
        title="Frequently asked questions"
        subtitle="Common questions about Ojiva AI's communication platform."
        id="home-faq"
      />

      {/* JSON-LD schema — content matches the visible accordion above */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_FAQ_SCHEMA) }}
      />
    </>
  );
}
