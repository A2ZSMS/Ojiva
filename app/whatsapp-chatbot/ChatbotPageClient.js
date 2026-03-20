'use client';

import Link from 'next/link';
import Image from 'next/image';
import CTA from '@/components/CTA';
import SectionHeading from '@/components/SectionHeading';
import {
  FadeUp, SlideLeft, SlideRight, ScalePop,
  StaggerContainer, StaggerItem, HeroEntrance, FloatingElement,
  BlurReveal, ScrollScale, StaggerGrid, StaggerGridItem,
} from '@/components/Animations';

/* ── DATA ── */
const METRICS = [
  { value: '70%', label: 'Queries Auto-Resolved' },
  { value: '24/7', label: 'Always-On Support' },
  { value: '<3s', label: 'Response Time' },
  { value: '500+', label: 'Businesses Trust Us' },
];

const BOT_FEATURES = [
  { icon: '🧠', title: 'AI-Powered NLP', color: '#7C3AED', desc: 'Understand intent with NLP. Our AI learns from every conversation.', points: ['Intent recognition', 'Entity extraction', 'Sentiment analysis', 'Self-learning'] },
  { icon: '🔧', title: 'No-Code Builder', color: '#1B48E0', desc: 'Design complex flows with drag-and-drop. No developers needed.', points: ['Visual editor', 'Conditional branching', 'Quick reply menus', 'A/B testing'] },
  { icon: '🎯', title: 'Lead Qualification', color: '#25D366', desc: 'Auto qualify, score, and route leads — inside WhatsApp.', points: ['Lead scoring', 'CRM integration', 'Smart routing', 'Follow-up triggers'] },
  { icon: '🌍', title: 'Multi-Language', color: '#FF6D42', desc: 'Engage in 20+ languages with auto-detection.', points: ['20+ languages', 'Auto-detection', 'Hindi, Tamil +', 'Regional routing'] },
];

const USE_CASES = [
  { icon: '🛒', title: 'E-Commerce', desc: 'Cart recovery, order updates, product upsells.', color: '#25D366', points: ['Cart recovery (30%+)', 'Order tracking', 'AI recommendations', 'Reorder flows'] },
  { icon: '🏥', title: 'Healthcare', desc: 'Appointments, reminders, lab reports, queries.', color: '#0EA5E9', points: ['Appointment booking', 'Lab reports', 'Symptom checker', 'Consultations'] },
  { icon: '🏦', title: 'Banking', desc: 'Balance checks, loans, KYC & fraud alerts.', color: '#7C3AED', points: ['Balance & statements', 'Loan tracking', 'KYC collection', 'Fraud alerts'] },
  { icon: '🎓', title: 'Education', desc: 'Admissions, results, fees & parent engagement.', color: '#F59E0B', points: ['Admission enquiries', 'Fee reminders', 'Exam results', 'Parent comms'] },
  { icon: '🏠', title: 'Real Estate', desc: 'Qualify leads, schedule visits, share brochures.', color: '#EF4444', points: ['Lead qualification', 'Site visit booking', 'Brochure sharing', 'EMI calculator'] },
  { icon: '✈️', title: 'Travel', desc: 'Bookings, itineraries, check-in & concierge.', color: '#1B48E0', points: ['Booking confirms', 'Itinerary sharing', 'Check-in reminders', 'Feedback'] },
];

const HOW_STEPS = [
  { step: '01', icon: '📋', title: 'Design Your Bot', desc: 'Use our no-code flow builder to design conversation flows.' },
  { step: '02', icon: '🔗', title: 'Connect WhatsApp', desc: 'Link your WhatsApp Business number via Meta BSP integration.' },
  { step: '03', icon: '🧪', title: 'Test & Refine', desc: 'Test flows in our sandbox and optimize before launch.' },
  { step: '04', icon: '🚀', title: 'Go Live & Scale', desc: 'Launch to millions. Monitor in real-time with AI improvements.' },
];

const COMPARISON = [
  { feature: 'Response Time', chatbot: 'Instant (<3s)', manual: '5–30 min', winner: 'bot' },
  { feature: 'Availability', chatbot: '24/7/365', manual: '8–10 hrs/day', winner: 'bot' },
  { feature: 'Cost per Query', chatbot: '₹0.5 – ₹2', manual: '₹50 – ₹200', winner: 'bot' },
  { feature: 'Scalability', chatbot: 'Unlimited', manual: '3–4 chats/agent', winner: 'bot' },
  { feature: 'Consistency', chatbot: '100% consistent', manual: 'Varies', winner: 'bot' },
  { feature: 'Languages', chatbot: '20+ languages', manual: '1–2', winner: 'bot' },
  { feature: 'Lead Scoring', chatbot: 'Auto-scored', manual: 'Manual', winner: 'bot' },
  { feature: 'Complex Empathy', chatbot: 'Handoff', manual: 'Human touch', winner: 'human' },
];

const HANDOFF_MSGS = [
  { from: 'user', msg: 'I want to return my order, it arrived damaged' },
  { from: 'bot', msg: "I'm sorry to hear that! 😔 Let me connect you with a specialist." },
  { from: 'system', msg: '🔄 Transferring to Agent Priya (Returns Specialist)...' },
  { from: 'agent', msg: "Hi! I'm Priya from returns. I see your order. Let me process a replacement right away. 🙌" },
];

export default function ChatbotPageClient({ faqs }) {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="service-hero" aria-labelledby="cb-hero">
        <div className="container">
          <div className="service-hero-inner">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-6">
                <HeroEntrance index={0}>
                  <div className="service-badge cb-badge">🤖 WhatsApp Chatbot</div>
                </HeroEntrance>
                <HeroEntrance index={1}>
                  <h1 id="cb-hero" className="service-hero-title">
                    Build AI Chatbots That{' '}
                    <span className="sh-accent-wa">Sell, Support & Scale</span>
                    <br />on WhatsApp
                  </h1>
                </HeroEntrance>
                <HeroEntrance index={2}>
                  <p className="service-hero-desc">
                    Automate conversations with AI chatbots that handle support, qualify leads, close sales & engage millions — 24/7, in 20+ languages. No code required.
                  </p>
                </HeroEntrance>
                <HeroEntrance index={3}>
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    <Link href="/contact" className="btn-hero-primary cb-btn-primary">Build Your Chatbot →</Link>
                    <Link href="/book-demo" className="btn-hero-outline">Book a Demo</Link>
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

              {/* Hero Image */}
              <div className="col-12 col-lg-6">
                <HeroEntrance index={2}>
                  <FloatingElement amplitude={8} duration={5}>
                    <div className="service-visual-wrap">
                      <Image
                        src="/images/chatbot-hero.png"
                        alt="WhatsApp AI Chatbot interface with smart conversation automation"
                        width={600}
                        height={600}
                        priority
                        className="cb-hero-image"
                      />
                    </div>
                  </FloatingElement>
                </HeroEntrance>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES ══ */}
      <section className="section-padding" aria-labelledby="cb-features">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading tag="Key Capabilities" title="Everything Your WhatsApp Chatbot Needs" subtitle="NLP intelligence, no-code building, lead scoring, and multi-language support — all built in." center />
            </div>
          </FadeUp>
          <StaggerContainer className="row g-4">
            {BOT_FEATURES.map(({ icon, title, color, desc, points }) => (
              <StaggerItem key={title} className="col-12 col-sm-6 col-lg-3">
                <div className="service-type-card" style={{ '--card-accent': color }}>
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

      {/* ══ NO-CODE BUILDER ══ */}
      <section className="section-padding bg-section" aria-labelledby="cb-builder">
        <div className="container">
          <div className="service-feature-row mb-5">
            <SlideLeft className="service-feature-text">
              <span className="section-tag">No-Code Builder</span>
              <h2 className="section-title mt-2">Build Complex Chatbots — No Code Required</h2>
              <p className="section-subtitle mb-4">
                Design sophisticated conversation flows with conditional logic, API integrations, and dynamic responses — all drag-and-drop.
              </p>
              <ul className="feature-deep-list">
                {['Drag-and-drop visual builder', 'Conditional branching & decision trees', 'Quick replies, buttons & list menus', 'Dynamic API responses', 'Template management & approval', 'Version history & rollback'].map((pt) => (
                  <li key={pt}><span className="check-icon">✓</span>{pt}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn-ojiva-primary mt-4 cb-btn-primary d-inline-flex">Try the Builder →</Link>
            </SlideLeft>
            <SlideRight className="service-feature-visual">
              <ScalePop>
                <Image
                  src="/images/chatbot-builder.png"
                  alt="No-code chatbot flow builder interface"
                  width={600}
                  height={600}
                  className="cb-feature-image"
                />
              </ScalePop>
            </SlideRight>
          </div>

          {/* Human Handoff */}
          <div className="service-feature-row">
            <SlideLeft className="service-feature-visual order-lg-1">
              <div className="cb-handoff-wrap">
                <p className="cb-flow-label">Live Handoff — Conversation Log</p>
                {HANDOFF_MSGS.map(({ from, msg }, i) => (
                  <div key={i} className={`cb-handoff-msg cb-handoff-msg--${from}`}>
                    <div className={`cb-handoff-bubble cb-handoff-bubble--${from}`}>{msg}</div>
                    <p className="cb-handoff-meta">{from.charAt(0).toUpperCase() + from.slice(1)}</p>
                  </div>
                ))}
                <div className="cb-handoff-banner">⚡ Full context transferred — Zero repeat</div>
              </div>
            </SlideLeft>
            <SlideRight className="service-feature-text order-lg-2">
              <span className="section-tag">Human Handoff</span>
              <h2 className="section-title mt-2">Seamless AI-to-Human Handoff</h2>
              <p className="section-subtitle mb-4">
                Complex queries? The chatbot seamlessly transfers to the right human agent with full chat context and AI-generated summary.
              </p>
              <ul className="feature-deep-list">
                {['Smart escalation triggers (sentiment, intent)', 'Full conversation context passed to agent', 'Role-based routing (sales, support, billing)', 'Agent dashboard with AI-suggested replies', 'Hybrid mode: AI + human in same thread', 'Post-handoff quality scoring'].map((pt) => (
                  <li key={pt}><span className="check-icon">✓</span>{pt}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn-ojiva-primary mt-4 cb-btn-primary d-inline-flex">See Handoff in Action →</Link>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ══ COMPARISON ══ */}
      <section className="section-padding" aria-labelledby="cb-compare">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading tag="Why Automate" title="Chatbot vs. Manual Support" subtitle="The numbers speak for themselves." center />
            </div>
          </FadeUp>
          <ScalePop>
            <div className="chatbot-compare-table-wrap">
              <table className="chatbot-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th><span className="compare-th-badge compare-th-badge--bot">🤖 AI Chatbot</span></th>
                    <th><span className="compare-th-badge compare-th-badge--manual">👤 Manual</span></th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map(({ feature, chatbot, manual, winner }) => (
                    <tr key={feature}>
                      <td className="compare-feature-name">{feature}</td>
                      <td className={winner === 'bot' ? 'compare-winner' : ''}>{chatbot} {winner === 'bot' && '✅'}</td>
                      <td className={winner === 'human' ? 'compare-winner' : ''}>{manual} {winner === 'human' && '✅'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScalePop>
        </div>
      </section>

      {/* ══ USE CASES ══ */}
      <section className="section-padding bg-section" aria-labelledby="cb-usecases">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading tag="Use Cases" title="WhatsApp Chatbots for Every Industry" subtitle="See how businesses across India use Ojiva AI chatbots to transform engagement." center />
            </div>
          </FadeUp>
          <StaggerContainer className="row g-4" staggerDelay={0.08}>
            {USE_CASES.map(({ icon, title, desc, color, points }) => (
              <StaggerItem key={title} className="col-12 col-sm-6 col-lg-4">
                <div className="chatbot-usecase-card">
                  <div className="chatbot-usecase-icon" style={{ background: `${color}12`, borderColor: `${color}25` }}>
                    <span>{icon}</span>
                  </div>
                  <h3 className="chatbot-usecase-title">{title}</h3>
                  <p className="chatbot-usecase-desc">{desc}</p>
                  <ul className="chatbot-usecase-points">
                    {points.map((p) => (<li key={p}><span style={{ color }}>→</span> {p}</li>))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="section-padding" aria-labelledby="cb-how">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading tag="How It Works" title="Go Live in 4 Simple Steps" subtitle="From design to deployment — building a WhatsApp chatbot has never been simpler." center />
            </div>
          </FadeUp>
          <StaggerContainer className="row g-4" staggerDelay={0.15}>
            {HOW_STEPS.map(({ step, icon, title, desc }, i) => (
              <StaggerItem key={step} className="col-12 col-sm-6 col-lg-3">
                <div className="how-card">
                  <div className="how-step cb-how-step">{step}</div>
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

      {/* ══ FAQ ══ */}
      <section className="section-padding bg-section" aria-labelledby="cb-faq">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-5">
              <SectionHeading tag="FAQ" title="Frequently Asked Questions" subtitle="Everything you need to know about WhatsApp chatbots." center />
            </div>
          </FadeUp>
          <StaggerContainer className="chatbot-faq-grid" staggerDelay={0.06}>
            {faqs.map(({ q, a }) => (
              <StaggerItem key={q}>
                <div className="chatbot-faq-item">
                  <h3 className="chatbot-faq-q">{q}</h3>
                  <p className="chatbot-faq-a">{a}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══ EXPLORE OTHER SERVICES ══ */}
      <section className="section-padding">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-4">
              <SectionHeading tag="More Services" title="Explore Our Communication Suite" subtitle="Pair your chatbot with other messaging channels for full-funnel automation." center />
            </div>
          </FadeUp>
          <StaggerGrid className="row g-4">
            {[
              { href: '/sms', icon: '📱', title: 'Bulk SMS', desc: 'Transactional, promotional & OTP at scale.', color: '#1B48E0' },
              { href: '/whatsapp', icon: '💬', title: 'WhatsApp Business API', desc: 'Official Meta BSP partner. 98% open rate.', color: '#25D366' },
              { href: '/rcs', icon: '✨', title: 'RCS Messaging', desc: 'Rich cards, carousels & verified sender.', color: '#FF6D42' },
              { href: '/voice', icon: '📞', title: 'AI Voice Calls', desc: 'IVR, OBD & conversational AI bots.', color: '#7C3AED' },
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

      {/* ══ CTA ══ */}
      <FadeUp>
        <CTA
          title="Ready to Build Your WhatsApp Chatbot?"
          subtitle="Join 500+ businesses automating WhatsApp conversations, qualifying leads, and driving sales 24/7."
          primaryLabel="Build Your Chatbot →"
          primaryHref="/contact"
          secondaryLabel="Book a Demo"
          secondaryHref="/book-demo"
        />
      </FadeUp>
    </>
  );
}
