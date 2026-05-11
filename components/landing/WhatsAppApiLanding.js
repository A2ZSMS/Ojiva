'use client';

import { useEffect, useRef, useState } from 'react';
import Header from './whatsapp-api/Header';
import Hero from './whatsapp-api/Hero';
import Problem from './whatsapp-api/Problem';
import MessageTypes from './whatsapp-api/MessageTypes';
import Benefits from './whatsapp-api/Benefits';
import Industries from './whatsapp-api/Industries';
import HowItWorks from './whatsapp-api/HowItWorks';
import Testimonials from './whatsapp-api/Testimonials';
import Integrations from './whatsapp-api/Integrations';
import Trust from './whatsapp-api/Trust';
import FAQ from './whatsapp-api/FAQ';
import MidForm from './whatsapp-api/MidForm';
import FinalCTA from './whatsapp-api/FinalCTA';
import Footer from './whatsapp-api/Footer';

function scrollToForm(e) {
  if (e) e.preventDefault();
  const el = document.getElementById('lead-form');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* Mobile sticky bar — appears once the hero form scrolls out of view */
function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroForm = document.getElementById('lead-form');
    if (!heroForm) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: '-80px 0px 0px 0px' }
    );
    observer.observe(heroForm);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`lp-sticky-bar${visible ? ' lp-sticky-bar--visible' : ''}`}>
      <span className="lp-sticky-bar-text">
        <i className="bi bi-whatsapp" style={{ color: '#25d366' }} />
        Official Meta BSP · 48-hr setup
      </span>
      <button onClick={scrollToForm} className="lp-sticky-bar-btn" type="button">
        Get API Pricing →
      </button>
    </div>
  );
}

export default function WhatsAppApiLanding() {
  return (
    <div className="lp-page">
      <Header />
      <Hero />
      <Problem />
      <MessageTypes />
      <Benefits />
      <Industries />
      <HowItWorks />
      <Testimonials />
      <Integrations />
      <Trust />
      <FAQ />

      {/* Mid-form now sits just before the final CTA — catches users who scrolled all the way */}
      <MidForm />
      <FinalCTA />
      <Footer />

      {/* Mobile-only sticky bottom CTA bar */}
      <MobileStickyBar />
    </div>
  );
}
