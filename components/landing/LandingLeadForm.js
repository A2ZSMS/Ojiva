'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

/* ─── Config ──────────────────────────────────────────────── */
const WEB3_KEY   = 'b5a4d0e7-4c4c-4ff4-b11b-8026740ac809';
const MAKE_HOOK  = 'https://hook.eu1.make.com/oaum1wrp22fic8clfnz1y3aejoxo954e';
const THANK_YOU  = '/whatsapp-api-service/thank-you';

const VOLUMES = [
  { value: '',         label: 'Monthly Message Volume *' },
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
    if (!d)                        return 'Phone number is required.';
    if (!/^\d{10,13}$/.test(d))   return 'Enter a valid 10-digit phone number.';
    return '';
  },
  company: v => !v.trim()                                       ? 'Company name is required.'
              : v.trim().length < 2                             ? 'Please enter your company name.'
              : '',
  volume:  v => !v                                              ? 'Please select your monthly volume.'
              : '',
};

function validateAll(form) {
  const errs = {};
  Object.keys(RULES).forEach(k => { errs[k] = RULES[k](form[k]); });
  return errs;
}

const EMPTY_ERRORS = { name: '', email: '', phone: '', company: '', volume: '' };

/* ─── Component ───────────────────────────────────────────── */
export default function LandingLeadForm({
  source       = 'whatsapp-api',
  title        = 'Get Free WhatsApp API Access',
  subtitle     = 'Setup in 48 hours. No credit card required.',
  submitLabel  = 'Start Free Trial →',
  thankYouUrl  = THANK_YOU,
}) {
  const router = useRouter();

  const [form,       setForm]       = useState({ name: '', email: '', phone: '', company: '', volume: '' });
  const [errors,     setErrors]     = useState(EMPTY_ERRORS);
  const [touched,    setTouched]    = useState({});
  const [submitting, setSubmitting] = useState(false); // locks button immediately on click
  const [apiError,   setApiError]   = useState('');

  /* update field + live-validate if already touched */
  const handleChange = useCallback((k) => (e) => {
    const val = e.target.value;
    setForm(prev => ({ ...prev, [k]: val }));
    if (touched[k]) setErrors(prev => ({ ...prev, [k]: RULES[k](val) }));
  }, [touched]);

  /* mark touched + validate on blur */
  const handleBlur = useCallback((k) => () => {
    setTouched(prev => ({ ...prev, [k]: true }));
    setErrors(prev => ({ ...prev, [k]: RULES[k](form[k]) }));
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* 1. Validate all fields first */
    const allTouched = { name: true, email: true, phone: true, company: true, volume: true };
    setTouched(allTouched);
    const errs = validateAll(form);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return; // stop — show inline errors

    /* 2. Lock button immediately — no double submit possible */
    setSubmitting(true);
    setApiError('');

    const payload = {
      name:         form.name.trim(),
      email:        form.email.trim().toLowerCase(),
      phone:        form.phone.trim(),
      company:      form.company.trim(),
      volume:       form.volume,
      source,
      submitted_at: new Date().toISOString(),
    };

    try {
      /* 3. Fire both endpoints in parallel */
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
        /* 4. Success → redirect immediately */
        router.push(thankYouUrl);
      } else {
        setApiError('Something went wrong. Please try again or call us directly.');
        setSubmitting(false); // re-enable only on failure
      }
    } catch {
      setApiError('Something went wrong. Please try again or call us directly.');
      setSubmitting(false);
    }
  };

  /* ── Form ── */
  return (
    <form className="lp-form" onSubmit={handleSubmit} noValidate>
      <div className="lp-form-head">
        <h3 className="lp-form-title">{title}</h3>
        <p className="lp-form-sub">{subtitle}</p>
      </div>

      <div className="lp-form-fields">

        {/* Full Name */}
        <div className="lp-field">
          <input
            type="text"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange('name')}
            onBlur={handleBlur('name')}
            className={`lp-input${touched.name && errors.name ? ' lp-input--error' : touched.name && !errors.name ? ' lp-input--ok' : ''}`}
            autoComplete="name"
            disabled={submitting}
            aria-invalid={!!(touched.name && errors.name)}
          />
          {touched.name && errors.name && (
            <span className="lp-field-error"><i className="bi bi-exclamation-circle" /> {errors.name}</span>
          )}
        </div>

        {/* Business Email */}
        <div className="lp-field">
          <input
            type="email"
            placeholder="Business Email *"
            value={form.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            className={`lp-input${touched.email && errors.email ? ' lp-input--error' : touched.email && !errors.email ? ' lp-input--ok' : ''}`}
            autoComplete="email"
            disabled={submitting}
            aria-invalid={!!(touched.email && errors.email)}
          />
          {touched.email && errors.email && (
            <span className="lp-field-error"><i className="bi bi-exclamation-circle" /> {errors.email}</span>
          )}
        </div>

        {/* Phone */}
        <div className="lp-field">
          <input
            type="tel"
            placeholder="Phone Number * (e.g. 98765 43210)"
            value={form.phone}
            onChange={handleChange('phone')}
            onBlur={handleBlur('phone')}
            className={`lp-input${touched.phone && errors.phone ? ' lp-input--error' : touched.phone && !errors.phone ? ' lp-input--ok' : ''}`}
            autoComplete="tel"
            disabled={submitting}
            aria-invalid={!!(touched.phone && errors.phone)}
          />
          {touched.phone && errors.phone && (
            <span className="lp-field-error"><i className="bi bi-exclamation-circle" /> {errors.phone}</span>
          )}
        </div>

        {/* Company */}
        <div className="lp-field">
          <input
            type="text"
            placeholder="Company Name *"
            value={form.company}
            onChange={handleChange('company')}
            onBlur={handleBlur('company')}
            className={`lp-input${touched.company && errors.company ? ' lp-input--error' : touched.company && !errors.company ? ' lp-input--ok' : ''}`}
            autoComplete="organization"
            disabled={submitting}
            aria-invalid={!!(touched.company && errors.company)}
          />
          {touched.company && errors.company && (
            <span className="lp-field-error"><i className="bi bi-exclamation-circle" /> {errors.company}</span>
          )}
        </div>

        {/* Monthly Volume */}
        <div className="lp-field">
          <select
            value={form.volume}
            onChange={handleChange('volume')}
            onBlur={handleBlur('volume')}
            className={`lp-input lp-select${form.volume ? ' has-value' : ''}${touched.volume && errors.volume ? ' lp-input--error' : touched.volume && !errors.volume ? ' lp-input--ok' : ''}`}
            disabled={submitting}
            aria-invalid={!!(touched.volume && errors.volume)}
          >
            {VOLUMES.map(v => (
              <option key={v.value} value={v.value} disabled={v.value === ''}>{v.label}</option>
            ))}
          </select>
          {touched.volume && errors.volume && (
            <span className="lp-field-error"><i className="bi bi-exclamation-circle" /> {errors.volume}</span>
          )}
        </div>

      </div>

      {/* Submit */}
      <button type="submit" className="lp-form-btn" disabled={submitting}>
        {submitting
          ? <><span className="lp-spinner" /> Submitting…</>
          : submitLabel}
      </button>

      {/* API-level error (only shows if both endpoints fail) */}
      {apiError && (
        <p className="lp-form-error">
          <i className="bi bi-exclamation-triangle" /> {apiError}{' '}
          <a href="tel:+918431086185" style={{ color: 'inherit', textDecoration: 'underline' }}>Call us</a>.
        </p>
      )}

      <p className="lp-form-privacy">
        🔒 Your data is safe. No spam, ever. By submitting you agree to our{' '}
        <a href="/privacy" target="_blank" rel="noopener">Privacy Policy</a>.
      </p>
    </form>
  );
}
