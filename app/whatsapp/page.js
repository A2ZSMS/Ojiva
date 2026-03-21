import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/metadata';
import WhatsappPageContent from '@/components/services/whatsapp/WhatsappPage';

export const metadata = buildMetadata({
  title: 'WhatsApp Business API India — Official Meta BSP Partner',
  description:
    "Send WhatsApp messages at scale with Ojiva AI — India's trusted WhatsApp Business API provider. Template messages, interactive buttons, catalogs, chatbots. Meta-approved BSP.",
  path: '/whatsapp',
  keywords: ['WhatsApp Business API India', 'WhatsApp Business solution provider India', 'WhatsApp chatbot India', 'WhatsApp marketing India', 'Meta BSP India', 'WhatsApp bulk messaging'],
});

const waServiceSchema = serviceSchema({ name: 'WhatsApp Business API', description: "India's trusted WhatsApp Business API provider — template messages, interactive buttons, catalogs, chatbots. Meta-approved BSP.", url: '/whatsapp', keywords: ['WhatsApp Business API India', 'WhatsApp chatbot', 'Meta BSP India'] });
const waBreadcrumb = breadcrumbSchema([{ name: 'Home', url: 'https://ojiva.ai/' }, { name: 'WhatsApp Business', url: 'https://ojiva.ai/whatsapp' }]);

export default function WhatsAppPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(waServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(waBreadcrumb) }} />
      <WhatsappPageContent />
    </>
  );
}
