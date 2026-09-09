import { LuArrowUpRight, LuCheck } from 'react-icons/lu';
import styles from './whatsapp-api/WhatsAppLanding.module.css';

export default function EnquirySteps({ id, title, description, benefits, steps, cta }) {
  return <section className={styles.enquirySection} id={id} aria-labelledby={`${id}-title`}>
    <div className={styles.enquiryInner}>
      <div className={styles.enquiryIntro}><span className={styles.eyebrow}>WHAT YOU GET WHEN YOU ENQUIRE</span><h2 id={`${id}-title`}>{title}</h2><p>{description}</p></div>
      <div className={styles.enquiryLayout}>
        <ol className={styles.enquirySteps}>{steps.map(([heading, text], index) => <li key={heading}><span className={styles.stepNumber}>0{index + 1}</span><div><h3>{heading}</h3><p>{text}</p></div></li>)}</ol>
        <aside className={styles.enquiryOffer}><span>YOUR NEXT STEP</span><h3>Know what fits.<br />Know what it costs.</h3><ul>{benefits.map(item => <li key={item}><LuCheck aria-hidden="true" />{item}</li>)}</ul><a href="#lead-form" className={styles.primaryCta}>{cta}<LuArrowUpRight aria-hidden="true" /></a><p>Our team will contact you to understand your requirements.</p></aside>
      </div>
    </div>
  </section>;
}
