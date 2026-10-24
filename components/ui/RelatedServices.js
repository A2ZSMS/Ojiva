'use client';

import Link from 'next/link';
import { FadeUp } from '@/components/ui/Animations';

/**
 * Reusable "Explore more" cross-linking strip for service pages.
 *
 * Renders a horizontal grid of 3-5 related service cards. Each service page
 * passes `currentPath` so the current page is filtered out automatically.
 *
 * Used to:
 *  • Improve internal link density (helps SEO crawl + topical relevance)
 *  • Increase pages-per-session (each service link reinforces conversion)
 */

const ALL_SERVICES = [
  { href: '/sms',              name: 'Bulk SMS',         desc: 'OTP, transactional & promotional SMS.',                color: '#1D4ED8', icon: 'bi-chat-dots-fill' },
  { href: '/whatsapp',         name: 'WhatsApp API',     desc: 'Official Meta BSP. Chatbots, templates, catalogs.',     color: '#166534', icon: 'bi-whatsapp' },
  { href: '/whatsapp-chatbot', name: 'WhatsApp Chatbot', desc: 'AI-powered customer conversations on WhatsApp.',         color: '#047857', icon: 'bi-robot' },
  { href: '/rcs',              name: 'RCS Messaging',    desc: 'Verified sender, rich cards, branded experiences.',      color: '#0369A1', icon: 'bi-stars' },
  { href: '/voice',            name: 'Bulk Voice Call',  desc: 'IVR, OBD, AI voice bots in multiple languages.',         color: '#6D28D9', icon: 'bi-telephone-fill' },
  { href: '/otp',              name: 'OTP & 2FA',        desc: 'Multi-channel OTP via SMS, WhatsApp and Voice.',         color: '#B45309', icon: 'bi-shield-lock-fill' },
  { href: '/solutions',        name: 'Industry Solutions', desc: 'Messaging playbooks for banking, healthcare, retail & more.', color: '#1B48E0', icon: 'bi-buildings-fill' },
];

export default function RelatedServices({
  currentPath,
  title = 'Explore More',
  subtitle = 'Other Ojiva AI services that pair well with this one.',
  limit = 4,
}) {
  const others = ALL_SERVICES
    .filter(s => s.href !== currentPath)
    .slice(0, limit);

  return (
    <section className="section-padding bg-mesh-tinted" aria-labelledby="related-svc-heading">
      <div className="container">
        <FadeUp>
          <div className="text-center mb-5">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              {title}
            </span>
            <h2 id="related-svc-heading" className="section-title mt-2">
              Build a complete communication stack
            </h2>
            <p className="lead mx-auto" style={{ marginTop: '0.5rem' }}>{subtitle}</p>
          </div>
        </FadeUp>

        <div className="related-svc-grid">
          {others.map(({ href, name, desc, color, icon }) => (
            <FadeUp key={href}>
              <Link
                href={href}
                className="related-svc-card"
                style={{ '--ch-color': color }}
              >
                <span className="related-svc-icon">
                  <i className={`bi ${icon}`} aria-hidden="true" />
                </span>
                <div className="related-svc-meta">
                  <span className="related-svc-name">{name}</span>
                  <span className="related-svc-desc">{desc}</span>
                </div>
                <span className="related-svc-arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
