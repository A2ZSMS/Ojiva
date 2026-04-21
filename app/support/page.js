import { buildMetadata } from '@/lib/metadata';
import SupportPage from '@/components/support/SupportPage';

export const metadata = buildMetadata({
  title: 'Help & Support — Bulk SMS, WhatsApp & RCS API',
  description:
    'Get instant support for Ojiva AI. Browse FAQs for Bulk SMS, WhatsApp API, RCS & Voice. Submit a ticket or chat with our team.',
  path: '/support',
  keywords: [
    'Ojiva AI support', 'bulk SMS help', 'WhatsApp API support India',
    'RCS messaging help', 'AI voice support', 'Ojiva contact support',
    'messaging platform help', 'SMS API troubleshooting',
  ],
});

export default function SupportPageWrapper() {
  return <SupportPage />;
}
