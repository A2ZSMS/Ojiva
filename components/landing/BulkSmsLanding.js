import { SmsCampaignPreview } from './ServiceVisuals';
import Image from 'next/image';
import { LuArrowRight, LuArrowUpRight, LuCheck, LuPhone, LuChevronDown, LuListChecks, LuChartNoAxesCombined, LuCode, LuShieldCheck, LuMessageSquare } from 'react-icons/lu';
import EnquirySteps from './EnquirySteps';
import LandingLeadForm from './LandingLeadForm';
import SupportChat from './whatsapp-api/SupportChat';
import MobileEnquiryBar from './whatsapp-api/MobileEnquiryBar';
import SmsExamples from './bulk-sms/SmsExamples';
import { SMS_TYPE_OPTIONS, VOLUME_OPTIONS, SMS_FAQS } from './bulk-sms/data';
import base from './whatsapp-api/WhatsAppLanding.module.css';
import styles from './bulk-sms/BulkSmsLanding.module.css';

export default function BulkSmsLanding() {
  return <div className={`${base.page} ${styles.page}`} id="sms-top">
    <header className={base.header}><div className={base.headerInner}>
      <a href="#sms-top" aria-label="Ojiva AI, back to top"><Image src="/ojiva-logo-optimized.webp" alt="Ojiva AI" width={112} height={33} priority /></a>
      <nav aria-label="SMS landing page navigation"><a href="#sms-examples">Explore SMS types</a><a href="#sms-setup">Setup & pricing</a></nav>
      <a href="#lead-form" className={base.headerCta}>Get SMS pricing <LuArrowUpRight aria-hidden="true" /></a>
    </div></header>
    <section className={`${base.hero} ${styles.hero}`} aria-labelledby="sms-title"><div className={`${base.heroGrid} ${styles.heroGrid}`}>
      <div className={base.heroCopy}><span className={base.eyebrow}><span className={base.statusDot} /> BULK SMS FOR BUSINESS</span><h1 id="sms-title">Keep customers updated.<br /><span>Without messaging<br />one by one.</span></h1><p className={base.heroDescription}>Bring customers back with an offer, confirm a payment or send an OTP. Use our SMS dashboard, connect your software through API or SMPP, or offer SMS with a reseller panel.</p><a href="#sms-examples" className={base.heroAction}><LuMessageSquare aria-hidden="true" /> Find the right SMS for your business <LuArrowRight aria-hidden="true" /></a><ul className={base.heroBenefits}><li><LuCheck aria-hidden="true" /> Promotional & transactional</li><li><LuCheck aria-hidden="true" /> Service Explicit & OTP</li><li><LuCheck aria-hidden="true" /> API, SMPP & reseller panel</li></ul>
        <div className={styles.heroNote}><LuShieldCheck aria-hidden="true" /><div><strong>Need help with DLT setup?</strong><p>We’ll review your sender, template and onboarding requirements.</p></div></div>
      </div>
      <div className={base.formPanel} id="lead-form"><LandingLeadForm compact formLabel="Request Bulk SMS pricing" source="bulk-sms" title="Find the right SMS plan." subtitle="Share your requirement and volume. We’ll explain the right service, setup and pricing." introLabel="SERVICE GUIDANCE + PRICING" nextStepText="Our team will contact you to discuss your SMS requirement, monthly volume and pricing." submitLabel="Get My SMS Pricing →" thankYouUrl="/thank-you" services={SMS_TYPE_OPTIONS} serviceLabel="Service required" volumeOptions={VOLUME_OPTIONS} volumeLabel="Monthly SMS requirement" /></div>
    </div><div className={base.heroFoot}><span>Useful messages. Everyday business moments.</span><div><span>Retail & ecommerce</span><span>Education</span><span>Appointments</span><span>Customer updates</span></div></div></section>

    <div className={styles.serviceStrip} aria-label="Our SMS services"><span>FIND YOUR SERVICE</span><div>{['Promotional SMS', 'Transactional SMS', 'Service Explicit SMS', 'OTP services'].map(label => <a key={label} href="#sms-examples">{label}<LuArrowUpRight aria-hidden="true" /></a>)}<a href="#sms-smpp">SMPP connectivity<LuArrowUpRight aria-hidden="true" /></a><a href="#sms-reseller">Reseller panel<LuArrowUpRight aria-hidden="true" /></a></div></div>

    <section className={base.section} id="sms-examples" aria-labelledby="sms-examples-title"><div className={base.sectionIntro}><span className={base.eyebrow}>WHAT DO YOU WANT TO SEND?</span><h2 id="sms-examples-title">What do you need<br />your message to do?</h2><p>Explore the message types below to see which one fits your business. We’ll help you confirm the right setup.</p></div><SmsExamples /></section>

    <section className={`${base.section} ${styles.workflowSection}`} aria-labelledby="sms-workflow-title"><div className={base.benefitsHeading}><div><span className={base.eyebrow}>FROM CONTACT LIST TO CUSTOMER INBOX</span><h2 id="sms-workflow-title">A clearer campaign workflow.</h2></div><p>Prepare the audience, check your message and follow delivery status after sending.</p></div>
      <SmsCampaignPreview />
    </section>

    <section className={`${base.section} ${styles.integrationSection}`} aria-labelledby="sms-integration-title"><div><span className={base.eyebrow}>CAMPAIGNS OR AUTOMATION. YOUR CHOICE.</span><h2 id="sms-integration-title">Send from a dashboard.<br />Or from the tools you use.</h2><p>Run a planned campaign, or trigger an SMS when something happens in your CRM, website or application.</p><a href="#lead-form" className={base.textLink}>Discuss my integration <LuArrowUpRight aria-hidden="true" /></a></div><div className={styles.integrationOptions}><article><LuListChecks aria-hidden="true" /><div><h3>For marketing & operations</h3><p>Discuss contact imports, message templates, scheduling and campaign reports in your demo.</p></div></article><article><LuCode aria-hidden="true" /><div><h3>For your development team</h3><p>Review API access, authentication, template variables and delivery-status callbacks for your workflow.</p></div></article></div></section>

    <section className={`${base.section} ${styles.platformSection}`} id="sms-platforms" aria-labelledby="sms-platforms-title">
      <div className={base.sectionIntro}><span className={base.eyebrow}>BUILD ON YOUR SMS BUSINESS</span><h2 id="sms-platforms-title">Your connection.<br />Your next opportunity.</h2><p>Need messaging infrastructure or a panel for your own customers? We provide both.</p></div>
      <div className={styles.platformGrid}>
        <article id="sms-smpp"><span className={styles.platformNumber}>01 / CONNECT</span><LuCode className={styles.platformIcon} aria-hidden="true" /><h3>SMPP connectivity</h3><p>Connect your SMS application or gateway through SMPP. A dedicated option for teams planning ongoing messaging traffic.</p><div className={styles.connectionDiagram} aria-label="Your application connects through SMPP to SMS delivery"><span>Your app</span><LuArrowRight aria-hidden="true" /><strong>SMPP</strong><LuArrowRight aria-hidden="true" /><span>SMS</span></div><h4>Let’s review your requirements</h4><ul><li>Expected volume and peak throughput</li><li>Connection setup and delivery reports</li><li>Message routes and commercial plan</li></ul><a href="#lead-form" className={base.textLink}>Discuss SMPP connectivity <LuArrowUpRight aria-hidden="true" /></a></article>
        <article id="sms-reseller"><span className={styles.platformNumber}>02 / GROW</span><LuChartNoAxesCombined className={styles.platformIcon} aria-hidden="true" /><h3>SMS reseller panel</h3><p>Offer SMS services to your own customers. Explore a reseller panel built for agencies and businesses growing their messaging offering.</p><div className={styles.connectionDiagram} aria-label="Your business manages SMS services for your customers"><span>Your business</span><LuArrowRight aria-hidden="true" /><strong>Reseller panel</strong></div><h4>See the panel before you decide</h4><ul><li>Customer account management walkthrough</li><li>Credit and reporting options</li><li>Reseller pricing and onboarding</li></ul><a href="#lead-form" className={base.textLink}>Request a reseller panel demo <LuArrowUpRight aria-hidden="true" /></a></article>
      </div>
    </section>

    <EnquirySteps id="sms-setup" title="Your first SMS campaign starts with a clear plan." description="You don’t need to know every SMS term. Tell us who you want to reach and what you want to send. We’ll help you choose the service and understand the costs."
      steps={[
        ['Share your message and monthly volume.', 'An offer, a payment update or a verification code? We’ll help identify the right SMS service.'],
        ['See how sending will work.', 'Review the dashboard or connection you need, with guidance on sender IDs, DLT and templates.'],
        ['Get a quote you can evaluate.', 'Understand message credits, applicable charges and setup costs before planning your first send.'],
      ]}
      benefits={['Guidance on the right SMS service', 'A dashboard or integration walkthrough', 'A quote based on your monthly volume']}
      cta="Get My SMS Plan & Pricing" />

    <section className={`${base.section} ${base.faqSection}`} id="sms-questions" aria-labelledby="sms-faq-title"><div><span className={base.eyebrow}>BEFORE YOUR FIRST SEND</span><h2 id="sms-faq-title">Your SMS questions,<br />answered.</h2><p>From pricing to integration,<br />start with the details that matter.</p><a href="#lead-form" className={base.textLink}>Ask our team <LuArrowUpRight aria-hidden="true" /></a></div><div className={base.faqList}>{SMS_FAQS.map(({q,a})=><details key={q}><summary>{q}<LuChevronDown aria-hidden="true" /></summary><p>{a}</p></details>)}</div></section>
    <section className={`${base.finalSection} ${styles.finalSection}`}><div><span className={base.eyebrow}>LET’S MAKE YOUR NEXT MESSAGE USEFUL.</span><h2>Know your SMS options before you start.</h2><p>Share your use case and volume. Get service guidance and a clear quote.</p></div><a href="#lead-form" className={base.primaryCta}>Get My SMS Pricing <LuArrowUpRight aria-hidden="true" /></a></section>
    <footer className={base.footer}><div><Image src="/ojiva-logo-optimized.webp" alt="Ojiva AI" width={94} height={28} loading="lazy" /><span>© {new Date().getFullYear()} Ojiva AI</span></div><nav aria-label="Contact and legal"><a href="tel:+918431086185"><LuPhone aria-hidden="true" /> Talk to our team</a><SupportChat /><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer>
    <MobileEnquiryBar label="Get SMS pricing ↗" />
  </div>;
}
