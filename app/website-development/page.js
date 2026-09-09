import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import WebsiteLanding from '@/components/landing/WebsiteLanding';

export const metadata = buildMetadata({
  title: 'Website Design & Development — Demo & Planning | Ojiva AI',
  description: 'Plan a clear, responsive website for your business with Ojiva AI. Explore website design, redesign, landing pages, ecommerce and web application development.',
  path: '/website-development',
  keywords: ['website design India', 'website development India', 'business website redesign', 'landing page design India', 'responsive website development', 'ecommerce website development India', 'web application development India'],
});

const faqs = [
  { q: 'What type of website can you build?', a: 'We can plan a new business website, redesign an existing site, create campaign landing pages, build ecommerce experiences or scope a web application or portal.' },
  { q: 'Do I need a finished brief?', a: 'No. Bring your business goal, current website or campaign idea. We’ll help define the pages, content, priority actions and technical scope.' },
  { q: 'Will the website work on mobile?', a: 'Yes. Responsive behaviour is planned from the start, with checks across mobile, tablet and desktop layouts.' },
  { q: 'Can you connect forms and other tools?', a: 'We can discuss your CRM, analytics, lead forms, payments, APIs or other tools during planning and define what the website needs to connect.' },
  { q: 'How much does a website cost?', a: 'The scope depends on page count, content, design depth, integrations and whether the project is a marketing site, ecommerce experience or web application. We’ll discuss the scope before preparing a quote.' },
];

const websiteService = serviceSchema({ name: 'Website Design & Development', description: 'Responsive business websites, redesigns, campaign landing pages, ecommerce websites and web applications planned around clear customer journeys.', url: '/website-development/', keywords: ['website development India', 'responsive website design'] });
const breadcrumb = breadcrumbSchema([{ name: 'Home', url: 'https://www.ojiva.ai/' }, { name: 'Website Development', url: 'https://www.ojiva.ai/website-development/' }]);

export default function WebsiteDevelopmentPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteService) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} /><WebsiteLanding /></>;
}
