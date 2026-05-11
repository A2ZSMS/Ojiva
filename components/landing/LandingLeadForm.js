'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
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
  name:    v => !v.trim()                                      ? 'Full name is required.'
             : v.trim().length < 2                             ? 'Please enter your full name.'
             : '',
  email:   v => !v.trim()                                      ? 'Business email is required.'
             : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())  ? 'Enter a valid email address.'
             : '',
  phone:   v => {
    const d = v.replace(/[\s\-().+]/g, '');
    if (!d)                           return 'Phone number is required.';
    if (!/^[6-9][0-9]{9}$/.test(d)) return 'Enter a valid 10-digit Indian mobile number (starting with 6–9).';
    return '';
  },
  company: v => !v.trim()                                      ? 'Company name is required.'
             : v.trim().length < 2                             ? 'Please enter your company name.'
             : '',
  volume:  v => !v                                             ? 'Please select your monthly volume.'
             : '',
  agree:   v => !v                                             ? 'Please agree to continue.'
             : '',
};

function validateAll(f) {
  const errs = {};
  Object.keys(RULES).forEach(k => { errs[k] = RULES[k](f[k]); });
  return errs;
}

const REQUIRED_FIELDS  = ['name', 'email', 'phone', 'company', 'volume'];
const EMPTY_ERRORS     = { name: '', email: '', phone: '', company: '', volume: '', agree: '' };

/* ─── Component ───────────────────────────────────────────── */
export default function LandingLeadForm({
  source      = 'whatsapp-api',
  title       = 'Get WhatsApp API Access for Your Business',
  subtitle    = 'Setup in 48 hours. No lock-in. Pay-as-you-go.',
  submitLabel = 'Get WhatsApp API Pricing →',
  thankYouUrl = THANK_YOU,
}) {
  const router  = useRouter();
  const formRef = useRef(null);

  const [visible,    setVisible]    = useState(false);
  const [focused,    setFocused]    = useState('');
  const [form,       setForm]       = useState({ name: '', email: '', phone: '', company: '', volume: '', requirement: '', agree: false });
  const [errors,     setErrors]     = useState(EMPTY_ERRORS);
  const [touched,    setTouched]    = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError,   setApiError]   = useState('');

  /* Entrance animation — fires on mount (hero) or when scrolled into view (MidForm) */
  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    // Short delay so React finishes painting before animation starts
    const timer = setTimeout(() => setVisible(true), 80);
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { clearTimeout(timer); setVisible(true); obs.disconnect(); } },
      { threshold: 0 }
    );
    obs.observe(el);
    return () => { obs.disconnect(); clearTimeout(timer); };
  }, []);

  /* Progress: count valid required fields */
  const completePct = Math.round(
    (REQUIRED_FIELDS.filter(k => form[k] && !RULES[k](form[k])).length / REQUIRED_FIELDS.length) * 100
  );
  const allValid = completePct === 100 && form.agree;

  /* Handlers */
  const handleChange = useCallback((k) => (e) => {
    const val = k === 'agree' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [k]: val }));
    if (touched[k] && RULES[k]) setErrors(prev => ({ ...prev, [k]: RULES[k](val) }));
  }, [touched]);

  const handleBlur = useCallback((k) => () => {
    setFocused('');
    setTouched(prev => ({ ...prev, [k]: true }));
    if (RULES[k]) setErrors(prev => ({ ...prev, [k]: RULES[k](form[k]) }));
  }, [form]);

  const handleFocus = useCallback((k) => () => setFocused(k), []);

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

  /* Helpers */
  const isFocused = (k) => focused === k;
  const isValid   = (k) => touched[k] && !errors[k] && (k === 'volume' ? !!form[k] : !!form[k]);
  const isErr     = (k) => touched[k] && !!errors[k];

  const inputWrapClass = (k) =>
    `lp2-input-wrap${isFocused(k) ? ' lp2-input-wrap--focused' : ''}${isErr(k) ? ' lp2-input-wrap--error' : ''}${isValid(k) ? ' lp2-input-wrap--ok' : ''}`;

  const iconClass = (k) =>
    `bi lp2-icon${isValid(k) ? ' lp2-icon--ok' : isFocused(k) ? ' lp2-icon--active' : ''}`;

  const inputClass = (k) =>
    `lp2-input${isErr(k) ? ' lp2-input--error' : ''}${isValid(k) ? ' lp2-input--ok' : ''}`;

  /* ── Render ── */
  return (
    <form
      ref={formRef}
      className={`lp2-form${visible ? ' lp2-form--visible' : ''}`}
      onSubmit={handleSubmit}
      noValidate
    >

      {/* ── Progress bar ── */}
      <div className="lp2-progress-track" title={`${completePct}% complete`}>
        <div className="lp2-progress-fill" style={{ width: `${completePct}%` }} />
        {completePct > 0 && (
          <span className="lp2-progress-label">{completePct}%</span>
        )}
      </div>

      {/* ── Form header ── */}
      <div className="lp2-form-head">
        <h3 className="lp2-form-title">{title}</h3>
        <p className="lp2-form-sub">{subtitle}</p>
        <div className="lp2-live-badge">
          <span className="lp2-live-dot" aria-hidden="true" />
          <span>47 businesses got their API this month</span>
        </div>
      </div>

      {/* ── Fields ── */}
      <div className="lp2-fields">

        {/* Full Name — full width */}
        <div className="lp2-field lp2-field--full lp2-field--anim" style={{ '--delay': '0ms' }}>
          <label className="lp2-label">Full Name <span className="lp2-req">*</span></label>
          <div className={inputWrapClass('name')}>
            <i className={`bi-person ${iconClass('name')}`} />
            <input
              type="text"
              placeholder="Your Full Name"
              value={form.name}
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
              onFocus={handleFocus('name')}
              className={inputClass('name')}
              autoComplete="name"
              disabled={submitting}
            />
            {isValid('name') && (
              <span className="lp2-valid-icon" aria-hidden="true">
                <i className="bi bi-check-lg" />
              </span>
            )}
          </div>
          {isErr('name') && <span className="lp2-error"><i className="bi bi-exclamation-circle" /> {errors.name}</span>}
        </div>

        {/* Email */}
        <div className="lp2-field lp2-field--anim" style={{ '--delay': '60ms' }}>
          <label className="lp2-label">Email <span className="lp2-req">*</span></label>
          <div className={inputWrapClass('email')}>
            <i className={`bi-envelope ${iconClass('email')}`} />
            <input
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              onFocus={handleFocus('email')}
              className={inputClass('email')}
              autoComplete="email"
              disabled={submitting}
            />
            {isValid('email') && (
              <span className="lp2-valid-icon" aria-hidden="true">
                <i className="bi bi-check-lg" />
              </span>
            )}
          </div>
          {isErr('email') && <span className="lp2-error"><i className="bi bi-exclamation-circle" /> {errors.email}</span>}
        </div>

        {/* Phone */}
        <div className="lp2-field lp2-field--anim" style={{ '--delay': '120ms' }}>
          <label className="lp2-label">Phone <span className="lp2-req">*</span></label>
          <div className={inputWrapClass('phone')}>
            <i className={`bi-telephone ${iconClass('phone')}`} />
            <input
              type="tel"
              placeholder="10-digit Indian mobile"
              value={form.phone}
              onChange={handleChange('phone')}
              onBlur={handleBlur('phone')}
              onFocus={handleFocus('phone')}
              className={inputClass('phone')}
              autoComplete="tel"
              disabled={submitting}
            />
            {isValid('phone') && (
              <span className="lp2-valid-icon" aria-hidden="true">
                <i className="bi bi-check-lg" />
              </span>
            )}
          </div>
          {isErr('phone') && <span className="lp2-error"><i className="bi bi-exclamation-circle" /> {errors.phone}</span>}
        </div>

        {/* Company */}
        <div className="lp2-field lp2-field--anim" style={{ '--delay': '180ms' }}>
          <label className="lp2-label">Company Name <span className="lp2-req">*</span></label>
          <div className={inputWrapClass('company')}>
            <i className={`bi-building ${iconClass('company')}`} />
            <input
              type="text"
              placeholder="Your Company Name"
              value={form.company}
              onChange={handleChange('company')}
              onBlur={handleBlur('company')}
              onFocus={handleFocus('company')}
              className={inputClass('company')}
              autoComplete="organization"
              disabled={submitting}
            />
            {isValid('company') && (
              <span className="lp2-valid-icon" aria-hidden="true">
                <i className="bi bi-check-lg" />
              </span>
            )}
          </div>
          {isErr('company') && <span className="lp2-error"><i className="bi bi-exclamation-circle" /> {errors.company}</span>}
        </div>

        {/* Monthly Volume */}
        <div className="lp2-field lp2-field--anim" style={{ '--delay': '240ms' }}>
          <label className="lp2-label">Monthly Volume <span className="lp2-req">*</span></label>
          <div className={inputWrapClass('volume')}>
            <i className={`bi-bar-chart ${iconClass('volume')}`} />
            <select
              value={form.volume}
              onChange={handleChange('volume')}
              onBlur={handleBlur('volume')}
              onFocus={handleFocus('volume')}
              className={`${inputClass('volume')} lp2-select${form.volume ? ' has-value' : ''}`}
              disabled={submitting}
            >
              {VOLUMES.map(v => (
                <option key={v.value} value={v.value} disabled={v.value === ''}>{v.label}</option>
              ))}
            </select>
            {isValid('volume') && (
              <span className="lp2-valid-icon lp2-valid-icon--select" aria-hidden="true">
                <i className="bi bi-check-lg" />
              </span>
            )}
          </div>
          {isErr('volume') && <span className="lp2-error"><i className="bi bi-exclamation-circle" /> {errors.volume}</span>}
        </div>

        {/* Requirement — full width */}
        <div className="lp2-field lp2-field--full lp2-field--anim" style={{ '--delay': '300ms' }}>
          <label className="lp2-label">Your Requirement <span className="lp2-optional">(optional)</span></label>
          <textarea
            placeholder="Tell us about your use case, current volume, or any specific requirements…"
            value={form.requirement}
            onChange={handleChange('requirement')}
            onFocus={handleFocus('requirement')}
            onBlur={() => setFocused('')}
            className={`lp2-input lp2-textarea${isFocused('requirement') ? ' lp2-input--focused' : ''}`}
            rows={3}
            disabled={submitting}
          />
        </div>

        {/* Checkbox — full width */}
        <div className="lp2-field lp2-field--full lp2-field--anim" style={{ '--delay': '360ms' }}>
          <label className="lp2-check-label">
            <div className={`lp2-check-box${form.agree ? ' lp2-check-box--checked' : ''}`}>
              {form.agree && <i className="bi bi-check-lg lp2-check-mark" aria-hidden="true" />}
              <input
                type="checkbox"
                className="lp2-check-input"
                checked={form.agree}
                onChange={handleChange('agree')}
                onBlur={handleBlur('agree')}
                disabled={submitting}
              />
            </div>
            <span className="lp2-check-text">
              I accept the{' '}
              <a href="/privacy" target="_blank" rel="noopener">Privacy Policy</a>
              {' '}and{' '}
              <a href="/terms" target="_blank" rel="noopener">Terms of Service</a>
              , and agree to be contacted by Ojiva AI regarding my enquiry.{' '}
              <span className="lp2-req">*</span>
            </span>
          </label>
          {isErr('agree') && <span className="lp2-error"><i className="bi bi-exclamation-circle" /> {errors.agree}</span>}
        </div>

      </div>

      {/* ── Trust signals ── */}
      <div className="lp2-trust-signals">
        <span><i className="bi bi-patch-check-fill" style={{ color: '#22c55e' }} /> Official Meta BSP</span>
        <span><i className="bi bi-people-fill"      style={{ color: '#3b82f6' }} /> 500+ businesses onboarded</span>
        <span><i className="bi bi-clock-fill"        style={{ color: '#a855f7' }} /> Setup in 24–48 hours</span>
      </div>

      {/* ── Submit ── */}
      <button
        type="submit"
        className={`lp2-btn${allValid ? ' lp2-btn--ready' : ''}${submitting ? ' lp2-btn--loading' : ''}`}
        disabled={submitting}
      >
        {submitting
          ? <><span className="lp2-spinner" /> Submitting…</>
          : <><span>{submitLabel}</span><i className="bi bi-arrow-right lp2-btn-arrow" /></>
        }
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
