import Link from 'next/link';
import { buildMetadata, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/metadata';
import ServiceLeadForm from '@/components/ui/ServiceLeadForm';
import FAQ from '@/components/services/whatsapp-chatbot/FAQ';

export const metadata = buildMetadata({
  title: 'Business Messaging Services in Bangalore | Ojiva AI',
  description:
    'Ojiva AI is a Bengaluru-based business messaging company — Bulk SMS, WhatsApp Business API, RCS, Voice & IVR and WhatsApp chatbots with local IST support.',
  path: '/bangalore',
  keywords: [
    'business messaging services Bangalore',
    'bulk SMS Bangalore',
    'WhatsApp Business API Bangalore',
    'RCS messaging Bangalore',
    'IVR service Bangalore',
    'WhatsApp chatbot Bengaluru',
    'CPaaS company Bengaluru',
  ],
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://www.ojiva.ai/' },
  { name: 'Bangalore', url: 'https://www.ojiva.ai/bangalore/' },
]);

const CHANNELS = [
  {
    href: '/bangalore/bulk-sms/',
    icon: 'bi-chat-dots-fill',
    name: 'Bulk SMS in Bangalore',
    desc: 'Promotional, transactional and OTP SMS with 99% delivery, DLT compliance handled, and Kannada Unicode support.',
  },
  {
    href: '/bangalore/whatsapp-api/',
    icon: 'bi-whatsapp',
    name: 'WhatsApp Business API in Bangalore',
    desc: 'Official Meta BSP onboarding — verification badge, templates, catalogs and CRM integration, live in 48 hours.',
  },
  {
    href: '/bangalore/rcs-messaging/',
    icon: 'bi-stars',
    name: 'RCS Messaging in Bangalore',
    desc: 'Google-verified rich cards and carousels inside Android Messages, with automatic SMS fallback.',
  },
  {
    href: '/bangalore/voice-ivr/',
    icon: 'bi-telephone-fill',
    name: 'Bulk Voice & IVR in Bangalore',
    desc: 'Outbound voice campaigns, IVR menus and AI voice agents in Kannada, Hindi, Tamil and English.',
  },
  {
    href: '/bangalore/whatsapp-chatbot/',
    icon: 'bi-robot',
    name: 'WhatsApp Chatbot in Bangalore',
    desc: 'No-code and AI chatbots that resolve 87% of routine queries automatically, 24/7, with human handoff.',
  },
  {
    href: '/otp/',
    icon: 'bi-shield-lock-fill',
    name: 'OTP & 2FA',
    desc: 'Sub-3-second OTP delivery via SMS, WhatsApp and Voice for logins, payments and KYC — nationwide.',
  },
];

const HUB_FAQS = [
  {
    q: 'Is Ojiva AI actually based in Bangalore?',
    a: 'Yes. Our registered office is in Sahakara Nagar, Bengaluru — onboarding, campaign reviews and support all run from here on IST hours. You are dealing with a local team, not a remote reseller.',
  },
  {
    q: 'Which messaging services do you provide in Bangalore?',
    a: 'Bulk SMS, WhatsApp Business API, RCS messaging, bulk voice calls with IVR, WhatsApp chatbots and multi-channel OTP — all from one dashboard, one contact list and one bill.',
  },
  {
    q: 'Do you help with DLT registration for Karnataka businesses?',
    a: 'Yes — Principal Entity registration, header (sender ID) registration and content-template approval are handled by our team as part of onboarding, so you stay TRAI-compliant from your first campaign.',
  },
  {
    q: 'Can campaigns be sent in Kannada?',
    a: 'Yes. SMS, RCS, voice and WhatsApp campaigns all support Kannada along with Hindi, Tamil and English — regional-language sends consistently earn better engagement with Karnataka audiences.',
  },
  {
    q: 'Do you only serve Bangalore?',
    a: 'No — Bengaluru is home base, but we serve businesses across Karnataka (Mysuru, Mangaluru, Hubballi) and all of India. Local clients simply get the benefit of same-city support and faster onboarding.',
  },
];

export default function BangaloreHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(HUB_FAQS)) }} />

      {/* ── Hero ── */}
      <section className="page-hero" aria-labelledby="blr-hub-heading">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 760, margin: '0 auto' }}>
            <span className="section-tag">Bengaluru · Home Base</span>
            <h1 id="blr-hub-heading" className="page-hero-title mt-3">
              Business Messaging Services in Bangalore
            </h1>
            <p className="lead mt-3" style={{ fontWeight: 500 }}>
              Ojiva AI is a Bengaluru-headquartered business messaging company. We run Bulk SMS,
              WhatsApp Business API, RCS, voice campaigns and AI chatbots for businesses across the
              city and Karnataka — with DLT compliance handled and support on IST hours.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
              <Link href="/contact/" className="btn-hero-primary border-0">Talk to the Local Team →</Link>
              <Link href="/book-demo/" className="btn-hero-outline">Book a Free Demo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Channel cards ── */}
      <section className="section-padding" aria-labelledby="blr-channels-heading">
        <div className="container">
          <div className="text-center mb-5">
            <span className="eyebrow"><span className="eyebrow-dot" />Services</span>
            <h2 id="blr-channels-heading" className="section-title mt-2">
              Every Channel, One Local Partner
            </h2>
          </div>
          <div className="row g-4">
            {CHANNELS.map(({ href, icon, name, desc }) => (
              <div className="col-md-6 col-lg-4" key={href}>
                <Link href={href} className="text-decoration-none d-block h-100">
                  <div className="feature-card h-100">
                    <i className={`bi ${icon} fs-3 mb-2 d-block`} style={{ color: 'var(--primary)' }} aria-hidden="true" />
                    <h3 className="h6 fw-semibold" style={{ color: 'var(--pro-black, #111)' }}>{name}</h3>
                    <p className="small text-muted mb-0">{desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why local ── */}
      <section className="section-padding bg-section" aria-labelledby="blr-why-heading">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="text-center mb-4">
            <span className="eyebrow"><span className="eyebrow-dot" />Why Local Matters</span>
            <h2 id="blr-why-heading" className="section-title mt-2">A Messaging Partner in Your Own City</h2>
          </div>
          <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            Most messaging platforms serve Bengaluru from somewhere else. Ojiva AI is built here —
            which means onboarding calls in your timezone, DLT and compliance paperwork handled by
            people who do it every week for Karnataka businesses, and support that picks up the
            phone during your working hours. We work with startups, D2C brands, clinics, schools,
            real-estate developers and enterprises across Koramangala, Whitefield, Electronic City,
            HSR Layout, Indiranagar and the wider metro.
          </p>
          <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
            Every channel runs from one dashboard with one contact list — so an OTP on SMS, an
            order update on WhatsApp, a product carousel on RCS and a payment-reminder voice call
            all live in the same place, with unified reporting.
          </p>
          <p className="small text-muted mt-3">
            Registered office: 183, 2nd Floor, G Block, Opposite Reliance Trends, Sahakara Nagar,
            Bengaluru, Karnataka 560092 · <a href="tel:+918431086185">+91 84310 86185</a> ·{' '}
            <a href="mailto:info@ojiva.ai">info@ojiva.ai</a>
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ faqs={HUB_FAQS} subtitle="Working with Ojiva AI from Bengaluru." />

      {/* ── Lead form ── */}
      <ServiceLeadForm
        source="bangalore-hub"
        eyebrow="BENGALURU"
        heading="Start With a Local Demo"
        headingHighlight="Local Demo"
        description="Tell us what you send — OTPs, offers, updates or support conversations — and our Bengaluru team will show you the right channel mix."
        perks={[
          'Bengaluru-based onboarding & IST-hours support',
          'DLT registration & TRAI compliance handled',
          'SMS, WhatsApp, RCS, Voice & OTP on one platform',
          'Kannada & regional-language campaigns',
          'No setup fees, no lock-in contracts',
        ]}
        stats={[
          { val: '500+', lbl: 'Businesses' },
          { val: 'IST', lbl: 'Local Support' },
        ]}
        formTitle="Book a Demo With the Bengaluru Team"
        formSubtitle="30 seconds · We respond within 2 hours"
        formBadge="Local Team · DLT Handled · All Channels"
      />
    </>
  );
}
