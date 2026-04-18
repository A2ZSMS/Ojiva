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
    keywords: blog.keywords,
    authors: [{ name: 'Ojiva AI', url: 'https://ojiva.ai/blogs' }],
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://ojiva.ai/blogs/${blog.slug}`,
      siteName: 'Ojiva AI',
      type: 'article',
      images: [{ url: blog.image || '/og-image.jpg', width: 1200, height: 630, alt: blog.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [blog.image || '/og-image.jpg'],
      creator: '@OjivaAi',
    },
    robots: { index: true, follow: true },
    alternates: { canonical: `https://ojiva.ai/blogs/${blog.slug}` },
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

  return <BlogComponent />;
}
