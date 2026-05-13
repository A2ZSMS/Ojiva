'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

/* ─── Config ──────────────────────────────────────────────── */
const WEB3_KEY  = 'b5a4d0e7-4c4c-4ff4-b11b-8026740ac809';
const MAKE_HOOK = 'https://hook.eu1.make.com/oaum1wrp22fic8clfnz1y3aejoxo954e';
const THANK_YOU = '/whatsapp-api-service/thank-you';

const VOLUMES = [
  { value: '',         label: 'Select monthly volume' },
  { value: '<10k',     label: 'Less than 10,000' },
  { value: '10k-100k', label: '10,000 – 1,00,000' },
  { value: '100k-1m',  label: '1,00,000 – 10,00,000' },
  { value: '1m+',      label: '10,00,000+ (Enterprise)' },
];

/* ─── Validators ──────────────────────────────────────────── */
const RULES = {
  name:    v => !v.trim()                                     ? 'Full name is required.'
             : v.trim().length < 2                            ? 'Please enter your full name.'
             : '',
  email:   v => !v.trim()                                     ? 'Business email is required.'
             : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? 'Enter a valid email address.'
             : '',
  phone:   v => {
    const d = v.replace(/[\s\-().+]/g, '');
    if (!d)                           return 'Phone number is required.';
    if (!/^[6-9][0-9]{9}$/.test(d)) return 'Enter a valid 10-digit Indian mobile number.';
    return '';
  },
  company: v => !v.trim()                                     ? 'Company name is required.'
             : v.trim().length < 2                            ? 'Please enter your company name.'
             : '',
  volume:  v => !v                                            ? 'Please select your monthly volume.'
             : '',
  agree:   v => !v                                            ? 'Please agree to continue.'
             : '',
};

function validateAll(f) {
  const errs = {};
  Object.keys(RULES).forEach(k => { errs[k] = RULES[k](f[k]); });
  return errs;
}

const REQUIRED_FIELDS = ['name', 'email', 'phone', 'company', 'volume'];
const EMPTY_ERRORS    = { name: '', email: '', phone: '', company: '', volume: '', agree: '' };

/* ─── Component ───────────────────────────────────────────── */
export default function LandingLeadForm({
  source      = 'whatsapp-api',
  title       = 'Get WhatsApp API Access for Your Business',
  subtitle    = 'Setup in 48 hours. No lock-in. Pay-as-you-go.',
  badge       = 'Instant Setup · No lock-in · No credit card',
  submitLabel = 'Get WhatsApp API Pricing →',
  thankYouUrl = THANK_YOU,
}) {
  const router = useRouter();

  const [form,       setForm]       = useState({ name: '', email: '', phone: '', company: '', volume: '', requirement: '', agree: false });
  const [errors,     setErrors]     = useState(EMPTY_ERRORS);
  const [touched,    setTouched]    = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError,   setApiError]   = useState('');

  /* Progress: count valid required fields */
  const completePct = Math.round(
    (REQUIRED_FIELDS.filter(k => form[k] && !RULES[k](form[k])).length / REQUIRED_FIELDS.length) * 100
  );

  /* Handlers */
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
      name:        form.name.trim(),
      email:       form.email.trim().toLowerCase(),
      phone:       form.phone.trim(),
      company:     form.company.trim(),
      volume:      form.volume,
      requirement: form.requirement.trim(),
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

  /* Bootstrap validation class helpers */
  const fieldClass  = (k) => `form-control${touched[k] ? (errors[k] ? ' is-invalid' : ' is-valid') : ''}`;
  const selectClass = (k) => `form-select${touched[k] ? (errors[k] ? ' is-invalid' : ' is-valid') : ''}`;

  /* ── Render ── */
  return (
    <div className="llf-card">

      {/* ── Progress bar ── */}
      <div className="llf-progress-track">
        <div className="llf-progress-fill" style={{ width: `${completePct}%` }} />
        {completePct > 0 && <span className="llf-progress-pct">{completePct}%</span>}
      </div>

      {/* ── Badge ── */}
      <div className="llf-top-badge">
        <i className="bi bi-lightning-charge-fill" style={{ color: '#22c55e' }} />
        <span>{badge}</span>
      </div>

      {/* ── Header ── */}
      <h3 className="llf-title">{title}</h3>
      <p className="llf-sub">{subtitle}</p>
      <div className="llf-live-badge">
        <span className="llf-live-dot" />
        <span>47 businesses joined this month</span>
      </div>

      {/* ── Form ── */}
      <form onSubmit={handleSubmit} noValidate className="mt-3">

        {/* Full Name */}
        <div className="form-floating mb-3">
          <input id="llf-name" type="text" className={fieldClass('name')}
            placeholder="Full Name" value={form.name}
            onChange={handleChange('name')} onBlur={handleBlur('name')}
            autoComplete="name" disabled={submitting} />
          <label htmlFor="llf-name">Full Name <span className="text-danger">*</span></label>
          {touched.name && errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Email + Phone */}
        <div className="row g-2 mb-3">
          <div className="col-12 col-sm-6">
            <div className="form-floating">
              <input id="llf-email" type="email" className={fieldClass('email')}
                placeholder="Email" value={form.email}
                onChange={handleChange('email')} onBlur={handleBlur('email')}
                autoComplete="email" disabled={submitting} />
              <label htmlFor="llf-email">Business Email <span className="text-danger">*</span></label>
              {touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="form-floating">
              <input id="llf-phone" type="tel" className={fieldClass('phone')}
                placeholder="Phone" value={form.phone}
                onChange={handleChange('phone')} onBlur={handleBlur('phone')}
                autoComplete="tel" disabled={submitting} />
              <label htmlFor="llf-phone">Phone Number <span className="text-danger">*</span></label>
              {touched.phone && errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
          </div>
        </div>

        {/* Company + Volume */}
        <div className="row g-2 mb-3">
          <div className="col-12 col-sm-6">
            <div className="form-floating">
              <input id="llf-company" type="text" className={fieldClass('company')}
                placeholder="Company" value={form.company}
                onChange={handleChange('company')} onBlur={handleBlur('company')}
                autoComplete="organization" disabled={submitting} />
              <label htmlFor="llf-company">Company Name <span className="text-danger">*</span></label>
              {touched.company && errors.company && <div className="invalid-feedback">{errors.company}</div>}
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="form-floating">
              <select id="llf-volume" className={selectClass('volume')}
                value={form.volume}
                onChange={handleChange('volume')} onBlur={handleBlur('volume')}
                disabled={submitting}>
                {VOLUMES.map(v => <option key={v.value} value={v.value}>{v.label}</option>)}
              </select>
              <label htmlFor="llf-volume">Monthly Volume <span className="text-danger">*</span></label>
              {touched.volume && errors.volume && <div className="invalid-feedback">{errors.volume}</div>}
            </div>
          </div>
        </div>

        {/* Requirement */}
        <div className="form-floating mb-3">
          <textarea id="llf-req" className="form-control llf-textarea"
            placeholder="Your requirement" value={form.requirement}
            onChange={handleChange('requirement')} disabled={submitting} />
          <label htmlFor="llf-req">
            Your Requirement <span className="text-secondary fw-normal small">(optional)</span>
          </label>
        </div>

        {/* Agree */}
        <div className="mb-3">
          <div className="form-check">
            <input id="llf-agree" type="checkbox"
              className={`form-check-input${touched.agree ? (errors.agree ? ' is-invalid' : ' is-valid') : ''}`}
              checked={form.agree}
              onChange={handleChange('agree')} onBlur={handleBlur('agree')}
              disabled={submitting} />
            <label className="form-check-label small text-secondary" htmlFor="llf-agree">
              I accept the{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              {' '}and{' '}
              <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
              . <span className="text-danger">*</span>
            </label>
            {touched.agree && errors.agree && <div className="invalid-feedback d-block">{errors.agree}</div>}
          </div>
        </div>

        {/* Trust row */}
        <div className="llf-trust mb-3">
          <span><i className="bi bi-patch-check-fill text-success" /> Official Meta BSP</span>
          <span><i className="bi bi-people-fill text-primary" /> 500+ businesses</span>
          <span><i className="bi bi-clock-fill" style={{ color: '#a855f7' }} /> 48-hr setup</span>
        </div>

        {/* Submit */}
        <button type="submit" className="llf-submit-btn" disabled={submitting}>
          {submitting
            ? <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />Submitting…</>
            : submitLabel
          }
        </button>

        {apiError && (
          <div className="alert alert-danger py-2 mt-2 small">
            <i className="bi bi-exclamation-triangle me-1" />
            {apiError}{' '}
            <a href="tel:+918431086185" className="alert-link">Call us</a>.
          </div>
        )}

        <p className="llf-privacy">
          <i className="bi bi-lock-fill me-1" />
          We never share your details. 100% secure.
        </p>

      </form>
    </div>
  );
}
