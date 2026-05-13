import dynamic from 'next/dynamic';
import Hero     from './bulk-sms/Hero';
import StatsBar from './bulk-sms/StatsBar';
import SmsTypes from './bulk-sms/SmsTypes';

/* ── Lazy-loaded below-the-fold sections ─────────────────────
   Dynamic imports split each section into its own JS chunk so
   the browser only downloads them when needed, improving FCP.
   ─────────────────────────────────────────────────────────── */
const ProblemSolution = dynamic(() => import('./bulk-sms/ProblemSolution'));
const MetricsRow      = dynamic(() => import('./bulk-sms/MetricsRow'));
const ComparisonTable = dynamic(() => import('./bulk-sms/ComparisonTable'));
const FullFeatures    = dynamic(() => import('./bulk-sms/FullFeatures'));
const HowItWorks      = dynamic(() => import('./bulk-sms/HowItWorks'));
const Industries      = dynamic(() => import('./bulk-sms/Industries'));
const Integrations    = dynamic(() => import('./bulk-sms/Integrations'));
const Testimonials    = dynamic(() => import('./bulk-sms/Testimonials'));
const FAQ             = dynamic(() => import('./bulk-sms/FAQ'));
const FinalCTA        = dynamic(() => import('./bulk-sms/FinalCTA'));

export default function BulkSmsLanding({ faqs }) {
  return (
    <>
      {/* Above-the-fold: rendered immediately for fast FCP */}
      <Hero />
      <StatsBar />
      <SmsTypes />

      {/* Below-the-fold: lazy-loaded after initial paint */}
      <ProblemSolution />
      <MetricsRow />
      <ComparisonTable />
      <FullFeatures />
      <HowItWorks />
      <Industries />
      <Integrations />
      <Testimonials />
      <FAQ faqs={faqs} />
      <FinalCTA />
    </>
  );
}
