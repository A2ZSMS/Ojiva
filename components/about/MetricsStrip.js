import { StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { METRICS } from './data';

export default function MetricsStrip() {
  return (
    <section className="about-metrics-strip" aria-label="Key metrics">
      <div className="container">
        <StaggerContainer className="about-metrics-grid-v2" staggerDelay={0.12}>
          {METRICS.map(({ value, label }) => (
            <StaggerItem className="about-metric-v2" key={label}>
              <span className="metric-v2-value">{value}</span>
              <p className="metric-v2-label">{label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
