import { buildMetadata } from '@/lib/metadata';
import DemoBooking from './DemoBooking';

export const metadata = buildMetadata({
  title: 'Book a Free Demo — Ojiva AI | 30-Minute Personalised Walkthrough',
  description:
    'Schedule your free 30-minute Ojiva AI demo. Get a live walkthrough of Bulk SMS, WhatsApp API, RCS, and AI Voice built around your specific use case. No commitment required.',
  path: '/book-demo',
  keywords: [
    'book a demo Ojiva AI',
    'Ojiva AI free demo',
    'schedule AI demo India',
    'WhatsApp API live demo',
    'bulk SMS platform demo',
    'AI communication platform walkthrough',
    'Ojiva AI trial',
    'request Ojiva pricing',
    'free SMS API demo India',
  ],
});

export default function BookDemoPage() {
  return <DemoBooking />;
}
