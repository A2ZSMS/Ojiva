import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import CTA from '@/components/CTA';
import { buildMetadata } from '@/lib/metadata';
import {
  FadeUp, SlideLeft, SlideRight, ScalePop,
  StaggerContainer, StaggerItem, HeroEntrance,
} from '@/components/Animations';

export const metadata = buildMetadata({
  title: 'Platform — AI Messaging, Voice, Leads & Workflow Automation',
  description:
    "Explore Ojiva AI's full platform — AI Messaging Engine, Voice Automation, Lead Intelligence, Workflow Orchestration, and API Integration Layer. Built on a decade of A2ZSMS infrastructure.",
  path: '/platform',
  keywords: [
    'AI messaging engine',
    'WhatsApp API integration',
    'bulk WhatsApp messaging software',
    'AI voice automation platform',
    'AI IVR system',
    'automated call center AI',
    'lead scoring software',
    'lead enrichment tool',
    'workflow automation builder',
    'no-code automation platform',
    'REST API integration platform',
    'enterprise webhook automation',
    'Ojiva platform pricing',
    'Ojiva API documentation',
    'CRM automation software',
    'sales pipeline automation',
    'conversational AI for sales',
    'SMS campaign management tool',
    'multi-channel marketing automation',
  ],
});

const MODULES = [
  {
    id: 'messaging',
    icon: '💬',
    iconColor: 'rgba(27,72,224,0.12)',
    iconColorDot: '#1B48E0',
    accentColor: '#1B48E0',
    title: 'AI Messaging Engine',
    description:
      'Deliver intelligent, personalised conversations across SMS and WhatsApp at enterprise scale. Our NLP-driven messaging engine interprets intent, routes responses, and drives engagement without human intervention.',
    capabilities: [
      'Two-way AI-driven SMS and WhatsApp messaging',
      'Dynamic personalisation using CRM data',
      'Intent detection and auto-response routing',
      'Drip sequencing with behavioural triggers',
      'Opt-out management and compliance handling',
      'Multi-language support across 50+ languages',
    ],
  },
  {
    id: 'voice',
    icon: '🎙️',
    iconColor: 'rgba(139,92,246,0.12)',
    iconColorDot: '#8B5CF6',
    accentColor: '#8B5CF6',
    title: 'AI Voice Automation',
    description:
      "Deploy conversational AI voice agents for inbound qualification and outbound outreach. Ojiva AI's voice layer handles high-volume call flows with human-like naturalness and enterprise reliability.",
    capabilities: [
      'Inbound IVR replacement with conversational AI',
      'Outbound voice campaigns with AI call scripts',
      'Real-time transcription and intent capture',
      'Intelligent escalation to live agents',
      'DTMF and voice hybrid interaction support',
      'Call analytics and sentiment scoring',
    ],
  },
  {
    id: 'leads',
    icon: '🎯',
    iconColor: 'rgba(0,200,248,0.12)',
    iconColorDot: '#00c8f8',
    accentColor: '#00c8f8',
    title: 'AI Lead Intelligence',
    description:
      'Score, enrich, and route leads with millisecond precision. Our lead AI evaluates hundreds of behavioural and firmographic signals to identify high-intent prospects and trigger the right action at the right moment.',
    capabilities: [
      'Real-time lead scoring using ML models',
      'Firmographic and behavioural enrichment',
      'Smart routing to sales teams or automated flows',
      'Priority queuing based on conversion probability',
      'Lead deduplication and data hygiene',
      'Native CRM sync (Salesforce, HubSpot, Zoho)',
    ],
  },
  {
    id: 'workflow',
    icon: '⚡',
    iconColor: 'rgba(16,185,129,0.12)',
    iconColorDot: '#10b981',
    accentColor: '#10b981',
    title: 'Workflow Orchestration',
    description:
      "Design and deploy intelligent automation pipelines that connect your CRM, APIs, and business tools. Ojiva AI's workflow engine reacts to real-time events and orchestrates complex sequences automatically.",
    capabilities: [
      'Visual no-code workflow builder',
      'Event-driven trigger architecture',
      'Conditional branching and A/B logic',
      'CRM field updates and task creation',
      'Webhook and REST API orchestration',
      'Retry logic and error handling built-in',
    ],
  },
  {
    id: 'api',
    icon: '🔌',
    iconColor: 'rgba(249,115,22,0.12)',
    iconColorDot: '#F97316',
    accentColor: '#F97316',
    title: 'API & Integration Layer',
    description:
      'Ojiva AI is built API-first. Every platform capability is accessible programmatically, enabling deep integration with your existing technology stack and custom application development.',
    capabilities: [
      'RESTful APIs with OpenAPI 3.0 specification',
      '200+ pre-built integration connectors',
      'Inbound and outbound webhook support',
      'SDK libraries for Node.js, Python, PHP, Java',
      'OAuth 2.0 and API key authentication',
      'Sandbox environment for safe testing',
    ],
  },
];

const INTEGRATIONS = [
  { icon: '📊', name: 'Salesforce' },
  { icon: '🔶', name: 'HubSpot' },
  { icon: '🔷', name: 'Zoho CRM' },
  { icon: '📋', name: 'Freshdesk' },
  { icon: '📦', name: 'Shopify' },
  { icon: '🛒', name: 'WooCommerce' },
  { icon: '💼', name: 'Pipedrive' },
  { icon: '📧', name: 'SendGrid' },
  { icon: '🔔', name: 'Slack' },
  { icon: '🗄️', name: 'MySQL' },
  { icon: '💻', name: 'Webhook' },
  { icon: '📱', name: 'Twilio' },
];

const API_CODE = `<span style="color:rgba(255,255,255,0.35)">// Send a message via Ojiva AI in 3 lines</span>
<span style="color:#7aaeff">const</span> ojiva = <span style="color:#7aaeff">require</span>(<span style="color:#a8ff78">'@ojiva/sdk'</span>);
<span style="color:#7aaeff">const</span> client = <span style="color:#7aaeff">new</span> ojiva.Client({ apiKey: <span style="color:#a8ff78">'YOUR_KEY'</span> });

<span style="color:#7aaeff">const</span> res = <span style="color:#7aaeff">await</span> client.sms.send({
  to:      <span style="color:#a8ff78">'+91 98765 43210'</span>,
  message: <span style="color:#a8ff78">'Your OTP is {{otp}}'</span>,
  vars:    { otp: <span style="color:#ffa56d">482910</span> },
  sender:  <span style="color:#a8ff78">'OJIVAI'</span>,
});

console.log(res.messageId);
<span style="color:rgba(255,255,255,0.35)">// → msg_01HX9K2P3FZ7KR...</span>`;

export default function PlatformPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero platform-hero-enhanced" aria-labelledby="platform-hero-heading">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-7">
              <HeroEntrance index={0}>
              <span className="section-tag">The Platform</span>
              </HeroEntrance>
              <HeroEntrance index={1}>
              <h1 className="page-hero-title" id="platform-hero-heading">
                Every capability your team needs to{' '}
                <span className="platform-hero-accent">automate communication</span>{' '}
                at scale
              </h1>
              <p className="page-hero-subtitle">
                Five deeply integrated AI modules that work as one unified intelligence
                engine — from first message to closed deal.
              </p>
              </HeroEntrance>
              <HeroEntrance index={2}>
              <div className="platform-hero-stats">
                <div className="platform-hero-stat">
                  <span className="platform-hero-stat-value">3B+</span>
                  <span className="platform-hero-stat-label">API calls / month</span>
                </div>
                <div className="platform-hero-stat-divider" />
                <div className="platform-hero-stat">
                  <span className="platform-hero-stat-value">200+</span>
                  <span className="platform-hero-stat-label">Integrations</span>
                </div>
                <div className="platform-hero-stat-divider" />
                <div className="platform-hero-stat">
                  <span className="platform-hero-stat-value">99.9%</span>
                  <span className="platform-hero-stat-label">Uptime SLA</span>
                </div>
              </div>
              </HeroEntrance>
            </div>

            {/* Module quick-nav */}
            <div className="col-12 col-lg-4 offset-lg-1">
              <HeroEntrance index={2}>
              <div className="platform-module-nav">
                {MODULES.map((mod) => (
                  <a href={`#${mod.id}`} key={mod.id} className="platform-module-nav-item">
                    <span
                      className="platform-module-nav-icon"
                      style={{ background: mod.iconColor }}
                    >
                      {mod.icon}
                    </span>
                    <span className="platform-module-nav-label">{mod.title}</span>
                    <span className="platform-module-nav-arrow">→</span>
                  </a>
                ))}
              </div>
              </HeroEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* ── Module Details ── */}
      <section className="section-padding" aria-labelledby="modules-list-heading">
        <div className="container">
          <h2 className="visually-hidden" id="modules-list-heading">Platform modules</h2>
          {MODULES.map((mod, index) => (
            <FadeUp key={mod.id} delay={index * 0.05}>
            <div
              key={mod.id}
              id={mod.id}
              className={`platform-module-v2 ${index === MODULES.length - 1 ? 'mb-0' : ''}`}
            >
              <div className="platform-module-num">{String(index + 1).padStart(2, '0')}</div>
              <div className="row align-items-start g-4">
                <div className="col-12 col-lg-5">
                  <div
                    className="platform-module-v2-icon"
                    style={{ background: mod.iconColor }}
                    aria-hidden="true"
                  >
                    {mod.icon}
                  </div>
                  <h2 className="platform-module-v2-title">{mod.title}</h2>
                  <p className="platform-module-v2-desc">{mod.description}</p>
                </div>

                <div className="col-12 col-lg-7">
                  <p className="platform-caps-label">Capabilities</p>
                  <div className="platform-caps-grid">
                    {mod.capabilities.map((cap) => (
                      <span
                        className="platform-cap-chip"
                        style={{ '--chip-dot': mod.iconColorDot }}
                        key={cap}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <hr className="gradient-divider" />

      {/* ── Integrations ── */}
      <section className="section-padding bg-section" aria-labelledby="integrations-heading">
        <div className="container">
          <div className="row mb-5 justify-content-center text-center">
            <div className="col-12 col-lg-7">
              <SectionHeading
                tag="Integrations"
                title="Connects to your existing stack"
                subtitle="200+ pre-built connectors across CRM, e-commerce, helpdesk, data, and communication tools. If it has an API, Ojiva AI can integrate with it."
                center
              />
            </div>
          </div>
          <StaggerContainer className="integration-grid" staggerDelay={0.05}>
            {INTEGRATIONS.map(({ icon, name }) => (
              <StaggerItem className="integration-item" key={name}>
                <span className="integration-item-icon" aria-hidden="true">{icon}</span>
                <span>{name}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="integration-more">+ 190 more integrations available</p>
        </div>
      </section>

      {/* ── API / Developer section ── */}
      <section className="section-padding" aria-labelledby="api-heading">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <SlideLeft>
              <SectionHeading
                tag="API-First"
                title="Built for developers, designed for scale"
                subtitle="Every platform capability is accessible programmatically via RESTful APIs with OpenAPI 3.0 spec. SDKs available for Node.js, Python, PHP, and Java."
              />
              <ul className="api-feature-list mt-4">
                <li>OpenAPI 3.0 specification with Swagger docs</li>
                <li>OAuth 2.0 and API key authentication</li>
                <li>Inbound and outbound webhook support</li>
                <li>Sandbox environment for safe development</li>
                <li>Up to 10,000 requests per second</li>
                <li>99.9% uptime SLA with status page</li>
              </ul>
              <Link href="/support" className="btn-ojiva-primary mt-4 d-inline-flex">
                View Documentation →
              </Link>
              </SlideLeft>
            </div>

            <div className="col-12 col-lg-6 offset-lg-1">
              <ScalePop>
              <div className="api-feature-block">
                <div className="api-feature-header">
                  <div className="api-dot dot-red" />
                  <div className="api-dot dot-yellow" />
                  <div className="api-dot dot-green" />
                  <span className="api-filename">send-message.js</span>
                </div>
                <pre
                  className="api-code"
                  dangerouslySetInnerHTML={{ __html: API_CODE }}
                />
              </div>
              </ScalePop>
            </div>
          </div>
        </div>
      </section>

      <FadeUp>
      <CTA
        title="Built to integrate with your existing stack"
        subtitle="Ojiva AI connects to your CRM, helpdesk, data warehouse, and custom APIs — enterprise support and white-glove onboarding included."
        primaryLabel="Talk to an Engineer"
        secondaryLabel="View Documentation"
        secondaryHref="/support"
      />
      </FadeUp>
    </>
  );
}
