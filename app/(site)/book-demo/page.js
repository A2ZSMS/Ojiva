import { buildMetadata, breadcrumbSchema } from '@/lib/metadata';
import DemoBooking from '@/components/book-demo/DemoBooking';

export const metadata = buildMetadata({
  title: 'Book Free Demo — Bulk SMS, WhatsApp API & RCS Platform',
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

const breadcrumb = breadcrumbSchema([
  { name: 'Home',      url: 'https://www.ojiva.ai/' },
  { name: 'Book Demo', url: 'https://www.ojiva.ai/book-demo/' },
]);

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Free Ojiva AI Platform Demo',
  description: 'Live 30-minute walkthrough of Bulk SMS, WhatsApp Business API, RCS Messaging and AI Voice automation. Personalised for your business.',
  organizer: {
    '@type': 'Organization',
    name: 'Ojiva AI',
    url: 'https://www.ojiva.ai',
  },
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  url: 'https://www.ojiva.ai/book-demo/',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    url: 'https://www.ojiva.ai/book-demo/',
    description: 'Free — no credit card required',
  },
};

export default function BookDemoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <DemoBooking />
    </>
  );
}
