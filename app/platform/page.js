import { buildMetadata, breadcrumbSchema, serviceSchema } from '@/lib/metadata';
import PlatformPageContent from '@/components/platform/PlatformPage';

export const metadata = buildMetadata({
  title: 'AI Communication Platform India — SMS, WhatsApp, RCS & Voice',
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

const breadcrumb = breadcrumbSchema([
  { name: 'Home',     url: 'https://www.ojiva.ai/' },
  { name: 'Platform', url: 'https://www.ojiva.ai/platform/' },
]);

const platformService = serviceSchema({
  name: 'Ojiva AI Communication Platform',
  description: 'One platform for Bulk SMS, WhatsApp Business API, RCS Messaging, AI Voice automation, no-code workflows, and real-time analytics for Indian businesses.',
  url: '/platform/',
  keywords: ['AI communication platform India', 'CPaaS platform India', 'no-code workflow builder', 'omnichannel messaging platform'],
});

export default function PlatformPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(platformService) }} />
      <PlatformPageContent />
    </>
  );
}
