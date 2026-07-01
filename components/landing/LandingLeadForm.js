'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { WEB3_ACCESS_KEY, MAKE_HOOK_LANDING, THANK_YOU_LANDING } from '@/lib/formConfig';

const TELECRM_TOKEN = '9a518e10-1d74-485d-ac8e-479f37d5c4bf1782817303004:3abb1a1f-2527-49e0-a4a9-ec7361c2b4a6';
const TELECRM_API   = 'https://next-api.telecrm.in/enterprise/6a3cfd845aaa3fd96c26da19/autoupdatelead';
function fireTeleCRM(name, phone, email) {
  let p = String(phone || '').replace(/\D/g, '');
  if (p.length === 13 && p.startsWith('091')) p = p.slice(3);
  if (p.length === 12 && p.startsWith('91'))  p = p.slice(2);
  if (p.length === 11 && p.startsWith('0'))   p = p.slice(1);
  if (p.length !== 10 || !/^[6-9]/.test(p)) return;
  fetch(TELECRM_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TELECRM_TOKEN}` },
    body: JSON.stringify({ fields: { name: String(name || '').trim() || 'Unknown', phone: p, email: String(email || '').trim().toLowerCase(), lead_source: 5 } }),
  }).catch(() => {});
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
  company: v => !v.trim()  ? 'Required.' : '',
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
function useCountdown() {
  const [secs, setSecs] = useState(23 * 3600 + 44 * 60 + 6);
  useEffect(() => {
    const t = setInterval(() => setSecs(s => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const h = String(Math.floor(secs / 3600)).padStart(2, '0');
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

/* ─── Activity feed ─────────────────────────────────────────── */
function useActivity() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % ACTIVITY.length), 6000);
    return () => clearInterval(t);
  }, []);
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
}) {
  const router    = useRouter();
  const countdown = useCountdown();
  const activity  = useActivity();

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
    if (touched[k] && RULES[k]) setErrors(p => ({ ...p, [k]: RULES[k](val) }));
  }, [touched]);

  const handleBlur = useCallback((k) => () => {
    setTouched(p => ({ ...p, [k]: true }));
    if (RULES[k]) setErrors(p => ({ ...p, [k]: RULES[k](form[k]) }));
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
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

    if (Object.values(errs).some(Boolean) || volErr) return;
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
      fireTeleCRM(payload.name, payload.phone, payload.email);
      // const [w, m] = await Promise.allSettled([
      //   fetch('https://api.web3forms.com/submit', {
      //     method:  'POST',
      //     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      //     body:    JSON.stringify({ access_key: WEB3_KEY, subject: `Lead — ojiva.ai/${source}`, from_name: 'Ojiva AI Landing Page', redirect: 'false', ...payload }),
      //   }).then(r => r.json()),
      //   fetch(makeHook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }),
      // ]);
      // if ((w.status === 'fulfilled' && w.value?.success) || (m.status === 'fulfilled' && m.value?.ok)) {
      router.push(thankYouUrl);
      // } else {
      //   setApiError('Something went wrong. Please try again or call us.');
      //   setSubmitting(false);
      // }
    } catch {
      setApiError('Network error. Please try again.');
      setSubmitting(false);
    }
  };

  const isErr = k => !!touched[k] && !!errors[k];
  const isOk  = k => !!touched[k] && !errors[k] && !!form[k];

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
