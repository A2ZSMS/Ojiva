import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import CTA from '@/components/CTA';
import { buildMetadata, organizationSchema, breadcrumbSchema } from '@/lib/metadata';
import {
  FadeUp, SlideLeft, SlideRight, ScalePop,
  StaggerContainer, StaggerItem, HeroEntrance,
} from '@/components/Animations';

export const metadata = buildMetadata({
  title: 'About Ojiva AI — Born from A2ZSMS, Built for Enterprise AI',
  description:
    "Ojiva AI is India's leading AI communication platform and parent company of A2ZSMS. Discover our decade-long journey in enterprise messaging and our vision for AI-driven communication.",
  path: '/about',
  keywords: [
    'about Ojiva AI',
    'A2ZSMS parent company',
    'Ojiva AI A2ZSMS',
    'bulk SMS India',
    'AI communication platform India',
    'enterprise messaging company',
    'Ojiva AI story',
    'AI startup Bengaluru',
    'AI communication company India',
    'business automation company',
    'Ojiva AI mission',
    'who is Ojiva',
  ],
});

const METRICS = [
  { value: '3B+', label: 'API calls processed' },
  { value: '10M+', label: 'Messages sent monthly' },
  { value: '99.9%', label: 'Platform uptime SLA' },
  { value: '150+', label: 'Enterprise clients' },
];

const TIMELINE = [
  {
    year: '2015',
    icon: '📱',
    title: 'A2ZSMS Founded',
    desc: "A2ZSMS launched as India's most trusted bulk SMS aggregator — serving thousands of businesses across retail, BFSI, and healthcare with reliable, DLT-compliant messaging.",
  },
  {
    year: '2019',
    icon: '📈',
    title: 'Reaching Enterprise Scale',
    desc: 'Crossed 1 billion messages milestone. Onboarded major enterprise clients and expanded into two-way messaging, OTP, and transactional SMS at national scale.',
  },
  {
    year: '2021',
    icon: '🤖',
    title: 'AI Integration Begins',
    desc: 'Built NLP intent layers, smart routing, and automation workflows on top of the battle-tested A2ZSMS messaging infrastructure — the seeds of Ojiva AI.',
  },
  {
    year: '2023',
    icon: '⚡',
    title: 'Ojiva AI Incorporated',
    desc: 'Ojiva AI was incorporated as the parent intelligence platform — unifying SMS, WhatsApp, RCS, and Bulk Voice Call under one engine with A2ZSMS as its flagship product.',
  },
  {
    year: '2024',
    icon: '🌐',
    title: 'Multi-Channel Platform Launch',
    desc: "Launched WhatsApp Business API, RCS Business Messaging, and Bulk Voice Call. Became India's first truly unified AI communication platform with A2ZSMS at the core.",
  },
];

const VALUES = [
  {
    icon: '🚀',
    bg: 'rgba(27,72,224,0.1)',
    title: 'Velocity',
    desc: 'We build, ship, and iterate at the speed modern businesses demand. Our platform evolves every week.',
  },
  {
    icon: '🔒',
    bg: 'rgba(16,185,129,0.1)',
    title: 'Trust',
    desc: 'Security and data integrity are non-negotiable. SOC 2 Type II certified, GDPR compliant, and DLT registered.',
  },
  {
    icon: '🧠',
    bg: 'rgba(139,92,246,0.1)',
    title: 'Intelligence',
    desc: 'Every platform decision is powered by ML models trained on billions of real communication signals.',
  },
  {
    icon: '🤝',
    bg: 'rgba(249,115,22,0.1)',
    title: 'Partnership',
    desc: "We treat every client as a long-term partner. Your success metrics are our team's north star.",
  },
  {
    icon: '🌍',
    bg: 'rgba(0,200,248,0.1)',
    title: 'Scale',
    desc: 'Built from the ground up to operate globally — multi-region infrastructure with data residency controls.',
  },
  {
    icon: '⚙️',
    bg: 'rgba(239,68,68,0.1)',
    title: 'Reliability',
    desc: 'Platform interruptions cost businesses. We engineer for five-nines reliability across every component.',
  },
];

const INFRA = [
  {
    icon: '🌐',
    title: 'Multi-Region Deployment',
    desc: 'Active-active infrastructure across multiple cloud regions ensures low-latency delivery and automatic failover.',
  },
  {
    icon: '🔐',
    title: 'End-to-End Encryption',
    desc: 'All data in transit and at rest is encrypted with AES-256. Zero-knowledge architecture for sensitive content.',
  },
  {
    icon: '📋',
    title: 'Compliance Ready',
    desc: 'SOC 2 Type II, GDPR, HIPAA-ready configuration, TCPA, and TRAI/DLT compliance built into every account.',
  },
  {
    icon: '📡',
    title: 'Real-Time Observability',
    desc: 'Live dashboards, anomaly detection, and alerting pipelines give operations teams full platform visibility.',
  },
  {
    icon: '⚖️',
    title: 'Elastic Scaling',
    desc: 'Auto-scaling compute and message queue infrastructure handles 10x traffic spikes without configuration.',
  },
  {
    icon: '🛡️',
    title: 'DDoS Protection',
    desc: 'Layered network and application-level protection ensures the platform remains available under attack conditions.',
  },
];

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Ojiva AI',
  description: "Ojiva AI is India's leading AI communication platform and parent company of A2ZSMS.",
  url: 'https://ojiva.ai/about',
  mainEntity: { '@type': 'Organization', name: 'Ojiva AI', url: 'https://ojiva.ai' },
};
const aboutBreadcrumb = breadcrumbSchema([
  { name: 'Home',  url: 'https://ojiva.ai/' },
  { name: 'About', url: 'https://ojiva.ai/about' },
]);

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumb) }} />
      {/* ── Hero ── */}
      <section className="page-hero about-hero-enhanced" aria-labelledby="about-hero-heading">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <HeroEntrance index={0}>
                <span className="section-tag">Our Story</span>
              </HeroEntrance>
              <HeroEntrance index={1}>
              <h1 className="page-hero-title" id="about-hero-heading">
                Built on a decade of{' '}
                <span className="about-hero-accent">messaging trust</span>
              </h1>
              </HeroEntrance>
              <HeroEntrance index={2}>
              <p className="page-hero-subtitle">
                Ojiva AI is the parent company of A2ZSMS — India&apos;s most reliable
                bulk SMS platform. We&apos;ve been the backbone of enterprise communication
                since 2015, and today we&apos;re redefining what&apos;s possible with AI.
              </p>
              </HeroEntrance>
              <HeroEntrance index={3}>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link href="/contact" className="btn-hero-primary">
                  Talk to Us
                </Link>
                <Link href="/platform" className="btn-hero-outline">
                  Explore Platform →
                </Link>
              </div>
              </HeroEntrance>
            </div>

            <div className="col-12 col-lg-5 offset-lg-1">
              <HeroEntrance index={2}>
              <div className="about-brand-stack">
                {/* Ojiva AI — Parent */}
                <div className="about-brand-card about-brand-ojiva">
                  <div className="about-brand-card-header">
                    <Image
                      src="/OJIVA%20AI%20MAIN%20LOGO%20WHITE%20PNG.png"
                      alt="Ojiva AI"
                      width={130}
                      height={44}
                      style={{ width: 'auto', height: '38px', objectFit: 'contain' }}
                      unoptimized
                    />
                    <span className="about-brand-badge">Parent Company</span>
                  </div>
                  <p className="about-brand-desc">AI Communication Platform</p>
                  <div className="about-brand-pills">
                    <span>SMS</span>
                    <span>WhatsApp</span>
                    <span>RCS</span>
                    <span>Bulk Voice Call</span>
                  </div>
                </div>

                {/* Connector */}
                <div className="about-brand-connector">
                  <div className="about-brand-connector-line" />
                  <span className="about-brand-connector-label">Owns &amp; Powers</span>
                  <div className="about-brand-connector-line" />
                </div>

                {/* A2ZSMS — Flagship */}
                <div className="about-brand-card about-brand-a2z">
                  <div className="about-brand-card-header">
                    <div className="a2z-logo-text">A2ZSMS</div>
                    <span className="about-brand-badge about-brand-badge-cyan">Flagship Product</span>
                  </div>
                  <p className="about-brand-desc">India&apos;s #1 Bulk SMS Aggregator</p>
                  <div className="about-brand-pills about-brand-pills-cyan">
                    <span>Bulk SMS</span>
                    <span>OTP &amp; Alerts</span>
                    <span>DLT Compliant</span>
                  </div>
                </div>
              </div>
              </HeroEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics Strip ── */}
      <section className="about-metrics-strip" aria-label="Key metrics">
        <div className="container">
          <StaggerContainer className="about-metrics-grid-v2" staggerDelay={0.12}>
            {METRICS.map(({ value, label }) => (
              <StaggerItem className="about-metric-v2" key={label}>
                <span className="metric-v2-value">{value}</span>
                <p className="metric-v2-label">{label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Our Journey / Origin ── */}
      <section className="section-padding" aria-labelledby="journey-heading">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-12 col-lg-5">
              <SlideLeft>
              <SectionHeading
                tag="Our Journey"
                title="From SMS aggregator to AI platform"
                subtitle="The story of Ojiva AI begins with A2ZSMS — built on one principle: make messaging reliable, scalable, and simple for Indian enterprises."
              />
              <div className="about-origin-block mt-4">
                <p>
                  A2ZSMS was founded to solve a real problem: businesses in India needed
                  a trustworthy, compliant, and fast SMS gateway. Over a decade, we grew
                  to serve 150+ enterprise clients and process billions of messages annually.
                </p>
                <p className="mt-3">
                  As AI transformed what was possible in communication, we didn&apos;t
                  just add features — we rebuilt from the top. Ojiva AI was incorporated
                  as the parent platform, bringing AI intelligence to every channel, while
                  A2ZSMS continues as our trusted, high-volume SMS engine.
                </p>
                <div className="about-a2z-link-block mt-4">
                  <span className="about-a2z-link-label">Our SMS Platform</span>
                  <span className="about-a2z-link-name">A2ZSMS</span>
                  <span className="about-a2z-link-desc">Trusted by 150+ enterprises for bulk SMS, OTP, transactional &amp; promotional messaging.</span>
                </div>
              </div>
              </SlideLeft>
            </div>

            <div className="col-12 col-lg-6 offset-lg-1">
              <SlideRight>
              <div className="about-timeline">
                {TIMELINE.map((item, i) => (
                  <div className="timeline-item-v2" key={item.year}>
                    <div className="timeline-left-v2">
                      <div className="timeline-dot-v2">
                        <span aria-hidden="true">{item.icon}</span>
                      </div>
                      {i < TIMELINE.length - 1 && (
                        <div className="timeline-line-v2" />
                      )}
                    </div>
                    <div className="timeline-content-v2">
                      <span className="timeline-year-v2">{item.year}</span>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              </SlideRight>
            </div>
          </div>
        </div>
      </section>

      <hr className="gradient-divider" />

      {/* ── Vision & Mission ── */}
      <section className="section-padding bg-section" aria-labelledby="purpose-heading">
        <div className="container">
          <div className="row mb-5 justify-content-center text-center">
            <div className="col-12 col-lg-7">
              <SectionHeading
                tag="Purpose"
                title="Why Ojiva AI exists"
                center
              />
            </div>
          </div>
          <FadeUp>
          <div className="vision-mission-grid">
            <div className="vm-card vm-card-vision">
              <span className="vm-card-icon" aria-hidden="true">🔭</span>
              <span className="vm-card-tag">Vision</span>
              <h3>The future of enterprise communication is autonomous</h3>
              <p>
                We envision a world where businesses can engage millions of customers
                with the personalisation of a one-on-one conversation — at zero
                marginal cost per interaction.
              </p>
            </div>
            <div className="vm-card vm-card-mission">
              <span className="vm-card-icon" aria-hidden="true">🎯</span>
              <span className="vm-card-tag">Mission</span>
              <h3>Deliver the most capable AI communication engine on the market</h3>
              <p>
                To enable any enterprise to automate intelligently across every
                channel — SMS, WhatsApp, RCS, Voice — and grow without limits,
                backed by infrastructure and intelligence built over a decade.
              </p>
            </div>
          </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Infrastructure ── */}
      <section className="section-padding" aria-labelledby="infra-heading">
        <div className="container">
          <div className="row mb-5 justify-content-center text-center">
            <div className="col-12 col-lg-7">
              <SectionHeading
                tag="Infrastructure"
                title="Enterprise-grade from the ground up"
                subtitle="Ojiva AI's architecture is designed for enterprise workloads with the security, compliance, and observability that regulated industries demand."
                center
              />
            </div>
          </div>
          <StaggerContainer className="row g-4" staggerDelay={0.08}>
            {INFRA.map(({ icon, title, desc }) => (
              <StaggerItem className="col-12 col-md-6 col-lg-4" key={title}>
                <div className="about-infra-card">
                  <div className="about-infra-icon" aria-hidden="true">{icon}</div>
                  <h4 className="about-infra-title">{title}</h4>
                  <p className="about-infra-desc">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <hr className="gradient-divider" />

      {/* ── Values ── */}
      <section className="section-padding bg-section" aria-labelledby="values-heading">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 col-lg-6">
              <SectionHeading
                tag="Core Values"
                title="What drives everything we build"
              />
            </div>
          </div>
          <StaggerContainer className="row g-4" staggerDelay={0.08}>
            {VALUES.map(({ icon, bg, title, desc }) => (
              <StaggerItem className="col-12 col-md-6 col-lg-4" key={title}>
                <div className="value-card-v2">
                  <div className="value-icon-box" style={{ background: bg }}>
                    <span aria-hidden="true">{icon}</span>
                  </div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FadeUp>
      <CTA
        title="Ready to see Ojiva AI in action?"
        subtitle="Book a personalised walkthrough with one of our platform engineers and see how Ojiva AI can transform your communication stack."
        primaryLabel="Schedule a Demo"
        secondaryLabel="Explore the Platform"
        secondaryHref="/platform"
      />
      </FadeUp>
    </>
  );
}
