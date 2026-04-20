'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ACCESS_KEY = 'b5a4d0e7-4c4c-4ff4-b11b-8026740ac809';

/* ── Data ──────────────────────────────────────────── */
const BENEFITS = [
  { icon: '🎯', text: 'Live walkthrough built around your channels & use case' },
  { icon: '💰', text: 'Custom pricing based on your actual message volume'      },
  { icon: '🧠', text: 'Direct Q&A with a certified Ojiva AI solutions expert'   },
  { icon: '🗺️', text: '30-day implementation roadmap ready before you leave'    },
];

const DEMO_PERKS = [
  { icon: '📱', title: 'Bulk SMS',      desc: 'Campaign setup, DLT compliance & delivery analytics' },
  { icon: '💬', title: 'WhatsApp API',  desc: 'Templates, chatbots, broadcasts & automated flows' },
  { icon: '✨', title: 'RCS Messaging', desc: 'Rich cards, carousels & verified sender setup' },
  { icon: '🎙️', title: 'AI Voice',      desc: 'Outbound dialer, IVR, AI call bot & transcripts' },
  { icon: '📊', title: 'Analytics',     desc: 'Real-time dashboards, A/B testing & ROI reports' },
  { icon: '🔗', title: 'Integrations',  desc: 'Salesforce, HubSpot, Shopify & 100+ connectors' },
];

const CHANNELS = [
  { value: 'sms',      label: 'Bulk SMS',    icon: '📱', color: '#10b981' },
  { value: 'whatsapp', label: 'WhatsApp',    icon: '💬', color: '#25d366' },
  { value: 'rcs',      label: 'RCS',         icon: '✨', color: '#6366f1' },
  { value: 'voice',    label: 'AI Voice',    icon: '🎙️', color: '#f59e0b' },
  { value: 'email',    label: 'Email API',   icon: '📧', color: '#3b82f6' },
  { value: 'all',      label: 'All Channels',icon: '🌐', color: '#00c8f8' },
];

const SIZES = [
  { value: '1-50',     label: '1–50',   tag: 'Startup'    },
  { value: '51-200',   label: '51–200', tag: 'Growth'     },
  { value: '201-1000', label: '201–1K', tag: 'Scale-up'   },
  { value: '1001+',    label: '1K+',    tag: 'Enterprise' },
];

const VOLUMES = [
  { value: '<10k',    label: '<10K',    tag: 'Starting out' },
  { value: '10-100k', label: '10–100K', tag: 'Growing'      },
  { value: '100k-1m', label: '100K–1M', tag: 'Scaling'      },
  { value: '1m+',     label: '1M+',     tag: 'Enterprise'   },
];

const TIMES = [
  { value: 'morning',   label: 'Morning',   tag: '9 AM – 12 PM' },
  { value: 'afternoon', label: 'Afternoon', tag: '12 – 5 PM'    },
  { value: 'evening',   label: 'Evening',   tag: '5 – 8 PM'     },
];

const STEPS = [
  { id: 1, label: 'You',      sub: 'Contact info'    },
  { id: 2, label: 'Business', sub: 'Size & volume'   },
  { id: 3, label: 'Demo',     sub: 'Channels & time' },
];

function isValidEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

/* ── Floating label input ──────────────────────────── */
function FLInput({ id, name, type = 'text', label, value, onChange, required, autoComplete, optional }) {
  const valid   = type === 'email' ? isValidEmail(value) : value.trim().length > 0;
  const invalid = type === 'email' && value && !isValidEmail(value);
  return (
    <div className={`fl-field${value ? ' has-value' : ''}${valid && !invalid ? ' valid' : ''}${invalid ? ' invalid' : ''}`}>
      <input id={id} name={name} type={type} className="fl-input" placeholder=" "
        value={value} onChange={onChange} required={required} autoComplete={autoComplete} />
      <label className="fl-label" htmlFor={id}>
        {label}
        {required && <span className="fl-required"> *</span>}
        {optional && <span className="fl-opt"> (optional)</span>}
      </label>
      {valid && !invalid && <span className="fl-icon valid-icon">✓</span>}
      {invalid && <span className="fl-icon invalid-icon">✕</span>}
    </div>
  );
}

/* ── Pill selector ──────────────────────────────────── */
function PillSelector({ options, value, onChange, name, multi = false }) {
  return (
    <div className="dp-pill-row" role="group" aria-label={name}>
      {options.map(({ value: v, label, tag, icon, color }) => {
        const sel = multi ? (Array.isArray(value) && value.includes(v)) : value === v;
        return (
          <button key={v} type="button"
            className={`dp-pill${sel ? ' sel' : ''}${icon ? ' has-icon' : ''}`}
            onClick={() => {
              if (multi) {
                const arr = Array.isArray(value) ? value : [];
                onChange(sel ? arr.filter(x => x !== v) : [...arr, v]);
              } else { onChange(sel ? '' : v); }
            }}
            aria-pressed={sel}
            style={sel && color ? { '--pc': color } : {}}
          >
            {icon && <span className="dp-pill-icon">{icon}</span>}
            <span className="dp-pill-label">{label}</span>
            {tag && <span className="dp-pill-tag">{tag}</span>}
          </button>
        );
      })}
    </div>
  );
}

/* ── Platform preview card (left panel visual) ──────── */
function PreviewCard() {
  return (
    <div className="dbp-preview-card">
      <div className="dbp-preview-header">
        <span className="dbp-preview-dot green" />
        <span className="dbp-preview-dot amber" />
        <span className="dbp-preview-dot red" />
        <span className="dbp-preview-title">Campaign — Q1 Re-engage</span>
      </div>

      <div className="dbp-preview-channels">
        {[
          { icon: '📱', label: 'SMS',       val: '14.2K', color: '#10b981' },
          { icon: '💬', label: 'WhatsApp',  val: '8.9K',  color: '#25d366' },
          { icon: '🎙️', label: 'AI Voice',  val: '2.3K',  color: '#f59e0b' },
        ].map(({ icon, label, val, color }) => (
          <div key={label} className="dbp-ch-chip" style={{ '--cc': color }}>
            <span>{icon}</span>
            <div>
              <span className="dbp-ch-val">{val}</span>
              <span className="dbp-ch-label">{label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dbp-preview-metrics">
        {[
          { label: 'Delivered', pct: 98.2, color: '#22c55e' },
          { label: 'Opened',    pct: 67.4, color: '#00c8f8' },
          { label: 'Clicked',   pct: 41.8, color: '#1B48E0' },
        ].map(({ label, pct, color }) => (
          <div key={label} className="dbp-metric-row">
            <div className="dbp-metric-top">
              <span className="dbp-metric-label">{label}</span>
              <span className="dbp-metric-val" style={{ color }}>{pct}%</span>
            </div>
            <div className="dbp-metric-bar">
              <div className="dbp-metric-fill" style={{ width: `${pct}%`, background: color }} />
            </div>
          </div>
        ))}
      </div>

      <div className="dbp-preview-footer">
        <span className="dbp-preview-live-dot" />
        <span>Live data · Updated just now</span>
      </div>
    </div>
  );
}

/* ── Left panel ─────────────────────────────────────── */
function LeftPanel() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const anim   = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <div className="dbp-left" ref={ref}>
      {/* Background layers */}
      <div className="dbp-bg-mesh" aria-hidden="true" />
      <div className="dbp-orb dbp-orb-a" aria-hidden="true" />
      <div className="dbp-orb dbp-orb-b" aria-hidden="true" />
      <div className="dbp-orb dbp-orb-c" aria-hidden="true" />

      <div className="dbp-left-inner">
        {/* Logo */}
        <motion.div {...anim(0)} className="dbp-logo-wrap">
          <Image src="/ojiva-logo-white.png" alt="Ojiva AI" width={130} height={36} unoptimized />
        </motion.div>

        {/* Badge */}
        <motion.div {...anim(0.08)} className="dbp-badge">
          <span className="dbp-badge-dot" />
          Free · 30 minutes · No commitment
        </motion.div>

        {/* Headline */}
        <motion.div {...anim(0.14)}>
          <h1 className="dbp-headline">
            See Ojiva AI<br />
            <span className="dbp-headline-grad">live in action</span>
          </h1>
          <p className="dbp-subline">
            A personalised walkthrough around your channels, your volume, and your goals.
          </p>
        </motion.div>

        {/* Platform preview card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.22, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <PreviewCard />
        </motion.div>

        {/* Benefits */}
        <motion.ul {...anim(0.35)} className="dbp-benefits">
          {BENEFITS.map(({ icon, text }, i) => (
            <li key={i} className="dbp-benefit">
              <span className="dbp-benefit-icon">{icon}</span>
              <span>{text}</span>
            </li>
          ))}
        </motion.ul>

        {/* Stats strip */}
        <motion.div {...anim(0.48)} className="dbp-stats">
          {[
            { v: '500+', l: 'Companies' },
            { v: '98%',  l: 'Satisfaction' },
            { v: '< 2h', l: 'Response' },
          ].map(({ v, l }) => (
            <div key={l} className="dbp-stat">
              <span className="dbp-stat-val">{v}</span>
              <span className="dbp-stat-lbl">{l}</span>
            </div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.blockquote {...anim(0.58)} className="dbp-quote">
          <div className="dbp-quote-stars">★★★★★</div>
          <p>&ldquo;Best 30 minutes we&apos;ve ever invested. The team already knew our industry and showed us exactly what we needed.&rdquo;</p>
          <footer>
            <div className="dbp-quote-av">SC</div>
            <div>
              <strong>Sarah Chen</strong>
              <span> · Head of Growth, FinNova Technologies</span>
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </div>
  );
}

/* ── Step indicator ─────────────────────────────────── */
function StepBar({ current }) {
  return (
    <div className="dbp-stepbar">
      {STEPS.map((s, i) => {
        const done   = s.id < current;
        const active = s.id === current;
        return (
          <div key={s.id} className={`dbp-step${active ? ' active' : done ? ' done' : ''}`}>
            <div className="dbp-step-num">
              {done ? <span className="dbp-step-check">✓</span> : s.id}
            </div>
            <div className="dbp-step-text">
              <span className="dbp-step-label">{s.label}</span>
              <span className="dbp-step-sub">{s.sub}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`dbp-step-line${done ? ' done' : ''}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Form ───────────────────────────────────────────── */
function DemoForm() {
  const [step,     setStep]  = useState(1);
  const [form,     setForm]  = useState({ name: '', email: '', phone: '', company: '' });
  const [size,     setSize]  = useState('');
  const [volume,   setVol]   = useState('');
  const [channels, setCh]    = useState([]);
  const [time,     setTime]  = useState('');
  const [msg,      setMsg]   = useState('');
  const [agreed,   setAgree] = useState(false);
  const [status,   setSt]    = useState('idle');
  const [err,      setErr]   = useState('');

  const ch = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const s1ok = !!(form.name.trim() && isValidEmail(form.email) && form.company.trim());
  const s2ok = !!(size && volume);
  const ok   = s1ok && s2ok && agreed;

  async function submit(e) {
    e.preventDefault();
    if (!agreed) { setErr('Please agree to the privacy policy.'); return; }
    setSt('loading'); setErr('');
    try {
      const fd = new FormData();
      fd.append('access_key',           ACCESS_KEY);
      fd.append('name',                 form.name);
      fd.append('email',                form.email);
      fd.append('phone',                form.phone || 'Not provided');
      fd.append('company',              form.company);
      fd.append('company_size',         size              || 'Not specified');
      fd.append('monthly_volume',       volume            || 'Not specified');
      fd.append('channels_of_interest', channels.join(', ') || 'Not specified');
      fd.append('preferred_time',       time              || 'Not specified');
      fd.append('message',              msg               || 'No message');
      fd.append('subject', `🎯 Demo — ${form.name} (${form.company})`);
      fd.append('botcheck', '');
      fd.append('privacy_consent', 'Agreed');
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const d   = await res.json();
      if (d.success) setSt('success');
      else { setSt('error'); setErr(d.message || 'Something went wrong.'); }
    } catch { setSt('error'); setErr('Network error. Please try again.'); }
  }

  /* ── Success ─ */
  if (status === 'success') {
    return (
      <motion.div className="dbp-success"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className="dbp-success-icon-wrap">
          <div className="dbp-success-ring r1" /><div className="dbp-success-ring r2" />
          <motion.div className="dbp-success-icon"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4, ease: 'backOut' }}>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.42 }}>✓</motion.span>
          </motion.div>
        </div>
        <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }}>
          You&apos;re booked! 🎉
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.58 }}>
          We&apos;ll reach out to <strong>{form.email}</strong> within one business day to confirm your slot.
        </motion.p>
        <motion.div className="dbp-success-recap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.68 }}>
          {[
            ['👤', `${form.name} · ${form.company}`],
            size          ? ['🏢', `${size} employees`] : null,
            volume        ? ['📨', `${volume} msgs/month`] : null,
            channels.length > 0 ? ['📡', channels.join(', ')] : null,
          ].filter(Boolean).map(([icon, txt], i) => (
            <div key={i} className="dbp-success-row"><span>{icon}</span><span>{txt}</span></div>
          ))}
        </motion.div>
        <motion.div className="dbp-success-next" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.78 }}>
          {['Check your inbox for a confirmation email', "We'll call to lock in the perfect time", 'Prepare for your personalised 30-min demo'].map((t, i) => (
            <div key={i} className="dbp-success-step">
              <span className="dbp-success-num">{i + 1}</span>
              <span>{t}</span>
            </div>
          ))}
        </motion.div>
        <motion.div className="dbp-success-ctas" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.88 }}>
          <Link href="/"         className="btn-ojiva-outline">← Home</Link>
          <Link href="/platform" className="btn-ojiva-primary">Explore Platform →</Link>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div className="dbp-form-card"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>

      {/* Header */}
      <div className="dbp-form-header">
        <div className="dbp-online-badge">
          <span className="dbp-live-dot" />
          Team online · Responds in ~2 hours
        </div>
        <h2 className="dbp-form-title">Book Your Free Demo</h2>
        <p className="dbp-form-sub">30 minutes. Personalised. No obligation.</p>
      </div>

      {/* Step bar */}
      <StepBar current={step} />

      <form onSubmit={submit} noValidate>
        <AnimatePresence mode="wait">

          {/* Step 1 */}
          {step === 1 && (
            <motion.div key="s1"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}>
              <p className="dbp-step-hint">Who should we prepare the demo for?</p>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <FLInput id="d-name"    name="name"    label="Full Name"    value={form.name}    onChange={ch} required autoComplete="name" />
                </div>
                <div className="col-12 col-sm-6">
                  <FLInput id="d-email"   name="email"   label="Work Email"   value={form.email}   onChange={ch} required type="email" autoComplete="email" />
                </div>
                <div className="col-12 col-sm-6">
                  <FLInput id="d-company" name="company" label="Company Name" value={form.company} onChange={ch} required autoComplete="organization" />
                </div>
                <div className="col-12 col-sm-6">
                  <FLInput id="d-phone"   name="phone"   label="Phone Number" value={form.phone}   onChange={ch} type="tel" autoComplete="tel" optional />
                </div>
              </div>
              <button type="button"
                className={`dbp-next-btn mt-4${s1ok ? ' active' : ''}`}
                onClick={() => s1ok && setStep(2)} disabled={!s1ok}>
                Continue — Business Details <span>→</span>
              </button>
            </motion.div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <motion.div key="s2"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}>
              <p className="dbp-step-hint">Help us tailor the demo to your scale.</p>

              <div className="dbp-field-group">
                <div className="dbp-field-label">🏢 Company size</div>
                <PillSelector options={SIZES} value={size} onChange={setSize} name="Company size" />
              </div>

              <div className="dbp-field-group">
                <div className="dbp-field-label">📨 Monthly message volume</div>
                <PillSelector options={VOLUMES} value={volume} onChange={setVol} name="Monthly volume" />
              </div>

              <div className="dbp-nav-row mt-4">
                <button type="button" className="dbp-back-btn" onClick={() => setStep(1)}>← Back</button>
                <button type="button"
                  className={`dbp-next-btn${s2ok ? ' active' : ''}`}
                  onClick={() => s2ok && setStep(3)} disabled={!s2ok}>
                  Continue — Channels <span>→</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <motion.div key="s3"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}>
              <p className="dbp-step-hint">What do you want to explore in the demo?</p>

              <div className="dbp-field-group">
                <div className="dbp-field-label">📡 Channels <span className="dbp-opt">(pick all that apply)</span></div>
                <PillSelector options={CHANNELS} value={channels} onChange={setCh} name="Channels" multi />
              </div>

              <div className="dbp-field-group">
                <div className="dbp-field-label">🕐 Preferred time <span className="dbp-opt">(optional)</span></div>
                <PillSelector options={TIMES} value={time} onChange={setTime} name="Time preference" />
              </div>

              <div className={`fl-field fl-textarea-field${msg ? ' has-value' : ''}`}>
                <textarea id="d-msg" name="message" className="fl-input fl-textarea" placeholder=" "
                  value={msg} onChange={e => setMsg(e.target.value)} rows={3} />
                <label className="fl-label" htmlFor="d-msg">
                  Anything specific to cover? <span className="fl-opt">(optional)</span>
                </label>
              </div>

              <label className={`cf-consent mt-3${agreed ? ' checked' : ''}`} htmlFor="d-agree">
                <input id="d-agree" type="checkbox" className="cf-consent-input"
                  checked={agreed} onChange={e => { setAgree(e.target.checked); setErr(''); }} />
                <span className="cf-consent-box">{agreed ? '✓' : ''}</span>
                <span className="cf-consent-text">
                  I agree to receive demo-related communications from Ojiva AI.{' '}
                  <a href="/privacy" className="cf-consent-link">Privacy Policy</a>
                </span>
              </label>

              <AnimatePresence>
                {err && (
                  <motion.div className="cf-error mt-2" role="alert"
                    initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    ⚠️ {err}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="dbp-nav-row mt-4">
                <button type="button" className="dbp-back-btn" onClick={() => setStep(2)}>← Back</button>
                <motion.button type="submit"
                  className={`dbp-submit-btn${ok ? ' active' : ''}`}
                  disabled={status === 'loading' || !ok}
                  whileTap={ok ? { scale: 0.97 } : {}}>
                  {status === 'loading'
                    ? <><span className="contact-spinner" /> Booking…</>
                    : <>🚀 Book My Free Demo</>}
                </motion.button>
              </div>

              <div className="dbp-trust">
                {['100% free', 'No credit card', 'No obligation', '30 minutes'].map(t => (
                  <span key={t}><span className="dbp-trust-check">✓</span> {t}</span>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </form>
    </motion.div>
  );
}

/* ── Perks section (right panel bottom) ─────────────── */
function PerksSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });
  return (
    <motion.div className="dbp-perks" ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
      <p className="dbp-perks-title">What you&apos;ll explore in 30 minutes</p>
      <div className="dbp-perks-grid">
        {DEMO_PERKS.map(({ icon, title, desc }, i) => (
          <motion.div key={title} className="dbp-perk"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
            <span className="dbp-perk-icon">{icon}</span>
            <div>
              <strong className="dbp-perk-title">{title}</strong>
              <span className="dbp-perk-desc">{desc}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Page ───────────────────────────────────────────── */
export default function DemoBooking() {
  return (
    <main className="dbp-page">
      <div className="dbp-split">
        <LeftPanel />
        <div className="dbp-right">
          <div className="dbp-right-inner">
            <DemoForm />
            <PerksSection />
          </div>
        </div>
      </div>
    </main>
  );
}
