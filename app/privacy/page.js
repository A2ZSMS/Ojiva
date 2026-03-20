import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'Ojiva AI Privacy Policy — how we collect, use, store, and protect your personal data in compliance with GDPR, CCPA, and applicable data protection laws.',
  path: '/privacy',
});

const LAST_UPDATED = 'March 3, 2026';
const EFFECTIVE_DATE = 'March 3, 2026';
const COMPANY = 'Ojiva AI';
const EMAIL_PRIVACY = 'ojiva.tech@gmail.com';
const EMAIL_DPO = 'ojiva.tech@gmail.com';
const ADDRESS = '183, 2nd Floor, G Block, Opposite Reliance Trends, Sahakara Nagar Main Rd, Byatarayanapura, Bengaluru, Karnataka 560092, India';

const SECTIONS = [
  {
    id: 'overview',
    title: '1. Overview',
    blocks: [
      {
        type: 'para',
        text: `${COMPANY} ("Ojiva AI", "we", "us", or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at ojiva.ai, use our AI communication platform, or engage with our services (collectively, the "Services").`,
      },
      {
        type: 'para',
        text: 'Please read this policy carefully. If you do not agree with its terms, please discontinue use of our Services. This policy applies to all information collected through our Services, as well as any related sales, marketing, and events.',
      },
    ],
  },
  {
    id: 'information-we-collect',
    title: '2. Information We Collect',
    blocks: [
      { type: 'heading', text: '2.1 Information You Provide Directly' },
      {
        type: 'para',
        text: 'We collect information you voluntarily provide when you register for an account or request a demo, fill out contact or inquiry forms, subscribe to newsletters or marketing communications, communicate with our support team, or participate in surveys, promotions, or events.',
      },
      {
        type: 'para',
        text: 'This may include: full name, business email address, phone number, company name, job title, company size, billing information, and the content of messages you send us.',
      },
      { type: 'heading', text: '2.2 Information Collected Automatically' },
      {
        type: 'para',
        text: 'When you access our Services, we automatically collect certain technical data, including: IP address and approximate geolocation, browser type and version, operating system and device identifiers, pages visited, time spent and referring URLs, clickstream data, and session and cookie identifiers. This data is collected using cookies, web beacons, pixel tags, and similar tracking technologies.',
      },
      { type: 'heading', text: '2.3 Information from Third Parties' },
      {
        type: 'para',
        text: 'We may receive information about you from third-party sources, such as CRM and business intelligence providers (e.g., Salesforce, HubSpot), marketing and advertising partners, social media platforms (when you interact with our pages), data enrichment vendors, and payment processors. We combine this data with information we hold to improve our Services and communications.',
      },
      { type: 'heading', text: '2.4 Platform-Generated Data' },
      {
        type: 'para',
        text: 'If you use our AI communication platform, we collect operational data including: message content transmitted through our messaging, voice, and workflow systems; campaign performance metrics (delivery rates, open rates, conversions); API call logs and technical integration activity; workflow configuration and automation trigger events; and lead scoring inputs and outputs.',
      },
    ],
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    blocks: [
      { type: 'heading', text: 'Service Delivery & Operations' },
      { type: 'para', text: 'To provide, operate, maintain, and improve our Services; process transactions; authenticate users; and deliver technical support.' },
      { type: 'heading', text: 'Communications' },
      { type: 'para', text: 'To send you product updates, security alerts, administrative messages, and, where permitted, marketing communications about Ojiva AI products and services.' },
      { type: 'heading', text: 'Analytics & Product Development' },
      { type: 'para', text: 'To understand how our Services are used; conduct research; identify usage trends; and develop new features and platform capabilities.' },
      { type: 'heading', text: 'Legal & Compliance' },
      { type: 'para', text: 'To comply with applicable laws and regulations; enforce our agreements; detect and prevent fraud, abuse, or security incidents; and protect the rights, property, and safety of Ojiva AI, our clients, and the public.' },
      { type: 'heading', text: 'Personalisation' },
      { type: 'para', text: 'To personalise your experience, customise content, and deliver more relevant product recommendations and communications.' },
      { type: 'para', text: 'We process your personal data only where we have a lawful basis to do so, including: performance of a contract, compliance with a legal obligation, your consent, or our legitimate business interests.' },
    ],
  },
  {
    id: 'sharing',
    title: '4. How We Share Your Information',
    blocks: [
      { type: 'para', text: 'We do not sell your personal data. We may share your information in the following circumstances:' },
      { type: 'heading', text: 'Service Providers' },
      { type: 'para', text: 'We engage trusted third-party vendors to assist us in operating our Services (e.g., cloud infrastructure, payment processing, analytics, email delivery). These providers are contractually obligated to use your data only as directed by us and in accordance with this policy.' },
      { type: 'heading', text: 'Business Transfers' },
      { type: 'para', text: 'In connection with a merger, acquisition, financing, or sale of all or a portion of our business, your information may be transferred as part of that transaction.' },
      { type: 'heading', text: 'Legal Requirements' },
      { type: 'para', text: 'We may disclose your information if required by law, subpoena, court order, or governmental authority, or when we believe disclosure is necessary to prevent harm or protect our legal rights.' },
      { type: 'heading', text: 'Aggregated or De-identified Data' },
      { type: 'para', text: 'We may share anonymised, aggregated data that cannot reasonably be used to identify you for industry analysis, research, or benchmarking.' },
    ],
  },
  {
    id: 'data-retention',
    title: '5. Data Retention',
    blocks: [
      { type: 'para', text: 'We retain your personal data for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. The criteria used to determine our retention periods include the duration of our ongoing relationship with you, legal obligations (e.g., tax, accounting, and audit requirements), statute of limitations under applicable law, and whether retention is advisable for legal proceedings or investigations.' },
      { type: 'para', text: 'When personal data is no longer needed, we securely delete or anonymise it in accordance with our data retention standards.' },
    ],
  },
  {
    id: 'security',
    title: '6. Data Security',
    blocks: [
      { type: 'para', text: 'We implement industry-standard technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These measures include:' },
      { type: 'list', items: ['AES-256 encryption for data at rest and in transit (TLS 1.2+)', 'Role-based access controls and least-privilege principles', 'Multi-factor authentication for platform administrators', 'Regular vulnerability assessments and penetration testing', 'SOC 2 Type II audit compliance', 'Incident response and breach notification procedures'] },
      { type: 'para', text: `Despite these safeguards, no method of electronic transmission or storage is 100% secure. If you have reason to believe that your interaction with us is no longer secure, please contact us immediately at ${EMAIL_PRIVACY}.` },
    ],
  },
  {
    id: 'cookies',
    title: '7. Cookies & Tracking Technologies',
    blocks: [
      { type: 'para', text: 'We use cookies and similar tracking technologies to enhance your experience.' },
      { type: 'heading', text: 'Essential Cookies' },
      { type: 'para', text: 'Necessary for the website and platform to function. Cannot be disabled.' },
      { type: 'heading', text: 'Analytics Cookies' },
      { type: 'para', text: 'Help us understand how visitors interact with our Services (e.g., Google Analytics). These are aggregated and anonymised.' },
      { type: 'heading', text: 'Functional Cookies' },
      { type: 'para', text: 'Remember your preferences and personalise your experience (e.g., language, region).' },
      { type: 'heading', text: 'Marketing Cookies' },
      { type: 'para', text: `Used to deliver relevant advertisements and track campaign effectiveness. Only deployed with your consent. You can control cookie preferences through your browser settings or our cookie consent banner. For detailed cookie information, contact ${EMAIL_PRIVACY}.` },
    ],
  },
  {
    id: 'your-rights',
    title: '8. Your Privacy Rights',
    blocks: [
      { type: 'para', text: 'Depending on your location and applicable law, you may have the following rights regarding your personal data:' },
      { type: 'list', items: ['Right of Access — Request a copy of the personal data we hold about you.', 'Right to Rectification — Request correction of inaccurate or incomplete data.', 'Right to Erasure — Request deletion of your personal data ("right to be forgotten"), subject to legal obligations.', 'Right to Restriction — Request that we restrict processing of your data in certain circumstances.', 'Right to Portability — Receive your data in a structured, machine-readable format.', 'Right to Object — Object to processing based on legitimate interests or for direct marketing.', 'Right to Withdraw Consent — Where processing is based on consent, withdraw it at any time.'] },
      { type: 'heading', text: 'CCPA Rights (California Residents)' },
      { type: 'para', text: 'You have the right to know, delete, and opt out of the sale of personal information. We do not sell personal information. You may also designate an authorised agent to make requests on your behalf.' },
      { type: 'para', text: `To exercise any of these rights, submit a request to ${EMAIL_PRIVACY}. We will respond within 30 days (or as required by law). We may need to verify your identity before processing requests.` },
    ],
  },
  {
    id: 'international',
    title: '9. International Data Transfers',
    blocks: [
      { type: 'para', text: 'Ojiva AI is headquartered in Bengaluru, India. If you access our Services from outside India, your personal data may be transferred to and processed in India or other countries where our service providers operate.' },
      { type: 'para', text: 'For transfers from the European Economic Area (EEA), United Kingdom, or Switzerland, we rely on Standard Contractual Clauses (SCCs), adequacy decisions issued by the relevant data protection authority, or Binding Corporate Rules where applicable.' },
    ],
  },
  {
    id: 'children',
    title: "10. Children's Privacy",
    blocks: [
      { type: 'para', text: 'Our Services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children under 16. If we become aware that we have inadvertently collected personal data from a child under 16, we will take prompt steps to delete such information.' },
      { type: 'para', text: `If you believe a child under 16 has provided us with personal information, please contact us at ${EMAIL_PRIVACY}.` },
    ],
  },
  {
    id: 'third-party-links',
    title: '11. Third-Party Links',
    blocks: [
      { type: 'para', text: 'Our Services may contain links to third-party websites, services, or applications. This Privacy Policy does not apply to those third-party services. We are not responsible for the privacy practices of any third party, and we encourage you to review their privacy policies before providing any personal information.' },
    ],
  },
  {
    id: 'changes',
    title: '12. Changes to This Policy',
    blocks: [
      { type: 'para', text: 'We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or Services. We will notify you of material changes by posting the updated policy on this page with a revised "Last Updated" date, sending an email notification to registered account holders, and displaying a prominent notice on our platform.' },
      { type: 'para', text: 'Your continued use of our Services after any changes take effect constitutes your acceptance of the revised policy.' },
    ],
  },
  {
    id: 'contact',
    title: '13. How to Contact Us',
    blocks: [
      { type: 'para', text: 'If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Privacy Team or Data Protection Officer.' },
      { type: 'list', items: [`Privacy Team — ${EMAIL_PRIVACY}`, `Data Protection Officer — ${EMAIL_DPO}`, `Postal — ${COMPANY}, ${ADDRESS}`] },
      { type: 'para', text: 'If you are located in the EEA or UK and believe we have not addressed your concern satisfactorily, you have the right to lodge a complaint with your local data protection supervisory authority.' },
    ],
  },
];

function PolicyBlock({ block }) {
  if (block.type === 'heading') {
    return (
      <p className="policy-block-heading">{block.text}</p>
    );
  }
  if (block.type === 'list') {
    return (
      <ul className="capability-list policy-para">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className="policy-para">{block.text}</p>;
}

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="privacy-hero-heading">
        <div className="container">
          <div className="col-12 col-lg-8">
            <span className="section-tag">Legal</span>
            <h1 className="page-hero-title" id="privacy-hero-heading">
              Privacy Policy
            </h1>
            <p className="page-hero-subtitle">
              We take your privacy seriously. This policy explains exactly what data we
              collect, how we use it, and the rights you have over your information.
            </p>
            <div className="d-flex flex-wrap gap-4 mt-4" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <span><strong style={{ color: 'var(--dark)' }}>Last Updated:</strong> {LAST_UPDATED}</span>
              <span><strong style={{ color: 'var(--dark)' }}>Effective Date:</strong> {EFFECTIVE_DATE}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="Privacy Policy content">
        <div className="container">
          <div className="row">

            {/* ── Sticky TOC ── */}
            <div className="col-12 col-lg-3 mb-5 mb-lg-0">
              <div className="toc-sidebar">
                <span className="toc-label">Contents</span>
                <nav aria-label="Privacy policy table of contents">
                  {SECTIONS.map(({ id, title }) => (
                    <a key={id} href={`#${id}`} className="toc-link">
                      {title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* ── Body ── */}
            <div className="col-12 col-lg-8 offset-lg-1">
              {SECTIONS.map(({ id, title, blocks }) => (
                <section key={id} id={id} className="policy-section" aria-labelledby={`${id}-heading`}>
                  <h2 id={`${id}-heading`} className="policy-section-heading">{title}</h2>
                  {blocks.map((block, i) => (
                    <PolicyBlock key={i} block={block} />
                  ))}
                </section>
              ))}

              <div className="legal-contact-box">
                <p style={{ fontWeight: 700, color: 'var(--dark)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  Questions about this policy?
                </p>
                <p className="policy-para" style={{ marginBottom: '1rem' }}>
                  Our Privacy Team and Data Protection Officer are available to help with any questions or data subject requests.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a href={`mailto:${EMAIL_PRIVACY}`} className="btn-ojiva-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
                    Email Privacy Team
                  </a>
                  <a href="/contact" className="btn-ojiva-outline" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
