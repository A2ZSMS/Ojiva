import Link from 'next/link';
import Image from 'next/image';
import CTA from '@/components/CTA';
import SectionHeading from '@/components/SectionHeading';
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/metadata';
import {
  FadeUp, SlideLeft, SlideRight, ScalePop,
  StaggerContainer, StaggerItem, HeroEntrance, FloatingElement,
  BlurReveal, ParallaxSection, RotateIn, ScrollScale, StaggerGrid, StaggerGridItem,
} from '@/components/Animations';

export const metadata = buildMetadata({
  title: 'WhatsApp Business API India — Official Meta BSP Partner',
  description:
    'Send WhatsApp messages at scale with Ojiva AI — India\'s trusted WhatsApp Business API provider. Template messages, interactive buttons, catalogs, chatbots. Meta-approved BSP.',
  path: '/whatsapp',
  keywords: [
    'WhatsApp Business API India', 'WhatsApp Business solution provider India',
    'WhatsApp chatbot India', 'WhatsApp marketing India', 'WhatsApp API integration',
    'Meta BSP India', 'WhatsApp bulk messaging', 'WhatsApp template messages',
    'WhatsApp interactive messages', 'WhatsApp catalog API', 'WhatsApp OTP India',
    'official WhatsApp API provider',
  ],
});

const WA_TYPES = [
  { icon: '📋', title: 'Template Messages', color: '#25D366', desc: 'Send pre-approved, structured messages for notifications, alerts, and marketing — fully Meta-compliant.', points: ['Order & shipment alerts', 'Appointment reminders', 'Payment confirmations', 'Marketing campaigns'] },
  { icon: '🎛️', title: 'Interactive Messages', color: '#128C7E', desc: 'Engage customers with buttons, lists, and quick replies that drive action without leaving WhatsApp.', points: ['Reply buttons (up to 3)', 'List menus (up to 10)', 'Quick reply flows', 'CTA URL buttons'] },
  { icon: '🛍️', title: 'Product Catalogs', color: '#075E54', desc: 'Showcase your product catalogue inside WhatsApp — let customers browse and buy.', points: ['In-chat browsing', 'Add to cart', 'Order management', 'Payment integration'] },
  { icon: '🤖', title: 'AI Chatbot Flows', color: '#34B7F1', desc: 'Deploy intelligent AI bots that handle FAQs, qualify leads, and escalate to agents seamlessly.', points: ['NLP responses', 'Lead qualification', 'Human handoff', 'Multi-language'] },
];

const INDUSTRIES = [
  { icon: '🏦', title: 'Banking & Finance', use: 'Account alerts, loan updates, fraud warnings, statement delivery, KYC verification' },
  { icon: '🛒', title: 'E-Commerce', use: 'Order tracking, delivery updates, abandoned cart recovery, product catalogues' },
  { icon: '🏥', title: 'Healthcare', use: 'Appointment reminders, lab reports, prescription updates, doctor consultations' },
  { icon: '🎓', title: 'Education', use: 'Admissions, results, fee reminders, course updates, parent communication' },
  { icon: '✈️', title: 'Travel & Hospitality', use: 'Booking confirmations, check-in reminders, itinerary updates, exclusive offers' },
  { icon: '🏠', title: 'Real Estate', use: 'Site visit scheduling, property updates, EMI alerts, agent follow-ups' },
  { icon: '🚗', title: 'Automotive', use: 'Service reminders, insurance renewal, test drive follow-ups, EMI alerts' },
  { icon: '🏬', title: 'Retail & D2C', use: 'New arrivals, flash sales, loyalty rewards, personalised recommendations' },
];

const HOW_STEPS = [
  { step: '01', icon: '✅', title: 'Get Meta Verified', desc: 'We handle your WABA creation and Meta Business Manager verification end-to-end.' },
  { step: '02', icon: '📋', title: 'Submit Templates', desc: 'Create and submit message templates for Meta approval with our guidance.' },
  { step: '03', icon: '🔗', title: 'Connect via API', desc: 'Integrate our WhatsApp API into your CRM or app using REST API or SDK.' },
  { step: '04', icon: '📊', title: 'Send & Analyse', desc: 'Launch campaigns, monitor read rates, and optimise with real-time analytics.' },
];

const METRICS = [
  { value: '5M+', label: 'WhatsApp Messages/Month' },
  { value: '98%', label: 'Message Open Rate' },
  { value: '<2s', label: 'Delivery Latency' },
  { value: 'Official', label: 'Meta BSP Partner' },
];

const BSP_STATS = [
  { label: 'BSP Status', val: '✅ Official Meta BSP', color: '#25D366' },
  { label: 'Green Tick', val: '✅ Verified', color: '#25D366' },
  { label: 'Daily Limit', val: '10M messages/day', color: '#128C7E' },
  { label: 'Quality Rating', val: '🟢 High', color: '#22c55e' },
  { label: 'Template Approval', val: 'Avg. 2–4 hours', color: '#0ea5e9' },
];

const CHATBOT_LOG = [
  { from: 'user', msg: 'I want to track my order' },
  { from: 'bot', msg: 'Sure! Please share your Order ID or mobile number.' },
  { from: 'user', msg: 'ORD-38821' },
  { from: 'bot', msg: '📦 Your order is out for delivery! ETA: Today 4–6 PM. Track here →' },
];

const waServiceSchema = serviceSchema({ name: 'WhatsApp Business API', description: "India's trusted WhatsApp Business API provider — template messages, interactive buttons, catalogs, chatbots. Meta-approved BSP.", url: '/whatsapp', keywords: ['WhatsApp Business API India', 'WhatsApp chatbot', 'Meta BSP India'] });
const waBreadcrumb = breadcrumbSchema([{ name: 'Home', url: 'https://ojiva.ai/' }, { name: 'WhatsApp Business', url: 'https://ojiva.ai/whatsapp' }]);

export default function WhatsAppPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(waServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(waBreadcrumb) }} />

      {/* ══ HERO ══ */}
      <section className="service-hero" aria-labelledby="wa-hero-heading">
        <div className="container">
          <div className="service-hero-inner">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-6">
                <HeroEntrance index={0}>
                  <div className="service-badge cb-badge">💬 WhatsApp Business API</div>
                </HeroEntrance>
                <HeroEntrance index={1}>
                  <h1 id="wa-hero-heading" className="service-hero-title">
                    Reach Customers on{' '}<span className="sh-accent-wa">WhatsApp</span><br />at Enterprise Scale
                  </h1>
                </HeroEntrance>
                <HeroEntrance index={2}>
                  <p className="service-hero-desc">
                    Send interactive notifications, run AI chatbots, showcase product catalogues, and close more sales — all inside WhatsApp. Official Meta BSP with 98% open rates.
                  </p>
                </HeroEntrance>
                <HeroEntrance index={3}>
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    <Link href="/contact" className="btn-hero-primary cb-btn-primary">Get WhatsApp API →</Link>
                    <Link href="/book-demo" className="btn-hero-outline">Book a Demo</Link>
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
                    <Image src="/images/whatsapp-hero.png" alt="WhatsApp Business API platform showing template messages and chatbot interface" width={600} height={600} priority className="cb-hero-image" />
                  </FloatingElement>
                </HeroEntrance>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MESSAGE TYPES ══ */}
      <section className="section-padding" aria-labelledby="wa-types-heading">
        <div className="container">
          <ScrollScale>
            <div className="text-center mb-5">
              <SectionHeading tag="Message Types" title="Every WhatsApp Message Type in One Platform" subtitle="From simple text notifications to full product catalogues and AI-powered chatbots — all from a single API." center />
            </div>
          </ScrollScale>
          <StaggerContainer className="row g-4">
            {WA_TYPES.map(({ icon, title, color, desc, points }) => (
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

      {/* ══ FEATURE DEEP DIVES ══ */}
      <section className="section-padding bg-section" aria-labelledby="wa-features-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading tag="Platform Features" title="The Complete WhatsApp Business Suite" subtitle="Everything you need to convert conversations into customers — from first message to final sale." center />
            </div>
          </FadeUp>

          {/* BSP Feature */}
          <div className="service-feature-row mb-5">
            <SlideLeft className="service-feature-text">
              <span className="section-tag">Meta Official BSP</span>
              <h2 className="section-title mt-2">Only Official Meta BSPs Get Green Tick & Priority Delivery</h2>
              <p className="section-subtitle mb-4">
                As an official Meta Business Solution Provider, we unlock features unavailable to unofficial senders — including the verified Green Tick, higher messaging limits, and direct access to Meta support.
              </p>
              <ul className="feature-deep-list">
                {['Official Meta Business Solution Provider', 'Green Tick verification support', 'Up to 10M messages/day throughput', 'Meta-compliant template management', 'Priority escalation to Meta support', 'Automated quality rating monitoring'].map((pt) => (
                  <li key={pt}><span className="check-icon">✓</span>{pt}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn-ojiva-primary mt-4 cb-btn-primary d-inline-flex">Get Green Tick →</Link>
            </SlideLeft>
            <SlideRight className="service-feature-visual">
              <div className="svc-stat-list">
                {BSP_STATS.map(({ label, val, color }) => (
                  <div key={label} className="svc-stat-row">
                    <span className="svc-stat-label">{label}</span>
                    <span className="svc-stat-val" style={{ color }}>{val}</span>
                  </div>
                ))}
                <div className="svc-stat-highlight wa-highlight">
                  <span className="svc-stat-highlight-icon">💬</span>
                  <p className="svc-stat-highlight-text">98% average message open rate vs 22% email</p>
                </div>
              </div>
            </SlideRight>
          </div>

          {/* Chatbot Feature */}
          <div className="service-feature-row">
            <SlideLeft className="service-feature-visual order-lg-1">
              <div className="cb-handoff-wrap">
                <p className="cb-flow-label">AI Chatbot — Conversation Log</p>
                {CHATBOT_LOG.map(({ from, msg }, i) => (
                  <div key={i} className={`cb-handoff-msg cb-handoff-msg--${from}`}>
                    <div className={`cb-handoff-bubble cb-handoff-bubble--${from}`}>{msg}</div>
                    <p className="cb-handoff-meta">{from.charAt(0).toUpperCase() + from.slice(1)}</p>
                  </div>
                ))}
                <div className="cb-handoff-banner">⚡ Resolved in 1 minute — No agent needed</div>
              </div>
            </SlideLeft>
            <SlideRight className="service-feature-text order-lg-2">
              <span className="section-tag">AI Chatbot</span>
              <h2 className="section-title mt-2">AI Chatbots That Resolve 70% of Queries Automatically</h2>
              <p className="section-subtitle mb-4">
                Deploy intelligent, NLP-powered chatbots on WhatsApp that understand intent, resolve queries, qualify leads, and escalate to human agents — all in real time, 24×7.
              </p>
              <ul className="feature-deep-list">
                {['Intent-based NLP conversations', 'Multi-language support (20+ languages)', 'Seamless human agent handoff', 'Lead scoring and CRM push', 'Flow builder — no code required', 'A/B testing for conversation flows'].map((pt) => (
                  <li key={pt}><span className="check-icon">✓</span>{pt}</li>
                ))}
              </ul>
              <Link href="/whatsapp-chatbot" className="btn-ojiva-primary mt-4 cb-btn-primary d-inline-flex">Build Your Chatbot →</Link>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="section-padding" aria-labelledby="wa-how-heading">
        <div className="container">
          <BlurReveal>
            <div className="text-center mb-5">
              <SectionHeading tag="How It Works" title="Go Live on WhatsApp Business API in 48 Hours" subtitle="We handle Meta verification, template setup, and API integration — so you can focus on conversations." center />
            </div>
          </BlurReveal>
          <StaggerContainer className="row g-4" staggerDelay={0.15}>
            {HOW_STEPS.map(({ step, icon, title, desc }, i) => (
              <StaggerItem key={step} className="col-12 col-sm-6 col-lg-3">
                <div className="how-card">
                  <div className="how-step cb-how-step">{step}</div>
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
      <section className="section-padding bg-section" aria-labelledby="wa-api-heading">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <SlideLeft>
                <SectionHeading tag="Developer First" title="Send WhatsApp Messages with a Single API Call" subtitle="Our WhatsApp API is REST-based, well-documented, and available with SDKs for every major language." />
                <ul className="feature-deep-list mt-4">
                  {['REST API with full OpenAPI spec', 'SDK for Node.js, Python, PHP, Java', 'Webhook for delivery & read receipts', 'Sandbox environment for testing', '99.99% API uptime SLA'].map((pt) => (
                    <li key={pt}><span className="check-icon">✓</span>{pt}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-ojiva-primary mt-4 cb-btn-primary d-inline-flex">Get API Access →</Link>
              </SlideLeft>
            </div>
            <div className="col-12 col-lg-7">
              <ScalePop>
                <div className="api-snippet-wrap">
                  <div className="api-snippet-header">
                    <div className="api-snippet-dots">
                      <span className="dot-red" /><span className="dot-yellow" /><span className="dot-green" />
                    </div>
                    <span className="api-snippet-label">Send WhatsApp Message — Node.js</span>
                  </div>
                  <div className="api-snippet-body">
                    <div><span className="api-comment">// Install: npm install ojiva-ai</span></div>
                    <div><span className="api-key">const</span> <span className="api-method">OjivaAI</span> = <span className="api-method">require</span>(<span className="api-str">&apos;ojiva-ai&apos;</span>);</div>
                    <br />
                    <div><span className="api-key">const</span> client = <span className="api-key">new</span> <span className="api-method">OjivaAI</span>({'{'}</div>
                    <div>&nbsp;&nbsp;<span className="api-key">apiKey</span>: <span className="api-str">&apos;ojv_live_xxxxxxxxxxxx&apos;</span></div>
                    <div>{'}'});</div>
                    <br />
                    <div><span className="api-comment">// Send a template message</span></div>
                    <div><span className="api-key">await</span> client.whatsapp.<span className="api-method">send</span>({'{'}</div>
                    <div>&nbsp;&nbsp;<span className="api-key">to</span>: <span className="api-str">&apos;+919876543210&apos;</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">type</span>: <span className="api-str">&apos;template&apos;</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">template</span>: {'{'}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="api-key">name</span>: <span className="api-str">&apos;order_shipped&apos;</span>,</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="api-key">language</span>: <span className="api-str">&apos;en_IN&apos;</span>,</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="api-key">params</span>: [<span className="api-str">&apos;Rahul&apos;</span>, <span className="api-str">&apos;ORD-9821&apos;</span>]</div>
                    <div>&nbsp;&nbsp;{'}'}</div>
                    <div>{'}'});</div>
                    <br />
                    <div><span className="api-comment">// {'{ id: "wamid_01", status: "sent", channel: "whatsapp" }'}</span></div>
                  </div>
                </div>
              </ScalePop>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section className="section-padding" aria-labelledby="wa-industries-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading tag="Use Cases" title="WhatsApp Works for Every Industry" subtitle="500M+ Indians check WhatsApp daily. Meet your customers where they already are." center />
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
              <SectionHeading tag="More Services" title="Explore Our Communication Suite" subtitle="Combine WhatsApp with our other channels for maximum reach." center />
            </div>
          </FadeUp>
          <StaggerGrid className="row g-4">
            {[
              { href: '/sms', icon: '📱', title: 'Bulk SMS', desc: 'Transactional, promotional & OTP at scale.', color: '#1B48E0' },
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

      {/* ══ CTA ══ */}
      <FadeUp>
        <CTA title="Start Conversations That Convert on WhatsApp" subtitle="Join 500+ businesses using Ojiva AI WhatsApp API. Official Meta BSP, Green Tick support, and live in 48 hours." primaryLabel="Get WhatsApp API →" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      </FadeUp>
    </>
  );
}
