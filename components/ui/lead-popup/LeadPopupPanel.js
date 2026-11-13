'use client';

/* The lead popup window (loaded only when the popup is about to open — see
   LeadPopup.js). Redesigned Nov 2026:

   - Desktop: two panels — a dark brand panel with real proof (Google rating
     and one real Google review from components/landing/proof.js) beside the
     form. Phones: a bottom sheet with a drag handle.
   - Service is picked with chips (the page's own service is pre-selected);
     an optional "When should we call?" choice goes to TeleCRM's Preferred
     Time field.
   - The headline matches the page the visitor is on.
   - The mobile field shows a green tick once the number is valid.
   - After a successful submit a short "thank you" state plays, then the
     visitor goes to the thank-you page (that page is what counts the
     Google Ads / GA4 conversion, so the redirect must stay).

   Name + mobile are still the only required fields, and the lead still goes
   through lib/popupLead.js exactly like before (SMS → TeleCRM → email + Make).
   No pricing wording here on purpose — the site does not advertise pricing. */

import { useEffect, useId, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { THANK_YOU_SERVICE } from '@/lib/formConfig';
import { normalizeIndianMobile } from '@/lib/sms';
import { submitPopupLead } from '@/lib/popupLead';
import { trackEvent, trackFormError } from '@/lib/formTracking';
import { GOOGLE_RATING, TESTIMONIALS } from '@/components/landing/proof';
import styles from './LeadPopup.module.css';

// `crm` is the label stored in TeleCRM — unchanged from the old dropdown, so
// existing CRM reports and filters keep working.
const POPUP_SERVICES = [
  { value: 'whatsapp-api',     label: 'WhatsApp API', crm: 'WhatsApp Business API', icon: 'bi-whatsapp' },
  { value: 'bulk-sms',         label: 'Bulk SMS',     crm: 'Bulk SMS',              icon: 'bi-chat-dots' },
  { value: 'rcs',              label: 'RCS',          crm: 'RCS Messaging',         icon: 'bi-stars' },
  { value: 'voice',            label: 'Voice / IVR',  crm: 'Voice / IVR',           icon: 'bi-telephone-fill' },
  { value: 'otp',              label: 'OTP SMS',      crm: 'OTP SMS',               icon: 'bi-shield-lock-fill' },
  { value: 'whatsapp-chatbot', label: 'Chatbot',      crm: 'WhatsApp Chatbot',      icon: 'bi-robot' },
];

const CALL_TIMES = ['As soon as possible', 'Today evening', 'Tomorrow'];

// Headline per page (keyed by the service the page is about).
const HEADLINES = {
  'whatsapp-api':     'See WhatsApp API working for your business',
  'whatsapp-chatbot': 'See a WhatsApp chatbot built for your business',
  'bulk-sms':         'See Bulk SMS working for your business',
  'rcs':              'See RCS messaging in your brand’s colours',
  'voice':            'See AI voice calls working for your business',
  'otp':              'Get your OTP delivery sorted in one call',
};
const DEFAULT_HEADLINE = 'Talk to a messaging expert';

const PROOF_POINTS = [
  { icon: 'bi-patch-check',           text: 'Official Meta Business Partner' },
  { icon: 'bi-shield-check',          text: 'DLT-registered SMS sending' },
  { icon: 'bi-lightning-charge-fill', text: 'Go live in 48 hours' },
  { icon: 'bi-headset',               text: 'India-based support team' },
];

// One real, word-for-word Google review (never invent one — see proof.js).
const REVIEW = TESTIMONIALS.find((t) => t.source === 'google') || null;

const SUCCESS_MS = 1500;   // how long the "thank you" state shows before moving on

export default function LeadPopupPanel({ desktop, trigger, source, defaultService = '', onClose, onDone }) {
  const router  = useRouter();
  const id      = useId();
  const cardRef = useRef(null);
  const nameRef = useRef(null);
  const [name,     setName]     = useState('');
  const [phone,    setPhone]    = useState('');
  const [service,  setService]  = useState(defaultService);
  const [callTime, setCallTime] = useState('');
  const [errors,   setErrors]   = useState({});
  const [status,   setStatus]   = useState('idle');   // idle | sending | success | test
  const [apiError, setApiError] = useState('');

  // Esc closes; desktop focuses the first field (on phones that would pop
  // the keyboard over the page) and keeps Tab inside the dialog; Intercom's
  // bubble is hidden while open.
  useEffect(() => {
    if (desktop) nameRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key !== 'Tab' || !desktop || !cardRef.current) return;
      const items = cardRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled])',
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('ojv-popup-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('ojv-popup-open');
    };
  }, [desktop, onClose]);

  // After the thank-you state: go to the thank-you page (live site), or show
  // the "nothing was sent" note (localhost test run).
  const liveRef = useRef(false);
  useEffect(() => {
    if (status !== 'success') return undefined;
    const timer = setTimeout(() => {
      if (liveRef.current) { onClose(); router.push(THANK_YOU_SERVICE); }
      else setStatus('test');
    }, SUCCESS_MS);
    return () => clearTimeout(timer);
  }, [status, onClose, router]);

  const phoneValid = !!normalizeIndianMobile(phone);

  async function submit(e) {
    e.preventDefault();
    if (status !== 'idle') return;
    const errs = {};
    if (name.trim().length < 2) errs.name = 'Please enter your name.';
    if (!phoneValid) errs.phone = 'Enter a 10-digit mobile number.';
    setErrors(errs);
    if (Object.keys(errs).length) { trackFormError(source, Object.keys(errs)); return; }

    setStatus('sending'); setApiError('');
    const serviceLabel = POPUP_SERVICES.find((s) => s.value === service)?.crm || '';
    const res = await submitPopupLead({ name, phone, service, serviceLabel, callTime, source });
    if (!res.ok) { setStatus('idle'); setApiError(res.error); return; }
    trackEvent('popup_submit', { popup_trigger: trigger, form_name: source, call_time: callTime || 'not_set' });
    onDone();
    liveRef.current = !res.test;
    setStatus('success');
  }

  const sending  = status === 'sending';
  const headline = HEADLINES[defaultService] || DEFAULT_HEADLINE;
  const title    = trigger === 'exit_intent' ? `Before you go — ${headline.charAt(0).toLowerCase()}${headline.slice(1)}` : headline;
  const firstName = name.trim().split(/\s+/)[0] || '';

  return (
    <div className={desktop ? styles.backdrop : styles.dock}
      onMouseDown={desktop ? (e) => { if (e.target === e.currentTarget) onClose(); } : undefined}>
      <div ref={cardRef} className={styles.card} role="dialog" aria-modal={desktop ? 'true' : undefined}
        aria-labelledby={`${id}-title`} aria-describedby={`${id}-sub`}>

        {/* ── Brand panel (desktop only) ── */}
        <aside className={styles.brand} aria-label="Why Ojiva AI">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ojiva-wordmark-white.v1.webp" alt="Ojiva AI" width={132} height={40} className={styles.brandLogo} />
          <p className={styles.brandLead}>One platform for WhatsApp, SMS, RCS and voice.</p>
          <ul className={styles.points}>
            {PROOF_POINTS.map(({ icon, text }) => (
              <li key={text}><i className={`bi ${icon}`} aria-hidden="true" />{text}</li>
            ))}
          </ul>
          {REVIEW && (
            <figure className={styles.review}>
              <blockquote>&ldquo;{REVIEW.quote}&rdquo;</blockquote>
              <figcaption>{REVIEW.name} · Google review</figcaption>
            </figure>
          )}
          <a className={styles.rating} href={GOOGLE_RATING.url} target="_blank" rel="noopener noreferrer">
            <span className={styles.stars} aria-hidden="true">★★★★★</span>
            <span>{GOOGLE_RATING.rating} on Google · {GOOGLE_RATING.count} reviews</span>
          </a>
        </aside>

        {/* ── Form panel ── */}
        <div className={styles.main}>
          <span className={styles.handle} aria-hidden="true" />
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          {status === 'test' && (
            <>
              <h2 id={`${id}-title`} className={styles.title}>Test only — nothing was sent</h2>
              <p id={`${id}-sub`} className={styles.sub}>On localhost the popup creates no TeleCRM lead, SMS, email or Make.com run (the data it would send is in the browser console). On the live site this lead goes to TeleCRM and the visitor lands on the thank-you page.</p>
              <button type="button" className={styles.submit} onClick={onClose}>Close</button>
            </>
          )}

          {status === 'success' && (
            <div className={styles.success} role="status" aria-live="polite">
              <span className={styles.tick} aria-hidden="true">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
              </span>
              <h2 id={`${id}-title`} className={styles.title}>Thank you{firstName ? `, ${firstName}` : ''}!</h2>
              <p id={`${id}-sub`} className={styles.sub}>
                Your request is in. Our expert will call you{callTime ? ` — ${callTime.toLowerCase()}` : ' shortly'}.
              </p>
            </div>
          )}

          {(status === 'idle' || status === 'sending') && (
            <>
              <span className={styles.eyebrow}>Free demo · No obligation</span>
              <h2 id={`${id}-title`} className={styles.title}>{title}</h2>
              <p id={`${id}-sub`} className={styles.sub}>Share your number — our expert calls you back, usually within 2 hours, with a live demo for your use case.</p>

              <form onSubmit={submit} noValidate aria-label="Request a free demo and a callback">
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor={`${id}-name`}>Your name</label>
                    <input ref={nameRef} id={`${id}-name`} name="name" type="text" autoComplete="name" placeholder="Full name"
                      className={`${styles.input}${errors.name ? ` ${styles.invalid}` : ''}`}
                      value={name} onChange={(e) => setName(e.target.value)} disabled={sending}
                      aria-invalid={!!errors.name} aria-describedby={errors.name ? `${id}-name-err` : undefined} />
                    {errors.name && <span id={`${id}-name-err`} className={styles.err}>{errors.name}</span>}
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor={`${id}-phone`}>Mobile number</label>
                    <div className={`${styles.phone}${errors.phone ? ` ${styles.invalid}` : ''}${phoneValid ? ` ${styles.valid}` : ''}`}>
                      <span aria-hidden="true">+91</span>
                      <input id={`${id}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="10 digits"
                        value={phone} onChange={(e) => setPhone(e.target.value)} disabled={sending}
                        aria-invalid={!!errors.phone} aria-describedby={errors.phone ? `${id}-phone-err` : undefined} />
                      {phoneValid && (
                        <i className={`bi bi-check-circle-fill ${styles.phoneOk}`} role="img" aria-label="Valid number" />
                      )}
                    </div>
                    {errors.phone && <span id={`${id}-phone-err`} className={styles.err}>{errors.phone}</span>}
                  </div>
                </div>

                <div className={styles.field}>
                  <span className={styles.label} id={`${id}-svc`}>Interested in <span>(optional)</span></span>
                  <div className={styles.chips} role="radiogroup" aria-labelledby={`${id}-svc`}>
                    {POPUP_SERVICES.map((s) => (
                      <button key={s.value} type="button" role="radio" aria-checked={service === s.value}
                        className={`${styles.chip}${service === s.value ? ` ${styles.chipOn}` : ''}`}
                        onClick={() => setService(service === s.value ? '' : s.value)} disabled={sending}>
                        <i className={`bi ${s.icon}`} aria-hidden="true" />{s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.field}>
                  <span className={styles.label} id={`${id}-time`}>When should we call? <span>(optional)</span></span>
                  <div className={styles.chips} role="radiogroup" aria-labelledby={`${id}-time`}>
                    {CALL_TIMES.map((t) => (
                      <button key={t} type="button" role="radio" aria-checked={callTime === t}
                        className={`${styles.chip}${callTime === t ? ` ${styles.chipOn}` : ''}`}
                        onClick={() => setCallTime(callTime === t ? '' : t)} disabled={sending}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit" className={styles.submit} disabled={sending}>
                  {sending ? 'Sending…' : <>Book My Free Demo <span className="btn-arrow" aria-hidden="true">→</span></>}
                </button>
                {apiError && <p className={styles.apiError} role="alert">{apiError} <a href="tel:+918431086185">Call us</a>.</p>}
                <p className={styles.trust}><span>✓ Official Meta BSP</span><span>✓ DLT registered</span><span>✓ No obligation</span></p>
                <p className={styles.consent}>
                  By submitting, you agree to the <a href="/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and{' '}
                  <a href="/terms/" target="_blank" rel="noopener noreferrer">Terms</a>, and to be contacted by Ojiva AI.
                </p>
              </form>
              <button type="button" className={styles.noThanks} onClick={onClose}>No thanks</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
