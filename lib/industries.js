/**
 * Industry registry — re-exports per-industry data files.
 *
 * Each industry now lives in its own folder at `components/solutions/[slug]/`
 * with its own `data.js`. This file aggregates them so the navbar mega-menu,
 * /solutions hub, related-services strip and sitemap config can read a single
 * `INDUSTRIES` array without caring how content is split.
 *
 * To add a new industry:
 *   1. Create `components/solutions/<new-slug>/data.js` (mirror an existing one)
 *   2. Create `components/solutions/<new-slug>/<NewIndustry>Page.js` wrapper
 *   3. Create `app/solutions/<new-slug>/page.js` static route
 *   4. Append the import + export here
 *   5. Add the slug to `INDUSTRY_SLUGS` in `next-sitemap.config.js`
 */

import bankingFinance     from '@/components/solutions/banking-finance/data';
import ecommerceRetail    from '@/components/solutions/ecommerce-retail/data';
import healthcare         from '@/components/solutions/healthcare/data';
import education          from '@/components/solutions/education/data';
import realEstate         from '@/components/solutions/real-estate/data';
import travelHospitality  from '@/components/solutions/travel-hospitality/data';
import logisticsDelivery  from '@/components/solutions/logistics-delivery/data';
import insurance          from '@/components/solutions/insurance/data';

// Industry order shown in the navbar mega-menu and /solutions hub grid.
// Edit this array to reorder; the rest of the system follows automatically.
export const INDUSTRIES = [
  bankingFinance,
  ecommerceRetail,
  healthcare,
  education,
  realEstate,
  travelHospitality,
  logisticsDelivery,
  insurance,
];

// Helper getters
export function getIndustry(slug) {
  return INDUSTRIES.find(i => i.slug === slug) || null;
}

export function getAllIndustrySlugs() {
  return INDUSTRIES.map(i => i.slug);
}

// Map a channelFit entry to a service URL so the Channel Fit Matrix can link out
export const CHANNEL_TO_URL = {
  sms:      '/sms',
  whatsapp: '/whatsapp',
  rcs:      '/rcs',
  voice:    '/voice',
};
