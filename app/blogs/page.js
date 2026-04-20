import { buildMetadata } from '@/lib/metadata';
import BlogList from './client';

export const metadata = buildMetadata({
  title: 'Blog — Bulk SMS, WhatsApp & RCS Insights India | Ojiva AI',
  description:
    'Expert insights on Bulk SMS, WhatsApp Business API, RCS & AI Voice for Indian businesses. Tips, trends & best practices from Ojiva AI.',
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
