import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp, StaggerGrid, StaggerGridItem } from '@/components/ui/Animations';
import { INDUSTRIES } from './data';

export default function Industries() {
  return (
    <section className="py-5" aria-labelledby="sms-industries-heading">
      <div className="container">
        <FadeUp>
          <div className="text-center mb-5">
            <SectionHeading tag="Use Cases" title="Trusted Across Every Industry" subtitle="From fintech to e-commerce — SMS is the highest-reach channel for every business." center />
          </div>
        </FadeUp>
        <StaggerGrid className="row g-3" staggerDelay={0.06}>
          {INDUSTRIES.map(({ icon, title, use }) => (
            <StaggerGridItem key={title} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="industry-card">
                <span className="industry-icon">{icon}</span>
                <h3 className="industry-title">{title}</h3>
                <p className="industry-use">{use}</p>
              </div>
            </StaggerGridItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
