import Link from 'next/link';
import { HeroEntrance, FloatingElement } from '@/components/ui/Animations';
import { METRICS } from './data';
import { VoiceHeroVisual } from '@/components/services/shared/HeroVisuals';

export default function Hero() {
  return (
    <section className="service-hero" aria-labelledby="voice-hero-heading">
      <div className="service-hero-glow voice-glow-1" />
      <div className="service-hero-glow voice-glow-2" />
      <div className="container">
        <div className="service-hero-inner">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <HeroEntrance index={0}>
                <div className="service-badge voice-badge">📞 Bulk Voice Call</div>
              </HeroEntrance>
              <HeroEntrance index={1}>
                <h1 id="voice-hero-heading" className="service-hero-title">
                  Automate Every <span className="sh-accent sh-accent-voice">Customer Call</span><br />with Bulk Voice Call
                </h1>
              </HeroEntrance>
              <HeroEntrance index={2}>
                <p className="service-hero-desc">
                  From outbound dialers to AI-powered voice bots — handle millions of customer calls automatically, 24x7, in 10+ languages. Reduce call centre costs by 60%.
                </p>
              </HeroEntrance>
              <HeroEntrance index={3}>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <Link href="/contact" className="btn-hero-primary voice-btn-primary border-0">Start Automating Calls →</Link>
                  <Link href="/book-demo" className="btn-hero-outline">Hear a Demo Call</Link>
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
                    <VoiceHeroVisual />
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
