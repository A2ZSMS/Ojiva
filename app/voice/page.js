import Link from 'next/link';
import Image from 'next/image';
import CTA from '@/components/CTA';
import SectionHeading from '@/components/SectionHeading';
import { buildMetadata, serviceSchema, breadcrumbSchema } from '@/lib/metadata';
import {
  FadeUp, SlideLeft, SlideRight, ScalePop,
  StaggerContainer, StaggerItem, HeroEntrance, FloatingElement,
  BlurReveal, ParallaxSection, TextReveal, ScrollScale, StaggerGrid, StaggerGridItem,
} from '@/components/Animations';

export const metadata = buildMetadata({
  title: 'AI Voice Call Automation India — IVR, OBD & Conversational AI',
  description:
    'Automate customer calls with Ojiva AI Voice. Outbound dialer, IVR builder, AI voice bots, OBD campaigns, and missed call services. 99.9% call connect rate. Trusted by 500+ enterprises.',
  path: '/voice',
  keywords: [
    'AI voice call automation India', 'outbound calling platform India', 'IVR solution India',
    'OBD outbound dialer India', 'voice bot India', 'automated voice call India',
    'missed call service India', 'voice broadcasting India', 'AI phone bot India',
    'cloud telephony India', 'conversational AI voice India', 'enterprise voice API India',
  ],
});

const VOICE_TYPES = [
  { icon: '📞', title: 'Outbound Calling', color: '#F97316', desc: 'Launch massive outbound voice campaigns for lead gen, reminders, surveys, and follow-ups.', points: ['Bulk outbound dialer', 'Scheduled campaigns', 'CRM-triggered calls', 'Agent live transfer'] },
  { icon: '🎛️', title: 'IVR Systems', color: '#EF4444', desc: 'Multi-level IVR menus with DTMF and voice that route customers to the right department.', points: ['Drag-and-drop builder', 'Multi-level menus', 'DTMF + voice input', 'Real-time routing'] },
  { icon: '🤖', title: 'AI Voice Bot', color: '#1B48E0', desc: 'NLP-powered AI agents that hold real conversations and resolve queries — 24×7, zero wait.', points: ['Natural language understanding', 'Multilingual (10+)', 'Human handoff on demand', 'Conversation analytics'] },
  { icon: '📵', title: 'Missed Call Service', color: '#10B981', desc: 'Capture leads and trigger instant callbacks — zero cost to the caller, maximum reach.', points: ['Virtual numbers', 'Instant callback', 'Lead capture + CRM', 'SMS acknowledgement'] },
];

const INDUSTRIES = [
  { icon: '🏦', title: 'Banking & Finance', use: 'Loan collection, KYC verification, EMI reminders, fraud alert calls' },
  { icon: '🛒', title: 'E-Commerce', use: 'Order confirmation calls, delivery alerts, return initiation, surveys' },
  { icon: '🏥', title: 'Healthcare', use: 'Appointment reminders, post-consultation follow-ups, lab results' },
  { icon: '🎓', title: 'Education', use: 'Admissions follow-up, fee reminders, exam alerts, parent comms' },
  { icon: '✈️', title: 'Travel & Hospitality', use: 'Booking confirmations, check-in reminders, feedback collection' },
  { icon: '🏠', title: 'Real Estate', use: 'Site visit reminders, property updates, broker lead distribution' },
  { icon: '🚗', title: 'Automotive', use: 'Test drive follow-ups, service reminders, insurance renewal calls' },
  { icon: '🏭', title: 'BFSI & Collections', use: 'NPA alerts, payment reminders, settlement calls, compliance recording' },
];

const HOW_STEPS = [
  { step: '01', icon: '📋', title: 'Design Call Flow', desc: 'Use our visual IVR builder or provide a script for AI voice bots.' },
  { step: '02', icon: '☁️', title: 'Get Virtual Number', desc: 'We provision dedicated DID/toll-free numbers — instantly available.' },
  { step: '03', icon: '🔗', title: 'Connect via API/CRM', desc: 'Trigger calls from CRM, API, or schedule bulk campaigns.' },
  { step: '04', icon: '📊', title: 'Analyse Every Call', desc: 'AI summaries, recordings, pickup rates, and real-time optimisation.' },
];

const METRICS = [
  { value: '99.9%', label: 'Call Connect Rate' },
  { value: '10M+', label: 'Calls Monthly' },
  { value: '24×7', label: 'AI Availability' },
  { value: '10+', label: 'Languages' },
];

const VOICEBOT_STATS = [
  { label: 'Languages', val: 'Hi, En, Ta, Te, Kn +', color: '#F97316' },
  { label: 'Accuracy', val: '95%+ intent match', color: '#22c55e' },
  { label: 'Avg. Resolution', val: '2:45 mins (bot-only)', color: '#0ea5e9' },
  { label: 'Escalation Rate', val: '<28% to human', color: '#8B5CF6' },
  { label: 'Availability', val: '24×7 · 365 days', color: '#F97316' },
];

const CAMPAIGN_STATS = [
  { label: 'Campaign', val: 'EMI_Reminder_Dec', icon: '📢' },
  { label: 'Total Dialled', val: '12,400', icon: '📞' },
  { label: 'Connected', val: '10,831 (87.3%)', icon: '✅' },
  { label: 'Promised to Pay', val: '4,210 (38.9%)', icon: '💰' },
  { label: 'Avg. Duration', val: '2:34 mins', icon: '⏱️' },
];

const voiceServiceSchema = serviceSchema({ name: 'AI Voice Call Automation', description: 'Automate customer calls — outbound dialer, IVR, AI voice bots. 99.9% connect rate.', url: '/voice', keywords: ['AI voice call India', 'outbound dialer', 'IVR solution', 'voice bot India'] });
const voiceBreadcrumb = breadcrumbSchema([{ name: 'Home', url: 'https://ojiva.ai/' }, { name: 'AI Voice', url: 'https://ojiva.ai/voice' }]);

export default function VoicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceBreadcrumb) }} />

      {/* ══ HERO ══ */}
      <section className="service-hero" aria-labelledby="voice-hero-heading">
        <div className="container">
          <div className="service-hero-inner">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-6">
                <HeroEntrance index={0}>
                  <div className="service-badge voice-badge">📞 AI Voice Automation</div>
                </HeroEntrance>
                <HeroEntrance index={1}>
                  <h1 id="voice-hero-heading" className="service-hero-title">
                    Automate Every{' '}<span className="sh-accent-voice">Customer Call</span><br />with AI Voice
                  </h1>
                </HeroEntrance>
                <HeroEntrance index={2}>
                  <p className="service-hero-desc">
                    From outbound dialers to AI-powered voice bots — handle millions of customer calls automatically, 24×7, in 10+ languages. Reduce call centre costs by 60%.
                  </p>
                </HeroEntrance>
                <HeroEntrance index={3}>
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    <Link href="/contact" className="btn-hero-primary voice-btn-primary">Start Automating Calls →</Link>
                    <Link href="/book-demo" className="btn-hero-outline">Hear a Demo Call</Link>
                  </div>
                </HeroEntrance>
                <HeroEntrance index={4}>
                  <div className="service-stats-row">
                    {METRICS.map(({ value, label }) => (
                      <div key={label} className="service-stat-item">
                        <span className="service-stat-value">{value}</span>
                        <span className="service-stat-label">{label}</span>
                      </div>
                    ))}
                  </div>
                </HeroEntrance>
              </div>
              <div className="col-12 col-lg-6">
                <HeroEntrance index={2}>
                  <FloatingElement amplitude={8} duration={5}>
                    <Image src="/images/voice-hero.png" alt="AI Voice Call automation with speech analytics and multi-language support" width={600} height={600} priority className="cb-hero-image" />
                  </FloatingElement>
                </HeroEntrance>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VOICE TYPES ══ */}
      <section className="section-padding" aria-labelledby="voice-types-heading">
        <div className="container">
          <ScrollScale>
            <div className="text-center mb-5">
              <SectionHeading tag="Voice Solutions" title="Every Voice Solution Your Business Needs" subtitle="From simple IVRs to fully autonomous AI voice agents — one platform, all telephony." center />
            </div>
          </ScrollScale>
          <StaggerContainer className="row g-4">
            {VOICE_TYPES.map(({ icon, title, color, desc, points }) => (
              <StaggerItem key={title} className="col-12 col-sm-6 col-lg-3">
                <div className="service-type-card">
                  <div className="cb-card-accent" style={{ background: color }} />
                  <div className="service-type-icon" style={{ background: `${color}14`, borderColor: `${color}25` }}>{icon}</div>
                  <h3 className="service-type-title">{title}</h3>
                  <p className="service-type-desc">{desc}</p>
                  <ul className="service-type-points">
                    {points.map((p) => (<li key={p}><span style={{ color }}>✓</span> {p}</li>))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ FEATURE DEEP DIVES ══ */}
      <section className="section-padding bg-section" aria-labelledby="voice-features-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading tag="Platform Features" title="Enterprise Voice Infrastructure That Never Sleeps" subtitle="Carrier-grade cloud telephony with AI intelligence — from first ring to last word." center />
            </div>
          </FadeUp>

          {/* AI Voice Bot */}
          <div className="service-feature-row mb-5">
            <SlideLeft className="service-feature-text">
              <span className="section-tag">AI Voice Bot</span>
              <h2 className="section-title mt-2">AI Agents That Sound Human, Work at Scale</h2>
              <p className="section-subtitle mb-4">
                Conversational AI voice bots that understand natural speech, handle complex queries, and resolve issues — in Hindi, English, and 8+ Indian languages — 24×7, zero hold time.
              </p>
              <ul className="feature-deep-list">
                {['Natural Language Understanding (NLU)', 'Hindi, English, Tamil, Telugu & more', 'Intent recognition with 95%+ accuracy', 'Seamless escalation to live agent', 'AI-generated call summaries', 'Compliance recording & audit trail'].map((pt) => (
                  <li key={pt}><span className="check-icon">✓</span>{pt}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn-ojiva-primary mt-4 voice-btn-primary d-inline-flex">Build Your Voice Bot →</Link>
            </SlideLeft>
            <SlideRight className="service-feature-visual">
              <div className="svc-stat-list">
                {VOICEBOT_STATS.map(({ label, val, color }) => (
                  <div key={label} className="svc-stat-row">
                    <span className="svc-stat-label">{label}</span>
                    <span className="svc-stat-val" style={{ color }}>{val}</span>
                  </div>
                ))}
                <div className="svc-stat-highlight voice-highlight">
                  <span className="svc-stat-highlight-icon">💡</span>
                  <p className="svc-stat-highlight-text">60% reduction in call centre costs on average</p>
                </div>
              </div>
            </SlideRight>
          </div>

          {/* Outbound Dialer */}
          <div className="service-feature-row">
            <SlideLeft className="service-feature-visual order-lg-1">
              <div className="cb-handoff-wrap">
                <p className="cb-flow-label">Outbound Campaign — Live Stats</p>
                {CAMPAIGN_STATS.map(({ label, val, icon }) => (
                  <div key={label} className="cb-handoff-msg cb-handoff-msg--bot">
                    <div className="cb-handoff-bubble cb-handoff-bubble--bot">
                      <span>{icon}</span> {label}: <strong style={{ color: '#fdba74' }}>{val}</strong>
                    </div>
                  </div>
                ))}
                <div className="cb-handoff-banner">⚡ 500 concurrent calls — zero agents needed</div>
              </div>
            </SlideLeft>
            <SlideRight className="service-feature-text order-lg-2">
              <span className="section-tag">Outbound Dialer</span>
              <h2 className="section-title mt-2">Dial 500+ Customers Simultaneously, Automatically</h2>
              <p className="section-subtitle mb-4">
                Cloud outbound dialer with intelligent pacing, answer machine detection, and live agent routing — for collections, lead follow-ups, and broadcast campaigns.
              </p>
              <ul className="feature-deep-list">
                {['Predictive, progressive & preview dialling', 'Answering machine detection (AMD)', 'Dynamic script personalisation', 'CRM-synced contacts & DNC management', 'Real-time agent dashboard & coaching', 'Full call recording + AI summaries'].map((pt) => (
                  <li key={pt}><span className="check-icon">✓</span>{pt}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn-ojiva-primary mt-4 voice-btn-primary d-inline-flex">Launch Your Campaign →</Link>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="section-padding" aria-labelledby="voice-how-heading">
        <div className="container">
          <BlurReveal>
            <div className="text-center mb-5">
              <SectionHeading tag="How It Works" title="Deploy AI Voice in 24 Hours" subtitle="From script to live calls — voice automation end-to-end within a day." center />
            </div>
          </BlurReveal>
          <StaggerContainer className="row g-4" staggerDelay={0.15}>
            {HOW_STEPS.map(({ step, icon, title, desc }, i) => (
              <StaggerItem key={step} className="col-12 col-sm-6 col-lg-3">
                <div className="how-card">
                  <div className="how-step voice-how-step">{step}</div>
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

      {/* ══ API SNIPPET ══ */}
      <section className="section-padding bg-section" aria-labelledby="voice-api-heading">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-5">
              <SlideLeft>
                <SectionHeading tag="Developer First" title="Trigger AI Voice Calls from Any System" subtitle="Our Voice API lets you initiate calls, manage IVR flows, and receive transcripts programmatically." />
                <ul className="feature-deep-list mt-4">
                  {['REST API for outbound call triggers', 'Webhook for call events & transcripts', 'TwiML-compatible call flow scripting', 'SDK for Node.js, Python, PHP, Java', 'Sandbox with virtual test number'].map((pt) => (
                    <li key={pt}><span className="check-icon">✓</span>{pt}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-ojiva-primary mt-4 voice-btn-primary d-inline-flex">Get Voice API Docs →</Link>
              </SlideLeft>
            </div>
            <div className="col-12 col-lg-7">
              <ScalePop>
                <div className="api-snippet-wrap">
                  <div className="api-snippet-header">
                    <div className="api-snippet-dots">
                      <span className="dot-red" /><span className="dot-yellow" /><span className="dot-green" />
                    </div>
                    <span className="api-snippet-label">Initiate AI Voice Call — Node.js</span>
                  </div>
                  <div className="api-snippet-body">
                    <div><span className="api-comment">// Trigger a personalised AI outbound call</span></div>
                    <div><span className="api-key">await</span> client.voice.<span className="api-method">call</span>({'{'}</div>
                    <div>&nbsp;&nbsp;<span className="api-key">to</span>: <span className="api-str">&apos;+919876543210&apos;</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">from</span>: <span className="api-str">&apos;+918069XXXXXX&apos;</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">type</span>: <span className="api-str">&apos;ai_bot&apos;</span>,</div>
                    <div>&nbsp;&nbsp;<span className="api-key">script</span>: {'{'}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="api-key">template</span>: <span className="api-str">&apos;emi_reminder&apos;</span>,</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="api-key">language</span>: <span className="api-str">&apos;hi-IN&apos;</span>,</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="api-key">params</span>: {'{'} <span className="api-key">name</span>: <span className="api-str">&apos;Rajesh&apos;</span>, <span className="api-key">amount</span>: <span className="api-num">12800</span> {'}'}</div>
                    <div>&nbsp;&nbsp;{'}'},</div>
                    <div>&nbsp;&nbsp;<span className="api-key">webhookUrl</span>: <span className="api-str">&apos;https://api.your-app.com/call-events&apos;</span></div>
                    <div>{'}'});</div>
                    <br />
                    <div><span className="api-comment">// {'{ callId: "vcl_01", status: "initiated", estimated: "3s" }'}</span></div>
                  </div>
                </div>
              </ScalePop>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section className="section-padding" aria-labelledby="voice-industries-heading">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading tag="Use Cases" title="Voice Automation for Every Industry" subtitle="From BFSI collections to healthcare reminders — AI voice works wherever phone is fastest." center />
            </div>
          </FadeUp>
          <StaggerGrid className="row g-3" staggerDelay={0.06}>
            {INDUSTRIES.map(({ icon, title, use }) => (
              <StaggerGridItem key={title} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="industry-card">
                  <span className="industry-icon">{icon}</span>
                  <h3 className="industry-title">{title}</h3>
                  <p className="industry-use">{use}</p>
                </div>
              </StaggerGridItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ══ EXPLORE OTHER SERVICES ══ */}
      <section className="section-padding">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-4">
              <SectionHeading tag="More Services" title="Explore Our Communication Suite" subtitle="Pair Voice with messaging channels for a complete omnichannel experience." center />
            </div>
          </FadeUp>
          <StaggerGrid className="row g-4">
            {[
              { href: '/sms', icon: '📱', title: 'Bulk SMS', desc: 'Transactional, promotional & OTP at scale.', color: '#1B48E0' },
              { href: '/whatsapp', icon: '💬', title: 'WhatsApp Business API', desc: 'Official Meta BSP partner. 98% open rate.', color: '#25D366' },
              { href: '/whatsapp-chatbot', icon: '🤖', title: 'WhatsApp Chatbot', desc: 'AI-powered 24/7 customer automation.', color: '#128C7E' },
              { href: '/rcs', icon: '✨', title: 'RCS Messaging', desc: 'Rich cards, carousels & verified sender.', color: '#FF6D42' },
            ].map(({ href, icon, title, desc, color }) => (
              <StaggerGridItem key={href} className="col-12 col-sm-6 col-lg-3">
                <Link href={href} className="service-cross-card">
                  <span className="scc-icon" style={{ background: `${color}14`, color }}>{icon}</span>
                  <h3 className="scc-title">{title}</h3>
                  <p className="scc-desc">{desc}</p>
                  <span className="scc-arrow" style={{ color }}>Explore →</span>
                </Link>
              </StaggerGridItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <FadeUp>
        <CTA title="Let AI Answer Your Calls — 24×7, in Any Language" subtitle="Join 500+ businesses using Ojiva AI Voice. Deploy your first AI voice bot in 24 hours." primaryLabel="Get Started with Voice AI →" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      </FadeUp>
    </>
  );
}
