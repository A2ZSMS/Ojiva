import Link from 'next/link';

/**
 * Slim strip linking a national service page to its Bengaluru geo page.
 * Server component — pure HTML, no client JS.
 */
export default function BangaloreBanner({ href = '/bangalore/', label = 'this service' }) {
  return (
    <section aria-label="Bangalore service link" className="py-4">
      <div className="container">
        <div
          className="d-flex flex-wrap align-items-center justify-content-center gap-2 text-center rounded-4 px-4 py-3"
          style={{ background: 'rgba(27, 72, 224, 0.06)', border: '1px solid rgba(27, 72, 224, 0.15)' }}
        >
          <i className="bi bi-geo-alt-fill" style={{ color: 'var(--primary)' }} aria-hidden="true" />
          <span className="small">
            Based in Bengaluru?{' '}
            <Link href={href} className="fw-semibold">
              See {label} for Bangalore businesses →
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
