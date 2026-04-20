import { buildMetadata } from '@/lib/metadata';
import SupportPage from '@/components/support/SupportPage';

export const metadata = buildMetadata({
  title: 'Support — Get Help with Ojiva AI Platform',
  description:
    'Get instant support for Ojiva AI. Browse FAQs, submit a ticket, or chat with our team for help with Bulk SMS, WhatsApp API, RCS Messaging, and AI Voice services.',
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
