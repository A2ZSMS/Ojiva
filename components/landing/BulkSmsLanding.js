import Hero from './bulk-sms/Hero';
import StatsBar from './bulk-sms/StatsBar';
import WhyBulkSms from './bulk-sms/WhyBulkSms';
import SmsTypes from './bulk-sms/SmsTypes';
import Features from './bulk-sms/Features';
import Industries from './bulk-sms/Industries';
import HowItWorks from './bulk-sms/HowItWorks';
import Testimonials from './bulk-sms/Testimonials';
import FAQ from './bulk-sms/FAQ';
import FinalCTA from './bulk-sms/FinalCTA';

export default function BulkSmsLanding({ faqs }) {
  return (
    <>
      <Hero />
      <StatsBar />
      <WhyBulkSms />
      <SmsTypes />
      <Features />
      <Industries />
      <HowItWorks />
      <Testimonials />
      <FAQ faqs={faqs} />
      <FinalCTA />
    </>
  );
}
