'use client';

import { useState } from 'react';
import { LuArrowRight, LuCheck, LuCompass, LuLayoutTemplate, LuCode, LuRocket } from 'react-icons/lu';
import styles from './WebsiteLanding.module.css';

const stages = [
  { label: 'Plan', icon: LuCompass, title: 'Start with the customer journey.', copy: 'Clarify what visitors need to understand, trust and do next before we choose a layout.', items: ['Audience and offer', 'Pages and conversion path', 'Content and information structure'] },
  { label: 'Design', icon: LuLayoutTemplate, title: 'Make the important things easy to see.', copy: 'Turn your positioning into a clear visual system that works across desktop, tablet and mobile.', items: ['Page hierarchy and sections', 'Responsive visual direction', 'Forms and interaction states'] },
  { label: 'Build', icon: LuCode, title: 'Build a fast, usable website.', copy: 'Develop the agreed pages with accessible interactions, responsive behaviour and the connections your business needs.', items: ['Reusable components', 'Forms and integrations', 'Speed and accessibility checks'] },
  { label: 'Launch', icon: LuRocket, title: 'Review it before customers do.', copy: 'Test the important journeys, fix rough edges and prepare the site for your team to manage.', items: ['Cross-device QA', 'SEO and analytics basics', 'Launch checklist and handover'] },
];

export default function WebsiteProcess() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  const Icon = stage.icon;
  return <div>
    <div className={styles.processTabs} role="tablist" aria-label="Website project stages">{stages.map((item, index) => { const StageIcon = item.icon; return <button type="button" role="tab" key={item.label} aria-selected={active === index} aria-controls="website-process-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)}><StageIcon aria-hidden="true" /><span>0{index + 1}</span>{item.label}</button>; })}</div>
    <div className={styles.processPanel} id="website-process-panel" role="tabpanel"><div className={styles.processCopy}><span className={styles.processIcon}><Icon aria-hidden="true" /></span><span className={styles.kicker}>STAGE 0{active + 1} / {stage.label.toUpperCase()}</span><h3>{stage.title}</h3><p>{stage.copy}</p><ul>{stage.items.map(item => <li key={item}><LuCheck aria-hidden="true" />{item}</li>)}</ul><button type="button" className={styles.processNext} onClick={() => setActive((active + 1) % stages.length)}>{active === stages.length - 1 ? 'Replay the process' : 'See the next stage'} <LuArrowRight aria-hidden="true" /></button></div><div className={styles.browserPreview} aria-label="Illustrative website project preview"><div className={styles.browserBar}><i /><i /><i /><span>yourbusiness.com</span></div><div className={styles.previewBody}><div className={styles.previewNav}><strong>YOUR BRAND</strong><span>Work</span><span>About</span><b>Start a project ↗</b></div><div className={styles.previewHero}><small>{stage.label.toUpperCase()} / WEBSITE PROJECT</small><strong>Make the next<br /><em>step obvious.</em></strong><div><span /><span /><span /></div></div><div className={styles.previewRows}><span /><span /><span /></div></div></div></div>
  </div>;
}
