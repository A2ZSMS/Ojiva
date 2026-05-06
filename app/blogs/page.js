import { buildMetadata, breadcrumbSchema } from '@/lib/metadata';
import blogsData from '../../public/data/blog.json';
import BlogList from './client';

export const metadata = buildMetadata({
  title: 'Blog — Bulk SMS, WhatsApp API & RCS Business Insights India',
  description:
    'Expert insights on Bulk SMS, WhatsApp Business API, RCS & AI Voice for Indian businesses. Tips, trends & best practices from Ojiva AI.',
  path: '/blogs',
  keywords: [
    'Ojiva AI blog', 'bulk SMS tips India', 'WhatsApp API blog', 'RCS messaging insights',
    'AI voice call automation blog', 'business messaging trends India', 'SMS marketing tips',
    'WhatsApp marketing blog India', 'enterprise communication insights',
  ],
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://www.ojiva.ai/' },
  { name: 'Blog', url: 'https://www.ojiva.ai/blogs/' },
]);

// Blog collection schema
const blogCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ojiva AI Blog',
  description: 'Expert insights on Bulk SMS, WhatsApp Business API, RCS & AI Voice for Indian businesses.',
  url: 'https://www.ojiva.ai/blogs/',
  publisher: {
    '@type': 'Organization',
    name: 'Ojiva AI',
    url: 'https://www.ojiva.ai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.ojiva.ai/OJIVA%20AI%20MAIN%20LOGO%20WHITE%20PNG.png',
    },
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: blogsData.map((post, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://www.ojiva.ai/blogs/${post.slug}/`,
      name: post.title,
    })),
  },
};

export default function BlogsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }} />
      <BlogList />
    </>
  );
}
