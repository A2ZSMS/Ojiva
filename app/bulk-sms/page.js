import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import BulkSmsLanding from '@/components/landing/BulkSmsLanding';

export const metadata = buildMetadata({
  title: 'Bulk SMS Service India — 10M+ Messages/Day, 99% Delivery',
  description:
    'Best bulk SMS service in India — OTP, transactional & promotional. DLT compliant, 99% delivery, sub-3s OTP. 500+ businesses trust Ojiva AI.',
  path: '/bulk-sms',
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
    'India\'s fastest bulk SMS gateway — promotional, transactional & OTP SMS. DLT compliant, 99% delivery rate, sub-3 second OTP delivery. Trusted by 500+ businesses.',
  url: '/bulk-sms/',
  keywords: ['bulk SMS India', 'transactional SMS', 'OTP SMS', 'DLT compliant SMS'],
});

const bulkSmsBreadcrumb = breadcrumbSchema([
  { name: 'Home',     url: 'https://www.ojiva.ai/' },
  { name: 'Bulk SMS', url: 'https://www.ojiva.ai/bulk-sms/' },
]);

const BULK_SMS_FAQS = [
  {
    q: 'What is bulk SMS service?',
    a: 'Bulk SMS service lets businesses send thousands of text messages simultaneously to customers\' mobile numbers. It is used for promotional campaigns, transactional alerts, OTP delivery, appointment reminders, and more. Ojiva AI\'s bulk SMS platform supports all message types with 99% delivery rate across all Indian networks.',
  },
  {
    q: 'What is DLT registration and is it mandatory?',
    a: 'DLT (Distributed Ledger Technology) registration is mandatory in India as per TRAI regulations. All businesses sending commercial SMS must register their Sender IDs, message templates, and entity details on the DLT portal. Ojiva AI is fully DLT compliant and helps you complete registration smoothly.',
  },
  {
    q: 'What is the difference between transactional and promotional SMS?',
    a: 'Transactional SMS carry critical business updates like OTPs, order confirmations, payment alerts, and delivery notifications — they can reach DND-registered numbers 24/7. Promotional SMS are used for marketing campaigns and offers but cannot be delivered to DND numbers and are restricted to daytime hours.',
  },
  {
    q: 'Can I send bulk SMS to DND-registered numbers?',
    a: 'No. Promotional SMS cannot be delivered to DND (Do Not Disturb) registered numbers as per TRAI regulations. However, transactional SMS — such as OTPs, alerts, and service updates — are exempt from DND restrictions and can reach all mobile users.',
  },
  {
    q: 'What delivery rate can I expect with Ojiva AI bulk SMS?',
    a: 'Ojiva AI consistently delivers 99%+ delivery rates for transactional and OTP SMS. Promotional SMS delivery depends on DND status of recipients, but our platform optimises routing across multiple telecom operators to maximise delivery. Real-time analytics let you track delivery, failures, and campaign performance.',
  },
  {
    q: 'How quickly can I go live with Ojiva AI bulk SMS?',
    a: 'Most businesses go live within 48 hours of signing up. Our team handles DLT sender ID setup, template registration, and API integration support. We also offer pre-built connectors for popular CRMs, e-commerce platforms, and marketing tools to speed up your go-live.',
  },
];

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
      <BulkSmsLanding faqs={BULK_SMS_FAQS} />
    </>
  );
}
