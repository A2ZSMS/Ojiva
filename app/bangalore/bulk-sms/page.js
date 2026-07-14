import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import BangaloreChannelPage from '@/components/bangalore/BangaloreChannelPage';
import { bulkSmsBangaloreData as data } from '@/components/bangalore/data/bulk-sms';

export const metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: '/bangalore/bulk-sms',
  keywords: data.keywords,
});

const service = serviceSchema({
  name: 'Bulk SMS Service — Bengaluru',
  description: data.definition,
  url: '/bangalore/bulk-sms/',
  keywords: data.keywords,
  areaServed: ['Bengaluru', 'Karnataka'],
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://www.ojiva.ai/' },
  { name: 'Bangalore', url: 'https://www.ojiva.ai/bangalore/' },
  { name: 'Bulk SMS', url: 'https://www.ojiva.ai/bangalore/bulk-sms/' },
]);

export default function BangaloreBulkSmsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(data.faqs.map(({ q, a }) => ({ q, a })))) }} />
      <BangaloreChannelPage data={data} />
    </>
  );
}
