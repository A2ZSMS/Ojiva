'use client';

import Header from './whatsapp-api/Header';
import Hero from './whatsapp-api/Hero';
import Problem from './whatsapp-api/Problem';
import MessageTypes from './whatsapp-api/MessageTypes';
import Benefits from './whatsapp-api/Benefits';
import Industries from './whatsapp-api/Industries';
import HowItWorks from './whatsapp-api/HowItWorks';
import MidForm from './whatsapp-api/MidForm';
import Testimonials from './whatsapp-api/Testimonials';
import Integrations from './whatsapp-api/Integrations';
import Trust from './whatsapp-api/Trust';
import FAQ from './whatsapp-api/FAQ';
import FinalCTA from './whatsapp-api/FinalCTA';
import Footer from './whatsapp-api/Footer';

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
      <MidForm />
      <Testimonials />
      <Integrations />
      <Trust />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
