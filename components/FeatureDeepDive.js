'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { SlideLeft, SlideRight, TiltCard3D } from './Animations';

/* ── Chat conversation data ── */
const CHAT = [
  { from: 'ai',   msg: 'Hi Sarah 👋 Your cart is waiting — grab 20% off before midnight!',           time: '9:14 AM' },
  { from: 'user', msg: 'What items are in my cart?',                                                   time: '9:15 AM' },
  { from: 'ai',   msg: 'You have the Pro Plan + API Add-on. Total: ₹12,400/mo. Apply the discount?',  time: '9:15 AM' },
  { from: 'user', msg: 'Yes please!',                                                                  time: '9:16 AM' },
  { from: 'ai',   msg: '✅ Discount applied! Your subscription is now active. Welcome aboard!',        time: '9:16 AM' },
];

const LEAD_FIELDS = [
  { label: 'Company Size',  value: '250–500 employees'      },
  { label: 'Industry',      value: 'SaaS / Technology'      },
  { label: 'Intent Signal', value: 'Pricing page × 4 visits' },
  { label: 'Routed To',     value: 'Sarah Chen (Enterprise)' },
];

/* ── Typing indicator ── */
function TypingDots() {
  return (
    <div className="typing-indicator" aria-label="AI is typing">
      <span /><span /><span />
    </div>
  );
}

/* ── Animated chat bubbles ── */
function AnimatedChat() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let count = 0;
    function showNext() {
      if (count >= CHAT.length) return;
      const next = CHAT[count];
      /* AI messages show typing indicator first */
      if (next.from === 'ai') {
        setShowTyping(true);
        setTimeout(() => {
          setShowTyping(false);
          setVisibleCount((n) => n + 1);
          count++;
          setTimeout(showNext, 320);
        }, 700);
      } else {
        setVisibleCount((n) => n + 1);
        count++;
        setTimeout(showNext, 380);
      }
    }
    const t = setTimeout(showNext, 300);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <div ref={ref} className="fdv-chat-panel">
      {/* Chat header */}
      <div className="fdv-chat-header">
        <div className="fdv-chat-avatar">🤖</div>
        <div>
          <p className="fdv-chat-name">Ojiva AI Agent</p>
          <p className="fdv-chat-status"><span className="fdv-online-dot" />Online · Responding instantly</p>
        </div>
        <div className="fdv-chat-live-badge">LIVE</div>
      </div>

      {/* Messages */}
      <div className="fdv-chat-messages">
        {CHAT.slice(0, visibleCount).map(({ from, msg, time }, i) => (
          <motion.div
            key={i}
            className={`chat-bubble ${from}`}
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{msg}</span>
            <span className="bubble-time">{time}</span>
          </motion.div>
        ))}

        {showTyping && (
          <motion.div
            className="chat-bubble ai typing-bubble"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <TypingDots />
          </motion.div>
        )}
      </div>

      {/* Footer badge */}
      <div className="fdv-badge">
        <span>🤖</span> AI Managed This Entire Conversation
      </div>
    </div>
  );
}

/* ── Animated lead score card ── */
function AnimatedLeadCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="lead-score-card-v2">
      {/* Header */}
      <div className="lsc-header">
        <span className="lsc-avatar">👤</span>
        <div>
          <p className="lsc-name">James Okafor</p>
          <p className="lsc-company">TechFlow Enterprises</p>
        </div>
        <motion.span
          className="lsc-badge hot"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.4, ease: 'backOut' }}
        >
          🔥 Hot Lead
        </motion.span>
      </div>

      {/* Animated score bar */}
      <div className="lsc-score-row">
        <span>Lead Score</span>
        <div className="lsc-bar-wrap">
          <motion.div
            className="lsc-bar lsc-bar-gradient"
            style={{ transformOrigin: 'left', width: '87%' }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <motion.span
          className="lsc-score-val"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
        >
          87/100
        </motion.span>
      </div>

      {/* Detail rows — stagger in */}
      {LEAD_FIELDS.map(({ label, value }, i) => (
        <motion.div
          key={label}
          className="lsc-row"
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.55 + i * 0.1, ease: 'easeOut' }}
        >
          <span className="lsc-label">{label}</span>
          <span className="lsc-value">{value}</span>
        </motion.div>
      ))}

      {/* Route action pill */}
      <motion.div
        className="lsc-action-row"
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.05, duration: 0.4 }}
      >
        <span className="lsc-action-label">⚡ Auto-routed</span>
        <span className="lsc-action-time">0.3s response</span>
      </motion.div>
    </div>
  );
}

/* ── Main exported component ── */
export default function FeatureDeepDive() {
  return (
    <section className="section-padding bg-section" aria-labelledby="feature-deep-heading">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-5">
          <motion.span
            className="section-tag section-tag-centered"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            Intelligence Layer
          </motion.span>
          <motion.h2
            id="feature-deep-heading"
            className="section-title mt-2"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            AI That Works Across <span className="text-grad">Every Channel</span>
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            Not just automation — genuine intelligence that shapes every customer touchpoint and closes more deals.
          </motion.p>
        </div>

        {/* ── Row 1: AI Messaging ── */}
        <div className="row align-items-center g-5 mb-6">
          <SlideLeft className="col-12 col-lg-6">
            <span className="section-tag" style={{ background: 'rgba(27,72,224,0.1)', color: 'var(--primary)' }}>
              AI Messaging
            </span>
            <h3 className="section-title mt-2">
              Send the Right Message at the{' '}
              <span className="text-grad">Perfect Moment</span>
            </h3>
            <p className="section-subtitle mb-4">
              Our AI analyses each contact&apos;s behaviour to determine the optimal send time, channel, and message — automatically. Campaigns average 40%+ open rates.
            </p>
            <ul className="feature-deep-list">
              {[
                'Behavioural send-time optimisation',
                'Dynamic content personalisation',
                'Automatic opt-out & compliance',
                'Multi-channel fallback logic',
              ].map((pt) => (
                <li key={pt}>
                  <span className="check-icon" style={{ color: 'var(--primary)' }}>✓</span>
                  {pt}
                </li>
              ))}
            </ul>
            <Link href="/platform" className="btn-ojiva-primary mt-4 d-inline-block">
              See Messaging Features →
            </Link>
          </SlideLeft>

          <SlideRight className="col-12 col-lg-6">
            <TiltCard3D intensity={7} className="feature-deep-visual-v2">
              <AnimatedChat />
            </TiltCard3D>
          </SlideRight>
        </div>

        {/* ── Row 2: Lead Intelligence ── */}
        <div className="row align-items-center g-5">
          <SlideRight delay={0.05} className="col-12 col-lg-6 order-lg-2">
            <span className="section-tag" style={{ background: 'rgba(124,58,237,0.1)', color: '#7C3AED' }}>
              Lead Intelligence
            </span>
            <h3 className="section-title mt-2">
              Every Lead Scored, Enriched &{' '}
              <span className="text-grad">Routed Instantly</span>
            </h3>
            <p className="section-subtitle mb-4">
              Ojiva AI scores every inbound lead in real time — enriching their profile from 40+ data sources and routing them to the right rep before they even click send.
            </p>
            <ul className="feature-deep-list">
              {[
                'Real-time ML lead scoring',
                'Automated CRM enrichment',
                'Smart territory routing',
                'Duplicate detection & merge',
              ].map((pt) => (
                <li key={pt}>
                  <span className="check-icon" style={{ color: '#7C3AED' }}>✓</span>
                  {pt}
                </li>
              ))}
            </ul>
            <Link href="/platform" className="btn-ojiva-primary mt-4 d-inline-block">
              See Lead Intelligence →
            </Link>
          </SlideRight>

          <SlideLeft delay={0.05} className="col-12 col-lg-6 order-lg-1">
            <TiltCard3D intensity={7} className="feature-deep-visual-v2">
              <AnimatedLeadCard />
            </TiltCard3D>
          </SlideLeft>
        </div>
      </div>
    </section>
  );
}
