import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import CTA from '@/components/CTA';
import {
  FadeUp,
  FadeIn,
  SlideLeft,
  SlideRight,
  ScalePop,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from '@/components/Animations';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'AI-Powered Business Communication Platform',
  description:
    'Ojiva AI automates SMS, WhatsApp, Voice, Lead Intelligence, and Workflow Orchestration — helping modern businesses communicate faster, smarter, and at scale.',
  path: '/',
  keywords: [
    'AI business communication tool',
    'WhatsApp Business API platform',
    'bulk SMS automation software',
    'AI voice bot for business',
    'lead generation automation',
    'sales communication automation',
    'omnichannel messaging platform',
    'ai chatbot for enterprise',
    'no-code workflow automation',
    'B2B AI platform India',
    'automated customer engagement',
    'AI-powered SMS campaigns',
    'voice IVR replacement AI',
    'CRM lead routing software',
    'communication automation SaaS',
    'Ojiva platform features',
    'Ojiva pricing',
    'Ojiva demo',
    'Ojiva alternatives',
    'best AI marketing automation 2024',
  ],
});

/* ── Data ───────────────────────────────────────────────── */
const MODULES = [
  {
    icon: '💬',
    tag: 'Messaging',
    title: 'AI Messaging Automation',
    desc: 'Deliver personalised SMS and WhatsApp campaigns at scale. Smart delivery-time optimisation ensures messages land when customers are most responsive.',
    points: ['Two-way intelligent conversations', 'Drip sequences & triggers', 'A/B test message variants'],
    color: 'rgba(37,99,235,0.08)',
  },
  {
    icon: '🎙️',
    tag: 'Voice',
    title: 'AI Voice Automation',
    desc: 'Deploy conversational AI voice agents that handle inbound queries and outbound campaigns — with human-level intent detection.',
    points: ['IVR replacement with AI', 'Real-time transcription', 'Sentiment & intent analysis'],
    color: 'rgba(6,182,212,0.08)',
  },
  {
    icon: '🎯',
    tag: 'Leads',
    title: 'Lead Intelligence & Routing',
    desc: 'Score, enrich, and route leads the moment they enter your funnel. Cut sales cycles in half with AI-powered qualification.',
    points: ['Real-time lead scoring', 'CRM enrichment & dedup', 'Smart round-robin routing'],
    color: 'rgba(139,92,246,0.08)',
  },
  {
    icon: '⚡',
    tag: 'Workflows',
    title: 'Workflow Orchestration',
    desc: 'Connect every tool in your stack with visual no-code workflows. Trigger automated actions across CRM, API, Webhooks, and messaging.',
    points: ['Drag-and-drop builder', 'Webhook & API triggers', 'CRM sync & data push'],
    color: 'rgba(34,197,94,0.08)',
  },
  {
    icon: '🔗',
    tag: 'Integration',
    title: 'Enterprise API Layer',
    desc: 'A robust REST API and SDK ecosystem that integrates with your existing tech stack in minutes — not months.',
    points: ['REST APIs & SDKs', 'Real-time webhooks', '50+ native connectors'],
    color: 'rgba(245,158,11,0.08)',
  },
  {
    icon: '🛡️',
    tag: 'Security',
    title: 'Enterprise-Grade Security',
    desc: 'SOC 2 Type II, AES-256 encryption, GDPR compliance, and 99.9% uptime SLA. Infrastructure built for mission-critical operations.',
    points: ['SOC 2 Type II certified', 'GDPR & CCPA compliant', '99.9% uptime guarantee'],
    color: 'rgba(239,68,68,0.08)',
  },
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Connect Your Stack',
    desc: 'Plug Ojiva AI into your CRM, messaging apps, and databases in under 10 minutes using our native connectors or REST API.',
    icon: '🔌',
  },
  {
    step: '02',
    title: 'Define Your Workflows',
    desc: 'Use the no-code visual builder to set triggers, conditions, and actions — from simple drip campaigns to complex multi-channel automations.',
    icon: '🗂️',
  },
  {
    step: '03',
    title: 'AI Learns & Optimises',
    desc: 'Our AI continuously analyses performance, adapts message timing, scores leads, and routes conversations for maximum conversion.',
    icon: '🧠',
  },
  {
    step: '04',
    title: 'Scale With Confidence',
    desc: 'From 1,000 to 100 million messages — our infrastructure scales automatically with enterprise SLAs and real-time dashboards.',
    icon: '🚀',
  },
];

const INTEGRATIONS = [
  { name: 'Salesforce', icon: '☁️' },
  { name: 'HubSpot', icon: '🟠' },
  { name: 'Slack', icon: '💜' },
  { name: 'Twilio', icon: '🔴' },
  { name: 'WhatsApp', icon: '💚' },
  { name: 'Zapier', icon: '⚡' },
  { name: 'Stripe', icon: '💳' },
  { name: 'Shopify', icon: '🛍️' },
  { name: 'Zendesk', icon: '🟢' },
  { name: 'Intercom', icon: '💬' },
  { name: 'Pipedrive', icon: '🔵' },
  { name: 'Notion', icon: '⚫' },
];

const TESTIMONIALS = [
  {
    quote: 'Ojiva AI cut our lead response time from 4 hours to under 60 seconds. Our conversion rate jumped 38% in the first month.',
    name: 'Sarah Chen',
    role: 'Head of Growth',
    company: 'FinNova Technologies',
    avatar: '👩‍💼',
  },
  {
    quote: "We replaced an entire outbound team with Ojiva AI's voice automation. The AI handles qualification better than most human reps.",
    name: 'Marcus Reid',
    role: 'VP of Sales',
    company: 'ProScale SaaS',
    avatar: '👨‍💼',
  },
  {
    quote: 'The WhatsApp campaign automation is a game-changer. We now run 12 concurrent campaigns with one person — not twelve.',
    name: 'Priya Nair',
    role: 'Marketing Director',
    company: 'Nexora Commerce',
    avatar: '👩‍🎨',
  },
];

const METRICS = [
  { value: 38, suffix: '%', label: 'Avg. Conversion Lift' },
  { value: 10, suffix: 'M+', label: 'Messages Monthly' },
  { value: 60, suffix: 's', label: 'Avg. Lead Response' },
  { value: 500, suffix: '+', label: 'Enterprise Clients' },
];

const WHY = [
  {
    icon: '⚡',
    title: 'Deploy in Days, Not Months',
    desc: 'Pre-built connectors, guided onboarding, and a sandbox environment means you go live fast.',
  },
  {
    icon: '🧠',
    title: 'AI That Actually Learns',
    desc: 'Models retrain on your data — so performance improves the longer you use the platform.',
  },
  {
    icon: '🧩',
    title: 'Works With Your Stack',
    desc: '50+ native integrations. Anything else connects via our REST API or webhook system.',
  },
  {
    icon: '📈',
    title: 'Real-Time Analytics',
    desc: 'Unified dashboards across all channels — messaging, voice, leads, and workflows.',
  },
  {
    icon: '🛡️',
    title: 'Enterprise-Grade Security',
    desc: 'SOC 2 Type II, end-to-end encryption, GDPR compliance, and 99.9% uptime SLA.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Success Team',
    desc: '24/7 support, quarterly business reviews, and a dedicated solutions architect.',
  },
];

/* ── Component ──────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════ */}
      <Hero />

      {/* ══ 2. LOGO STRIP ════════════════════════════════ */}
      <section className="logo-strip" aria-label="Trusted by leading companies">
        <div className="container">
          <FadeIn>
            <p className="logo-strip-label">Trusted by 500+ forward-thinking companies</p>
          </FadeIn>
          <div className="logo-strip-track">
            <div className="logo-strip-inner">
              {[...INTEGRATIONS, ...INTEGRATIONS].map(({ name, icon }, i) => (
                <div key={`${name}-${i}`} className="logo-strip-item">
                  <span className="logo-strip-icon">{icon}</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. METRICS BAND ══════════════════════════════ */}
      <section className="metrics-band section-padding-sm" aria-label="Platform metrics">
        <div className="container">
          <StaggerContainer className="row g-4 text-center">
            {METRICS.map(({ value, suffix, label }) => (
              <StaggerItem key={label} className="col-6 col-md-3">
                <div className="metric-band-item">
                  <div className="metric-band-value">
                    {/* AnimatedCounter is client — numbers run on scroll */}
                    <span className="metric-counter" data-target={value} data-suffix={suffix}>
                      {value}{suffix}
                    </span>
                  </div>
                  <div className="metric-band-label">{label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ 4. CORE MODULES GRID ═════════════════════════ */}
      <section className="section-padding bg-section" aria-labelledby="modules-heading">
        <div className="container">
          <FadeUp>
            <SectionHeading
              tag="Platform"
              title="Everything You Need to Automate at Scale"
              subtitle="Six AI-powered modules working together to give your business an intelligent communication backbone."
              center
            />
          </FadeUp>

          <StaggerContainer className="row g-4 mt-2" staggerDelay={0.08}>
            {MODULES.map(({ icon, tag, title, desc, points, color }) => (
              <StaggerItem key={title} className="col-12 col-md-6 col-lg-4">
                <HoverCard className="feature-card h-100">
                  <div className="feature-icon" style={{ background: color }}>
                    {icon}
                  </div>
                  <div className="section-tag" style={{ marginBottom: '0.75rem', fontSize: '0.72rem' }}>{tag}</div>
                  <h3 className="feature-title">{title}</h3>
                  <p className="feature-desc" style={{ marginBottom: '1rem' }}>{desc}</p>
                  <ul className="capability-list">
                    {points.map((p) => (
                      <li key={p} style={{ fontSize: '0.85rem' }}>{p}</li>
                    ))}
                  </ul>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ 5. HOW IT WORKS ══════════════════════════════ */}
      <section className="section-padding" aria-labelledby="how-heading">
        <div className="container">
          <FadeUp>
            <SectionHeading
              tag="How It Works"
              title="Up and Running in Four Steps"
              subtitle="We've removed every barrier to AI adoption. Most teams are live within 48 hours."
              center
            />
          </FadeUp>

          <div className="row g-4 mt-2">
            {HOW_IT_WORKS.map(({ step, title, desc, icon }, i) => (
              <FadeUp key={step} delay={i * 0.12} className="col-12 col-sm-6 col-lg-3">
                <div className="how-card">
                  <div className="how-step">{step}</div>
                  <div className="how-icon">{icon}</div>
                  <h3 className="how-title">{title}</h3>
                  <p className="how-desc">{desc}</p>
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="how-connector" aria-hidden="true">→</div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. FEATURE DEEP-DIVE (alternating) ══════════ */}
      <section className="section-padding bg-section" aria-labelledby="feature-deep-heading">
        <div className="container">
          <FadeUp>
            <SectionHeading
              tag="Intelligence Layer"
              title="AI That Works Across Every Channel"
              subtitle="Not just automation — genuine intelligence that shapes every customer interaction."
              center
            />
          </FadeUp>

          {/* Row 1 */}
          <div className="row align-items-center g-5 mt-4 mb-6">
            <SlideLeft className="col-12 col-lg-6">
              <span className="section-tag">AI Messaging</span>
              <h3 className="section-title mt-2">Send the Right Message at the Perfect Moment</h3>
              <p className="section-subtitle mb-4">
                Our AI analyses engagement patterns to determine the optimal send time for each individual contact.
                Campaigns that used to average 18% open rates now consistently hit 40%+.
              </p>
              <ul className="feature-deep-list">
                {['Behavioural send-time optimisation', 'Dynamic content personalisation', 'Automatic opt-out compliance', 'Multi-channel fallback logic'].map((pt) => (
                  <li key={pt}>
                    <span className="check-icon">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/platform#messaging" className="btn-ojiva-primary mt-4" style={{ display: 'inline-block' }}>
                See Messaging Features →
              </Link>
            </SlideLeft>
            <SlideRight className="col-12 col-lg-6">
              <div className="feature-deep-visual">
                <div className="fdv-chat">
                  {[
                    { from: 'ai', msg: 'Hi Sarah 👋 Your cart is waiting — get 20% off before midnight!', time: '9:14 AM' },
                    { from: 'user', msg: 'What items are in my cart?', time: '9:15 AM' },
                    { from: 'ai', msg: 'You have the Pro Plan + API Add-on. Total: $149/mo. Shall I apply the discount?', time: '9:15 AM' },
                    { from: 'user', msg: 'Yes please!', time: '9:16 AM' },
                    { from: 'ai', msg: '✅ Discount applied! Your subscription is now active. Welcome aboard!', time: '9:16 AM' },
                  ].map(({ from, msg, time }, i) => (
                    <div key={i} className={`chat-bubble ${from}`}>
                      <span>{msg}</span>
                      <span className="bubble-time">{time}</span>
                    </div>
                  ))}
                </div>
                <div className="fdv-badge">
                  <span>🤖</span> AI Managed This Entire Conversation
                </div>
              </div>
            </SlideRight>
          </div>

          {/* Row 2 */}
          <div className="row align-items-center g-5 mt-2">
            <SlideRight delay={0.05} className="col-12 col-lg-6 order-lg-2">
              <span className="section-tag">Lead Intelligence</span>
              <h3 className="section-title mt-2">Never Miss a Hot Lead Again</h3>
              <p className="section-subtitle mb-4">
                Ojiva AI scores every inbound lead in real time, enriches their profile from 40+ data sources,
                and routes them to the right rep — automatically.
              </p>
              <ul className="feature-deep-list">
                {['Real-time lead scoring', 'Automated CRM enrichment', 'Smart territory routing', 'Duplicate detection & merge'].map((pt) => (
                  <li key={pt}>
                    <span className="check-icon">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <Link href="/platform#leads" className="btn-ojiva-primary mt-4" style={{ display: 'inline-block' }}>
                See Lead Intelligence →
              </Link>
            </SlideRight>
            <SlideLeft delay={0.05} className="col-12 col-lg-6 order-lg-1">
              <div className="feature-deep-visual">
                <div className="lead-score-card">
                  <div className="lsc-header">
                    <span className="lsc-avatar">👤</span>
                    <div>
                      <p className="lsc-name">James Okafor</p>
                      <p className="lsc-company">TechFlow Enterprises</p>
                    </div>
                    <span className="lsc-badge hot">🔥 Hot</span>
                  </div>
                  <div className="lsc-score-row">
                    <span>Lead Score</span>
                    <div className="lsc-bar-wrap">
                      <div className="lsc-bar" style={{ width: '87%' }} />
                    </div>
                    <span className="lsc-score-val">87/100</span>
                  </div>
                  {[
                    { label: 'Company Size', value: '250–500 employees' },
                    { label: 'Industry', value: 'SaaS / Technology' },
                    { label: 'Intent Signal', value: 'Pricing page x4 visits' },
                    { label: 'Routed To', value: 'Sarah Chen (Enterprise)' },
                  ].map(({ label, value }) => (
                    <div key={label} className="lsc-row">
                      <span className="lsc-label">{label}</span>
                      <span className="lsc-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SlideLeft>
          </div>

        </div>
      </section>

      {/* ══ 7. TESTIMONIALS ══════════════════════════════ */}
      <section className="section-padding" aria-labelledby="testimonials-heading">
        <div className="container">
          <FadeUp>
            <SectionHeading
              tag="Customer Stories"
              title="Results That Speak for Themselves"
              subtitle="Businesses across industries are transforming their workflows with Ojiva AI."
              center
            />
          </FadeUp>

          <StaggerContainer className="row g-4 mt-2" staggerDelay={0.1}>
            {TESTIMONIALS.map(({ quote, name, role, company, avatar }) => (
              <StaggerItem key={name} className="col-12 col-md-4">
                <HoverCard className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-quote">"{quote}"</p>
                  <div className="testimonial-author">
                    <span className="testimonial-avatar">{avatar}</span>
                    <div>
                      <p className="testimonial-name">{name}</p>
                      <p className="testimonial-meta">{role} · {company}</p>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ 8. INTEGRATIONS ══════════════════════════════ */}
      <section className="section-padding bg-section" aria-labelledby="integrations-heading">
        <div className="container">
          <FadeUp>
            <SectionHeading
              tag="Integrations"
              title="Plug Into Your Entire Tech Stack"
              subtitle="50+ native integrations, REST APIs, and webhooks. Your stack, supercharged."
              center
            />
          </FadeUp>

          <StaggerContainer className="integrations-grid mt-5" staggerDelay={0.04}>
            {INTEGRATIONS.map(({ name, icon }) => (
              <StaggerItem key={name}>
                <HoverCard className="integration-chip">
                  <span className="integration-icon">{icon}</span>
                  <span className="integration-name">{name}</span>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <p className="integrations-footer">
              + 40 more · <Link href="/platform#api" style={{ color: 'var(--primary)', fontWeight: 600 }}>View all integrations →</Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══ 9. WHY OJIVA ═════════════════════════════════ */}
      <section className="section-padding" aria-labelledby="why-heading">
        <div className="container">
          <div className="row align-items-center g-5">
            <SlideLeft className="col-12 col-lg-5">
              <span className="section-tag">Why Ojiva AI</span>
              <h2 id="why-heading" className="section-title mt-2">
                Built for Teams That Can't Afford to Slow Down
              </h2>
              <p className="section-subtitle mb-0">
                We've obsessed over every detail so you don't have to. Ojiva AI is the
                communication backbone trusted by startups and Fortune 500s alike.
              </p>
            </SlideLeft>
            <div className="col-12 col-lg-7">
              <StaggerContainer className="row g-3" staggerDelay={0.08}>
                {WHY.map(({ icon, title, desc }) => (
                  <StaggerItem key={title} className="col-12 col-sm-6">
                    <div className="why-item-card">
                      <span className="why-item-icon">{icon}</span>
                      <h3 className="why-item-title">{title}</h3>
                      <p className="why-item-desc">{desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 10. CTA ══════════════════════════════════════ */}
      <CTA
        title="Ready to Automate at Scale?"
        subtitle="Join 500+ companies using Ojiva AI to communicate faster, qualify leads smarter, and grow without limits."
        primaryLabel="Book a Free Demo"
        primaryHref="/contact"
        secondaryLabel="Explore the Platform"
        secondaryHref="/platform"
      />
    </>
  );
}
