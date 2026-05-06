'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  RiShieldKeyholeLine,
  RiLock2Line,
  RiUserSettingsLine,
  RiDeleteBin6Line,
  RiFingerprint2Line,
  RiShieldCheckLine,
} from 'react-icons/ri';

const SECURITY_FEATURES = [
  {
    icon: RiShieldKeyholeLine,
    title: 'End-to-End Encryption',
    desc: 'All data in transit is protected with TLS 1.3 and data at rest is encrypted using industry-standard protocols — ensuring zero exposure at every layer.',
    color: '#93c5fd',
    bg: 'rgba(59,130,246,0.22)',
  },
  {
    icon: RiLock2Line,
    title: 'AES-256 Payload Security',
    desc: 'Static and dynamic API payloads are encrypted with AES-256-bit encryption — the same standard trusted by governments and financial institutions worldwide.',
    color: '#c4b5fd',
    bg: 'rgba(139,92,246,0.22)',
  },
  {
    icon: RiUserSettingsLine,
    title: 'User Data Segregation',
    desc: 'Multi-tenant architecture with strict logical data isolation ensures your customer data is completely segregated — no cross-client data leakage, ever.',
    color: '#86efac',
    bg: 'rgba(34,197,94,0.22)',
  },
  {
    icon: RiDeleteBin6Line,
    title: 'Data Retention & Wiping',
    desc: 'Configurable data retention policies and certified data wiping procedures to meet your compliance requirements — GDPR, DPDP Act, and custom SLAs.',
    color: '#fdba74',
    bg: 'rgba(249,115,22,0.22)',
  },
  {
    icon: RiFingerprint2Line,
    title: '2FA Access Management',
    desc: 'Two-factor authentication with TOTP, SMS OTP, and biometric support. Role-based access control (RBAC) ensures only authorised personnel access sensitive data.',
    color: '#fca5a5',
    bg: 'rgba(239,68,68,0.22)',
  },
  {
    icon: RiShieldCheckLine,
    title: 'Regulatory Compliance',
    desc: 'SOC 2 Type II aligned, GDPR, DPDP Act compliant, DLT registered, and ISO 27001 practices — built for regulated industries from day one.',
    color: '#fde68a',
    bg: 'rgba(245,158,11,0.22)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function SecuritySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="security-section position-relative overflow-hidden"
      aria-labelledby="security-heading"
    >
      {/* Subtle background decoration */}
      <div className="security-bg-glow" aria-hidden="true" />
      <div className="security-bg-grid" aria-hidden="true" />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section header */}
        <div className="text-center mb-5 pb-3">
          <motion.div
            className="d-inline-flex align-items-center gap-2 security-eyebrow mb-3"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <RiShieldCheckLine size={16} />
            Enterprise-Grade Security
          </motion.div>

          <motion.h2
            id="security-heading"
            className="section-title"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Security That Never{' '}
            <span className="text-grad">Compromises</span>
          </motion.h2>

          <motion.p
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            Your data deserves military-grade protection. From encrypted payloads to
            certified data wiping — every layer is built to meet the strictest
            compliance standards.
          </motion.p>
        </div>

        {/* Security feature cards */}
        <div className="row g-4">
          {SECURITY_FEATURES.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <motion.div
              key={title}
              className="col-12 col-md-6 col-lg-4"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="security-card h-100">
                <div
                  className="security-card-icon"
                  style={{ background: bg, color }}
                >
                  <Icon size={26} />
                </div>
                <h3 className="security-card-title">{title}</h3>
                <p className="security-card-desc">{desc}</p>
                <div className="security-card-line" style={{ background: color }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          className="security-trust-bar mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="row align-items-center justify-content-center g-4 text-center">
            {[
              { label: 'AES-256', sub: 'Encryption' },
              { label: 'TLS 1.3', sub: 'In Transit' },
              { label: 'SOC 2', sub: 'Aligned' },
              { label: 'GDPR', sub: 'Compliant' },
              { label: '99.9%', sub: 'Uptime SLA' },
            ].map(({ label, sub }) => (
              <div key={label} className="col-6 col-md">
                <div className="security-trust-item">
                  <span className="security-trust-value">{label}</span>
                  <span className="security-trust-label">{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
