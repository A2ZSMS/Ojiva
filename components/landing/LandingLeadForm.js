'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';

/* ─── Config ──────────────────────────────────────────────── */
const WEB3_KEY  = 'b5a4d0e7-4c4c-4ff4-b11b-8026740ac809';
const MAKE_HOOK = 'https://hook.eu1.make.com/oaum1wrp22fic8clfnz1y3aejoxo954e';
const THANK_YOU = '/whatsapp-api-service/thank-you';

const SERVICES = [
  { value: '',              label: 'Select a service' },
  { value: 'whatsapp-api',  label: 'WhatsApp Business API' },
  { value: 'bulk-sms',      label: 'Bulk SMS' },
  { value: 'rcs',           label: 'RCS Messaging' },
  { value: 'otp-sms',       label: 'OTP / Transactional SMS' },
  { value: 'voice',         label: 'AI Voice Calls' },
  { value: 'chatbot',       label: 'WhatsApp Chatbot' },
  { value: 'all',           label: 'All Channels' },
];

/* Recent demo activity — cycles every few seconds */
const ACTIVITY = [
  { name: 'Priya', city: 'Mumbai',    ago: '4 min ago'  },
  { name: 'Rahul', city: 'Delhi',     ago: '9 min ago'  },
  { name: 'Sneha', city: 'Bangalore', ago: '14 min ago' },
  { name: 'Amit',  city: 'Hyderabad', ago: '18 min ago' },
  { name: 'Kavya', city: 'Chennai',   ago: '23 min ago' },
];

/* ─── Validators ──────────────────────────────────────────── */
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

const REQUIRED = ['name', 'email', 'phone', 'company', 'service'];
const EMPTY_ERR = { name:'', email:'', phone:'', company:'', service:'', agree:'' };

/* ─── Countdown (resets to 24 h on mount) ──────────────────── */
function useCountdown() {
  const [secs, setSecs] = useState(23 * 3600 + 47 * 60 + 2);
  useEffect(() => {
    const t = setInterval(() => setSecs(s => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const h  = String(Math.floor(secs / 3600)).padStart(2, '0');
  const m  = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const s  = String(secs % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

/* ─── Activity feed (cycles entries) ───────────────────────── */
function useActivity() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % ACTIVITY.length), 6000);
    return () => clearInterval(t);
  }, []);
  return ACTIVITY[idx];
}

/* ─── Input with left icon ─────────────────────────────────── */
function Field({ label, required, error, children }) {
  return (
    <div className="llf-field">
      {label && (
        <label className="llf-label">
          {label}{required && <span className="llf-req"> *</span>}
        </label>
      )}
      {children}
      {error && <span className="llf-err">{error}</span>}
    </div>
  );
}

function Input({ icon, error, valid, ...props }) {
  return (
    <div className={`llf-input-wrap${error ? ' has-err' : valid ? ' has-ok' : ''}`}>
      {icon && <i className={`bi ${icon} llf-input-icon`} />}
      <input className="llf-input" {...props} />
      {valid && <i className="bi bi-check-lg llf-ok-icon" />}
    </div>
  );
}

function Select({ icon, error, valid, children, ...props }) {
  return (
    <div className={`llf-input-wrap${error ? ' has-err' : valid ? ' has-ok' : ''}`}>
      {icon && <i className={`bi ${icon} llf-input-icon`} />}
      <select className="llf-select" {...props}>{children}</select>
    </div>
  );
}

/* ─── Component ───────────────────────────────────────────── */
export default function LandingLeadForm({
  source      = 'whatsapp-api',
  title       = 'Claim Your Free Demo & Pricing',
  subtitle    = 'Takes 30 seconds · No credit card · Our expert calls you back',
  submitLabel = 'Get My Free Demo & Pricing →',
  thankYouUrl = THANK_YOU,
  spotsLeft   = 3,
}) {
  const router    = useRouter();
  const countdown = useCountdown();
  const activity  = useActivity();

  const [form,       setForm]       = useState({ name:'', email:'', phone:'', company:'', service:'', requirement:'', agree:false });
  const [errors,     setErrors]     = useState(EMPTY_ERR);
  const [touched,    setTouched]    = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError,   setApiError]   = useState('');

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
    const allT = { name:true, email:true, phone:true, company:true, service:true, agree:true };
    setTouched(allT);
    const errs = validateAll(form);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    setSubmitting(true); setApiError('');

    const payload = {
      name:        form.name.trim(),
      email:       form.email.trim().toLowerCase(),
      phone:       form.phone.trim(),
      company:     form.company.trim(),
      service:     form.service,
      requirement: form.requirement.trim(),
      source,
      submitted_at: new Date().toISOString(),
    };

    try {
      const [w, m] = await Promise.allSettled([
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3_KEY,
            subject:    `Lead — ojiva.ai/${source}`,
            from_name:  'Ojiva AI Landing Page',
            redirect:   'false',
            ...payload,
          }),
        }).then(r => r.json()),
        fetch(MAKE_HOOK, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify(payload),
        }),
      ]);

      if ((w.status === 'fulfilled' && w.value?.success) || (m.status === 'fulfilled' && m.value?.ok)) {
        router.push(thankYouUrl);
      } else {
        setApiError('Something went wrong. Please try again or call us.');
        setSubmitting(false);
      }
    } catch {
      setApiError('Network error. Please try again.');
      setSubmitting(false);
    }
  };

  const isTouched = (k) => !!touched[k];
  const isErr     = (k) => isTouched(k) && !!errors[k];
  const isOk      = (k) => isTouched(k) && !errors[k] && !!form[k];

  return (
    <div className="llf-card">

      {/* ── 1. Countdown timer ── */}
      <div className="llf-countdown-bar">
        <span className="llf-countdown-label">
          <i className="bi bi-clock-fill me-1" /> Offer expires in
        </span>
        <span className="llf-countdown-timer">{countdown}</span>
      </div>

      {/* ── 2. Scarcity strip ── */}
      <div className="llf-scarcity">
        <span className="llf-scarcity-dot" />
        Only <strong>{spotsLeft} free setup spots left this month</strong> — grab yours before they&apos;re gone 🔥
      </div>

      {/* ── 3. Response time ── */}
      <div className="llf-response-time">
        <span className="llf-response-dot" />
        Average response time: <strong>under 2 hours</strong>
      </div>

      {/* ── 4. Title ── */}
      <div className="llf-head">
        <h3 className="llf-title">{title}</h3>
        <p className="llf-sub">{subtitle}</p>
      </div>

      {/* ── 5. Progress bar ── */}
      {completePct > 0 && (
        <div className="llf-progress-track">
          <div className="llf-progress-fill" style={{ width: `${completePct}%` }} />
          <span className="llf-progress-pct">{completePct}% complete</span>
        </div>
      )}

      {/* ── 6. Fields ── */}
      <form onSubmit={handleSubmit} noValidate className="llf-form">

        {/* Full Name */}
        <Field label="Full Name" required error={isErr('name') ? errors.name : ''}>
          <Input icon="bi-person" placeholder="Your Full Name"
            type="text" autoComplete="name" disabled={submitting}
            value={form.name} onChange={handleChange('name')} onBlur={handleBlur('name')}
            error={isErr('name')} valid={isOk('name')} />
        </Field>

        {/* Email + Phone */}
        <div className="llf-row">
          <Field label="Email" required error={isErr('email') ? errors.email : ''}>
            <Input icon="bi-envelope" placeholder="you@company.com"
              type="email" autoComplete="email" disabled={submitting}
              value={form.email} onChange={handleChange('email')} onBlur={handleBlur('email')}
              error={isErr('email')} valid={isOk('email')} />
          </Field>
          <Field label="Phone" required error={isErr('phone') ? errors.phone : ''}>
            <Input icon="bi-telephone" placeholder="10-digit Indian mobile"
              type="tel" autoComplete="tel" disabled={submitting}
              value={form.phone} onChange={handleChange('phone')} onBlur={handleBlur('phone')}
              error={isErr('phone')} valid={isOk('phone')} />
          </Field>
        </div>

        {/* Company + Service */}
        <div className="llf-row">
          <Field label="Company Name" required error={isErr('company') ? errors.company : ''}>
            <Input icon="bi-building" placeholder="Your Company Name"
              type="text" autoComplete="organization" disabled={submitting}
              value={form.company} onChange={handleChange('company')} onBlur={handleBlur('company')}
              error={isErr('company')} valid={isOk('company')} />
          </Field>
          <Field label="Service" required error={isErr('service') ? errors.service : ''}>
            <Select icon="bi-grid" disabled={submitting}
              value={form.service} onChange={handleChange('service')} onBlur={handleBlur('service')}
              error={isErr('service')} valid={isOk('service')}>
              {SERVICES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </Select>
          </Field>
        </div>

        {/* Requirement */}
        <Field label="Your Requirement">
          <textarea className="llf-textarea"
            placeholder="Tell us about your use case, current volume, or any specific requirements…"
            rows={3} disabled={submitting}
            value={form.requirement} onChange={handleChange('requirement')} />
        </Field>

        {/* Privacy checkbox */}
        <div className="llf-check-row">
          <label className={`llf-check-label${form.agree ? ' checked' : ''}`}>
            <input type="checkbox" className="llf-check-input"
              checked={form.agree} onChange={handleChange('agree')} onBlur={handleBlur('agree')}
              disabled={submitting} />
            <span className={`llf-check-box${form.agree ? ' checked' : ''}`}>
              {form.agree && <i className="bi bi-check-lg" />}
            </span>
            <span className="llf-check-text">
              I accept the{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              {' '}and{' '}
              <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
              , and agree to be contacted by Ojiva AI regarding my enquiry.{' '}
              <span className="llf-req">*</span>
            </span>
          </label>
          {isErr('agree') && <span className="llf-err">{errors.agree}</span>}
        </div>

        {/* Submit */}
        <button type="submit" className="llf-submit-btn" disabled={submitting}>
          {submitting
            ? <><span className="spinner-border spinner-border-sm me-2" role="status" />Submitting…</>
            : submitLabel
          }
        </button>

        {apiError && (
          <div className="llf-api-err">
            <i className="bi bi-exclamation-triangle me-1" />
            {apiError}{' '}
            <a href="tel:+918431086185">Call us</a>.
          </div>
        )}

      </form>

      {/* ── 7. Privacy note ── */}
      <p className="llf-privacy">
        <i className="bi bi-shield-lock-fill me-1" />
        We never share your details. Your information is 100% secure.
      </p>

      {/* ── 8. Trust badges ── */}
      <div className="llf-trust-badges">
        <span><i className="bi bi-shield-check" /> 256-bit SSL</span>
        <span><i className="bi bi-patch-check-fill text-success" /> Meta Partner</span>
        <span><i className="bi bi-lightning-charge-fill text-warning" /> Reply in 2 hrs</span>
      </div>

      {/* ── 9. Activity feed ── */}
      <div className="llf-activity">
        <span className="llf-activity-dot" />
        <span>
          <strong>{activity.name}</strong> from {activity.city} just got a free demo ·{' '}
          <span className="llf-activity-ago">{activity.ago}</span>
        </span>
      </div>

    </div>
  );
}
