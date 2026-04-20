import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import ChatbotPageClient from '@/components/services/whatsapp-chatbot/ChatbotPageClient';

export const metadata = buildMetadata({
  title: 'WhatsApp Chatbot India — AI Automation & No-Code | Ojiva AI',
  description:
    'Build AI WhatsApp chatbots without code. Automate sales, support & leads 24/7 in 20+ languages. 87% queries auto-resolved. Trusted by 500+ businesses in India.',
  path: '/whatsapp-chatbot',
  keywords: [
    'WhatsApp chatbot India', 'WhatsApp AI chatbot', 'WhatsApp automation India',
    'WhatsApp bot builder', 'no-code WhatsApp chatbot', 'WhatsApp chatbot for business',
    'WhatsApp chatbot API', 'AI chatbot WhatsApp India', 'WhatsApp chatbot for ecommerce',
    'WhatsApp chatbot platform India', 'best WhatsApp chatbot provider India',
  ],
});

const CHATBOT_FAQS = [
  { q: 'What is a WhatsApp Chatbot?', a: 'A WhatsApp chatbot is an AI-powered messaging tool on WhatsApp Business API. It answers queries, qualifies leads, processes orders, and handles conversations 24/7 — without human intervention.' },
  { q: 'Do I need coding skills?', a: 'No! Ojiva AI provides a visual, no-code drag-and-drop flow builder. Create complex flows, set triggers, and deploy in minutes — no technical skills required.' },
  { q: 'How much does it cost?', a: 'Flexible pricing from ₹999/month for small businesses. Enterprise plans with advanced AI, unlimited conversations, and dedicated support available.' },
  { q: 'Can it hand off to a human agent?', a: 'Yes! Seamless human handoff when AI detects complex queries. The conversation transfers instantly with full chat context to a live agent.' },
  { q: 'Is it Meta compliant?', a: 'Absolutely. Ojiva AI is an official Meta BSP. All interactions comply with Meta\'s Commerce Policy, Business Messaging Policy, and WhatsApp Business API terms.' },
  { q: 'How many languages?', a: 'Supports 20+ languages including Hindi, English, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam — with auto-detection.' },
];

const chatbotServiceSchema = serviceSchema({ name: 'WhatsApp Chatbot', description: "India's leading WhatsApp chatbot platform — no-code builder, AI NLP, lead qualification, multi-language.", url: '/whatsapp-chatbot', keywords: ['WhatsApp chatbot India', 'WhatsApp AI chatbot'] });
const chatbotBreadcrumb = breadcrumbSchema([{ name: 'Home', url: 'https://www.ojiva.ai/' }, { name: 'WhatsApp Chatbot', url: 'https://www.ojiva.ai/whatsapp-chatbot' }]);

export default function WhatsAppChatbotPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(chatbotServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(chatbotBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(CHATBOT_FAQS)) }} />
      <ChatbotPageClient faqs={CHATBOT_FAQS} />
    </>
  );
}
