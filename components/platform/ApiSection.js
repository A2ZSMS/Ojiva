import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { SlideLeft, ScalePop } from '@/components/ui/Animations';
import { API_CODE } from './data';

export default function ApiSection() {
  return (
    <section className="section-padding" aria-labelledby="api-heading">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-5">
            <SlideLeft>
            <SectionHeading
              tag="API-First"
              title="Built for developers, designed for scale"
              subtitle="Every platform capability is accessible programmatically via RESTful APIs with OpenAPI 3.0 spec. SDKs available for Node.js, Python, PHP, and Java."
            />
            <ul className="api-feature-list mt-4">
              <li>OpenAPI 3.0 specification with Swagger docs</li>
              <li>OAuth 2.0 and API key authentication</li>
              <li>Inbound and outbound webhook support</li>
              <li>Sandbox environment for safe development</li>
              <li>Up to 10,000 requests per second</li>
              <li>99.9% uptime SLA with status page</li>
            </ul>
            <Link href="/support" className="btn-ojiva-primary mt-4 d-inline-flex">
              View Documentation &rarr;
            </Link>
            </SlideLeft>
          </div>

          <div className="col-12 col-lg-6 offset-lg-1">
            <ScalePop>
            <div className="api-feature-block">
              <div className="api-feature-header">
                <div className="api-dot dot-red" />
                <div className="api-dot dot-yellow" />
                <div className="api-dot dot-green" />
                <span className="api-filename">send-message.js</span>
              </div>
              <pre className="api-code" dangerouslySetInnerHTML={{ __html: API_CODE }} />
            </div>
            </ScalePop>
          </div>
        </div>
      </div>
    </section>
  );
}
