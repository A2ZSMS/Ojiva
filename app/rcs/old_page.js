import Link from 'next/link';
import Image from 'next/image';
import CTA from '@/components/CTA';
import SectionHeading from '@/components/SectionHeading';
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/metadata';
import {
  FadeUp, SlideLeft, SlideRight, ScalePop,
  StaggerContainer, StaggerItem, HeroEntrance, FloatingElement,
  BlurReveal, RotateIn, ScrollScale, StaggerGrid, StaggerGridItem,
} from '@/components/Animations';

export const metadata = buildMetadata({
  title: 'RCS Business Messaging India — Next-Gen Rich SMS by Google',
  description:
    'Upgrade from SMS to RCS with Ojiva AI. Send rich cards, carousels, suggested replies, and branded messages. Google-verified sender. Higher engagement, better conversions.',
  path: '/rcs',
  keywords: [
    'RCS Business Messaging India', 'RCS messaging platform India', 'RCS vs SMS India',
    'rich communication services India', 'Google RCS business', 'RCS API India',
    'branded messaging India', 'RCS chatbot India', 'next-gen SMS India',
    'RCS rich cards', 'RCS carousel messages', 'verified business sender India',
  ],
});

const RCS_FEATURES = [
  { icon: '🃏', title: 'Rich Cards', color: '#8B5CF6', desc: 'Visually stunning card messages with images, titles, descriptions, and action buttons.', points: ['Hero image + body text', 'Up to 4 action buttons', 'Deep link & call actions', 'Native app rendering'] },
  { icon: '🎠', title: 'Card Carousels', color: '#6D28D9', desc: 'Swipeable horizontal carousels to showcase products — like a mobile storefront.', points: ['Up to 10 cards', 'Individual CTA buttons', 'Product showcase', 'Horizontal scroll UX'] },
  { icon: '💬', title: 'Suggested Replies', color: '#7C3AED', desc: 'Guide customers with pre-set reply chips that make interaction effortless.', points: ['Tap-to-reply chips', 'Dynamic quick actions', 'Conversation flows', 'Zero-friction UX'] },
  { icon: '✅', title: 'Verified Sender', color: '#5B21B6', desc: 'Display your brand name, logo, and verified checkmark — eliminating fraud.', points: ['Google-verified brand ID', 'Official brand logo', 'Verified checkmark', 'Anti-phishing protection'] },
];

const INDUSTRIES = [
  { icon: '🏦', title: 'Banking & Finance', use: 'Account alerts with balance cards, loan offers, credit card promotions, fraud alerts' },
  { icon: '🛒', title: 'E-Commerce', use: 'Product carousels, order tracking cards, cart recovery with images, flash sales' },
  { icon: '🏥', title: 'Healthcare', use: 'Appointment cards with directions, health reports, doctor profiles, reminders' },
  { icon: '🎓', title: 'Education', use: 'Course cards, fee payment links, event invitations, result notifications' },
  { icon: '✈️', title: 'Travel & Hospitality', use: 'Boarding pass cards, hotel confirmations, itinerary carousels, upgrade offers' },
  { icon: '🏠', title: 'Real Estate', use: 'Property image cards, site visit scheduling, project updates, pricing carousels' },
  { icon: '🚗', title: 'Automotive', use: 'Vehicle showcase carousels, test drive booking, service cards, comparisons' },
  { icon: '🎭', title: 'Entertainment & OTT', use: 'New release carousels, subscription cards, watchlist suggestions, promos' },
];

const HOW_STEPS = [
  { step: '01', icon: '🔍', title: 'Brand Verification', desc: 'We register and verify your brand with Google\'s RCS platform.' },
  { step: '02', icon: '🎨', title: 'Design Messages', desc: 'Use our drag-and-drop RCS builder for rich cards and carousels.' },
  { step: '03', icon: '🔗', title: 'Integrate via API', desc: 'Connect via REST API or trigger from your CRM/marketing stack.' },
  { step: '04', icon: '📊', title: 'Measure & Optimise', desc: 'Track card impressions, button clicks, and conversions.' },
];

const METRICS = [
  { value: '3×', label: 'Higher CTR vs SMS' },
  { value: '60%', label: 'Avg. Read Rate' },
  { value: 'Free', label: 'For End Users' },
  { value: 'Google', label: 'Verified Platform' },
];

const RCS_VS_SMS = [
  { feature: 'Rich images & media', rcs: true, sms: false },
  { feature: 'Branded sender + logo', rcs: true, sms: false },
  { feature: 'Verified checkmark', rcs: true, sms: false },
  { feature: 'Action buttons', rcs: true, sms: false },
  { feature: 'Card carousels', rcs: true, sms: false },
  { feature: 'Read receipts', rcs: true, sms: false },
  { feature: 'Works on Android', rcs: true, sms: false },
  { feature: 'DLT compliance required', rcs: false, sms: true },
];

const rcsServiceSchema = serviceSchema({ name: 'RCS Business Messaging', description: 'Upgrade from SMS to RCS — rich cards, carousels, suggested replies, branded messages. Google-verified.', url: '/rcs', keywords: ['RCS Business Messaging India', 'Google RCS', 'RCS API India'] });
const rcsBreadcrumb = breadcrumbSchema([{ name: 'Home', url: 'https://ojiva.ai/' }, { name: 'RCS Messaging', url: 'https://ojiva.ai/rcs' }]);

export default function RCSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rcsServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rcsBreadcrumb) }} />

      {/* ══ HERO ══ */}
      <section className="service-hero" aria-labelledby="rcs-hero-heading">
        <div className="container">
          <div className="service-hero-inner">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-6">
                <HeroEntrance index={0}>
                  <div className="service-badge rcs-badge">✨ RCS Business Messaging</div>
                </HeroEntrance>
                <HeroEntrance index={1}>
                  <h1 id="rcs-hero-heading" className="service-hero-title">
                    The{' '}<span className="sh-accent-rcs">Next Generation</span><br />of Business Messaging
                  </h1>
                </HeroEntrance>
                <HeroEntrance index={2}>
                  <p className="service-hero-desc">
                    Go beyond plain text SMS. Send rich cards, swipeable carousels, suggested action buttons, and verified branded messages — all in the native Android Messages app. 3× higher CTR than SMS.
                  </p>
                </HeroEntrance>
                <HeroEntrance index={3}>
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    <Link href="/contact" className="btn-hero-primary rcs-btn-primary">Upgrade to RCS →</Link>
                    <Link href="/book-demo" className="btn-hero-outline">See Live Demo</Link>
                  </div>
                </HeroEntrance>
                <HeroEntrance index={4}>
                  <div className="service-stats-row">
                    {METRICS.map(({ value, label }) => (
                      <div key={label} className="service-stat-item">
                        <span className="service-stat-value">{value}</span>
                        <span className="service-stat-label">{label}</span>
                      </div>
                    ))}
                  </div>
                </HeroEntrance>
              </div>
              <div className="col-12 col-lg-6">
                <HeroEntrance index={2}>
                  <FloatingElement amplitude={8} duration={5}>
                    <Image src="/images/rcs-hero.png" alt="RCS Business Messaging with rich cards, carousels, and verified branding" width={600} height={600} priority className="cb-hero-image" />
                  </FloatingElement>
                </HeroEntrance>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ RCS CAPABILITIES ══ */}
      <section className="section-padding" aria-labelledby="rcs-types-heading">
        <div className="container">
          <BlurReveal>
            <div className="text-center mb-5">
              <SectionHeading tag="RCS Capabilities" title="Rich Features That Drive Real Engagement" subtitle="RCS gives you the interactivity of an app inside the native SMS inbox — no download required." center />
            </div>
          </BlurReveal>
          <StaggerContainer className="row g-4">
            {RCS_FEATURES.map(({ icon, title, color, desc, points }) => (
              <StaggerItem key={title} className="col-12 col-sm-6 col-lg-3">
                <div className="service-type-card">
                  <div className="cb-card-accent" style={{ background: color }} />
                  <div className="service-type-icon" style={{ background: `${color}14`, borderColor: `${color}25` }}>{icon}</div>
                  <h3 className="service-type-title">{title}</h3>
                  <p className="service-type-desc">{desc}</p>
                  <ul className="service-type-points">
                    {points.map((p) => (<li key={p}><span style={{ color }}>✓</span> {p}</li>))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ RCS vs SMS COMPARISON ══ */}
      <section className="section-padding bg-section" aria-labelledby="rcs-compare-heading">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <SlideLeft>
                <SectionHeading tag="RCS vs SMS" title="Why RCS Outperforms Plain SMS Every Time" subtitle="RCS is SMS's next-generation upgrade — same reach, dramatically richer experience." />
                <p className="section-subtitle mt-3">
                  With RCS, your brand messages look like a premium app experience inside the default Android Messages app — without requiring customers to download anything.
                </p>
                <Link href="/contact" className="btn-ojiva-primary mt-4 rcs-btn-primary d-inline-flex">Switch to RCS →</Link>
              </SlideLeft>
            </div>
            <div className="col-12 col-lg-7">
              <RotateIn>
                <ScalePop>
                  <div className="chatbot-compare-table-wrap">
                    <table className="chatbot-compare-table">
                      <thead>
                        <tr>
                          <th>Feature</th>
                          <th><span className="compare-th-badge compare-th-badge--bot">✨ RCS</span></th>
                          <th><span className="compare-th-badge compare-th-badge--manual">📱 SMS</span></th>
                        </tr>
                      </thead>
                      <tbody>
                        {RCS_VS_SMS.map(({ feature, rcs, sms }) => (
                          <tr key={feature}>
                            <td className="compare-feature-name">{feature}</td>
                            <td className={rcs ? 'compare-winner' : ''}>{rcs ? '✅' : '❌'}</td>
                            <td className={sms ? 'compare-winner' : ''}>{sms ? '✅' : '❌'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </ScalePop>
              </RotateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="section-padding" aria-labelledby="rcs-how-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading tag="How It Works" title="Get Verified & Start Sending Rich RCS in Days" subtitle="We handle Google verification, branding setup, and API integration — you focus on campaigns." center />
            </div>
          </FadeUp>
          <StaggerContainer className="row g-4" staggerDelay={0.15}>
            {HOW_STEPS.map(({ step, icon, title, desc }, i) => (
              <StaggerItem key={step} className="col-12 col-sm-6 col-lg-3">
                <div className="how-card">
                  <div className="how-step rcs-how-step">{step}</div>
                  <div className="how-icon">{icon}</div>
                  <h3 className="how-title">{title}</h3>
                  <p className="how-desc">{desc}</p>
                  {i < HOW_STEPS.length - 1 && <div className="how-connector">→</div>}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ API SNIPPET ══ */}
      <section className="section-padding bg-section" aria-labelledby="rcs-api-heading">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <SlideLeft>
                <SectionHeading tag="Developer First" title="Send Rich RCS Cards with One API Call" subtitle="Our RCS API follows the same pattern as SMS and WhatsApp APIs — minimal learning curve." />
                <ul className="feature-deep-list mt-4">
                  {['Unified API for SMS, WhatsApp & RCS', 'Auto-fallback to SMS if RCS unavailable', 'Rich card & carousel builder', 'Delivery and interaction webhooks', 'Full sandbox for testing'].map((pt) => (
                    <li key={pt}><span className="check-icon">✓</span>{pt}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-ojiva-primary mt-4 rcs-btn-primary d-inline-flex">Get RCS API Access →</Link>
              </SlideLeft>
            </div>
            <div className="col-12 col-lg-7">
              <ScalePop>
                <div className="api-snippet-wrap">
                  <div className="api-snippet-header">
                    <div className="api-snippet-dots">
                      <span className="dot-red" /><span className="dot-yellow" /><span className="dot-green" />
                    </div>
                    <span className="api-snippet-label">Send RCS Rich Card — Node.js</span>
                  </div>
                  <div className="api-snippet-body">
                    <div><span className="api-comment">// Unified API — same client, multiple channels</span></div>
                    <div><span className="api-key">await</span> client.rcs.<span className="api-method">sendCard</span>({'{'}</div>
                    <div>&nbsp;&nbsp;<span className="api-key">to</span>: <span className="api-str">&apos;+919876543210&apos;</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">card</span>: {'{'}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="api-key">title</span>: <span className="api-str">&apos;Diwali Sale — 30% OFF&apos;</span>,</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="api-key">description</span>: <span className="api-str">&apos;Shop your favourites today!&apos;</span>,</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="api-key">imageUrl</span>: <span className="api-str">&apos;https://cdn.ojiva.ai/diwali.jpg&apos;</span>,</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="api-key">buttons</span>: [</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className="api-key">type</span>: <span className="api-str">&apos;url&apos;</span>, <span className="api-key">label</span>: <span className="api-str">&apos;Shop Now&apos;</span>, <span className="api-key">url</span>: <span className="api-str">&apos;https://store.ojiva.ai&apos;</span> {'}'}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;]</div>
                    <div>&nbsp;&nbsp;{'}'}</div>
                    <div>{'}'});</div>
                    <br />
                    <div><span className="api-comment">// {'{ id: "rcs_01", status: "delivered", type: "rich_card" }'}</span></div>
                  </div>
                </div>
              </ScalePop>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section className="section-padding" aria-labelledby="rcs-industries-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading tag="Use Cases" title="Rich Messaging for Every Industry" subtitle="From e-commerce carousels to banking alerts — RCS elevates every communication." center />
            </div>
          </FadeUp>
          <StaggerGrid className="row g-3" staggerDelay={0.06}>
            {INDUSTRIES.map(({ icon, title, use }) => (
              <StaggerGridItem key={title} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="industry-card">
                  <span className="industry-icon">{icon}</span>
                  <h3 className="industry-title">{title}</h3>
                  <p className="industry-use">{use}</p>
                </div>
              </StaggerGridItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ══ EXPLORE OTHER SERVICES ══ */}
      <section className="section-padding">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-4">
              <SectionHeading tag="More Services" title="Explore Our Communication Suite" subtitle="Combine RCS with our other channels for richer customer journeys." center />
            </div>
          </FadeUp>
          <StaggerGrid className="row g-4">
            {[
              { href: '/sms', icon: '📱', title: 'Bulk SMS', desc: 'Transactional, promotional & OTP at scale.', color: '#1B48E0' },
              { href: '/whatsapp', icon: '💬', title: 'WhatsApp Business API', desc: 'Official Meta BSP partner. 98% open rate.', color: '#25D366' },
              { href: '/whatsapp-chatbot', icon: '🤖', title: 'WhatsApp Chatbot', desc: 'AI-powered 24/7 customer automation.', color: '#128C7E' },
              { href: '/voice', icon: '📞', title: 'Bulk Voice Call', desc: 'IVR, OBD & conversational AI bots.', color: '#7C3AED' },
            ].map(({ href, icon, title, desc, color }) => (
              <StaggerGridItem key={href} className="col-12 col-sm-6 col-lg-3">
                <Link href={href} className="service-cross-card">
                  <span className="scc-icon" style={{ background: `${color}14`, color }}>{icon}</span>
                  <h3 className="scc-title">{title}</h3>
                  <p className="scc-desc">{desc}</p>
                  <span className="scc-arrow" style={{ color }}>Explore →</span>
                </Link>
              </StaggerGridItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <FadeUp>
        <CTA title="Upgrade Your SMS to Rich RCS Today" subtitle="Get Google-verified, send carousels and rich cards, and see 3× higher click-through rates." primaryLabel="Start with RCS →" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      </FadeUp>
    </>
  );
}
