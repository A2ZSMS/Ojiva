import HomePage from '@/components/home/HomePage';
import {
  buildMetadata,
  breadcrumbSchema,
  faqSchema,
} from '@/lib/metadata';

/* ─────────────────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────────────────── */
export const metadata = buildMetadata({
  title: 'Ojiva AI — Bulk SMS, WhatsApp API & RCS Platform India',
  description:
    'India\'s #1 AI messaging platform. Bulk SMS, WhatsApp Business API, RCS & AI Voice at scale. DLT compliant, 10M+ messages/month. Trusted by 500+ businesses.',
  path: '/',
  keywords: [
    // Primary intent
    'powerful messaging solutions',
    'enterprise messaging platform',
    'secure messaging API India',
    'bulk SMS service India',
    'WhatsApp Business API provider India',
    'RCS messaging platform India',
    'AI voice call automation India',
    // Security
    'end to end encrypted messaging platform',
    'AES 256 encrypted API',
    'secure communication platform India',
    '2FA messaging platform',
    'GDPR compliant messaging India',
    'data encryption messaging API',
    // SMS
    'SMS API provider',
    'transactional SMS gateway India',
    'promotional SMS platform',
    'OTP SMS service India',
    'SMS marketing software',
    'enterprise bulk SMS India',
    'best SMS gateway India 2025',
    'automated SMS campaigns',
    'DLT registered SMS platform',
    // WhatsApp
    'WhatsApp bulk messaging platform',
    'WhatsApp chatbot automation',
    'WhatsApp marketing software India',
    'BSP WhatsApp India Meta partner',
    'WhatsApp API integration service',
    'click-to-WhatsApp ads India',
    // RCS
    'RCS Business Messaging platform India',
    'Rich Communication Services API',
    'interactive RCS campaigns',
    'RCS vs SMS marketing India',
    // Voice
    'AI voice call service India',
    'bulk voice call platform',
    'IVR replacement AI India',
    'outbound call automation software',
    'voice OTP service India',
    // Brand
    'Ojiva AI platform',
    'Ojiva AI demo',
    'Ojiva AI pricing',
    'best CPaaS platform India 2025',
    'omnichannel messaging platform India',
    'AI communication automation India',
    'enterprise messaging solution India',
    'A2ZSMS platform',
  ],
});

/* ─────────────────────────────────────────────────────────
   PAGE-LEVEL JSON-LD
───────────────────────────────────────────────────────── */
const homeBreadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://www.ojiva.ai/' },
]);

const HOME_FAQS = faqSchema([
  {
    q: 'What is Ojiva AI and what services does it offer?',
    a: "Ojiva AI is India's leading AI-powered business communication platform offering Bulk SMS, WhatsApp Business API, RCS Messaging, and AI Voice Call automation. Trusted by 500+ businesses across India for enterprise-grade messaging at scale.",
  },
  {
    q: 'Why is WhatsApp Business API the best tool for customer communication?',
    a: 'With over 500 million WhatsApp users in India, it offers businesses a direct and personal channel with 98% open rates. Ojiva AI, an official Meta BSP, enables bulk messaging, chatbot automation, interactive buttons, and real-time customer support — all in one platform.',
  },
  {
    q: 'How can I send personalized bulk SMS campaigns with Ojiva AI?',
    a: "Ojiva AI's bulk SMS platform lets you send personalized transactional, promotional, and OTP messages at scale. Include customer names, order details, and dynamic fields for a personal touch — fully DLT compliant with 98%+ delivery rates.",
  },
  {
    q: 'Is Ojiva AI compliant with TRAI DLT regulations?',
    a: 'Absolutely. Ojiva AI is fully TRAI DLT registered and compliant with all Indian telecom regulations. Every SMS route, sender ID, and template is properly registered — ensuring maximum deliverability and zero legal risk for your business.',
  },
  {
    q: 'How do I get started with Ojiva AI?',
    a: 'Getting started is simple — sign up on ojiva.ai, choose your service (SMS, WhatsApp, RCS, or Voice), and go live in under 24-48 hours. Our dedicated onboarding team guides you through every step, from setup to your first campaign.',
  },
]);

/* ─────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_FAQS) }} />
      <HomePage />
    </>
  );
}
