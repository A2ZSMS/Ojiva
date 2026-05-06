import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import WhatsappPageContent from '@/components/services/whatsapp/WhatsappPage';

export const metadata = buildMetadata({
  title: 'WhatsApp Business API India — Official Meta BSP Provider',
  description:
    "WhatsApp Business API from India's official Meta BSP. 98% open rate, chatbots, interactive buttons & catalogs. 5M+ messages/month.",
  path: '/whatsapp',
  keywords: ['WhatsApp Business API India', 'WhatsApp Business solution provider India', 'WhatsApp chatbot India', 'WhatsApp marketing India', 'Meta BSP India', 'WhatsApp bulk messaging'],
});

const waServiceSchema = serviceSchema({ name: 'WhatsApp Business API', description: "India's trusted WhatsApp Business API provider — template messages, interactive buttons, catalogs, chatbots. Meta-approved BSP.", url: '/whatsapp/', keywords: ['WhatsApp Business API India', 'WhatsApp chatbot', 'Meta BSP India'] });
const waBreadcrumb = breadcrumbSchema([{ name: 'Home', url: 'https://www.ojiva.ai/' }, { name: 'WhatsApp Business', url: 'https://www.ojiva.ai/whatsapp/' }]);

const WHATSAPP_FAQS = [
  { q: 'What is WhatsApp Business API?', a: 'WhatsApp Business API is a cloud-hosted solution that enables businesses to manage WhatsApp messaging at scale. Ojiva AI, an official Meta BSP, provides seamless integration — no server maintenance required.' },
  { q: 'How do I get started with Ojiva WhatsApp API?', a: 'Sign up on Ojiva AI, connect your WhatsApp Business number via Facebook Business Manager, and start sending messages. The entire onboarding takes under 48 hours with dedicated support.' },
  { q: 'What are the key benefits of WhatsApp Business API?', a: 'High scalability for large message volumes, real-time analytics, CRM and ERP integration, 98% open rates, interactive buttons, product catalogs, and reliable cloud infrastructure without ongoing maintenance.' },
  { q: 'Is WhatsApp messaging secure?', a: 'Yes. WhatsApp uses end-to-end encryption for all messages. Ojiva AI\'s platform is hosted on secure, compliant infrastructure aligned with global privacy standards including GDPR.' },
  { q: 'Can I use WhatsApp API for customer support?', a: 'Absolutely. Automate responses to common queries, route conversations to the right agents, and provide personalized support — all from a single dashboard with full conversation history and context.' },
  { q: 'What kind of businesses benefit from WhatsApp API?', a: 'E-commerce, healthcare, education, banking, travel, and real estate businesses benefit greatly — any business that needs fast, reliable, and personal customer communication at scale.' },
  { q: 'Can I integrate WhatsApp API with my existing CRM or ERP?', a: 'Yes, Ojiva AI integrates with popular CRMs, ERPs, payment gateways, and marketing automation tools. Pre-built integrations and REST APIs make setup straightforward for your tech team.' },
  { q: 'What analytics does the WhatsApp API provide?', a: 'Delivery rates, read receipts, click-through rates, engagement metrics, and campaign performance insights — all available in Ojiva AI\'s real-time analytics dashboard for data-driven decisions.' },
];

export default function WhatsAppPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(waServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(waBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(WHATSAPP_FAQS)) }} />
      <WhatsappPageContent faqs={WHATSAPP_FAQS} />
    </>
  );
}
