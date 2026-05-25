'use client';

/**
 * Client-side anchor link that always smooth-scrolls to #lead-form,
 * even when the URL hash is already #lead-form (Next.js Link doesn't
 * re-trigger scroll on same-hash clicks).
 *
 * Drop-in replacement for `<Link href="#lead-form">` — accepts all the
 * same className/style props as a regular <a>.
 */
export default function ScrollToFormLink({ children, className, style, ariaLabel }) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = typeof document !== 'undefined' ? document.getElementById('lead-form') : null;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL hash for browser history / shareable URL
      if (typeof history !== 'undefined' && history.replaceState) {
        history.replaceState(null, '', '#lead-form');
      }
    }
  };

  return (
    <a
      href="#lead-form"
      onClick={handleClick}
      className={className}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
