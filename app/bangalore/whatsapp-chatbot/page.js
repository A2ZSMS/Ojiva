import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import BangaloreChannelPage from '@/components/bangalore/BangaloreChannelPage';
import { whatsappChatbotBangaloreData as data } from '@/components/bangalore/data/whatsapp-chatbot';

export const metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: '/bangalore/whatsapp-chatbot',
  keywords: data.keywords,
});

const service = serviceSchema({
  name: 'WhatsApp Chatbot — Bengaluru',
  description: data.definition,
  url: '/bangalore/whatsapp-chatbot/',
  keywords: data.keywords,
  areaServed: ['Bengaluru', 'Karnataka'],
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://www.ojiva.ai/' },
  { name: 'Bangalore', url: 'https://www.ojiva.ai/bangalore/' },
  { name: 'WhatsApp Chatbot', url: 'https://www.ojiva.ai/bangalore/whatsapp-chatbot/' },
]);

export default function BangaloreWhatsappChatbotPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(data.faqs.map(({ q, a }) => ({ q, a })))) }} />
      <BangaloreChannelPage data={data} />
    </>
  );
}
