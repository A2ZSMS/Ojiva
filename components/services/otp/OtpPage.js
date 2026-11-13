'use client';

import RelatedServices from '@/components/ui/RelatedServices';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Channels from './sections/Channels';
import UseCases from './sections/UseCases';
import Security from './sections/Security';
import Faq from './sections/Faq';
import FinalCta from './sections/FinalCta';

export default function OtpPage({ faqs }) {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Channels />
      <UseCases />
      <Security />
      <Faq faqs={faqs} />
      <RelatedServices currentPath="/otp" />
      <FinalCta />
    </>
  );
}
