'use client';

/* Lead popup — trigger only: a few listeners, renders nothing until it
   opens (plus the small "Request a callback" button). The window itself
   (LeadPopupPanel) is fetched just before it can open, so page speed is
   unaffected.

   1. Automatic popup
      Where:  blog + service pages only (ALLOWED). Never on the Google Ads
              landing pages (LayoutShell doesn't mount it there), contact,
              book-demo, support, legal or thank-you pages.
      When:   desktop — exit intent (mouse leaves through the top of the
              window); touch — after scrolling past half the page. Both wait
              MIN_DELAY first, and skip while the visitor is typing in a form.
      How often: once per browser session; hidden SNOOZE_DAYS after "close";
              never again after a submit.

   2. "Request a callback" button (Nov 2026)
      A small pill fixed bottom-left (Intercom's chat bubble is bottom-right)
      that opens the same popup whenever the visitor wants. It is the
      visitor's own choice, so the session / snooze rules above do not apply
      to it — only a submitted lead hides it for good.
      Where:  every page with the site navbar except the pages that already
              are a form (NO_BUTTON) — so it also shows on the homepage.
      Shown:  after the first screen has been scrolled; hidden near the
              footer, while the popup is open, and while the visitor is
              typing in any field (on phones it would sit on the keyboard). */

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { trackEvent } from '@/lib/formTracking';
import styles from './CallbackButton.module.css';

const loadPanel = () => import('./LeadPopupPanel');
const LeadPopupPanel = dynamic(loadPanel, { ssr: false });

const ALLOWED     = ['/blogs', '/sms', '/whatsapp', '/whatsapp-chatbot', '/rcs', '/voice', '/otp', '/pricing', '/solutions', '/platform'];
const NO_BUTTON   = ['/contact', '/book-demo', '/support', '/thank-you', '/privacy', '/terms'];
const SERVICE_FOR = { sms: 'bulk-sms', whatsapp: 'whatsapp-api', 'whatsapp-chatbot': 'whatsapp-chatbot', rcs: 'rcs', voice: 'voice', otp: 'otp' };
const MIN_DELAY   = 10000;
const SNOOZE_DAYS = 7;
const STORE_KEY   = 'ojv-lead-popup';        // localStorage: { closedAt } | { done: true }
const SESSION_KEY = 'ojv-lead-popup-shown';  // sessionStorage: shown this session

const cleanPath = (p) => (p || '').replace(/\/+$/, '') || '/';
const matches   = (list, path) => list.some(p => path === p || path.startsWith(`${p}/`));

function readStore() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY) || 'null'); } catch { return null; }
}

function suppressed() {
  try {
    if (sessionStorage.getItem(SESSION_KEY)) return true;
  } catch { /* storage blocked — still show at most once per page view */ }
  const saved = readStore();
  if (saved?.done) return true;
  if (saved?.closedAt && Date.now() - saved.closedAt < SNOOZE_DAYS * 864e5) return true;
  return false;
}

function remember(value) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(value)); } catch { /* storage blocked */ }
}

// Source + pre-selected service for a page, e.g. /sms → popup-sms / bulk-sms
function contextFor(path) {
  const segment = path.split('/')[1] || 'home';
  return {
    source: segment === 'blogs' ? 'popup-blog' : `popup-${segment}`,
    service: SERVICE_FOR[segment] || '',
  };
}

const isDesktop = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export default function LeadPopup() {
  const pathname = usePathname();
  const path = cleanPath(pathname);
  const [popup, setPopup] = useState(null);   // { trigger, desktop, source, service } while open
  const [leadDone, setLeadDone] = useState(false);

  // A submitted lead hides the callback button on every later visit too.
  useEffect(() => { setLeadDone(!!readStore()?.done); }, []);

  /* ── 1. Automatic popup ── */
  useEffect(() => {
    if (!matches(ALLOWED, path) || suppressed()) return;

    const desktop = isDesktop();
    let armed = false;
    let fired = false;

    const busy = () => {
      const el = document.activeElement;
      return (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) || document.body.classList.contains('aic-open');
    };
    const fire = (trigger) => {
      if (!armed || fired || busy() || suppressed()) return;
      fired = true;
      stop();
      try { sessionStorage.setItem(SESSION_KEY, '1'); } catch { /* storage blocked */ }
      setPopup((current) => current || { trigger, desktop, ...contextFor(path) });
      trackEvent('popup_shown', { popup_trigger: trigger });
    };
    const onMouseOut = (e) => { if (!e.relatedTarget && e.clientY <= 0) fire('exit_intent'); };
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable >= 0.5) fire('scroll_50');
    };

    const timer = setTimeout(() => {
      armed = true;
      loadPanel();                 // fetch the window now so it opens instantly
      if (!desktop) onScroll();    // already past half way while waiting
    }, MIN_DELAY);
    if (desktop) document.addEventListener('mouseout', onMouseOut);
    else window.addEventListener('scroll', onScroll, { passive: true });

    function stop() {
      clearTimeout(timer);
      document.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('scroll', onScroll);
    }
    return stop;
  }, [path]);

  /* ── 2. "Request a callback" button ── */
  const showButtonHere = !matches(NO_BUTTON, path) && !leadDone;
  const [pastHero, setPastHero]   = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const [typing, setTyping]       = useState(false);

  useEffect(() => {
    if (!showButtonHere) return undefined;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setPastHero(window.scrollY > window.innerHeight * 0.6);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Step aside near the footer so its links and contact details stay clear.
    let io;
    const footer = document.querySelector('footer.ojiva-footer');
    if (footer && typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(([entry]) => setNearFooter(entry.isIntersecting), { rootMargin: '0px 0px -40px 0px' });
      io.observe(footer);
    }

    // Hide while typing in any field — on phones it would ride on the keyboard.
    const field = (el) => el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName);
    const onFocusIn  = (e) => { if (field(e.target)) setTyping(true); };
    const onFocusOut = () => setTimeout(() => setTyping(field(document.activeElement)), 0);
    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('focusout', onFocusOut);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
      io?.disconnect();
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('focusout', onFocusOut);
    };
  }, [showButtonHere, path]);

  const openFromButton = () => {
    loadPanel();
    // The visitor asked for it, so the automatic popup should not also
    // appear later in this session.
    try { sessionStorage.setItem(SESSION_KEY, '1'); } catch { /* storage blocked */ }
    setPopup({ trigger: 'callback_button', desktop: isDesktop(), ...contextFor(path) });
    trackEvent('popup_shown', { popup_trigger: 'callback_button' });
  };

  /* ── Popup open / close ── */
  const submitted = useRef(false);
  const close = useCallback(() => {
    setPopup(null);
    if (submitted.current) return;          // keep "done" — never show again
    remember({ closedAt: Date.now() });
    trackEvent('popup_closed');
  }, []);

  const done = useCallback(() => {
    submitted.current = true;
    remember({ done: true });
    setLeadDone(true);
  }, []);

  const buttonVisible = showButtonHere && !popup && pastHero && !nearFooter && !typing;

  return (
    <>
      {showButtonHere && (
        <button
          type="button"
          className={`${styles.callback}${buttonVisible ? ` ${styles.show}` : ''}`}
          onClick={openFromButton}
          onPointerEnter={loadPanel}          // fetch the window before the click lands
          onFocus={loadPanel}
          tabIndex={buttonVisible ? 0 : -1}
          aria-hidden={buttonVisible ? undefined : 'true'}
          aria-haspopup="dialog"
        >
          <span className={styles.icon} aria-hidden="true">
            <i className="bi bi-telephone-fill" />
          </span>
          <span className={styles.label}>Request a callback</span>
        </button>
      )}

      {popup && (
        <LeadPopupPanel
          desktop={popup.desktop}
          trigger={popup.trigger}
          source={popup.source}
          defaultService={popup.service}
          onClose={close}
          onDone={done}
        />
      )}
    </>
  );
}
