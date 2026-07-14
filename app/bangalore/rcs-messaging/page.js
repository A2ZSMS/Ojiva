import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import BangaloreChannelPage from '@/components/bangalore/BangaloreChannelPage';
import { rcsBangaloreData as data } from '@/components/bangalore/data/rcs';

export const metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: '/bangalore/rcs-messaging',
  keywords: data.keywords,
});

const service = serviceSchema({
  name: 'RCS Business Messaging — Bengaluru',
  description: data.definition,
  url: '/bangalore/rcs-messaging/',
  keywords: data.keywords,
  areaServed: ['Bengaluru', 'Karnataka'],
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://www.ojiva.ai/' },
  { name: 'Bangalore', url: 'https://www.ojiva.ai/bangalore/' },
  { name: 'RCS Messaging', url: 'https://www.ojiva.ai/bangalore/rcs-messaging/' },
]);

export default function BangaloreRcsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(data.faqs.map(({ q, a }) => ({ q, a })))) }} />
      <BangaloreChannelPage data={data} />
    </>
  );
}
