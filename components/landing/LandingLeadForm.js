'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

/* ─── Config ──────────────────────────────────────────────── */
const WEB3_KEY   = 'b5a4d0e7-4c4c-4ff4-b11b-8026740ac809';
const MAKE_HOOK  = 'https://hook.eu1.make.com/oaum1wrp22fic8clfnz1y3aejoxo954e';
const THANK_YOU  = '/whatsapp-api-service/thank-you';

const VOLUMES = [
  { value: '',         label: 'Select monthly volume' },
  { value: '<10k',     label: 'Less than 10,000' },
  { value: '10k-100k', label: '10,000 – 1,00,000' },
  { value: '100k-1m',  label: '1,00,000 – 10,00,000' },
  { value: '1m+',      label: '10,00,000+ (Enterprise)' },
];

/* ─── Validators ──────────────────────────────────────────── */
const RULES = {
  name:    v => !v.trim()                                       ? 'Full name is required.'
              : v.trim().length < 2                             ? 'Please enter your full name.'
              : '',
  email:   v => !v.trim()                                       ? 'Business email is required.'
              : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())  ? 'Enter a valid email address.'
              : '',
  phone:   v => {
    const d = v.replace(/[\s\-().+]/g, '');
    if (!d)                              return 'Phone number is required.';
    if (!/^[6-9][0-9]{9}$/.test(d))    return 'Enter a valid 10-digit Indian mobile number (starting with 6–9).';
    return '';
  },
  company: v => !v.trim()                                       ? 'Company name is required.'
              : v.trim().length < 2                             ? 'Please enter your company name.'
              : '',
  volume:  v => !v                                              ? 'Please select your monthly volume.'
              : '',
  agree:   v => !v                                              ? 'Please agree to continue.'
              : '',
};

function validateAll(form) {
  const errs = {};
  Object.keys(RULES).forEach(k => { errs[k] = RULES[k](form[k]); });
  return errs;
}

const EMPTY_ERRORS = { name: '', email: '', phone: '', company: '', volume: '', agree: '' };

/* ─── Component ───────────────────────────────────────────── */
export default function LandingLeadForm({
  source       = 'whatsapp-api',
  title        = 'Get WhatsApp API Access for Your Business',
  subtitle     = 'Setup in 48 hours. No lock-in. Pay-as-you-go.',
  submitLabel  = 'Get WhatsApp API Pricing →',
  thankYouUrl  = THANK_YOU,
}) {
  const router = useRouter();

  const [form,       setForm]       = useState({ name: '', email: '', phone: '', company: '', volume: '', requirement: '', agree: false });
  const [errors,     setErrors]     = useState(EMPTY_ERRORS);
  const [touched,    setTouched]    = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError,   setApiError]   = useState('');

  const handleChange = useCallback((k) => (e) => {
    const val = k === 'agree' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [k]: val }));
    if (touched[k] && RULES[k]) setErrors(prev => ({ ...prev, [k]: RULES[k](val) }));
  }, [touched]);

  const handleBlur = useCallback((k) => () => {
    setTouched(prev => ({ ...prev, [k]: true }));
    if (RULES[k]) setErrors(prev => ({ ...prev, [k]: RULES[k](form[k]) }));
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, phone: true, company: true, volume: true, agree: true };
    setTouched(allTouched);
    const errs = validateAll(form);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;

    setSubmitting(true);
    setApiError('');

    const payload = {
      name:         form.name.trim(),
      email:        form.email.trim().toLowerCase(),
      phone:        form.phone.trim(),
      company:      form.company.trim(),
      volume:       form.volume,
      requirement:  form.requirement.trim(),
      source,
      submitted_at: new Date().toISOString(),
    };

    try {
      const [web3Res, makeRes] = await Promise.allSettled([
        fetch('https://api.web3forms.com/submit', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3_KEY,
            subject:    `WhatsApp API Lead — ojiva.ai/${source}`,
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

      const web3Ok = web3Res.status === 'fulfilled' && web3Res.value?.success;
      const makeOk = makeRes.status === 'fulfilled' && makeRes.value?.ok;

      if (web3Ok || makeOk) {
        router.push(thankYouUrl);
      } else {
        setApiError('Something went wrong. Please try again or call us directly.');
        setSubmitting(false);
      }
    } catch {
      setApiError('Something went wrong. Please try again or call us directly.');
      setSubmitting(false);
    }
  };

  const fieldClass = (k) =>
    `lp2-input${touched[k] && errors[k] ? ' lp2-input--error' : touched[k] && !errors[k] ? ' lp2-input--ok' : ''}`;

  /* ── Form ── */
  return (
    <form className="lp2-form" onSubmit={handleSubmit} noValidate>

      <div className="lp2-form-head">
        <h3 className="lp2-form-title">{title}</h3>
        <p className="lp2-form-sub">{subtitle}</p>
      </div>

      <div className="lp2-fields">

        {/* Full Name — full width */}
        <div className="lp2-field lp2-field--full">
          <label className="lp2-label">Full Name <span className="lp2-req">*</span></label>
          <div className="lp2-input-wrap">
            <i className="bi bi-person lp2-icon" />
            <input
              type="text"
              placeholder="Your Full Name"
              value={form.name}
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
              className={fieldClass('name')}
              autoComplete="name"
              disabled={submitting}
            />
          </div>
          {touched.name && errors.name && <span className="lp2-error"><i className="bi bi-exclamation-circle" /> {errors.name}</span>}
        </div>

        {/* Email + Phone */}
        <div className="lp2-field">
          <label className="lp2-label">Email <span className="lp2-req">*</span></label>
          <div className="lp2-input-wrap">
            <i className="bi bi-envelope lp2-icon" />
            <input
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              className={fieldClass('email')}
              autoComplete="email"
              disabled={submitting}
            />
          </div>
          {touched.email && errors.email && <span className="lp2-error"><i className="bi bi-exclamation-circle" /> {errors.email}</span>}
        </div>

        <div className="lp2-field">
          <label className="lp2-label">Phone <span className="lp2-req">*</span></label>
          <div className="lp2-input-wrap">
            <i className="bi bi-telephone lp2-icon" />
            <input
              type="tel"
              placeholder="10-digit Indian mobile"
              value={form.phone}
              onChange={handleChange('phone')}
              onBlur={handleBlur('phone')}
              className={fieldClass('phone')}
              autoComplete="tel"
              disabled={submitting}
            />
          </div>
          {touched.phone && errors.phone && <span className="lp2-error"><i className="bi bi-exclamation-circle" /> {errors.phone}</span>}
        </div>

        {/* Company + Volume */}
        <div className="lp2-field">
          <label className="lp2-label">Company Name <span className="lp2-req">*</span></label>
          <div className="lp2-input-wrap">
            <i className="bi bi-building lp2-icon" />
            <input
              type="text"
              placeholder="Your Company Name"
              value={form.company}
              onChange={handleChange('company')}
              onBlur={handleBlur('company')}
              className={fieldClass('company')}
              autoComplete="organization"
              disabled={submitting}
            />
          </div>
          {touched.company && errors.company && <span className="lp2-error"><i className="bi bi-exclamation-circle" /> {errors.company}</span>}
        </div>

        <div className="lp2-field">
          <label className="lp2-label">Monthly Volume <span className="lp2-req">*</span></label>
          <div className="lp2-input-wrap">
            <i className="bi bi-bar-chart lp2-icon" />
            <select
              value={form.volume}
              onChange={handleChange('volume')}
              onBlur={handleBlur('volume')}
              className={`${fieldClass('volume')} lp2-select${form.volume ? ' has-value' : ''}`}
              disabled={submitting}
            >
              {VOLUMES.map(v => (
                <option key={v.value} value={v.value} disabled={v.value === ''}>{v.label}</option>
              ))}
            </select>
          </div>
          {touched.volume && errors.volume && <span className="lp2-error"><i className="bi bi-exclamation-circle" /> {errors.volume}</span>}
        </div>

        {/* Requirement — full width */}
        <div className="lp2-field lp2-field--full">
          <label className="lp2-label">Your Requirement</label>
          <textarea
            placeholder="Tell us about your requirements..."
            value={form.requirement}
            onChange={handleChange('requirement')}
            className="lp2-input lp2-textarea"
            rows={3}
            disabled={submitting}
          />
        </div>

        {/* Checkbox — full width */}
        <div className="lp2-field lp2-field--full">
          <label className="lp2-check-label">
            <input
              type="checkbox"
              className="lp2-check-input"
              checked={form.agree}
              onChange={handleChange('agree')}
              onBlur={handleBlur('agree')}
              disabled={submitting}
            />
            <span className="lp2-check-text">
              I accept the{' '}
              <a href="/privacy" target="_blank" rel="noopener">Privacy Policy</a>
              {' '}and{' '}
              <a href="/terms" target="_blank" rel="noopener">Terms of Service</a>
              , and agree to be contacted by Ojiva AI regarding my enquiry.{' '}
              <span className="lp2-req">*</span>
            </span>
          </label>
          {touched.agree && errors.agree && <span className="lp2-error"><i className="bi bi-exclamation-circle" /> {errors.agree}</span>}
        </div>

      </div>

      {/* Trust signals above submit */}
      <div className="lp2-trust-signals">
        <span><i className="bi bi-patch-check-fill" style={{ color: '#22c55e' }} /> Official Meta BSP</span>
        <span><i className="bi bi-people-fill" style={{ color: '#3b82f6' }} /> 500+ businesses onboarded</span>
        <span><i className="bi bi-clock-fill" style={{ color: '#a855f7' }} /> Setup in 24–48 hours</span>
      </div>

      <button type="submit" className="lp2-btn" disabled={submitting}>
        {submitting ? <><span className="lp-spinner" /> Submitting…</> : submitLabel}
      </button>

      {apiError && (
        <p className="lp2-api-error">
          <i className="bi bi-exclamation-triangle" /> {apiError}{' '}
          <a href="tel:+918431086185" style={{ color: 'inherit', textDecoration: 'underline' }}>Call us</a>.
        </p>
      )}

      <p className="lp2-privacy">🔒 We never share your details. Your information is 100% secure.</p>

    </form>
  );
}
