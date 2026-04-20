'use client';

import Link from 'next/link';
import { HeroEntrance, FloatingElement } from '@/components/ui/Animations';
import { METRICS } from './data';
import { ChatbotHeroVisual } from '@/components/services/shared/HeroVisuals';

export default function Hero() {
  return (
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
                <FloatingElement amplitude={6} duration={6}>
                  <div className="service-visual-wrap">
                    <ChatbotHeroVisual />
                  </div>
                </FloatingElement>
              </HeroEntrance>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
