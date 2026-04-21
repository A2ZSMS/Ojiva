import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/metadata';
import AboutPageContent from '@/components/about/AboutPage';

export const metadata = buildMetadata({
  title: 'About Us — Enterprise AI Messaging Platform India',
  description:
    "Learn about Ojiva AI, India's enterprise messaging platform built on A2ZSMS' decade of expertise. Serving 500+ businesses with Bulk SMS, WhatsApp API & RCS.",
  path: '/about',
  keywords: [
    'about Ojiva AI',
    'A2ZSMS parent company',
    'Ojiva AI A2ZSMS',
    'bulk SMS India',
    'AI communication platform India',
    'enterprise messaging company',
    'Ojiva AI story',
    'AI startup Bengaluru',
    'AI communication company India',
    'business automation company',
    'Ojiva AI mission',
    'who is Ojiva',
  ],
});

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Ojiva AI',
  description: "Ojiva AI is India's leading AI communication platform and parent company of A2ZSMS.",
  url: 'https://www.ojiva.ai/about',
  mainEntity: { '@type': 'Organization', name: 'Ojiva AI', url: 'https://www.ojiva.ai' },
};
const aboutBreadcrumb = breadcrumbSchema([
  { name: 'Home',  url: 'https://www.ojiva.ai/' },
  { name: 'About', url: 'https://www.ojiva.ai/about' },
]);

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumb) }} />
      <AboutPageContent />
    </>
  );
}
