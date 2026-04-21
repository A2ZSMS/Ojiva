import { buildMetadata } from '@/lib/metadata';
import DemoBooking from '@/components/book-demo/DemoBooking';

export const metadata = buildMetadata({
  title: 'Book a Free Demo — Live 30-Minute Platform Walkthrough',
  description:
    'Book a free 30-min Ojiva AI demo. Live walkthrough of Bulk SMS, WhatsApp API, RCS & Voice. Personalised for your business. No commitment required.',
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
