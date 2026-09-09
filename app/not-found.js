import Image from 'next/image';
import Link from 'next/link';
import { LuHouse, LuMessageCircle } from 'react-icons/lu';
import { buildMetadata } from '@/lib/metadata';
import blogs from '@/public/data/blog.json';
import NotFoundFinder from './not-found-finder';
import styles from './not-found.module.css';

export const metadata = buildMetadata({
  title: '404 — Page Not Found',
  description: 'That page does not exist. Search Ojiva AI, jump to a suggested page, or talk to our team.',
  path: '/404',
});

/**
 * Human-labelled index of every static route. Blogs are appended from
 * blog.json at build time, so the finder always knows about new posts
 * without anyone editing this file.
 *
 * Keep hrefs with a trailing slash — that is how the site links everywhere.
 */
const STATIC_ROUTES = [
  { href: '/',                          title: 'Home',                              group: 'Pages' },
  { href: '/platform/',                 title: 'Platform overview',                 group: 'Pages' },
  { href: '/pricing/',                  title: 'Pricing',                           group: 'Pages' },
  { href: '/about/',                    title: 'About Ojiva AI',                    group: 'Pages' },
  { href: '/contact/',                  title: 'Contact us',                        group: 'Pages' },
  { href: '/book-demo/',                title: 'Book a demo',                       group: 'Pages' },
  { href: '/support/',                  title: 'Support & tickets',                 group: 'Pages' },
  { href: '/blogs/',                    title: 'Blog — all articles',               group: 'Pages' },

  { href: '/whatsapp/',                 title: 'WhatsApp Business API',             group: 'Services' },
  { href: '/whatsapp-chatbot/',         title: 'WhatsApp Chatbot',                  group: 'Services' },
  { href: '/sms/',                      title: 'Bulk SMS',                          group: 'Services' },
  { href: '/rcs/',                      title: 'RCS Messaging',                     group: 'Services' },
  { href: '/otp/',                      title: 'OTP & verification',                group: 'Services' },
  { href: '/voice/',                    title: 'Voice messaging & IVR',             group: 'Services' },
  { href: '/whatsapp-api-service/',     title: 'WhatsApp API — demo & pricing',     group: 'Services' },
  { href: '/bulk-sms/',                 title: 'Bulk SMS — demo & pricing',         group: 'Services' },
  { href: '/rcs-messaging/',            title: 'RCS Messaging — demo & pricing',    group: 'Services' },
  { href: '/website-development/',      title: 'Website design & development',      group: 'Services' },

  { href: '/solutions/',                title: 'Industry solutions',                group: 'Solutions' },
  { href: '/solutions/ecommerce-retail/',   title: 'E-commerce & retail',           group: 'Solutions' },
  { href: '/solutions/banking-finance/',    title: 'Banking & finance',             group: 'Solutions' },
  { href: '/solutions/healthcare/',         title: 'Healthcare',                    group: 'Solutions' },
  { href: '/solutions/education/',          title: 'Education & EdTech',            group: 'Solutions' },
  { href: '/solutions/travel-hospitality/', title: 'Travel & hospitality',          group: 'Solutions' },
  { href: '/solutions/real-estate/',        title: 'Real estate',                   group: 'Solutions' },
  { href: '/solutions/logistics-delivery/', title: 'Logistics & delivery',          group: 'Solutions' },
  { href: '/solutions/insurance/',          title: 'Insurance',                     group: 'Solutions' },

  { href: '/privacy/',                  title: 'Privacy policy',                    group: 'Legal' },
  { href: '/terms/',                    title: 'Terms of service',                  group: 'Legal' },
];

const BLOG_ROUTES = blogs.map((b) => ({
  href:  `/blogs/${b.slug}/`,
  title: b.title,
  group: 'Blog',
  tags:  b.category || '',
}));

const INDEX = [...STATIC_ROUTES, ...BLOG_ROUTES];

const popular = [
  { href: '/whatsapp-api-service/', label: 'WhatsApp API',        copy: 'Automate replies and follow-ups at scale.' },
  { href: '/bulk-sms/',             label: 'Bulk SMS',            copy: 'Promotional, transactional and OTP messages.' },
  { href: '/rcs-messaging/',        label: 'RCS messaging',       copy: 'Rich, branded mobile conversations.' },
  { href: '/blogs/',                label: 'Blog',                copy: 'Guides on WhatsApp, SMS, RCS and DLT.' },
];

export default function NotFound() {
  return (
    <section className={styles.page} aria-labelledby="not-found-title">
      <div className={styles.orbit} aria-hidden="true"><span /><span /><span /></div>

      <div className={styles.content}>
        <Link href="/" className={styles.logo} aria-label="Ojiva AI home">
          <Image src="/ojiva-logo-white.webp" alt="Ojiva AI" width={104} height={42} priority />
        </Link>

        <div className={styles.code} aria-hidden="true"><span>4</span><i>0</i><span>4</span></div>
        <p className={styles.eyebrow}>PAGE NOT FOUND</p>
        <h1 id="not-found-title">That page isn’t here —<br /><em>but the right one probably is.</em></h1>

        {/* Client-side: reads the broken URL, suggests the closest real pages, live search, GA4 ping */}
        <NotFoundFinder index={INDEX} />

        <div className={styles.actions}>
          <Link href="/" className={styles.primary}><LuHouse aria-hidden="true" /> Back to home</Link>
          <Link href="/contact/" className={styles.secondary}><LuMessageCircle aria-hidden="true" /> Talk to our team</Link>
        </div>

        <div className={styles.destinations}>
          <div className={styles.destinationHeading}>
            <span>OR BROWSE</span>
            <small>Most-visited Ojiva AI pages</small>
          </div>
          <div className={styles.destinationGrid}>
            {popular.map((item) => (
              <Link href={item.href} key={item.href} className={styles.destination}>
                <strong>{item.label}<span aria-hidden="true">→</span></strong>
                <span>{item.copy}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
