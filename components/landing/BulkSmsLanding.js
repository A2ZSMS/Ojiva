import Hero           from './bulk-sms/Hero';
import StatsBar       from './bulk-sms/StatsBar';
import SmsTypes       from './bulk-sms/SmsTypes';
import ProblemSolution from './bulk-sms/ProblemSolution';
import MetricsRow     from './bulk-sms/MetricsRow';
import ComparisonTable from './bulk-sms/ComparisonTable';
import FullFeatures   from './bulk-sms/FullFeatures';
import HowItWorks     from './bulk-sms/HowItWorks';
import Industries     from './bulk-sms/Industries';
import Integrations   from './bulk-sms/Integrations';
import Testimonials   from './bulk-sms/Testimonials';
import FAQ            from './bulk-sms/FAQ';
import FinalCTA       from './bulk-sms/FinalCTA';

export default function BulkSmsLanding({ faqs }) {
  return (
    <>
      <Hero />
      <StatsBar />
      <SmsTypes />
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
