import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/metadata';
import RcsPageContent from '@/components/services/rcs/RcsPage';

export const metadata = buildMetadata({
  title: 'RCS Business Messaging India — Next-Gen Rich SMS by Google',
  description:
    'Upgrade from SMS to RCS with Ojiva AI. Send rich cards, carousels, suggested replies, and branded messages. Google-verified sender. Higher engagement, better conversions.',
  path: '/rcs',
  keywords: [
    'RCS Business Messaging India', 'RCS messaging platform India', 'RCS vs SMS India',
    'rich communication services India', 'Google RCS business', 'RCS API India',
    'branded messaging India', 'RCS chatbot India', 'next-gen SMS India',
    'RCS rich cards', 'RCS carousel messages', 'verified business sender India',
  ],
});

const rcsServiceSchema = serviceSchema({ name: 'RCS Business Messaging', description: 'Upgrade from SMS to RCS — rich cards, carousels, suggested replies, branded messages. Google-verified.', url: '/rcs', keywords: ['RCS Business Messaging India', 'Google RCS', 'RCS API India'] });
const rcsBreadcrumb = breadcrumbSchema([{ name: 'Home', url: 'https://ojiva.ai/' }, { name: 'RCS Messaging', url: 'https://ojiva.ai/rcs' }]);

export default function RCSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rcsServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rcsBreadcrumb) }} />
      <RcsPageContent />
    </>
  );
}
