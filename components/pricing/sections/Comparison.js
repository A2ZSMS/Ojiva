'use client';

import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp } from '@/components/ui/Animations';
import { FeatureValue } from './_shared';

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

export default function Comparison() {
  return (
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
  );
}
