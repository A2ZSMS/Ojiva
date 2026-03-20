import { buildMetadata } from '@/lib/metadata';
import ContactForm from './ContactForm';

export const metadata = buildMetadata({
  title: 'Contact Ojiva AI — Book a Free Demo',
  description:
    'Request a demo or talk to our team. Ojiva AI enterprise inquiries, API assistance, and sales requests. Reach us at ojiva.tech@gmail.com or +91 84310 86185.',
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

const QUICK_CONTACTS = [
  {
    icon: '📧',
    label: 'Email',
    value: 'ojiva.tech@gmail.com',
    href: 'mailto:ojiva.tech@gmail.com',
    tag: 'Always open',
    tagColor: '#16a34a',
    tagBg: 'rgba(22,163,74,0.12)',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 84310 86185',
    href: 'tel:+918431086185',
    tag: '10AM – 7PM IST',
    tagColor: '#d97706',
    tagBg: 'rgba(217,119,6,0.12)',
  },
  {
    icon: '💬',
    label: 'Live Chat',
    value: 'In-platform support',
    href: null,
    tag: 'Mon – Sat',
    tagColor: 'var(--primary)',
    tagBg: 'rgba(27,72,224,0.12)',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero contact-hero-enhanced" aria-labelledby="contact-hero-heading">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left: Copy */}
            <div className="col-12 col-lg-6">
              <span className="section-tag">Contact Us</span>
              <h1 className="page-hero-title" id="contact-hero-heading">
                Start your AI automation{' '}
                <span className="contact-hero-accent">journey today</span>
              </h1>
              <p className="page-hero-subtitle">
                Request a personalised demo, ask a technical question, or reach out
                for enterprise pricing — we respond within one business day.
              </p>
              <div className="contact-hero-badges">
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

            {/* Right: Quick contact cards */}
            <div className="col-12 col-lg-5 offset-lg-1">
              <div className="contact-quick-cards">
                {QUICK_CONTACTS.map(({ icon, label, value, href, tag, tagColor, tagBg }) => (
                  <div key={label} className="contact-quick-card">
                    <div className="contact-quick-card-icon">{icon}</div>
                    <div className="contact-quick-card-body">
                      <span className="contact-quick-card-label">{label}</span>
                      {href ? (
                        <a href={href} className="contact-quick-card-value">{value}</a>
                      ) : (
                        <span className="contact-quick-card-value">{value}</span>
                      )}
                    </div>
                    <span
                      className="contact-quick-card-tag"
                      style={{ background: tagBg, color: tagColor }}
                    >
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
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
