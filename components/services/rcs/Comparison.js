import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { SlideLeft, RotateIn, ScalePop } from '@/components/ui/Animations';
import { RCS_VS_SMS } from './data';

export default function Comparison() {
  return (
    <section className="py-5 bg-section" aria-labelledby="rcs-compare-heading">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-5">
            <SlideLeft>
              <SectionHeading tag="RCS vs SMS" title="Why RCS Outperforms Plain SMS Every Time" subtitle="RCS is SMS's next-generation upgrade — same reach, dramatically richer experience." />
              <p className="section-subtitle mt-3">
                With RCS, your brand messages look like a premium app experience inside the default Android Messages app — without requiring customers to download anything.
              </p>
              <Link href="/contact" className="btn-ojiva-primary mt-4 rcs-btn-primary d-inline-flex">Switch to RCS →</Link>
            </SlideLeft>
          </div>
          <div className="col-12 col-lg-7">
            <RotateIn>
              <ScalePop>
                <div className="chatbot-compare-table-wrap">
                  <table className="chatbot-compare-table">
                    <thead>
                      <tr>
                        <th>Feature</th>
                        <th><span className="compare-th-badge compare-th-badge--bot">✨ RCS</span></th>
                        <th><span className="compare-th-badge compare-th-badge--manual">📱 SMS</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {RCS_VS_SMS.map(({ feature, rcs, sms }) => (
                        <tr key={feature}>
                          <td className="compare-feature-name">{feature}</td>
                          <td className={rcs ? 'compare-winner' : ''}>{rcs ? '✅' : '❌'}</td>
                          <td className={sms ? 'compare-winner' : ''}>{sms ? '✅' : '❌'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScalePop>
            </RotateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
