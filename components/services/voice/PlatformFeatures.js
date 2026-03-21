import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp, SlideLeft, SlideRight } from '@/components/ui/Animations';
import { VOICEBOT_STATS, CAMPAIGN_STATS } from './data';

export default function PlatformFeatures() {
  return (
    <section className="py-5 bg-section" aria-labelledby="voice-features-heading">
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
  );
}
