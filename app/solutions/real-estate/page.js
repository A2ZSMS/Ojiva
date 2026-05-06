import RealEstatePage from '@/components/solutions/real-estate/RealEstatePage';
import industryData from '@/components/solutions/real-estate/data';
import {
  buildMetadata,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from '@/lib/metadata';

// Per-industry SEO metadata
export const metadata = buildMetadata({
  title: 'WhatsApp & Bulk SMS for Real Estate Lead Nurturing India',
  description: 'Deliver brochures instantly, automate site-visit reminders, send EMI alerts & keep buyers warm via WhatsApp API and Bulk SMS for Indian property developers.',
  path: '/solutions/real-estate',
  keywords: [
    `${industryData.name} CPaaS India`,
    `${industryData.name} SMS solution`,
    `${industryData.name} WhatsApp API`,
    `${industryData.name} customer communication`,
    `Bulk SMS for ${industryData.shortName}`,
    `WhatsApp Business API ${industryData.shortName} India`,
    `RCS messaging ${industryData.shortName}`,
    `Voice automation ${industryData.shortName}`,
  ],
});

// Page-level JSON-LD: BreadcrumbList + Service + FAQPage
const breadcrumb = breadcrumbSchema([
  { name: 'Home',            url: 'https://www.ojiva.ai/' },
  { name: 'Solutions',       url: 'https://www.ojiva.ai/solutions/' },
  { name: industryData.name, url: 'https://www.ojiva.ai/solutions/real-estate/' },
]);

const service = serviceSchema({
  name: `${industryData.name} Communication Platform`,
  description: industryData.subtitle,
  url: '/solutions/real-estate/',
  keywords: [
    `${industryData.name} CPaaS`,
    `${industryData.shortName} SMS`,
    `${industryData.shortName} WhatsApp Business API`,
    `${industryData.shortName} RCS`,
    `${industryData.shortName} Voice automation`,
  ],
});

const faq = faqSchema(industryData.faqs);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <RealEstatePage />
    </>
  );
}
