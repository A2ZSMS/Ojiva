'use client';

import { FadeUp } from '@/components/ui/Animations';

const HERO_STATS = [
  { value: 'Free 14-day', label: 'Full-feature trial' },
  { value: '₹0.15', label: 'Starting SMS rate' },
  { value: 'No', label: 'Credit card required' },
  { value: '24/7', label: 'Enterprise support' },
];

export default function Hero() {
  return (
    <section className="service-hero" aria-labelledby="pricing-hero-heading">
      <div className="container">
        <div className="service-hero-inner text-center" style={{ paddingBottom: '60px' }}>
          <FadeUp>
            <div className="service-badge" style={{ background: 'rgba(27,72,224,0.12)', color: '#7aaeff', border: '1px solid rgba(27,72,224,0.25)', margin: '0 auto 1.75rem' }}>
              💳 Simple, Transparent Pricing
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1 id="pricing-hero-heading" className="service-hero-title" style={{ maxWidth: '680px', margin: '0 auto 1.25rem' }}>
              Pay as you go or{' '}
              <span className="sh-accent sh-accent-sms">scale with a plan</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="service-hero-desc" style={{ maxWidth: '520px', margin: '0 auto 2.5rem' }}>
              No hidden fees. No setup costs. No lock-in. Start free and upgrade when you&apos;re ready.
            </p>
          </FadeUp>
          <FadeUp delay={0.22}>
            <div className="service-stats-row" style={{ justifyContent: 'center', gap: '2.5rem 3.5rem' }}>
              {HERO_STATS.map(({ value, label }) => (
                <div key={label} className="service-stat-item" style={{ textAlign: 'center' }}>
                  <span className="service-stat-value">{value}</span>
                  <span className="service-stat-label">{label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
