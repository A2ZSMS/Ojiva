import Link from 'next/link';
import {
  RiWhatsappLine, RiMessage3Line, RiSmartphoneLine, RiPhoneLine,
  RiLockPasswordLine, RiRobotLine, RiFocusLine, RiFlashlightLine,
  RiLinksLine, RiShieldLine, RiPlugLine, RiFlowChart,
  RiBrainLine, RiRocketLine, RiPuzzleLine, RiBarChart2Line, RiTeamLine,
} from 'react-icons/ri';
import Hero from './Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/ui/CTA';
import FeatureDeepDive from './FeatureDeepDive';
import SecuritySection from './SecuritySection';
import BlogPreview from './BlogPreview';
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
} from '@/components/ui/Animations';
import { faqSchema } from '@/lib/metadata';

/* ─────────────────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────────────────── */
const HOME_FAQS = [
  {
    q: 'What is Ojiva AI?',
    a: 'Ojiva AI is India\'s #1 AI-powered communication platform that enables businesses to send Bulk SMS, automate WhatsApp Business API conversations, launch RCS campaigns, and deploy Bulk Voice Call at enterprise scale — all from a single dashboard with end-to-end encryption.',
  },
  {
    q: 'What services does Ojiva AI offer?',
    a: 'Ojiva AI offers Bulk SMS Service, WhatsApp Business API integration, RCS Messaging, AI Voice Call automation, OTP & 2FA Solutions, WhatsApp AI Chatbot, SIP Trunking, and workflow automation — all with enterprise-grade AES-256 security.',
  },
  {
    q: 'Is Ojiva AI free to try?',
    a: 'Yes! Ojiva AI offers a free 14-day trial with no credit card required. You can explore all features including Bulk SMS, WhatsApp API, RCS Messaging, and Bulk Voice Call before choosing a paid plan.',
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
   TRUSTED BRANDS — logo marquee
───────────────────────────────────────────────────────── */
const BRANDS = [
  { name: 'Salesforce',  letter: 'Sf', color: '#00A1E0' },
  { name: 'HubSpot',     letter: 'Hs', color: '#FF7A59' },
  { name: 'Shopify',     letter: 'Sh', color: '#96BF48' },
  { name: 'Razorpay',    letter: 'Rp', color: '#3395FF' },
  { name: 'Zoho',        letter: 'Zh', color: '#E42527' },
  { name: 'Zapier',      letter: 'Zp', color: '#FF4A00' },
  { name: 'Stripe',      letter: 'St', color: '#635BFF' },
  { name: 'Zendesk',     letter: 'Zd', color: '#03363D' },
  { name: 'Intercom',    letter: 'Ic', color: '#1F8DED' },
  { name: 'Pipedrive',   letter: 'Pd', color: '#017737' },
  { name: 'Freshworks',  letter: 'Fw', color: '#25C16F' },
  { name: 'LeadSquared', letter: 'Ls', color: '#E04B35' },
];

/* ─────────────────────────────────────────────────────────
   SERVICES
───────────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'whatsapp',
    icon: RiWhatsappLine,
    iconBg: '#25D366',
    title: 'WhatsApp Business API',
    desc: 'Send bulk messages, automate replies with chatbots, and manage customer conversations at scale with 98% open rates.',
    stat: '98% open rate',
  },
  {
    id: 'rcs',
    icon: RiMessage3Line,
    iconBg: '#1B48E0',
    title: 'RCS Messaging',
    desc: 'Deliver rich, app-like experiences with interactive carousels, branded messages, and verified sender identity.',
    stat: '94% read rate',
  },
  {
    id: 'sms',
    icon: RiSmartphoneLine,
    iconBg: '#0EA5E9',
    title: 'Bulk SMS Service',
    desc: 'Lightning-fast promotional and transactional SMS campaigns with 99.9% delivery rates across all networks.',
    stat: '10M+ msgs/day',
  },
  {
    id: 'voice',
    icon: RiPhoneLine,
    iconBg: '#7C3AED',
    title: 'Bulk Voice Call',
    desc: 'Crystal-clear voice campaigns with IVR, auto-retry logic, and detailed analytics for maximum reach.',
    stat: 'Zero-agent IVR',
  },
  {
    id: 'platform',
    icon: RiLockPasswordLine,
    iconBg: '#dc2626',
    title: 'OTP & 2FA Solutions',
    desc: 'Ultra-fast OTP delivery via SMS, WhatsApp & Voice with 99.9% success rate and enterprise-grade two-factor authentication.',
    stat: '99.9% success',
  },
  {
    id: 'whatsapp-chatbot',
    icon: RiRobotLine,
    iconBg: '#25D366',
    title: 'WhatsApp AI Chatbot',
    desc: '24/7 automated customer support powered by AI. Handle queries, capture leads, and close sales while you sleep.',
    stat: '24/7 automated',
    linkOverride: '/whatsapp-chatbot',
  },
];

/* ─────────────────────────────────────────────────────────
   MODULES
───────────────────────────────────────────────────────── */
const MODULES = [
  {
    icon: RiFocusLine,
    tag: 'Lead Intelligence',
    title: 'Never Miss a Hot Lead Again',
    desc: 'Score, enrich, and route every inbound lead in milliseconds. Our ML engine evaluates 40+ signals to put the right lead in front of the right rep — automatically.',
    points: ['Real-time lead scoring', 'CRM enrichment & dedup', 'Smart round-robin routing'],
    color: 'rgba(139,92,246,0.09)',
    accentColor: '#7C3AED',
  },
  {
    icon: RiFlashlightLine,
    tag: 'Workflow Automation',
    title: 'Automate Every Customer Journey',
    desc: 'Connect SMS, WhatsApp, RCS, and Voice into seamless automated workflows. Drag-and-drop builder — no developer, no delays, no limits.',
    points: ['Drag-and-drop visual builder', 'Cross-channel automation', 'CRM & API sync'],
    color: 'rgba(34,197,94,0.09)',
    accentColor: '#16a34a',
  },
  {
    icon: RiLinksLine,
    tag: 'Integrations',
    title: '200+ Native Connectors, One API',
    desc: 'Plug Ojiva AI into your existing stack in minutes — Salesforce, HubSpot, Zoho, Shopify, and 200+ more via our REST API and webhook ecosystem.',
    points: ['REST API & Webhooks', '200+ native connectors', 'Real-time delivery callbacks'],
    color: 'rgba(245,158,11,0.09)',
    accentColor: '#d97706',
  },
  {
    icon: RiShieldLine,
    tag: 'Security & Compliance',
    title: 'Enterprise Security You Can Trust',
    desc: 'AES-256 encryption, GDPR & DPDP Act compliance, DLT registration support, and a financially binding 99.9% uptime SLA for mission-critical operations.',
    points: ['GDPR & DPDP compliant', 'DLT registration support', '99.9% uptime SLA'],
    color: 'rgba(239,68,68,0.09)',
    accentColor: '#dc2626',
  },
];

/* ─────────────────────────────────────────────────────────
   HOW IT WORKS
───────────────────────────────────────────────────────── */
const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Connect in 10 Minutes',
    desc: 'Plug Ojiva AI into your CRM, messaging apps, and databases using our native connectors or REST API — no engineering sprint required.',
    icon: RiPlugLine,
  },
  {
    step: '02',
    title: 'Build Your First Flow',
    desc: 'Use the no-code visual builder to set triggers, conditions, and actions — from simple OTP campaigns to complex multi-channel automations.',
    icon: RiFlowChart,
  },
  {
    step: '03',
    title: 'AI Takes Over',
    desc: 'Our AI continuously analyses performance, adapts message timing, scores leads, and routes conversations to maximise every conversion.',
    icon: RiBrainLine,
  },
  {
    step: '04',
    title: 'Watch Results Roll In',
    desc: 'Track every message, call, and lead in real time. Most clients see a 38% lift in conversions within the first 30 days.',
    icon: RiRocketLine,
  },
];

/* ─────────────────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote: 'Ojiva AI cut our lead response time from 4 hours to under 60 seconds. Our conversion rate jumped 38% in the very first month.',
    name: 'Sarah Chen',
    role: 'Head of Growth',
    company: 'FinNova Technologies',
    initials: 'SC',
    avatarBg: '#dbeafe',
    avatarColor: '#1d4ed8',
    result: '+38% Conversions',
    resultColor: '#16a34a',
    stars: 5,
  },
  {
    quote: "We replaced an entire outbound team with Ojiva AI's voice automation. The AI qualifies leads better than most human reps — at a fraction of the cost.",
    name: 'Marcus Reid',
    role: 'VP of Sales',
    company: 'ProScale SaaS',
    initials: 'MR',
    avatarBg: '#ede9fe',
    avatarColor: '#6d28d9',
    result: '60% Cost Reduction',
    resultColor: '#1B48E0',
    stars: 5,
  },
  {
    quote: 'The WhatsApp campaign automation is a game-changer. We now run 12 concurrent campaigns with one person — not twelve.',
    name: 'Priya Nair',
    role: 'Marketing Director',
    company: 'Nexora Commerce',
    initials: 'PN',
    avatarBg: '#dcfce7',
    avatarColor: '#15803d',
    result: '12× Campaign Scale',
    resultColor: '#7C3AED',
    stars: 5,
  },
];

/* ─────────────────────────────────────────────────────────
   WHY OJIVA
───────────────────────────────────────────────────────── */
const WHY = [
  {
    icon: RiFlashlightLine,
    title: 'Live in Under 10 Minutes',
    desc: 'Pre-built connectors, guided onboarding, and a sandbox environment mean you go live the same day.',
    color: '#1B48E0',
  },
  {
    icon: RiBrainLine,
    title: 'AI That Gets Smarter Daily',
    desc: 'Models retrain on your own data — every campaign makes the next one more accurate and effective.',
    color: '#7C3AED',
  },
  {
    icon: RiPuzzleLine,
    title: 'Works With Your Entire Stack',
    desc: '200+ native connectors. Anything else connects instantly via our REST API or webhook system.',
    color: '#FF6D42',
  },
  {
    icon: RiBarChart2Line,
    title: 'Unified Real-Time Analytics',
    desc: 'One dashboard across all channels — SMS, WhatsApp, Voice, RCS — with live delivery and conversion data.',
    color: '#25D366',
  },
  {
    icon: RiShieldLine,
    title: 'Enterprise-Grade Compliance',
    desc: 'SOC 2, GDPR, DPDP Act, DLT registered, end-to-end encryption — built for regulated industries.',
    color: '#dc2626',
  },
  {
    icon: RiTeamLine,
    title: '24/7 Dedicated Success Team',
    desc: 'Every enterprise client gets a named solutions architect, quarterly business reviews, and priority support.',
    color: '#d97706',
  },
];

/* ─────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────── */
export default function HomePage() {
  /* Duplicate brands for seamless loop */
  const brandLoop = [...BRANDS, ...BRANDS];

  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <Hero />

      {/* ══ 2b. TRUST / STATS BAR ════════════════════════════ */}
      <div className="hp-trust-bar" aria-label="Platform statistics">
        <div className="container">
          <div className="hp-trust-inner">
            {[
              { val: '10M+',  lbl: 'Messages / day' },
              { val: '500+',  lbl: 'Businesses trust us' },
              { val: '99.9%', lbl: 'Uptime SLA' },
              { val: '4',     lbl: 'Channels — one API' },
              { val: 'AES-256', lbl: 'Encryption standard' },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="hp-trust-item">
                <span className="hp-trust-val">{val}</span>
                <span className="hp-trust-lbl">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ 3. CORE SERVICES ═════════════════════════════════ */}
      <section className="section-padding hp-sec-svc" aria-labelledby="services-heading">
        <div className="container">
          <BlurReveal>
            <SectionHeading
              tag="Powerful Messaging Solutions"
              title="Everything You Need to Grow Your Business"
              subtitle="From WhatsApp automation to bulk messaging — powerful communication tools trusted by 10,000+ businesses across India."
              center
            />
          </BlurReveal>

          {/* Top-tier featured services */}
          <StaggerContainer className="ojv-svc-grid-top mt-5" staggerDelay={0.08}>
            {SERVICES.slice(0, 2).map(({ id, icon: Icon, iconBg, title, desc, stat, linkOverride }, i) => (
              <StaggerItem key={`${id}-top`}>
                <Link href={linkOverride || `/${id}`} className="ojv-svc-card ojv-svc-card--featured">
                  <div className="ojv-svc-card-accent" style={{ background: `linear-gradient(90deg, ${iconBg}, ${iconBg}99)` }} aria-hidden="true" />
                  <div className="ojv-svc-icon" style={{ background: `${iconBg}18`, borderColor: `${iconBg}30`, color: iconBg }}>
                    <Icon size={28} aria-hidden="true" />
                  </div>
                  <h3 className="ojv-svc-title">{title}</h3>
                  <p className="ojv-svc-desc">{desc}</p>
                  <div className="ojv-svc-footer">
                    <span className="ojv-svc-stat" style={{ color: iconBg, background: `${iconBg}12` }}>
                      {stat}
                    </span>
                    <span className="ojv-svc-link" style={{ color: iconBg }}>
                      Learn more →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Supporting services grid */}
          <StaggerContainer className="ojv-svc-grid mt-4" staggerDelay={0.07}>
            {SERVICES.slice(2).map(({ id, icon: Icon, iconBg, title, desc, stat, linkOverride }, i) => (
              <StaggerItem key={`${id}-${i}`}>
                <Link href={linkOverride || `/${id}`} className="ojv-svc-card">
                  <div className="ojv-svc-icon" style={{ background: `${iconBg}18`, borderColor: `${iconBg}30`, color: iconBg }}>
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="ojv-svc-title">{title}</h3>
                  <p className="ojv-svc-desc">{desc}</p>
                  <div className="ojv-svc-footer">
                    <span className="ojv-svc-stat" style={{ color: iconBg, background: `${iconBg}12` }}>
                      {stat}
                    </span>
                    <span className="ojv-svc-link" style={{ color: iconBg }}>
                      Learn more →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ 4. SECURITY & COMPLIANCE ═════════════════════════ */}
      <SecuritySection />

      {/* ══ 5. HOW IT WORKS ══════════════════════════════════ */}
      <section className="section-padding hp-sec-hiw" aria-labelledby="how-heading">
        <div className="container">
          <ClipReveal direction="left">
            <SectionHeading
              tag="Get Started in Minutes"
              title="From Sign-Up to Revenue in 4 Steps"
              subtitle="We've removed every barrier to AI adoption. Most teams are live — and seeing results — within 48 hours."
              center
            />
          </ClipReveal>

          <div className="ojv-timeline mt-5">
            {/* Connecting line */}
            <div className="ojv-timeline-line" aria-hidden="true" />
            {HOW_IT_WORKS.map(({ step, title, desc, icon: Icon }, i) => (
              <RotateIn key={step} delay={i * 0.12}>
                <div className="ojv-timeline-step">
                  <div className="ojv-timeline-node">
                    <span className="ojv-timeline-num">{step}</span>
                    <div className="ojv-timeline-icon"><Icon size={20} aria-hidden="true" /></div>
                  </div>
                  <div className="ojv-timeline-body">
                    <h3 className="ojv-timeline-title">{title}</h3>
                    <p className="ojv-timeline-desc">{desc}</p>
                  </div>
                </div>
              </RotateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. FEATURE DEEP-DIVE ══════════════════════════════ */}
      <FeatureDeepDive />

      {/* ══ 7. PLATFORM CAPABILITIES ══════════════════════════ */}
      <section className="section-padding hp-sec-platform" aria-labelledby="modules-heading">
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
            {MODULES.map(({ icon: Icon, tag, title, desc, points, color, accentColor }) => (
              <StaggerItem key={title} className="col-12 col-md-6 col-lg-3">
                <TiltCard3D intensity={9} className="module-card-v3 h-100">
                  <div className="module-card-v3-icon" style={{ background: color, color: accentColor }}>
                    <Icon size={28} aria-hidden="true" />
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

      {/* ══ 8. TESTIMONIALS ═══════════════════════════════════ */}
      <section className="section-padding" style={{ background: '#f8fafc' }} aria-labelledby="testimonials-heading">
        <div className="container">
          <ParallaxSection speed={0.1}>
            <SectionHeading
              tag="Customer Stories"
              title="Real Teams. Real Results."
              subtitle="Businesses across India are transforming their growth with Ojiva AI — here's what they say."
              center
            />
          </ParallaxSection>

          <StaggerContainer className="row g-4 mt-4" staggerDelay={0.1}>
            {TESTIMONIALS.map(({ quote, name, role, company, initials, avatarBg, avatarColor, result, resultColor, stars }) => (
              <StaggerItem key={name} className="col-12 col-md-4">
                <div className="ojv-testi-card h-100">
                  {/* Big quote mark */}
                  <div className="ojv-testi-quote-mark" aria-hidden="true">&ldquo;</div>
                  <div className="ojv-testi-top">
                    <div className="ojv-testi-stars">{'★'.repeat(stars)}</div>
                    <div
                      className="ojv-testi-result"
                      style={{ color: resultColor, background: `${resultColor}20` }}
                    >
                      {result}
                    </div>
                  </div>
                  <p className="ojv-testi-quote">{quote}</p>
                  <div className="ojv-testi-author">
                    <span
                      className="ojv-testi-avatar"
                      style={{ background: avatarBg, color: avatarColor }}
                    >
                      {initials}
                    </span>
                    <div>
                      <p className="ojv-testi-name">{name}</p>
                      <p className="ojv-testi-meta">{role} · {company}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ 9. WHY OJIVA AI ═══════════════════════════════════ */}
      <section className="section-padding hp-sec-why" aria-labelledby="why-heading">
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
                {WHY.map(({ icon: Icon, title, desc, color }) => (
                  <StaggerItem key={title} className="col-12 col-sm-6">
                    <div className="why-card-v3">
                      <span className="why-icon-v3" style={{ background: `${color}15`, color }}>
                        <Icon size={22} aria-hidden="true" />
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

      {/* ══ 10. BLOG PREVIEW ═════════════════════════════════ */}
      <BlogPreview />

      {/* ══ FAQ Schema (JSON-LD) ══════════════════════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_FAQ_SCHEMA) }}
      />

      {/* ══ 10. CTA ═══════════════════════════════════════════ */}
      <CTA
        title="Ready to 10× Your Messaging Results?"
        subtitle="Join 500+ companies using Ojiva AI to deliver smarter messages, qualify leads faster, and grow without limits. Free demo — no commitment required."
        primaryLabel="Book a Free Demo"
        primaryHref="/contact"
        secondaryLabel="Explore the Platform"
        secondaryHref="/platform"
      />
    </>
  );
}
