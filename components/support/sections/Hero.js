'use client';

import { motion } from 'framer-motion';

const HERO_STATS = [
  { icon: '⚡', val: '< 1 hr',  lab: 'Enterprise Response' },
  { icon: '🛡️', val: '99.99%', lab: 'Uptime SLA' },
  { icon: '🔔', val: '24/7',    lab: 'Priority Support' },
  { icon: '🏢', val: '500+',    lab: 'Enterprise Clients' },
];

const POPULAR_SEARCHES = ['API Key Setup', 'DLT Registration', 'WhatsApp BSP', 'Webhook Guide', 'OTP Delivery'];

export default function Hero() {
  return (
    <section className="sp-hero" aria-labelledby="support-hero-heading">
      <div className="sp-hero-bg" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="sp-hero-inner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="sp-hero-badge">
            <span className="sp-hero-dot" />
            Support Center
          </div>
          <h1 id="support-hero-heading" className="sp-hero-title">
            We&apos;re here to help you
            <span className="sp-hero-grad"> succeed</span>
          </h1>
          <p className="sp-hero-sub">
            From API questions to enterprise deployments — our engineers ensure
            your success on the Ojiva AI platform.
          </p>

          {/* Quick-access stats */}
          <div className="sp-hero-stats">
            {HERO_STATS.map(({ icon, val, lab }) => (
              <div key={lab} className="sp-hero-stat">
                <span className="sp-hero-stat-icon">{icon}</span>
                <span className="sp-hero-stat-val">{val}</span>
                <span className="sp-hero-stat-lab">{lab}</span>
              </div>
            ))}
          </div>

          {/* Quick search */}
          <div className="sp-hero-search-wrap">
            <span className="sp-hero-search-icon">🔍</span>
            <input
              className="sp-hero-search"
              placeholder="What do you need help with? e.g. 'setup WhatsApp API'…"
              onFocus={e => e.target.closest('.sp-hero-search-wrap').classList.add('focused')}
              onBlur={e => e.target.closest('.sp-hero-search-wrap').classList.remove('focused')}
            />
            <button className="sp-hero-search-btn">Search</button>
          </div>

          {/* Popular searches */}
          <div className="sp-popular-tags">
            <span>Popular:</span>
            {POPULAR_SEARCHES.map(t => (
              <button key={t} className="sp-popular-tag">{t}</button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
