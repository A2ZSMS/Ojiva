import OtpPage from '@/components/services/otp/OtpPage';
import {
  buildMetadata,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'OTP SMS Service India — Fast Delivery via SMS & WhatsApp',
  description:
    'Send OTP in under 3 seconds via SMS, WhatsApp or Voice call. 99.9% delivery rate. TRAI DLT compliant. AES-256 encrypted. Trusted by 500+ businesses across India.',
  path: '/otp',
  keywords: [
    'OTP SMS service India',
    'SMS OTP API',
    'OTP verification service India',
    'two-factor authentication SMS',
    '2FA SMS India',
    'instant OTP delivery',
    'OTP SMS provider India',
    'WhatsApp OTP India',
    'voice OTP service',
    'DLT compliant OTP',
    'OTP gateway India',
    'bulk OTP SMS',
  ],
});

// OTP FAQs — written generically so the page does not commit to specific
// SLAs, prices or vendor claims that the team hasn't approved. Replace any
// answer with verified copy as the marketing team confirms each metric.
const OTP_FAQS = [
  {
    q: 'What is OTP and why does my business need it?',
    a: 'OTP (One-Time Password) is a unique numeric or alphanumeric code generated for a single login or transaction. Indian businesses use OTP to secure logins, verify customer identity, authorise payments, confirm orders, and prevent fraud — it is a regulatory requirement for banking, payments, and most e-commerce flows.',
  },
  {
    q: 'Which channels can I send OTPs over?',
    a: 'Ojiva AI supports OTP delivery via SMS, WhatsApp Business API, and automated Voice calls. You can use a single channel or configure multi-channel fallback so that an alternative channel is tried automatically if the first one fails.',
  },
  {
    q: 'Is the OTP service DLT compliant?',
    a: 'Yes — our SMS OTP service is built around the TRAI DLT framework. We assist with sender ID registration, template approval, and consent flows so your transactional and OTP traffic is whitelisted on the DLT platform.',
  },
  {
    q: 'How is the OTP service priced?',
    a: 'OTP is priced channel-wise — SMS, WhatsApp and Voice each have their own per-event rate, with volume discounts on higher tiers. See the pricing page for current rates, or contact sales for enterprise volumes.',
  },
  {
    q: 'How do I integrate Ojiva AI OTP into my app?',
    a: 'A single REST API handles OTP generation, multi-channel delivery, and verification. Code samples are available so most integrations can be wired up by a developer in a short session.',
  },
  {
    q: 'Is my customer data secure?',
    a: 'All API traffic is encrypted in transit and at rest. OTP codes are never stored in plaintext — only verified against a hash, with automatic expiry and one-time-use enforcement. Detailed security and compliance documentation is available on request.',
  },
];

const breadcrumb = breadcrumbSchema([
  { name: 'Home',           url: 'https://www.ojiva.ai/' },
  { name: 'OTP & 2FA',      url: 'https://www.ojiva.ai/otp/' },
]);

const service = serviceSchema({
  name: 'OTP SMS Service India',
  description:
    'Instant OTP verification via SMS, WhatsApp Business API, and Voice calls. Under 3-second delivery, 99.9% success rate, TRAI DLT compliant, AES-256 encrypted.',
  url: '/otp/',
  keywords: [
    'OTP SMS service India',
    'SMS OTP API India',
    'OTP verification service',
    'two-factor authentication',
    '2FA SMS India',
    'WhatsApp OTP',
    'voice OTP',
    'DLT compliant OTP',
  ],
});

const faq = faqSchema(OTP_FAQS);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <OtpPage faqs={OTP_FAQS} />
    </>
  );
}
