import Link from 'next/link';
import Image from 'next/image';
import CTA from '@/components/CTA';
import SectionHeading from '@/components/SectionHeading';
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/metadata';
import {
  FadeUp, SlideLeft, SlideRight, ScalePop,
  StaggerContainer, StaggerItem, HeroEntrance, FloatingElement,
  BlurReveal, ParallaxSection, TextReveal, ScrollScale, StaggerGrid, StaggerGridItem,
} from '@/components/Animations';

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

const SMS_TYPES = [
  { icon: '📢', title: 'Promotional SMS', color: '#1B48E0', desc: 'Target opted-in customers with flash sales, product launches, and festive offers.', points: ['Flash sales & offers', 'Event announcements', 'Product launches', 'Loyalty rewards'] },
  { icon: '🔔', title: 'Transactional SMS', color: '#0ea5e9', desc: 'Deliver critical order updates, booking confirmations, and real-time alerts instantly.', points: ['Order & shipment alerts', 'Booking confirmations', 'Payment receipts', 'Appointment reminders'] },
  { icon: '🔐', title: 'OTP & Verification', color: '#22c55e', desc: 'Ultra-fast, secure OTP delivery in under 3 seconds for login and payment flows.', points: ['Sub-3 second delivery', 'Auto-read OTP (Android)', 'Fallback routing', 'Fraud detection'] },
  { icon: '↔️', title: 'Two-Way SMS', color: '#f59e0b', desc: 'Run polls, surveys, and capture leads via SMS replies with keyword routing.', points: ['Dedicated long code', 'Keyword auto-response', 'Conversation routing', 'CRM integration'] },
];

const FEATURES = [
  { icon: '🛡️', title: 'DLT Compliance Built-In', desc: 'Full TRAI DLT compliance with auto template matching, PE ID management, and blackout enforcement.', detail: ['Auto DLT template matching', 'PE ID & Header registration', 'TRAI blackout enforcement', 'Full audit trail'] },
  { icon: '⚡', title: 'Smart Delivery Engine', desc: 'AI-powered multi-operator routing with real-time failover. 98.4% delivery across all carriers.', detail: ['Multi-operator routing', 'Real-time DLR callbacks', 'Carrier-grade redundancy', 'International SMS (200+ countries)'] },
  { icon: '🎯', title: 'Campaign Intelligence', desc: 'Personalise at scale with merge tags, smart scheduling, and AI-optimised send times.', detail: ['Merge tag personalisation', 'Optimal send-time AI', 'Drip campaign builder', 'A/B split testing'] },
];

const INDUSTRIES = [
  { icon: '🏦', title: 'Banking & Finance', use: 'OTP, transaction alerts, loan updates, fraud warnings' },
  { icon: '🛒', title: 'E-Commerce', use: 'Order tracking, cart recovery, delivery updates, flash sales' },
  { icon: '🏥', title: 'Healthcare', use: 'Appointment reminders, lab reports, medication alerts' },
  { icon: '🎓', title: 'Education', use: 'Result alerts, fee reminders, admission notifications' },
  { icon: '✈️', title: 'Travel', use: 'Booking confirmations, check-in reminders, offers' },
  { icon: '🏠', title: 'Real Estate', use: 'Site visit reminders, EMI alerts, project updates' },
  { icon: '🚗', title: 'Automotive', use: 'Service reminders, insurance renewals, EMI alerts' },
  { icon: '🏬', title: 'Retail & FMCG', use: 'Loyalty points, festive offers, new arrivals' },
];

const DLT_STATS = [
  { label: 'Template Status', val: 'APPROVED', color: '#22c55e' },
  { label: 'Sender Header', val: 'OJIVAI', color: '#1B48E0' },
  { label: 'PE ID', val: '1234567890123456', color: '#0ea5e9' },
  { label: 'DLT Operator', val: 'Jio / Airtel / BSNL', color: '#f59e0b' },
  { label: 'TRAI Compliance', val: '✓ Fully Compliant', color: '#22c55e' },
];

const DELIVERY_ROUTES = [
  { route: 'Jio', pct: 96, count: '3.2M', color: '#1B48E0' },
  { route: 'Airtel', pct: 98, count: '2.8M', color: '#0ea5e9' },
  { route: 'BSNL', pct: 94, count: '1.4M', color: '#22c55e' },
  { route: 'Vodafone', pct: 97, count: '2.1M', color: '#f59e0b' },
];

const METRICS = [
  { value: '10M+', label: 'SMS / Month' },
  { value: '98.4%', label: 'Delivery Rate' },
  { value: '<3s', label: 'OTP Speed' },
  { value: '500+', label: 'Enterprises' },
];

const smsServiceSchema = serviceSchema({ name: 'Bulk SMS Service', description: "India's #1 bulk SMS platform — transactional, promotional, OTP. DLT compliant, 98%+ delivery.", url: '/sms', keywords: ['bulk SMS India', 'transactional SMS', 'OTP SMS', 'SMS API'] });
const smsBreadcrumb = breadcrumbSchema([{ name: 'Home', url: 'https://ojiva.ai/' }, { name: 'Bulk SMS', url: 'https://ojiva.ai/sms' }]);

export default function SMSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(smsServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(smsBreadcrumb) }} />

      {/* ══ HERO ══ */}
      <section className="service-hero" aria-labelledby="sms-hero-heading">
        <div className="container">
          <div className="service-hero-inner">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-6">
                <HeroEntrance index={0}>
                  <div className="service-badge sms-badge">📱 Bulk SMS Platform · India #1</div>
                </HeroEntrance>
                <HeroEntrance index={1}>
                  <h1 id="sms-hero-heading" className="service-hero-title">
                    India&apos;s Most<br /><span className="sh-accent sh-accent-sms">Trusted SMS</span><br />Gateway
                  </h1>
                </HeroEntrance>
                <HeroEntrance index={2}>
                  <p className="service-hero-desc">
                    Send millions of personalised SMS — promotional, transactional, OTP & two-way — through one API. DLT compliant, 98%+ delivery, under 3-second OTP.
                  </p>
                </HeroEntrance>
                <HeroEntrance index={3}>
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    <Link href="/contact" className="btn-hero-primary sms-btn-primary">Start Sending SMS →</Link>
                    <Link href="/book-demo" className="btn-hero-outline">Get API Docs</Link>
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
                    <Image src="/images/sms-hero.png" alt="Bulk SMS platform with API gateway and delivery analytics" width={600} height={600} priority className="cb-hero-image" />
                  </FloatingElement>
                </HeroEntrance>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SMS TYPES ══ */}
      <section className="section-padding" aria-labelledby="sms-types-heading">
        <div className="container">
          <BlurReveal>
            <div className="text-center mb-5">
              <SectionHeading tag="SMS Types" title="Every SMS Type Your Business Needs" subtitle="From one-time OTPs to million-message promotional blasts — all in one platform, one API." center />
            </div>
          </BlurReveal>
          <StaggerContainer className="row g-4">
            {SMS_TYPES.map(({ icon, title, color, desc, points }) => (
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

      {/* ══ PLATFORM FEATURES ══ */}
      <section className="section-padding bg-section" aria-labelledby="sms-features-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading tag="Platform Features" title="Built for India. Built for Scale." subtitle="Every feature for compliant, high-performance SMS campaigns at enterprise volume." center />
            </div>
          </FadeUp>
          <StaggerContainer className="row g-4" staggerDelay={0.12}>
            {FEATURES.map(({ icon, title, desc, detail }) => (
              <StaggerItem key={title} className="col-12 col-lg-4">
                <div className="service-type-card">
                  <div className="service-type-icon" style={{ background: 'rgba(27,72,224,0.08)', borderColor: 'rgba(27,72,224,0.20)' }}>{icon}</div>
                  <h3 className="service-type-title">{title}</h3>
                  <p className="service-type-desc">{desc}</p>
                  <ul className="service-type-points">
                    {detail.map((d) => (<li key={d}><span style={{ color: '#1B48E0' }}>✓</span> {d}</li>))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ DLT + DELIVERY DEEP DIVES ══ */}
      <section className="section-padding" aria-labelledby="sms-dlt-heading">
        <div className="container">
          {/* DLT Compliance */}
          <div className="service-feature-row mb-5">
            <SlideLeft className="service-feature-text">
              <span className="section-tag">DLT Compliance</span>
              <h2 className="section-title mt-2">India&apos;s Most DLT-Compliant SMS Gateway</h2>
              <p className="section-subtitle mb-4">Every message routes through TRAI-registered telecom entities with full header and template management — zero blocked messages.</p>
              <ul className="feature-deep-list">
                {['Automatic DLT template matching & approval', 'PE ID & Sender Header registration', 'TRAI blackout time enforcement', 'Content scrubbing & complaint management', 'Full audit trail for compliance reporting'].map((pt) => (
                  <li key={pt}><span className="check-icon">✓</span>{pt}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn-ojiva-primary mt-4 sms-btn-primary d-inline-flex">Get DLT Help →</Link>
            </SlideLeft>
            <SlideRight className="service-feature-visual">
              <div className="svc-stat-list">
                {DLT_STATS.map(({ label, val, color }) => (
                  <div key={label} className="svc-stat-row">
                    <span className="svc-stat-label">{label}</span>
                    <span className="svc-stat-val" style={{ color }}>{val}</span>
                  </div>
                ))}
                <div className="svc-stat-highlight sms-highlight">
                  <span className="svc-stat-highlight-icon">🛡️</span>
                  <p className="svc-stat-highlight-text">Zero blocked messages in last 90 days</p>
                </div>
              </div>
            </SlideRight>
          </div>

          {/* Smart Delivery */}
          <div className="service-feature-row">
            <SlideLeft className="service-feature-visual order-lg-1">
              <div className="svc-stat-list">
                <p className="cb-flow-label">Delivery Analytics — Live</p>
                {DELIVERY_ROUTES.map(({ route, pct, count, color }) => (
                  <div key={route} className="svc-delivery-row">
                    <span className="svc-delivery-name" style={{ color }}>{route}</span>
                    <div className="svc-delivery-bar">
                      <div className="svc-delivery-fill" style={{ width: `${pct}%`, background: color }} />
                    </div>
                    <span className="svc-delivery-stat">{pct}% · {count}</span>
                  </div>
                ))}
              </div>
            </SlideLeft>
            <SlideRight className="service-feature-text order-lg-2">
              <span className="section-tag">Smart Delivery</span>
              <h2 className="section-title mt-2">98%+ Delivery Rate with Intelligent Routing</h2>
              <p className="section-subtitle mb-4">Our AI routing engine selects the best telecom operator per message with real-time failover — maximum delivery even at peak loads.</p>
              <ul className="feature-deep-list">
                {['Multi-operator intelligent routing', 'Real-time delivery receipts (DLR)', 'Automatic retry on failed routes', 'International SMS to 200+ countries', 'Peak-load auto-scaling'].map((pt) => (
                  <li key={pt}><span className="check-icon">✓</span>{pt}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn-ojiva-primary mt-4 sms-btn-primary d-inline-flex">See Delivery Proof →</Link>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══ API ══ */}
      <section className="section-padding bg-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <ParallaxSection>
                <SectionHeading tag="Developer First" title="Integrate SMS in Minutes" subtitle="Our REST API, SDK libraries, and full documentation get you sending in one afternoon." />
                <ul className="feature-deep-list mt-4">
                  {['REST API with OpenAPI 3.0 spec', 'SDK for Node.js, Python, PHP, Java', 'Sandbox environment for testing', 'Webhooks for delivery receipts', '99.99% API uptime SLA'].map((pt) => (
                    <li key={pt}><span className="check-icon">✓</span>{pt}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-ojiva-primary mt-4 sms-btn-primary d-inline-flex">Get API Key →</Link>
              </ParallaxSection>
            </div>
            <div className="col-12 col-lg-7">
              <ScalePop>
                <div className="api-snippet-wrap">
                  <div className="api-snippet-header">
                    <div className="api-snippet-dots">
                      <span className="dot-red" /><span className="dot-yellow" /><span className="dot-green" />
                    </div>
                    <span className="api-snippet-label">Send SMS — Node.js</span>
                  </div>
                  <div className="api-snippet-body">
                    <div><span className="api-comment">// npm install ojiva-ai</span></div>
                    <div><span className="api-key">const</span> client = <span className="api-key">new</span> <span className="api-method">OjivaAI</span>({'{'} <span className="api-key">apiKey</span>: <span className="api-str">&apos;ojv_live_xxx&apos;</span> {'}'});</div>
                    <br />
                    <div><span className="api-key">await</span> client.sms.<span className="api-method">send</span>({'{'}</div>
                    <div>&nbsp;&nbsp;<span className="api-key">to</span>: <span className="api-str">&apos;+919876543210&apos;</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">from</span>: <span className="api-str">&apos;OJIVAI&apos;</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">message</span>: <span className="api-str">&apos;Your OTP is {'{'}otp{'}'}. Valid 10 mins.&apos;</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">type</span>: <span className="api-str">&apos;transactional&apos;</span></div>
                    <div>{'}'});</div>
                    <br />
                    <div><span className="api-comment">// {'{ id: "msg_01", status: "delivered", latency: "2.3s" }'}</span></div>
                  </div>
                </div>
              </ScalePop>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section className="section-padding" aria-labelledby="sms-industries-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading tag="Use Cases" title="Trusted Across Every Industry" subtitle="From fintech to e-commerce — SMS is the highest-reach channel for every business." center />
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
              <SectionHeading tag="More Services" title="Explore Our Communication Suite" subtitle="Combine SMS with our other channels for a true omnichannel experience." center />
            </div>
          </FadeUp>
          <StaggerGrid className="row g-4">
            {[
              { href: '/whatsapp', icon: '💬', title: 'WhatsApp Business API', desc: 'Official Meta BSP partner. 98% open rate.', color: '#25D366' },
              { href: '/whatsapp-chatbot', icon: '🤖', title: 'WhatsApp Chatbot', desc: 'AI-powered 24/7 customer automation.', color: '#128C7E' },
              { href: '/rcs', icon: '✨', title: 'RCS Messaging', desc: 'Rich cards, carousels & verified sender.', color: '#FF6D42' },
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
        <CTA title="Start Sending SMS at Scale Today" subtitle="Join 500+ businesses using Ojiva AI SMS. DLT compliant, dedicated support, live in under 24 hours." primaryLabel="Get Started Free →" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      </FadeUp>
    </>
  );
}
