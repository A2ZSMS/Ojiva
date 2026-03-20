'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeUp } from './Animations';

export default function CTA({
  title = 'Ready to transform your business communications?',
  subtitle = 'Join forward-thinking enterprises using Ojiva AI to automate workflows, qualify leads, and deliver intelligent customer experiences at scale.',
  primaryLabel = 'Request a Demo',
  primaryHref = '/contact',
  secondaryLabel = 'Explore Platform',
  secondaryHref = '/platform',
}) {
  return (
    <section className="cta-section cta-section-v2" aria-labelledby="cta-heading">
      {/* Animated background orbs */}
      <div className="cta-orb cta-orb-1" aria-hidden="true" />
      <div className="cta-orb cta-orb-2" aria-hidden="true" />
      <div className="cta-orb cta-orb-3" aria-hidden="true" />

      {/* Animated grid overlay */}
      <div className="cta-grid-overlay" aria-hidden="true" />

      {/* Animated ring */}
      <div className="cta-ring cta-ring-1" aria-hidden="true" />
      <div className="cta-ring cta-ring-2" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-8">

            {/* Eyebrow badge */}
            <FadeUp delay={0}>
              <div className="cta-eyebrow">
                <span className="cta-eyebrow-dot" />
                500+ businesses already growing with Ojiva AI
              </div>
            </FadeUp>

            {/* Title */}
            <FadeUp delay={0.1}>
              <h2 className="cta-title" id="cta-heading">{title}</h2>
            </FadeUp>

            {/* Subtitle */}
            <FadeUp delay={0.2}>
              <p className="cta-subtitle mx-auto">{subtitle}</p>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.3}>
              <div className="cta-actions">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="cta-btn-wrap"
                >
                  <Link href={primaryHref} className="btn-cta-primary">
                    {primaryLabel}
                    <span className="btn-cta-arrow" aria-hidden="true">→</span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                >
                  <Link href={secondaryHref} className="btn-cta-ghost">
                    {secondaryLabel}
                  </Link>
                </motion.div>
              </div>
            </FadeUp>

            {/* Trust line */}
            <FadeUp delay={0.4}>
              <p className="cta-trust">
                <span>✓ Free 14-day trial</span>
                <span>✓ No credit card required</span>
                <span>✓ Live in under 10 minutes</span>
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
