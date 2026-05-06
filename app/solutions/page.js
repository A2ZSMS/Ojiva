import SolutionsHub from '@/components/solutions/SolutionsHub';
import { INDUSTRIES } from '@/lib/industries';
import { buildMetadata, breadcrumbSchema } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Business Messaging Solutions India — SMS, WhatsApp & RCS',
  description:
    'Ojiva AI delivers industry-specific CPaaS solutions for Banking, Healthcare, E-commerce, Education, Logistics and more — using Bulk SMS, WhatsApp API, RCS & AI Voice.',
  path: '/solutions',
  keywords: [
    'CPaaS solutions India',
    'industry messaging solutions',
    'banking CPaaS India',
    'healthcare WhatsApp API',
    'e-commerce SMS solution',
    'education WhatsApp messaging',
    'real estate CPaaS',
    'travel hospitality SMS',
    'logistics WhatsApp API',
    'insurance messaging solutions',
    'Ojiva AI solutions',
    'industry communication platform India',
  ],
});

const breadcrumb = breadcrumbSchema([
  { name: 'Home',      url: 'https://www.ojiva.ai/' },
  { name: 'Solutions', url: 'https://www.ojiva.ai/solutions/' },
]);

// ItemList JSON-LD so search engines see the full set of industry pages
const itemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Industry Solutions',
  itemListElement: INDUSTRIES.map((ind, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `https://www.ojiva.ai/solutions/${ind.slug}/`,
    name: ind.name,
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <SolutionsHub />
    </>
  );
}
