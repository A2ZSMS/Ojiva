import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import VoicePageContent from '@/components/services/voice/VoicePage';

export const metadata = buildMetadata({
  title: 'Bulk Voice Call India — IVR, OBD & AI Voice Automation',
  description:
    'Automate customer calls with IVR, OBD & AI voice bots. 99.9% connect rate, 10M+ calls/month, 10+ languages. Reduce call centre costs by 60%.',
  path: '/voice',
  keywords: [
    'AI voice call automation India', 'outbound calling platform India', 'IVR solution India',
    'OBD outbound dialer India', 'voice bot India', 'automated voice call India',
    'missed call service India', 'voice broadcasting India', 'AI phone bot India',
    'cloud telephony India', 'conversational AI voice India', 'enterprise voice API India',
  ],
});

const voiceServiceSchema = serviceSchema({ name: 'AI Voice Call Automation', description: 'Automate customer calls — outbound dialer, IVR, AI voice bots. 99.9% connect rate.', url: '/voice', keywords: ['AI voice call India', 'outbound dialer', 'IVR solution', 'voice bot India'] });
const voiceBreadcrumb = breadcrumbSchema([{ name: 'Home', url: 'https://www.ojiva.ai/' }, { name: 'AI Voice', url: 'https://www.ojiva.ai/voice' }]);

const VOICE_FAQS = [
  { q: 'What is a Bulk Voice Call service?', a: 'Bulk Voice Call lets you send automated voice messages to thousands of customers simultaneously — ideal for alerts, promotions, appointment reminders, and lead nurturing without requiring a human agent for every call.' },
  { q: 'What is IVR and how does Ojiva AI use it?', a: 'IVR (Interactive Voice Response) lets callers interact with your system via keypad inputs or voice commands. Ojiva AI\'s AI-powered IVR routes calls, captures data, and resolves queries automatically — 24/7, without human intervention.' },
  { q: 'What is OBD (Outbound Dialer) calling?', a: 'OBD automatically dials a list of numbers and plays a pre-recorded message or connects to a live agent. It\'s used for payment reminders, promotional offers, and customer surveys — reaching thousands of contacts in minutes.' },
  { q: 'Can I personalize voice messages for each recipient?', a: 'Yes! Ojiva AI supports dynamic variable insertion — personalize each message with the customer\'s name, order ID, due amount, or any custom field from your CRM or data file for higher engagement.' },
  { q: 'How does auto-retry logic work?', a: 'If a call is unanswered or the line is busy, Ojiva AI automatically retries at configured intervals. This maximizes your contact rate without any manual effort, ensuring no lead or customer goes unreached.' },
  { q: 'What call analytics does Ojiva AI provide?', a: 'Real-time dashboards show call delivery rates, answer rates, call duration, IVR key-press responses, and campaign ROI — giving you the data needed to optimize every outbound voice campaign.' },
];

export default function VoicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(VOICE_FAQS)) }} />
      <VoicePageContent faqs={VOICE_FAQS} />
    </>
  );
}
