'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Animations';

export default function FAQ({ faqs, subtitle = 'Everything you need to know about WhatsApp chatbots.' }) {
  return (
    <section className="py-5 bg-section" aria-labelledby="cb-faq">
      <div className="container">
        <FadeUp>
          <div className="text-center mb-5">
            <SectionHeading tag="FAQ" title="Frequently Asked Questions" subtitle={subtitle} center />
          </div>
        </FadeUp>
        <StaggerContainer className="chatbot-faq-grid" staggerDelay={0.06}>
          {faqs.map(({ q, a }) => (
            <StaggerItem key={q}>
              <div className="chatbot-faq-item">
                <h3 className="chatbot-faq-q">{q}</h3>
                <p className="chatbot-faq-a">{a}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
