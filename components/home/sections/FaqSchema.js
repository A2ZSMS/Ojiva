'use client';

import FAQAccordion from '@/components/ui/FAQAccordion';
import { faqSchema } from '@/lib/metadata';

const HOME_FAQS = [
  {
    q: 'What is Ojiva AI?',
    a: 'Ojiva AI is India\'s #1 AI-powered communication platform that enables businesses to send Bulk SMS, automate WhatsApp Business API conversations, launch RCS campaigns, and deploy Bulk Voice Call at enterprise scale — all from a single dashboard with end-to-end encryption.',
  },
  {
    q: 'What services does Ojiva AI offer?',
    a: 'Ojiva AI offers Bulk SMS Service, WhatsApp Business API integration, RCS Messaging, AI Voice Call automation, OTP & 2FA Solutions, WhatsApp AI Chatbot, SIP Trunking, and workflow automation — all with enterprise-grade AES-256 security.',
  },
  {
    q: 'Is Ojiva AI free to try?',
    a: 'Yes! Ojiva AI offers a free 14-day trial with no credit card required. You can explore all features including Bulk SMS, WhatsApp API, RCS Messaging, and Bulk Voice Call before choosing a paid plan.',
  },
  {
    q: 'How much does Ojiva AI cost?',
    a: 'Ojiva AI offers flexible pay-as-you-go pricing starting from ₹0.15/SMS. Enterprise plans with dedicated support, custom integrations, and volume discounts are available. Contact sales for a custom quote.',
  },
  {
    q: 'Does Ojiva AI support WhatsApp Business API?',
    a: 'Yes, Ojiva AI is an official WhatsApp Business Solution Provider (BSP) offering full WhatsApp Business API integration including bulk messaging, chatbot automation, interactive templates, and 98% open rate delivery across India.',
  },
  {
    q: 'How secure is Ojiva AI?',
    a: 'Ojiva AI uses AES-256 encryption, TLS 1.3 in transit, 2FA/TOTP authentication, and is SOC 2 Type II aligned. We are GDPR & DPDP Act compliant with 99.9% uptime SLA and ISO 27001 practices.',
  },
  {
    q: 'Where is Ojiva AI based?',
    a: 'Ojiva AI is headquartered in Bengaluru, Karnataka, India (Sahakara Nagar). We serve 500+ businesses across India and globally, with support available in English and Hindi.',
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
