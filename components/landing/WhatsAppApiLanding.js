import { WhatsAppJourney } from './ServiceVisuals';
import Image from 'next/image';
import { LuArrowUpRight, LuArrowRight, LuCheck, LuMessageCircle, LuUsers, LuWorkflow, LuChevronDown, LuPhone, LuCirclePlay } from 'react-icons/lu';
import EnquirySteps from './EnquirySteps';
import LandingLeadForm from './LandingLeadForm';
import ConversationDemo from './whatsapp-api/ConversationDemo';
import MobileEnquiryBar from './whatsapp-api/MobileEnquiryBar';
import SupportChat from './whatsapp-api/SupportChat';
import styles from './whatsapp-api/WhatsAppLanding.module.css';

const services = [
  { value: '', label: 'Choose what you need' },
  { value: 'whatsapp-api', label: 'WhatsApp Business API' },
  { value: 'chatbot', label: 'Automated replies & chatbot' },
  { value: 'api-chatbot', label: 'API + chatbot + team inbox' },
  { value: 'bulk-messaging', label: 'Customer updates & campaigns' },
  { value: 'other', label: 'Help me choose' },
];
const faqs = [
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
        <a href="#whatsapp-top" aria-label="Ojiva AI, back to top"><Image src="/ojiva-logo-optimized.webp" width={112} height={33} alt="Ojiva AI" priority /></a>
        <nav aria-label="Landing page navigation"><a href="#how-it-works">See how it works</a><a href="#questions">FAQs</a></nav>
        <a className={styles.headerCta} href="#lead-form">Get demo & pricing <LuArrowUpRight aria-hidden="true" /></a>
      </div></header>
      <section className={styles.hero} aria-labelledby="whatsapp-title">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}><span className={styles.statusDot} /> WHATSAPP BUSINESS API</span>
            <h1 id="whatsapp-title">Your next enquiry<br /><span>deserves a reply.</span></h1>
            <p className={styles.heroDescription}>Answer common questions automatically, send timely follow-ups and give your team one shared inbox. Help interested customers take the next step on WhatsApp.</p>
            <a className={styles.heroAction} href="#how-it-works"><LuCirclePlay aria-hidden="true" /> See it in action <LuArrowRight aria-hidden="true" /></a>
            <ul className={styles.heroBenefits}><li><LuCheck aria-hidden="true" /> Automated replies</li><li><LuCheck aria-hidden="true" /> Shared team inbox</li><li><LuCheck aria-hidden="true" /> CRM integration</li></ul>
            <WhatsAppJourney />
          </div>
          <div className={styles.formPanel} id="lead-form"><LandingLeadForm compact source="whatsapp-api-service" title="See your WhatsApp workflow." subtitle="Tell us what you need. Get a relevant demo, setup guidance and a clear pricing discussion." introLabel="DEMO + SETUP + PRICING" submitLabel="Get My Demo & Pricing →" services={services} serviceLabel="What would you like to do?" /></div>
        </div>
        <div className={styles.heroFoot}><span>Built for the way your business talks.</span><div><span>Sales enquiries</span><span>Customer support</span><span>Order updates</span><span>Appointment reminders</span></div></div>
      </section>
      <section className={`${styles.section} ${styles.demoSection}`} id="how-it-works" aria-labelledby="demo-title"><div className={styles.sectionIntro}><span className={styles.eyebrow}>SEE WHAT YOUR CUSTOMERS EXPERIENCE</span><h2 id="demo-title">A question comes in.<br />Here’s what happens next.</h2><p>Choose a situation. See how a conversation can move from a customer’s question to a useful next step.</p></div><ConversationDemo /></section>
      <section className={`${styles.section} ${styles.benefitsSection}`} aria-labelledby="benefits-title">
        <div className={styles.benefitsHeading}><div><span className={styles.eyebrow}>A BETTER DAY FOR YOUR TEAM</span><h2 id="benefits-title">Fewer repetitive tasks.<br />More time for customers.</h2></div><p>Keep the everyday work moving, so your team can focus on conversations that need a person.</p></div>
        <div className={styles.benefitGrid}>
          <article><span className={styles.benefitIcon}><LuMessageCircle aria-hidden="true" /></span><h3>Give every enquiry a next step.</h3><p>Answer common questions and collect what your sales team needs before they take over.</p><span className={styles.benefitExample}>From “I’m interested” to a useful conversation.</span></article>
          <article><span className={styles.benefitIcon}><LuUsers aria-hidden="true" /></span><h3>Keep your team on the same page.</h3><p>Manage customer conversations in a shared inbox, with a clear handoff to the right person.</p><span className={styles.benefitExample}>The conversation continues. The context stays.</span></article>
          <article><span className={styles.benefitIcon}><LuWorkflow aria-hidden="true" /></span><h3>Follow up without starting over.</h3><p>Plan reminders and customer updates around the moments that matter to your business.</p><span className={styles.benefitExample}>Appointments, orders and the next check-in.</span></article>
        </div>
      </section>
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
        <div><span className={styles.eyebrow}>CONNECT THE WORK YOU ALREADY DO</span><h2 id="connections-title">Your website. Your CRM.<br />Your customer conversations.</h2><p>Bring your existing tools into the discussion. We’ll map the API or webhook connections needed for your workflow, so the demo answers your actual integration questions.</p><a href="#lead-form" className={styles.textLink}>Discuss my integration <LuArrowUpRight aria-hidden="true" /></a></div>
        <ol className={styles.connectionFlow}><li><LuMessageCircle aria-hidden="true" /><div><h3>Capture the enquiry</h3><p>Start with a website form or WhatsApp conversation.</p></div></li><li><LuWorkflow aria-hidden="true" /><div><h3>Connect the context</h3><p>Map the customer details and events your CRM needs.</p></div></li><li><LuUsers aria-hidden="true" /><div><h3>Continue the conversation</h3><p>Plan the follow-up and handoff to your team.</p></div></li></ol>
      </section>
      <EnquirySteps id="whatsapp-setup" title="See how WhatsApp could work for your team." description="Bring one everyday challenge: missed enquiries, repeated questions or manual follow-ups. We’ll show you a relevant workflow and explain the setup."
        steps={[
          ['Tell us where conversations get stuck.', 'Share how your team handles enquiries today and what you want to improve.'],
          ['See the customer and team experience.', 'Walk through automated replies, a shared inbox and the handoff to your team.'],
          ['Review a plan for your business.', 'Get clarity on your number, integrations, platform fees and messaging charges.'],
        ]}
        benefits={['A demo focused on your use case', 'Number and integration guidance', 'Pricing explained before you decide']}
        cta="Get My Demo & Pricing" />
      <section className={`${styles.section} ${styles.faqSection}`} id="questions" aria-labelledby="faq-title"><div><span className={styles.eyebrow}>A FEW THINGS YOU MAY BE WONDERING</span><h2 id="faq-title">Good questions.<br />Clear answers.</h2><p>Have a specific requirement?<br />We can talk it through in your demo.</p><a href="#lead-form" className={styles.textLink}>Ask our team <LuArrowUpRight aria-hidden="true" /></a></div><div className={styles.faqList}>{faqs.map(([q, a]) => <details key={q}><summary>{q}<LuChevronDown aria-hidden="true" /></summary><p>{a}</p></details>)}</div></section>
      <section className={styles.finalSection}><div><span className={styles.eyebrow}>SEE THE WORKFLOW BEFORE YOU DECIDE</span><h2>Start with the conversations you want to improve.</h2><p>Get a demo, setup guidance and pricing matched to your team.</p></div><a href="#lead-form" className={styles.primaryCta}>Get My Demo & Pricing <LuArrowUpRight aria-hidden="true" /></a></section>
      <footer className={styles.footer}><div><Image src="/ojiva-logo-optimized.webp" width={94} height={28} alt="Ojiva AI" loading="lazy" /><span>© {new Date().getFullYear()} Ojiva AI</span></div><nav aria-label="Contact and legal"><a href="tel:+918431086185"><LuPhone aria-hidden="true" /> Talk to our team</a><SupportChat /><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer>
      <MobileEnquiryBar />
    </div>
  );
}
