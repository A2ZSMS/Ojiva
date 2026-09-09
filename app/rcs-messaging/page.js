import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import RcsMessagingLanding from '@/components/landing/RcsMessagingLanding';

export const metadata = buildMetadata({
  title: 'RCS Business Messaging — Demo & Pricing',
  description:
    'Explore branded RCS messages, rich cards and interactive replies with Ojiva AI. Get a use-case demo, audience compatibility guidance and pricing.',
  path: '/rcs-messaging',
  canonicalPath: '/rcs',
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
    'RCS business messaging with branded conversations, rich cards and interactive actions. Explore onboarding, audience compatibility and API integration.',
  url: '/rcs-messaging/',
  keywords: ['RCS messaging India', 'RCS Business Messaging', 'Google RCS', 'RCS API India'],
});

const rcsBreadcrumb = breadcrumbSchema([
  { name: 'Home',          url: 'https://www.ojiva.ai/' },
  { name: 'RCS Messaging', url: 'https://www.ojiva.ai/rcs-messaging/' },
]);

const RCS_FAQS = [
  { q: 'What is RCS Business Messaging?', a: 'RCS lets businesses send branded, interactive messages with media, rich cards and suggested actions or replies in supported messaging apps. It gives customers more context and an easier way to take the next step.' },
  { q: 'How is it different from SMS?', a: 'SMS is primarily a text message. RCS can combine business branding, media and interactive choices in the conversation. RCS requires audience compatibility checks; it should not be assumed to reach every SMS recipient.' },
  { q: 'Will every customer receive an RCS message?', a: 'No. Availability depends on the device, messaging app, network and business messaging support. We’ll review audience compatibility and discuss the fallback approach for customers who cannot receive RCS.' },
  { q: 'Do customers need a separate app?', a: 'Customers receive RCS in a supported messaging app. They do not need to install your business’s own app, but their existing device and messaging setup must support RCS Business Messaging.' },
  { q: 'Can I connect RCS to my software?', a: 'Share your CRM, website or application and the workflow you want to build. We’ll review API integration, chatbot requirements and how customer responses should reach your team or software.' },
  { q: 'What affects pricing and launch timing?', a: 'Pricing depends on usage, features and integration needs. Launch timing also depends on brand verification, approvals and testing. We’ll explain the requirements and applicable charges for your proposed setup.' },
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
