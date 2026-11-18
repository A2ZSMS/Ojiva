import HealthcarePage from '@/components/solutions/healthcare/HealthcarePage';
import industryData from '@/components/solutions/healthcare/data';
import {
  buildMetadata,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from '@/lib/metadata';

// Per-industry SEO metadata
export const metadata = buildMetadata({
  title: 'Bulk SMS & WhatsApp API for Hospitals & Healthcare India',
  description: 'Appointment reminders, lab report alerts, medication nudges & OTP via SMS and WhatsApp. Reduce no-shows, automate follow-ups. HIPAA-aware, DLT compliant.',
  path: '/solutions/healthcare',
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
  { name: industryData.name, url: 'https://www.ojiva.ai/solutions/healthcare/' },
]);

const service = serviceSchema({
  name: `${industryData.name} Communication Platform`,
  description: industryData.subtitle,
  url: '/solutions/healthcare/',
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
      <HealthcarePage />
    </>
  );
}
