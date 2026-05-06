import EcommerceRetailPage from '@/components/solutions/ecommerce-retail/EcommerceRetailPage';
import industryData from '@/components/solutions/ecommerce-retail/data';
import {
  buildMetadata,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from '@/lib/metadata';

// Per-industry SEO metadata
export const metadata = buildMetadata({
  title: 'WhatsApp & SMS Marketing for E-Commerce & Retail India',
  description: 'Recover abandoned carts, confirm COD, send shipping updates & win repeat purchases via WhatsApp API and Bulk SMS. Integrates with Shopify, WooCommerce & more.',
  path: '/solutions/ecommerce-retail',
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
  { name: industryData.name, url: 'https://www.ojiva.ai/solutions/ecommerce-retail/' },
]);

const service = serviceSchema({
  name: `${industryData.name} Communication Platform`,
  description: industryData.subtitle,
  url: '/solutions/ecommerce-retail/',
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
      <EcommerceRetailPage />
    </>
  );
}
