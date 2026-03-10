import SectionHeading from '@/components/SectionHeading';
import CTA from '@/components/CTA';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'About Ojiva AI — Our Story, Mission & Team',
  description:
    'Learn about Ojiva AI — a next-generation AI automation company building scalable communication intelligence for modern enterprises.',
  path: '/about',
  keywords: [
    'about Ojiva AI',
    'Ojiva AI company',
    'Ojiva AI founders',
    'Ojiva AI team',
    'AI startup Bengaluru',
    'AI startup India',
    'enterprise AI company',
    'AI communication company India',
    'business automation company',
    'Ojiva AI mission',
    'who is Ojiva',
    'Ojiva AI reviews',
    'Ojiva AI careers',
  ],
});

const METRICS = [
  { value: '3B+', label: 'API calls processed' },
  { value: '10M+', label: 'Messages automated monthly' },
  { value: '99.9%', label: 'Platform uptime SLA' },
  { value: '150+', label: 'Enterprise clients' },
];

const VALUES = [
  {
    icon: '🚀',
    title: 'Velocity',
    desc: 'We build, ship, and iterate at the speed modern businesses demand. Our platform evolves weekly.',
  },
  {
    icon: '🔒',
    title: 'Trust',
    desc: 'Security and data integrity are non-negotiable. We are SOC 2 Type II certified and GDPR compliant.',
  },
  {
    icon: '🧠',
    title: 'Intelligence',
    desc: 'Every platform decision is powered by real data and ML models trained on billions of communication signals.',
  },
  {
    icon: '🤝',
    title: 'Partnership',
    desc: 'We treat every client as a long-term partner. Your success is our KPI.',
  },
  {
    icon: '🌍',
    title: 'Scale',
    desc: 'Built from the ground up to operate globally — multi-region infrastructure with data residency controls.',
  },
  {
    icon: '⚙️',
    title: 'Reliability',
    desc: 'Platform interruptions cost businesses. We engineer for five-nines reliability across every component.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-hero-heading">
        <div className="container">
          <div className="col-12 col-lg-7">
            <span className="section-tag">Our Story</span>
            <h1 className="page-hero-title" id="about-hero-heading">
              We are building the AI communication layer for modern enterprise
            </h1>
            <p className="page-hero-subtitle">
              Ojiva AI was founded with a singular vision — to make intelligent,
              automated communication as easy to deploy as sending an email.
            </p>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="section-padding" aria-labelledby="vision-heading">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-5">
              <SectionHeading
                tag="Vision"
                title="The future of enterprise communication is autonomous"
                subtitle="We envision a world where businesses can engage millions of customers with the personalisation of a one-on-one conversation — at zero marginal cost per interaction."
              />
              <div className="mt-4">
                <SectionHeading
                  tag="Mission"
                  title=""
                  subtitle="To deliver the most capable, reliable, and accessible AI communication engine on the market — enabling any enterprise to automate intelligently and grow without limits."
                />
              </div>
            </div>

            <div className="col-12 col-lg-6 offset-lg-1">
              <div className="row g-3">
                {METRICS.map(({ value, label }) => (
                  <div className="col-6" key={label}>
                    <div className="about-metric">
                      <span className="about-metric-value">{value}</span>
                      <p className="about-metric-label">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="gradient-divider" />

      {/* ── Infrastructure ── */}
      <section className="section-padding bg-section" aria-labelledby="infra-heading">
        <div className="container">
          <div className="row mb-5 justify-content-center text-center">
            <div className="col-12 col-lg-7">
              <SectionHeading
                tag="Infrastructure"
                title="Enterprise-grade from the ground up"
                subtitle="Ojiva AI's architecture is designed to handle enterprise workloads with the security, compliance, and observability that regulated industries demand."
                center
              />
            </div>
          </div>

          <div className="row g-4">
            {[
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
                desc: 'SOC 2 Type II, GDPR, HIPAA-ready configuration, and TCPA compliance tooling built into every account.',
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
            ].map(({ icon, title, desc }) => (
              <div className="col-12 col-md-6 col-lg-4" key={title}>
                <div className="about-value-card">
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }} aria-hidden="true">{icon}</div>
                  <p className="about-value-title">{title}</p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-padding" aria-labelledby="values-heading">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 col-lg-6">
              <SectionHeading
                tag="Core Values"
                title="What drives everything we build"
              />
            </div>
          </div>

          <div className="row g-4">
            {VALUES.map(({ icon, title, desc }) => (
              <div className="col-12 col-md-6 col-lg-4" key={title}>
                <div className="why-item mb-0">
                  <div className="why-icon" aria-hidden="true">{icon}</div>
                  <div>
                    <p className="why-title">{title}</p>
                    <p className="why-desc">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to see Ojiva AI in action?"
        subtitle="Book a personalised walkthrough with one of our platform engineers and see how Ojiva AI can fit your specific use case."
        primaryLabel="Schedule a Demo"
        secondaryLabel="Learn About the Platform"
        secondaryHref="/platform"
      />
    </>
  );
}
