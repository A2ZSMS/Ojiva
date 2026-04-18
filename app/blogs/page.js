import { buildMetadata } from '@/lib/metadata';
import BlogList from './client';

export const metadata = buildMetadata({
  title: 'Blog — SMS, WhatsApp, RCS & AI Voice Insights | Ojiva AI',
  description:
    'Read expert blogs on Bulk SMS, WhatsApp Business API, RCS Messaging, and AI Voice Call automation. Stay updated with the latest tips, trends, and insights for Indian businesses.',
  path: '/blogs',
  keywords: [
    'Ojiva AI blog', 'bulk SMS tips India', 'WhatsApp API blog', 'RCS messaging insights',
    'AI voice call automation blog', 'business messaging trends India', 'SMS marketing tips',
    'WhatsApp marketing blog India', 'enterprise communication insights',
  ],
});

export default function BlogsPage() {
  return <BlogList />;
}
