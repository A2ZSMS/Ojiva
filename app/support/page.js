'use client';

import Link from 'next/link';
import { useState } from 'react';
import CTA from '@/components/CTA';
import SectionHeading from '@/components/SectionHeading';

/* ── Data ─────────────────────────────────────────────── */
const SUPPORT_TIERS = [
  {
    icon: '🔌',
    color: 'rgba(37,99,235,0.1)',
    title: 'API Assistance',
    description:
      'Technical support for platform APIs, SDKs, and developer tooling — from authentication to error handling.',
    items: [
      'REST API reference & guidance',
      'SDK integration support',
      'Webhook configuration',
      'Sandbox environment access',
    ],
  },
  {
    icon: '🔗',
    color: 'rgba(6,182,212,0.1)',
    title: 'Integration Support',
    description:
      'Hands-on help connecting Ojiva AI to your CRM, helpdesk, data warehouse, and 50+ native platforms.',
    items: [
      'Salesforce & HubSpot setup',
      'Custom connector development',
      'Data mapping assistance',
      'Integration health monitoring',
    ],
  },
  {
    icon: '🚀',
    color: 'rgba(139,92,246,0.1)',
    title: 'Deployment Help',
    description:
      'Go live faster with our deployment engineering team managing the technical lift for you.',
    items: [
      'Onboarding & environment setup',
      'Phased rollout planning',
      'Production readiness review',
      'Post-launch monitoring',
    ],
  },
  {
    icon: '🏢',
    color: 'rgba(34,197,94,0.1)',
    title: 'Enterprise Solutions',
    description:
      'White-glove support with dedicated account engineers, custom SLAs, and 24/7 priority access.',
    items: [
      'Dedicated account engineer',
      'Custom SLA agreements',
      '24/7 priority support line',
      'Quarterly business reviews',
    ],
  },
];

const CHANNELS = [
  {
    icon: '📧',
    label: 'Email Support',
    value: 'ojiva.tech@gmail.com',
    href: 'mailto:ojiva.tech@gmail.com',
    desc: 'Response within 4 hrs (standard) · 1 hr (enterprise)',
    badge: 'Always Open',
    badgeColor: 'rgba(34,197,94,0.15)',
    badgeText: '#16a34a',
  },
  {
    icon: '💬',
    label: 'Live Chat',
    value: 'In-Platform Chat',
    href: '/contact',
    desc: 'Real-time chat with technical support engineers',
    badge: 'Mon–Sat',
    badgeColor: 'rgba(37,99,235,0.12)',
    badgeText: 'var(--primary)',
  },
  {
    icon: '📞',
    label: 'Phone Support',
    value: '+91 84310 86185',
    href: 'tel:+919284310861865',
    desc: 'Direct line to engineering — enterprise clients',
    badge: '10 AM – 7 PM IST',
    badgeColor: 'rgba(245,158,11,0.12)',
    badgeText: '#d97706',
  },
  {
    icon: '📚',
    label: 'Documentation',
    value: 'docs.ojiva.ai',
    href: 'https://docs.ojiva.ai',
    desc: 'Full API reference, guides, tutorials & changelog',
    badge: 'Self-Service',
    badgeColor: 'rgba(139,92,246,0.12)',
    badgeText: '#7c3aed',
  },
];

const SLA_PLANS = [
  {
    plan: 'Starter',
    response: '24 hrs',
    uptime: '99.5%',
    channels: 'Email',
    onboarding: '—',
    engineer: '—',
    highlight: false,
  },
  {
    plan: 'Growth',
    response: '4 hrs',
    uptime: '99.9%',
    channels: 'Email + Chat',
    onboarding: 'Guided',
    engineer: 'Shared',
    highlight: false,
  },
  {
    plan: 'Enterprise',
    response: '1 hr',
    uptime: '99.99%',
    channels: 'Email + Chat + Phone',
    onboarding: 'White-Glove',
    engineer: 'Dedicated',
    highlight: true,
  },
];

const FAQS = [
  {
    q: 'How quickly will I get a response?',
    a: 'Starter plans receive a response within 24 hours. Growth plans are within 4 hours. Enterprise clients enjoy a guaranteed 1-hour response time, 24/7.',
  },
  {
    q: 'Do you offer onboarding assistance?',
    a: 'Yes. Growth plans include guided onboarding sessions. Enterprise plans include white-glove onboarding with a dedicated engineer assigned to your team from day one.',
  },
  {
    q: 'What is your uptime SLA?',
    a: 'We guarantee 99.5% uptime on Starter, 99.9% on Growth, and 99.99% on Enterprise — all backed by financially binding SLA agreements.',
  },
  {
    q: 'Can I upgrade my support plan anytime?',
    a: 'Absolutely. You can upgrade your support tier at any time from your account dashboard. Changes take effect immediately, and billing is prorated.',
  },
  {
    q: 'Is there a self-service knowledge base?',
    a: 'Yes — docs.ojiva.ai has a full API reference, integration tutorials, video walkthroughs, and a searchable changelog. It\'s available 24/7 to all users.',
  },
  {
    q: 'How do I escalate a critical issue?',
    a: 'Enterprise customers can call our direct line at +91 84310 86185. Growth customers can use priority chat. All escalations are tracked with live status updates on our status page.',
  },
];

/* ── FAQ Accordion item ───────────────────────────────── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span>{q}</span>
        <span className={`faq-chevron ${open ? 'open' : ''}`}>›</span>
      </div>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────── */
export default function SupportPage() {
  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════ */}
      <section className="support-hero" aria-labelledby="support-hero-heading">
        <div className="container">
          <div className="support-hero-inner">
            <span className="section-tag">Support Center</span>
            <h1 className="support-hero-title" id="support-hero-heading">
              We're with you at <span className="support-highlight">every step</span>
            </h1>
            <p className="support-hero-sub">
              From API questions to enterprise deployments — our engineers ensure your
              success on the Ojiva AI platform.
            </p>
            <div className="support-hero-actions">
              <Link href="/contact" className="btn-ojiva-primary">
                Contact Support →
              </Link>
              <a href="https://docs.ojiva.ai" className="btn-ojiva-outline" target="_blank" rel="noopener noreferrer">
                View Documentation
              </a>
            </div>

            {/* Quick stats */}
            <div className="support-stats">
              {[
                { value: '< 1 hr', label: 'Enterprise Response' },
                { value: '99.99%', label: 'Uptime SLA' },
                { value: '24/7', label: 'Priority Support' },
                { value: '500+', label: 'Enterprise Clients' },
              ].map(({ value, label }) => (
                <div className="support-stat" key={label}>
                  <span className="support-stat-value">{value}</span>
                  <span className="support-stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. SUPPORT AREAS ════════════════════════════ */}
      <section className="section-padding" aria-labelledby="tiers-heading">
        <div className="container">
          <SectionHeading
            tag="Support Areas"
            title="We cover every layer of your stack"
            subtitle="Whether you're a solo developer or a Fortune 500 team, we have the right support for you."
            center
          />

          <div className="row g-4 mt-3">
            {SUPPORT_TIERS.map(({ icon, color, title, description, items }) => (
              <div className="col-12 col-md-6 col-lg-3" key={title}>
                <div className="support-tier-card">
                  <div className="support-tier-icon" style={{ background: color }}>
                    {icon}
                  </div>
                  <h3 className="support-tier-title">{title}</h3>
                  <p className="support-tier-desc">{description}</p>
                  <ul className="support-tier-list">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. CONTACT CHANNELS ═════════════════════════ */}
      <section className="section-padding bg-section" aria-labelledby="channels-heading">
        <div className="container">
          <SectionHeading
            tag="Get in Touch"
            title="Multiple ways to reach us"
            subtitle="Choose the channel that fits your urgency and plan level."
            center
          />

          <div className="row g-4 mt-3">
            {CHANNELS.map(({ icon, label, value, href, desc, badge, badgeColor, badgeText }) => (
              <div className="col-12 col-sm-6 col-lg-3" key={label}>
                <a href={href} className="support-channel-card" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  <div className="support-channel-icon">{icon}</div>
                  <div
                    className="support-channel-badge"
                    style={{ background: badgeColor, color: badgeText }}
                  >
                    {badge}
                  </div>
                  <h3 className="support-channel-label">{label}</h3>
                  <p className="support-channel-value">{value}</p>
                  <p className="support-channel-desc">{desc}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. SLA TABLE ════════════════════════════════ */}
      <section className="section-padding" aria-labelledby="sla-heading">
        <div className="container">
          <SectionHeading
            tag="Service Level Agreements"
            title="Transparent SLAs for every plan"
            subtitle="Every tier comes with a binding SLA. Upgrade anytime from your dashboard."
            center
          />

          <div className="sla-table-wrap mt-5">
            <table className="sla-table" role="table" aria-label="SLA comparison">
              <thead>
                <tr>
                  <th>Feature</th>
                  {SLA_PLANS.map(({ plan, highlight }) => (
                    <th key={plan} className={highlight ? 'sla-col-highlight' : ''}>
                      {highlight && <span className="sla-popular-badge">Most Popular</span>}
                      {plan}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { key: 'response', label: '⚡ Response Time' },
                  { key: 'uptime', label: '✅ Uptime SLA' },
                  { key: 'channels', label: '💬 Support Channels' },
                  { key: 'onboarding', label: '🚀 Onboarding' },
                  { key: 'engineer', label: '👤 Account Engineer' },
                ].map(({ key, label }) => (
                  <tr key={key}>
                    <td className="sla-row-label">{label}</td>
                    {SLA_PLANS.map(({ plan, highlight, ...rest }) => (
                      <td key={plan} className={highlight ? 'sla-col-highlight' : ''}>
                        {rest[key]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="sla-cta-row">
                  <td />
                  {SLA_PLANS.map(({ plan, highlight }) => (
                    <td key={plan} className={highlight ? 'sla-col-highlight' : ''}>
                      <Link
                        href="/contact"
                        className={highlight ? 'btn-ojiva-primary' : 'btn-ojiva-outline'}
                        style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}
                      >
                        Get Started
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ 5. FAQ ══════════════════════════════════════ */}
      <section className="section-padding bg-section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <SectionHeading
                tag="FAQ"
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about Ojiva AI support."
                center
              />
              <div className="faq-list mt-5">
                {FAQS.map(({ q, a }) => (
                  <FaqItem key={q} q={q} a={a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6. CTA ══════════════════════════════════════ */}
      <CTA
        title="Need enterprise-grade support?"
        subtitle="Talk to our solutions team and let us build a support plan tailored to your team's size, stack, and SLA requirements."
        primaryLabel="Contact Enterprise Team"
        primaryHref="/contact"
        secondaryLabel="Explore the Platform"
        secondaryHref="/platform"
      />
    </>
  );
}
