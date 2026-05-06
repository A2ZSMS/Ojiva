/**
 * Industry data for /solutions/ecommerce-retail.
 *
 * Schema mirrors the shared IndustryPageLayout expectations. To add a new
 * field, update the layout and update each industry data file.
 *
 * Keep copy generic — no fake metrics, customer names or unverified claims.
 */

const industryData = {
    slug: 'ecommerce-retail',
    name: 'E-commerce & Retail',
    shortName: 'E-commerce & Retail',
    icon: 'bi-cart-fill',
    color: '#FF6D42',
    eyebrow: 'E-commerce & D2C Solutions',
    headline: 'WhatsApp & SMS Marketing Platform for E-commerce & D2C Brands in India',
    subtitle:
      'Recover abandoned carts, confirm COD orders, send real-time shipping updates and win repeat purchases — with WhatsApp Business API, Bulk SMS and RCS for Indian online stores.',
    intro:
      'Indian e-commerce and D2C retail run on margins thin enough that every recovered cart, every successful COD delivery and every repeat order matters. The difference between a healthy CAC and an unsustainable one is often nothing more than messaging hygiene — does the cart-recovery WhatsApp land at the right moment, does the shipping update build delivery confidence, does the COD-confirmation call cut your RTO. Ojiva AI gives e-commerce, marketplace, D2C and quick-commerce teams a unified messaging layer across SMS, WhatsApp Business API, RCS and Voice that plugs into Shopify, WooCommerce, Magento and most popular Indian commerce stacks. Templates are pre-approved on DLT, transactional and promotional traffic stay separated, and per-customer segmentation handles the difference between a first-time buyer and a high-LTV repeat customer.',

    painPoints: [
      { title: 'Cart abandonment that compounds across the day', body: 'Most baskets are abandoned. The recovery window is short, the channel matters more than the discount, and the right nudge — at the right minute — recovers a meaningful share of revenue. A generic email an hour later does not.' },
      { title: 'Delivery & returns that decide repeat-purchase intent', body: 'Customers form their opinion of an order in the gap between "ordered" and "delivered". Real-time visibility, clean handovers and frictionless returns are now table-stakes; lacking them, the next order goes to a competitor.' },
      { title: 'Promotional fatigue that quietly kills your list', body: 'Generic "FLAT 20% OFF" blasts get unsubscribed, reported, and silently filtered. Personalised, channel-appropriate, segment-aware messaging keeps engagement healthy and protects sender reputation across operators.' },
    ],

    channelFit: [
      { channel: 'sms',      label: 'Bulk SMS',      use: 'Order confirmation, COD alerts & shipping updates via Bulk SMS India', body: 'The reliable rail for transactional commerce traffic — order placed, payment confirmed, shipped, out-for-delivery, delivered. DLT-registered templates keep deliverability healthy across operators.' },
      { channel: 'whatsapp', label: 'WhatsApp API',  use: 'Cart recovery, order tracking & customer support on WhatsApp API',         body: 'WhatsApp is where Indian buyers actually live. Use it for cart recovery, two-way order support, catalogue browsing with product cards, and reorder flows for high-frequency products.' },
      { channel: 'rcs',      label: 'RCS Messaging', use: 'Rich product carousels, promotional offers & verified sender via RCS', body: 'Rich product carousels, branded sale offers, verified sender — RCS lets premium brands present their store experience inside the inbox on supported devices.' },
      { channel: 'voice',    label: 'Voice Call',    use: 'COD confirmation IVR, failed-delivery rescheduling & feedback calls',              body: 'Automated voice for COD-confirmation, delivery rescheduling and missed-OTP recovery. Particularly useful for high-AOV orders where a phone confirmation cuts RTO.' },
    ],

    useCases: [
      { title: 'Abandoned cart recovery',         body: 'Trigger a WhatsApp or SMS nudge minutes after checkout drop-off, with a one-click return-to-cart link. A second nudge after a few hours, a third the next day, and stop — respect the customer.' },
      { title: 'Order & shipping lifecycle',      body: 'Automated transactional updates for "order placed", "payment confirmed", "out for delivery", "delivered", with carrier tracking links and a post-delivery NPS request.' },
      { title: 'COD confirmation & RTO reduction', body: 'Voice IVR or WhatsApp button-confirmation immediately after order placement to verify the buyer is real and ready to receive the package, dramatically reducing return-to-origin losses on high-value orders.' },
      { title: 'Loyalty & repeat sales',          body: 'WhatsApp catalogues, segment-based offers, and birthday / festive campaigns to drive repeat purchase from existing customers — usually a 5× cheaper acquisition path than paid media.' },
      { title: 'Reorder & subscription nudges',    body: 'For consumables or subscriptions, schedule a WhatsApp reorder nudge at the right interval per product. One tap to re-purchase keeps lifetime value compounding.' },
      { title: 'Review & UGC collection',         body: 'Day-after-delivery review nudge with a one-tap rating link. WhatsApp button collection of photos and short clips builds your social proof library passively.' },
    ],

    outcomes: [
      { label: 'Higher recovered revenue from carts',     body: 'A multi-touch WhatsApp + SMS recovery flow recovers more carts than a single-channel email sequence — the channel is the lever.' },
      { label: 'Lower RTO on cash-on-delivery orders',     body: 'Pre-shipment confirmation flows cut "buyer not available" failures and protect margins on COD orders.' },
      { label: 'Reduced support inbound on order status',   body: 'Real-time shipping updates remove the most common support ticket type, freeing the team for higher-value conversations.' },
      { label: 'Higher repeat-purchase rates',             body: 'Segment-driven WhatsApp catalogues and reorder nudges keep customers engaged without burning the promotional list.' },
      { label: 'Cleaner sender reputation across operators', body: 'DLT-aware template hygiene and per-segment audience targeting protect deliverability — no surprise blocks on Diwali day.' },
    ],

    bestPractices: [
      { title: 'Recover carts with utility, not desperation', body: 'The first nudge should help, not beg. Show what was left behind, not a panic discount. Save the discount for the second touchpoint.' },
      { title: 'Send shipping updates from a recognisable sender', body: 'Customers should immediately know it is your brand. A registered DLT sender ID, a brand-coloured RCS card, or a verified WhatsApp Business profile all do this.' },
      { title: 'Throttle promotional volume per customer',   body: 'Even your best customers should not get more than 2-3 promotional touches per week. Past that, opt-outs and reports compound.' },
      { title: 'Confirm COD orders within minutes',          body: 'The longer you wait, the more the customer disengages. Aim for an automated voice or WhatsApp confirmation in the first hour.' },
      { title: 'Treat first-purchase moments as content',    body: 'Order placed, shipped, delivered, review request — these are five chances to build the relationship. Each message should add one piece of brand voice.' },
    ],

    implementation: [
      { title: 'Connect to your store',         body: 'REST API + webhooks support most popular Indian and global commerce stacks. Order events from Shopify, WooCommerce, Magento, BigCommerce or your custom stack become triggers in the messaging layer.' },
      { title: 'Sync customer segments',         body: 'Push customer segments — first-time buyer, repeat buyer, lapsed buyer, high-LTV — into the platform via API or CSV. Use them as the audience for any campaign.' },
      { title: 'No-code recovery flows',         body: 'A 3-step cart-recovery flow can be built in the dashboard without code. More advanced multi-channel flows use the visual builder or REST API.' },
      { title: 'Sandbox + production',           body: 'Test order-confirmation, cart-recovery and COD flows in sandbox with test phone numbers before production rollout. Promote templates with version tracking.' },
    ],

    complianceNotes:
      'DLT-registered transactional flows, opt-out compliance, and message-template safety — so promotional and transactional traffic stay neatly separated.',
    complianceDetail:
      'E-commerce messaging is subject to the same TRAI DLT framework as banking — sender IDs, templates and opt-out enforcement matter just as much. Where commerce diverges is in the much higher promotional-to-transactional ratio: a typical store sends one transactional message per order but several promotional messages per active customer per week. Ojiva AI separates these flows cleanly: distinct DLT sender IDs, distinct template categories, separate opt-out lists for promotional vs. transactional, and per-customer frequency caps that prevent your active list from ever feeling spammed. Promotional opt-outs do not block transactional alerts (a customer who opted out of offers still gets shipping updates), and per-template audit logs let you respond to operator queries quickly.',

    faqs: [
      { q: 'Can it integrate with my Shopify or WooCommerce store?', a: 'Yes — webhook and REST API endpoints support most popular Indian and global e-commerce stacks. Orders, abandoned checkouts and customer events become triggers for messaging flows. Specific connector availability can be confirmed with sales.' },
      { q: 'How quickly can I run cart-recovery flows?',              a: 'A simple two-step recovery flow can be built in the dashboard without code in under a day. More advanced multi-step or multi-channel flows use the visual builder or REST API and typically take a sprint.' },
      { q: 'Do you support COD confirmation?',                         a: 'Yes — voice IVR and WhatsApp button confirmation are both supported as ways to verify COD intent before pickup. Both can be wired into your OMS so unconfirmed orders are auto-cancelled or held.' },
      { q: 'Will my promotional messages stay within DLT rules?',      a: 'Promotional templates are registered separately from transactional ones, with opt-in / opt-out tracking enforced at the platform level. Templates that drift outside the registered category are flagged before send.' },
      { q: 'Can I segment by customer behaviour?',                     a: 'Yes — segments can be built on order history, basket value, recency, channel preference and any custom attribute pushed via API. Segments are then targetable by any campaign or flow.' },
      { q: 'Can I run WhatsApp catalogues?',                            a: 'Yes — WhatsApp Business API supports catalogue browsing inside the chat, with product cards, prices and "Add to Cart" buttons. Catalogue items can sync from your store.' },
      { q: 'How are returns and refunds handled?',                      a: 'Refund and return updates flow through the same transactional templates. WhatsApp interactive buttons let buyers initiate a return or pickup without contacting support.' },
      { q: 'What happens during festive-season volume spikes?',         a: 'Throughput is sized for transactional bursts. Enterprise plans add dedicated routes for predictable Diwali / EoSS / sale peaks so messages do not queue up in the busy hours.' },
    ],
  };

export default industryData;
