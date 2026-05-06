import { buildMetadata, breadcrumbSchema } from '@/lib/metadata';
import SupportPage from '@/components/support/SupportPage';

export const metadata = buildMetadata({
  title: 'Help & Support — Bulk SMS, WhatsApp API & RCS India',
  description:
    'Get instant support for Ojiva AI. Browse FAQs, submit a support ticket or chat with our team for Bulk SMS, WhatsApp API, RCS & AI Voice issues.',
  path: '/support',
  keywords: [
    'Ojiva AI support', 'bulk SMS help', 'WhatsApp API support India',
    'RCS messaging help', 'AI voice support', 'Ojiva contact support',
    'messaging platform help', 'SMS API troubleshooting',
  ],
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home',    url: 'https://www.ojiva.ai/' },
  { name: 'Support', url: 'https://www.ojiva.ai/support/' },
]);

export default function SupportPageWrapper() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SupportPage />
    </>
  );
}
