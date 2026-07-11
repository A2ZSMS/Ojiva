import Link from 'next/link';
import { HeroEntrance } from '@/components/ui/Animations';
import { CHANNELS } from './data';

export default function Hero() {
  return (
    <section className="page-hero platform-hero-enhanced" aria-labelledby="platform-hero-heading">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6">
            <HeroEntrance index={0}>
            <span className="section-tag">The Platform</span>
            </HeroEntrance>
            <HeroEntrance index={1}>
            <h1 className="page-hero-title" id="platform-hero-heading">
              One portal for{' '}
              <span className="platform-hero-accent">Bulk SMS, WhatsApp, RCS &amp; Voice</span>
            </h1>
            <p className="page-hero-subtitle">
              Run every messaging channel from a single login — Bulk SMS, WhatsApp
              Business API, RCS and Bulk Voice Call, with one contact list, one
              dashboard and one bill.
            </p>
            </HeroEntrance>
            <HeroEntrance index={2}>
            <div className="platform-hero-ctas">
              <Link href="/book-demo" className="btn-ojiva-primary">Get portal access &rarr;</Link>
              <Link href="/pricing" className="btn-ojiva-ghost">View pricing</Link>
            </div>
            </HeroEntrance>
            <HeroEntrance index={3}>
            <div className="platform-hero-stats">
              <div className="platform-hero-stat">
                <span className="platform-hero-stat-value">4-in-1</span>
                <span className="platform-hero-stat-label">Channels, one portal</span>
              </div>
              <div className="platform-hero-stat-divider" />
              <div className="platform-hero-stat">
                <span className="platform-hero-stat-value">3B+</span>
                <span className="platform-hero-stat-label">Messages / month</span>
              </div>
              <div className="platform-hero-stat-divider" />
              <div className="platform-hero-stat">
                <span className="platform-hero-stat-value">99.9%</span>
                <span className="platform-hero-stat-label">Uptime SLA</span>
              </div>
            </div>
            </HeroEntrance>
          </div>

          <div className="col-12 col-lg-6">
            <HeroEntrance index={3}>
            <PortalMock />
            </HeroEntrance>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Pure-CSS "one portal" dashboard mockup ─────────────────────────── */
function PortalMock() {
  return (
    <div className="pf-dash" role="img" aria-label="Ojiva AI portal dashboard showing a sidebar with Bulk SMS, RCS, WhatsApp and Voice channels and a campaign overview panel">
      <div className="pf-dash-bar">
        <span className="pf-dash-dot" />
        <span className="pf-dash-dot" />
        <span className="pf-dash-dot" />
        <span className="pf-dash-url">app.ojiva.ai</span>
      </div>
      <div className="pf-dash-body">
        <aside className="pf-dash-side" aria-hidden="true">
          <span className="pf-dash-side-brand">Ojiva AI</span>
          {CHANNELS.map((c) => (
            <span
              key={c.id}
              className={`pf-dash-nav${c.id === 'whatsapp' ? ' active' : ''}`}
              style={{ '--ch': c.accent, '--ch-soft': c.accentSoft }}
            >
              <span className="pf-dash-nav-ic">{c.icon}</span>
              <span className="pf-dash-nav-label">{c.title.replace(' portal', '').replace(' Call', '')}</span>
            </span>
          ))}
        </aside>
        <div className="pf-dash-main" aria-hidden="true">
          <div className="pf-dash-main-head">
            <span className="pf-dash-main-title">Campaign overview</span>
            <span className="pf-dash-live"><span className="pf-dash-live-dot" /> Live</span>
          </div>
          <div className="pf-dash-tiles">
            <div className="pf-dash-tile">
              <span className="pf-dash-tile-label">Sent</span>
              <span className="pf-dash-tile-value">2.4M</span>
            </div>
            <div className="pf-dash-tile">
              <span className="pf-dash-tile-label">Delivered</span>
              <span className="pf-dash-tile-value">98.2%</span>
            </div>
            <div className="pf-dash-tile">
              <span className="pf-dash-tile-label">Replies</span>
              <span className="pf-dash-tile-value">61K</span>
            </div>
          </div>
          <div className="pf-dash-chart">
            <span style={{ height: '42%', background: '#10b981' }} />
            <span style={{ height: '68%', background: '#6366f1' }} />
            <span style={{ height: '100%', background: '#25d366' }} />
            <span style={{ height: '54%', background: '#f59e0b' }} />
            <span style={{ height: '80%', background: '#10b981' }} />
            <span style={{ height: '63%', background: '#6366f1' }} />
            <span style={{ height: '90%', background: '#25d366' }} />
          </div>
          <div className="pf-dash-legend">
            <span><i style={{ background: '#10b981' }} /> SMS</span>
            <span><i style={{ background: '#6366f1' }} /> RCS</span>
            <span><i style={{ background: '#25d366' }} /> WhatsApp</span>
            <span><i style={{ background: '#f59e0b' }} /> Voice</span>
          </div>
        </div>
      </div>
    </div>
  );
}
