import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/metadata';
import VoicePageContent from '@/components/services/voice/VoicePage';

export const metadata = buildMetadata({
  title: 'AI Voice Call Automation India — IVR, OBD & Conversational AI',
  description:
    'Automate customer calls with Ojiva AI Voice. Outbound dialer, IVR builder, AI voice bots, OBD campaigns, and missed call services. 99.9% call connect rate. Trusted by 500+ enterprises.',
  path: '/voice',
  keywords: [
    'AI voice call automation India', 'outbound calling platform India', 'IVR solution India',
    'OBD outbound dialer India', 'voice bot India', 'automated voice call India',
    'missed call service India', 'voice broadcasting India', 'AI phone bot India',
    'cloud telephony India', 'conversational AI voice India', 'enterprise voice API India',
  ],
});

const voiceServiceSchema = serviceSchema({ name: 'AI Voice Call Automation', description: 'Automate customer calls — outbound dialer, IVR, AI voice bots. 99.9% connect rate.', url: '/voice', keywords: ['AI voice call India', 'outbound dialer', 'IVR solution', 'voice bot India'] });
const voiceBreadcrumb = breadcrumbSchema([{ name: 'Home', url: 'https://ojiva.ai/' }, { name: 'AI Voice', url: 'https://ojiva.ai/voice' }]);

export default function VoicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceBreadcrumb) }} />
      <VoicePageContent />
    </>
  );
}
