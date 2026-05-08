import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/metadata';
import SmsPageContent from '@/components/services/sms/SmsPage';

export const metadata = buildMetadata({
  title: "Best Bulk SMS Service Provider in Bangalore",
  description:
    "Top Bulk SMS service provider in Bangalore. Reliable business SMS solutions for OTP, promotional, transactional, and marketing campaigns.",
  path: "/sms",
  keywords: [
    "bulk SMS service India",
    "transactional SMS gateway India",
    "promotional SMS platform",
    "OTP SMS service India",
    "best SMS API provider India",
    "DLT registered SMS gateway",
    "SMS marketing software",
    "enterprise bulk SMS India",
    "automated SMS campaigns",
    "two-way SMS India",
    "SMS OTP API",
    "low cost bulk SMS India",
  ],
});

const smsServiceSchema = serviceSchema({ name: 'Bulk SMS Service', description: "India's #1 bulk SMS platform — transactional, promotional, OTP. DLT compliant, 98%+ delivery.", url: '/sms/', keywords: ['bulk SMS India', 'transactional SMS', 'OTP SMS', 'SMS API'] });
const smsBreadcrumb = breadcrumbSchema([{ name: 'Home', url: 'https://www.ojiva.ai/' }, { name: 'Bulk SMS', url: 'https://www.ojiva.ai/sms/' }]);

const SMS_FAQS = [
  { q: 'What is Promotional SMS?', a: 'Promotional SMS are bulk text messages sent to a large audience to promote products, services, or offers. Ojiva AI helps you run affordable, high-reach SMS campaigns — ideal for flash sales, exclusive deals, and event promotions.' },
  { q: 'How are Transactional SMS different from Promotional SMS?', a: 'Transactional SMS deliver critical updates like order confirmations, payment alerts, and OTPs — and can reach DND numbers. Promotional SMS are for marketing campaigns and are restricted from reaching DND-registered numbers.' },
  { q: 'What is OTP SMS and why does my business need it?', a: 'OTP (One-Time Password) SMS verifies user identity during logins, transactions, or account recovery. It\'s essential for banking, e-commerce, and healthcare to prevent fraud and secure sensitive operations.' },
  { q: 'Can I schedule SMS campaigns in advance?', a: 'Yes! Ojiva AI lets you schedule campaigns for any future date and time — perfect for time-sensitive promotions, reminders, and festive offers to maximize reach when your audience is most active.' },
  { q: 'Is Ojiva AI DLT compliant?', a: 'Absolutely. Ojiva AI is fully TRAI DLT registered. All your SMS routes comply with Indian telecom regulations — ensuring maximum deliverability and zero legal risk for your business.' },
  { q: 'How secure is SMS communication for sensitive data?', a: 'Ojiva AI follows industry-standard encryption and data protection practices. Our platform is built for industries like banking and healthcare where data security is non-negotiable.' },
];

export default function SMSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(smsServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(smsBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(SMS_FAQS)) }} />
      <SmsPageContent faqs={SMS_FAQS} />
    </>
  );
}
