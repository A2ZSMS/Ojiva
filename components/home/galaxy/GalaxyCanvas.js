'use client';

/*
  Galaxy Canvas — embeddable right-column visual for Hero.
  Perf: RAF loop pauses automatically when off-screen (IntersectionObserver).
*/

import './GalaxyHero.css';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

/* ── Services that orbit the logo ──────────────────────────── */
const SERVICES = [
  {
    id: 'wa',    icon: 'bi-whatsapp',         label: 'WhatsApp API', stat: '98% Open Rate',
    color: '#25d366', radius: 148, startAngle:   0, speed: 0.28,
  },
  {
    id: 'sms',   icon: 'bi-chat-text',         label: 'Bulk SMS',     stat: '10M+ / Day',
    color: '#3b82f6', radius: 148, startAngle: 180, speed: 0.28,
  },
  {
    id: 'rcs',   icon: 'bi-chat-square-dots',  label: 'RCS',          stat: '94% Read Rate',
    color: '#0ea5e9', radius: 220, startAngle:  90, speed: 0.18,
  },
  {
    id: 'voice', icon: 'bi-telephone',         label: 'AI Voice',     stat: 'Zero Agents',
    color: '#8b5cf6', radius: 220, startAngle: 270, speed: 0.18,
  },
  {
    id: 'otp',   icon: 'bi-shield-lock',       label: 'OTP & 2FA',    stat: '<1s Delivery',
    color: '#f59e0b', radius: 290, startAngle:  45, speed: 0.11,
  },
  {
    id: 'bot',   icon: 'bi-robot',             label: 'AI Chatbot',   stat: '24/7 Active',
    color: '#10b981', radius: 290, startAngle: 225, speed: 0.11,
  },
];

/* ── Blast stat messages ─────────────────────────────────── */
const BLAST_MSGS = [
  { text: '98% Open Rate',    tx:  220, ty: -80  },
  { text: '500+ Businesses',  tx: -230, ty: -70  },
  { text: '10M+ Msgs / Day',  tx:  180, ty:  130 },
  { text: '48hr Go-Live',     tx: -170, ty:  140 },
  { text: '99.9% Uptime',     tx:   60, ty: -200 },
  { text: 'Zero Setup Fees',  tx:  -80, ty:  190 },
  { text: 'Meta BSP',         tx:  240, ty:   20 },
  { text: 'ISO 27001',        tx: -250, ty:   30 },
];

/* ════════════════════════════════════════════════════════════
   Component
══════════════════════════════════════════════════════════ */
export default function GalaxyCanvas() {
  const wrapRef   = useRef(null);
  const nodesRef  = useRef([]);
  const frameRef  = useRef(null);
  const angleRef  = useRef(0);
  const visibleRef = useRef(false); // IntersectionObserver flag

  const [blasted,   setBlasted]   = useState(false);
  const [bgPhase,   setBgPhase]   = useState(0);
  const [hoveredId, setHoveredId] = useState(null);

  /* ── RAF loop — only runs when visible ── */
  useEffect(() => {
    const animate = () => {
      if (!visibleRef.current) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }
      angleRef.current += 0.35;
      const base = angleRef.current;
      SERVICES.forEach((s, i) => {
        const el = nodesRef.current[i];
        if (!el) return;
        const rad = ((s.startAngle + base * s.speed) * Math.PI) / 180;
        const x   = Math.cos(rad) * s.radius;
        const y   = Math.sin(rad) * s.radius;
        el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      });
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  /* ── IntersectionObserver — pause RAF when off-screen ── */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      visibleRef.current = true; // fallback: always run
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* ── Blast handler ── */
  const handleBlast = useCallback(() => {
    if (blasted) return;
    setBlasted(true);
    setBgPhase(prev => (prev % 3) + 1);
    setTimeout(() => setBlasted(false), 2800);
  }, [blasted]);

  return (
    <div ref={wrapRef} className={`gx-canvas-wrap gx-phase-${bgPhase}`}>

      {/* Phase glow overlay */}
      <div className="gx-canvas-glow-overlay" aria-hidden="true" />

      <div className="gx-canvas">

        {/* Orbit ring paths */}
        <div className="gx-ring gx-ring-inner" />
        <div className="gx-ring gx-ring-mid" />
        <div className="gx-ring gx-ring-outer" />

        {/* ── Centre logo ── */}
        <button
          className={`gx-center${blasted ? ' gx-center-blasted' : ''}`}
          onClick={handleBlast}
          aria-label="Click to explore Ojiva AI services"
        >
          <div className="gx-center-glow"   aria-hidden="true" />
          <div className="gx-center-pulse"  aria-hidden="true" />
          <div className="gx-center-pulse2" aria-hidden="true" />
          <div className="gx-logo-wrap">
            <Image
              src="/ojiva-logo-white.webp"
              alt="Ojiva AI"
              width={62}
              height={62}
              unoptimized
              priority
              className="gx-center-logo"
            />
          </div>
          <span className="gx-click-hint">tap me</span>
        </button>

        {/* ── Shockwave rings ── */}
        {blasted && (
          <>
            <div className="gx-shockwave gx-sw-1" aria-hidden="true" />
            <div className="gx-shockwave gx-sw-2" aria-hidden="true" />
            <div className="gx-shockwave gx-sw-3" aria-hidden="true" />
          </>
        )}

        {/* ── Blast messages ── */}
        {blasted && BLAST_MSGS.map((m, i) => (
          <div
            key={i}
            className="gx-blast-msg"
            style={{ '--tx': `${m.tx}px`, '--ty': `${m.ty}px`, '--delay': `${i * 0.055}s` }}
            aria-hidden="true"
          >
            {m.text}
          </div>
        ))}

        {/* ── Orbiting service nodes ── */}
        {SERVICES.map((s, i) => (
          <div
            key={s.id}
            ref={el => { nodesRef.current[i] = el; }}
            className="gx-node"
            style={{ '--clr': s.color }}
            onMouseEnter={() => setHoveredId(s.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="gx-node-body">
              <div className="gx-node-ico">
                <i className={`bi ${s.icon}`} />
              </div>
              <span className="gx-node-label">{s.label}</span>

              {hoveredId === s.id && (
                <div className="gx-node-tip" style={{ '--clr': s.color }}>
                  <strong>{s.label}</strong>
                  <span>{s.stat}</span>
                </div>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
