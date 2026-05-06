import InsurancePage from '@/components/solutions/insurance/InsurancePage';
import industryData from '@/components/solutions/insurance/data';
import {
  buildMetadata,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from '@/lib/metadata';

// Per-industry SEO metadata
export const metadata = buildMetadata({
  title: 'Bulk SMS & WhatsApp API for Insurance Companies India',
  description: 'Reduce lapsed policies with automated renewal reminders, claim status updates & KYC nudges via WhatsApp API and Bulk SMS for life, health & motor insurers.',
  path: '/solutions/insurance',
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
  { name: industryData.name, url: 'https://www.ojiva.ai/solutions/insurance/' },
]);

const service = serviceSchema({
  name: `${industryData.name} Communication Platform`,
  description: industryData.subtitle,
  url: '/solutions/insurance/',
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
      <InsurancePage />
    </>
  );
}
