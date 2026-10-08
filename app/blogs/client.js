'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { srcSetFor } from '@/lib/imageSrcSet';

/* ── Constants ─────────────────────────────────────────── */
const CATEGORIES = ['All', 'Bulk SMS', 'WhatsApp API', 'RCS Messaging', 'Voice Call', 'AI & Automation'];

// Page 1 shows 10 posts (1 featured hero + 9-card grid = 3×3).
// Every following page shows 9 posts (3×3 grid, no featured), so the
// grid stays clean without a lonely orphan card on the last row.
const POSTS_PAGE_ONE = 10;
const POSTS_PER_PAGE = 9;

const CAT_STYLE = {
  'Bulk SMS':        { color: '#1d4ed8', bg: 'rgba(29,78,216,0.10)',   dot: '#3b82f6', border: 'rgba(29,78,216,0.20)' },
  'WhatsApp API':    { color: '#15803d', bg: 'rgba(22,163,74,0.10)',   dot: '#22c55e', border: 'rgba(22,163,74,0.20)' },
  'RCS Messaging':   { color: '#6d28d9', bg: 'rgba(124,58,237,0.10)',  dot: '#a78bfa', border: 'rgba(124,58,237,0.20)' },
  'Voice Call':      { color: '#b45309', bg: 'rgba(245,158,11,0.10)',  dot: '#f59e0b', border: 'rgba(245,158,11,0.20)' },
  'AI & Automation': { color: '#0e7490', bg: 'rgba(0,200,248,0.10)',   dot: '#22d3ee', border: 'rgba(0,200,248,0.20)' },
};
const DEFAULT_STYLE = { color: '#4f46e5', bg: 'rgba(79,70,229,0.10)', dot: '#818cf8', border: 'rgba(79,70,229,0.20)' };

/* ── Utilities ─────────────────────────────────────────── */
const getCatStyle = (cat) => CAT_STYLE[cat] ?? DEFAULT_STYLE;
// timeZone UTC: dates are plain YYYY-MM-DD, so render that exact day everywhere.
// Without it a visitor west of UTC sees the previous day, which no longer matches
// the pre-rendered HTML and triggers a hydration error.
const formatDate  = (str) => new Date(str).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const truncate    = (str, n) => str.length > n ? str.slice(0, n) + '…' : str;

/* ── Category Badge ─────────────────────────────────────── */
function CatBadge({ category }) {
  const cs = getCatStyle(category);
  return (
    <span
      className="blg-cat-badge"
      style={{ background: cs.bg, color: cs.color, borderColor: cs.border }}
    >
      <span className="blg-cat-badge__dot" style={{ background: cs.dot }} />
      {category}
    </span>
  );
}

/* ── Featured Card (first post, page 1, "All") ─────────── */
function FeaturedCard({ blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="blg-featured-link">
      <article className="blg-featured">
        <div className="blg-featured__img-col">
          <img
            src={blog.image || '/og-image.jpg'}
            srcSet={srcSetFor(blog.image)}
            sizes="(max-width: 991px) 100vw, 560px"
            alt={blog.title}
            className="blg-featured__img"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="blg-featured__body">
          <div className="blg-featured__top">
            <span className="blg-featured__star-badge">★ Featured</span>
            <CatBadge category={blog.category} />
          </div>
          <h2 className="blg-featured__title">{blog.title}</h2>
          <p className="blg-featured__excerpt">{truncate(blog.description, 190)}</p>
          <div className="blg-featured__footer">
            <span className="blg-featured__date">{formatDate(blog.date)}</span>
            <span className="blg-featured__cta">
              Read Article
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* ── Regular Blog Card ──────────────────────────────────── */
function BlogCard({ blog }) {
  const cs = getCatStyle(blog.category);
  return (
    <Link href={`/blogs/${blog.slug}`} className="text-decoration-none d-block h-100">
      <article className="blg-card h-100">
        <div className="blg-card__img-wrap">
          <img
            src={blog.image || '/og-image.jpg'}
            srcSet={srcSetFor(blog.image)}
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 400px"
            alt={blog.title}
            className="blg-card__img"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="blg-card__body">
          <div className="blg-card__meta">
            <CatBadge category={blog.category} />
            <span className="blg-card__date">{formatDate(blog.date)}</span>
          </div>
          <h3 className="blg-card__title">{blog.title}</h3>
          <p className="blg-card__excerpt">{truncate(blog.description, 120)}</p>
          <div className="blg-card__footer">
            <span className="blg-card__cta" style={{ color: cs.color }}>
              Read Article
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* ── Skeleton Card ──────────────────────────────────────── */
function SkeletonCard() {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="blg-card">
        <div className="blg-skel" style={{ height: 220 }} />
        <div className="blg-card__body">
          <div className="blg-skel blg-skel--pill mb-3" />
          <div className="blg-skel blg-skel--line mb-2" />
          <div className="blg-skel blg-skel--short mb-4" />
          <div className="blg-skel blg-skel--line" />
        </div>
      </div>
    </div>
  );
}

/* ── Pagination ─────────────────────────────────────────── */
function Pagination({ current, total, onChange }) {
  // Hooks must run on every render, so the early return comes after useMemo
  // (it used to come first, which breaks when a category has a single page).
  const pages = useMemo(() => {
    const r = [];
    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || Math.abs(i - current) <= 1) r.push(i);
      else if (r[r.length - 1] !== '…') r.push('…');
    }
    return r;
  }, [current, total]);

  if (total <= 1) return null;

  return (
    <div className="blg-pagination" role="navigation" aria-label="Blog pagination">
      <button
        className="blg-pg-nav"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        aria-label="Go to previous page"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Previous
      </button>

      <div className="blg-pg-nums">
        {pages.map((p, i) =>
          p === '…' ? (
            <span key={`e${i}`} className="blg-pg-ellipsis">…</span>
          ) : (
            <button
              key={p}
              className={`blg-pg-num${p === current ? ' is-active' : ''}`}
              onClick={() => onChange(p)}
              aria-label={`Go to page ${p}`}
              aria-current={p === current ? 'page' : undefined}
            >
              {p}
            </button>
          )
        )}
      </div>

      <button
        className="blg-pg-nav"
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        aria-label="Go to next page"
      >
        Next
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
    </div>
  );
}

/* ── All articles by topic (crawlable index of every post) ── */
function ArticleIndex({ blogs }) {
  const groups = useMemo(() => {
    const order = CATEGORIES.filter(c => c !== 'All');
    const map = new Map(order.map(c => [c, []]));
    for (const b of blogs) {
      if (!map.has(b.category)) map.set(b.category, []);
      map.get(b.category).push(b);
    }
    return [...map].filter(([, posts]) => posts.length > 0);
  }, [blogs]);
  if (!groups.length) return null;
  return (
    <nav className="mt-5 pt-5 border-top" aria-labelledby="blog-index-h2">
      <h2 id="blog-index-h2" className="h4 fw-bold mb-4">All articles by topic</h2>
      <div className="row g-4">
        {groups.map(([cat, posts]) => {
          const cs = getCatStyle(cat);
          return (
            <div className="col-md-6 col-lg-4" key={cat}>
              <h3 className="h6 fw-bold mb-3" style={{ color: cs.color }}>
                {cat} <span className="text-muted fw-normal">({posts.length})</span>
              </h3>
              <ul className="list-unstyled mb-0">
                {posts.map(b => (
                  <li key={b.slug} className="mb-2" style={{ fontSize: '0.92rem', lineHeight: 1.4 }}>
                    <Link href={`/blogs/${b.slug}`} className="text-reset">{b.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

/* ── Main Export ────────────────────────────────────────── */
// initialBlogs comes from blog.json at build time (see app/blogs/page.js), so
// the post cards are real <a> links in the static HTML. Do NOT switch back to
// a client-side fetch: the list then only exists after JavaScript runs, and
// Google saw 0 links from /blogs/ to any post (SEO audit, Oct 2026).
export default function BlogList({ initialBlogs = [] }) {
  const blogsData = initialBlogs;
  const loading   = false;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage]           = useState(1);

  const filteredBlogs = useMemo(() =>
    selectedCategory === 'All' ? blogsData : blogsData.filter(b => b.category === selectedCategory),
    [blogsData, selectedCategory]
  );

  // Page 1 shows POSTS_PAGE_ONE (10), subsequent pages POSTS_PER_PAGE (9)
  const totalPages = useMemo(() => {
    if (filteredBlogs.length <= POSTS_PAGE_ONE) return 1;
    return 1 + Math.ceil((filteredBlogs.length - POSTS_PAGE_ONE) / POSTS_PER_PAGE);
  }, [filteredBlogs.length]);

  const pageStart = useMemo(() => (
    currentPage === 1 ? 0 : POSTS_PAGE_ONE + (currentPage - 2) * POSTS_PER_PAGE
  ), [currentPage]);
  const pageSize = currentPage === 1 ? POSTS_PAGE_ONE : POSTS_PER_PAGE;

  const currentBlogs = useMemo(() =>
    filteredBlogs.slice(pageStart, pageStart + pageSize),
    [filteredBlogs, pageStart, pageSize]
  );

  const handleCategory = useCallback((cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  }, []);

  const handlePage = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /* Featured post = first post when on page 1 showing "All" */
  const isFeaturedMode = selectedCategory === 'All' && currentPage === 1 && !loading;
  const featuredPost   = isFeaturedMode && currentBlogs.length > 0 ? currentBlogs[0] : null;
  const gridPosts      = featuredPost ? currentBlogs.slice(1) : currentBlogs;

  const from = pageStart + 1;
  const to   = Math.min(pageStart + pageSize, filteredBlogs.length);

  return (
    <>
      {/* ══ Hero ══════════════════════════════════════════ */}
      <section className="page-hero blog-hero" aria-labelledby="blog-listing-h1">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: 780 }}>

            {/* Badge */}
            <span className="blg-hero-badge">
              <span className="blg-hero-badge__dot" />
              Insights &amp; Guides
            </span>

            {/* Heading */}
            <h1 id="blog-listing-h1" className="page-hero-title">
              Bulk SMS, WhatsApp &amp; RCS{' '}
              <span className="text-gradient-blue">Insights</span>
            </h1>

            {/* Subtitle */}
            <p className="page-hero-subtitle mx-auto">
              Expert articles on Bulk SMS, WhatsApp Business API, RCS Messaging, and AI Voice Call
              automation — to help your business communicate smarter.
            </p>

            {/* Category chips */}
            <div className="blg-chip-bar" role="tablist" aria-label="Filter articles by category">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  onClick={() => handleCategory(cat)}
                  className={`blg-chip${selectedCategory === cat ? ' is-active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══ Content ═══════════════════════════════════════ */}
      <section className="blg-content-section">
        <div className="container">

          {/* Results bar */}
          {!loading && filteredBlogs.length > 0 && (
            <div className="blg-results-bar">
              <p className="blg-results-count mb-0">
                <strong>{filteredBlogs.length}</strong> article{filteredBlogs.length !== 1 ? 's' : ''}
                {selectedCategory !== 'All' && (
                  <> in <span className="blg-results-cat">{selectedCategory}</span></>
                )}
              </p>
              {totalPages > 1 && (
                <p className="blg-results-pager mb-0">
                  Showing {from}–{to} of {filteredBlogs.length}
                </p>
              )}
            </div>
          )}

          {/* Featured post */}
          {featuredPost && <FeaturedCard blog={featuredPost} />}

          {/* Grid */}
          <div className="row g-4">
            {loading
              ? Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)
              : gridPosts.length > 0
                ? gridPosts.map(blog => (
                    <div className="col-lg-4 col-md-6" key={blog.id}>
                      <BlogCard blog={blog} />
                    </div>
                  ))
                : !featuredPost && (
                    <div className="col-12">
                      <div className="blg-empty">
                        <div className="blg-empty__icon">📭</div>
                        <p className="blg-empty__msg">No articles found in this category yet.</p>
                        <button className="blg-empty__btn" onClick={() => handleCategory('All')}>
                          View all articles
                        </button>
                      </div>
                    </div>
                  )}
          </div>

          {/* Pagination */}
          <Pagination current={currentPage} total={totalPages} onChange={handlePage} />

          {/* All articles by topic — a plain, always-rendered link to every post.
              The grid above paginates with buttons (not links), so without this
              index only the first 10 posts would be reachable from /blogs/. */}
          <ArticleIndex blogs={blogsData} />

        </div>
      </section>
    </>
  );
}
