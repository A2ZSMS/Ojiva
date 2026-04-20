import Link from 'next/link';
import { HeroEntrance, FloatingElement } from '@/components/ui/Animations';
import { METRICS } from './data';
import { SmsHeroVisual } from '@/components/services/shared/HeroVisuals';

export default function Hero() {
  return (
    <section className="service-hero" aria-labelledby="sms-hero-heading">
      <div className="service-hero-glow sms-glow-1" />
      <div className="service-hero-glow sms-glow-2" />
      <div className="container">
        <div className="service-hero-inner">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <HeroEntrance index={0}>
                <div className="service-badge sms-badge">📱 Bulk SMS Platform · India #1</div>
              </HeroEntrance>
              <HeroEntrance index={1}>
                <h1 id="sms-hero-heading" className="service-hero-title">
                  India&apos;s Most<br /><span className="sh-accent sh-accent-sms">Trusted SMS</span><br />Gateway
                </h1>
              </HeroEntrance>
              <HeroEntrance index={2}>
                <p className="service-hero-desc">
                  Send millions of personalised SMS — promotional, transactional, OTP &amp; two-way — through one API. DLT compliant, 98%+ delivery, under 3-second OTP.
                </p>
              </HeroEntrance>
              <HeroEntrance index={3}>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <Link href="/contact" className="btn-hero-primary sms-btn-primary border-0">Start Sending SMS →</Link>
                  <Link href="/book-demo" className="btn-hero-outline">Get API Docs</Link>
                </div>
              </HeroEntrance>
              <HeroEntrance index={4}>
                <div className="service-stats-row">
                  {METRICS.map(({ value, label }) => (
                    <div key={label} className="service-stat-item">
                      <span className="service-stat-value">{value}</span>
                      <span className="service-stat-label">{label}</span>
                    </div>
                  ))}
                </div>
              </HeroEntrance>
            </div>
            <div className="col-12 col-lg-6">
              <HeroEntrance index={2}>
                <FloatingElement amplitude={6} duration={6}>
                  <div className="service-visual-wrap">
                    <SmsHeroVisual />
                  </div>
                </FloatingElement>
              </HeroEntrance>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
