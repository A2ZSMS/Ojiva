import Link from 'next/link';
import blogsData from '@/public/data/blog.json';

/**
 * Hub→spoke "Related guides" strip for service pages.
 *
 * Links each service pillar down to its supporting blog posts so the blog
 * cluster inherits authority from the money pages (and vice versa).
 * Server component — no client JS shipped.
 *
 * Usage:
 *   <RelatedGuides category="Bulk SMS" />            // newest 3 from category
 *   <RelatedGuides slugs={['a-slug', 'b-slug']} />   // explicit picks
 */
export default function RelatedGuides({ category, slugs, limit = 3, title = 'Related guides' }) {
  let posts = [];

  if (slugs?.length) {
    posts = slugs
      .map((s) => blogsData.find((p) => p.slug === s))
      .filter(Boolean);
  } else if (category) {
    posts = blogsData
      .filter((p) => p.category === category)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  posts = posts.slice(0, limit);
  if (!posts.length) return null;

  return (
    <section className="section-padding" aria-labelledby="related-guides-heading">
      <div className="container">
        <div className="text-center mb-5">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            From the blog
          </span>
          <h2 id="related-guides-heading" className="section-title mt-2">
            {title}
          </h2>
        </div>
        <div className="row g-4 justify-content-center">
          {posts.map((post) => (
            <div className="col-md-4" key={post.slug}>
              <Link href={`/blogs/${post.slug}/`} className="text-decoration-none d-block h-100">
                <article className="feature-card h-100">
                  <span className="badge rounded-pill text-bg-light mb-2">{post.category}</span>
                  <h3 className="h6 fw-semibold mb-2" style={{ color: 'var(--pro-black, #111)' }}>
                    {post.title}
                  </h3>
                  <p className="small text-muted mb-0" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {post.description}
                  </p>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
