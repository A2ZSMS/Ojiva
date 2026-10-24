'use client';

/* Animated chat mockup for FeatureDeepDive — the only client code in that
   section. Bubbles reveal one by one once the panel scrolls into view;
   plain CSS transitions, no animation library. */

import { useEffect, useRef, useState } from 'react';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

/* ── Chat conversation data ── */
const CHAT = [
  { from: 'ai',   msg: 'Hi Sarah 👋 Your cart is waiting — grab 20% off before midnight!',           time: '9:14 AM' },
  { from: 'user', msg: 'What items are in my cart?',                                                   time: '9:15 AM' },
  { from: 'ai',   msg: 'You have the Pro Plan + API Add-on. Total: ₹12,400/mo. Apply the discount?',  time: '9:15 AM' },
  { from: 'user', msg: 'Yes please!',                                                                  time: '9:16 AM' },
  { from: 'ai',   msg: '✅ Discount applied! Your subscription is now active. Welcome aboard!',        time: '9:16 AM' },
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
export default function AnimatedChat() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setInView(true); return; }
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      setInView(true);
    }, { rootMargin: '-80px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

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

      {/* Messages — every bubble is laid out from the start (invisible until its
          turn), so revealing them never pushes the rest of the page down (no CLS). */}
      <div className="fdv-chat-messages">
        {CHAT.map(({ from, msg, time }, i) => {
          const shown = i < visibleCount;
          const typingHere = showTyping && i === visibleCount;
          return (
            <div
              key={i}
              style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: from === 'ai' ? 'flex-start' : 'flex-end' }}
            >
              <div
                className={`chat-bubble ${from}`}
                style={shown
                  ? { opacity: 1, transform: 'none', transition: `opacity 0.32s ${EASE}, transform 0.32s ${EASE}` }
                  : { opacity: 0, transform: 'translateY(10px) scale(0.96)' }}
                aria-hidden={!shown}
              >
                <span>{msg}</span>
                <span className="bubble-time">{time}</span>
              </div>
              {typingHere && (
                <div
                  className="chat-bubble ai typing-bubble"
                  style={{ position: 'absolute', top: 0, left: 0, animation: 'rv-typing-in 0.2s ease-out backwards' }}
                >
                  <TypingDots />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer badge */}
      <div className="fdv-badge">
        <span>🤖</span> AI Managed This Entire Conversation
      </div>
    </div>
  );
}

