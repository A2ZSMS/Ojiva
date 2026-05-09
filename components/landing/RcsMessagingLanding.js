import Hero from './rcs-messaging/Hero';
import StatsBar from './rcs-messaging/StatsBar';
import Comparison from './rcs-messaging/Comparison';
import Features from './rcs-messaging/Features';
import UseCases from './rcs-messaging/UseCases';
import HowItWorks from './rcs-messaging/HowItWorks';
import Testimonials from './rcs-messaging/Testimonials';
import FAQ from './rcs-messaging/FAQ';
import FinalCTA from './rcs-messaging/FinalCTA';

export default function RcsMessagingLanding({ faqs }) {
  return (
    <>
      <Hero />
      <StatsBar />
      <Comparison />
      <Features />
      <UseCases />
      <HowItWorks />
      <Testimonials />
      <FAQ faqs={faqs} />
      <FinalCTA />
    </>
  );
}
