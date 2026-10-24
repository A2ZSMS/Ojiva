import {
  RiShieldKeyholeLine,
  RiLock2Line,
  RiUserSettingsLine,
  RiDeleteBin6Line,
  RiFingerprint2Line,
  RiShieldCheckLine,
} from 'react-icons/ri';
import { CountUp } from '@/components/ui/Premium';
import { ICON } from '@/lib/colors';
import { SpotlightGroup } from '@/components/ui/Spotlight';
import { Reveal } from '@/components/ui/Animations';

const SECURITY_FEATURES = [
  {
    icon: RiShieldKeyholeLine,
    title: 'End-to-End Encryption',
    desc: 'TLS 1.3 protects data in transit, with encryption for stored data.',
    color: ICON.fgDark,
    bg: ICON.bgDark,
  },
  {
    icon: RiLock2Line,
    title: 'AES-256 Payload Security',
    desc: 'AES-256 encryption helps protect sensitive API payloads.',
    color: ICON.fgDark,
    bg: ICON.bgDark,
  },
  {
    icon: RiUserSettingsLine,
    title: 'User Data Segregation',
    desc: 'Logical tenant isolation keeps customer data separate between accounts.',
    color: ICON.fgDark,
    bg: ICON.bgDark,
  },
  {
    icon: RiDeleteBin6Line,
    title: 'Data Retention & Wiping',
    desc: 'Manage retention periods and data removal around your business requirements.',
    color: ICON.fgDark,
    bg: ICON.bgDark,
  },
  {
    icon: RiFingerprint2Line,
    title: '2FA Access Management',
    desc: 'Two-factor authentication and role-based permissions control account access.',
    color: ICON.fgDark,
    bg: ICON.bgDark,
  },
  {
    icon: RiShieldCheckLine,
    title: 'Regulatory Compliance',
    desc: 'Controls and operational practices support business compliance requirements.',
    color: ICON.fgDark,
    bg: ICON.bgDark,
  },
];

// Everything below slides up (no fade) when the section enters the viewport.
const slide = (y, duration, delay = 0, ease = 'ease-out') => ({
  variant: 'custom',
  member: true,
  delay,
  vars: { '--rv-y': `${y}px`, '--rv-o': 1, '--rv-dur': `${duration}s`, '--rv-ease': ease },
});

export default function SecuritySection() {
  return (
    <section
      data-reveal-group=""
      data-rv-margin="80"
      className="security-section position-relative overflow-hidden"
      data-nav-dark
      aria-labelledby="security-heading"
    >
      {/* Subtle background decoration */}
      <div className="security-bg-glow" aria-hidden="true" />
      <div className="security-bg-grid" aria-hidden="true" />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section header */}
        <div className="text-center mb-5 pb-3">
          <Reveal
            className="d-inline-flex align-items-center gap-2 security-eyebrow mb-3"
            {...slide(14, 0.5)}
          >
            <RiShieldCheckLine size={16} />
            Enterprise-Grade Security
          </Reveal>

          <Reveal
            as="h2"
            id="security-heading"
            className="section-title"
            {...slide(18, 0.55, 0.1)}
          >
            Security That Never{' '}
            <span className="text-grad">Compromises</span>
          </Reveal>

          <Reveal
            as="p"
            className="section-subtitle mx-auto"
            {...slide(14, 0.5, 0.18)}
          >
            Encryption, account controls, and data management across your communication workflows.
          </Reveal>
        </div>

        {/* Security feature cards */}
        <SpotlightGroup className="row g-4">
          {SECURITY_FEATURES.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <Reveal
              key={title}
              className="col-12 col-md-6 col-lg-4"
              {...slide(30, 0.5, i * 0.1, 'cubic-bezier(0.22, 1, 0.36, 1)')}
            >
              <div className="security-card h-100" data-spot>
                <span className="spot-glow" aria-hidden="true" />
                <div
                  className="security-card-icon"
                  style={{ background: bg, color }}
                >
                  <Icon size={26} />
                </div>
                <h3 className="security-card-title">{title}</h3>
                <p className="security-card-desc">{desc}</p>
                <div className="security-card-line" style={{ background: color }} />
              </div>
            </Reveal>
          ))}
        </SpotlightGroup>

        {/* Trust bar */}
        <Reveal
          className="security-trust-bar mt-5"
          {...slide(20, 0.6, 0.7)}
        >
          <div className="row align-items-center justify-content-center g-4 text-center">
            {[
              { label: 'AES-256', sub: 'Encryption' },
              { label: 'TLS 1.3', sub: 'In Transit' },
              { label: 'SOC 2', sub: 'Aligned' },
              { label: 'GDPR', sub: 'Compliant' },
              { label: '99.9%', sub: 'Uptime SLA' },
            ].map(({ label, sub }) => (
              <div key={label} className="col-6 col-md">
                <div className="security-trust-item">
                  <span className="security-trust-value">
                    {label === '99.9%' ? <CountUp value={99.9} decimals={1} suffix="%" /> : label}
                  </span>
                  <span className="security-trust-label">{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
