'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CAT_COLOR = {
  'Bulk SMS':        '#3b82f6',
  'WhatsApp API':    '#22c55e',
  'RCS Messaging':   '#f97316',
  'Voice Call':      '#a78bfa',
  'AI & Automation': '#22d3ee',
};

const formatDate = (str) =>
  new Date(str).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

export default function BlogPreview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/data/blog.json')
      .then(r => r.json())
      .then(data => setPosts(data.slice(0, 5)))
      .catch(() => {});
  }, []);

  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;
  const color = CAT_COLOR[featured.category] || '#3b82f6';

  return (
    <section className="section-padding hp-sec-blog" aria-labelledby="blog-preview-heading">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <span className="section-tag">From Our Blog</span>
          <h2 id="blog-preview-heading" className="section-title mt-2">
            Insights &amp; Guides for{' '}
            <span className="text-gradient-blue">Smarter Communication</span>
          </h2>
          <p className="section-subtitle mx-auto" style={{ maxWidth: 580 }}>
            Expert articles on Bulk SMS, WhatsApp API, RCS and AI Voice automation
            to help your business grow.
          </p>
        </div>

        {/* Layout */}
        <div className="hp-blog-layout">

          {/* ── Featured ── */}
          <Link href={`/blogs/${featured.slug}`} className="hp-blog-featured text-decoration-none">
            <div className="hp-blog-featured-img">
              <img
                src={featured.image || '/og-image.jpg'}
                alt={featured.title}
                loading="eager"
                decoding="async"
              />
              <span className="hp-blog-badge">Featured</span>
              <span
                className="hp-blog-cat-pill"
                style={{ background: `${color}22`, color, borderColor: `${color}44` }}
              >
                {featured.category}
              </span>
            </div>
            <div className="hp-blog-featured-body">
              <span className="hp-blog-meta">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}>
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {formatDate(featured.date)}
              </span>
              <h3 className="hp-blog-featured-title">{featured.title}</h3>
              <p className="hp-blog-featured-excerpt">
                {featured.description.length > 140
                  ? featured.description.slice(0, 140) + '…'
                  : featured.description}
              </p>
              <span className="hp-blog-read-more" style={{ color }}>
                Read More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft:5 }}>
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </div>
          </Link>

          {/* ── Thumbnails grid ── */}
          <div className="hp-blog-grid">
            {rest.map((post) => {
              const c = CAT_COLOR[post.category] || '#3b82f6';
              return (
                <Link key={post.id} href={`/blogs/${post.slug}`} className="hp-blog-thumb text-decoration-none">
                  <div className="hp-blog-thumb-img">
                    <img
                      src={post.image || '/og-image.jpg'}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="hp-blog-thumb-overlay">
                      <span
                        className="hp-blog-thumb-cat"
                        style={{ color: c }}
                      >
                        {post.category}
                      </span>
                      <p className="hp-blog-thumb-title">
                        {post.title.length > 60 ? post.title.slice(0, 60) + '…' : post.title}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>

        {/* View all */}
        <div className="text-center mt-5">
          <Link href="/blogs" className="hp-blog-view-all">
            View All Articles →
          </Link>
        </div>

      </div>
    </section>
  );
}
