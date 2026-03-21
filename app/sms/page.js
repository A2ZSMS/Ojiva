import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/metadata';
import SmsPageContent from '@/components/services/sms/SmsPage';

export const metadata = buildMetadata({
  title: 'Bulk SMS Service India — Transactional, Promotional & OTP SMS',
  description:
    "Send millions of SMS messages instantly with Ojiva AI — India's #1 bulk SMS platform. Transactional SMS, promotional campaigns, OTP delivery, DLT compliant. 98%+ delivery rate.",
  path: '/sms',
  keywords: [
    'bulk SMS service India', 'transactional SMS gateway India', 'promotional SMS platform',
    'OTP SMS service India', 'best SMS API provider India', 'DLT registered SMS gateway',
    'SMS marketing software', 'enterprise bulk SMS India', 'automated SMS campaigns',
    'two-way SMS India', 'SMS OTP API', 'low cost bulk SMS India',
  ],
});

const smsServiceSchema = serviceSchema({ name: 'Bulk SMS Service', description: "India's #1 bulk SMS platform — transactional, promotional, OTP. DLT compliant, 98%+ delivery.", url: '/sms', keywords: ['bulk SMS India', 'transactional SMS', 'OTP SMS', 'SMS API'] });
const smsBreadcrumb = breadcrumbSchema([{ name: 'Home', url: 'https://ojiva.ai/' }, { name: 'Bulk SMS', url: 'https://ojiva.ai/sms' }]);

export default function SMSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(smsServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(smsBreadcrumb) }} />
      <SmsPageContent />
    </>
  );
}
