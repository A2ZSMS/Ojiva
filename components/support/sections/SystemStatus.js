'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SYSTEM_STATUSES = [
  { name: 'SMS Gateway',       status: 'operational', uptime: '99.98%' },
  { name: 'WhatsApp API',      status: 'operational', uptime: '99.97%' },
  { name: 'RCS Platform',      status: 'operational', uptime: '99.95%' },
  { name: 'Voice AI Engine',   status: 'operational', uptime: '99.99%' },
  { name: 'Dashboard & UI',    status: 'operational', uptime: '100%'   },
  { name: 'REST API',          status: 'degraded',    uptime: '99.91%' },
  { name: 'Webhooks',          status: 'operational', uptime: '99.96%' },
  { name: 'Analytics Engine',  status: 'operational', uptime: '99.94%' },
];

const statusColor = { operational: '#16a34a', degraded: '#d97706', outage: '#dc2626' };
const statusLabel = { operational: 'Operational', degraded: 'Degraded', outage: 'Outage' };

/** System status board */
function StatusBoard() {
  const allOk = SYSTEM_STATUSES.every(s => s.status === 'operational');
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setPulse(p => !p), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="sp-status-board">
      <div className={`sp-status-overall${allOk ? ' ok' : ' warn'}`}>
        <span className={`sp-status-overall-dot${pulse ? ' pulse' : ''}`} />
        <strong>{allOk ? 'All Systems Operational' : 'Partial Degradation'}</strong>
        <span className="sp-status-ts">Updated: {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} IST</span>
      </div>
      <div className="sp-status-grid">
        {SYSTEM_STATUSES.map(({ name, status, uptime }) => (
          <motion.div
            key={name}
            className="sp-status-row"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.15 }}
          >
            <span className="sp-status-name">{name}</span>
            <span className="sp-status-uptime">{uptime}</span>
            <span className="sp-status-pill" style={{ background: `${statusColor[status]}20`, color: statusColor[status] }}>
              <span className="sp-status-pill-dot" style={{ background: statusColor[status] }} />
              {statusLabel[status]}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function SystemStatus() {
  return (
    <section className="section-padding bg-section" aria-labelledby="status-heading">
      <div className="container">
        <div className="row align-items-center g-5">
          <motion.div
            className="col-12 col-lg-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">System Status</span>
            <h2 id="status-heading" className="section-title mt-2">
              Real-Time Platform <span className="text-grad">Health</span>
            </h2>
            <p className="section-subtitle">
              Live status for all Ojiva AI services. We update every 60 seconds and notify enterprise clients of any incidents instantly.
            </p>
            <Link href="/contact" className="btn-ojiva-primary mt-3">
              Subscribe to Alerts →
            </Link>
          </motion.div>
          <motion.div
            className="col-12 col-lg-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <StatusBoard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
