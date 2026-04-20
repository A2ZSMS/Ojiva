import { buildMetadata } from '@/lib/metadata';
import PlatformPageContent from '@/components/platform/PlatformPage';

export const metadata = buildMetadata({
  title: 'Ojiva AI Platform — SMS, WhatsApp & AI Automation Tools',
  description:
    "One platform for Bulk SMS, WhatsApp API, RCS, Voice & AI automation. No-code workflows, API integration & real-time analytics for India.",
  path: '/platform',
  keywords: [
    'AI messaging engine',
    'WhatsApp API integration',
    'bulk WhatsApp messaging software',
    'AI voice automation platform',
    'AI IVR system',
    'automated call center AI',
    'lead scoring software',
    'lead enrichment tool',
    'workflow automation builder',
    'no-code automation platform',
    'REST API integration platform',
    'enterprise webhook automation',
    'Ojiva platform pricing',
    'Ojiva API documentation',
    'CRM automation software',
    'sales pipeline automation',
    'conversational AI for sales',
    'SMS campaign management tool',
    'multi-channel marketing automation',
  ],
});

export default function PlatformPage() {
  return <PlatformPageContent />;
}
