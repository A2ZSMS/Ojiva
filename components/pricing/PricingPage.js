'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/ui/CTA';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import FAQ from '@/components/services/whatsapp-chatbot/FAQ';

/* ─── Data ─────────────────────────────────────────── */

const CHANNELS = ['SMS', 'WhatsApp', 'RCS', 'Voice'];

const PLANS = {
  SMS: [
    {
      name: 'Starter',
      badge: 'Pay-as-you-go',
      price: '₹0.18',
      unit: 'per SMS',
      highlight: false,
      color: '#1B48E0',
      features: [
        '1 Sender ID',
        'Transactional & Promotional',
        'Basic analytics dashboard',
        'DLT template management',
        'Email support (48h)',
        'REST API access',
      ],
      cta: 'Get Started Free',
      ctaHref: '/contact',
    },
    {
      name: 'Business',
      badge: 'Most Popular',
      price: '₹0.15',
      unit: 'per SMS',
      highlight: true,
      color: '#1B48E0',
      features: [
        'Everything in Starter',
        'Up to 5 Sender IDs',
        'Advanced analytics & reports',
        'Webhook delivery receipts',
        'Dedicated account support',
        'Priority routing',
      ],
      cta: 'Start Free Trial',
      ctaHref: '/contact',
    },
    {
      name: 'Enterprise',
      badge: 'Custom',
      price: 'Custom',
      unit: 'volume pricing',
      highlight: false,
      color: '#6366f1',
      features: [
        'Everything in Business',
        'Unlimited Sender IDs',
        'Dedicated account manager',
        '99.99% uptime SLA',
        'Custom integrations',
        'On-premise deployment option',
      ],
      cta: 'Talk to Sales',
      ctaHref: '/contact',
    },
  ],
  WhatsApp: [
    {
      name: 'Starter',
      badge: 'Pay-as-you-go',
      price: '₹0.35',
      unit: 'per message',
      highlight: false,
      color: '#25D366',
      features: [
        '1 WhatsApp Business Number',
        'Utility & marketing templates',
        'Basic analytics dashboard',
        'Meta template management',
        'Email support (48h)',
        'REST API access',
      ],
      cta: 'Get Started Free',
      ctaHref: '/contact',
    },
    {
      name: 'Business',
      badge: 'Most Popular',
      price: '₹0.28',
      unit: 'per message',
      highlight: true,
      color: '#25D366',
      features: [
        'Everything in Starter',
        'Up to 3 WhatsApp numbers',
        'Advanced analytics & reports',
        'Webhook delivery receipts',
        'Dedicated account support',
        'Chatbot builder access',
      ],
      cta: 'Start Free Trial',
      ctaHref: '/contact',
    },
    {
      name: 'Enterprise',
      badge: 'Custom',
      price: 'Custom',
      unit: 'volume pricing',
      highlight: false,
      color: '#6366f1',
      features: [
        'Everything in Business',
        'Unlimited WhatsApp numbers',
        'Dedicated account manager',
        '99.99% uptime SLA',
        'Custom integrations & CRM sync',
        'On-premise deployment option',
      ],
      cta: 'Talk to Sales',
      ctaHref: '/contact',
    },
  ],
  RCS: [
    {
      name: 'Starter',
      badge: 'Pay-as-you-go',
      price: '₹0.45',
      unit: 'per RCS message',
      highlight: false,
      color: '#FF6D42',
      features: [
        '1 Google-verified sender',
        'Rich cards & carousels',
        'Basic analytics dashboard',
        'Suggested reply buttons',
        'Email support (48h)',
        'REST API access',
      ],
      cta: 'Get Started Free',
      ctaHref: '/contact',
    },
    {
      name: 'Business',
      badge: 'Most Popular',
      price: '₹0.38',
      unit: 'per RCS message',
      highlight: true,
      color: '#FF6D42',
      features: [
        'Everything in Starter',
        'Up to 3 verified senders',
        'Advanced analytics & reports',
        'Webhook delivery receipts',
        'Dedicated account support',
        'A/B test campaigns',
      ],
      cta: 'Start Free Trial',
      ctaHref: '/contact',
    },
    {
      name: 'Enterprise',
      badge: 'Custom',
      price: 'Custom',
      unit: 'volume pricing',
      highlight: false,
      color: '#6366f1',
      features: [
        'Everything in Business',
        'Unlimited verified senders',
        'Dedicated account manager',
        '99.99% uptime SLA',
        'Custom integrations',
        'On-premise deployment option',
      ],
      cta: 'Talk to Sales',
      ctaHref: '/contact',
    },
  ],
  Voice: [
    {
      name: 'Starter',
      badge: 'Pay-as-you-go',
      price: '₹0.25',
      unit: 'per minute',
      highlight: false,
      color: '#a78bfa',
      features: [
        '1 virtual caller ID',
        'Pre-recorded voice blasts',
        'Basic analytics dashboard',
        'DTMF keypress support',
        'Email support (48h)',
        'REST API access',
      ],
      cta: 'Get Started Free',
      ctaHref: '/contact',
    },
    {
      name: 'Business',
      badge: 'Most Popular',
      price: '₹0.18',
      unit: 'per minute',
      highlight: true,
      color: '#a78bfa',
      features: [
        'Everything in Starter',
        'Up to 5 caller IDs',
        'AI voice bot (IVR replacement)',
        'Advanced analytics & reports',
        'Dedicated account support',
        'Real-time call recordings',
      ],
      cta: 'Start Free Trial',
      ctaHref: '/contact',
    },
    {
      name: 'Enterprise',
      badge: 'Custom',
      price: 'Custom',
      unit: 'volume pricing',
      highlight: false,
      color: '#6366f1',
      features: [
        'Everything in Business',
        'Unlimited caller IDs',
        'Dedicated account manager',
        '99.99% uptime SLA',
        'Custom integrations & CRM',
        'On-premise deployment option',
      ],
      cta: 'Talk to Sales',
      ctaHref: '/contact',
    },
  ],
};

const COMPARISON_FEATURES = [
  { label: 'Free trial', starter: true, business: true, enterprise: true },
  { label: 'REST API access', starter: true, business: true, enterprise: true },
  { label: 'Analytics dashboard', starter: 'Basic', business: 'Advanced', enterprise: 'Custom' },
  { label: 'Sender IDs / numbers', starter: '1', business: '5', enterprise: 'Unlimited' },
  { label: 'Webhook support', starter: false, business: true, enterprise: true },
  { label: 'Dedicated account manager', starter: false, business: false, enterprise: true },
  { label: 'SLA guarantee', starter: false, business: '99.9%', enterprise: '99.99%' },
  { label: 'DLT template management', starter: true, business: true, enterprise: true },
  { label: 'Custom integrations', starter: false, business: false, enterprise: true },
  { label: 'On-premise deployment', starter: false, business: false, enterprise: true },
  { label: 'Priority routing', starter: false, business: true, enterprise: true },
  { label: 'Support', starter: 'Email 48h', business: 'Dedicated', enterprise: '24/7 Phone' },
];

const PRICING_FAQS = [
  {
    q: 'Is there a free trial? Do I need a credit card?',
    a: 'Yes — all plans include a 14-day free trial with no credit card required. You get access to all features on the Business plan during the trial so you can evaluate the full platform.',
  },
  {
    q: 'How does pay-as-you-go billing work?',
    a: 'With pay-as-you-go, you only pay for messages sent. There are no monthly minimums or subscription fees. Simply add credits to your wallet and they deduct per message sent. Unused credits roll over indefinitely.',
  },
  {
    q: 'Can I switch plans or channels at any time?',
    a: 'Absolutely. You can upgrade, downgrade, or add new channels from your dashboard at any time. Changes take effect immediately. If you upgrade mid-cycle, billing is prorated.',
  },
  {
    q: 'Are there volume discounts for large-scale campaigns?',
    a: 'Yes. Businesses sending over 1 lakh messages per month qualify for volume discounts. Contact our sales team to receive a custom quote tailored to your monthly volume and channel mix.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept UPI, NEFT/RTGS, credit & debit cards (Visa, Mastercard, RuPay), and bank transfers. Enterprise customers can also pay via invoice with 30-day net terms.',
  },
];

/* ─── Sub-components ─────────────────────────────── */

function CheckMark({ color = '#1B48E0' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill={color} fillOpacity="0.12" />
      <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureValue({ value, highlightColor }) {
  if (value === true) return <CheckMark color={highlightColor} />;
  if (value === false) {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="9" fill="rgba(0,0,0,0.04)" />
        <path d="M6 9h6" stroke="#c4c9d4" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#4b5563' }}>{value}</span>;
}

/* ─── Main Component ──────────────────────────────── */

export default function PricingPage({ faqs }) {
  const [activeChannel, setActiveChannel] = useState('SMS');
  const plans = PLANS[activeChannel];

  // Prefer FAQs from page-level (page.js emits matching JSON-LD) but fall back
  // to component-internal copy so the file stays self-contained.
  const renderFaqs = (faqs && faqs.length) ? faqs : PRICING_FAQS;

  const channelAccents = { SMS: '#1B48E0', WhatsApp: '#25D366', RCS: '#FF6D42', Voice: '#a78bfa' };
  const accentColor = channelAccents[activeChannel];

  return (
    <>
      {/* ── Hero ── */}
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
                {[
                  { value: 'Free 14-day', label: 'Full-feature trial' },
                  { value: '₹0.15', label: 'Starting SMS rate' },
                  { value: 'No', label: 'Credit card required' },
                  { value: '24/7', label: 'Enterprise support' },
                ].map(({ value, label }) => (
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

      {/* ── Channel Toggle + Plan Cards ── */}
      <section className="section-padding" aria-labelledby="pricing-plans-heading">
        <div className="container">
          {/* Channel tabs */}
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading
                tag="Channels"
                title="Choose Your Channel"
                subtitle="Each channel has its own pricing tier. Pick one or combine for an omnichannel strategy."
                center
              />
              <div className="pricing-tab-group" role="tablist" aria-label="Select messaging channel">
                {CHANNELS.map((ch) => (
                  <button
                    key={ch}
                    role="tab"
                    aria-selected={activeChannel === ch}
                    onClick={() => setActiveChannel(ch)}
                    className={`pricing-tab${activeChannel === ch ? ' pricing-tab-active' : ''}`}
                    style={activeChannel === ch ? { borderColor: channelAccents[ch], color: channelAccents[ch], background: `${channelAccents[ch]}12` } : {}}
                  >
                    {ch === 'SMS' && '📱 '}
                    {ch === 'WhatsApp' && '💬 '}
                    {ch === 'RCS' && '✨ '}
                    {ch === 'Voice' && '🎙️ '}
                    {ch}
                  </button>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Plan cards */}
          <StaggerContainer className="row g-4 justify-content-center" staggerDelay={0.1}>
            {plans.map((plan) => (
              <StaggerItem key={plan.name} className="col-12 col-md-6 col-lg-4">
                <div
                  className={`pricing-card${plan.highlight ? ' pricing-card-featured' : ''}`}
                  style={plan.highlight ? { borderColor: accentColor } : {}}
                >
                  {plan.highlight && (
                    <div className="pricing-popular-badge" style={{ background: accentColor }}>
                      ⭐ {plan.badge}
                    </div>
                  )}
                  {!plan.highlight && (
                    <div className="pricing-tier-badge">{plan.badge}</div>
                  )}

                  <div className="pricing-card-header">
                    <h3 className="pricing-plan-name">{plan.name}</h3>
                    <div className="pricing-price-row">
                      <span className="pricing-price" style={plan.price !== 'Custom' ? { color: accentColor } : {}}>
                        {plan.price}
                      </span>
                      <span className="pricing-unit">{plan.unit}</span>
                    </div>
                  </div>

                  <ul className="pricing-feature-list">
                    {plan.features.map((f) => (
                      <li key={f} className="pricing-feature-item">
                        <CheckMark color={accentColor} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.ctaHref}
                    className={plan.highlight ? 'pricing-cta-primary' : 'pricing-cta-outline'}
                    style={plan.highlight ? { background: accentColor } : { color: accentColor, borderColor: `${accentColor}66` }}
                  >
                    {plan.cta} →
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Feature Comparison Table ── */}
      <section className="section-padding bg-section" aria-labelledby="pricing-compare-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading
                tag="Compare Plans"
                title="Everything You Need, Nothing You Don't"
                subtitle="Full feature breakdown across Starter, Business, and Enterprise tiers."
                center
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="sla-table-wrap">
              <table className="sla-table" aria-label="Plan feature comparison">
                <thead>
                  <tr>
                    <th className="sla-row-label" style={{ textAlign: 'left', width: '40%' }}>Feature</th>
                    <th>Starter</th>
                    <th className="sla-col-highlight">
                      <span className="sla-popular-badge">Most Popular</span>
                      Business
                    </th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_FEATURES.map((row) => (
                    <tr key={row.label}>
                      <td className="sla-row-label">{row.label}</td>
                      <td><FeatureValue value={row.starter} highlightColor="#1B48E0" /></td>
                      <td className="sla-col-highlight"><FeatureValue value={row.business} highlightColor="#1B48E0" /></td>
                      <td><FeatureValue value={row.enterprise} highlightColor="#6366f1" /></td>
                    </tr>
                  ))}
                  <tr className="sla-cta-row">
                    <td />
                    <td>
                      <Link href="/contact" className="pricing-cta-outline" style={{ color: '#1B48E0', borderColor: 'rgba(27,72,224,0.3)', fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                        Get Started
                      </Link>
                    </td>
                    <td className="sla-col-highlight">
                      <Link href="/contact" className="pricing-cta-primary" style={{ background: '#1B48E0', fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                        Start Free Trial
                      </Link>
                    </td>
                    <td>
                      <Link href="/contact" className="pricing-cta-outline" style={{ color: '#6366f1', borderColor: 'rgba(99,102,241,0.3)', fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                        Contact Sales
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ faqs={renderFaqs} subtitle="Everything you need to know about Ojiva AI billing and plans." />

      {/* ── CTA ── */}
      <FadeUp>
        <CTA
          title="Start Your Free 14-Day Trial Today"
          subtitle="Full Business plan access. No credit card. No lock-in. Go live in under 10 minutes."
          primaryLabel="Start Free Trial"
          primaryHref="/contact"
          secondaryLabel="Talk to Sales"
          secondaryHref="/contact"
        />
      </FadeUp>
    </>
  );
}
