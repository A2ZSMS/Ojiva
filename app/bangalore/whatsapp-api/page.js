import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import BangaloreChannelPage from '@/components/bangalore/BangaloreChannelPage';
import { whatsappApiBangaloreData as data } from '@/components/bangalore/data/whatsapp-api';

export const metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: '/bangalore/whatsapp-api',
  keywords: data.keywords,
});

const service = serviceSchema({
  name: 'WhatsApp Business API — Bengaluru',
  description: data.definition,
  url: '/bangalore/whatsapp-api/',
  keywords: data.keywords,
  areaServed: ['Bengaluru', 'Karnataka'],
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://www.ojiva.ai/' },
  { name: 'Bangalore', url: 'https://www.ojiva.ai/bangalore/' },
  { name: 'WhatsApp Business API', url: 'https://www.ojiva.ai/bangalore/whatsapp-api/' },
]);

export default function BangaloreWhatsappApiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(data.faqs.map(({ q, a }) => ({ q, a })))) }} />
      <BangaloreChannelPage data={data} />
    </>
  );
}
