import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import BangaloreChannelPage from '@/components/bangalore/BangaloreChannelPage';
import { voiceIvrBangaloreData as data } from '@/components/bangalore/data/voice-ivr';

export const metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: '/bangalore/voice-ivr',
  keywords: data.keywords,
});

const service = serviceSchema({
  name: 'Bulk Voice Call & IVR — Bengaluru',
  description: data.definition,
  url: '/bangalore/voice-ivr/',
  keywords: data.keywords,
  areaServed: ['Bengaluru', 'Karnataka'],
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://www.ojiva.ai/' },
  { name: 'Bangalore', url: 'https://www.ojiva.ai/bangalore/' },
  { name: 'Voice & IVR', url: 'https://www.ojiva.ai/bangalore/voice-ivr/' },
]);

export default function BangaloreVoiceIvrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(data.faqs.map(({ q, a }) => ({ q, a })))) }} />
      <BangaloreChannelPage data={data} />
    </>
  );
}
