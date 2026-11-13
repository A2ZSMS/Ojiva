/**
 * ArrowLabel — renders a button label, giving a trailing "→" its own span so
 * CSS can slide it on hover (`.btn-arrow` in globals.css) (Nov 2026).
 *
 *   <ArrowLabel>{'Start Sending SMS →'}</ArrowLabel>
 *     → Start Sending SMS <span class="btn-arrow" aria-hidden="true">→</span>
 *
 * Labels without a trailing arrow, and non-string children, pass through
 * unchanged. The arrow is hidden from screen readers (it was read aloud as
 * "right arrow" before).
 */
export default function ArrowLabel({ children }) {
  if (typeof children !== 'string') return children ?? null;
  const m = children.match(/^(.*\S)\s*→\s*$/);
  if (!m) return children;
  return (
    <>
      {m[1]} <span className="btn-arrow" aria-hidden="true">→</span>
    </>
  );
}
