import { notFound } from 'next/navigation';
import blogsData from '../../../public/data/blog.json';
import meta from '../../../public/data/metadata.json';

// ── Blog Component Imports ───────────────────────────────
import Apr01 from '@/components/blogs/Apr2026/Apr01';
import Apr02 from '@/components/blogs/Apr2026/Apr02';
import Apr03 from '@/components/blogs/Apr2026/Apr03';
import Apr04 from '@/components/blogs/Apr2026/Apr04';
import Apr05 from '@/components/blogs/Apr2026/Apr05';
// Add new blog component imports here as you publish more blogs

// ── Component Map (componentKey → Component) ────────────
const BlogComponents = {
  Apr01,
  Apr02,
  Apr03,
  Apr04,
  Apr05,
  // Add new entries here matching the componentKey in blog.json
};

// ── Category → accent colour ─────────────────────────────
const CAT_COLOR = {
  'Bulk SMS':        '#1B48E0',
  'WhatsApp API':    '#25d366',
  'RCS Messaging':   '#7c3aed',
  'Voice Call':      '#f59e0b',
  'AI & Automation': '#00c8f8',
};

// ── Date formatter ───────────────────────────────────────
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// ── Static Params for SSG ────────────────────────────────
export async function generateStaticParams() {
  return blogsData.map((post) => ({ slug: post.slug }));
}

// ── Per-Post SEO Metadata ────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = meta.find((post) => post.slug === slug);
  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.description,
    metadataBase: new URL('https://www.ojiva.ai'),
    keywords: blog.keywords,
    authors: [{ name: 'Ojiva AI', url: 'https://www.ojiva.ai/blogs/' }],
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://www.ojiva.ai/blogs/${blog.slug}/`,
      siteName: 'Ojiva AI',
      type: 'article',
      publishedTime: blog.date,
      modifiedTime: blog.date,
      authors: ['https://www.ojiva.ai'],
      section: blog.category || 'Business Communication',
      tags: blog.keywords ? blog.keywords.split(',').map(k => k.trim()) : [],
      locale: 'en_IN',
      images: [{
        url: blog.image
          ? (blog.image.startsWith('http') ? blog.image : `https://www.ojiva.ai${blog.image}`)
          : 'https://www.ojiva.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: blog.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [blog.image
        ? (blog.image.startsWith('http') ? blog.image : `https://www.ojiva.ai${blog.image}`)
        : 'https://www.ojiva.ai/og-image.jpg'],
      creator: '@OjivaAi',
      site: '@OjivaAi',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: { canonical: `https://www.ojiva.ai/blogs/${blog.slug}/` },
  };
}

// ── BlogPosting JSON-LD builder ──────────────────────────
function blogPostingSchema(blog) {
  const absImage = blog.image
    ? (blog.image.startsWith('http') ? blog.image : `https://www.ojiva.ai${blog.image}`)
    : 'https://www.ojiva.ai/og-image.jpg';
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.description,
    image: absImage,
    url: `https://www.ojiva.ai/blogs/${blog.slug}/`,
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      '@type': 'Organization',
      name: 'Ojiva AI',
      url: 'https://www.ojiva.ai/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ojiva AI',
      url: 'https://www.ojiva.ai/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ojiva.ai/OJIVA%20AI%20MAIN%20LOGO%20WHITE%20PNG.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.ojiva.ai/blogs/${blog.slug}/`,
    },
    keywords: blog.keywords || '',
    articleSection: blog.category || 'Business Communication',
    inLanguage: 'en-IN',
  };
}

// ── BreadcrumbList JSON-LD builder ───────────────────────
function blogBreadcrumbSchema(blog) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ojiva.ai/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.ojiva.ai/blogs/' },
      { '@type': 'ListItem', position: 3, name: blog.title, item: `https://www.ojiva.ai/blogs/${blog.slug}/` },
    ],
  };
}

// ── Page Component ───────────────────────────────────────
export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = blogsData.find((post) => post.slug === slug);

  if (!blog) return notFound();

  const BlogComponent = BlogComponents[blog.componentKey];

  if (!BlogComponent) {
    return (
      <div className="container py-5 text-center">
        <h2 className="fw-bold">Blog content coming soon</h2>
        <p className="text-muted">We couldn&apos;t find the requested blog content. Please check back later.</p>
      </div>
    );
  }

  const catColor = CAT_COLOR[blog.category] || '#1B48E0';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema(blog)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumbSchema(blog)) }} />
      {/* ── Dark Hero ─────────────────────────────────── */}
      <section className="blog-post-hero" aria-label="Blog post header">
        {/* Dot grid */}
        <div className="blog-post-hero-grid" aria-hidden="true" />
        {/* Radial glow — category colour */}
        <div
          className="blog-post-hero-glow"
          aria-hidden="true"
          style={{
            background: `radial-gradient(circle, ${catColor}30 0%, transparent 65%)`,
          }}
        />

        <div className="container blog-post-hero-inner">
          {/* Category badge */}
          <div
            className="blog-post-cat-badge"
            style={{ color: catColor, borderColor: `${catColor}55` }}
          >
            <span className="blog-post-cat-dot" style={{ background: catColor }} />
            {blog.category}
          </div>

          {/* Title */}
          <h1 className="blog-post-hero-title">{blog.title}</h1>

          {/* Description */}
          <p className="blog-post-hero-desc">{blog.description}</p>

          {/* Meta */}
          <div className="blog-post-hero-meta">
            <span>{formatDate(blog.date)}</span>
            <span className="blog-post-meta-sep">·</span>
            <span>5 min read</span>
            <span className="blog-post-meta-sep">·</span>
            <span>Ojiva AI</span>
          </div>
        </div>
      </section>

      {/* ── Blog Content ──────────────────────────────── */}
      <BlogComponent />
    </>
  );
}
