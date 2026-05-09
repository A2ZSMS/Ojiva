import Link from 'next/link';
import {
  RiFocusLine, RiFlashlightLine, RiLinksLine, RiShieldLine,
} from 'react-icons/ri';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  StaggerContainer,
  StaggerItem,
  TiltCard3D,
  ScrollScale,
} from '@/components/ui/Animations';

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

export default function PlatformCapabilities() {
  return (
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
  );
}
