import { notFound } from 'next/navigation';
import blogsData from '../../../public/data/blog.json';
import meta from '../../../public/data/metadata.json';

// ── JSON-driven blog infrastructure ──────────────────────
import BlogLayout from '@/components/blogs/BlogLayout';
import BlogRenderer from '@/components/blogs/BlogRenderer';

// ── JSON Blog Imports (one per slug in blog.json) ──
// To add a new blog: drop a JSON file into public/data/blogs/<slug>.json
// then add an import + BlogJson entry here.
import blog_rcs_vs_sms_key_differences_and_which_is_better_for_business from '../../../public/data/blogs/rcs-vs-sms-key-differences-and-which-is-better-for-business.json';
import blog_best_whatsapp_chatbot_service_provider_in_bangalore from '../../../public/data/blogs/best-whatsapp-chatbot-service-provider-in-bangalore.json';
import blog_best_rcs_messaging_service_provider_in_bangalore from '../../../public/data/blogs/best-rcs-messaging-service-provider-in-bangalore.json';
import blog_best_whatsapp_business_api_provider_in_india from '../../../public/data/blogs/best-whatsapp-business-api-provider-in-india.json';
import blog_whatsapp_business_api_for_real_estate from '../../../public/data/blogs/whatsapp-business-api-for-real-estate.json';
import blog_best_whatsapp_chatbot_for_business_in_india from '../../../public/data/blogs/best-whatsapp-chatbot-for-business-in-india.json';
import blog_rcs_marketing_automation_high_converting_campaigns from '../../../public/data/blogs/rcs-marketing-automation-high-converting-campaigns.json';
import blog_best_whatsapp_api_service_provider_in_bangalore from '../../../public/data/blogs/best-whatsapp-api-service-provider-in-bangalore.json';
import blog_best_whatsapp_business_cloud_api_service_provider_in_bangalore from '../../../public/data/blogs/best-whatsapp-business-cloud-api-service-provider-in-bangalore.json';
import blog_best_bulk_sms_service_provider_in_karnataka from '../../../public/data/blogs/best-bulk-sms-service-provider-in-karnataka.json';
import blog_best_rcs_message_service_provider_in_india from '../../../public/data/blogs/best-rcs-message-service-provider-in-india.json';
import blog_grow_business_with_rcs_india from '../../../public/data/blogs/grow-business-with-rcs-india.json';
import blog_whatsapp_api_message_templates_india from '../../../public/data/blogs/whatsapp-api-message-templates-india.json';
import blog_best_rcs_messaging_provider_karnataka from '../../../public/data/blogs/best-rcs-messaging-provider-karnataka.json';
import blog_best_whatsapp_bsp_india from '../../../public/data/blogs/best-whatsapp-bsp-india.json';
import blog_dlt_registration_bulk_sms_india from '../../../public/data/blogs/dlt-registration-bulk-sms-india.json';
import blog_whatsapp_business_app_vs_api from '../../../public/data/blogs/whatsapp-business-app-vs-api.json';
import blog_ai_voice_agent_vs_ivr from '../../../public/data/blogs/ai-voice-agent-vs-ivr.json';
import blog_what_is_rcs_messaging from '../../../public/data/blogs/what-is-rcs-messaging.json';
import blog_best_bulk_sms_providers_india from '../../../public/data/blogs/best-bulk-sms-providers-india.json';
import blog_whatsapp_business_api_pricing_india from '../../../public/data/blogs/whatsapp-business-api-pricing-india.json';
import blog_bulk_sms_in_india from '../../../public/data/blogs/bulk-sms-in-india.json';
import blog_rcs_messaging_provider_karnataka_guide from '../../../public/data/blogs/rcs-messaging-provider-karnataka-guide.json';
import blog_why_bulk_sms_most_powerful_marketing_channel_india_2026 from '../../../public/data/blogs/why-bulk-sms-most-powerful-marketing-channel-india-2026.json';
import blog_whatsapp_business_api_vs_regular_whatsapp_indian_businesses from '../../../public/data/blogs/whatsapp-business-api-vs-regular-whatsapp-indian-businesses.json';
import blog_rcs_messaging_future_business_communication_india from '../../../public/data/blogs/rcs-messaging-future-business-communication-india.json';
import blog_bulk_voice_call_ivr_automation_guide_india_2026 from '../../../public/data/blogs/bulk-voice-call-ivr-automation-guide-india-2026.json';
import blog_ai_powered_business_communication_automation_india_2026 from '../../../public/data/blogs/ai-powered-business-communication-automation-india-2026.json';

// slug → parsed JSON content. Every blog renders via BlogLayout + BlogRenderer.
const BlogJson = {
  'rcs-vs-sms-key-differences-and-which-is-better-for-business': blog_rcs_vs_sms_key_differences_and_which_is_better_for_business,
  'best-whatsapp-chatbot-service-provider-in-bangalore':         blog_best_whatsapp_chatbot_service_provider_in_bangalore,
  'best-rcs-messaging-service-provider-in-bangalore':            blog_best_rcs_messaging_service_provider_in_bangalore,
  'best-whatsapp-business-api-provider-in-india':                blog_best_whatsapp_business_api_provider_in_india,
  'whatsapp-business-api-for-real-estate':                       blog_whatsapp_business_api_for_real_estate,
  'best-whatsapp-chatbot-for-business-in-india':                 blog_best_whatsapp_chatbot_for_business_in_india,
  'rcs-marketing-automation-high-converting-campaigns':          blog_rcs_marketing_automation_high_converting_campaigns,
  'best-whatsapp-api-service-provider-in-bangalore':             blog_best_whatsapp_api_service_provider_in_bangalore,
  'best-whatsapp-business-cloud-api-service-provider-in-bangalore': blog_best_whatsapp_business_cloud_api_service_provider_in_bangalore,
  'best-bulk-sms-service-provider-in-karnataka':                 blog_best_bulk_sms_service_provider_in_karnataka,
  'best-rcs-message-service-provider-in-india':                  blog_best_rcs_message_service_provider_in_india,
  'grow-business-with-rcs-india':                                blog_grow_business_with_rcs_india,
  'whatsapp-api-message-templates-india':                        blog_whatsapp_api_message_templates_india,
  'best-rcs-messaging-provider-karnataka':                       blog_best_rcs_messaging_provider_karnataka,
  'best-whatsapp-bsp-india':                                     blog_best_whatsapp_bsp_india,
  'dlt-registration-bulk-sms-india':                             blog_dlt_registration_bulk_sms_india,
  'whatsapp-business-app-vs-api':                                blog_whatsapp_business_app_vs_api,
  'ai-voice-agent-vs-ivr':                                       blog_ai_voice_agent_vs_ivr,
  'what-is-rcs-messaging':                                       blog_what_is_rcs_messaging,
  'best-bulk-sms-providers-india':                               blog_best_bulk_sms_providers_india,
  'whatsapp-business-api-pricing-india':                         blog_whatsapp_business_api_pricing_india,
  'bulk-sms-in-india':                                           blog_bulk_sms_in_india,
  'rcs-messaging-provider-karnataka-guide':                      blog_rcs_messaging_provider_karnataka_guide,
  'why-bulk-sms-most-powerful-marketing-channel-india-2026':     blog_why_bulk_sms_most_powerful_marketing_channel_india_2026,
  'whatsapp-business-api-vs-regular-whatsapp-indian-businesses': blog_whatsapp_business_api_vs_regular_whatsapp_indian_businesses,
  'rcs-messaging-future-business-communication-india':           blog_rcs_messaging_future_business_communication_india,
  'bulk-voice-call-ivr-automation-guide-india-2026':             blog_bulk_voice_call_ivr_automation_guide_india_2026,
  'ai-powered-business-communication-automation-india-2026':     blog_ai_powered_business_communication_automation_india_2026,
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
        height: 1200,
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

  const jsonContent = BlogJson[blog.slug];

  if (!jsonContent) {
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
      <BlogLayout
        slug={blog.slug}
        title={blog.title}
        category={blog.category}
        toc={jsonContent.toc}
      >
        <BlogRenderer content={jsonContent} />
      </BlogLayout>
    </>
  );
}
