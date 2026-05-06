import { buildMetadata, breadcrumbSchema } from '@/lib/metadata';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = buildMetadata({
  title: 'Contact Ojiva AI — Get Bulk SMS & WhatsApp API Support',
  description:
    'Contact Ojiva AI for Bulk SMS, WhatsApp API, RCS & Voice. Book a free personalised demo or get instant support. We respond within 1 business day.',
  path: '/contact',
  keywords: [
    'Ojiva AI contact',
    'Ojiva AI demo',
    'book a demo Ojiva',
    'request Ojiva pricing',
    'Ojiva enterprise sales',
    'AI automation consultation',
    'free AI platform demo',
    'talk to AI sales team',
    'Ojiva AI support',
    'Ojiva AI enterprise plan',
    'get started with Ojiva',
    'AI communication demo India',
  ],
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home',    url: 'https://www.ojiva.ai/' },
  { name: 'Contact', url: 'https://www.ojiva.ai/contact/' },
]);

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Ojiva AI',
  description: 'Contact Ojiva AI for Bulk SMS, WhatsApp Business API, RCS Messaging and AI Voice Call services. Book a free demo or get instant support.',
  url: 'https://www.ojiva.ai/contact/',
  mainEntity: {
    '@type': 'Organization',
    name: 'Ojiva AI',
    url: 'https://www.ojiva.ai',
    telephone: '+91-843-108-6185',
    email: 'info@ojiva.ai',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '183, 2nd Floor, G Block, Opposite Reliance Trends, Sahakara Nagar',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560092',
      addressCountry: 'IN',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      {/* ── Hero ── */}
      <section className="page-hero contact-hero-enhanced" aria-labelledby="contact-hero-heading">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 640, margin: '0 auto' }}>
            <span className="section-tag">Contact Us</span>
            <h1 className="page-hero-title mt-3" id="contact-hero-heading">
              Start your AI automation{' '}
              <span className="contact-hero-accent">journey today</span>
            </h1>
            <p className="page-hero-subtitle">
              Request a personalised demo, ask a technical question, or reach out
              for enterprise pricing — we respond within one business day.
            </p>
            <div className="contact-hero-badges" style={{ justifyContent: 'center' }}>
              <span className="contact-hero-badge">
                <span className="contact-hero-badge-dot" />
                Response within 24hrs
              </span>
              <span className="contact-hero-badge">
                <span className="contact-hero-badge-dot" />
                No commitment required
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="section-padding contact-form-bg" aria-labelledby="contact-form-heading">
        <div className="container">
          <h2 className="visually-hidden" id="contact-form-heading">Contact form</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
