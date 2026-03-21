import { buildMetadata } from '@/lib/metadata';
import PlatformPageContent from '@/components/platform/PlatformPage';

export const metadata = buildMetadata({
  title: 'Platform — AI Messaging, Voice, Leads & Workflow Automation',
  description:
    "Explore Ojiva AI's full platform — AI Messaging Engine, Voice Automation, Lead Intelligence, Workflow Orchestration, and API Integration Layer. Built on a decade of A2ZSMS infrastructure.",
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
