'use client';

import { AutoCount } from '@/components/ui/Premium';
import Ico from '@/components/ui/Ico';
import Link from 'next/link';
import { OtpHeroVisual } from '@/components/services/shared/HeroVisuals';

const HERO_STATS = [
  { value: '<3s', label: 'Delivery time' },
  { value: '99.9%', label: 'Success rate' },
  { value: '3', label: 'OTP channels' },
  { value: '500+', label: 'Businesses trust us' },
];

export default function Hero() {
  return (
    <section className="service-hero" aria-labelledby="otp-hero-heading">
      <div className="container">
        <div className="service-hero-inner">
          <div className="row align-items-center g-5">
            {/* Left: text */}
            <div className="col-12 col-lg-6">
              <div className="service-badge" style={{ background: 'rgba(27,72,224,0.12)', color: '#7aaeff', border: '1px solid rgba(27,72,224,0.25)' }}>
                <Ico e="🔐" /> OTP &amp; 2FA Solutions
              </div>
              <h1 id="otp-hero-heading" className="service-hero-title">
                <span className="sh-accent sh-accent-otp">OTP &amp; 2FA</span>
                <br />Solutions India
              </h1>
              <p className="service-hero-desc">
                Deliver one-time passwords in under 3 seconds via SMS, WhatsApp, or Voice call. AES-256 encrypted. DLT compliant. Trusted by 500+ businesses.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/contact" className="btn-hero-primary border-0">Get Started Free <span className="btn-arrow" aria-hidden="true">→</span></Link>
                <Link href="/book-demo" className="btn-hero-outline">Book a Demo</Link>
              </div>
              <div className="service-stats-row">
                {HERO_STATS.map(({ value, label }) => (
                  <div key={label} className="service-stat-item">
                    <span className="service-stat-value"><AutoCount>{value}</AutoCount></span>
                    <span className="service-stat-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: OTP delivery panel (no code or endpoints) */}
            <div className="col-12 col-lg-6">
              <OtpHeroVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
