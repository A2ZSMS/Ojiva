'use client';

/*
  ChannelStory — "one message, four channels".
  Desktop (≥992px, motion allowed): the section pins for ~3 screens while a
  single delivery update morphs on a phone from SMS → WhatsApp → RCS → Voice,
  driven by scroll. Mobile / reduced motion: no pinning — the steps become
  tappable tabs and the phone below shows the selected channel. Every
  chapter's text is in the static HTML either way (SEO).
  Speed: no animation library: one passive scroll listener, attached only
  while the section is on screen, throttled to one update per frame.
*/

import './ChannelStory.css';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  RiMessage2Line, RiWhatsappLine, RiChatSmile3Line, RiPhoneLine,
  RiVerifiedBadgeFill, RiCheckDoubleLine, RiTruckLine, RiMicOffLine,
  RiPhoneFill, RiArrowRightLine, RiRobot2Line,
} from 'react-icons/ri';

const PINNED_QUERY = '(min-width: 992px) and (min-height: 900px) and (prefers-reduced-motion: no-preference)';

const CHAPTERS = [
  {
    id: 'sms',
    channel: 'Bulk SMS',
    icon: RiMessage2Line,
    title: 'Reach every phone in India',
    summary: 'Alerts & notifications',
    features: ['No app or data connection needed', 'Transactional updates and alerts', 'DLT-ready messaging workflows'],
    desc: 'Send transactional updates and alerts to any handset, without an app or data connection.',
    href: '/sms/',
  },
  {
    id: 'wa',
    channel: 'WhatsApp API',
    icon: RiWhatsappLine,
    title: 'Turn it into a conversation',
    summary: 'Two-way conversations',
    features: ['Quick replies that keep things moving', 'Rich, personalised message templates', 'Automated customer assistance'],
    desc: 'Turn an order update into a conversation with quick replies, rich templates, and automated assistance.',
    href: '/whatsapp/',
  },
  {
    id: 'rcs',
    channel: 'RCS Messaging',
    icon: RiChatSmile3Line,
    title: 'Make it a branded experience',
    summary: 'Rich, branded messages',
    features: ['A verified business identity', 'Rich cards, images, and carousels', 'Actions right inside the inbox'],
    desc: 'Bring your brand into the native inbox with verified messages, images, and action buttons.',
    href: '/rcs/',
  },
  {
    id: 'voice',
    channel: 'AI Voice Call',
    icon: RiPhoneLine,
    title: 'Or simply call — at scale',
    summary: 'Automated calls',
    features: ['Automated updates by phone', 'Responses captured with a keypress', 'Follow-ups and retry workflows'],
    desc: 'Reach customers by phone with an automated update and capture their response with a keypress.',
    href: '/voice/',
  },
];

/* ── Phone screens ───────────────────────────────────────── */
function SmsScreen() {
  return (
    <div className="scr scr-sms">
      <div className="scr-head">
        <span className="scr-avatar">VM</span>
        <div className="scr-head-text"><b>VM-OJIVAS</b><small>Text message · SMS</small></div>
      </div>
      <div className="scr-body">
        <div className="scr-time">Today 10:42 AM</div>
        <div className="bub bub-in scr-seq" style={{ '--i': 0 }}>
          OJIVAS: Hi Priya, your order #48213 is out for delivery today.
          Track live: ojiva.ai/t/48213
        </div>
        <div className="scr-meta scr-seq" style={{ '--i': 1 }}>Delivered · 1.8s</div>
      </div>
    </div>
  );
}

function WhatsAppScreen() {
  return (
    <div className="scr scr-wa">
      <div className="scr-head">
        <span className="scr-avatar"><RiTruckLine /></span>
        <div className="scr-head-text">
          <b>Ojiva Store <RiVerifiedBadgeFill className="scr-verified" /></b>
          <small>Business account</small>
        </div>
      </div>
      <div className="scr-body">
        <div className="bub bub-in scr-seq" style={{ '--i': 0 }}>
          <strong>📦 Out for delivery</strong>
          Hi Priya, order #48213 arrives today by 6 PM.
          <span className="bub-tick">10:42</span>
        </div>
        <div className="wa-btns scr-seq" style={{ '--i': 1 }}>
          <span>Track order</span><span>Change slot</span>
        </div>
        <div className="bub bub-out scr-seq" style={{ '--i': 2 }}>
          Track order <RiCheckDoubleLine className="bub-read" />
        </div>
        <div className="bub bub-in scr-seq" style={{ '--i': 3 }}>
          <span className="bub-bot"><RiRobot2Line /> AI assistant</span>
          Your rider Ravi is 12 mins away 🛵
        </div>
      </div>
    </div>
  );
}

function RcsScreen() {
  return (
    <div className="scr scr-rcs">
      <div className="scr-head">
        <span className="scr-avatar"><RiTruckLine /></span>
        <div className="scr-head-text">
          <b>Ojiva Store <RiVerifiedBadgeFill className="scr-verified" /></b>
          <small>Verified business · RCS</small>
        </div>
      </div>
      <div className="scr-body">
        <div className="rcs-card scr-seq" style={{ '--i': 0 }}>
          <div className="rcs-media">
            <RiTruckLine className="rcs-media-icon" />
            <span className="rcs-media-tag">Arriving today</span>
          </div>
          <div className="rcs-card-body">
            <b>Out for delivery 🚚</b>
            <span>Order #48213 · by 6 PM</span>
          </div>
          <div className="rcs-actions">
            <span>Track live</span>
            <span>Reschedule</span>
          </div>
        </div>
        <div className="rcs-chips scr-seq" style={{ '--i': 1 }}>
          <span>Call rider</span><span>Leave at door</span><span>Help</span>
        </div>
      </div>
    </div>
  );
}

function VoiceScreen() {
  return (
    <div className="scr scr-voice">
      <div className="voice-top">
        <small>AI Voice · Ojiva Store</small>
        <span className="voice-timer">00:14</span>
      </div>
      <div className="voice-avatar"><RiPhoneFill /></div>
      <div className="voice-wave" aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => <span key={i} style={{ '--i': i }} />)}
      </div>
      <div className="voice-transcript scr-seq" style={{ '--i': 0 }}>
        “Hi Priya, your order arrives today by 6 PM. Press 1 to confirm you’re home.”
      </div>
      <div className="voice-key scr-seq" style={{ '--i': 1 }}>Customer pressed <b>1</b> · confirmed</div>
      <div className="voice-controls">
        <span><RiMicOffLine /></span>
        <span className="voice-end"><RiPhoneFill /></span>
      </div>
    </div>
  );
}

const SCREENS = { sms: SmsScreen, wa: WhatsAppScreen, rcs: RcsScreen, voice: VoiceScreen };

/* ── Section ─────────────────────────────────────────────── */
export default function ChannelStory() {
  const trackRef = useRef(null);
  const railRef = useRef(null);
  const tabRefs = useRef([]);
  const pinnedRef = useRef(false);
  const [active, setActive] = useState(0);

  // Rail fill: scroll progress when pinned, selected tab otherwise
  const setRail = (p) => {
    if (railRef.current) railRef.current.style.transform = `scaleX(${p})`;
  };

  useEffect(() => {
    const track = trackRef.current;
    const media = window.matchMedia(PINNED_QUERY);
    let raf = 0;
    let listening = false;

    const update = () => {
      raf = 0;
      if (!pinnedRef.current) return;
      const distance = Math.max(1, track.offsetHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, -track.getBoundingClientRect().top / distance));
      setRail(p);
      const next = Math.min(CHAPTERS.length - 1, Math.floor(p * CHAPTERS.length));
      setActive((cur) => (cur === next ? cur : next));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const listen = (on) => {
      if (on === listening) return;
      listening = on;
      window[on ? 'addEventListener' : 'removeEventListener']('scroll', onScroll, { passive: true });
      if (on) onScroll();
    };
    const syncMedia = () => {
      pinnedRef.current = media.matches;
      if (media.matches) onScroll();
    };

    syncMedia();
    media.addEventListener('change', syncMedia);
    window.addEventListener('resize', onScroll, { passive: true });
    // Only track scroll while the section is (nearly) on screen
    const io = new IntersectionObserver(([entry]) => {
      listen(entry.isIntersecting);
      track.classList.toggle('cs-in-view', entry.isIntersecting);
    }, { rootMargin: '200px 0px' });
    io.observe(track);

    return () => {
      io.disconnect();
      listen(false);
      cancelAnimationFrame(raf);
      media.removeEventListener('change', syncMedia);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Pinned: scroll to the middle of that chapter. Stacked: switch tab.
  const goTo = (i) => {
    if (!pinnedRef.current) {
      setActive(i);
      setRail((i + 1) / CHAPTERS.length);
      return;
    }
    const el = trackRef.current;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const distance = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (distance * (i + 0.5)) / CHAPTERS.length, behavior: 'smooth' });
  };

  const current = CHAPTERS[active];

  const onTabKey = (event, index) => {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % CHAPTERS.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + CHAPTERS.length - 1) % CHAPTERS.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = CHAPTERS.length - 1;
    else return;
    event.preventDefault();
    goTo(next);
    tabRefs.current[next]?.focus({ preventScroll: true });
  };

  return (
    <section className="cs-section" aria-labelledby="cs-heading">
      <div className="cs-track" ref={trackRef}>
        <div className="cs-sticky">
          <div className="container">
            <div className="cs-layout">
              <div className="cs-copy">
                <span className="cs-kicker">CONNECTED COMMUNICATION</span>
                <h2 id="cs-heading" className="cs-heading">
                  One message.<br /><span>Every channel.</span>
                </h2>
                <p className="cs-intro">
                  Reach them with a message. Engage them in a conversation.
                  Connect every touchpoint through one platform.
                </p>

                <div className="cs-selector" role="tablist" aria-label="Explore communication channels">
                  {CHAPTERS.map((c, i) => {
                    const Icon = c.icon;
                    return (
                      <button
                        key={c.id}
                        ref={(el) => { tabRefs.current[i] = el; }}
                        id={`cs-tab-${c.id}`}
                        className={`cs-tab${i === active ? ' is-active' : ''}`}
                        type="button"
                        role="tab"
                        aria-selected={i === active}
                        aria-controls={`cs-panel-${c.id}`}
                        tabIndex={i === active ? 0 : -1}
                        onClick={() => goTo(i)}
                        onKeyDown={(event) => onTabKey(event, i)}
                      >
                        <span className="cs-tab-icon"><Icon aria-hidden="true" /></span>
                        <span className="cs-tab-copy"><strong>{c.channel}</strong><small>{c.summary}</small></span>
                        <RiArrowRightLine className="cs-tab-arrow" aria-hidden="true" />
                      </button>
                    );
                  })}
                </div>

                <div className="cs-details">
                  {CHAPTERS.map((c, i) => (
                    <div key={c.id} id={`cs-panel-${c.id}`} role="tabpanel" aria-labelledby={`cs-tab-${c.id}`} hidden={i !== active} tabIndex={0}>
                      <span className="cs-detail-label">0{i + 1} / {c.channel}</span>
                      <h3>{c.title}</h3>
                      <p>{c.desc}</p>
                      <ul className="cs-benefits">{c.features.map((feature) => <li key={feature}><RiCheckDoubleLine aria-hidden="true" />{feature}</li>)}</ul>
                      <Link href={c.href} className="cs-explore">Explore {c.channel} <RiArrowRightLine aria-hidden="true" /></Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cs-preview">
                <div className="cs-preview-heading">
                  <span>THE CUSTOMER EXPERIENCE</span>
                  <span className="cs-preview-type">{current.channel}</span>
                </div>
                <div className="cs-stage">
                  <div className="cs-phone" aria-hidden="true">
                    <span className="cs-phone-notch" />
                    {CHAPTERS.map((c, i) => {
                      const Screen = SCREENS[c.id];
                      return (
                        <div key={c.id} className={`cs-screen${i === active ? ' is-active' : ''}${i < active ? ' is-past' : ''}`}>
                          <Screen />
                        </div>
                      );
                    })}
                  </div>
                  <div className="cs-preview-note" aria-hidden="true">
                    <span className="cs-note-icon"><RiCheckDoubleLine /></span>
                    <span><strong>One connected workflow</strong><small>{current.summary}</small></span>
                  </div>
                </div>
                <div className="cs-preview-footer">
                  <span>Illustrative message preview</span>
                  <span className="cs-page-number">0{active + 1}<span> / 04</span></span>
                </div>
                <div className="cs-progress" aria-hidden="true"><span ref={railRef} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
