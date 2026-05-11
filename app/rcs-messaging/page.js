import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import RcsMessagingLanding from '@/components/landing/RcsMessagingLanding';

export const metadata = buildMetadata({
  title: 'RCS Messaging India — Rich Business Messages, 3× Higher CTR',
  description:
    "India's best RCS messaging platform. Google-verified brand, rich cards & interactive buttons. 94% read rate, 3× higher CTR. Try free.",
  path: '/rcs-messaging',
  keywords: [
    'RCS messaging India',
    'RCS business messaging India',
    'RCS messaging service',
    'RCS messaging platform India',
    'rich communication services India',
    'Google RCS India',
    'RCS vs SMS India',
    'RCS rich cards India',
    'verified business messaging India',
    'RCS chatbot India',
    'interactive business messaging India',
    'RCS API India',
    'RCS marketing India',
    'branded messaging India',
  ],
});

const rcsMessagingService = serviceSchema({
  name: 'RCS Business Messaging India',
  description:
    'Upgrade from SMS to RCS — Google-verified brand identity, rich cards, interactive buttons, carousels, and real-time read receipts. 3× higher CTR than SMS. DLT compliant.',
  url: '/rcs-messaging/',
  keywords: ['RCS messaging India', 'RCS Business Messaging', 'Google RCS', 'RCS API India'],
});

const rcsBreadcrumb = breadcrumbSchema([
  { name: 'Home',          url: 'https://www.ojiva.ai/' },
  { name: 'RCS Messaging', url: 'https://www.ojiva.ai/rcs-messaging/' },
]);

const RCS_FAQS = [
  {
    q: 'What is RCS messaging?',
    a: 'RCS (Rich Communication Services) is the next generation of SMS. It delivers rich multimedia messages — including images, videos, carousels, interactive buttons, and suggested replies — directly inside the native Android messaging app. No app download required by your customers.',
  },
  {
    q: 'Which devices and networks support RCS in India?',
    a: 'RCS works on Android devices using Google Messages (the default messaging app on most Android phones). With 1 billion+ Android RCS users worldwide and rapid expansion by Indian telecom operators, RCS coverage is growing rapidly across India.',
  },
  {
    q: 'How is RCS different from regular SMS?',
    a: 'SMS is plain text with no branding, images, or interactivity. RCS delivers a full multimedia experience — verified business name and logo, rich media content, interactive CTA buttons, product carousels, real-time read receipts, and suggested replies. It achieves 94% read rates vs 45% for SMS and 3× higher click-through rates.',
  },
  {
    q: 'Do my customers need to install a separate app to receive RCS?',
    a: 'No. RCS messages are delivered natively through Google Messages, which is pre-installed on most Android devices. Your customers receive rich branded messages without downloading any additional app — making it far easier to adopt than WhatsApp or other messaging apps.',
  },
  {
    q: 'Is RCS more expensive than SMS?',
    a: 'RCS pricing is competitive with SMS and the higher engagement rates — 94% read rate, 3× CTR — make it significantly more cost-effective per conversion. Contact our team for a tailored pricing plan based on your monthly message volume.',
  },
  {
    q: 'How long does RCS sender verification take?',
    a: 'Google RCS sender verification typically takes 3–7 business days for brand approval. Once verified, your business name, logo, and verified tick appear on every message you send. Ojiva AI manages the entire verification process and supports you end-to-end.',
  },
];

export default function RcsMessagingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rcsMessagingService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rcsBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(RCS_FAQS)) }}
      />
      <RcsMessagingLanding faqs={RCS_FAQS} />
    </>
  );
}
