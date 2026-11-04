'use client';

/* Lead popup — trigger only: a few listeners, renders nothing until it
   opens. The window itself (LeadPopupPanel) is fetched just before it can
   open, so page speed is unaffected.

   Where:  blog + service pages only (ALLOWED). Never on the Google Ads
           landing pages (LayoutShell doesn't mount it there), contact,
           book-demo, support, legal or thank-you pages.
   When:   desktop — exit intent (mouse leaves through the top of the
           window); touch — after scrolling past half the page. Both wait
           MIN_DELAY first, and skip while the visitor is typing in a form.
   How often: once per browser session; hidden SNOOZE_DAYS after "close";
           never again after a submit. */

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { trackEvent } from '@/lib/formTracking';

const loadPanel = () => import('./LeadPopupPanel');
const LeadPopupPanel = dynamic(loadPanel, { ssr: false });

const ALLOWED     = ['/blogs', '/sms', '/whatsapp', '/whatsapp-chatbot', '/rcs', '/voice', '/otp', '/pricing', '/solutions', '/platform'];
const SERVICE_FOR = { sms: 'bulk-sms', whatsapp: 'whatsapp-api', 'whatsapp-chatbot': 'whatsapp-chatbot', rcs: 'rcs', voice: 'voice', otp: 'otp' };
const MIN_DELAY   = 10000;
const SNOOZE_DAYS = 7;
const STORE_KEY   = 'ojv-lead-popup';        // localStorage: { closedAt } | { done: true }
const SESSION_KEY = 'ojv-lead-popup-shown';  // sessionStorage: shown this session

const cleanPath = (p) => (p || '').replace(/\/+$/, '') || '/';
const isAllowed = (path) => ALLOWED.some(p => path === p || path.startsWith(`${p}/`));

function suppressed() {
  try {
    if (sessionStorage.getItem(SESSION_KEY)) return true;
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
    if (saved?.done) return true;
    if (saved?.closedAt && Date.now() - saved.closedAt < SNOOZE_DAYS * 864e5) return true;
  } catch { /* storage blocked — still show at most once per page view */ }
  return false;
}

function remember(value) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(value)); } catch { /* storage blocked */ }
}

export default function LeadPopup() {
  const pathname = usePathname();
  const [popup, setPopup] = useState(null);   // { trigger, desktop, source, service } while open

  useEffect(() => {
    const path = cleanPath(pathname);
    if (!isAllowed(path) || suppressed()) return;

    const desktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
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
      const segment = path.split('/')[1];
      setPopup({
        trigger,
        desktop,
        source: segment === 'blogs' ? 'popup-blog' : `popup-${segment}`,
        service: SERVICE_FOR[segment] || '',
      });
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
  }, [pathname]);

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
  }, []);

  if (!popup) return null;
  return (
    <LeadPopupPanel
      desktop={popup.desktop}
      trigger={popup.trigger}
      source={popup.source}
      defaultService={popup.service}
      onClose={close}
      onDone={done}
    />
  );
}
