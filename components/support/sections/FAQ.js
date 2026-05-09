'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQS = [
  { q: 'How quickly will I get a response?',          category: 'all',     a: 'Starter plans receive a response within 24 hours. Growth plans within 4 hours. Enterprise clients enjoy a guaranteed 1-hour response time, 24/7.' },
  { q: 'Do you offer onboarding assistance?',          category: 'account', a: 'Yes. Growth plans include guided onboarding sessions. Enterprise plans include white-glove onboarding with a dedicated engineer assigned to your team from day one.' },
  { q: 'What is your uptime SLA?',                     category: 'all',     a: 'We guarantee 99.5% uptime on Starter, 99.9% on Growth, and 99.99% on Enterprise — all backed by financially binding SLA agreements.' },
  { q: 'Can I upgrade my support plan anytime?',       category: 'billing', a: 'Absolutely. You can upgrade your support tier at any time from your account dashboard. Changes take effect immediately, and billing is prorated.' },
  { q: 'Is there a self-service knowledge base?',      category: 'all',     a: "Yes — docs.ojiva.ai has a full API reference, integration tutorials, video walkthroughs, and a searchable changelog. It's available 24/7 to all users." },
  { q: 'How do I get a sandbox API key?',              category: 'api',     a: 'Log into your dashboard, navigate to Settings → Developer → API Keys, and click "Generate Sandbox Key". It activates immediately with full test mode access.' },
  { q: 'Why is my SMS delivery rate lower than usual?', category: 'sms',    a: 'Delivery rates can dip due to DLT template issues, operator filtering, or number blacklisting. Check our status page and review your DLT registration in the dashboard.' },
  { q: 'How do I connect WhatsApp Business API?',      category: 'whatsapp',a: 'As an official Meta BSP, we handle verification. Submit your business details in the dashboard under Services → WhatsApp and our team completes setup within 24–48 hours.' },
  { q: 'How do I change my billing email?',            category: 'billing', a: 'Go to Account → Billing → Billing Contact and update your email. All future invoices will be sent to the new address immediately.' },
  { q: 'Can I get webhook retry notifications?',       category: 'api',     a: 'Yes. Enable "Webhook Failure Alerts" in Settings → Webhooks. You will receive email and in-platform notifications on any failed delivery or retry attempt.' },
  { q: 'What is a DLT registration?',                  category: 'sms',     a: 'DLT (Distributed Ledger Technology) registration is mandatory in India for sending commercial SMS. Ojiva AI assists with full DLT registration support as part of your onboarding.' },
  { q: 'How do I reset my 2FA authenticator?',         category: 'account', a: 'Open a priority support ticket and our security team will verify your identity and reset 2FA within 30 minutes. Enterprise clients can call the direct support line.' },
];

const CATEGORIES = [
  { id: 'all',         label: 'All Topics',   icon: '🔍' },
  { id: 'api',         label: 'API & Dev',    icon: '🔌' },
  { id: 'billing',     label: 'Billing',      icon: '💳' },
  { id: 'sms',         label: 'SMS & RCS',    icon: '📱' },
  { id: 'whatsapp',    label: 'WhatsApp',     icon: '💬' },
  { id: 'account',     label: 'Account',      icon: '👤' },
];

/** FAQ with search + category filter */
export default function FAQ() {
  const [search, setSearch]     = useState('');
  const [active, setActive]     = useState('all');
  const [openIdx, setOpenIdx]   = useState(null);

  const filtered = FAQS.filter(f => {
    const matchCat = active === 'all' || f.category === active;
    const matchSrch = !search || f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSrch;
  });

  return (
    <section className="section-padding bg-section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="text-center mb-4">
          <span className="section-tag">FAQ</span>
          <h2 id="faq-heading" className="section-title mt-2">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">Search across {FAQS.length} common questions.</p>
        </div>

        {/* Search bar */}
        <div className="sp-faq-search-wrap">
          <span className="sp-faq-search-icon">🔍</span>
          <input
            className="sp-faq-search"
            placeholder="Search questions, e.g. 'API key' or 'billing'…"
            value={search}
            onChange={e => { setSearch(e.target.value); setOpenIdx(null); }}
          />
          {search && (
            <button className="sp-faq-clear" onClick={() => { setSearch(''); setOpenIdx(null); }}>✕</button>
          )}
        </div>

        {/* Category pills */}
        <div className="sp-faq-cats">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              className={`sp-faq-cat${active === c.id ? ' active' : ''}`}
              onClick={() => { setActive(c.id); setOpenIdx(null); }}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="sp-faq-count">
          {filtered.length === 0 ? 'No results found.' : `Showing ${filtered.length} of ${FAQS.length} questions`}
        </p>

        {/* FAQ accordion */}
        <div className="sp-faq-list">
          <AnimatePresence>
            {filtered.map((f, i) => (
              <motion.div
                key={f.q}
                className={`sp-faq-item${openIdx === i ? ' open' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                role="button"
                tabIndex={0}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                <div className="sp-faq-q">
                  <span>{f.q}</span>
                  <motion.span
                    className="sp-faq-chevron"
                    animate={{ rotate: openIdx === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    ▾
                  </motion.span>
                </div>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.p
                      className="sp-faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {f.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
