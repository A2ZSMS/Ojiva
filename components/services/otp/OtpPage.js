'use client';

import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/ui/CTA';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import FAQ from '@/components/services/whatsapp-chatbot/FAQ';
import RelatedServices from '@/components/ui/RelatedServices';

/* ─── Data ─────────────────────────────────────────── */

const HOW_STEPS = [
  {
    step: '01',
    icon: '📲',
    title: 'User Enters Phone Number',
    desc: 'Your user initiates login, checkout, or account action and submits their mobile number.',
  },
  {
    step: '02',
    icon: '⚡',
    title: 'Ojiva Sends OTP Instantly',
    desc: 'Your server calls our API. We route the OTP via the fastest available channel — SMS, WhatsApp, or Voice — in under 3 seconds.',
  },
  {
    step: '03',
    icon: '✅',
    title: 'User Verifies & Proceeds',
    desc: 'The user enters the OTP. Your app calls our verify endpoint. Session granted — secure and seamless.',
  },
];

const OTP_CHANNELS = [
  {
    icon: '📱',
    title: 'SMS OTP',
    color: '#1B48E0',
    desc: 'The fastest, most universal channel. Reaches every mobile in India with no app required. Ideal for banking, e-commerce, and high-volume use cases.',
    points: [
      'Sub-3 second delivery via direct telecom routes',
      'DLT registered transactional template',
      'Automatic fallback if primary route fails',
      'Supports 6–8 digit configurable OTP length',
    ],
  },
  {
    icon: '💬',
    title: 'WhatsApp OTP',
    color: '#25D366',
    desc: 'Higher open rates than SMS. Delivered inside WhatsApp with branded sender name. Perfect for consumer apps, fintech, and e-commerce with WhatsApp-first audiences.',
    points: [
      'Meta-verified delivery with read receipts',
      'Branded business name & logo in notification',
      'Works even without cellular signal (Wi-Fi)',
      'Supports rich-text OTP message templates',
    ],
  },
  {
    icon: '🎙️',
    title: 'Voice OTP',
    color: '#a78bfa',
    desc: 'For users who cannot read SMS — elderly users, feature phones, or international numbers. A text-to-speech call reads the OTP aloud twice for clarity.',
    points: [
      'AI TTS reads OTP in English, Hindi & regional languages',
      'DTMF confirmation option available',
      'Ideal for accessibility & elderly users',
      'Automatic retry if call not answered',
    ],
  },
];

const USE_CASES = [
  { icon: '🏦', title: 'Banking & Finance', desc: 'Secure login, fund transfers, and transaction confirmations. TRAI & RBI compliant OTP delivery.' },
  { icon: '🛒', title: 'E-commerce', desc: 'Account signup, checkout verification, and order confirmation OTP flows at any scale.' },
  { icon: '🏥', title: 'Healthcare', desc: 'Patient login, prescription access, and teleconsultation authentication with encrypted OTP.' },
  { icon: '🎓', title: 'Education', desc: 'Student onboarding, exam portal access, and parent verification with instant OTP.' },
  { icon: '💳', title: 'Fintech & Payments', desc: 'Wallet top-ups, UPI confirmations, and KYC verification via compliant OTP APIs.' },
  { icon: '🎮', title: 'Gaming & Apps', desc: 'Phone-based registration, anti-fraud 2FA, and account recovery via SMS and WhatsApp OTP.' },
];

const SECURITY_ITEMS = [
  {
    icon: '🔐',
    title: 'AES-256 Encryption',
    desc: 'Every OTP is generated and transmitted with AES-256-GCM encryption — the same standard used by global banks.',
  },
  {
    icon: '🔒',
    title: 'TLS 1.3 in Transit',
    desc: 'All API calls travel over TLS 1.3. No OTP is ever sent over plain HTTP. MITM attacks are structurally prevented.',
  },
  {
    icon: '🛡️',
    title: 'IP Whitelisting',
    desc: 'Lock your API key to specific IP addresses. Only your servers can trigger OTP sends — no unauthorized access.',
  },
  {
    icon: '📋',
    title: 'TRAI DLT Registered',
    desc: 'All transactional OTP routes are DLT-registered per TRAI mandate. Zero non-compliant delivery risk.',
  },
];

const OTP_FAQS = [
  {
    q: 'How fast is OTP delivery via Ojiva AI?',
    a: 'Over 95% of OTPs are delivered within 3 seconds of the API call. We use direct telecom operator routes (no aggregator hops) to minimize latency. Our SLA guarantees sub-5 second delivery during normal network conditions.',
  },
  {
    q: 'Is your OTP service TRAI DLT compliant?',
    a: 'Yes. All SMS OTP routes are registered on the TRAI DLT platform under the Transactional category. Templates are pre-approved. You simply provide your PE ID and we handle the rest.',
  },
  {
    q: 'What happens if the OTP SMS is not delivered?',
    a: 'Ojiva AI has automatic retry logic. If delivery fails on the primary route, the system retries on a backup route within 5 seconds. You can also configure multi-channel fallback — e.g., SMS → WhatsApp → Voice — via a single API call.',
  },
  {
    q: 'How is OTP pricing calculated?',
    a: 'OTP SMS is priced at ₹0.15–₹0.18 per message depending on volume. WhatsApp OTP is priced per Meta conversation pricing. Voice OTP is billed per minute. See our pricing page for full details. No monthly fees — pure pay-as-you-go.',
  },
  {
    q: 'Can I configure OTP expiry time and length?',
    a: 'Yes. Via the API you can set OTP length (4–8 digits), expiry time (30s–600s), maximum retry attempts, and cooldown period between retries. All configurable per request or at the account level.',
  },
];

/* ─── Main Component ──────────────────────────────── */

export default function OtpPage({ faqs }) {
  // Prefer FAQs passed from page-level (so JSON-LD + UI stay in sync) but
  // fall back to the local copy so the component stays self-contained.
  const renderFaqs = (faqs && faqs.length) ? faqs : OTP_FAQS;
  return (
    <>
      {/* ── Hero ── */}
      <section className="service-hero" aria-labelledby="otp-hero-heading">
        <div className="container">
          <div className="service-hero-inner">
            <div className="row align-items-center g-5">
              {/* Left: text */}
              <div className="col-12 col-lg-6">
                <div className="service-badge" style={{ background: 'rgba(27,72,224,0.12)', color: '#7aaeff', border: '1px solid rgba(27,72,224,0.25)' }}>
                  🔐 OTP &amp; 2FA Solutions
                </div>
                <h1 id="otp-hero-heading" className="service-hero-title">
                  <span className="sh-accent sh-accent-sms">OTP &amp; 2FA</span>
                  <br />Solutions India
                </h1>
                <p className="service-hero-desc">
                  Deliver one-time passwords in under 3 seconds via SMS, WhatsApp, or Voice call. AES-256 encrypted. DLT compliant. Trusted by 500+ businesses.
                </p>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <Link href="/contact" className="btn-hero-primary border-0">Get Free API Key →</Link>
                  <Link href="/book-demo" className="btn-hero-outline">Book a Demo</Link>
                </div>
                <div className="service-stats-row">
                  {[
                    { value: '<3s', label: 'Delivery time' },
                    { value: '99.9%', label: 'Success rate' },
                    { value: '3', label: 'OTP channels' },
                    { value: '500+', label: 'Businesses trust us' },
                  ].map(({ value, label }) => (
                    <div key={label} className="service-stat-item">
                      <span className="service-stat-value">{value}</span>
                      <span className="service-stat-label">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: OTP terminal mockup */}
              <div className="col-12 col-lg-6">
                <div className="api-snippet-wrap">
                  <div className="api-snippet-header">
                    <div className="api-snippet-dots">
                      <span className="dot-red" style={{ background: '#ef4444' }} />
                      <span className="dot-yellow" style={{ background: '#f59e0b' }} />
                      <span className="dot-green" style={{ background: '#22c55e' }} />
                    </div>
                    <span className="api-snippet-label">OTP Delivery — Live Request</span>
                  </div>
                  <div className="api-snippet-body">
                    <div><span className="api-comment">// Send OTP via SMS, WhatsApp or Voice</span></div>
                    <div><span className="api-key">POST</span> <span className="api-str">https://api.ojiva.ai/v1/otp/send</span></div>
                    <div><span className="api-key">Authorization</span>: Bearer <span className="api-str">ojv_live_xxx</span></div>
                    <br />
                    <div>{'{'}</div>
                    <div>&nbsp;&nbsp;<span className="api-key">&quot;to&quot;</span>: <span className="api-str">&quot;+919876543210&quot;</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">&quot;channel&quot;</span>: <span className="api-str">&quot;sms&quot;</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">&quot;length&quot;</span>: <span className="api-num">6</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">&quot;expiry&quot;</span>: <span className="api-num">120</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">&quot;template_id&quot;</span>: <span className="api-str">&quot;otp_login_v2&quot;</span></div>
                    <div>{'}'}</div>
                    <br />
                    <div><span className="api-comment">// 200 OK — response</span></div>
                    <div>{'{'}</div>
                    <div>&nbsp;&nbsp;<span className="api-key">&quot;status&quot;</span>: <span className="api-str">&quot;sent&quot;</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">&quot;otp_id&quot;</span>: <span className="api-str">&quot;otp_01jx8k2m&quot;</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">&quot;latency_ms&quot;</span>: <span className="api-num">284</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">&quot;expires_at&quot;</span>: <span className="api-str">&quot;2026-05-02T10:03:00Z&quot;</span></div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section-padding" aria-labelledby="otp-how-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading
                tag="How It Works"
                title="OTP Delivery in 3 Simple Steps"
                subtitle="From API call to verified user in under 3 seconds. No complex setup required."
                center
              />
            </div>
          </FadeUp>
          <StaggerContainer className="row g-4" staggerDelay={0.15}>
            {HOW_STEPS.map(({ step, icon, title, desc }, i) => (
              <StaggerItem key={step} className="col-12 col-md-4">
                <div className="how-card">
                  <div className="how-step">{step}</div>
                  <div className="how-icon">{icon}</div>
                  <h3 className="how-title">{title}</h3>
                  <p className="how-desc">{desc}</p>
                  {i < HOW_STEPS.length - 1 && <div className="how-connector">→</div>}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── OTP Channels ── */}
      <section className="section-padding bg-section" aria-labelledby="otp-channels-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading
                tag="OTP Channels"
                title="Send OTP on Any Channel"
                subtitle="One API, three delivery channels. Automatic fallback ensures your OTP always reaches the user."
                center
              />
            </div>
          </FadeUp>
          <StaggerContainer className="row g-4" staggerDelay={0.12}>
            {OTP_CHANNELS.map(({ icon, title, color, desc, points }) => (
              <StaggerItem key={title} className="col-12 col-md-4">
                <div className="service-type-card">
                  <div
                    className="cb-card-accent"
                    style={{ height: '4px', background: `linear-gradient(90deg, ${color}, ${color}88)`, marginBottom: '1.25rem', borderRadius: '2px' }}
                  />
                  <div
                    className="service-type-icon"
                    style={{ background: `${color}14`, borderColor: `${color}30`, fontSize: '1.8rem', marginBottom: '1rem' }}
                  >
                    {icon}
                  </div>
                  <h3 className="service-type-title">{title}</h3>
                  <p className="service-type-desc">{desc}</p>
                  <ul className="service-type-points">
                    {points.map((p) => (
                      <li key={p}><span style={{ color }}>✓</span> {p}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="section-padding" aria-labelledby="otp-usecases-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading
                tag="Use Cases"
                title="OTP for Every Industry"
                subtitle="From banking to gaming — secure verification drives trust across every sector."
                center
              />
            </div>
          </FadeUp>
          <StaggerContainer className="row g-3" staggerDelay={0.08}>
            {USE_CASES.map(({ icon, title, desc }) => (
              <StaggerItem key={title} className="col-12 col-sm-6 col-md-4">
                <div className="industry-card">
                  <span className="industry-icon">{icon}</span>
                  <h3 className="industry-title">{title}</h3>
                  <p className="industry-use">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── API Code Preview ── */}
      <section className="section-padding bg-section" aria-labelledby="otp-api-heading">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <FadeUp>
                <SectionHeading
                  tag="Developer First"
                  title="Integrate OTP in Minutes"
                  subtitle="A single REST endpoint handles send, verify, and retry — with SDKs for every major language."
                />
                <ul className="feature-deep-list mt-4">
                  {[
                    'REST API with OpenAPI 3.0 spec',
                    'SDK for Node.js, Python, PHP, Java',
                    'Multi-channel fallback in one call',
                    'Webhook for delivery &amp; verification events',
                    '99.99% API uptime SLA',
                    'Sandbox environment for testing',
                  ].map((pt) => (
                    <li key={pt}><span className="check-icon">✓</span><span dangerouslySetInnerHTML={{ __html: pt }} /></li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-ojiva-primary mt-4 d-inline-flex">Get API Key →</Link>
              </FadeUp>
            </div>
            <div className="col-12 col-lg-7">
              <FadeUp delay={0.1}>
                <div className="api-snippet-wrap">
                  <div className="api-snippet-header">
                    <div className="api-snippet-dots">
                      <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                      <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#f59e0b', display: 'inline-block', marginLeft: 6 }} />
                      <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#22c55e', display: 'inline-block', marginLeft: 6 }} />
                    </div>
                    <span className="api-snippet-label">Verify OTP — Node.js</span>
                  </div>
                  <div className="api-snippet-body">
                    <div><span className="api-comment">// npm install ojiva-ai</span></div>
                    <div><span className="api-key">const</span> {'{'} OjivaAI {'}'} = <span className="api-method">require</span>(<span className="api-str">&apos;ojiva-ai&apos;</span>);</div>
                    <div><span className="api-key">const</span> client = <span className="api-key">new</span> <span className="api-method">OjivaAI</span>({'{'} apiKey: <span className="api-str">&apos;ojv_live_xxx&apos;</span> {'}'});</div>
                    <br />
                    <div><span className="api-comment">// Step 1: Send OTP</span></div>
                    <div><span className="api-key">const</span> result = <span className="api-key">await</span> client.otp.<span className="api-method">send</span>({'{'}</div>
                    <div>&nbsp;&nbsp;to: <span className="api-str">&apos;+919876543210&apos;</span>,</div>
                    <div>&nbsp;&nbsp;channel: <span className="api-str">&apos;sms&apos;</span>,</div>
                    <div>&nbsp;&nbsp;length: <span className="api-num">6</span>, expiry: <span className="api-num">120</span></div>
                    <div>{'}'});</div>
                    <br />
                    <div><span className="api-comment">// Step 2: Verify OTP entered by user</span></div>
                    <div><span className="api-key">const</span> verify = <span className="api-key">await</span> client.otp.<span className="api-method">verify</span>({'{'}</div>
                    <div>&nbsp;&nbsp;otp_id: result.otp_id,</div>
                    <div>&nbsp;&nbsp;code: <span className="api-str">&apos;847291&apos;</span></div>
                    <div>{'}'});</div>
                    <br />
                    <div><span className="api-comment">// {'{ verified: true, latency_ms: 312 }'}</span></div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Security Section ── */}
      <section className="section-padding" aria-labelledby="otp-security-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading
                tag="Security First"
                title="Enterprise-Grade OTP Security"
                subtitle="Every OTP delivery is encrypted, compliant, and protected against spoofing and replay attacks."
                center
              />
            </div>
          </FadeUp>
          <StaggerContainer className="row g-4" staggerDelay={0.1}>
            {SECURITY_ITEMS.map(({ icon, title, desc }) => (
              <StaggerItem key={title} className="col-12 col-sm-6 col-lg-3">
                <div className="feature-card">
                  <div className="feature-icon" style={{ background: 'rgba(27,72,224,0.08)' }}>
                    {icon}
                  </div>
                  <h3 className="feature-title">{title}</h3>
                  <p className="feature-desc">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ faqs={renderFaqs} subtitle="Everything you need to know about OTP delivery, compliance, and pricing." />

      {/* ── Related Services ── */}
      <RelatedServices currentPath="/otp" />

      {/* ── CTA ── */}
      <FadeUp>
        <CTA
          title="Secure Your Users With Instant OTP"
          subtitle="Sub-3-second delivery. 99.9% success rate. DLT compliant. Get a free API key and go live today."
          primaryLabel="Book a Free Demo"
          primaryHref="/contact"
          secondaryLabel="Get API Key"
          secondaryHref="/contact"
        />
      </FadeUp>
    </>
  );
}
