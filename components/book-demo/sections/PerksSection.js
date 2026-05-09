'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DEMO_PERKS = [
  { icon: '📱', title: 'Bulk SMS',      desc: 'Campaign setup, DLT compliance & delivery analytics' },
  { icon: '💬', title: 'WhatsApp API',  desc: 'Templates, chatbots, broadcasts & automated flows' },
  { icon: '✨', title: 'RCS Messaging', desc: 'Rich cards, carousels & verified sender setup' },
  { icon: '🎙️', title: 'AI Voice',      desc: 'Outbound dialer, IVR, AI call bot & transcripts' },
  { icon: '📊', title: 'Analytics',     desc: 'Real-time dashboards, A/B testing & ROI reports' },
  { icon: '🔗', title: 'Integrations',  desc: 'Salesforce, HubSpot, Shopify & 100+ connectors' },
];

/* ── Perks section (right panel bottom) ─────────────── */
export default function PerksSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });
  return (
    <motion.div className="dbp-perks" ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
      <p className="dbp-perks-title">What you&apos;ll explore in 30 minutes</p>
      <div className="dbp-perks-grid">
        {DEMO_PERKS.map(({ icon, title, desc }, i) => (
          <motion.div key={title} className="dbp-perk"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
            <span className="dbp-perk-icon">{icon}</span>
            <div>
              <strong className="dbp-perk-title">{title}</strong>
              <span className="dbp-perk-desc">{desc}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
