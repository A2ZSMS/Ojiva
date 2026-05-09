'use client';

import { motion } from 'framer-motion';

const QUICK_LINKS = [
  { icon: '📖', title: 'API Reference',        desc: 'Full REST API docs',              href: 'https://docs.ojiva.ai', color: '#2563eb' },
  { icon: '🎬', title: 'Video Tutorials',      desc: 'Step-by-step walkthroughs',       href: '/contact',              color: '#7c3aed' },
  { icon: '🔄', title: 'Changelog',            desc: 'Platform updates & releases',     href: '/contact',              color: '#16a34a' },
  { icon: '🧩', title: 'Integrations Guide',   desc: 'Connect your tech stack',         href: '/platform',             color: '#d97706' },
  { icon: '🛡️', title: 'Security Docs',        desc: 'AES-256, GDPR & compliance',     href: '/contact',              color: '#dc2626' },
  { icon: '🚀', title: 'Quick Start Guide',    desc: 'Live in under 10 minutes',        href: '/contact',              color: '#0891b2' },
];

export default function QuickLinks() {
  return (
    <section className="section-padding" aria-label="Quick access resources">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-tag">Resources</span>
          <h2 className="section-title mt-2">Everything at your fingertips</h2>
        </div>
        <div className="sp-quick-grid">
          {QUICK_LINKS.map(({ icon, title, desc, href, color }, i) => (
            <motion.a
              key={title}
              href={href}
              className="sp-quick-card"
              style={{ '--ql-color': color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <span className="sp-quick-icon">{icon}</span>
              <h3 className="sp-quick-title">{title}</h3>
              <p className="sp-quick-desc">{desc}</p>
              <span className="sp-quick-arrow">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
