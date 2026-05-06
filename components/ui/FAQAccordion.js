'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FadeUp } from '@/components/ui/Animations';

/**
 * Reusable FAQ accordion — compact 2-column layout.
 * Left column: heading + subtitle + CTA
 * Right column: compact accordion list
 *
 * Props:
 *   faqs:     [{ q: string, a: string }]
 *   subtitle: optional string
 *   tag:      optional eyebrow label (default: 'FAQ')
 *   title:    optional section title
 *   id:       optional <section> id
 *   accentColor: optional color for open state accent (default: var(--primary))
 */
export default function FAQAccordion({
  faqs = [],
  subtitle = 'Everything you need to know.',
  tag = 'FAQ',
  title = 'Frequently Asked Questions',
  id = 'faq',
  accentColor = '#1B48E0',
}) {
  const [openIdx, setOpenIdx] = useState(0);

  if (!faqs.length) return null;

  return (
    <section className="faq2-section" id={id} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <div className="faq2-layout">

          {/* ── Left: sticky heading ── */}
          <FadeUp>
            <div className="faq2-left">
              <span className="faq2-tag">{tag}</span>
              <h2 id={`${id}-heading`} className="faq2-title">{title}</h2>
              <p className="faq2-subtitle">{subtitle}</p>
              <Link href="/contact" className="faq2-cta" style={{ color: accentColor, borderColor: `${accentColor}30`, background: `${accentColor}08` }}>
                Still have questions? Talk to us →
              </Link>
            </div>
          </FadeUp>

          {/* ── Right: accordion list ── */}
          <FadeUp delay={0.08}>
            <div className="faq2-list" role="list">
              {faqs.map(({ q, a }, idx) => {
                const isOpen = openIdx === idx;
                const itemId = `${id}-item-${idx}`;
                return (
                  <div
                    key={q}
                    className={`faq2-item${isOpen ? ' faq2-item--open' : ''}`}
                    style={isOpen ? { borderLeftColor: accentColor } : {}}
                    role="listitem"
                  >
                    <button
                      type="button"
                      className="faq2-q"
                      aria-expanded={isOpen}
                      aria-controls={`${itemId}-a`}
                      id={`${itemId}-q`}
                      onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    >
                      <span className="faq2-q-text">{q}</span>
                      <span
                        className="faq2-icon"
                        aria-hidden="true"
                        style={isOpen ? { background: accentColor, color: '#fff' } : {}}
                      >
                        <svg
                          width="14" height="14"
                          viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round"
                          style={{ transition: 'transform 0.25s', transform: isOpen ? 'rotate(180deg)' : 'none' }}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`${itemId}-a`}
                        role="region"
                        aria-labelledby={`${itemId}-q`}
                        className="faq2-a"
                      >
                        {a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
