import HomePage from '@/components/home/HomePage';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumb } from '../public/Schema/BreadCrumb';
import { FAQ } from '../public/Schema/FaqSchema';
import { Ojiva_Service } from '../public/Schema/HomeSchema';
import { Organization } from '../public/Schema/Organization';
import { Website_Schema } from '../public/Schema/Website';

/* ─────────────────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────────────────── */
export const metadata = buildMetadata({
  title: 'Bulk SMS, WhatsApp API & RCS Communication Platform India',
  description:
    'India\'s #1 enterprise messaging platform. Bulk SMS, WhatsApp Business API, RCS & AI Voice at scale. DLT compliant, 10M+ messages/month. Trusted by 500+ businesses.',
  path: '/',
  keywords: [
    // Primary intent
    'powerful messaging solutions',
    'enterprise messaging platform',
    'secure messaging API India',
    'bulk SMS service India',
    'WhatsApp Business API provider India',
    'RCS messaging platform India',
    'AI voice call automation India',
    // Security
    'end to end encrypted messaging platform',
    'AES 256 encrypted API',
    'secure communication platform India',
    '2FA messaging platform',
    'GDPR compliant messaging India',
    'data encryption messaging API',
    // SMS
    'SMS API provider',
    'transactional SMS gateway India',
    'promotional SMS platform',
    'OTP SMS service India',
    'SMS marketing software',
    'enterprise bulk SMS India',
    'best SMS gateway India 2025',
    'automated SMS campaigns',
    'DLT registered SMS platform',
    // WhatsApp
    'WhatsApp bulk messaging platform',
    'WhatsApp chatbot automation',
    'WhatsApp marketing software India',
    'BSP WhatsApp India Meta partner',
    'WhatsApp API integration service',
    'click-to-WhatsApp ads India',
    // RCS
    'RCS Business Messaging platform India',
    'Rich Communication Services API',
    'interactive RCS campaigns',
    'RCS vs SMS marketing India',
    // Voice
    'AI voice call service India',
    'bulk voice call platform',
    'IVR replacement AI India',
    'outbound call automation software',
    'voice OTP service India',
    // Brand
    'Ojiva AI platform',
    'Ojiva AI demo',
    'Ojiva AI pricing',
    'best CPaaS platform India 2025',
    'omnichannel messaging platform India',
    'AI communication automation India',
    'enterprise messaging solution India',
    'A2ZSMS platform',
  ],
});

/* ─────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <>
      {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Organization) }} /> */}
      {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Website_Schema) }} /> */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Ojiva_Service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Breadcrumb) }} />
      {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ) }} /> */}
      <HomePage />
    </>
  );
}
