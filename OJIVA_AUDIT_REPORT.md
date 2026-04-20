# 🔍 Ojiva AI — Full Site Audit Report
**Date:** April 2026 | **Auditor:** Senior UI/SEO/Performance Specialist  
**Tech Stack:** Next.js 16 (Static Export) · React 19 · Bootstrap 5 + Tailwind 4 · Framer Motion · Inter Font

---

## 🚨 CRITICAL ISSUES (Fix These First)

### 1. `/about` Page — 404 Error
**File:** `components/layout/Navbar.js` line 10  
Navbar links to `/about` but **there is NO `app/about/page.js`**. Every visitor + Google crawler hits a 404. This destroys trust and SEO authority.

**Fix:** Create `app/about/page.js` immediately.

---

### 2. Hero Image Has Wrong `fetchPriority`
**File:** `components/home/Hero.js` line 104  
```jsx
// WRONG — this tells the browser to de-prioritize your LCP image
<img fetchPriority="low" ... />

// CORRECT — hero-bg.png IS your largest contentful paint
<img fetchPriority="high" ... />
```
This alone can drop your LCP score by 1–2 seconds on mobile.

---

### 3. `globals.css` is **281 KB** — Way Too Large
This is your single biggest speed killer. A CSS file for a marketing site should be under 40–50 KB. You have both Bootstrap (30 KB) AND Tailwind running simultaneously with full custom CSS on top.

**Fix:** See Speed section below.

---

### 4. Google Fonts Loaded Incorrectly (Render-Blocking)
**File:** `app/layout.js` lines 83–91  
You're using a `<link rel="preload" as="style">` + `<link rel="stylesheet">` for Google Fonts. This still blocks rendering on slow connections.

**Fix:** Use `next/font/google` — it's built into Next.js, self-hosts the font, adds `font-display: swap`, and eliminates the external request entirely:
```js
// app/layout.js
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], display: 'swap', weight: ['400','500','600','700','800','900'] });
// Apply to <html className={inter.className}>
```

---

## 🎨 UI & BRAND — COMPLETE FIX LIST

### Brand Colors (Your Design Tokens Are Correct — Consistency Is the Problem)

Your brand palette in `globals.css` is solid:
```
Primary Blue: #1B48E0  (--primary)
Accent Cyan:  #00c8f8  (--accent)
Logo Gradient: linear-gradient(90deg, #00c8f8 → #1B48E0)
```

**Problems found:**

| Issue | Location | Fix |
|---|---|---|
| Emoji icons used for service cards | `HomePage.js` services grid | Replace with `react-icons` SVG icons for sharpness & brand consistency |
| Section tags (🎯 ⚡ 🔗 🛡️) in MODULES data | `HomePage.js` lines 150–184 | Use `RiTargetLine`, `RiFlashlightLine`, `RiLink`, `RiShieldLine` from `react-icons/ri` |
| Two different logo files | Navbar uses `ojiva-logo-optimized.png`, Footer uses `OJIVA AI MAIN LOGO WHITE PNG.png` | Standardize — use one file for both, rename to `ojiva-logo.png` and `ojiva-logo-white.png` |
| Logo filename has spaces | `"OJIVA AI MAIN LOGO WHITE BACKGROUND.jpg"` in public/ | Rename to `ojiva-logo-white-bg.jpg` — spaces in filenames cause issues |
| Email in schema is Gmail | `ojiva.tech@gmail.com` in `metadata.js` | Use `info@ojiva.ai` or a domain email — Gmail looks unprofessional for enterprise |
| `section-tag` font size 0.72rem | `globals.css` line 725 | Bump to `0.78rem` — too small on mobile |
| Card borders use 7% opacity | `--dark-border: rgba(255,255,255,0.07)` | Use `rgba(255,255,255,0.10)` for better visibility on dark sections |
| Hero description opacity 65% | `globals.css` line 908 | Increase to 80% — text is hard to read on mobile |
| Service cards use emoji icons | `svc-clean-icon` in grid | Replace with proper SVG `react-icons` sized at 22px |
| No hover state color on `section-tag` | `globals.css` | Add `--primary-dark` on hover |

### Typography Improvements

```css
/* globals.css — increase base readability */

/* Hero description — too faint */
.hero-description {
  color: rgba(255,255,255,0.80);  /* was 0.65 */
  font-size: 1.05rem;              /* was 1rem */
}

/* Section subtitle — slightly larger */
.section-subtitle {
  font-size: 1.05rem;   /* was 1rem */
  color: #374151;       /* was var(--text-secondary) = #4b5563, slightly darker */
}

/* Section tag — slightly bigger */
.section-tag {
  font-size: 0.78rem;   /* was 0.72rem */
}

/* Card descriptions — improve contrast */
.svc-clean-desc,
.module-card-v3-desc,
.why-desc-v3,
.how-desc-v3 {
  color: #4b5563;       /* ensure consistent — some inherit muted */
  line-height: 1.7;
}
```

### Rich UI Improvements (Visual Uplift)

**1. Add gradient border glow to service cards:**
```css
.svc-clean-card {
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}
.svc-clean-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--logo-gradient);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: 1px;
}
.svc-clean-card:hover::before { opacity: 1; }
```

**2. Improve the stats counter section — make it more prominent:**
- Add animated number counters using `react-countup` (already installed!)
- Current stats: 10M+ msgs, 500+ businesses, 99.9% uptime — display these above the fold in the hero.

**3. Add a "Trusted by" logo marquee strip** — you have brand logos in `/public/images/brands/` but no marquee section on the homepage. This is a massive social proof gap.

**4. Announcement bar** — make it brand-gradient:
```css
.announce-bar {
  background: var(--logo-gradient);  /* was plain light blue */
  color: #fff;
}
.announce-dot { background: #fff; }
.announce-link { color: #fff; font-weight: 700; }
.announce-badge { background: rgba(255,255,255,0.2); color: #fff; }
```

**5. Section alternating backgrounds** — currently all white sections blend together. Add alternating `bg-section` to every other section so the page has visual rhythm.

**6. Mobile: hero-channel-cards grid** — 4 columns on mobile is too cramped:
```css
@media (max-width: 480px) {
  .hero-channel-cards { grid-template-columns: repeat(2, 1fr); }
}
```

---

## ⚡ SPEED — 100/100 Lighthouse Action Plan

### Issue 1: Bootstrap + Tailwind = Double CSS (Biggest Win)
You're importing all of Bootstrap CSS (~30 KB min+gzip) AND Tailwind, but only using Bootstrap for the navbar collapse, grid, and a few utilities. 

**Option A (Recommended): Remove Bootstrap, use custom CSS for navbar**
```js
// app/layout.js — DELETE this line:
import 'bootstrap/dist/css/bootstrap.min.css';
// Also remove from package.json: "bootstrap": "^5.3.8"
```
Replace Bootstrap grid with Tailwind's grid. Replace Bootstrap navbar with pure CSS (your CSS already does most of this).

**Option B: PurgeCSS Bootstrap** — add `@fullhuman/postcss-purgecss` to strip unused Bootstrap classes. This alone saves 25–28 KB.

**Estimated speed gain: 0.5–1.2s FCP improvement**

### Issue 2: Self-Host Inter Font
```js
// app/layout.js
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

// <html className={inter.variable}>
```
Remove the `<link>` tags for Google Fonts. This eliminates 1 external DNS lookup + render-blocking stylesheet.

**Estimated speed gain: 300–600ms**

### Issue 3: Fix Hero Image Priority
```jsx
// components/home/Hero.js — line 104
<img
  src="/hero-bg.png"
  alt=""
  className="hero-video"
  loading="eager"
  decoding="async"
  fetchPriority="high"   // ← CHANGE from "low" to "high"
/>
```

### Issue 4: Convert Images to WebP/AVIF
Since you're on static export (`unoptimized: true`), Next.js can't optimize images automatically. You need to pre-convert your images:

```bash
# Install sharp CLI
npm install -g sharp-cli

# Convert your hero image
sharp -i public/hero-bg.png -o public/hero-bg.webp --format webp --quality 80

# Convert all product images
for f in public/images/products/*.jpg; do
  sharp -i "$f" -o "${f%.jpg}.webp" --format webp --quality 80
done
```

Then update image `src` to use `.webp` files.

### Issue 5: Defer Intercom Script
```js
// app/layout.js — Intercom script
// Change from inline script to deferred:
<Script
  id="intercom"
  strategy="lazyOnload"   // loads after page is interactive
  dangerouslySetInnerHTML={{ __html: `...intercom code...` }}
/>
```
Use Next.js `<Script>` component (import from `'next/script'`).

### Issue 6: Reduce `globals.css` Size
Split the 281 KB CSS file:
```
styles/
  globals.css          ← Keep: design tokens, base, navbar, hero (≈60 KB)
  components.css       ← Extract: cards, buttons, sections (≈80 KB)
  pages/home.css       ← Home-only styles (import only on home page)
  pages/services.css   ← Service page styles
```

Import page-specific CSS directly in the page component or layout.

### Issue 7: `video.mp4` in Public Folder — Remove or Use It
`/public/video.mp4` exists but is never referenced. If unused, delete it (saves bandwidth on CDN). If you plan to use it as the hero video, uncomment the `<video>` tag in `Hero.js`.

### Issue 8: Unused Images
You have many unused images: `api.jpg`, `content.png`, `content1.webp`, `hero-girl.png`, `hero-hosting.png`, `hero-support.png`, etc. Audit and delete unused assets from `/public/images/features/` — they add to build size and confuse future devs.

### Next.js Config Improvements
```js
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],  // for when you switch to server-side
  },
  // Add headers for caching (if using a custom server/CDN)
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/favicon/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};
```

### Speed Checklist Summary

| Fix | Impact | Effort |
|---|---|---|
| Fix fetchPriority="high" on hero image | 🔴 High — fixes LCP | 2 min |
| Use next/font/google instead of link tag | 🔴 High — removes render block | 15 min |
| Remove Bootstrap CSS / PurgeCSS | 🔴 High — saves 25–28 KB | 1–2 hrs |
| Convert images to WebP | 🟠 Medium — saves 40–60% image size | 30 min |
| Defer Intercom with next/script lazyOnload | 🟠 Medium — improves TTI | 10 min |
| Split globals.css into modules | 🟠 Medium — reduces parse time | 2 hrs |
| Delete unused assets in /public | 🟡 Low — reduces CDN storage | 20 min |
| Add Cache-Control headers via CDN | 🟡 Low — helps returning visitors | 30 min |

---

## 🔍 SEO — COMPLETE ACTION PLAN

### What's Already Good ✅
- Schema markup: Organization, WebSite, SoftwareApplication, FAQPage, Service, BreadcrumbList — excellent
- Per-page metadata via `buildMetadata()` — correct pattern
- Canonical URLs set on every page
- OG + Twitter cards implemented
- robots: index/follow on all pages
- Structured keywords with brand + long-tail intent

### Critical SEO Gaps ❌

#### 1. Missing `sitemap.xml`
Google needs a sitemap to discover all pages. Since you're on static export, add:
```js
// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://ojiva.ai';
  const pages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${baseUrl}/sms`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/whatsapp`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/rcs`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/voice`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/whatsapp-chatbot`, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${baseUrl}/platform`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/blog`, priority: 0.7, changeFrequency: 'daily' },
    { url: `${baseUrl}/pricing`, priority: 0.85, changeFrequency: 'weekly' },
    { url: `${baseUrl}/privacy`, priority: 0.3 },
    { url: `${baseUrl}/terms`, priority: 0.3 },
  ];
  return pages.map(({ url, priority = 0.5, changeFrequency = 'monthly' }) => ({
    url,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
```

#### 2. Missing `robots.txt`
```js
// app/robots.js
export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] },
    ],
    sitemap: 'https://ojiva.ai/sitemap.xml',
    host: 'https://ojiva.ai',
  };
}
```

#### 3. `lang="en"` vs `en-IN` Mismatch
`app/layout.js` line 74: `<html lang="en">` but metadata specifies `en-IN`.
```jsx
<html lang="en-IN" suppressHydrationWarning>
```

#### 4. Missing Pages That Kill SEO

| Missing Page | SEO Value | Target Keywords |
|---|---|---|
| `/about` | Authority & E-E-A-T | "About Ojiva AI", "Ojiva AI team" |
| `/blog` | Long-tail traffic engine | All informational queries |
| `/pricing` | Commercial intent — highest converting | "Bulk SMS pricing India", "WhatsApp API cost" |
| `/case-studies` | E-E-A-T + social proof | "Bulk SMS success story", "WhatsApp automation ROI" |

#### 5. H1 Tag on Every Page
Every page should have exactly ONE H1. Check all service pages to confirm.

#### 6. Image Alt Text Audit
Many product images in `/public/images/products/` and `/public/images/solutions/` are used in components — verify all have descriptive alt text with keywords (e.g., `alt="Ojiva AI Bulk SMS dashboard showing delivery analytics"`).

#### 7. Internal Linking Strategy
Currently, footer links and navbar are the only internal links. Add contextual internal links:
- On SMS page: link to RCS page ("Upgrade from SMS to RCS")
- On WhatsApp page: link to WhatsApp Chatbot page  
- On every service page: link to Platform page and Pricing page
- In blog posts (once created): link to service pages

#### 8. Core Web Vitals — Target Scores
| Metric | Current (estimated) | Target |
|---|---|---|
| LCP | ~3.5–4s (due to fetchPriority=low + render-blocking fonts) | < 2.5s |
| FID/INP | Likely fine (React 19 + FM) | < 200ms |
| CLS | Likely fine (fixed layouts) | < 0.1 |
| FCP | ~2–2.5s (render-blocking CSS) | < 1.8s |

---

## 📝 BLOG — Menu Structure & SEO Strategy

This is your biggest untapped SEO opportunity. CPaaS companies that blog get 3–5× more organic traffic than those that don't.

### Recommended Blog URL Structure
```
/blog                          ← Index with all posts
/blog/category/bulk-sms        ← Category page
/blog/category/whatsapp        ← Category page
/blog/[slug]                   ← Individual post
```

### Blog Menu — Add to Navbar
```js
// components/layout/Navbar.js — add to NAV_LINKS:
{ href: '/blog', label: 'Blog' }

// OR add as dropdown (recommended):
BLOG_LINKS = [
  { href: '/blog/category/bulk-sms',    icon: '📱', label: 'Bulk SMS Tips',      desc: 'Guides, strategies & best practices' },
  { href: '/blog/category/whatsapp',    icon: '💬', label: 'WhatsApp Marketing', desc: 'WhatsApp Business API tutorials' },
  { href: '/blog/category/rcs',         icon: '✨', label: 'RCS Messaging',       desc: 'Rich communication strategies' },
  { href: '/blog/category/voice',       icon: '📞', label: 'Voice Automation',    desc: 'AI voice & IVR guides' },
  { href: '/blog/category/case-studies',icon: '📈', label: 'Case Studies',        desc: 'Real results from real businesses' },
  { href: '/blog/category/updates',     icon: '🚀', label: 'Product Updates',     desc: 'What\'s new at Ojiva AI' },
]
```

### Add Blog to Footer
```js
// components/layout/Footer.js — add a Resources column:
const RESOURCE_LINKS = [
  { href: '/blog', label: 'Blog & Guides' },
  { href: '/blog/category/case-studies', label: 'Case Studies' },
  { href: '/blog/category/bulk-sms', label: 'SMS Marketing Tips' },
  { href: '/blog/category/whatsapp', label: 'WhatsApp Guides' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/book-demo', label: 'Book a Demo' },
];
```

### First 10 Blog Posts to Write (Target Keywords)

| Post Title | Target Keyword | Monthly Searches (est.) |
|---|---|---|
| "Bulk SMS Pricing in India 2025: Complete Guide" | bulk sms pricing india | 2,400/mo |
| "WhatsApp Business API vs. Regular WhatsApp: Full Comparison" | whatsapp business api india | 4,400/mo |
| "RCS vs SMS: Which is Better for Your Business in 2025?" | rcs vs sms | 1,600/mo |
| "How to Send Bulk SMS in India (Step-by-Step)" | how to send bulk sms india | 1,200/mo |
| "DLT Registration for Bulk SMS India: Complete Guide" | dlt registration sms | 900/mo |
| "WhatsApp Chatbot for Business: ROI Case Study" | whatsapp chatbot business | 2,100/mo |
| "AI Voice Call vs Human Calls: Which Converts Better?" | ai voice call automation | 720/mo |
| "OTP SMS Service India: Best Providers Compared" | otp sms service india | 1,800/mo |
| "10 WhatsApp Marketing Campaigns That Drove 40%+ ROI" | whatsapp marketing campaigns | 1,400/mo |
| "How to Set Up RCS Business Messaging on Google" | rcs business messaging setup | 590/mo |

### Blog Implementation (Next.js Static Export)
Since you're on static export, use **MDX** or **local JSON/Markdown files** for blog content:
```
/content/blog/
  bulk-sms-pricing-india-2025.mdx
  whatsapp-api-vs-regular-whatsapp.mdx
  ...
```
Use `gray-matter` to parse frontmatter, generate static pages at build time.

---

## ✅ PRIORITY ACTION CHECKLIST

### This Week (Critical)
- [ ] Fix `/about` page — it's a 404 right now (30 min)
- [ ] Change `fetchPriority="low"` → `"high"` on hero image (2 min)
- [ ] Switch to `next/font/google` for Inter (15 min)
- [ ] Add `app/sitemap.js` and `app/robots.js` (20 min)
- [ ] Fix `<html lang="en">` → `lang="en-IN"` (2 min)
- [ ] Add Blog link to Navbar and Footer (1 hr)
- [ ] Change email from Gmail to domain email in schema (5 min)

### Next 2 Weeks (High Impact)
- [ ] Remove Bootstrap CSS, replace grid/utilities with Tailwind (2–4 hrs)
- [ ] Create `/pricing` page with pay-as-you-go + enterprise tiers (4–8 hrs)
- [ ] Convert product images to WebP format (30 min)
- [ ] Add animated counter stats section above fold on homepage (2 hrs)
- [ ] Add "Trusted by" logo marquee strip (1 hr — logos already in `/public/images/brands/`)
- [ ] Write first 3 blog posts targeting top keywords (3–6 hrs)
- [ ] Implement MDX blog system (4–6 hrs)

### Month 2 (Growth)
- [ ] Create `/about` page with team, founding story, mission (4 hrs)
- [ ] Create `/case-studies` page (4–8 hrs)
- [ ] Add contextual internal links across all service pages
- [ ] Implement FAQ sections on all service pages (already have faqSchema!)
- [ ] Submit sitemap to Google Search Console
- [ ] Implement structured data for blog posts (Article schema)
- [ ] Split `globals.css` into modular files
- [ ] Defer Intercom with `next/script` lazyOnload

---

## 🎯 Expected Results After Fixes

| Metric | Before | After (Est.) |
|---|---|---|
| Lighthouse Performance | ~55–65 | 85–95 |
| LCP | ~3.5–4s | <2.0s |
| Organic traffic | Baseline | +200–400% in 6 months (with blog) |
| Google indexed pages | ~10 pages | 50+ pages (with blog) |
| Domain authority signals | Low (no blog, no about) | Medium-High |
| Lead generation | Current | +30–50% (pricing + blog CTAs) |
