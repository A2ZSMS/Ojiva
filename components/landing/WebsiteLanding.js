import Image from 'next/image';
import { LuArrowRight, LuArrowUpRight, LuCheck, LuChevronDown, LuGauge, LuLayers3, LuMousePointerClick, LuPhone } from 'react-icons/lu';
import LandingLeadForm from './LandingLeadForm';
import MobileEnquiryBar from './whatsapp-api/MobileEnquiryBar';
import SupportChat from './whatsapp-api/SupportChat';
import WebsiteProcess from './WebsiteProcess';
import base from './whatsapp-api/WhatsAppLanding.module.css';
import styles from './WebsiteLanding.module.css';

const services = [
  { value: '', label: 'Choose what you need' },
  { value: 'new-website', label: 'New business website' },
  { value: 'website-redesign', label: 'Website redesign' },
  { value: 'landing-page', label: 'Landing page for campaigns' },
  { value: 'ecommerce-website', label: 'Ecommerce website' },
  { value: 'web-application', label: 'Web application or portal' },
  { value: 'other', label: 'Help me choose' },
];

const fits = [
  ['New businesses', 'Give your offer a clear home and make it easy for the right visitors to enquire.'],
  ['Growing teams', 'Improve a site that no longer explains your products, services or next step clearly.'],
  ['Campaigns', 'Create focused landing pages for ads, launches and lead-generation campaigns.'],
  ['Product teams', 'Plan a portal or web application around the people who will use it every day.'],
];

const outcomes = [
  ['Be understood faster', 'Explain what you offer, who it helps and why it matters before a visitor has to search for the answer.'],
  ['Build confidence', 'Show the proof, process, people and answers that help a serious visitor feel ready to talk to you.'],
  ['Turn interest into enquiries', 'Give each visitor a clear next step, with forms and contact routes that are easy to use on a phone.'],
  ['Give your team a useful tool', 'Make your website a reliable place for campaigns, sales conversations, recruitment and customer questions.'],
];

const visitorJourney = [
  ['01', 'They arrive with a question', 'A clear headline and first section tell them quickly that they are in the right place.'],
  ['02', 'They find the answer', 'Simple sections explain the offer, use cases, proof and what makes your approach useful.'],
  ['03', 'They choose a next step', 'A relevant CTA guides them to enquire, book a call, request pricing or explore the right page.'],
  ['04', 'Your team gets context', 'The form captures the details your team needs to reply with a useful next conversation.'],
];

export default function WebsiteLanding() {
  return <div className={`${base.page} ${styles.page}`} id="website-top">
    <header className={styles.header}><div className={styles.headerInner}><a href="#website-top" aria-label="Ojiva AI, back to top"><Image src="/ojiva-logo-optimized.webp" alt="Ojiva AI" width={112} height={33} priority /></a><nav aria-label="Website services navigation"><a href="#outcomes">Why a website matters</a><a href="#process">How we work</a><a href="#fit">Who it is for</a></nav><a href="#lead-form" className={styles.headerCta}>Plan my website <LuArrowUpRight aria-hidden="true" /></a></div></header>
    <section className={styles.hero} aria-labelledby="website-title"><div className={styles.heroGrid}><div className={styles.heroCopy}><span className={styles.eyebrow}>WEBSITE DESIGN & DEVELOPMENT</span><h1 id="website-title">A website that makes the next step <em>obvious.</em></h1><p>We help businesses turn their offer into a clear, responsive website—so visitors understand what you do, trust the experience and know where to go next.</p><div className={styles.heroActions}><a href="#lead-form" className={styles.primaryCta}>Plan my website <LuArrowUpRight aria-hidden="true" /></a><a href="#process" className={styles.heroLink}>See how we work <LuArrowRight aria-hidden="true" /></a></div><div className={styles.heroProof}><span><LuMousePointerClick aria-hidden="true" /> Clear conversion paths</span><span><LuGauge aria-hidden="true" /> Mobile-first performance</span><span><LuLayers3 aria-hidden="true" /> Built around your goals</span></div></div><div className={styles.formPanel} id="lead-form"><LandingLeadForm compact formLabel="Request a website planning call" source="website-development" introLabel="STRATEGY + DESIGN + BUILD" title="Let’s plan the right website." subtitle="Tell us what you need. We’ll discuss the pages, journey, timeline and budget for your project." submitLabel="Plan My Website →" thankYouUrl="/thank-you" services={services} serviceLabel="What do you need?" nextStepText="Our team will contact you to understand your website goals and next steps." /></div></div></section>
    <section className={`${styles.section} ${styles.outcomeSection}`} id="outcomes" aria-labelledby="outcomes-title"><div className={styles.sectionIntro}><span className={styles.eyebrow}>WHY YOUR WEBSITE MATTERS</span><h2 id="outcomes-title">A useful website does more than look good.</h2><p>It helps the right people understand your business, trust what they see and take the next step without needing to ask your team the same basic questions.</p></div><div className={styles.outcomeGrid}>{outcomes.map(([title, copy], index) => <article key={title}><span className={styles.outcomeNumber}>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className={styles.journey}><div className={styles.journeyIntro}><span className={styles.eyebrow}>FROM FIRST VISIT TO ENQUIRY</span><h3>Show visitors how it helps them.</h3><p>The page should answer the questions people have in order, so the journey feels natural instead of forcing them to guess where to click.</p></div><div className={styles.journeyList}>{visitorJourney.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h4>{title}</h4><p>{copy}</p></div></article>)}</div></div></section>
    <section className={styles.section} id="process" aria-labelledby="process-title"><div className={styles.sectionIntro}><span className={styles.eyebrow}>A WEBSITE PROJECT YOU CAN FOLLOW</span><h2 id="process-title">Know what happens at every stage.</h2><p>Explore the process to see how we move from a business goal to a website your customers can use.</p></div><WebsiteProcess /></section>
    <section className={styles.workSection} aria-labelledby="work-title"><div className={styles.workInner}><span className={styles.eyebrow}>WHAT THE WEBSITE SHOULD DO</span><h2 id="work-title">Design decisions tied to<br />your business work.</h2><div className={styles.workGrid}><article className={styles.workCard}><span>01 / UNDERSTAND</span><h3>Make your offer easy to grasp.</h3><p>Organise the story so a new visitor can understand the problem you solve, who it is for and why they should continue.</p><b>Clear positioning → Better first conversations</b></article><article className={styles.workCard}><span>02 / GUIDE</span><h3>Give every page a next step.</h3><p>Build routes for people who are ready to enquire, still comparing options or simply looking for an answer.</p><b>Useful content → More confident action</b></article><article className={styles.workCard}><span>03 / IMPROVE</span><h3>Make the experience feel dependable.</h3><p>Check mobile layouts, load performance, accessibility and form states before the site reaches your customers.</p><b>Less friction → A better visit</b></article></div></div></section>
    <section className={`${styles.section} ${styles.fitSection}`} id="fit" aria-labelledby="fit-title"><div><span className={styles.eyebrow}>WHERE WE CAN HELP</span><h2 id="fit-title">Start with the website problem you need to solve.</h2><p className={styles.sectionLead}>You don’t need a finished brief. Bring the business goal, the current site or the campaign you are planning. We’ll help shape the right scope.</p><a href="#lead-form" className={styles.heroLink}>Discuss my website project <LuArrowUpRight aria-hidden="true" /></a></div><div className={styles.fitList}>{fits.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className={`${styles.section} ${styles.faqSection}`} aria-labelledby="website-faq-title"><div><span className={styles.eyebrow}>BEFORE WE START</span><h2 id="website-faq-title">Website questions,<br />answered clearly.</h2><p className={styles.sectionLead}>Bring your current site, idea or challenge to the planning call.</p></div><div className={styles.faqList}>{[
      ['What type of website can you build?', 'We can plan a new business website, redesign an existing site, create campaign landing pages, build ecommerce experiences or scope a web application or portal.'],
      ['Do I need a finished brief?', 'No. Bring your business goal, current website or campaign idea. We’ll help define the pages, content, priority actions and technical scope.'],
      ['Will the website work on mobile?', 'Yes. Responsive behaviour is planned from the start, with checks across mobile, tablet and desktop layouts.'],
      ['Can you connect forms and other tools?', 'We can discuss your CRM, analytics, lead forms, payments, APIs or other tools during planning and define what the website needs to connect.'],
      ['How much does a website cost?', 'The scope depends on page count, content, design depth, integrations and whether the project is a marketing site, ecommerce experience or web application. We’ll discuss the scope before preparing a quote.'],
    ].map(([question, answer]) => <details key={question}><summary>{question}<LuChevronDown aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>
    <section className={styles.final} aria-labelledby="final-title"><div><span className={styles.eyebrow}>READY TO MAKE THE WEBSITE CLEARER?</span><h2 id="final-title">Bring us the goal.<br />We’ll map the next step.</h2><p>Get a practical website discussion before committing to a build.</p></div><a href="#lead-form" className={styles.primaryCta}>Plan My Website <LuArrowUpRight aria-hidden="true" /></a></section>
    <footer className={styles.footer}><div><Image src="/ojiva-logo-optimized.webp" alt="Ojiva AI" width={94} height={28} loading="lazy" /><span>© {new Date().getFullYear()} Ojiva AI</span></div><nav aria-label="Contact and legal"><a href="tel:+918431086185"><LuPhone aria-hidden="true" /> Talk to our team</a><SupportChat /><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer><MobileEnquiryBar label="Plan my website ↗" />
  </div>;
}
