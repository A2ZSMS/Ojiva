import SectionHeading from '@/components/SectionHeading';
import CTA from '@/components/CTA';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Platform — AI Messaging, Voice, Leads & Workflow Automation',
  description:
    "Explore Ojiva AI's full platform — AI Messaging Engine, Voice Automation, Lead Intelligence, Workflow Orchestration, and API Integration Layer.",
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
    iconBg: 'icon-blue',
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
    iconBg: 'icon-purple',
    title: 'AI Voice Automation',
    description:
      'Deploy conversational AI voice agents for inbound qualification and outbound outreach. Ojiva AI\'s voice layer handles high-volume call flows with human-like naturalness and enterprise reliability.',
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
    iconBg: 'icon-cyan',
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
    iconBg: 'icon-green',
    title: 'Workflow Orchestration',
    description:
      'Design and deploy intelligent automation pipelines that connect your CRM, APIs, and business tools. Ojiva AI\'s workflow engine reacts to real-time events and orchestrates complex sequences automatically.',
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
    iconBg: 'icon-blue',
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

export default function PlatformPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="platform-hero-heading">
        <div className="container">
          <div className="col-12 col-lg-7">
            <span className="section-tag">The Platform</span>
            <h1 className="page-hero-title" id="platform-hero-heading">
              Every capability your team needs to automate communication at scale
            </h1>
            <p className="page-hero-subtitle">
              Five deeply integrated AI modules that work as one unified intelligence
              engine — from first message to closed deal.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="modules-list-heading">
        <div className="container">
          <h2 className="visually-hidden" id="modules-list-heading">Platform modules</h2>
          {MODULES.map((mod, index) => (
            <div
              key={mod.id}
              id={mod.id}
              className={`platform-module ${index === MODULES.length - 1 ? 'mb-0' : ''}`}
            >
              <div className="row align-items-start g-4">
                <div className="col-12 col-lg-5">
                  <div className={`platform-module-icon ${mod.iconBg}`} aria-hidden="true">
                    {mod.icon}
                  </div>
                  <h2 className="platform-module-title">{mod.title}</h2>
                  <p className="platform-module-desc">{mod.description}</p>
                </div>

                <div className="col-12 col-lg-6 offset-lg-1">
                  <p style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.875rem' }}>
                    Capabilities
                  </p>
                  <ul className="capability-list" aria-label={`${mod.title} capabilities`}>
                    {mod.capabilities.map((cap) => (
                      <li key={cap}>{cap}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Built to integrate with your existing stack"
        subtitle="Ojiva AI connects to your CRM, helpdesk, data warehouse, and custom APIs — enterprise support and white-glove onboarding included."
        primaryLabel="Talk to an Engineer"
        secondaryLabel="View Documentation"
        secondaryHref="/support"
      />
    </>
  );
}
