import { HeroEntrance } from '@/components/ui/Animations';
import { MODULES } from './data';

export default function Hero() {
  return (
    <section className="page-hero platform-hero-enhanced" aria-labelledby="platform-hero-heading">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-7">
            <HeroEntrance index={0}>
            <span className="section-tag">The Platform</span>
            </HeroEntrance>
            <HeroEntrance index={1}>
            <h1 className="page-hero-title" id="platform-hero-heading">
              Every capability your team needs to{' '}
              <span className="platform-hero-accent">automate communication</span>{' '}
              at scale
            </h1>
            <p className="page-hero-subtitle">
              Five deeply integrated AI modules that work as one unified intelligence
              engine — from first message to closed deal.
            </p>
            </HeroEntrance>
            <HeroEntrance index={2}>
            <div className="platform-hero-stats">
              <div className="platform-hero-stat">
                <span className="platform-hero-stat-value">3B+</span>
                <span className="platform-hero-stat-label">API calls / month</span>
              </div>
              <div className="platform-hero-stat-divider" />
              <div className="platform-hero-stat">
                <span className="platform-hero-stat-value">200+</span>
                <span className="platform-hero-stat-label">Integrations</span>
              </div>
              <div className="platform-hero-stat-divider" />
              <div className="platform-hero-stat">
                <span className="platform-hero-stat-value">99.9%</span>
                <span className="platform-hero-stat-label">Uptime SLA</span>
              </div>
            </div>
            </HeroEntrance>
          </div>

          <div className="col-12 col-lg-4 offset-lg-1">
            <HeroEntrance index={2}>
            <div className="platform-module-nav">
              {MODULES.map((mod) => (
                <a href={`#${mod.id}`} key={mod.id} className="platform-module-nav-item">
                  <span className="platform-module-nav-icon" style={{ background: mod.iconColor }}>{mod.icon}</span>
                  <span className="platform-module-nav-label">{mod.title}</span>
                  <span className="platform-module-nav-arrow">&rarr;</span>
                </a>
              ))}
            </div>
            </HeroEntrance>
          </div>
        </div>
      </div>
    </section>
  );
}
