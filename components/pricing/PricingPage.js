'use client';

import Hero from './sections/Hero';
import Plans from './sections/Plans';
import Comparison from './sections/Comparison';
import FAQSection from './sections/FAQSection';
import FinalCTA from './sections/FinalCTA';

export default function PricingPage({ faqs }) {
  return (
    <>
      <Hero />
      <Plans />
      <Comparison />
      <FAQSection faqs={faqs} />
      <FinalCTA />
    </>
  );
}
