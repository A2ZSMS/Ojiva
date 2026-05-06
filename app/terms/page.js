import { buildMetadata, breadcrumbSchema } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Terms of Service — User Agreement & Legal Terms',
  description:
    'Ojiva AI Terms of Service — the legal agreement governing your use of the Ojiva AI platform, APIs, and communication automation services.',
  path: '/terms',
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home',             url: 'https://www.ojiva.ai/' },
  { name: 'Terms of Service', url: 'https://www.ojiva.ai/terms/' },
]);

const LAST_UPDATED = 'March 3, 2026';
const EFFECTIVE_DATE = 'March 3, 2026';
const COMPANY = 'Ojiva AI';
const EMAIL_LEGAL = 'ojiva.tech@gmail.com';
const ADDRESS = '183, 2nd Floor, G Block, Opposite Reliance Trends, Sahakara Nagar Main Rd, Byatarayanapura, Bengaluru, Karnataka 560092, India';

const SECTIONS = [
  {
    id: 'agreement',
    title: '1. Agreement to Terms',
    blocks: [
      { type: 'para', text: `These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer", "you", or "your") and ${COMPANY} ("Ojiva AI", "we", "us", or "our"), governing your access to and use of the Ojiva AI platform, APIs, websites, and related services (collectively, the "Services").` },
      { type: 'para', text: 'By accessing or using our Services, creating an account, or clicking "I Agree" or an equivalent button, you confirm that: (a) you have read, understood, and agree to be bound by these Terms; (b) you are at least 18 years of age; (c) you have the legal authority to enter into this agreement on behalf of yourself or the organisation you represent.' },
      { type: 'para', text: 'If you do not agree to these Terms, you must not access or use our Services. Enterprise customers may be subject to a separate Master Services Agreement (MSA), which shall govern in the event of any conflict with these Terms.' },
    ],
  },
  {
    id: 'services',
    title: '2. Description of Services',
    blocks: [
      { type: 'para', text: 'Ojiva AI provides an AI-powered business communication and automation platform, including but not limited to:' },
      { type: 'list', items: ['AI Messaging Automation — SMS and WhatsApp campaign management, two-way intelligent messaging, and drip sequence automation', 'AI Voice Automation — Inbound and outbound AI voice agents, IVR replacement, call transcription, and sentiment analysis', 'Lead Intelligence & Routing — AI-powered lead scoring, enrichment, deduplication, and smart routing to CRM or sales teams', 'Workflow Orchestration — No-code automation builder, event-driven trigger execution, and API/webhook orchestration', 'API & Integration Layer — RESTful APIs, SDK libraries, and native connectors to third-party business tools'] },
      { type: 'para', text: 'We reserve the right to modify, suspend, or discontinue any feature or component of the Services at any time, with reasonable notice where practicable.' },
    ],
  },
  {
    id: 'accounts',
    title: '3. Accounts & Registration',
    blocks: [
      { type: 'heading', text: 'Account Creation' },
      { type: 'para', text: 'To access the Services, you must create an account and provide accurate, current, and complete information. You agree to promptly update your account information to keep it accurate.' },
      { type: 'heading', text: 'Account Security' },
      { type: 'para', text: `You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You must notify us immediately at ${EMAIL_LEGAL} if you suspect unauthorised access to your account.` },
      { type: 'heading', text: 'Account Types' },
      { type: 'para', text: 'Ojiva AI offers individual, team, and enterprise account tiers. The features available to you depend on your subscription plan. Accounts may not be shared across organisations without explicit written consent.' },
      { type: 'heading', text: 'Account Termination' },
      { type: 'para', text: 'We reserve the right to suspend or terminate accounts that violate these Terms, engage in prohibited activities, or where required by law.' },
    ],
  },
  {
    id: 'acceptable-use',
    title: '4. Acceptable Use Policy',
    blocks: [
      { type: 'para', text: 'You agree to use the Services only for lawful purposes and in accordance with these Terms. You must NOT use our Services to:' },
      { type: 'list', items: ['Send unsolicited bulk messages (spam), phishing communications, or fraudulent content', 'Impersonate any person or entity, or misrepresent your identity or affiliation', 'Transmit content that is defamatory, obscene, harassing, threatening, or discriminatory', 'Violate any applicable laws, including anti-spam regulations (e.g., TCPA, GDPR, CAN-SPAM, CASL)', 'Attempt to gain unauthorised access to our systems or other users\' accounts', 'Reverse engineer, decompile, or disassemble any part of our platform', 'Use the Services to generate, distribute, or host malware or malicious code', 'Conduct large-scale automated scraping or data harvesting without prior written authorisation', 'Resell, sublicense, or otherwise commercialise the Services without express written consent', 'Interfere with or disrupt the integrity or performance of the Services'] },
      { type: 'para', text: 'Violation of this Acceptable Use Policy may result in immediate suspension or termination of your account without notice or refund.' },
    ],
  },
  {
    id: 'subscriptions-billing',
    title: '5. Subscriptions, Billing & Payment',
    blocks: [
      { type: 'heading', text: 'Subscription Plans' },
      { type: 'para', text: 'Services are offered on a subscription basis. Plan details, features, and pricing are described on our pricing page or in your executed Order Form.' },
      { type: 'heading', text: 'Billing Cycle' },
      { type: 'para', text: 'Subscriptions are billed in advance on a monthly or annual basis, as selected during signup or as agreed in your Order Form. Subscription fees are non-refundable except as expressly stated herein.' },
      { type: 'heading', text: 'Payment' },
      { type: 'para', text: 'By providing payment information, you authorise us to charge your designated payment method for all applicable fees. You are responsible for all taxes, duties, and levies associated with your purchase.' },
      { type: 'heading', text: 'Price Changes' },
      { type: 'para', text: 'We reserve the right to modify our pricing with at least 30 days\' advance written notice. Your continued use of the Services after the effective date of a price change constitutes acceptance of the new pricing.' },
      { type: 'heading', text: 'Late Payments' },
      { type: 'para', text: 'Unpaid invoices are subject to a late payment fee of 1.5% per month (or the maximum rate permitted by law, if lower). We may suspend Services for accounts with overdue balances.' },
    ],
  },
  {
    id: 'data-and-privacy',
    title: '6. Data Processing & Privacy',
    blocks: [
      { type: 'heading', text: 'Your Data' },
      { type: 'para', text: 'All data you input into the Services, including contact information, message content, and workflow configurations ("Customer Data"), remains your property. You grant Ojiva AI a limited, non-exclusive licence to process Customer Data solely to provide and improve the Services.' },
      { type: 'heading', text: 'Data Processing Agreement' },
      { type: 'para', text: `To the extent you process personal data of EU/EEA data subjects through our Services, we act as a Data Processor and you act as the Data Controller. Our Data Processing Agreement (DPA), which forms part of these Terms, governs such processing activities. To request a copy of our DPA, contact ${EMAIL_LEGAL}.` },
      { type: 'heading', text: 'Messaging Compliance' },
      { type: 'para', text: 'You are solely responsible for ensuring that all contacts in your messaging lists have provided the legally required consent to receive communications, and that your use of the Services complies with all applicable messaging regulations, including TCPA (US), GDPR (EU/EEA), CASL (Canada), and equivalent laws.' },
    ],
  },
  {
    id: 'intellectual-property',
    title: '7. Intellectual Property',
    blocks: [
      { type: 'heading', text: 'Our IP' },
      { type: 'para', text: 'The Services, including all software, algorithms, user interfaces, content, trademarks, logos, and documentation, are owned by Ojiva AI or our licensors and are protected by intellectual property laws. Nothing in these Terms transfers ownership of our IP to you.' },
      { type: 'heading', text: 'Licence Grant' },
      { type: 'para', text: 'Subject to your compliance with these Terms and payment of applicable fees, we grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Services for your internal business purposes.' },
      { type: 'heading', text: 'Your IP' },
      { type: 'para', text: 'You retain all rights, title, and ownership in your Customer Data and any content you create using the Services. By using the Services, you represent that you have all necessary rights and permissions to the content you transmit or upload.' },
      { type: 'heading', text: 'Feedback' },
      { type: 'para', text: 'If you provide suggestions, feedback, or ideas about the Services, you grant Ojiva AI a perpetual, irrevocable, royalty-free licence to use such feedback for any purpose without restriction or compensation.' },
    ],
  },
  {
    id: 'confidentiality',
    title: '8. Confidentiality',
    blocks: [
      { type: 'para', text: 'Each party may receive confidential information from the other in connection with these Terms ("Confidential Information"). Each party agrees to keep the other party\'s Confidential Information strictly confidential, not disclose it to any third party without prior written consent, use it solely to exercise rights and fulfil obligations under these Terms, and protect it using at least the same degree of care as it uses for its own confidential information.' },
      { type: 'para', text: 'Confidential Information does not include information that: (i) is or becomes publicly available through no breach of this Section; (ii) was rightfully known before disclosure; (iii) is independently developed without reference to Confidential Information; or (iv) is required to be disclosed by law or court order, provided the disclosing party gives prompt notice where legally permissible.' },
    ],
  },
  {
    id: 'disclaimers',
    title: '9. Disclaimers & Warranties',
    blocks: [
      { type: 'caps', text: 'THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, OJIVA AI EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, WARRANTIES THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, AND WARRANTIES REGARDING THE ACCURACY OR COMPLETENESS OF ANY AI-GENERATED OUTPUT.' },
      { type: 'para', text: 'AI-generated outputs, including message suggestions, lead scores, voice scripts, and workflow recommendations, are probabilistic in nature and should not be relied upon as legal, financial, medical, or professional advice.' },
    ],
  },
  {
    id: 'limitation-of-liability',
    title: '10. Limitation of Liability',
    blocks: [
      { type: 'caps', text: 'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL OJIVA AI BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.' },
      { type: 'caps', text: "OJIVA AI'S TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE GREATER OF: (I) THE TOTAL FEES PAID BY YOU TO OJIVA AI IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM; OR (II) ONE HUNDRED US DOLLARS (USD $100)." },
    ],
  },
  {
    id: 'indemnification',
    title: '11. Indemnification',
    blocks: [
      { type: 'para', text: 'You agree to defend, indemnify, and hold harmless Ojiva AI, its affiliates, officers, directors, employees, agents, and licensors from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to:' },
      { type: 'list', items: ['Your use or misuse of the Services', 'Your violation of these Terms or applicable law', 'Your Customer Data, including any claim that Customer Data infringes any third-party intellectual property or privacy rights', 'Your failure to obtain required consents for messaging or voice communications', 'Any dispute between you and a third party'] },
    ],
  },
  {
    id: 'uptime-sla',
    title: '12. Uptime SLA & Service Credits',
    blocks: [
      { type: 'heading', text: 'Uptime Commitment' },
      { type: 'para', text: 'Ojiva AI targets 99.9% monthly uptime availability for the core platform, excluding scheduled maintenance windows (announced at least 48 hours in advance) and circumstances beyond our reasonable control.' },
      { type: 'heading', text: 'Service Credits' },
      { type: 'para', text: 'If we fail to meet the uptime commitment in any calendar month, eligible customers may request a service credit: 99.0% – 99.9% uptime = 10% credit; 95.0% – 98.9% = 25% credit; Below 95.0% = 50% credit of that month\'s fees. Credits must be requested within 30 days of the incident.' },
      { type: 'heading', text: 'Exclusions' },
      { type: 'para', text: 'The SLA does not apply to outages caused by third-party providers (e.g., carrier networks, cloud infrastructure), force majeure events, your own configuration errors, or actions that violate these Terms.' },
    ],
  },
  {
    id: 'termination',
    title: '13. Term & Termination',
    blocks: [
      { type: 'heading', text: 'Termination by You' },
      { type: 'para', text: `You may terminate your account at any time by following the cancellation procedure in your account settings or by contacting ${EMAIL_LEGAL}. Cancellation takes effect at the end of the current billing period. Prepaid fees are non-refundable.` },
      { type: 'heading', text: 'Termination by Ojiva AI' },
      { type: 'para', text: 'We may suspend or terminate your access to the Services immediately, with or without notice, if you materially breach these Terms, engage in illegal activity or violate our Acceptable Use Policy, or if we are required to do so by law.' },
      { type: 'heading', text: 'Effect of Termination' },
      { type: 'para', text: 'Upon termination: all licences granted to you cease; you must cease using the Services; and we may delete your account and Customer Data in accordance with our data retention policy. You remain liable for all fees accrued prior to termination.' },
    ],
  },
  {
    id: 'governing-law',
    title: '14. Governing Law & Disputes',
    blocks: [
      { type: 'heading', text: 'Governing Law' },
      { type: 'para', text: 'These Terms are governed by and construed in accordance with the laws of India, without regard to conflict of law principles. The courts in Bengaluru, Karnataka shall have exclusive jurisdiction.' },
      { type: 'heading', text: 'Dispute Resolution' },
      { type: 'para', text: 'Before initiating formal proceedings, both parties agree to attempt good-faith negotiation for at least 30 days after written notice of a dispute.' },
      { type: 'heading', text: 'Arbitration' },
      { type: 'para', text: 'Any dispute not resolved by negotiation shall be submitted to binding arbitration under the Arbitration and Conciliation Act, 1996 of India. Arbitration shall take place in Bengaluru, Karnataka.' },
      { type: 'heading', text: 'Class Action Waiver' },
      { type: 'caps', text: 'YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS. YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION AGAINST OJIVA AI.' },
    ],
  },
  {
    id: 'general',
    title: '15. General Provisions',
    blocks: [
      { type: 'heading', text: 'Entire Agreement' },
      { type: 'para', text: 'These Terms, together with the Privacy Policy, DPA (if applicable), and any executed Order Forms or MSAs, constitute the entire agreement between you and Ojiva AI regarding the Services and supersede all prior agreements.' },
      { type: 'heading', text: 'Amendments' },
      { type: 'para', text: 'We may modify these Terms at any time. Material changes will be communicated via email or in-platform notice at least 14 days before the effective date. Your continued use of the Services after the effective date constitutes acceptance.' },
      { type: 'heading', text: 'Severability' },
      { type: 'para', text: 'If any provision of these Terms is held invalid or unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will continue in full force and effect.' },
      { type: 'heading', text: 'Assignment' },
      { type: 'para', text: 'You may not assign or transfer these Terms or your account without our prior written consent. Ojiva AI may freely assign these Terms, including in connection with a merger or acquisition.' },
    ],
  },
  {
    id: 'contact-legal',
    title: '16. Contact Information',
    blocks: [
      { type: 'para', text: 'For questions, concerns, or notices relating to these Terms, please contact our legal team:' },
      { type: 'list', items: [`Email: ${EMAIL_LEGAL}`, `Postal: ${COMPANY}, ${ADDRESS}`] },
      { type: 'para', text: 'For privacy-related inquiries, refer to our Privacy Policy at ojiva.ai/privacy.' },
    ],
  },
];

function TermsBlock({ block }) {
  if (block.type === 'heading') {
    return <p className="policy-block-heading">{block.text}</p>;
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
  if (block.type === 'caps') {
    return <p className="policy-caps">{block.text}</p>;
  }
  return <p className="policy-para">{block.text}</p>;
}

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="page-hero" aria-labelledby="terms-hero-heading">
        <div className="container">
          <div className="col-12 col-lg-8">
            <span className="section-tag">Legal</span>
            <h1 className="page-hero-title" id="terms-hero-heading">
              Terms of Service
            </h1>
            <p className="page-hero-subtitle">
              Please read these Terms carefully before using the Ojiva AI platform.
              By accessing our Services, you agree to be bound by the following terms and conditions.
            </p>
            <div className="d-flex flex-wrap gap-4 mt-4" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <span><strong style={{ color: 'var(--dark)' }}>Last Updated:</strong> {LAST_UPDATED}</span>
              <span><strong style={{ color: 'var(--dark)' }}>Effective Date:</strong> {EFFECTIVE_DATE}</span>
            </div>
            <div className="d-inline-flex align-items-center gap-2 mt-4"
              style={{ background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.15)', borderRadius: 'var(--radius)', padding: '0.625rem 1rem', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Also see:</span>
              <Link href="/privacy" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                Privacy Policy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-label="Terms of Service content">
        <div className="container">
          <div className="row">

            {/* ── Sticky TOC ── */}
            <div className="col-12 col-lg-3 mb-5 mb-lg-0">
              <div className="toc-sidebar">
                <span className="toc-label">Contents</span>
                <nav aria-label="Terms table of contents">
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

              {/* Arbitration Alert */}
              <div className="legal-notice" role="note" aria-label="Important legal notice">
                <p><strong>Important:</strong> These Terms include a binding arbitration clause and class action waiver in Section 14. Please read that section carefully, as it affects your legal rights.</p>
              </div>

              {SECTIONS.map(({ id, title, blocks }) => (
                <section key={id} id={id} className="policy-section" aria-labelledby={`${id}-heading`}>
                  <h2 id={`${id}-heading`} className="policy-section-heading">{title}</h2>
                  {blocks.map((block, i) => (
                    <TermsBlock key={i} block={block} />
                  ))}
                </section>
              ))}

              <div className="legal-contact-box">
                <p style={{ fontWeight: 700, color: 'var(--dark)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  Legal questions or concerns?
                </p>
                <p className="policy-para" style={{ marginBottom: '1.25rem' }}>
                  Our legal team is available to assist with contract questions, DPA requests, or compliance inquiries.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a href={`mailto:${EMAIL_LEGAL}`} className="btn-ojiva-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
                    Email Legal Team
                  </a>
                  <Link href="/privacy" className="btn-ojiva-outline" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
                    View Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
