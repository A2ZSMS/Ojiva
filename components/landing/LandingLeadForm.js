'use client';

import { useState, useCallback, useEffect, useId, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { WEB3_ACCESS_KEY, MAKE_HOOK_LANDING, THANK_YOU_LANDING, TEST_MODE_SMS_ONLY } from '@/lib/formConfig';
import { validateLead } from '@/lib/leadQuality';
import { sendLeadSms } from '@/lib/sms';
import { getAttribution, fireOpenAiLeadCreated } from '@/lib/attribution';

const TELECRM_TOKEN = '9a518e10-1d74-485d-ac8e-479f37d5c4bf1782817303004:3abb1a1f-2527-49e0-a4a9-ec7361c2b4a6';
const TELECRM_API   = 'https://next-api.telecrm.in/enterprise/6a3cfd845aaa3fd96c26da19/autoupdatelead';
function fireTeleCRM({ name, phone, email, company, service, source, message, volume, industry, companySize, preferredTime, subject, priority, utmSource, utmMedium, utmCampaign, utmTerm, utmContent, gclid, fbclid, landingUrl, referrerUrl }) {
  let p = String(phone || '').replace(/\D/g, '');
  if (p.length === 13 && p.startsWith('091')) p = p.slice(3);
  if (p.length === 12 && p.startsWith('91'))  p = p.slice(2);
  if (p.length === 11 && p.startsWith('0'))   p = p.slice(1);
  if (p.length !== 10 || !/^[6-9]/.test(p)) return;
  const fields = {
    name:  String(name || '').trim() || 'Unknown',
    phone: p,
    email: String(email || '').trim().toLowerCase(),
  };
  const put = (val, keys) => { if (val === undefined || val === null || val === '') return; const v = typeof val === 'number' ? val : String(val).trim(); if (v === '' && v !== 0) return; keys.forEach(k => { fields[k] = v; }); };
  put(company,       ['companyName', 'company_name', 'company', 'Company Name']);
  put(service,       ['serviceInterested', 'service_interested', 'service', 'Service Interested']);
  put(source,        ['source', 'Source']);
  put(message,       ['remark', 'Remark']);
  put(volume,        ['monthlyVolume', 'monthly_volume', 'monthly customer messaging volume']);
  put(industry,      ['Industry', 'industry']);
  put(companySize,   ['companySize', 'company_size', 'Company Size']);
  put(preferredTime, ['preferredTime', 'preferred_time', 'Preferred Time']);
  put(subject,       ['Subject', 'subject']);
  put(priority,      ['Priority', 'priority']);
  put(utmSource,     ['utmSource',   'utm_source',   'UTM Source']);
  put(utmMedium,     ['utmMedium',   'utm_medium',   'UTM Medium']);
  put(utmCampaign,   ['utmCampaign', 'utm_campaign', 'UTM Campaign']);
  put(utmTerm,       ['utmTerm',     'utm_term',     'UTM Term']);
  put(utmContent,    ['utmContent',  'utm_content',  'UTM Content']);
  put(gclid,         ['gclid',       'googleClickId','Google Click ID']);
  put(fbclid,        ['fbclid',      'metaClickId',  'Meta Click ID']);
  put(landingUrl,    ['landingUrl',  'landing_url',  'Landing URL']);
  put(referrerUrl,   ['referrerUrl', 'referrer_url', 'Referrer URL']);
  fetch(TELECRM_API, {
    method: 'POST', keepalive: true,
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TELECRM_TOKEN}` },
    body: JSON.stringify({ fields }),
  }).then(r => r.text()).then(t => console.log('[TeleCRM] status OK, response:', t)).catch(e => console.error('[TeleCRM] error:', e));
}

/* ─── Config ──────────────────────────────────────────────── */
const WEB3_KEY  = WEB3_ACCESS_KEY;
const MAKE_HOOK = MAKE_HOOK_LANDING;
const THANK_YOU = THANK_YOU_LANDING;

const DEFAULT_SERVICES = [
  { value: '',               label: 'Select a service' },
  { value: 'whatsapp-api',   label: 'WhatsApp Business API' },
  { value: 'chatbot',        label: 'WhatsApp Chatbot' },
  { value: 'api-chatbot',    label: 'API + Chatbot Combo' },
  { value: 'bulk-messaging', label: 'Bulk Messaging Only' },
  { value: 'other',          label: 'Other' },
];

const ACTIVITY = [
  { name: 'Priya', city: 'Mumbai',    ago: '4 min ago'  },
  { name: 'Rahul', city: 'Delhi',     ago: '9 min ago'  },
  { name: 'Sneha', city: 'Bangalore', ago: '14 min ago' },
  { name: 'Amit',  city: 'Hyderabad', ago: '18 min ago' },
  { name: 'Kavya', city: 'Chennai',   ago: '23 min ago' },
];

/* ─── Validators ───────────────────────────────────────────── */
const RULES = {
  name:    v => !v.trim()  ? 'Required.' : v.trim().length < 2 ? 'Enter full name.' : '',
  email:   v => !v.trim()  ? 'Required.' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? 'Invalid email.' : '',
  phone:   v => {
    const d = v.replace(/[\s\-().+]/g, '');
    if (!d)                           return 'Required.';
    if (!/^[6-9][0-9]{9}$/.test(d)) return 'Enter 10-digit Indian mobile.';
    return '';
  },
  company: v => !v.trim()  ? 'Required.' : v.trim().length < 2 ? 'Enter company name.' : '',
  service: v => !v         ? 'Please select a service.' : '',
  agree:   v => !v         ? 'Please agree to continue.' : '',
};

function validateAll(f) {
  const e = {};
  Object.keys(RULES).forEach(k => { e[k] = RULES[k](f[k]); });
  return e;
}

const REQUIRED  = ['name', 'email', 'phone', 'company', 'service'];
const EMPTY_ERR = { name:'', email:'', phone:'', company:'', service:'', agree:'' };

/* ─── Countdown ─────────────────────────────────────────────── */
function useCountdown(enabled = true) {
  const [secs, setSecs] = useState(23 * 3600 + 44 * 60 + 6);
  useEffect(() => {
    if (!enabled) return;
    const t = setInterval(() => setSecs(s => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [enabled]);
  const h = String(Math.floor(secs / 3600)).padStart(2, '0');
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

/* ─── Activity feed ─────────────────────────────────────────── */
function useActivity(enabled = true) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const t = setInterval(() => setIdx(i => (i + 1) % ACTIVITY.length), 6000);
    return () => clearInterval(t);
  }, [enabled]);
  return ACTIVITY[idx];
}

/* ─── Reusable input/select with left icon ───────────────────── */
function IField({ icon, error, valid, ...props }) {
  return (
    <div className={`llf-iw${error ? ' err' : valid ? ' ok' : ''}`}>
      <i className={`bi ${icon} llf-ii`} />
      <input className="llf-fi" {...props} />
      {valid && <i className="bi bi-check-lg llf-ok" />}
    </div>
  );
}

function ISelect({ icon, error, valid, children, ...props }) {
  return (
    <div className={`llf-iw${error ? ' err' : valid ? ' ok' : ''}`}>
      <i className={`bi ${icon} llf-ii`} />
      <select className="llf-fs" {...props}>{children}</select>
    </div>
  );
}

/* ─── Component ──────────────────────────────────────────────── */
export default function LandingLeadForm({
  source        = 'whatsapp-api',
  title         = 'Book a Demo & Get Pricing',
  subtitle      = '30 seconds · Expert contacts you within 2 hours',
  submitLabel   = 'Book My Demo & Get Pricing →',
  thankYouUrl   = THANK_YOU,
  spotsLeft     = 3,
  services      = DEFAULT_SERVICES,
  serviceLabel  = 'Service',
  messageLabel  = 'Message',
  volumeOptions = null,
  volumeLabel   = 'Monthly SMS Requirement',
  scarcityText  = null,
  agreeBrand    = 'Ojiva AI',
  makeHook      = MAKE_HOOK,
  accentColor   = null,  /* When set, overrides the default green of the countdown bar + submit button */
  compact       = false,
  introLabel    = 'YOUR BUSINESS. YOUR WALKTHROUGH.',
  nextStepText  = 'Our team contacts you to discuss your use case and arrange your demo.',
  formLabel     = 'Request a WhatsApp Business API demo',
}) {
  const router    = useRouter();
  const countdown = useCountdown(!compact);
  const activity  = useActivity(!compact);
  const formId = useId();
  const formRef = useRef(null);
  const inFlight = useRef(false);
  const fieldError = useCallback((key, value) => RULES[key](value), []);

  const [form,         setForm]         = useState({ name:'', email:'', phone:'', company:'', service:'', message:'', agree:false });
  const [volume,       setVolume]       = useState('');
  const [volumeErr,    setVolumeErr]    = useState('');
  const [volumeTouched, setVolumeTouched] = useState(false);
  const [errors,       setErrors]       = useState(EMPTY_ERR);
  const [touched,      setTouched]      = useState({});
  const [submitting,   setSubmitting]   = useState(false);
  const [apiError,     setApiError]     = useState('');

  const completePct = Math.round(
    (REQUIRED.filter(k => form[k] && !RULES[k](form[k])).length / REQUIRED.length) * 100
  );

  const handleChange = useCallback((k) => (e) => {
    const val = k === 'agree' ? e.target.checked : e.target.value;
    setForm(p => ({ ...p, [k]: val }));
    if (touched[k] && RULES[k]) setErrors(p => ({ ...p, [k]: fieldError(k, val) }));
  }, [touched, fieldError]);

  const handleBlur = useCallback((k) => () => {
    setTouched(p => ({ ...p, [k]: true }));
    if (RULES[k]) setErrors(p => ({ ...p, [k]: fieldError(k, form[k]) }));
  }, [form, fieldError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inFlight.current) return;
    setTouched({ name:true, email:true, phone:true, company:true, service:true, agree:true });
    const errs = validateAll(form);
    setErrors(errs);

    /* ── Volume dropdown validation (only when volumeOptions provided) ── */
    let volErr = '';
    if (volumeOptions) {
      setVolumeTouched(true);
      if (!volume) volErr = 'Please select monthly volume.';
      setVolumeErr(volErr);
    }

    if (Object.values(errs).some(Boolean) || volErr) {
      if (compact) {
        const firstError = Object.keys(errs).find(key => errs[key]) || (volErr ? 'monthly_volume' : undefined);
        const input = formRef.current?.elements.namedItem(firstError);
        if (input) {
          const details = input.closest('details');
          if (details) details.open = true;
          input.focus();
        }
      }
      return;
    }

    const check = validateLead({
      name: form.name, email: form.email, company: form.company, message: form.message,
    });
    if (!check.ok) {
      console.warn('[LeadQuality] rejected:', check.reason);
      setApiError(check.reason);
      return;
    }

    inFlight.current = true;
    setSubmitting(true); setApiError('');

    const payload = {
      name:    form.name.trim(),
      email:   form.email.trim().toLowerCase(),
      phone:   form.phone.trim(),
      company: form.company.trim(),
      service: form.service,
      message: form.message.trim(),
      ...(volumeOptions ? { monthly_volume: volume } : {}),
      source,
      submitted_at: new Date().toISOString(),
    };

    try {
      const attr = getAttribution();
      // ── Welcome SMS ────────────────────────────────────────────────
      // Posts to the same-origin PHP proxy (public/api/send-sms.php);
      // the gateway API key stays on the server, never in this bundle.
      const smsResult = await sendLeadSms({ name: payload.name, phone: payload.phone });
      if (TEST_MODE_SMS_ONLY) {
        // ⚠️ TESTING: only the SMS fires. Flip TEST_MODE_SMS_ONLY to false
        // in lib/formConfig.js to restore TeleCRM + pixel + Web3Forms + Make.
        console.warn('[SMS test]', smsResult);  // warn, not info: the production build strips console.info
        if (smsResult.ok) {
          router.push(thankYouUrl);
        } else {
          inFlight.current = false;
          setSubmitting(false);
          setApiError(`Test SMS failed: ${smsResult.error}. See the console and the Network tab.`);
        }
        return;
      }
      if (!smsResult.ok) console.warn('[SMS] not sent:', smsResult.error);
      fireTeleCRM({
        name:        payload.name,
        phone:       payload.phone,
        email:       payload.email,
        company:     payload.company,
        service:     payload.service || 'General Enquiry',
        source:      source,
        message:     payload.message,
        volume:      volume,
        utmSource:   attr.utm_source,
        utmMedium:   attr.utm_medium,
        utmCampaign: attr.utm_campaign,
        utmTerm:     attr.utm_term,
        utmContent:  attr.utm_content,
        gclid:       attr.gclid,
        fbclid:      attr.fbclid,
        landingUrl:  attr._first_landing_url,
        referrerUrl: attr._first_referrer,
      });
      if (!compact) fireOpenAiLeadCreated();
      const [w, m] = await Promise.allSettled([
        fetch('https://api.web3forms.com/submit', {
          method:  'POST',
          ...(compact ? { signal: AbortSignal.timeout(15000) } : {}),
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body:    JSON.stringify({ access_key: WEB3_KEY, subject: `Lead — ojiva.ai/${source}`, from_name: 'Ojiva AI Landing Page', redirect: 'false', ...payload }),
        }).then(r => r.json()),
        fetch(makeHook, { method: 'POST', ...(compact ? { signal: AbortSignal.timeout(15000) } : {}), headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }),
      ]);
      if ((w.status === 'fulfilled' && w.value?.success) || (m.status === 'fulfilled' && m.value?.ok)) {
        if (compact) fireOpenAiLeadCreated();
        router.push(thankYouUrl);
      } else {
        inFlight.current = false;
        setApiError('Something went wrong. Please try again or call us.');
        setSubmitting(false);
      }
    } catch {
      inFlight.current = false;
      setApiError('Network error. Please try again.');
      setSubmitting(false);
    }
  };

  const isErr = k => !!touched[k] && !!errors[k];
  const isOk  = k => !!touched[k] && !errors[k] && !!form[k];

  if (compact) {
    const input = (key, label, type, placeholder, autoComplete) => (
      <div className="wa-field">
        <label htmlFor={`${formId}-${key}`}>{label}<span aria-hidden="true"> *</span></label>
        <input id={`${formId}-${key}`} name={key} type={type} placeholder={placeholder}
          autoComplete={autoComplete} required disabled={submitting}
          value={form[key]} onChange={handleChange(key)} onBlur={handleBlur(key)}
          aria-invalid={isErr(key)} aria-describedby={isErr(key) ? `${formId}-${key}-error` : undefined} />
        {isErr(key) && <span id={`${formId}-${key}-error`} className="wa-error">{errors[key]}</span>}
      </div>
    );
    return (
      <form ref={formRef} className="wa-enquiry" onSubmit={handleSubmit} noValidate aria-label={formLabel} aria-busy={submitting}>
        <div className="wa-form-intro"><span>{introLabel}</span><h2>{title}</h2><p>{subtitle}</p></div>
        <div className="wa-field-row">
          {input('name', 'Your name', 'text', 'Full name', 'name')}
          {input('phone', 'Business phone', 'tel', '10-digit mobile number', 'tel-national')}
        </div>
        <div className={volumeOptions ? 'wa-field-row' : 'wa-field-stack'}>
          {input('email', 'Email address', 'email', 'you@company.com', 'email')}
          {input('company', 'Company name', 'text', 'Your business name', 'organization')}
        </div>
        <div className={volumeOptions ? 'wa-field-row' : undefined}>
        <div className="wa-field"><label htmlFor={`${formId}-service`}>{serviceLabel} <span aria-hidden="true">*</span></label>
          <select id={`${formId}-service`} name="service" required disabled={submitting} value={form.service} onChange={handleChange('service')} onBlur={handleBlur('service')} aria-invalid={isErr('service')} aria-describedby={isErr('service') ? `${formId}-service-error` : undefined}>
            {services.map(service => <option key={service.value} value={service.value}>{service.label}</option>)}
          </select>
          {isErr('service') && <span id={`${formId}-service-error`} className="wa-error">{errors.service}</span>}
        </div>
        {volumeOptions && <div className="wa-field"><label htmlFor={`${formId}-volume`}>{volumeLabel} <span aria-hidden="true">*</span></label>
          <select id={`${formId}-volume`} name="monthly_volume" required disabled={submitting} value={volume} onChange={event => { setVolume(event.target.value); if (volumeTouched) setVolumeErr(event.target.value ? '' : 'Please select monthly volume.'); }} onBlur={() => { setVolumeTouched(true); setVolumeErr(volume ? '' : 'Please select monthly volume.'); }} aria-invalid={volumeTouched && !!volumeErr} aria-describedby={volumeTouched && volumeErr ? `${formId}-volume-error` : undefined}>
            {volumeOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>{volumeTouched && volumeErr && <span className="wa-error" id={`${formId}-volume-error`}>{volumeErr}</span>}
        </div>}
        </div>
        <details className="wa-extra"><summary>Add your requirements <span>(optional)</span></summary>
          <div className="wa-field"><label htmlFor={`${formId}-message`}>Anything we should know?</label><textarea id={`${formId}-message`} name="message" rows={2} disabled={submitting} value={form.message} onChange={handleChange('message')} placeholder="Your use case, team size or monthly volume" /></div>
        </details>
        <label className="wa-consent"><input name="agree" type="checkbox" required checked={form.agree} onChange={handleChange('agree')} onBlur={handleBlur('agree')} disabled={submitting} aria-invalid={isErr('agree')} aria-describedby={isErr('agree') ? `${formId}-agree-error` : undefined} /><span>I agree to the <a href="/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="/terms/" target="_blank" rel="noopener noreferrer">Terms</a>, and to be contacted by Ojiva AI.</span></label>
        {isErr('agree') && <span id={`${formId}-agree-error`} className="wa-error">{errors.agree}</span>}
        <button type="submit" className="wa-submit" disabled={submitting}>{submitting ? 'Sending your request…' : submitLabel}</button>
        {apiError && <p className="wa-error" role="alert">{apiError} <a href="tel:+918431086185">Call our team</a>.</p>}
        <p className="wa-next-step">What happens next? {nextStepText}</p>
      </form>
    );
  }

  return (
    <div className="llf-card">

      {/* ── 1. Dark countdown bar (green default; override via accentColor) ── */}
      <div
        className="llf-bar-countdown"
        style={accentColor ? { background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)` } : undefined}
      >
        <i className="bi bi-clock-fill" />
        <span className="llf-bar-label">Offer expires in</span>
        <span className="llf-bar-timer">{countdown}</span>
      </div>

      {/* ── 2. Amber scarcity strip ── */}
      <div className="llf-bar-scarcity">
        <span className="llf-dot llf-dot--amber" />
        {scarcityText
          ? scarcityText
          : <>Only <strong>{spotsLeft} setup slots available this month</strong> — secure yours before they&apos;re gone</>
        }
      </div>

      {/* ── 3. Green response strip ── */}
      <div className="llf-bar-response">
        <span className="llf-dot llf-dot--green" />
        Average response time:&nbsp;<strong>under 2 hours</strong>
      </div>

      {/* ── 4. Title ── */}
      <div className="llf-body-head">
        <h3 className="llf-title">{title}</h3>
        <p className="llf-sub">{subtitle}</p>
        {completePct > 0 && (
          <div className="llf-prog">
            <div className="llf-prog-fill" style={{ width: `${completePct}%` }} />
            <span className="llf-prog-pct">{completePct}% complete</span>
          </div>
        )}
      </div>

      {/* ── 5. Form ── */}
      <form onSubmit={handleSubmit} noValidate className="llf-form">

        {/* Full Name */}
        <div className="llf-field">
          <label className="llf-label">Full Name <span className="llf-req">*</span></label>
          <IField icon="bi-person" placeholder="Your Full Name" type="text" autoComplete="name"
            disabled={submitting} value={form.name}
            onChange={handleChange('name')} onBlur={handleBlur('name')}
            error={isErr('name')} valid={isOk('name')} />
          {isErr('name') && <span className="llf-err">{errors.name}</span>}
        </div>

        {/* Email + Phone */}
        <div className="llf-row">
          <div className="llf-field">
            <label className="llf-label">Email <span className="llf-req">*</span></label>
            <IField icon="bi-envelope" placeholder="you@company.com" type="email" autoComplete="email"
              disabled={submitting} value={form.email}
              onChange={handleChange('email')} onBlur={handleBlur('email')}
              error={isErr('email')} valid={isOk('email')} />
            {isErr('email') && <span className="llf-err">{errors.email}</span>}
          </div>
          <div className="llf-field">
            <label className="llf-label">Phone <span className="llf-req">*</span></label>
            <IField icon="bi-telephone" placeholder="10-digit Indian mobile" type="tel" autoComplete="tel"
              disabled={submitting} value={form.phone}
              onChange={handleChange('phone')} onBlur={handleBlur('phone')}
              error={isErr('phone')} valid={isOk('phone')} />
            {isErr('phone') && <span className="llf-err">{errors.phone}</span>}
          </div>
        </div>

        {/* Company + Service */}
        <div className="llf-row">
          <div className="llf-field">
            <label className="llf-label">Company Name <span className="llf-req">*</span></label>
            <IField icon="bi-building" placeholder="Your Company Name" type="text" autoComplete="organization"
              disabled={submitting} value={form.company}
              onChange={handleChange('company')} onBlur={handleBlur('company')}
              error={isErr('company')} valid={isOk('company')} />
            {isErr('company') && <span className="llf-err">{errors.company}</span>}
          </div>
          <div className="llf-field">
            <label className="llf-label">{serviceLabel} <span className="llf-req">*</span></label>
            <ISelect icon="bi-grid" disabled={submitting}
              value={form.service} onChange={handleChange('service')} onBlur={handleBlur('service')}
              error={isErr('service')} valid={isOk('service')}>
              {services.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </ISelect>
            {isErr('service') && <span className="llf-err">{errors.service}</span>}
          </div>
        </div>

        {/* Monthly Volume (optional — only when volumeOptions prop provided) */}
        {volumeOptions && (
          <div className="llf-field">
            <label className="llf-label">{volumeLabel} <span className="llf-req">*</span></label>
            <ISelect icon="bi-graph-up-arrow" disabled={submitting}
              value={volume}
              onChange={(e) => {
                setVolume(e.target.value);
                if (volumeTouched) setVolumeErr(e.target.value ? '' : 'Please select monthly volume.');
              }}
              onBlur={() => {
                setVolumeTouched(true);
                setVolumeErr(volume ? '' : 'Please select monthly volume.');
              }}
              error={volumeTouched && !!volumeErr}
              valid={volumeTouched && !volumeErr && !!volume}>
              {volumeOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </ISelect>
            {volumeTouched && volumeErr && <span className="llf-err">{volumeErr}</span>}
          </div>
        )}

        {/* Message */}
        <div className="llf-field">
          <label className="llf-label">{messageLabel}</label>
          <textarea className="llf-ta"
            placeholder="Tell us about your requirements…"
            rows={2} disabled={submitting}
            value={form.message} onChange={handleChange('message')} />
        </div>

        {/* Checkbox */}
        <div className="llf-ck-row">
          <label className="llf-ck-label">
            <input type="checkbox" className="llf-ck-input"
              checked={form.agree} onChange={handleChange('agree')} onBlur={handleBlur('agree')}
              disabled={submitting} />
            <span className={`llf-ck-box${form.agree ? ' on' : ''}`}>
              {form.agree && <i className="bi bi-check-lg" />}
            </span>
            <span className="llf-ck-text">
              I accept the{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              {' '}and{' '}
              <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
              , and agree to be contacted by {agreeBrand}.{' '}
              <span className="llf-req">*</span>
            </span>
          </label>
          {isErr('agree') && <span className="llf-err">{errors.agree}</span>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="llf-submit"
          disabled={submitting}
          style={accentColor ? {
            background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)`,
            borderColor: accentColor,
            boxShadow: `0 10px 28px ${accentColor}55`,
          } : undefined}
        >
          {submitting
            ? <><span className="spinner-border spinner-border-sm me-2" role="status" />Submitting…</>
            : submitLabel}
        </button>

        {apiError && (
          <div className="llf-api-err">
            <i className="bi bi-exclamation-triangle me-1" />{apiError}{' '}
            <a href="tel:+918431086185">Call us</a>.
          </div>
        )}

      </form>

      {/* ── 6. Privacy note ── */}
      <p className="llf-privacy">
        <i className="bi bi-shield-lock-fill" />
        We never share your details. Your information is 100% secure.
      </p>

      {/* ── 7. Trust badges ── */}
      <div className="llf-trust">
        <span><i className="bi bi-shield-check" /> 256-bit SSL</span>
        <span><i className="bi bi-patch-check-fill" style={{ color:'#22c55e' }} /> Meta Partner</span>
        <span><i className="bi bi-lightning-charge-fill" style={{ color:'#f59e0b' }} /> Reply in 2 hrs</span>
      </div>

      {/* ── 8. Activity feed ── */}
      <div className="llf-act">
        <span className="llf-dot llf-dot--green" />
        <span>
          <strong>{activity.name}</strong> from {activity.city} just booked a demo ·{' '}
          <span className="llf-act-ago">{activity.ago}</span>
        </span>
      </div>

    </div>
  );
}
