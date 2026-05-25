'use client';

import dynamic from 'next/dynamic';
import Header   from './whatsapp-api/Header';
import Hero     from './bulk-sms/Hero';
import SmsTypes from './bulk-sms/SmsTypes';
import Footer   from './whatsapp-api/Footer';

/* ── Lazy-loaded below-the-fold sections ─────────────────────
   Dynamic imports split each section into its own JS chunk so
   the browser only downloads them when needed, improving FCP.
   ─────────────────────────────────────────────────────────── */
const WhyTrust         = dynamic(() => import('./bulk-sms/WhyTrust'));
const DashboardPreview = dynamic(() => import('./bulk-sms/DashboardPreview'));
const Coverage         = dynamic(() => import('./bulk-sms/Coverage'));
const HowItWorks       = dynamic(() => import('./bulk-sms/HowItWorks'));
const Industries       = dynamic(() => import('./bulk-sms/Industries'));
const FAQ              = dynamic(() => import('./bulk-sms/FAQ'));
const FinalCTA         = dynamic(() => import('./bulk-sms/FinalCTA'));

export default function BulkSmsLanding() {
  return (
    <>
      <Header />

      <div className="bsl-a2z">
        {/* ── Above-the-fold: rendered immediately for fast FCP ── */}
        <Hero />              {/* 1 — hero with mesh blobs           */}
        <SmsTypes />          {/* 2 — service cards w/ gradient bar  */}

        {/* ── Below-the-fold: lazy-loaded after initial paint ── */}
        <WhyTrust />          {/* 3 — alt light gray                 */}
        <DashboardPreview />  {/* 4 — white                          */}
        <Coverage />          {/* 5 — alt light gray                 */}
        <HowItWorks />        {/* 6 — DARK section (A2Z signature)   */}
        <Industries />        {/* 7 — alt light gray                 */}
        <FinalCTA />          {/* 8 — animated dark CTA              */}
        <FAQ />               {/* 9 — alt light gray                 */}
      </div>

      <Footer />

      {/* ═════════════════════════════════════════════════════════════════
         A2ZSMS-inspired visual overlay.
         Replicates: blue gradient buttons, section badge pills, glass
         cards, mesh-blob hero background, animated dark sections, and
         the signature white→light-gray section alternation.
         Scoped to .bsl-a2z — no other file is touched.
         ═════════════════════════════════════════════════════════════════ */}
      <style jsx global>{`
        /* ──────────────── TOKENS ──────────────── */
        .bsl-a2z {
          --a2z-blue:       #0d6efd;
          --a2z-blue-dark:  #0b5ed7;
          --a2z-blue-deep:  #1d4ed8;
          --a2z-navy:       #1e3a8a;
          --a2z-blue-50:    #eff6ff;
          --a2z-blue-100:   #dbeafe;
          --a2z-blue-200:   #bfdbfe;
          --a2z-blue-300:   #93c5fd;
          --a2z-blue-400:   #60a5fa;
          --a2z-heading:    #0f172a;
          --a2z-body:       #475569;
          --a2z-muted:      #94a3b8;
          --a2z-surface:    #f8fafc;
          --a2z-border:     #e2e8f0;
          --a2z-card:       #ffffff;
          --a2z-dark-1:     #0f1c2e;
          --a2z-dark-2:     #162032;
          --a2z-radius:     20px;
          --a2z-radius-sm:  14px;
          --a2z-shadow:     0 4px 24px rgba(15,23,42,0.06);
          --a2z-shadow-lg:  0 20px 60px rgba(15,23,42,0.10);

          font-family: 'Inter', 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
          color: var(--a2z-body);
          line-height: 1.6;
          letter-spacing: -0.005em;
        }

        /* ──────────────── ANIMATIONS ──────────────── */
        @keyframes a2z-mesh-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%      { transform: translate(30px, -40px) scale(1.08); }
          66%      { transform: translate(-20px, 30px) scale(0.96); }
        }
        @keyframes a2z-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(13,110,253,0.45); }
          50%      { box-shadow: 0 0 0 8px rgba(13,110,253,0); }
        }
        @keyframes a2z-shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes a2z-cta-shift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes a2z-particle {
          0%   { transform: translateY(0) scale(1); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-120vh) scale(0.6); opacity: 0; }
        }

        /* ══════════════════════════════════════════════════════════════
           HERO  — Replace dark plain blue with A2ZSMS hero gradient
                   + animated mesh blobs (added via ::before/::after)
           ══════════════════════════════════════════════════════════════ */
        .bsl-a2z .bs2-hero {
          background:
            radial-gradient(ellipse 80% 60% at 100% 0%, var(--a2z-blue-100) 0%, transparent 55%),
            radial-gradient(ellipse 70% 55% at 0% 100%, var(--a2z-blue-50) 0%, transparent 50%),
            linear-gradient(135deg, #eff6ff 0%, #f8faff 40%, #ffffff 70%, #f5f8ff 100%) !important;
          position: relative;
          overflow: hidden;
        }
        /* Two large floating blue mesh blobs */
        .bsl-a2z .bs2-hero::before,
        .bsl-a2z .bs2-hero::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.55;
          pointer-events: none;
          z-index: 0;
        }
        .bsl-a2z .bs2-hero::before {
          width: 480px; height: 480px;
          top: -120px; left: -120px;
          background: radial-gradient(circle, var(--a2z-blue) 0%, transparent 70%);
          animation: a2z-mesh-float 14s ease-in-out infinite;
        }
        .bsl-a2z .bs2-hero::after {
          width: 520px; height: 520px;
          bottom: -160px; right: -140px;
          background: radial-gradient(circle, var(--a2z-blue-deep) 0%, transparent 70%);
          animation: a2z-mesh-float 18s ease-in-out infinite reverse;
        }
        /* Hide the original inline white orbs (they're added by Hero.js) */
        .bsl-a2z .bs2-hero > div[aria-hidden][style*="rgba(255,255,255"] { display: none !important; }

        /* Hero headline — switch to A2Z navy w/ blue gradient accent */
        .bsl-a2z .bs2-hero-h1,
        .bsl-a2z .bs2-hero-h1 span {
          color: var(--a2z-heading) !important;
          -webkit-text-fill-color: var(--a2z-heading) !important;
          background: none !important;
          font-weight: 800 !important;
          letter-spacing: -0.025em !important;
          text-shadow: none !important;
        }
        .bsl-a2z .bs2-hero-h1 span span:last-child {
          background: linear-gradient(90deg, var(--a2z-blue) 0%, var(--a2z-blue-deep) 100%) !important;
          -webkit-background-clip: text !important;
                  background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          color: transparent !important;
        }
        .bsl-a2z .bs2-hero-desc,
        .bsl-a2z .bs2-hero-desc span {
          color: var(--a2z-body) !important;
        }

        /* Hero badge — A2Z white pill with pulsing blue dot */
        .bsl-a2z .bs2-hero-badge {
          background: #ffffff !important;
          border: 1px solid var(--a2z-blue-100) !important;
          color: var(--a2z-blue-deep) !important;
          box-shadow: 0 4px 14px rgba(13,110,253,0.10) !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          font-weight: 600;
        }
        .bsl-a2z .bs2-hero-badge-dot {
          background: var(--a2z-blue) !important;
          animation: a2z-pulse 2s ease infinite;
        }

        /* Hero bullets — change check colour to blue */
        .bsl-a2z .bs2-hero-bullets li > span:last-child {
          color: var(--a2z-heading) !important;
        }
        .bsl-a2z .bs2-hero-bullets li {
          color: var(--a2z-heading) !important;
        }
        .bsl-a2z .bs2-check {
          background: var(--a2z-blue-100) !important;
          color: var(--a2z-blue-deep) !important;
        }

        /* Hero stats — white cards with blue gradient numerals */
        .bsl-a2z .bs2-hero-stat {
          background: #ffffff !important;
          border: 1px solid var(--a2z-border) !important;
          border-radius: var(--a2z-radius-sm) !important;
          box-shadow: var(--a2z-shadow) !important;
        }
        .bsl-a2z .bs2-hero-stat-val {
          background: linear-gradient(90deg, var(--a2z-blue), var(--a2z-blue-deep)) !important;
          -webkit-background-clip: text !important;
                  background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          color: transparent !important;
          font-weight: 800 !important;
        }
        .bsl-a2z .bs2-hero-stat-lbl {
          color: var(--a2z-muted) !important;
        }

        /* ══════════════════════════════════════════════════════════════
           LEAD FORM — A2Z glass form card
           ══════════════════════════════════════════════════════════════ */
        .bsl-a2z .bs2-form-card,
        .bsl-a2z #lead-form {
          background: rgba(255,255,255,0.92) !important;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(226,232,240,0.6) !important;
          border-radius: var(--a2z-radius) !important;
          box-shadow:
            0 25px 60px rgba(15,23,42,0.12),
            0 0 0 1px rgba(13,110,253,0.04) inset !important;
          overflow: hidden;
          position: relative;
        }
        .bsl-a2z #lead-form::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--a2z-blue-deep), var(--a2z-blue), var(--a2z-blue-deep));
          background-size: 200% 100%;
          animation: a2z-shimmer 3s linear infinite;
          z-index: 2;
        }
        .bsl-a2z #lead-form input,
        .bsl-a2z #lead-form select,
        .bsl-a2z #lead-form textarea {
          border: 1.5px solid var(--a2z-border) !important;
          border-radius: 12px !important;
          transition: border-color 0.18s ease, box-shadow 0.18s ease;
        }
        .bsl-a2z #lead-form input:focus,
        .bsl-a2z #lead-form select:focus,
        .bsl-a2z #lead-form textarea:focus {
          border-color: var(--a2z-blue) !important;
          box-shadow: 0 0 0 3px rgba(13,110,253,0.12) !important;
          outline: none !important;
        }
        .bsl-a2z #lead-form button[type="submit"],
        .bsl-a2z #lead-form button.btn-primary {
          background: linear-gradient(90deg, var(--a2z-blue), var(--a2z-blue-dark)) !important;
          border: none !important;
          border-radius: 999px !important;
          padding: 0.95rem 1.4rem !important;
          font-weight: 700 !important;
          color: #fff !important;
          box-shadow: 0 6px 18px rgba(13,110,253,0.30) !important;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .bsl-a2z #lead-form button[type="submit"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(13,110,253,0.40) !important;
        }

        /* ══════════════════════════════════════════════════════════════
           SECTION ALTERNATION — A2Z signature: white / #f8fafc / dark
           ══════════════════════════════════════════════════════════════ */
        /* Light-gray (sectionAlt) — applied to WhyTrust(3), Coverage(5),
           Industries(7), FAQ(9) by overriding their inline backgrounds */
        .bsl-a2z > section:nth-of-type(3),
        .bsl-a2z > section:nth-of-type(5),
        .bsl-a2z > section:nth-of-type(7),
        .bsl-a2z > section:nth-of-type(9) {
          background: var(--a2z-surface) !important;
        }
        /* ═══════ WhyTrust(3) — A2Z layout: illustration LEFT, cards RIGHT ═══════ */
        .bsl-a2z > section:nth-of-type(3) [aria-hidden] { display: none !important; }

        /* Swap row: illustration moves to LEFT, content to RIGHT */
        .bsl-a2z > section:nth-of-type(3) .row {
          flex-direction: row-reverse !important;
        }

        /* Recolor text from white → dark on light bg */
        .bsl-a2z > section:nth-of-type(3) h2,
        .bsl-a2z > section:nth-of-type(3) h2 span {
          color: var(--a2z-heading) !important;
          -webkit-text-fill-color: var(--a2z-heading) !important;
        }
        .bsl-a2z > section:nth-of-type(3) .col-lg-7 > p,
        .bsl-a2z > section:nth-of-type(3) .col-lg-7 > p span {
          color: var(--a2z-body) !important;
        }

        /* WHY OJIVA AI eyebrow → A2Z pill badge */
        .bsl-a2z > section:nth-of-type(3) p[style*="a5cffa"] {
          background: linear-gradient(135deg, var(--a2z-blue-100), var(--a2z-blue-200)) !important;
          color: var(--a2z-blue-deep) !important;
          padding: 0.4rem 1rem !important;
          border-radius: 999px !important;
          display: inline-block !important;
          letter-spacing: 0.12em !important;
          font-size: 0.72rem !important;
          font-weight: 700 !important;
        }

        /* Illustration container — switch from glass-on-dark to light card */
        .bsl-a2z > section:nth-of-type(3) .col-lg-5 > div {
          background: #ffffff !important;
          border: 1px solid var(--a2z-border) !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          box-shadow: 0 20px 50px rgba(15,23,42,0.08) !important;
        }

        /* Stat-cards grid → A2Z 2-col feature grid */
        .bsl-a2z > section:nth-of-type(3) .col-lg-7 > div[style*="grid"] {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 0.9rem !important;
          margin-bottom: 1.5rem !important;
        }
        .bsl-a2z > section:nth-of-type(3) .col-lg-7 > div[style*="grid"] > div {
          background: #ffffff !important;
          border: 1px solid var(--a2z-border) !important;
          border-radius: 14px !important;
          box-shadow: 0 4px 20px rgba(15,23,42,0.06) !important;
          padding: 1.2rem 1.1rem !important;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease !important;
          position: relative;
          overflow: hidden;
        }
        .bsl-a2z > section:nth-of-type(3) .col-lg-7 > div[style*="grid"] > div::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--a2z-blue), var(--a2z-blue-deep));
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .bsl-a2z > section:nth-of-type(3) .col-lg-7 > div[style*="grid"] > div:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 32px rgba(15,23,42,0.10) !important;
          border-color: rgba(13,110,253,0.30) !important;
        }
        .bsl-a2z > section:nth-of-type(3) .col-lg-7 > div[style*="grid"] > div:hover::before {
          opacity: 1;
        }

        /* Title inside stat cards stays dark */
        .bsl-a2z > section:nth-of-type(3) .col-lg-7 > div[style*="grid"] > div > div[style*="0f172a"] {
          color: var(--a2z-heading) !important;
          font-size: 0.98rem !important;
        }
        .bsl-a2z > section:nth-of-type(3) .col-lg-7 > div[style*="grid"] > div p {
          color: var(--a2z-body) !important;
          font-size: 0.85rem !important;
        }

        /* "Get Started" white-on-dark button → A2Z gradient pill */
        .bsl-a2z > section:nth-of-type(3) .col-lg-7 a[style*="background"] {
          background: linear-gradient(90deg, var(--a2z-blue), var(--a2z-blue-dark)) !important;
          color: #ffffff !important;
          border-radius: 999px !important;
          box-shadow: 0 6px 18px rgba(13,110,253,0.30) !important;
          padding: 0.9rem 1.8rem !important;
          transition: transform 0.18s ease, box-shadow 0.18s ease !important;
        }
        .bsl-a2z > section:nth-of-type(3) .col-lg-7 a[style*="background"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(13,110,253,0.40) !important;
        }

        /* White (DashboardPreview = 4) — keep clean, swap columns */
        .bsl-a2z > section:nth-of-type(4) {
          background: #ffffff !important;
        }
        /* Swap: content LEFT, image RIGHT */
        .bsl-a2z > section:nth-of-type(4) .row {
          flex-direction: row-reverse !important;
        }

        /* DARK section (HowItWorks = 6) — A2Z signature dark backdrop */
        .bsl-a2z > section:nth-of-type(6) {
          background: linear-gradient(160deg, var(--a2z-dark-1) 0%, var(--a2z-dark-2) 50%, var(--a2z-dark-1) 100%) !important;
          position: relative;
          overflow: hidden;
        }
        .bsl-a2z > section:nth-of-type(6)::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 15% 20%, rgba(96,165,250,0.18), transparent 40%),
            radial-gradient(circle at 85% 80%, rgba(29,78,216,0.20), transparent 45%);
          pointer-events: none;
        }
        .bsl-a2z > section:nth-of-type(6) > * { position: relative; z-index: 1; }
        .bsl-a2z > section:nth-of-type(6) h2,
        .bsl-a2z > section:nth-of-type(6) h2 span,
        .bsl-a2z > section:nth-of-type(6) h3,
        .bsl-a2z > section:nth-of-type(6) h3 span {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        .bsl-a2z > section:nth-of-type(6) > div > div.text-center p,
        .bsl-a2z > section:nth-of-type(6) > div > div.text-center h2 + p {
          color: rgba(255,255,255,0.78) !important;
        }
        .bsl-a2z > section:nth-of-type(6) p[style*="1B48E0"] {
          color: var(--a2z-blue-400) !important;
        }
        /* HowItWorks step cards stay WHITE — keep their dark text visible */
        .bsl-a2z > section:nth-of-type(6) [style*="background: #ffffff"],
        .bsl-a2z > section:nth-of-type(6) [style*="background:#ffffff"] {
          background: #ffffff !important;
          box-shadow: 0 20px 50px rgba(0,0,0,0.25) !important;
        }
        .bsl-a2z > section:nth-of-type(6) [style*="background: #ffffff"] h3,
        .bsl-a2z > section:nth-of-type(6) [style*="background:#ffffff"] h3,
        .bsl-a2z > section:nth-of-type(6) [style*="background: #ffffff"] h3 span,
        .bsl-a2z > section:nth-of-type(6) [style*="background:#ffffff"] h3 span {
          color: #0f172a !important;
          -webkit-text-fill-color: #0f172a !important;
        }
        .bsl-a2z > section:nth-of-type(6) [style*="background: #ffffff"] p,
        .bsl-a2z > section:nth-of-type(6) [style*="background:#ffffff"] p,
        .bsl-a2z > section:nth-of-type(6) [style*="background: #ffffff"] p span,
        .bsl-a2z > section:nth-of-type(6) [style*="background:#ffffff"] p span,
        .bsl-a2z > section:nth-of-type(6) [style*="background: #ffffff"] div,
        .bsl-a2z > section:nth-of-type(6) [style*="background:#ffffff"] div {
          color: #475569 !important;
        }
        /* Step-number labels (STEP 01 / 02 / 03) keep their accent colour */
        .bsl-a2z > section:nth-of-type(6) [style*="background: #ffffff"] p[style*="letter-spacing"],
        .bsl-a2z > section:nth-of-type(6) [style*="background:#ffffff"] p[style*="letter-spacing"] {
          color: inherit !important;
        }

        /* FinalCTA(8) — animated multi-color dark gradient (A2Z signature) */
        .bsl-a2z > section:nth-of-type(8) {
          background:
            linear-gradient(135deg, var(--a2z-dark-1) 0%, var(--a2z-dark-2) 30%, var(--a2z-navy) 60%, var(--a2z-dark-1) 100%) !important;
          background-size: 200% 200% !important;
          animation: a2z-cta-shift 8s ease infinite;
          position: relative;
          overflow: hidden;
        }
        .bsl-a2z > section:nth-of-type(8) [aria-hidden] { display: none !important; }
        /* Floating particles on final CTA */
        .bsl-a2z > section:nth-of-type(8)::before,
        .bsl-a2z > section:nth-of-type(8)::after {
          content: '';
          position: absolute;
          width: 6px; height: 6px;
          background: var(--a2z-blue-400);
          border-radius: 50%;
          box-shadow: 0 0 12px var(--a2z-blue-400);
          pointer-events: none;
        }
        .bsl-a2z > section:nth-of-type(8)::before {
          left: 15%; bottom: 0;
          animation: a2z-particle 10s linear infinite;
        }
        .bsl-a2z > section:nth-of-type(8)::after {
          left: 75%; bottom: 0;
          animation: a2z-particle 14s linear infinite 4s;
        }

        /* ══════════════════════════════════════════════════════════════
           SECTION BADGES — turn eyebrow text into A2Z pill badges
           ══════════════════════════════════════════════════════════════ */
        .bsl-a2z p[style*="OUR SERVICES"],
        .bsl-a2z p[style*="DASHBOARD PREVIEW"],
        .bsl-a2z p[style*="PAN-INDIA COVERAGE"],
        .bsl-a2z p[style*="HOW IT WORKS"],
        .bsl-a2z p[style*="INDUSTRIES WE SERVE"],
        .bsl-a2z p[style*="WHY OJIVA AI"] {
          display: inline-block !important;
          background: linear-gradient(135deg, var(--a2z-blue-100), var(--a2z-blue-200)) !important;
          color: var(--a2z-blue-deep) !important;
          padding: 0.4rem 1rem !important;
          border-radius: 999px !important;
          letter-spacing: 0.12em !important;
          font-size: 0.72rem !important;
          font-weight: 700 !important;
          margin-bottom: 1.1rem !important;
        }
        /* Dark section badge variant */
        .bsl-a2z > section:nth-of-type(6) p[style*="HOW IT WORKS"] {
          background: rgba(13,110,253,0.18) !important;
          color: var(--a2z-blue-400) !important;
        }

        /* Section headings — switch to A2Z weight + spacing */
        .bsl-a2z h2[style*="font-weight: 800"] span,
        .bsl-a2z h2[style*="font-weight: 800"] {
          letter-spacing: -0.025em !important;
        }

        /* ══════════════════════════════════════════════════════════════
           SERVICE CARDS (SmsTypes) — A2Z style with gradient top bar
           ══════════════════════════════════════════════════════════════ */
        .bsl-a2z > section:nth-of-type(2) > div > div:last-child > div {
          border-radius: var(--a2z-radius) !important;
          border: 1px solid var(--a2z-border) !important;
          box-shadow: var(--a2z-shadow) !important;
          transition: transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s, border-color 0.25s !important;
          position: relative;
          overflow: hidden;
        }
        .bsl-a2z > section:nth-of-type(2) > div > div:last-child > div::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--a2z-blue), var(--a2z-blue-deep));
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .bsl-a2z > section:nth-of-type(2) > div > div:last-child > div:hover {
          transform: translateY(-6px) !important;
          box-shadow: var(--a2z-shadow-lg) !important;
          border-color: rgba(13,110,253,0.30) !important;
        }
        .bsl-a2z > section:nth-of-type(2) > div > div:last-child > div:hover::before {
          opacity: 1;
        }

        /* ══════════════════════════════════════════════════════════════
           COVERAGE PILLS — refresh city tags
           ══════════════════════════════════════════════════════════════ */
        .bsl-a2z > section:nth-of-type(5) span[style*="border-radius: 999px"] {
          transition: all 0.18s ease;
        }
        .bsl-a2z > section:nth-of-type(5) span[style*="border-radius: 999px"]:hover {
          border-color: var(--a2z-blue) !important;
          color: var(--a2z-blue-deep) !important;
        }

        /* ══════════════════════════════════════════════════════════════
           INDUSTRY CARDS — softer A2Z shadow style
           ══════════════════════════════════════════════════════════════ */
        .bsl-a2z > section:nth-of-type(7) > div > div:nth-of-type(2) > div {
          border-radius: var(--a2z-radius-sm) !important;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease !important;
        }
        .bsl-a2z > section:nth-of-type(7) > div > div:nth-of-type(2) > div:hover {
          transform: translateY(-4px) !important;
          box-shadow: var(--a2z-shadow-lg) !important;
          border-color: rgba(13,110,253,0.25) !important;
        }

        /* ══════════════════════════════════════════════════════════════
           BUTTONS — Pill-shaped gradient (A2Z signature)
           ══════════════════════════════════════════════════════════════ */
        .bsl-a2z .bs2-btn-primary,
        .bsl-a2z a.bs2-btn-primary,
        .bsl-a2z button.bs2-btn-primary {
          background: linear-gradient(90deg, var(--a2z-blue), var(--a2z-blue-dark)) !important;
          border: none !important;
          border-radius: 999px !important;
          padding: 0.95rem 2rem !important;
          color: #fff !important;
          font-weight: 700 !important;
          box-shadow: 0 4px 16px rgba(13,110,253,0.30) !important;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          text-decoration: none !important;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .bsl-a2z .bs2-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(13,110,253,0.40) !important;
          color: #fff !important;
        }

        /* Service card "Get Started" inline-styled buttons — unify to pill */
        .bsl-a2z > section:nth-of-type(2) a[style*="border-radius: 10px"] {
          border-radius: 999px !important;
          padding: 0.75rem 1.2rem !important;
          box-shadow: 0 6px 16px rgba(13,110,253,0.18) !important;
          transition: transform 0.18s ease, box-shadow 0.18s ease !important;
        }
        .bsl-a2z > section:nth-of-type(2) a[style*="border-radius: 10px"]:hover {
          transform: translateY(-2px);
        }

        /* ══════════════════════════════════════════════════════════════
           FAQ — A2Z bordered accordion + glass on open
           ══════════════════════════════════════════════════════════════ */
        .bsl-a2z > section:nth-of-type(9) [style*="border: 1.5px solid"] {
          border-radius: var(--a2z-radius-sm) !important;
          transition: border-color 0.18s ease, box-shadow 0.18s ease !important;
        }

        /* ══════════════════════════════════════════════════════════════
           HEADING GRADIENT ACCENTS — apply to dashboard section heading
           ══════════════════════════════════════════════════════════════ */
        .bsl-a2z h2[style*="See Your Campaigns"] {
          background: linear-gradient(90deg, var(--a2z-heading) 60%, var(--a2z-blue-deep) 100%);
          -webkit-background-clip: text;
                  background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        /* ══════════════════════════════════════════════════════════════
           MOTION RESPECT
           ══════════════════════════════════════════════════════════════ */
        @media (prefers-reduced-motion: reduce) {
          .bsl-a2z *,
          .bsl-a2z *::before,
          .bsl-a2z *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
