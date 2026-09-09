import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import { SMS_FAQS as BULK_SMS_FAQS } from '@/components/landing/bulk-sms/data';
import BulkSmsLanding from '@/components/landing/BulkSmsLanding';

export const metadata = buildMetadata({
  title: 'Bulk SMS Service India — Demo & Pricing',
  description:
    'Promotional, transactional, Service Explicit and OTP SMS from Ojiva AI. Explore API integration, SMPP connectivity and our SMS reseller panel. Get pricing.',
  path: '/bulk-sms',
  canonicalPath: '/sms',
  keywords: [
    'bulk SMS service India',
    'bulk SMS provider India',
    'best bulk SMS service',
    'bulk SMS gateway India',
    'bulk SMS marketing India',
    'promotional SMS service India',
    'transactional SMS India',
    'OTP SMS service India',
    'DLT compliant SMS India',
    'bulk SMS API India',
    'Service Explicit SMS',
    'SMPP provider India',
    'SMS reseller panel',
    'SMS marketing platform India',
    'enterprise bulk SMS India',
    'cheap bulk SMS India',
    'bulk SMS software',
    'send bulk SMS India',
  ],
});

const bulkSmsService = serviceSchema({
  name: 'Bulk SMS Service India',
  description:
    'Promotional, transactional, Service Explicit and OTP SMS services, with API integration, SMPP connectivity, reseller panel and DLT onboarding guidance.',
  url: '/bulk-sms/',
  keywords: ['bulk SMS India', 'transactional SMS', 'OTP SMS', 'DLT compliant SMS'],
});

const bulkSmsBreadcrumb = breadcrumbSchema([
  { name: 'Home',     url: 'https://www.ojiva.ai/' },
  { name: 'Bulk SMS', url: 'https://www.ojiva.ai/bulk-sms/' },
]);



export default function BulkSmsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bulkSmsService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bulkSmsBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(BULK_SMS_FAQS)) }}
      />
      <BulkSmsLanding />
    </>
  );
}
