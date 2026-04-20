import Link from 'next/link';
import { HeroEntrance, FloatingElement } from '@/components/ui/Animations';
import { METRICS } from './data';
import { WhatsappHeroVisual } from '@/components/services/shared/HeroVisuals';

export default function Hero() {
  return (
    <section className="service-hero" aria-labelledby="wa-hero-heading">
      <div className="service-hero-glow wa-glow-1" />
      <div className="service-hero-glow wa-glow-2" />
      <div className="container">
        <div className="service-hero-inner">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <HeroEntrance index={0}>
                <div className="service-badge wa-badge">💬 WhatsApp Business API</div>
              </HeroEntrance>
              <HeroEntrance index={1}>
                <h1 id="wa-hero-heading" className="service-hero-title">
                  Reach Customers on<br /><span className="sh-accent sh-accent-wa">WhatsApp Business API</span><br />at Enterprise Scale
                </h1>
              </HeroEntrance>
              <HeroEntrance index={2}>
                <p className="service-hero-desc">
                  Send interactive notifications, run AI chatbots, showcase product catalogues, and close more sales — all inside WhatsApp. Official Meta BSP with 98% open rates.
                </p>
              </HeroEntrance>
              <HeroEntrance index={3}>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <Link href="/contact" className="btn-hero-primary cb-btn-primary border-0">Get WhatsApp API →</Link>
                  <Link href="/book-demo" className="btn-hero-outline">Book a Demo</Link>
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
                    <WhatsappHeroVisual />
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
