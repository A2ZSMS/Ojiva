'use client';

/* The lead popup window (loaded only when the popup is about to open — see
   LeadPopup.js). Name + mobile required, service optional, same basic
   validation as the other forms. Submits through lib/popupLead.js. */

import { useEffect, useId, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { THANK_YOU_SERVICE } from '@/lib/formConfig';
import { normalizeIndianMobile } from '@/lib/sms';
import { submitPopupLead } from '@/lib/popupLead';
import { trackEvent, trackFormError } from '@/lib/formTracking';
import styles from './LeadPopup.module.css';

const POPUP_SERVICES = [
  { value: '',                 label: 'Not sure yet' },
  { value: 'whatsapp-api',     label: 'WhatsApp Business API' },
  { value: 'whatsapp-chatbot', label: 'WhatsApp Chatbot' },
  { value: 'bulk-sms',         label: 'Bulk SMS' },
  { value: 'otp',              label: 'OTP SMS' },
  { value: 'rcs',              label: 'RCS Messaging' },
  { value: 'voice',            label: 'Voice / IVR' },
];

export default function LeadPopupPanel({ desktop, trigger, source, defaultService = '', onClose, onDone }) {
  const router  = useRouter();
  const id      = useId();
  const nameRef = useRef(null);
  const [name,     setName]     = useState('');
  const [phone,    setPhone]    = useState('');
  const [service,  setService]  = useState(defaultService);
  const [errors,   setErrors]   = useState({});
  const [status,   setStatus]   = useState('idle');   // idle | sending | test
  const [apiError, setApiError] = useState('');

  // Esc closes; desktop focuses the first field (on phones that would pop
  // the keyboard over the page); Intercom's bubble is hidden while open.
  useEffect(() => {
    if (desktop) nameRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('ojv-popup-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('ojv-popup-open');
    };
  }, [desktop, onClose]);

  async function submit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    const errs = {};
    if (name.trim().length < 2) errs.name = 'Please enter your name.';
    if (!normalizeIndianMobile(phone)) errs.phone = 'Enter a 10-digit mobile number.';
    setErrors(errs);
    if (Object.keys(errs).length) { trackFormError(source, Object.keys(errs)); return; }

    setStatus('sending'); setApiError('');
    const serviceLabel = service ? POPUP_SERVICES.find(s => s.value === service)?.label : '';
    const res = await submitPopupLead({ name, phone, service, serviceLabel, source });
    if (!res.ok) { setStatus('idle'); setApiError(res.error); return; }
    trackEvent('popup_submit', { popup_trigger: trigger, form_name: source });
    onDone();
    if (res.test) { setStatus('test'); return; }
    router.push(THANK_YOU_SERVICE);
  }

  const sending = status === 'sending';
  const title = trigger === 'exit_intent' ? 'Before you go — get pricing in 2 minutes' : 'Get pricing in 2 minutes';

  return (
    <div className={desktop ? styles.backdrop : styles.dock}
      onMouseDown={desktop ? (e) => { if (e.target === e.currentTarget) onClose(); } : undefined}>
      <div className={styles.card} role="dialog" aria-modal={desktop ? 'true' : undefined}
        aria-labelledby={`${id}-title`} aria-describedby={`${id}-sub`}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>

        {status === 'test' ? (
          <>
            <h2 id={`${id}-title`} className={styles.title}>Test only — nothing was sent</h2>
            <p id={`${id}-sub`} className={styles.sub}>On localhost the popup creates no TeleCRM lead, SMS, email or Make.com run. On the live site this lead goes to TeleCRM and the visitor lands on the thank-you page.</p>
            <button type="button" className={styles.submit} onClick={onClose}>Close</button>
          </>
        ) : (
          <>
            <span className={styles.eyebrow}>Free demo + pricing</span>
            <h2 id={`${id}-title`} className={styles.title}>{title}</h2>
            <p id={`${id}-sub`} className={styles.sub}>Share your number — our expert calls you back, usually within 2 hours, with a demo and clear pricing.</p>

            <form onSubmit={submit} noValidate aria-label="Get pricing and a free demo">
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor={`${id}-name`}>Your name</label>
                  <input ref={nameRef} id={`${id}-name`} name="name" type="text" autoComplete="name" placeholder="Full name"
                    className={`${styles.input}${errors.name ? ` ${styles.invalid}` : ''}`}
                    value={name} onChange={e => setName(e.target.value)} disabled={sending}
                    aria-invalid={!!errors.name} aria-describedby={errors.name ? `${id}-name-err` : undefined} />
                  {errors.name && <span id={`${id}-name-err`} className={styles.err}>{errors.name}</span>}
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor={`${id}-phone`}>Mobile number</label>
                  <div className={`${styles.phone}${errors.phone ? ` ${styles.invalid}` : ''}`}>
                    <span aria-hidden="true">+91</span>
                    <input id={`${id}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="10 digits"
                      value={phone} onChange={e => setPhone(e.target.value)} disabled={sending}
                      aria-invalid={!!errors.phone} aria-describedby={errors.phone ? `${id}-phone-err` : undefined} />
                  </div>
                  {errors.phone && <span id={`${id}-phone-err`} className={styles.err}>{errors.phone}</span>}
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor={`${id}-service`}>Interested in <span>(optional)</span></label>
                <select id={`${id}-service`} name="service" className={styles.select}
                  value={service} onChange={e => setService(e.target.value)} disabled={sending}>
                  {POPUP_SERVICES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                </select>
              </div>

              <button type="submit" className={styles.submit} disabled={sending}>
                {sending ? 'Sending…' : 'Get My Pricing →'}
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
  );
}
