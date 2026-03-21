import SectionHeading from '@/components/ui/SectionHeading';
import { SlideLeft, SlideRight } from '@/components/ui/Animations';
import { TIMELINE } from './data';

export default function Journey() {
  return (
    <section className="section-padding" aria-labelledby="journey-heading">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-12 col-lg-5">
            <SlideLeft>
            <SectionHeading
              tag="Our Journey"
              title="From SMS aggregator to AI platform"
              subtitle="The story of Ojiva AI begins with A2ZSMS — built on one principle: make messaging reliable, scalable, and simple for Indian enterprises."
            />
            <div className="about-origin-block mt-4">
              <p>
                A2ZSMS was founded to solve a real problem: businesses in India needed
                a trustworthy, compliant, and fast SMS gateway. Over a decade, we grew
                to serve 150+ enterprise clients and process billions of messages annually.
              </p>
              <p className="mt-3">
                As AI transformed what was possible in communication, we didn&apos;t
                just add features — we rebuilt from the top. Ojiva AI was incorporated
                as the parent platform, bringing AI intelligence to every channel, while
                A2ZSMS continues as our trusted, high-volume SMS engine.
              </p>
              <div className="about-a2z-link-block mt-4">
                <span className="about-a2z-link-label">Our SMS Platform</span>
                <span className="about-a2z-link-name">A2ZSMS</span>
                <span className="about-a2z-link-desc">Trusted by 150+ enterprises for bulk SMS, OTP, transactional &amp; promotional messaging.</span>
              </div>
            </div>
            </SlideLeft>
          </div>

          <div className="col-12 col-lg-6 offset-lg-1">
            <SlideRight>
            <div className="about-timeline">
              {TIMELINE.map((item, i) => (
                <div className="timeline-item-v2" key={item.year}>
                  <div className="timeline-left-v2">
                    <div className="timeline-dot-v2">
                      <span aria-hidden="true">{item.icon}</span>
                    </div>
                    {i < TIMELINE.length - 1 && (
                      <div className="timeline-line-v2" />
                    )}
                  </div>
                  <div className="timeline-content-v2">
                    <span className="timeline-year-v2">{item.year}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            </SlideRight>
          </div>
        </div>
      </div>
    </section>
  );
}
