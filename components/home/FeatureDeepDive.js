import Link from 'next/link';
import { Reveal, SlideLeft, SlideRight, TiltCard3D } from '../ui/Animations';
import AnimatedChat from './AnimatedChat';

const LEAD_FIELDS = [
  { label: 'Company Size',  value: '250–500 employees'      },
  { label: 'Industry',      value: 'SaaS / Technology'      },
  { label: 'Intent Signal', value: 'Pricing page × 4 visits' },
  { label: 'Routed To',     value: 'Sarah Chen (Enterprise)' },
];

/* Lead-card parts animate in (with the card as trigger) — see Reveal.css */
const part = (vars, delay) => ({ variant: 'custom', member: true, delay, vars: { '--rv-ease': 'ease-out', ...vars } });

/* ── Animated lead score card ── */
function AnimatedLeadCard() {
  return (
    <div className="lead-score-card-v2" data-reveal-group="" data-rv-margin="80">
      {/* Header */}
      <div className="lsc-header">
        <span className="lsc-avatar">👤</span>
        <div>
          <p className="lsc-name">James Okafor</p>
          <p className="lsc-company">TechFlow Enterprises</p>
        </div>
        <Reveal
          as="span"
          className="lsc-badge hot"
          {...part({ '--rv-s': 0.8, '--rv-dur': '0.4s', '--rv-ease': 'cubic-bezier(0.34, 1.56, 0.64, 1)' }, 0.5)}
        >
          🔥 Hot Lead
        </Reveal>
      </div>

      {/* Animated score bar */}
      <div className="lsc-score-row">
        <span>Lead Score</span>
        <div className="lsc-bar-wrap">
          <Reveal
            className="lsc-bar lsc-bar-gradient"
            style={{ transformOrigin: 'left', width: '87%' }}
            {...part({ '--rv-o': 1, '--rv-sx': 0, '--rv-dur': '1.3s', '--rv-ease': 'cubic-bezier(0.22, 1, 0.36, 1)' }, 0.3)}
          />
        </div>
        <Reveal
          as="span"
          className="lsc-score-val"
          {...part({ '--rv-dur': '0.3s' }, 0.9)}
        >
          87/100
        </Reveal>
      </div>

      {/* Detail rows — stagger in */}
      {LEAD_FIELDS.map(({ label, value }, i) => (
        <Reveal
          key={label}
          className="lsc-row"
          {...part({ '--rv-x': '-12px', '--rv-dur': '0.4s' }, 0.55 + i * 0.1)}
        >
          <span className="lsc-label">{label}</span>
          <span className="lsc-value">{value}</span>
        </Reveal>
      ))}

      {/* Route action pill */}
      <Reveal
        className="lsc-action-row"
        {...part({ '--rv-y': '8px', '--rv-dur': '0.4s' }, 1.05)}
      >
        <span className="lsc-action-label">⚡ Auto-routed</span>
        <span className="lsc-action-time">0.3s response</span>
      </Reveal>
    </div>
  );
}

// Section header: slide up (no fade) on scroll
const slide = (y, duration, delay = 0) => ({
  variant: 'custom',
  margin: 80,
  delay,
  vars: { '--rv-y': `${y}px`, '--rv-o': 1, '--rv-dur': `${duration}s`, '--rv-ease': 'ease-out' },
});

/* ── Main exported component ── */
export default function FeatureDeepDive() {
  return (
    <section className="section-padding bg-section" aria-labelledby="feature-deep-heading">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-5">
          <Reveal
            as="span"
            className="section-tag section-tag-centered"
            {...slide(12, 0.5)}
          >
            Intelligence Layer
          </Reveal>
          <Reveal
            as="h2"
            id="feature-deep-heading"
            className="section-title mt-2"
            {...slide(18, 0.55, 0.1)}
          >
            AI That Works Across <span className="text-grad">Every Channel</span>
          </Reveal>
          <Reveal
            as="p"
            className="section-subtitle mx-auto"
            {...slide(14, 0.5, 0.18)}
          >
            Not just automation — genuine intelligence that shapes every customer touchpoint and closes more deals.
          </Reveal>
        </div>

        {/* ── Row 1: AI Messaging ── */}
        <div className="row align-items-center g-5 mb-6">
          <SlideLeft className="col-12 col-lg-6">
            <span className="section-tag" style={{ background: 'rgba(27,72,224,0.1)', color: 'var(--primary)' }}>
              AI Messaging
            </span>
            <h3 className="section-title mt-2">
              Send the Right Message at the{' '}
              <span className="text-grad">Perfect Moment</span>
            </h3>
            <p className="section-subtitle mb-4">
              Personalise messages and choose when and where to reach each customer.
            </p>
            <ul className="feature-deep-list">
              {[
                'Behavioural send-time optimisation',
                'Dynamic content personalisation',
                'Automatic opt-out & compliance',
                'Multi-channel fallback logic',
              ].map((pt) => (
                <li key={pt}>
                  <span className="check-icon" style={{ color: 'var(--primary)' }}>✓</span>
                  {pt}
                </li>
              ))}
            </ul>
            <Link href="/platform" className="btn-ojiva-primary mt-4 d-inline-block">
              See Messaging Features →
            </Link>
          </SlideLeft>

          <SlideRight className="col-12 col-lg-6">
            <TiltCard3D intensity={7} className="feature-deep-visual-v2">
              <AnimatedChat />
            </TiltCard3D>
          </SlideRight>
        </div>

        {/* ── Row 2: Lead Intelligence ── */}
        <div className="row align-items-center g-5">
          <SlideRight delay={0.05} className="col-12 col-lg-6 order-lg-2">
            <span className="section-tag" style={{ background: 'rgba(124,58,237,0.1)', color: '#7C3AED' }}>
              Lead Intelligence
            </span>
            <h3 className="section-title mt-2">
              Every Lead Scored, Enriched &{' '}
              <span className="text-grad">Routed Instantly</span>
            </h3>
            <p className="section-subtitle mb-4">
              Prioritise incoming leads, enrich their profiles, and route them to the right team.
            </p>
            <ul className="feature-deep-list">
              {[
                'Real-time ML lead scoring',
                'Automated CRM enrichment',
                'Smart territory routing',
                'Duplicate detection & merge',
              ].map((pt) => (
                <li key={pt}>
                  <span className="check-icon" style={{ color: '#7C3AED' }}>✓</span>
                  {pt}
                </li>
              ))}
            </ul>
            <Link href="/platform" className="btn-ojiva-primary mt-4 d-inline-block">
              See Lead Intelligence →
            </Link>
          </SlideRight>

          <SlideLeft delay={0.05} className="col-12 col-lg-6 order-lg-1">
            <TiltCard3D intensity={7} className="feature-deep-visual-v2">
              <AnimatedLeadCard />
            </TiltCard3D>
          </SlideLeft>
        </div>
      </div>
    </section>
  );
}
