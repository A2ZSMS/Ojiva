import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/metadata';
import AboutPageContent from '@/components/about/AboutPage';

export const metadata = buildMetadata({
  title: 'About Ojiva AI — Born from A2ZSMS, Built for Enterprise AI',
  description:
    "Ojiva AI is India's leading AI communication platform and parent company of A2ZSMS. Discover our decade-long journey in enterprise messaging and our vision for AI-driven communication.",
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
  url: 'https://ojiva.ai/about',
  mainEntity: { '@type': 'Organization', name: 'Ojiva AI', url: 'https://ojiva.ai' },
};
const aboutBreadcrumb = breadcrumbSchema([
  { name: 'Home',  url: 'https://ojiva.ai/' },
  { name: 'About', url: 'https://ojiva.ai/about' },
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
