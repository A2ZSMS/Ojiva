'use client';

import Image from 'next/image';

function scrollToForm(e) {
  e.preventDefault();
  const el = document.getElementById('lead-form');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Header() {
  return (
    <header className="lp-header">
      <div className="lp-header-inner">

        {/* Logo — scrolls to form instead of leaving the page */}
        <button
          onClick={scrollToForm}
          className="lp-header-logo-btn"
          aria-label="Scroll to contact form"
          type="button"
        >
          <Image
            src="/ojiva-logo-optimized.webp"
            alt="Ojiva AI"
            width={90}
            height={26}
            priority
            unoptimized
            style={{ height: 'auto', display: 'block' }}
          />
        </button>

        {/* Right side */}
        <div className="lp-header-right">
          <button
            onClick={scrollToForm}
            className="lp-header-cta"
            type="button"
          >
            Book Demo →
          </button>
        </div>

      </div>
    </header>
  );
}
