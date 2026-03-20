import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import CTA from '@/components/CTA';
import FeatureDeepDive from '@/components/FeatureDeepDive';
import SecuritySection from '@/components/SecuritySection';
import {
  FadeUp,
  FadeIn,
  SlideLeft,
  SlideRight,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  TiltCard3D,
  AnimatedCounter,
  BlurReveal,
  ParallaxSection,
  TextReveal,
  ScrollScale,
  ClipReveal,
  MagneticButton,
  DrawLine,
  GlowCard,
  RotateIn,
} from '@/components/Animations';
import { buildMetadata, faqSchema } from '@/lib/metadata';

/* ─────────────────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────────────────── */
export const metadata = buildMetadata({
  title: 'Ojiva AI — India\'s #1 Bulk SMS, WhatsApp API, RCS & AI Voice Platform',
  description:
    'Ojiva AI is India\'s leading enterprise communication platform. Send Bulk SMS, automate WhatsApp Business API, launch RCS campaigns & deploy AI Voice Calls at scale. AES-256 encrypted. 10M+ messages monthly. Trusted by 500+ businesses across India.',
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
   FAQ DATA (used for rich results + rendered section)
───────────────────────────────────────────────────────── */
const HOME_FAQS = [
  {
    q: 'What is Ojiva AI?',
    a: 'Ojiva AI is India\'s #1 AI-powered communication platform that enables businesses to send Bulk SMS, automate WhatsApp Business API conversations, launch RCS campaigns, and deploy AI Voice Calls at enterprise scale — all from a single dashboard with end-to-end encryption.',
  },
  {
    q: 'What services does Ojiva AI offer?',
    a: 'Ojiva AI offers Bulk SMS Service, WhatsApp Business API integration, RCS Messaging, AI Voice Call automation, OTP & 2FA Solutions, WhatsApp AI Chatbot, SIP Trunking, and workflow automation — all with enterprise-grade AES-256 security.',
  },
  {
    q: 'Is Ojiva AI free to try?',
    a: 'Yes! Ojiva AI offers a free 14-day trial with no credit card required. You can explore all features including Bulk SMS, WhatsApp API, RCS Messaging, and AI Voice Calls before choosing a paid plan.',
  },
  {
    q: 'How much does Ojiva AI cost?',
    a: 'Ojiva AI offers flexible pay-as-you-go pricing starting from ₹0.15/SMS. Enterprise plans with dedicated support, custom integrations, and volume discounts are available. Contact sales for a custom quote.',
  },
  {
    q: 'Does Ojiva AI support WhatsApp Business API?',
    a: 'Yes, Ojiva AI is an official WhatsApp Business Solution Provider (BSP) offering full WhatsApp Business API integration including bulk messaging, chatbot automation, interactive templates, and 98% open rate delivery across India.',
  },
  {
    q: 'How secure is Ojiva AI?',
    a: 'Ojiva AI uses AES-256 encryption, TLS 1.3 in transit, 2FA/TOTP authentication, and is SOC 2 Type II aligned. We are GDPR & DPDP Act compliant with 99.9% uptime SLA and ISO 27001 practices.',
  },
  {
    q: 'Where is Ojiva AI based?',
    a: 'Ojiva AI is headquartered in Bengaluru, Karnataka, India (Sahakara Nagar). We serve 500+ businesses across India and globally, with support available in English and Hindi.',
  },
];

const HOME_FAQ_SCHEMA = faqSchema(HOME_FAQS);

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const CHANNELS = [
  {
    id: 'sms',
    icon: '📱',
    label: 'Bulk SMS',
    color: '#1B48E0',
    bg: 'rgba(27,72,224,0.07)',
    borderColor: 'rgba(27,72,224,0.3)',
    title: 'Bulk SMS & Transactional SMS',
    desc: 'Reach every customer, every time. Fire millions of personalised SMS messages — OTPs, promotions, alerts, and two-way conversations — with 99.9% delivery guaranteed.',
    points: [
      'Promotional & transactional SMS',
      'OTP & instant verification',
      'Drip campaigns & smart triggers',
      'Real-time delivery analytics',
      'DLT compliant India gateway',
    ],
    badge: '#1 SMS Platform',
    stat: '10M+ msgs/day',
  },
  {
    id: 'whatsapp',
    icon: '💬',
    label: 'WhatsApp API',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.07)',
    borderColor: 'rgba(37,211,102,0.3)',
    title: 'WhatsApp Business API',
    desc: 'Turn WhatsApp into your #1 revenue channel. Official Meta BSP — send rich media, interactive buttons, payment links, and AI-powered flows to millions of customers.',
    points: [
      'Official Meta BSP partner',
      'Rich media, buttons & catalogs',
      'WhatsApp payments & checkout',
      'AI chatbot flows & automation',
      'Template management & analytics',
    ],
    badge: 'Meta BSP Partner',
    stat: '98% open rate',
  },
  {
    id: 'rcs',
    icon: '✨',
    label: 'RCS Messaging',
    color: '#FF6D42',
    bg: 'rgba(255,109,66,0.07)',
    borderColor: 'rgba(255,109,66,0.3)',
    title: 'RCS Business Messaging',
    desc: 'The next evolution of SMS — deliver visually rich, interactive messages with image carousels, quick-reply buttons, and verified brand identity straight to the native inbox.',
    points: [
      'Rich carousels & image cards',
      'Quick-reply action buttons',
      'Verified brand sender ID',
      'Read receipts & live typing',
      'Auto SMS fallback built-in',
    ],
    badge: 'Next-Gen SMS',
    stat: '94% read rate',
  },
  {
    id: 'voice',
    icon: '📞',
    label: 'Voice AI',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.07)',
    borderColor: 'rgba(124,58,237,0.3)',
    title: 'AI Voice Call Automation',
    desc: 'Deploy AI voice agents that sound human and convert like your best sales rep. Handle millions of inbound & outbound calls — IVR, OTP reads, lead qualification, follow-ups.',
    points: [
      'Outbound bulk voice broadcasting',
      'Inbound IVR AI replacement',
      'Voice OTP & verification calls',
      'AI lead qualification & scoring',
      'Real-time call transcription',
    ],
    badge: 'AI Powered',
    stat: 'Zero-agent IVR',
  },
];

const METRICS = [
  { value: 10,  suffix: 'M+', label: 'Messages Monthly',      icon: '📨' },
  { value: 98,  suffix: '%',  label: 'Avg. Delivery Rate',    icon: '✅' },
  { value: 38,  suffix: '%',  label: 'Conversion Lift',       icon: '📈' },
  { value: 500, suffix: '+',  label: 'Enterprise Clients',    icon: '🏢' },
];

const MODULES = [
  {
    icon: '🎯',
    tag: 'Lead Intelligence',
    title: 'Never Miss a Hot Lead Again',
    desc: 'Score, enrich, and route every inbound lead in milliseconds. Our ML engine evaluates 40+ signals to put the right lead in front of the right rep — automatically.',
    points: ['Real-time lead scoring', 'CRM enrichment & dedup', 'Smart round-robin routing'],
    color: 'rgba(139,92,246,0.09)',
    accentColor: '#7C3AED',
  },
  {
    icon: '⚡',
    tag: 'Workflow Automation',
    title: 'Automate Every Customer Journey',
    desc: 'Connect SMS, WhatsApp, RCS, and Voice into seamless automated workflows. Drag-and-drop builder — no developer, no delays, no limits.',
    points: ['Drag-and-drop visual builder', 'Cross-channel automation', 'CRM & API sync'],
    color: 'rgba(34,197,94,0.09)',
    accentColor: '#16a34a',
  },
  {
    icon: '🔗',
    tag: 'Integrations',
    title: '200+ Native Connectors, One API',
    desc: 'Plug Ojiva AI into your existing stack in minutes — Salesforce, HubSpot, Zoho, Shopify, and 200+ more via our REST API and webhook ecosystem.',
    points: ['REST API & Webhooks', '200+ native connectors', 'Real-time delivery callbacks'],
    color: 'rgba(245,158,11,0.09)',
    accentColor: '#d97706',
  },
  {
    icon: '🛡️',
    tag: 'Security & Compliance',
    title: 'Enterprise Security You Can Trust',
    desc: 'AES-256 encryption, GDPR & DPDP Act compliance, DLT registration support, and a financially binding 99.9% uptime SLA for mission-critical operations.',
    points: ['GDPR & DPDP compliant', 'DLT registration support', '99.9% uptime SLA'],
    color: 'rgba(239,68,68,0.09)',
    accentColor: '#dc2626',
  },
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Connect in 10 Minutes',
    desc: 'Plug Ojiva AI into your CRM, messaging apps, and databases using our native connectors or REST API — no engineering sprint required.',
    icon: '🔌',
  },
  {
    step: '02',
    title: 'Build Your First Flow',
    desc: 'Use the no-code visual builder to set triggers, conditions, and actions — from simple OTP campaigns to complex multi-channel automations.',
    icon: '🗂️',
  },
  {
    step: '03',
    title: 'AI Takes Over',
    desc: 'Our AI continuously analyses performance, adapts message timing, scores leads, and routes conversations to maximise every conversion.',
    icon: '🧠',
  },
  {
    step: '04',
    title: 'Watch Results Roll In',
    desc: 'Track every message, call, and lead in real time. Most clients see a 38% lift in conversions within the first 30 days.',
    icon: '🚀',
  },
];

const INTEGRATIONS = [
  { name: 'Salesforce', color: '#00A1E0', letter: 'Sf' },
  { name: 'HubSpot',    color: '#FF7A59', letter: 'Hs' },
  { name: 'Slack',      color: '#4A154B', letter: 'Sl' },
  { name: 'Twilio',     color: '#F22F46', letter: 'Tw' },
  { name: 'WhatsApp',   color: '#25D366', letter: 'Wa' },
  { name: 'Zapier',     color: '#FF4A00', letter: 'Zp' },
  { name: 'Stripe',     color: '#635BFF', letter: 'St' },
  { name: 'Shopify',    color: '#96BF48', letter: 'Sh' },
  { name: 'Zendesk',    color: '#03363D', letter: 'Zd' },
  { name: 'Intercom',   color: '#1F8DED', letter: 'Ic' },
  { name: 'Pipedrive',  color: '#017737', letter: 'Pd' },
  { name: 'Notion',     color: '#000000', letter: 'No' },
];

const TESTIMONIALS = [
  {
    quote: 'Ojiva AI cut our lead response time from 4 hours to under 60 seconds. Our conversion rate jumped 38% in the very first month.',
    name: 'Sarah Chen',
    role: 'Head of Growth',
    company: 'FinNova Technologies',
    avatar: '👩‍💼',
    result: '+38% Conversions',
    resultColor: '#16a34a',
  },
  {
    quote: "We replaced an entire outbound team with Ojiva AI's voice automation. The AI qualifies leads better than most human reps — at a fraction of the cost.",
    name: 'Marcus Reid',
    role: 'VP of Sales',
    company: 'ProScale SaaS',
    avatar: '👨‍💼',
    result: '60% Cost Reduction',
    resultColor: '#1B48E0',
  },
  {
    quote: 'The WhatsApp campaign automation is a game-changer. We now run 12 concurrent campaigns with one person — not twelve.',
    name: 'Priya Nair',
    role: 'Marketing Director',
    company: 'Nexora Commerce',
    avatar: '👩‍🎨',
    result: '12× Campaign Scale',
    resultColor: '#7C3AED',
  },
];

const WHY = [
  {
    icon: '⚡',
    title: 'Live in Under 10 Minutes',
    desc: 'Pre-built connectors, guided onboarding, and a sandbox environment mean you go live the same day.',
    color: '#1B48E0',
  },
  {
    icon: '🧠',
    title: 'AI That Gets Smarter Daily',
    desc: 'Models retrain on your own data — every campaign makes the next one more accurate and effective.',
    color: '#7C3AED',
  },
  {
    icon: '🧩',
    title: 'Works With Your Entire Stack',
    desc: '200+ native connectors. Anything else connects instantly via our REST API or webhook system.',
    color: '#FF6D42',
  },
  {
    icon: '📈',
    title: 'Unified Real-Time Analytics',
    desc: 'One dashboard across all channels — SMS, WhatsApp, Voice, RCS — with live delivery and conversion data.',
    color: '#25D366',
  },
  {
    icon: '🛡️',
    title: 'Enterprise-Grade Compliance',
    desc: 'SOC 2, GDPR, DPDP Act, DLT registered, end-to-end encryption — built for regulated industries.',
    color: '#dc2626',
  },
  {
    icon: '🤝',
    title: '24/7 Dedicated Success Team',
    desc: 'Every enterprise client gets a named solutions architect, quarterly business reviews, and priority support.',
    color: '#d97706',
  },
];

/* ─────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <Hero />

      {/* ══ 2. LOGO MARQUEE STRIP ════════════════════════════ */}
      <section className="logo-strip" aria-label="Trusted by leading companies">
        <div className="container">
          <FadeIn>
            <p className="logo-strip-label">Trusted by 500+ forward-thinking companies</p>
          </FadeIn>
          <div className="logo-strip-track">
            <div className="logo-strip-inner">
              {[...INTEGRATIONS, ...INTEGRATIONS].map(({ name, color, letter }, i) => (
                <div key={`${name}-${i}`} className="logo-strip-item">
                  <span className="logo-strip-mark" style={{ background: color }}>{letter}</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. METRICS BAND ══════════════════════════════════ */}
      <section className="metrics-band section-padding-sm" aria-label="Platform metrics">
        <div className="container">
          <StaggerContainer className="metrics-band-grid" staggerDelay={0.1}>
            {METRICS.map(({ value, suffix, label, icon }) => (
              <StaggerItem key={label}>
                <div className="metric-band-item-v2">
                  <span className="metric-band-icon">{icon}</span>
                  <div className="metric-band-value-v2">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </div>
                  <div className="metric-band-label-v2">{label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ 4. CORE SERVICES ═════════════════════════════════ */}
      <section className="section-padding pb-section-sm" aria-labelledby="services-heading">
        <div className="container">
          <BlurReveal>
            <SectionHeading
              tag="Powerful Messaging Solutions"
              title="Everything You Need to Grow Your Business"
              subtitle="From WhatsApp automation to bulk messaging — powerful communication tools trusted by 10,000+ businesses across India."
              center
            />
          </BlurReveal>

          <DrawLine className="section-divider-line" color="linear-gradient(90deg, transparent, #00c8f8, #1B48E0, transparent)" width="100%" />

          <StaggerContainer className="svc-grid mt-4" staggerDelay={0.08}>
            {[
              {
                id: 'whatsapp',
                icon: '💬',
                iconBg: '#25D366',
                title: 'WhatsApp Business API',
                desc: 'Send bulk messages, automate replies with chatbots, and manage customer conversations at scale with 98% open rates.',
              },
              {
                id: 'rcs',
                icon: '✨',
                iconBg: '#1B48E0',
                title: 'RCS Messaging',
                desc: 'Deliver rich, app-like experiences with interactive carousels, branded messages, and verified sender identity.',
              },
              {
                id: 'sms',
                icon: '📱',
                iconBg: '#0EA5E9',
                title: 'Bulk SMS Service',
                desc: 'Lightning-fast promotional and transactional SMS campaigns with 99.9% delivery rates across all networks.',
              },
              {
                id: 'voice',
                icon: '📞',
                iconBg: '#1B48E0',
                title: 'Bulk Voice Calls',
                desc: 'Crystal-clear voice campaigns with IVR, auto-retry logic, and detailed analytics for maximum reach.',
              },
              {
                id: 'platform',
                icon: '🔐',
                iconBg: '#dc2626',
                title: 'OTP & 2FA Solutions',
                desc: 'Ultra-fast OTP delivery via SMS, WhatsApp & Voice with 99.9% success rate. Enterprise-grade two-factor authentication.',
              },
              {
                id: 'whatsapp-chatbot',
                icon: '🤖',
                iconBg: '#25D366',
                title: 'WhatsApp AI Chatbot',
                desc: '24/7 automated customer support powered by AI. Handle queries, capture leads, and close sales while you sleep.',
                linkOverride: '/whatsapp-chatbot',
              },
            ].map(({ id, icon, iconBg, title, desc, linkOverride }, i) => (
              <StaggerItem key={`${id}-${i}`}>
                <Link href={linkOverride || `/${id}`} className="svc-clean-card">
                  <div className="svc-clean-icon" style={{ background: iconBg }}>
                    {icon}
                  </div>
                  <h3 className="svc-clean-title">{title}</h3>
                  <p className="svc-clean-desc">{desc}</p>
                  <span className="svc-clean-link">
                    Learn more <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ 5. SECURITY & COMPLIANCE ═════════════════════════ */}
      <SecuritySection />

      {/* ══ 6. PLATFORM CAPABILITIES ═════════════════════════ */}
      <section className="section-padding bg-section" aria-labelledby="modules-heading">
        <div className="container">
          <ScrollScale>
            <SectionHeading
              tag="Platform"
              title="Beyond Messaging — A Complete AI Growth Engine"
              subtitle="Lead intelligence, visual workflow automation, 200+ native integrations, and enterprise security — all in one platform that grows with you."
              center
            />
          </ScrollScale>

          <StaggerContainer className="row g-4 mt-3" staggerDelay={0.09}>
            {MODULES.map(({ icon, tag, title, desc, points, color, accentColor }) => (
              <StaggerItem key={title} className="col-12 col-md-6 col-lg-3">
                <TiltCard3D intensity={9} className="module-card-v3 h-100">
                  <div className="module-card-v3-icon" style={{ background: color }}>
                    <span aria-hidden="true">{icon}</span>
                  </div>
                  <span className="module-tag-v3" style={{ color: accentColor, background: color }}>{tag}</span>
                  <h3 className="module-card-v3-title">{title}</h3>
                  <p className="module-card-v3-desc">{desc}</p>
                  <ul className="module-list-v3">
                    {points.map((p) => (
                      <li key={p} style={{ '--accent': accentColor }}>
                        <span aria-hidden="true">→</span> {p}
                      </li>
                    ))}
                  </ul>
                  <Link href="/platform" className="module-link-v3" style={{ color: accentColor }}>
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </TiltCard3D>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ 7. HOW IT WORKS ══════════════════════════════════ */}
      <section className="section-padding" aria-labelledby="how-heading">
        <div className="container">
          <ClipReveal direction="left">
            <SectionHeading
              tag="How It Works"
              title="From Sign-Up to Revenue in 4 Steps"
              subtitle="We've removed every barrier to AI adoption. Most teams are live — and seeing results — within 48 hours."
              center
            />
          </ClipReveal>

          <div className="how-grid mt-4">
            {HOW_IT_WORKS.map(({ step, title, desc, icon }, i) => (
              <RotateIn key={step} delay={i * 0.12}>
                <div className="how-card-v3">
                  <div className="how-step-v3">{step}</div>
                  <div className="how-icon-v3">{icon}</div>
                  <h3 className="how-title-v3">{title}</h3>
                  <p className="how-desc-v3">{desc}</p>
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="how-connector-v3" aria-hidden="true" />
                  )}
                </div>
              </RotateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. FEATURE DEEP-DIVE — animated client component ═══ */}
      <FeatureDeepDive />

      {/* ══ 9. TESTIMONIALS ══════════════════════════════════ */}
      <section className="section-padding" aria-labelledby="testimonials-heading">
        <div className="container">
          <ParallaxSection speed={0.1}>
            <SectionHeading
              tag="Customer Stories"
              title="Real Teams. Real Results."
              subtitle="Businesses across India are transforming their growth with Ojiva AI — here's what they say."
              center
            />
          </ParallaxSection>

          <StaggerContainer className="row g-4 mt-3" staggerDelay={0.1}>
            {TESTIMONIALS.map(({ quote, name, role, company, avatar, result, resultColor }) => (
              <StaggerItem key={name} className="col-12 col-md-4">
                <TiltCard3D intensity={7} className="testimonial-card-v3 h-100">
                  <span className="testimonial-quote-deco" aria-hidden="true">&ldquo;</span>
                  <div className="testimonial-result-badge" style={{ background: `${resultColor}15`, color: resultColor }}>
                    {result}
                  </div>
                  <div className="testimonial-stars-v3">★★★★★</div>
                  <p className="testimonial-quote-v3">&ldquo;{quote}&rdquo;</p>
                  <div className="testimonial-author-v3">
                    <span className="testimonial-avatar-v3">{avatar}</span>
                    <div>
                      <p className="testimonial-name-v3">{name}</p>
                      <p className="testimonial-meta-v3">{role} · {company}</p>
                    </div>
                  </div>
                </TiltCard3D>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ 10. INTEGRATIONS ══════════════════════════════════ */}
      <section className="section-padding bg-section" aria-labelledby="integrations-heading">
        <div className="container">
          <BlurReveal>
            <SectionHeading
              tag="Integrations"
              title="Plug Into Your Entire Tech Stack"
              subtitle="200+ native connectors, REST APIs, and webhooks. If it has an API, Ojiva AI connects to it — in minutes, not months."
              center
            />
          </BlurReveal>

          <StaggerContainer className="integrations-grid mt-5" staggerDelay={0.04}>
            {INTEGRATIONS.map(({ name, color, letter }) => (
              <StaggerItem key={name}>
                <TiltCard3D intensity={6} className="integration-chip">
                  <span className="integration-logo-mark" style={{ background: color }}>
                    {letter}
                  </span>
                  <span className="integration-name">{name}</span>
                </TiltCard3D>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <p className="integrations-footer">
              + 190 more &middot;{' '}
              <Link href="/platform#api" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                View all integrations →
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══ 11. WHY OJIVA AI ══════════════════════════════════ */}
      <section className="section-padding" aria-labelledby="why-heading">
        <div className="container">
          <div className="row align-items-center g-5">
            <SlideLeft className="col-12 col-lg-5">
              <span className="section-tag">Why Ojiva AI</span>
              <h2 id="why-heading" className="section-title mt-2">
                Built for Teams That{' '}
                <span className="text-gradient-animated">Can&apos;t Afford</span>{' '}
                to Slow Down
              </h2>
              <TextReveal
                text="We've obsessed over every detail so you don't have to. Ojiva AI is the communication backbone trusted by startups and Fortune 500s — from day one to enterprise scale."
                className="section-subtitle mb-4"
              />
              <MagneticButton className="magnetic-btn-wrap">
                <Link href="/contact" className="btn-ojiva-primary">
                  Book a Free Demo →
                </Link>
              </MagneticButton>
            </SlideLeft>
            <div className="col-12 col-lg-7">
              <StaggerContainer className="row g-3" staggerDelay={0.07}>
                {WHY.map(({ icon, title, desc, color }) => (
                  <StaggerItem key={title} className="col-12 col-sm-6">
                    <div className="why-card-v3">
                      <span className="why-icon-v3" style={{ background: `${color}15`, color }}>
                        {icon}
                      </span>
                      <div>
                        <h3 className="why-title-v3">{title}</h3>
                        <p className="why-desc-v3">{desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ Schema (JSON-LD for rich results) ════════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_FAQ_SCHEMA) }}
      />

      {/* ══ 12. CTA ═══════════════════════════════════════════ */}
      <CTA
        title="Ready to 10× Your Messaging Results?"
        subtitle="Join 500+ companies using Ojiva AI to deliver smarter messages, qualify leads faster, and grow without limits. Free demo — no commitment required."
        primaryLabel="Book a Free Demo →"
        primaryHref="/contact"
        secondaryLabel="Explore the Platform"
        secondaryHref="/platform"
      />
    </>
  );
}
