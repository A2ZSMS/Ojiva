import Link from 'next/link';
import { ICON } from '@/lib/colors';
import { Reveal } from '@/components/ui/Animations';

/* ── Industry data ────────────────────────────────────────── */
const INDUSTRIES = [
  {
    icon: 'bi-bank2',
    href: '/solutions/banking-finance',
    label: 'Banking &\nFinance',
    bg: ICON.tile,
    color: ICON.fg,
    desc: 'OTP, alerts & KYC',
  },
  {
    icon: 'bi-cart3',
    href: '/solutions/ecommerce-retail',
    label: 'E-commerce',
    bg: ICON.tile,
    color: ICON.fg,
    desc: 'Orders & promos',
  },
  {
    icon: 'bi-heart-pulse',
    href: '/solutions/healthcare',
    label: 'Healthcare',
    bg: ICON.tile,
    color: ICON.fg,
    desc: 'Appointments & reports',
  },
  {
    icon: 'bi-mortarboard',
    href: '/solutions/education',
    label: 'Education',
    bg: ICON.tile,
    color: ICON.fg,
    desc: 'Admissions & alerts',
  },
  {
    icon: 'bi-house',
    href: '/solutions/real-estate',
    label: 'Real Estate',
    bg: ICON.tile,
    color: ICON.fg,
    desc: 'Lead nurturing',
  },
  {
    icon: 'bi-truck',
    href: '/solutions/logistics-delivery',
    label: 'Logistics',
    bg: ICON.tile,
    color: ICON.fg,
    desc: 'Delivery tracking',
  },
  {
    icon: 'bi-umbrella',
    href: '/solutions/insurance',
    label: 'Insurance',
    bg: ICON.tile,
    color: ICON.fg,
    desc: 'Renewals & claims',
  },
  {
    icon: 'bi-airplane',
    href: '/solutions/travel-hospitality',
    label: 'Travel',
    bg: ICON.tile,
    color: ICON.fg,
    desc: 'Bookings & updates',
  },
  {
    icon: 'bi-bag-heart',
    href: '/solutions/ecommerce-retail',
    label: 'Retail',
    bg: ICON.tile,
    color: ICON.fg,
    desc: 'Offers & loyalty',
  },
  {
    icon: 'bi-three-dots',
    href: '/solutions',
    label: '& Many More',
    bg: ICON.tile,
    color: ICON.fg,
    desc: 'Any business',
  },
];

// Slide up (no fade) on scroll; card hover lift lives in Reveal.css (.ind-card)
const fade = (delay = 0) => ({
  variant: 'custom',
  delay,
  vars: { '--rv-y': '22px', '--rv-o': 1, '--rv-dur': '0.52s' },
});

/* ── Component ────────────────────────────────────────────── */
export default function Industries() {
  return (
    <section className="ind-section">
      <div className="container">

        {/* Header */}
        <Reveal className="ind-header" {...fade(0)}>
          <span className="ind-tag">FOR EVERY INDUSTRY</span>
          <h2 className="ind-heading">
            Built for<br />
            <span className="ind-heading-accent">Every Business</span>
          </h2>
          <p className="ind-sub">
            From startups to enterprises — if you have customers, Ojiva AI is for you.
          </p>
        </Reveal>

        {/* Industry grid */}
        <div className="ind-grid">
          {INDUSTRIES.map((ind, i) => (
            <Reveal
              as={Link}
              href={ind.href}
              key={ind.label}
              className="ind-card"
              {...fade(0.04 * i)}
            >
              <div
                className="ind-icon-wrap"
                style={{ background: ind.bg }}
              >
                <i
                  className={`bi ${ind.icon} ind-icon`}
                  style={{ color: ind.color }}
                />
              </div>
              <span className="ind-label">
                {ind.label.split('\n').map((line, j) => (
                  <span key={j}>{line}{j < ind.label.split('\n').length - 1 && <br />}</span>
                ))}
              </span>
              <span className="ind-desc">{ind.desc}</span>
            </Reveal>
          ))}
        </div>

        {/* Bottom tagline */}
        <Reveal className="ind-tagline" {...fade(0.45)}>
          <span className="ind-check">
            <i className="bi bi-check-circle-fill" />
          </span>
          <span>
            Any business. Any industry.&nbsp;
            <strong>Ojiva AI is for you.</strong>
          </span>
        </Reveal>

      </div>
    </section>
  );
}
