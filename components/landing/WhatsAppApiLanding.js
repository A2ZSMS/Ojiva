import { WhatsAppJourney } from './ServiceVisuals';
import Image from 'next/image';
import { LuArrowUpRight, LuArrowRight, LuCheck, LuMessageCircle, LuUsers, LuWorkflow, LuChevronDown, LuPhone, LuCirclePlay, LuShieldCheck, LuCode, LuFileCheck } from 'react-icons/lu';
import EnquirySteps from './EnquirySteps';
import LandingLeadForm from './LandingLeadForm';
import MobileEnquiryBar from './whatsapp-api/MobileEnquiryBar';
import SupportChat from './whatsapp-api/SupportChat';
import { TrustStrip, Testimonials } from './LandingTrust';
import { GOOGLE_RATING } from './proof';
import styles from './whatsapp-api/WhatsAppLanding.module.css';
import dynamic from 'next/dynamic';

// Below the fold: its code arrives in a separate chunk.
const ConversationDemo = dynamic(() => import('./whatsapp-api/ConversationDemo'));

// Monthly WhatsApp message volume. Values are what the CRM and Make receive.
const volumeOptions = [
  { value: '', label: 'Select volume' },
  { value: '<10k', label: 'Under 10,000' },
  { value: '10k-1L', label: '10,000 – 1 lakh' },
  { value: '1L-10L', label: '1 lakh – 10 lakh' },
  { value: '10L+', label: '10 lakh+' },
];
// Short answers next to the form; the full FAQ stays further down the page.
const quickSteps = [
  ['Share your requirement', 'Fill the form. Our team calls you back.'],
  ['See a demo for your use case', 'Chatbot, shared inbox and follow-ups.'],
  ['Go live with our help', 'We set up your number, templates and chatbot.'],
];
const quickFaqs = [
  ['Is this the official WhatsApp Business API?', 'Yes. Ojiva AI is an official Meta WhatsApp Business Solution Provider, so you get the API directly through a Meta-approved partner.'],
  ['Can I use my existing WhatsApp number?', 'Usually, yes. We check how the number is used today and explain the migration or onboarding steps before you decide.'],
  ['Do I need a developer?', 'Our team guides onboarding, templates and the shared inbox. Custom CRM, app or OTP integrations may need developer support; we’ll clarify this in your demo.'],
  ['How is pricing worked out?', 'It depends on the features, setup and messaging you need. We explain platform fees and WhatsApp charges separately in your proposal.'],
];
const faqs = [
  ['What should I have ready for onboarding?', 'Bring your business details, the number you want to use, your current CRM or website platform and the workflow you want to build. Our team reviews your setup and explains the requirements before implementation.'],
  ['What will my proposal include?', 'We outline the agreed features, onboarding, integration work and applicable platform and messaging charges. Custom development and dependencies are discussed before you decide.'],
  ['Is green tick approval guaranteed?', 'We support the application process. Meta makes the final approval decision, so approval is not guaranteed.'],
  ['Do you provide the WhatsApp Cloud API?', "Yes. We onboard you on Meta's official WhatsApp Cloud API as a verified BSP and handle setup, templates and green tick application support."],
  ['Is this different from the WhatsApp Business app?', 'Yes. The Business API connects WhatsApp to software so you can automate conversations, integrate business tools and manage enquiries with your team. Your customers still message you on WhatsApp.'],
  ['What will you show me in the demo?', 'We’ll discuss your business, walk through relevant messaging and automation workflows, and explain the setup and pricing for your requirements. You can ask about your existing number, CRM and team structure.'],
  ['Can I use my existing WhatsApp number?', 'Tell us how you currently use your number. We’ll check the available onboarding or migration options for your account before recommending a setup.'],
  ['How much does it cost?', 'Your quote depends on the platform features, setup, integrations and messaging usage you need. Ask our team to separate platform fees, implementation costs and applicable WhatsApp messaging charges in your proposal.'],
  ['How soon can we start?', 'The timeline depends on your business details, number setup, any required approvals and integrations. We’ll confirm the steps and an estimated timeline after reviewing your requirements.'],
  ['Can I connect my CRM or website?', 'We’ll review your existing tools and the available API or webhook integration options. Share your CRM name and the workflow you want to automate when you request a demo.'],
];
export default function WhatsAppApiLanding() {
  return (
    <div className={styles.page} id="whatsapp-top">
      <header className={styles.header}><div className={styles.headerInner}>
        <a href="#whatsapp-top" aria-label="Ojiva AI, back to top"><Image src="/image/ojiva-landing-logo-v2.webp" width={112} height={33} alt="Ojiva AI" priority /></a>
        <nav aria-label="Landing page navigation"><a href="#how-it-works">See how it works</a><a href="#questions">FAQs</a></nav>
        <a className={styles.headerCta} href="#lead-form">Book a Free Demo <LuArrowUpRight aria-hidden="true" /></a>
      </div></header>
      <section className={styles.hero} aria-labelledby="whatsapp-title">
        <div className={`${styles.heroGrid} ${styles.heroGridWa}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}><span className={styles.statusDot} /> WHATSAPP BUSINESS API</span>
            <h1 id="whatsapp-title">Official WhatsApp Business API<br /><span>Provider in India</span></h1>
            <p className={styles.heroSub}>Capture enquiries. Automate follow-ups.<br />Keep your team connected.</p>
            <ul className={styles.heroBenefits}><li><LuCheck aria-hidden="true" /> Automated replies</li><li><LuCheck aria-hidden="true" /> Shared team inbox</li><li><LuCheck aria-hidden="true" /> CRM integration</li><li><LuCheck aria-hidden="true" /> OTP &amp; Authentication Messages</li></ul>
            <p className={styles.heroProof}>Official Meta BSP <span aria-hidden="true">·</span> <a href={GOOGLE_RATING.url} target="_blank" rel="noopener noreferrer">Read customer reviews <LuArrowUpRight aria-hidden="true" /></a></p>
          </div>
          <div className={styles.heroExtra}>
            <p className={styles.heroDescription}>Turn WhatsApp enquiries into sales conversations. Automate common replies and follow-ups, keep your team in one shared inbox, and connect every enquiry to your CRM.</p>
            <div className={styles.heroActions}><a className={styles.primaryCta} href="#lead-form">Book a Free Demo <LuArrowUpRight aria-hidden="true" /></a><a className={styles.heroAction} href="#how-it-works"><LuCirclePlay aria-hidden="true" /> See how it works <LuArrowRight aria-hidden="true" /></a></div>
            <TrustStrip messagingOnly />
            <WhatsAppJourney />
          </div>
          <div className={styles.formColumn}>
            {/* Anchors used by Google Ads sitelinks — keep these ids. */}<span id="Book-Free-Demo" aria-hidden="true" /><span id="Contact-Us" aria-hidden="true" /><div className={styles.formPanel} id="lead-form"><LandingLeadForm compact source="whatsapp-api-service" title="Book your free WhatsApp demo." subtitle="See the chatbot, shared inbox or OTP workflow your business needs. Get setup and integration guidance." introLabel="PERSONALISED DEMO FOR YOUR BUSINESS" nextStepText="Our team calls to understand your requirements and arrange your demo. You review the setup and proposal before deciding." submitLabel="Book a Free Demo →" services={null} defaultService="WhatsApp Business API" requireCompany requireEmail volumeOptions={volumeOptions} volumeLabel="Monthly message volume" /></div>
            <div className={styles.nearForm}>
              <h2 className={styles.nearFormTitle}>How it works</h2>
              <ol className={styles.quickSteps}>{quickSteps.map(([h, t], i) => <li key={h}><span>{i + 1}</span><div><strong>{h}</strong><small>{t}</small></div></li>)}</ol>
              <h2 className={styles.nearFormTitle}>Quick answers</h2>
              <div className={styles.quickFaqs}>{quickFaqs.map(([q, a]) => <details key={q}><summary>{q}<LuChevronDown aria-hidden="true" /></summary><p>{a}</p></details>)}</div>
            </div>
          </div>
        </div>
        <div className={styles.heroFoot}><span>Built for the way your business talks.</span><div><span>Sales enquiries</span><span>Customer support</span><span>Order updates</span><span>Appointment reminders</span></div></div>
      </section>
      <section className={styles.section} id="how-it-works" aria-labelledby="demo-title"><span id="WhatsApp-Automation" aria-hidden="true" /><div className={styles.sectionIntro}><span className={styles.eyebrow}>SEE WHAT YOUR CUSTOMERS EXPERIENCE</span><h2 id="demo-title">A question comes in.<br />Here’s what happens next.</h2><p>Choose a situation. See how a conversation can move from a customer’s question to a useful next step.</p></div><ConversationDemo /></section>
      <section className={`${styles.section} ${styles.authenticationSection}`} aria-labelledby="authentication-title">
        <div className={styles.sectionIntro}>
          <h2 id="authentication-title">WhatsApp OTP &amp; Authentication Messages</h2>
          <p>Send login OTPs, verification codes and transaction alerts on WhatsApp using Meta-approved authentication templates. Faster delivery than SMS, with read receipts and an SMS fallback option. For businesses and apps only.</p>
          <a href="#lead-form" className={styles.primaryCta}>Book a Free Demo <LuArrowUpRight aria-hidden="true" /></a>
          <picture className={styles.supportingPhoto}>
            <source media="(max-width: 540px)" srcSet="/image/whatsapp-authentication-business-v1-480.webp" />
            <Image src="/image/whatsapp-authentication-business-v1-960.webp" width={960} height={640} alt="Business professional using a smartphone beside her laptop" loading="lazy" />
          </picture>
        </div>
      </section>
      <section className={`${styles.section} ${styles.benefitsSection}`} aria-labelledby="benefits-title"><span id="Why-Choose-Us" aria-hidden="true" />
        <div className={styles.benefitsHeading}><div><span className={styles.eyebrow}>WHAT WE HELP YOU SET UP</span><h2 id="benefits-title">A WhatsApp workflow.<br />Built around your business.</h2></div><p>Understand the setup, the tools your team will use and the integrations you need. We’ll confirm the scope around your use case in the demo.</p></div>
        <div className={styles.benefitGrid}>
          <article><span className={styles.benefitIcon}><LuShieldCheck aria-hidden="true" /></span><h3>Official API onboarding</h3><p>Get help with your business details, WhatsApp number and Meta Cloud API setup. We review whether your existing number can be used and explain the steps before you start.</p><span className={styles.benefitExample}>A clear onboarding path for your business.</span></article>
          <article><span className={styles.benefitIcon}><LuUsers aria-hidden="true" /></span><h3>One shared team inbox</h3><p>Bring customer conversations into a shared workspace so sales and support can continue with the context. See how your team will handle enquiries and handoffs in the demo.</p><span className={styles.benefitExample}>Keep the conversation and the context together.</span></article>
          <article><span className={styles.benefitIcon}><LuWorkflow aria-hidden="true" /></span><h3>Chatbot &amp; enquiry flows</h3><p>Plan replies to common questions, capture a customer’s requirement and guide them to the next step. Decide where automation helps and where a team member should take over.</p><span className={styles.benefitExample}>Automate the routine. Keep people in the loop.</span></article>
          <article><span className={styles.benefitIcon}><LuFileCheck aria-hidden="true" /></span><h3>Message template support</h3><p>Prepare templates for your customer updates and follow-ups, with guidance through the submission process. Walk through the message content and actions your workflow needs.</p><span className={styles.benefitExample}>Order updates, reminders and customer communication.</span></article>
          <article><span className={styles.benefitIcon}><LuCode aria-hidden="true" /></span><h3>Website &amp; CRM integrations</h3><p>Review the APIs and webhooks available in your current tools. We map the information to exchange and clarify custom development, dependencies and implementation scope.</p><span className={styles.benefitExample}>Connect your workflow to the tools you already use.</span></article>
          <article><span className={styles.benefitIcon}><LuMessageCircle aria-hidden="true" /></span><h3>OTP &amp; authentication</h3><p>Discuss login and verification journeys for your app or website. Review authentication templates, delivery status and how an SMS fallback would fit your integration.</p><span className={styles.benefitExample}>For business and application authentication.</span></article>
        </div>
        <div className={styles.scopeCta}><p><strong>Bring one real workflow to your demo.</strong> Share your CRM name, team size or authentication requirement. We’ll help you define the next steps.</p><a href="#lead-form" className={styles.primaryCta}>Book a Free Demo <LuArrowUpRight aria-hidden="true" /></a></div>
      </section>
      <Testimonials page="whatsapp" />
      <section className={`${styles.section} ${styles.messagesSection}`} aria-labelledby="messages-title">
        <div className={styles.benefitsHeading}><div><span className={styles.eyebrow}>USEFUL BEYOND THE FIRST REPLY</span><h2 id="messages-title">Keep customers informed.<br />Give them a next step.</h2></div><p>Use WhatsApp for the everyday updates customers want to receive, with a clear action in each message.</p></div>
        <div className={styles.messageExamples}>
          <article><span>01 / ORDER UPDATES</span><h3>Take the guesswork out of delivery.</h3><p>Share order confirmations and tracking updates.</p><blockquote>Hi Ananya, your order is on its way. View your delivery details below.<span>Track order <LuArrowUpRight aria-hidden="true" /></span></blockquote></article>
          <article><span>02 / PAYMENT REMINDERS</span><h3>Make the next payment simpler.</h3><p>Send invoice reminders with a clear payment link.</p><blockquote>Your invoice is ready. Review the details and choose how you’d like to pay.<span>View invoice <LuArrowUpRight aria-hidden="true" /></span></blockquote></article>
          <article><span>03 / CUSTOMER CAMPAIGNS</span><h3>Bring customers back with relevance.</h3><p>Share useful offers and product updates with opted-in customers.</p><blockquote>Our new collection is here. Take a look and tell us what catches your eye.<span>Explore collection <LuArrowUpRight aria-hidden="true" /></span></blockquote></article>
        </div>
        <p className={styles.messageNote}>Example messages. We’ll discuss templates, customer opt-in and the right workflow for your use case.</p>
      </section>
      <section className={`${styles.section} ${styles.connectionsSection}`} aria-labelledby="connections-title">
        <div><span className={styles.eyebrow}>CONNECT THE WORK YOU ALREADY DO</span><h2 id="connections-title">Your website. Your CRM.<br />Your customer conversations.</h2><p>Connect the official WhatsApp Cloud API to your website, CRM and apps.</p><a href="#lead-form" className={styles.textLink}>Discuss my integration <LuArrowUpRight aria-hidden="true" /></a>
          <picture className={styles.supportingPhoto}>
            <source media="(max-width: 540px)" srcSet="/image/whatsapp-support-team-v1-480.webp" />
            <Image src="/image/whatsapp-support-team-v1-960.webp" width={960} height={640} alt="Two customer support colleagues discussing an enquiry at a laptop" loading="lazy" />
          </picture>
        </div>
        <ol className={styles.connectionFlow}><li><LuMessageCircle aria-hidden="true" /><div><h3>Capture the enquiry</h3><p>Start with a website form or WhatsApp conversation.</p></div></li><li><LuWorkflow aria-hidden="true" /><div><h3>Connect the context</h3><p>Map the customer details and events your CRM needs.</p></div></li><li><LuUsers aria-hidden="true" /><div><h3>Continue the conversation</h3><p>Plan the follow-up and handoff to your team.</p></div></li></ol>
      </section>
      <EnquirySteps id="whatsapp-setup" title="Leave the demo with a plan for your business." description="Bring your use case and the tools you already use. We’ll walk through the workflow, explain onboarding and identify the integrations you need."
        steps={[
          ['Tell us where conversations get stuck.', 'Share how your team handles enquiries today and what you want to improve.'],
          ['See the customer and team experience.', 'Walk through automated replies, a shared inbox and the handoff to your team.'],
          ['Review a plan for your business.', 'Get clarity on your number, integrations, platform fees and messaging charges.'],
        ]}
        benefits={['A demo focused on your use case', 'Number and integration guidance', 'Pricing explained before you decide']}
        cta="Book a Free Demo" />
      <section className={`${styles.section} ${styles.faqSection}`} id="questions" aria-labelledby="faq-title"><div><span className={styles.eyebrow}>A FEW THINGS YOU MAY BE WONDERING</span><h2 id="faq-title">Good questions.<br />Clear answers.</h2><p>Have a specific requirement?<br />We can talk it through in your demo.</p><a href="#lead-form" className={styles.textLink}>Ask our team <LuArrowUpRight aria-hidden="true" /></a></div><div className={styles.faqList}>{faqs.map(([q, a]) => <details key={q}><summary>{q}<LuChevronDown aria-hidden="true" /></summary><p>{a}</p></details>)}</div></section>
      <section className={styles.finalSection}><div><span className={styles.eyebrow}>SEE THE WORKFLOW BEFORE YOU DECIDE</span><h2>See how WhatsApp can work for your business.</h2><p>Explore your use case, ask your questions and review the next steps with our team.</p></div><a href="#lead-form" className={styles.primaryCta}>Book a Free Demo <LuArrowUpRight aria-hidden="true" /></a></section>
      <footer className={styles.footer}><div><Image src="/image/ojiva-landing-logo-v2.webp" width={94} height={28} alt="Ojiva AI" loading="lazy" /><span>© {new Date().getFullYear()} Ojiva AI</span></div><nav aria-label="Contact and legal"><a href="tel:+918431086185"><LuPhone aria-hidden="true" /> Talk to our team</a><SupportChat /><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer>
      <MobileEnquiryBar label="Book a Free Demo ↗" />
    </div>
  );
}
