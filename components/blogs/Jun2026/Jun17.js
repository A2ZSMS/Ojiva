import React from "react";

const Jan17 = () => {
  return (
    <>
      {/* JSON-LD schema: Article + BreadcrumbList + FAQPage.
          If you have a central <Head>/metadata setup, you can move this there. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline:
                  "WhatsApp API Message Templates for Indian Businesses (2026)",
                description:
                  "WhatsApp API message templates for Indian businesses: Utility, Authentication & Marketing examples, the 24-hour rule, naming tips and copy-paste templates.",
                image: "https://www.ojiva.ai/image/jun17(1).webp",
                author: { "@type": "Person", name: "Ananth" },
                publisher: {
                  "@type": "Organization",
                  name: "Ojiva AI",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.ojiva.ai/ojiva-logo-optimized.webp",
                  },
                },
                datePublished: "2026-06-19",
                dateModified: "2026-06-19",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id":
                    "https://www.ojiva.ai/blogs/whatsapp-api-message-templates-india/",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.ojiva.ai/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: "https://www.ojiva.ai/blogs/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "WhatsApp API Message Templates for Indian Businesses",
                    item: "https://www.ojiva.ai/blogs/whatsapp-api-message-templates-india/",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is a WhatsApp API message template?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A WhatsApp API message template is a pre-approved, reusable message format for sending proactive WhatsApp messages such as OTPs, order updates, reminders and offers to opted-in customers, with variables and CTA buttons.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the 24-hour conversation rule?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "When a customer messages you, you can reply freely for 24 hours. Outside that window, you must use an approved template to start or re-open the conversation.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the difference between Utility, Authentication and Marketing templates?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Utility templates are operational updates such as orders, payments and appointments. Authentication templates are OTPs and verification. Marketing templates are offers and re-engagement. The category affects both approval and per-message cost.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why do WhatsApp templates get rejected?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Common causes are unclear intent, promotional content inside a utility template, risky or misleading claims, and formatting or variable errors. Keep copy simple, factual and single-intent.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does WhatsApp template approval take?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Clear, compliant templates are often approved within a few minutes to 24 hours. Vague or non-compliant templates take longer or get rejected.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I edit a WhatsApp template after it is approved?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "You can edit templates, but changes usually require re-approval before the updated version can be sent. Use versioned names such as _v1 and _v2 to stay organised.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much do WhatsApp template messages cost in India?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Pricing is per delivered message and varies by category. Marketing messages cost more than utility or authentication, and service replies inside the 24-hour window are free. Add 18% GST and any BSP markup. Contact Ojiva AI for current rates.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is Ojiva AI a verified WhatsApp BSP?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Ojiva AI is an official Meta WhatsApp Business Solution Provider for India, offering the WhatsApp Business API with template planning and approval, a chatbot, CRM integration and India-based support.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <div className="container para-color py-4">
        {/* H1 */}
        <h2 className="text-primary py-4">
          WhatsApp API Message Templates for Indian Businesses
        </h2>

        {/* Introduction — GEO snippet answer first */}
        <section className="mb-5">
          <p>
            <strong>A WhatsApp API message template</strong> is a pre-approved
            message format that lets your business send proactive WhatsApp
            messages — order updates, OTPs, payment reminders, appointment
            confirmations and offers — to opted-in customers, even when they
            aren't actively chatting. You write the message once with
            placeholders like <b>{"{{1}}"}</b>, get it approved by Meta, and
            reuse it for thousands of customers with CTA buttons like Pay Now,
            Track Order or Call. For Indian businesses in 2026, templates are
            the difference between fast, consistent, compliant messaging and
            slow manual follow-ups that lose leads. This guide covers how
            templates work, the 24-hour rule, the three categories (Utility,
            Authentication, Marketing), naming and approval rules, why templates
            get rejected, and a copy-paste library you can customise and submit.
            New to the API itself? Start with{" "}
            <a href="/blogs/whatsapp-business-app-vs-api/">
              WhatsApp Business App vs API
            </a>
            .
          </p>
        </section>
        <div>
          <img loading="lazy" decoding="async"
            className="mt-3"
            width="100%"
            height="auto"
            src="/image/jun17(1).webp"
            alt="Best RCS Messaging Provider in Karnataka"
          />
        </div>

        {/* What is a template */}
        <section className="mb-5">
          <h2 className="fw-bold">What Is a WhatsApp API Message Template?</h2>

          <p>
            WhatsApp API message templates are the pre-approved, reusable
            messages businesses use to start conversations on the WhatsApp
            Business API. Unlike a normal chat reply, a template can be sent
            proactively to an opted-in customer at any time — which is exactly
            what makes WhatsApp work for automation, notifications and campaigns
            at scale.
          </p>

          <p>
            You only fill in the small details (name, order ID, amount, date)
            via variables; the structure stays fixed and on-brand. If you're
            shortlisting a provider, run each one through our{" "}
            <a href="/blogs/best-whatsapp-bsp-india/">WhatsApp BSP checklist</a>
            , and see the full <a href="/whatsapp/">WhatsApp Business API</a>{" "}
            platform.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-arrow-repeat text-primary me-3 fs-4"></i>
            <span>
              <b>Reusable at scale:</b> Write once, send to thousands with
              variables — no retyping the same message.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-patch-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Pre-approved &amp; compliant:</b> Meta reviews each template,
              so your proactive messages stay trusted.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-lightning-charge-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Triggered automatically:</b> Fire templates from your CRM on
              events like new lead, payment due or order shipped.
            </span>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-5">
          <h2 className="fw-bold">How WhatsApp Template Messaging Works</h2>

          <p>
            Template messaging runs on a structured, permission-based workflow:
            get consent, get templates approved, trigger them on real events,
            and measure the results. Here's the end-to-end flow.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-person-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Customer opt-in:</b> Collect consent via website forms, lead
              ads, checkout, QR codes or inbound chat — clean opt-in means fewer
              blocks.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-pencil-square text-primary me-3 fs-4"></i>
            <span>
              <b>Template drafting:</b> Write one clear intent per message, add
              variables (<b>{"{{1}}"}</b>, <b>{"{{2}}"}</b>) and a CTA button.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-patch-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Template approval:</b> Submit to Meta; clear, compliant
              templates clear faster.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-lightning-charge-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Automation triggers:</b> Fire from your CRM on events — new
              lead, missed call, cart abandonment, payment pending, order
              shipped.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-clock-history text-primary me-3 fs-4"></i>
            <span>
              <b>The 24-hour rule:</b> Inside the customer-initiated window you
              can reply freely; outside it, a template re-opens the
              conversation.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-bar-chart-line-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Analytics &amp; optimisation:</b> Track delivery, reads,
              replies, button clicks and conversions, then refine.
            </span>
          </div>
        </section>

        <div>
          <img loading="lazy" decoding="async"
            className="mt-3"
            width="100%"
            height="auto"
            src="/image/whatsapp(1).webp"
            alt="WhatsApp API message templates for Indian businesses — Ojiva AI"
          />
        </div>

        {/* Categories */}
        <section className="mb-5">
          <h2 className="fw-bold">
            WhatsApp Template Categories in India (Utility, Authentication,
            Marketing)
          </h2>

          <p>
            Every template belongs to one category, and the category decides
            both how it's reviewed and what it costs. Since India moved to
            per-message pricing on 1 January 2026, marketing messages cost far
            more than utility or authentication, so correct categorisation
            directly affects your bill.
          </p>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Category</th>
                  <th>What it's for</th>
                  <th>Example</th>
                  <th>India rate (2026)*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Utility</b>
                  </td>
                  <td>Order/booking updates, reminders, invoices, alerts</td>
                  <td>
                    {"Hi {{1}}, your order {{2}} is shipped. Delivery: {{3}}."}
                  </td>
                  <td>~₹0.115 / msg</td>
                </tr>
                <tr>
                  <td>
                    <b>Authentication</b>
                  </td>
                  <td>OTPs and verification (login, signup, reset)</td>
                  <td>{"Your OTP is {{1}} (valid {{2}} min)."}</td>
                  <td>~₹0.115 / msg</td>
                </tr>
                <tr>
                  <td>
                    <b>Marketing</b>
                  </td>
                  <td>Offers, launches, festival deals, re-engagement</td>
                  <td>{"Hi {{1}}, get {{2}}% off on {{3}} till {{4}}."}</td>
                  <td>~₹0.88 / msg</td>
                </tr>
                <tr>
                  <td>
                    <b>Service</b>
                  </td>
                  <td>Replies within the 24-hour window</td>
                  <td>Free-form reply</td>
                  <td>Free</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-tags-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Categorise correctly to control cost:</b> An order update is
              Utility (~₹0.115), not Marketing (~₹0.88). Mislabelling overpays.
              Rates are Meta base; add 18% GST and any BSP markup. For OTPs, see{" "}
              <a href="/otp/">OTP &amp; 2FA</a>.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-exclamation-triangle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Don't mix intents:</b> An order update must not carry "Buy 1
              Get 1" — mixing promo into utility risks rejection and
              reclassification.
            </span>
          </div>

          <p className="text-muted mb-0">
            <small>
              *Meta base rates for India, indicative. Add 18% GST and your BSP
              markup; confirm current rates before budgeting.
            </small>
          </p>
        </section>

        {/* Structure */}
        <section className="mb-5">
          <h2 className="fw-bold">Template Structure That Gets Replies</h2>

          <p>
            High-performing templates are built for speed: the customer should
            understand the message in three seconds and know the next step. The
            structure is simple — Header → Body → Variables → Buttons.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-type-h1 text-primary me-3 fs-4"></i>
            <span>
              <b>Header:</b> A short context line ("Payment Reminder", "Order
              Shipped"), or a media header (image/video) for marketing.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-card-text text-primary me-3 fs-4"></i>
            <span>
              <b>Body:</b> One purpose, short lines, a clear action — pay,
              confirm, track, visit or reply.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-braces text-primary me-3 fs-4"></i>
            <span>
              <b>Variables:</b> Placeholders like <b>{"{{1}}"}</b>,{" "}
              <b>{"{{2}}"}</b> insert name, order ID, amount or date, so one
              template serves thousands.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-ui-radios text-primary me-3 fs-4"></i>
            <span>
              <b>Buttons:</b> One-tap CTAs — Pay Now, Track Order, Call Now, Get
              Directions, Book Now — lift conversions because customers don't
              type.
            </span>
          </div>

          <div className="mb-2">
            <p className="mb-1">
              <b>Mini example (full structure):</b>
            </p>
            <p className="mb-1">
              <b>Header:</b> Payment Reminder
            </p>
            <p className="mb-1">
              <b>Body:</b>{" "}
              {
                "Hi {{1}}, your payment of ₹{{2}} is due on {{3}}. Tap below to pay now."
              }
            </p>
            <p className="mb-0">
              <b>Buttons:</b> Pay Now | Call Support
            </p>
          </div>
        </section>

        <div>
          <img loading="lazy" decoding="async"
            className="mt-3"
            width="100%"
            height="auto"
            src="/image/jun17(2).webp"
            alt="Best RCS Messaging Provider in Karnataka"
          />
        </div>

        {/* Naming & writing */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Naming Rules &amp; Approval-Friendly Writing Tips
          </h2>

          <p>
            Once you have 20+ templates, naming keeps your team fast and your
            approvals clean. Organise by industry + purpose, and write for
            clarity. Recommended format: <b>industry_purpose_action_v1</b> — for
            example, <i>realestate_sitevisit_reminder_v1</i>,{" "}
            <i>payments_due_reminder_v1</i>, <i>auth_login_otp_v1</i>.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-1-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>One intent per template:</b> Never mix an update with an offer
              — keep Utility clean and offers in Marketing.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-2-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Simple language:</b> Short lines, minimal punctuation, one
              clear CTA the customer grasps in 3 seconds.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-3-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Use variables naturally:</b> <b>{"{{1}}"}</b> name,{" "}
              <b>{"{{2}}"}</b> order ID, <b>{"{{3}}"}</b> amount/date should
              read smoothly, with no awkward gaps.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-4-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Stay brand-safe and factual:</b> Show your brand name and skip
              risky claims ("guaranteed", "100% returns") that trigger
              rejection.
            </span>
          </div>
        </section>

        <div>
          <img loading="lazy" decoding="async"
            className="mt-3"
            width="100%"
            height="auto"
            src="/image/whatsapp(2).webp"
            alt="WhatsApp template structure: header, body, variables and buttons"
          />
        </div>

        {/* Why rejected */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Why WhatsApp Templates Get Rejected (and How to Pass)
          </h2>

          <p>
            Most rejections come down to a handful of avoidable issues. Fix
            these before you submit and approvals usually clear quickly.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-question-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Unclear intent:</b> Vague text like "Important update" with no
              detail. Be specific about what and why.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-megaphone-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Promo inside utility:</b> Discounts or offers in a utility
              template get reclassified or rejected — keep them in Marketing.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-shield-exclamation text-primary me-3 fs-4"></i>
            <span>
              <b>Risky or misleading claims:</b> "Guaranteed returns", "100%
              success", "no risk" — keep it factual.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-text-paragraph text-primary me-3 fs-4"></i>
            <span>
              <b>Formatting issues:</b> Broken variables, excessive punctuation
              or placeholder gaps. Keep it clean and consistent.
            </span>
          </div>
        </section>

        {/* Copy-paste examples */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Copy-Paste WhatsApp Template Examples (India)
          </h2>

          <p>
            Here are ready-to-use templates you can customise and submit.
            Replace placeholders with real details: <b>{"{{1}}"}</b> = customer
            name, <b>{"{{2}}"}</b> = brand/order ID, <b>{"{{3}}"}</b> =
            amount/location, <b>{"{{4}}"}</b> = date/time.
          </p>

          <h3 className="fw-bold mt-4">
            Utility Templates (Updates &amp; Reminders)
          </h3>

          <div className="mb-3">
            <p className="mb-1">
              <b>Payment reminder</b>{" "}
              <span className="text-muted">(Utility)</span>
            </p>
            <p className="mb-1">
              {
                "Hi {{1}}, this is a reminder from {{2}}. Your payment of ₹{{3}} is due on {{4}}. Tap below to pay now or call us for help."
              }
            </p>
            <p className="mb-0 text-muted">
              <small>Buttons: Pay Now | Call Support</small>
            </p>
          </div>

          <div className="mb-3">
            <p className="mb-1">
              <b>Appointment reminder</b>{" "}
              <span className="text-muted">(Utility)</span>
            </p>
            <p className="mb-0">
              {
                "Hi {{1}}, your appointment is scheduled on {{2}} at {{3}}. Reply 1 to confirm or 2 to reschedule."
              }
            </p>
          </div>

          <div className="mb-3">
            <p className="mb-1">
              <b>Order shipped</b> <span className="text-muted">(Utility)</span>
            </p>
            <p className="mb-1">
              {
                "Hello {{1}}, your order {{2}} has been shipped. Expected delivery: {{3}}. Track your order below."
              }
            </p>
            <p className="mb-0 text-muted">
              <small>Button: Track Order</small>
            </p>
          </div>

          <h3 className="fw-bold mt-4">Authentication (OTP) Templates</h3>

          <div className="mb-3">
            <p className="mb-1">
              <b>Login OTP</b>{" "}
              <span className="text-muted">(Authentication)</span>
            </p>
            <p className="mb-0">
              {
                "Your OTP for login is {{1}}. Valid for {{2}} minutes. Do not share it with anyone."
              }
            </p>
          </div>

          <div className="mb-3">
            <p className="mb-1">
              <b>Password reset OTP</b>{" "}
              <span className="text-muted">(Authentication)</span>
            </p>
            <p className="mb-0">
              {
                "Use OTP {{1}} to reset your password. Expires in {{2}} minutes. If you didn't request this, please ignore."
              }
            </p>
          </div>

          <h3 className="fw-bold mt-4">
            Marketing Templates (Offers &amp; Re-engagement)
          </h3>

          <div className="mb-3">
            <p className="mb-1">
              <b>Festival offer</b>{" "}
              <span className="text-muted">(Marketing)</span>
            </p>
            <p className="mb-1">
              {
                "Hi {{1}} 👋 Festival offer is live! Get {{2}}% off on {{3}}. Valid till {{4}}. Tap below to claim."
              }
            </p>
            <p className="mb-0 text-muted">
              <small>Button: Claim Offer</small>
            </p>
          </div>

          <div className="mb-3">
            <p className="mb-1">
              <b>Re-engagement</b>{" "}
              <span className="text-muted">(Marketing)</span>
            </p>
            <p className="mb-0">
              {
                "Hi {{1}}, quick check-in from {{2}}. Do you still need help with {{3}}? Reply YES and we'll share the best options."
              }
            </p>
          </div>

          <div className="d-flex align-items-start mb-3 mt-4">
            <i className="bi bi-lightbulb-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Start with 5 essentials:</b> OTP, payment reminder, appointment
              reminder, order update, and one re-engagement message — then
              expand by industry.
            </span>
          </div>
        </section>

        {/* Industry */}
        <section className="mb-5">
          <h2 className="fw-bold">WhatsApp Templates by Industry</h2>

          <p>
            Different industries need different messaging. Start with 8–12
            templates per vertical — lead follow-up, reminder, update, payment
            and feedback — then expand. Here are India use cases with examples.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-house-door-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Real Estate:</b> New-lead follow-up, site-visit confirmation,
              location sharing, document checklist, post-visit follow-up. See{" "}
              <a href="/solutions/real-estate/">Real Estate</a>.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-cart-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>E-commerce / D2C:</b> Order confirmation, shipping and delivery
              updates, COD verification, returns, feedback. See{" "}
              <a href="/solutions/ecommerce-retail/">E-commerce &amp; Retail</a>
              .
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-hospital-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Healthcare:</b> Appointment confirmation, reminders, "report
              ready" alerts, follow-up, review request. See{" "}
              <a href="/solutions/healthcare/">Healthcare</a>.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-mortarboard-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Education:</b> Demo-class reminder, admission follow-up,
              fee-due reminder, exam schedule, parent notifications. See{" "}
              <a href="/solutions/education/">Education</a>.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-airplane-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Travel &amp; Hospitality:</b> Booking confirmation, payment
              reminders, itinerary, ticket updates, post-trip feedback. See{" "}
              <a href="/solutions/travel-hospitality/">
                Travel &amp; Hospitality
              </a>
              .
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-bank text-primary me-3 fs-4"></i>
            <span>
              <b>Banking &amp; Finance:</b> Transaction alerts, EMI and renewal
              reminders, KYC nudges, payment receipts. See{" "}
              <a href="/solutions/banking-finance/">Banking &amp; Finance</a>.
            </span>
          </div>
        </section>

        {/* Compliance */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Security, Consent &amp; Compliance (India 2026)
          </h2>

          <p>
            WhatsApp is permission-based, and good compliance keeps your sender
            rating healthy and your delivery high. In India, that means clear
            opt-in, controlled frequency, correct categorisation, and
            DPDP-aligned data handling.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-person-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Collect clear opt-in:</b> Forms, lead ads, checkout, QR or
              inbound chat — consent reduces blocks and builds trust.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-sliders text-primary me-3 fs-4"></i>
            <span>
              <b>Control frequency:</b> Use event triggers, not repeated blasts,
              so customers don't block you.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-tags-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Use the right category:</b> Utility for updates, Authentication
              for OTPs, Marketing for offers — never mix.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-box-arrow-right text-primary me-3 fs-4"></i>
            <span>
              <b>Easy opt-out + DPDP:</b> Offer "Reply STOP to opt out", and
              handle data with consent records and AES-256 encryption.
            </span>
          </div>
        </section>

        <div>
          <img loading="lazy" decoding="async"
            className="mt-3"
            width="100%"
            height="auto"
            src="/image/jun17(3).webp"
            alt="Best RCS Messaging Provider in Karnataka"
          />
        </div>

        {/* Checklist */}
        <section className="mb-5">
          <h2 className="fw-bold">Getting Started: Your Quick Checklist</h2>

          <p>
            Launching is easier when you plan the workflow first, then build
            templates around high-intent actions.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-1-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Define your goal:</b> Lead nurturing, payments, support,
              reminders or re-engagement.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-2-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Plan opt-in points:</b> Website forms, missed-call flow, QR,
              checkout or lead ads.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-3-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Create core templates:</b> OTP, lead follow-up, reminders,
              order updates, payment messages.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-4-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Integrate your CRM:</b> Trigger messages on events (new lead,
              invoice generated, booking confirmed).
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-5-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Track &amp; optimise:</b> Monitor replies, clicks and
              conversions; refine copy by performance.
            </span>
          </div>
        </section>

        {/* How Ojiva helps */}
        <section className="mb-5">
          <h2 className="fw-bold">
            How Ojiva AI Helps You Launch WhatsApp Templates
          </h2>

          <p>
            As an official Meta WhatsApp Business Solution Provider, Ojiva AI
            gets Indian businesses live faster — with template planning,
            approval support, automation and India-based help.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-card-checklist text-primary me-3 fs-4"></i>
            <span>
              <b>End-to-end setup:</b> Onboarding, verification, and template
              drafting and approval, managed for you.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-robot text-primary me-3 fs-4"></i>
            <span>
              <b>Automation + chatbot:</b> Trigger templates on real events and
              pair them with a 24/7{" "}
              <a href="/whatsapp-chatbot/">WhatsApp AI chatbot</a>.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-diagram-3-fill text-primary me-3 fs-4"></i>
            <span>
              <b>CRM integration:</b> 200+ connectors plus REST API and webhooks
              to fire templates automatically.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-headset text-primary me-3 fs-4"></i>
            <span>
              <b>Support &amp; optimisation:</b> India-based team to improve
              approval rates, cut blocks and scale —{" "}
              <a href="/book-demo/">book a demo</a>.
            </span>
          </div>
        </section>
        {/* Template vs session messages */}
        <section className="mb-5">
          <h2 className="fw-bold">
            WhatsApp Template Messages vs Session Messages: What's the
            Difference
          </h2>

          <p>
            A common point of confusion is the difference between template
            messages and session (free-form) messages. Both are part of WhatsApp
            Business API, but they follow different rules — and getting this
            right keeps you compliant and controls your cost.
          </p>

          <p>
            In short: templates are how you start or re-open a conversation;
            session messages are what you send once the customer is already
            talking to you.
          </p>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Type</th>
                  <th>When you can send it</th>
                  <th>Format</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Template message</b>
                  </td>
                  <td>Anytime, to opted-in contacts (to start or re-open)</td>
                  <td>Pre-approved format only</td>
                  <td>Paid per message, by category</td>
                </tr>
                <tr>
                  <td>
                    <b>Session (free-form)</b>
                  </td>
                  <td>Only within 24 hrs of the customer's last message</td>
                  <td>Free-form text, media, replies</td>
                  <td>Free (within the window)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-send-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Templates start the conversation:</b> Use an approved template
              to reach a customer proactively or after the 24-hour window
              closes.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-chat-dots-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Session messages continue it:</b> Once a customer replies, you
              can chat freely (text, media, buttons) for 24 hours — no template
              needed.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-clock-history text-primary me-3 fs-4"></i>
            <span>
              <b>The window resets:</b> Every new customer message restarts the
              24-hour window, so timely replies keep messaging free-form.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-currency-rupee text-primary me-3 fs-4"></i>
            <span>
              <b>Plan for cost:</b> Templates are billed by category; session
              replies inside the window are free — design flows that keep
              conversations active.
            </span>
          </div>
        </section>

        {/* Buttons & CTAs */}
        <section className="mb-5">
          <h2 className="fw-bold">
            WhatsApp Template Buttons &amp; CTAs Explained
          </h2>

          <p>
            Buttons are what turn a template from a notification into a
            conversion. WhatsApp supports several button types, and choosing the
            right one for each message lifts response rates because customers
            act in one tap instead of typing.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-reply-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Quick reply buttons:</b> Pre-set replies like "Confirm",
              "Reschedule" or "Yes" — ideal for appointments, confirmations and
              simple choices.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-box-arrow-up-right text-primary me-3 fs-4"></i>
            <span>
              <b>Call-to-action (URL) buttons:</b> Send customers to a payment
              link, tracking page or booking form — great for "Pay Now", "Track
              Order" or "Book Now".
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-telephone-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Call buttons:</b> A one-tap dial button for support or sales —
              useful for high-value or urgent conversations.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-clipboard-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Copy-code buttons:</b> Used in authentication templates so
              customers can copy their OTP in one tap, reducing errors.
            </span>
          </div>

          <p>
            For multi-step interactions — capturing details, bookings or product
            choices inside the chat — WhatsApp Flows let you build form-like
            journeys; pair them with a{" "}
            <a href="/whatsapp-chatbot/">WhatsApp AI chatbot</a> for fully
            automated conversations.
          </p>
        </section>

        {/* Quality rating & limits */}
        <section className="mb-5">
          <h2 className="fw-bold">
            WhatsApp Quality Rating &amp; Messaging Limits Explained
          </h2>

          <p>
            WhatsApp scores every business number with a quality rating based on
            how customers react to your messages. A healthy rating keeps your
            messaging limits high; a poor one can throttle how many customers
            you can reach. For high-volume Indian senders, protecting this
            rating is as important as the message itself.
          </p>

          <p>
            Your number also sits in a messaging tier that caps how many
            business-initiated conversations you can start in 24 hours. Good
            quality and consistent volume unlock higher tiers automatically.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-shield-check text-primary me-3 fs-4"></i>
            <span>
              <b>Quality rating (green / yellow / red):</b> Based on blocks and
              reports — green keeps you scaling, red can pause your messaging.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-bar-chart-steps text-primary me-3 fs-4"></i>
            <span>
              <b>Messaging tiers:</b> Limits step up (1K → 10K → 100K →
              unlimited business-initiated conversations) as quality and volume
              grow.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-hand-thumbs-down-fill text-primary me-3 fs-4"></i>
            <span>
              <b>What hurts your rating:</b> Too many blocks or reports,
              irrelevant messaging, weak opt-in, or over-messaging.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-graph-up-arrow text-primary me-3 fs-4"></i>
            <span>
              <b>How to protect it:</b> Message only opted-in users, keep
              content relevant, control frequency, and use the right template
              category.
            </span>
          </div>
        </section>

        {/* Measuring performance */}
        <section className="mb-5">
          <h2 className="fw-bold">Measuring WhatsApp Template Performance</h2>

          <p>
            Templates are measurable end to end, so you can move from guesswork
            to optimisation. Track these metrics from launch and refine copy,
            timing and targeting over time.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-send-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Delivery rate:</b> The share of messages successfully delivered
              — your baseline for list quality and routing health.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-eye-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Read rate:</b> How many recipients opened the message — a
              strong signal of timing and relevance.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-hand-index-thumb text-primary me-3 fs-4"></i>
            <span>
              <b>Button / click rate:</b> Taps on CTAs and quick replies — the
              clearest sign of intent and engagement.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-graph-up-arrow text-primary me-3 fs-4"></i>
            <span>
              <b>Conversion &amp; opt-out:</b> Track completed actions
              (payments, bookings, confirmations) and watch opt-outs to keep
              messaging welcome.
            </span>
          </div>
        </section>

        {/* CRM & website integration */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Integrating WhatsApp Templates with Your CRM &amp; Website
          </h2>

          <p>
            The real power of templates shows when they fire automatically on
            customer events — no one typing, no follow-up missed. Connecting
            WhatsApp to your CRM, store and website turns templates into an
            always-on workflow.
          </p>

          <p>
            With Ojiva AI's <a href="/platform/">platform</a>, you can trigger
            the right template from any event using native connectors, REST API
            and webhooks.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-diagram-3-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Event-based triggers:</b> Fire a template on new lead,
              abandoned cart, payment due, booking confirmed or order shipped.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-plug-fill text-primary me-3 fs-4"></i>
            <span>
              <b>CRM &amp; store connectors:</b> Connect tools like Shopify,
              Zoho, Salesforce and HubSpot, or your own app via REST API.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-arrow-left-right text-primary me-3 fs-4"></i>
            <span>
              <b>Two-way sync &amp; webhooks:</b> Capture replies and button
              taps back into your CRM to update records and route leads.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-robot text-primary me-3 fs-4"></i>
            <span>
              <b>Add a chatbot for handover:</b> Pair templates with a{" "}
              <a href="/whatsapp-chatbot/">WhatsApp AI chatbot</a> for instant
              qualification, then hand off to an agent.
            </span>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-5">
          <h2 className="fw-bold">Conclusion</h2>

          <p>
            WhatsApp API message templates let Indian businesses communicate
            faster, sell smarter and support customers at scale — without
            manual, inconsistent follow-ups. Start with a core set (OTP,
            follow-ups, reminders, updates), keep one intent per category, and
            optimise using real engagement signals.
          </p>

          <p>
            Want a faster go-live with approvals, automation and best-practice
            messaging? Explore Ojiva AI's{" "}
            <a href="/whatsapp/">WhatsApp Business API</a>, and if you're still
            evaluating providers, run them through our{" "}
            <a href="/blogs/best-whatsapp-bsp-india/">WhatsApp BSP checklist</a>
            .
          </p>
        </section>

        {/* Author — E-E-A-T */}
        <section className="mb-5">
          <p className="text-muted">
            <em>By Ananth · Updated 17 June 2026</em>
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-5">
          <div data-aos="fade-left">
            <h2 className="fw-bold mt-5">
              <span className="text-primary">Frequently Asked Questions:</span>{" "}
              WhatsApp Business API Templates
            </h2>

            <div className="accordion mt-4" id="templatesFAQ">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#templatesFaq1"
                  >
                    What is a WhatsApp API message template?
                  </button>
                </h2>
                <div
                  id="templatesFaq1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#templatesFAQ"
                >
                  <div className="accordion-body">
                    A WhatsApp API message template is a pre-approved, reusable
                    message format for sending proactive WhatsApp messages such
                    as OTPs, order updates, reminders and offers to opted-in
                    customers, with variables and CTA buttons.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#templatesFaq2"
                  >
                    What is the 24-hour conversation rule?
                  </button>
                </h2>
                <div
                  id="templatesFaq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#templatesFAQ"
                >
                  <div className="accordion-body">
                    When a customer messages you, you can reply freely for 24
                    hours. Outside that window, you must use an approved
                    template to start or re-open the conversation.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#templatesFaq3"
                  >
                    What is the difference between Utility, Authentication and
                    Marketing templates?
                  </button>
                </h2>
                <div
                  id="templatesFaq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#templatesFAQ"
                >
                  <div className="accordion-body">
                    Utility templates are operational updates such as orders,
                    payments and appointments. Authentication templates are OTPs
                    and verification. Marketing templates are offers and
                    re-engagement. The category affects both approval and
                    per-message cost.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#templatesFaq4"
                  >
                    Why do WhatsApp templates get rejected?
                  </button>
                </h2>
                <div
                  id="templatesFaq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#templatesFAQ"
                >
                  <div className="accordion-body">
                    Common causes are unclear intent, promotional content inside
                    a utility template, risky or misleading claims, and
                    formatting or variable errors. Keep copy simple, factual and
                    single-intent.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#templatesFaq5"
                  >
                    How long does WhatsApp template approval take?
                  </button>
                </h2>
                <div
                  id="templatesFaq5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#templatesFAQ"
                >
                  <div className="accordion-body">
                    Clear, compliant templates are often approved within a few
                    minutes to 24 hours. Vague or non-compliant templates take
                    longer or get rejected.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#templatesFaq6"
                  >
                    Can I edit a WhatsApp template after it's approved?
                  </button>
                </h2>
                <div
                  id="templatesFaq6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#templatesFAQ"
                >
                  <div className="accordion-body">
                    You can edit templates, but changes usually require
                    re-approval before the updated version can be sent. Use
                    versioned names such as _v1 and _v2 to stay organised.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#templatesFaq7"
                  >
                    How much do WhatsApp template messages cost in India?
                  </button>
                </h2>
                <div
                  id="templatesFaq7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#templatesFAQ"
                >
                  <div className="accordion-body">
                    Pricing is per delivered message and varies by category.
                    Marketing messages cost more than utility or authentication,
                    and service replies inside the 24-hour window are free. Add
                    18% GST and any BSP markup. Contact Ojiva AI for current
                    rates.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#templatesFaq8"
                  >
                    Is Ojiva AI a verified WhatsApp BSP?
                  </button>
                </h2>
                <div
                  id="templatesFaq8"
                  className="accordion-collapse collapse"
                  data-bs-parent="#templatesFAQ"
                >
                  <div className="accordion-body">
                    Yes. Ojiva AI is an official Meta WhatsApp Business Solution
                    Provider for India, offering the WhatsApp Business API with
                    template planning and approval, a chatbot, CRM integration
                    and India-based support.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Jan17;
