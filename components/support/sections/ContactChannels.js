'use client';

import { motion } from 'framer-motion';

const CHANNELS = [
  { icon: '📧', label: 'Email Support',   value: 'ojiva.tech@gmail.com', href: 'mailto:ojiva.tech@gmail.com',  desc: 'Response within 4 hrs on standard, 1 hr enterprise', badge: 'Always Open',    badgeColor: '#16a34a' },
  { icon: '💬', label: 'Live Chat',       value: 'In-Platform Chat',     href: '/contact',                      desc: 'Real-time chat with our engineering team',            badge: 'Mon – Sat',      badgeColor: '#2563eb' },
  { icon: '📞', label: 'Phone Support',   value: '+91 84310 86185',      href: 'tel:+918431086185',             desc: 'Direct line to engineers — enterprise clients only',  badge: '10 AM – 7 PM',  badgeColor: '#d97706' },
  { icon: '📚', label: 'Documentation',   value: 'docs.ojiva.ai',        href: 'https://docs.ojiva.ai',         desc: 'Full API reference, guides & tutorials',              badge: '24/7 Self-Serve', badgeColor: '#7c3aed' },
];

export default function ContactChannels() {
  return (
    <section className="section-padding" aria-labelledby="channels-heading">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-tag">Get in Touch</span>
          <h2 id="channels-heading" className="section-title mt-2">Multiple ways to reach us</h2>
          <p className="section-subtitle mx-auto">Choose the channel that fits your urgency and plan level.</p>
        </div>
        <div className="sp-channels-grid">
          {CHANNELS.map(({ icon, label, value, href, desc, badge, badgeColor }, i) => (
            <motion.a
              key={label}
              href={href}
              className="sp-channel-card"
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="sp-channel-top">
                <span className="sp-channel-icon">{icon}</span>
                <span className="sp-channel-badge" style={{ background: `${badgeColor}20`, color: badgeColor }}>{badge}</span>
              </div>
              <h3 className="sp-channel-label">{label}</h3>
              <p className="sp-channel-value">{value}</p>
              <p className="sp-channel-desc">{desc}</p>
              <span className="sp-channel-arrow">Go →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
