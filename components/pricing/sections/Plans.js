'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { CheckMark, CHANNEL_ACCENTS } from './_shared';

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

export default function Plans() {
  const [activeChannel, setActiveChannel] = useState('SMS');
  const plans = PLANS[activeChannel];
  const accentColor = CHANNEL_ACCENTS[activeChannel];

  return (
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
                  style={activeChannel === ch ? { borderColor: CHANNEL_ACCENTS[ch], color: CHANNEL_ACCENTS[ch], background: `${CHANNEL_ACCENTS[ch]}12` } : {}}
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
  );
}
