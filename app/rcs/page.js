import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import RcsPageContent from '@/components/services/rcs/RcsPage';

export const metadata = buildMetadata({
  title: "RCS Business Messaging India — Rich Cards & Verified",
  description:
    "India's best RCS messaging provider. Google-verified sender, rich cards & interactive buttons. 94% read rate. Upgrade from SMS to RCS today.",
  path: "/rcs",
  keywords: [
    "RCS Business Messaging India",
    "RCS messaging platform India",
    "RCS vs SMS India",
    "rich communication services India",
    "Google RCS business",
    "RCS API India",
    "branded messaging India",
    "RCS chatbot India",
    "next-gen SMS India",
    "RCS rich cards",
    "RCS carousel messages",
    "verified business sender India",
  ],
});

const rcsServiceSchema = serviceSchema({ name: 'RCS Business Messaging', description: 'Upgrade from SMS to RCS — rich cards, carousels, suggested replies, branded messages. Google-verified.', url: '/rcs/', keywords: ['RCS Business Messaging India', 'Google RCS', 'RCS API India'] });
const rcsBreadcrumb = breadcrumbSchema([{ name: 'Home', url: 'https://www.ojiva.ai/' }, { name: 'RCS Messaging', url: 'https://www.ojiva.ai/rcs/' }]);

const RCS_FAQS = [
  { q: 'What is RCS Business Messaging?', a: 'RCS (Rich Communication Services) is the next generation of SMS — delivering rich cards, carousels, images, videos, suggested replies, and interactive buttons inside the native Android message app. No app download needed by your customers.' },
  { q: 'How is RCS different from SMS?', a: 'SMS is plain text with no branding. RCS delivers a full multimedia experience — verified business name and logo, rich media, interactive buttons, carousels, and real-time read receipts. It\'s like WhatsApp built into the native Android messenger.' },
  { q: 'Which devices and networks support RCS?', a: 'RCS works on Android devices using Google Messages and is supported by 1 billion+ Android users worldwide. Major Indian telecom operators are rapidly expanding RCS coverage across the country.' },
  { q: 'Do I need a new phone number to use RCS?', a: 'No. You use your existing business number. Ojiva AI gets it Google-verified and branded — so customers see your business name and logo instead of an unknown number, building trust immediately.' },
  { q: 'What analytics are available for RCS campaigns?', a: 'Ojiva AI provides delivery reports, read receipts, button click tracking, engagement metrics, and A/B test results — giving you far deeper insights than traditional SMS to optimize every campaign.' },
  { q: 'Is RCS secure and spam-protected?', a: 'Yes. Google verifies every RCS sender before approval. All messages come from a certified business identity, eliminating spoofing and protecting your customers from phishing and fraud.' },
];

export default function RCSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rcsServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rcsBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(RCS_FAQS)) }} />
      <RcsPageContent faqs={RCS_FAQS} />
    </>
  );
}
