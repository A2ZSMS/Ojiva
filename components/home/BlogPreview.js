import Link from 'next/link';
import { srcSetFor } from '@/lib/imageSrcSet';
import blogsData from '@/public/data/blog.json';
import { BLOG_CATEGORY_INK, DEFAULT_CATEGORY_INK } from '@/lib/blogCategories';

const formatDate = (str) =>
  new Date(str).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

const inkFor = (category) => BLOG_CATEGORY_INK[category] || DEFAULT_CATEGORY_INK;

const CalendarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

// Server component: the 5 newest posts are rendered into the homepage HTML at
// build time. It used to fetch /data/blog.json in the browser, so the HTML
// Google received linked to 0 posts (SEO audit, Oct 2026).
//
// Layout (Oct 2026): blog thumbnails already carry their own headline text, so
// nothing is printed over an image and images are shown whole at their native
// 16:9. Featured post on the left; the next four as compact list cards on the
// right, stretched to the featured card's height.
export default function BlogPreview() {
  const posts = blogsData.slice(0, 5);
  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;
  const featuredInk = inkFor(featured.category);

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

        <div className="hp-blog-layout">

          {/* ── Featured ── */}
          <Link href={`/blogs/${featured.slug}`} className="hp-blog-featured text-decoration-none">
            <div className="hp-blog-featured-img">
              <img
                src={featured.image || '/og-image.jpg'}
                srcSet={srcSetFor(featured.image)}
                sizes="(max-width: 991px) 100vw, 620px"
                alt={featured.title}
                width={1672}
                height={941}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="hp-blog-featured-body">
              <div className="hp-blog-meta">
                <span className="hp-blog-badge">Featured</span>
                <span className="hp-blog-cat" style={{ color: featuredInk }}>{featured.category}</span>
                <span className="hp-blog-date"><CalendarIcon />{formatDate(featured.date)}</span>
              </div>
              <h3 className="hp-blog-featured-title">{featured.title}</h3>
              <p className="hp-blog-featured-excerpt">{featured.description}</p>
              <span className="hp-blog-read-more">
                Read article
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </div>
          </Link>

          {/* ── Recent posts ── */}
          <ul className="hp-blog-list">
            {rest.map((post) => (
              <li key={post.id}>
                <Link href={`/blogs/${post.slug}`} className="hp-blog-item text-decoration-none">
                  <span className="hp-blog-item-img">
                    <img
                      src={post.image || '/og-image.jpg'}
                      srcSet={srcSetFor(post.image)}
                      sizes="(max-width: 575px) 128px, 200px"
                      alt=""
                      width={1672}
                      height={941}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="hp-blog-item-body">
                    <span className="hp-blog-cat" style={{ color: inkFor(post.category) }}>{post.category}</span>
                    <span className="hp-blog-item-title">{post.title}</span>
                    <span className="hp-blog-date"><CalendarIcon />{formatDate(post.date)}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

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
