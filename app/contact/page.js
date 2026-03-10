import { buildMetadata } from '@/lib/metadata';
import ContactForm from './ContactForm';

export const metadata = buildMetadata({

  title: 'Contact Ojiva AI — Get a Free Demo',
  description:
    'Request a demo or talk to our team. Ojiva AI enterprise inquiries, API assistance, and sales requests.',
  path: '/contact',
  keywords: [
    'Ojiva AI contact',
    'Ojiva AI demo',
    'book a demo Ojiva',
    'request Ojiva pricing',
    'Ojiva enterprise sales',
    'AI automation consultation',
    'free AI platform demo',
    'talk to AI sales team',
    'Ojiva AI support',
    'Ojiva AI enterprise plan',
    'get started with Ojiva',
    'AI communication demo India',
  ],
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="contact-hero-heading">
        <div className="container">
          <div className="col-12 col-lg-7">
            <span className="section-tag">Contact Us</span>
            <h1 className="page-hero-title" id="contact-hero-heading">
              Start your AI automation journey today
            </h1>
            <p className="page-hero-subtitle">
              Request a personalised demo, ask a technical question, or reach out
              for enterprise pricing — we respond within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="contact-form-heading">
        <div className="container">
          <h2 className="visually-hidden" id="contact-form-heading">Contact form</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
