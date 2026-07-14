import Link from "next/link";
import React from "react";

const Jun02 = () => {
  // Article + BreadcrumbList + FAQPage schema (mirrors the on-page FAQ below)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "WhatsApp Business API Pricing in India 2026: Full Cost Breakdown",
        description:
          "WhatsApp Business API pricing in India for 2026 — Meta's new per-message rates, GST, BSP markups and the hidden fees, with real cost examples before you budget.",
        image:
          "https://www.ojiva.ai/image/jun2(1).webp",
        author: { "@type": "Organization", name: "Ojiva AI" },
        publisher: {
          "@type": "Organization",
          name: "Ojiva AI",
          logo: {
            "@type": "ImageObject",
            url: "https://www.ojiva.ai/logo.png",
          },
        },
        datePublished: "2026-06-03",
        dateModified: "2026-06-03",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.ojiva.ai/whatsapp-business-api-pricing-india/",
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
            item: "https://www.ojiva.ai/blog/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "WhatsApp Business API Pricing in India",
            item: "https://www.ojiva.ai/whatsapp-business-api-pricing-india/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does WhatsApp Business API cost in India in 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Meta's per-message rates are about Rs0.8631 for marketing, ~Rs0.115 for utility, and ~Rs0.115 for authentication; service messages within the 24-hour window are free. On top of Meta's rates you pay your BSP platform fee, any per-message markup, and 18% GST.",
            },
          },
          {
            "@type": "Question",
            name: "Is WhatsApp Business API pricing per message or per conversation in 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Per message. Meta moved from per-conversation to per-template-message pricing, so you pay for each template message delivered, by category and recipient country.",
            },
          },
          {
            "@type": "Question",
            name: "Why did WhatsApp pricing increase in India in January 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Meta raised India's marketing message rate by roughly 10%, from Rs0.7846 to Rs0.8631, effective 1 January 2026, citing sustained high demand. Utility and authentication rates stayed broadly stable.",
            },
          },
          {
            "@type": "Question",
            name: "Are WhatsApp service messages really free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Replies to customer-initiated chats are free within the 24-hour customer service window. You cannot send marketing or authentication templates inside that window.",
            },
          },
          {
            "@type": "Question",
            name: "Does GST apply to WhatsApp Business API charges?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, 18% GST applies to both Meta's charges and your BSP platform fees. Meta's charges are treated as imported OIDAR services; confirm reverse-charge handling with your BSP.",
            },
          },
          {
            "@type": "Question",
            name: "What is the minimum realistic monthly cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For a small team sending a couple of thousand utility or authentication messages and a few hundred marketing messages, expect roughly Rs2,000 to Rs2,500 per month all-in, including platform fee, Meta charges and GST.",
            },
          },
          {
            "@type": "Question",
            name: "Do BSPs add markup on top of Meta's rates?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Many do, commonly 10 to 30% per message. Always ask whether a quoted rate is Meta's base rate or Meta plus markup before budgeting.",
            },
          },
          {
            "@type": "Question",
            name: "Which WhatsApp message category is cheapest?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Service is free within the 24-hour window; utility and authentication (~Rs0.115) are far cheaper than marketing (~Rs0.8631). Mapping each message to the correct, cheapest valid category is the easiest way to cut cost.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container aos para-color py-4">
        <h2 className="text-primary py-4">
          WhatsApp Business API Pricing in India 2026: Full Cost Breakdown
        </h2>

        {/* Introduction */}
        <h2 className="">Why Your WhatsApp Bill Never Matches the Quote</h2>
        <p>
          You budget a WhatsApp campaign at one number, the invoice lands at
          nearly double, and nobody can tell you why. It is the most common
          complaint about WhatsApp Business API pricing in India&mdash;not that
          it is expensive, but that the real cost is buried under categories,
          platform fees, markups, and tax that no one explained up front. This
          guide breaks down every rupee. You will see Meta&apos;s 2026 India
          rate card, what changed on 1 January 2026, the costs your provider
          does not put on the homepage, and three real cost examples so you can
          budget accurately before you commit. The short version: India is one
          of the cheapest WhatsApp markets in the world&mdash;but only if you
          understand the full cost stack.
        </p>

        {/* How pricing works */}
        <div data-aos="fade-left">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">How It Works in 2026:</span>{" "}
            Per-Message, Not Per-Conversation
          </h2>
          <p>
            The first thing to understand is that WhatsApp Business API pricing
            is now per-message, not per-conversation. Until mid-2025, Meta
            charged per 24-hour &ldquo;conversation&rdquo; regardless of how
            many messages you sent inside it. That model is gone. In 2026 you
            pay for each template message delivered, priced by message category
            and by the recipient&apos;s country code&mdash;not your business
            location. That last detail matters: if you message a customer in
            Mumbai, you pay India&apos;s rate even if your company is registered
            abroad. And because India is one of the cheapest WhatsApp markets in
            the world, adoption here is booming across fintech, e-commerce,
            logistics, and BFSI.
          </p>
        </div>

        <div>
          <img loading="lazy" decoding="async"
            className="mt-3"
            width="100%"
            height="auto"
            src="/image/jun2(1).webp"
            alt="WhatsApp Business API Pricing in India 2026"
          />
        </div>

        {/* Rate card */}
        <div data-aos="fade-right">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">
              Meta&apos;s 2026 India Rate Card:
            </span>{" "}
            The Four Message Categories
          </h2>
          <p>
            There are four message categories, each with its own per-message
            rate. Marketing is roughly 7&ndash;8&times; the cost of utility and
            authentication, so your category mix&mdash;not just your
            volume&mdash; decides your bill. A business sending mostly OTPs and
            order updates pays a fraction of what an aggressive promotional
            sender pays for the same message count.
          </p>

          <div className="table-responsive my-4">
            <table className="table table-bordered align-middle">
              <thead>
                <tr className="text-primary">
                  <th>Category</th>
                  <th>What it&apos;s for</th>
                  <th>India rate (Meta, 2026)</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Marketing</strong>
                  </td>
                  <td>Offers, promotions, re-engagement</td>
                  <td>&#8377;0.8631 / message (~$0.0107)</td>
                  <td>The expensive one</td>
                </tr>
                <tr>
                  <td>
                    <strong>Utility</strong>
                  </td>
                  <td>Order updates, payment reminders, receipts</td>
                  <td>~&#8377;0.115 / message</td>
                  <td>Free if sent inside an open service window</td>
                </tr>
                <tr>
                  <td>
                    <strong>Authentication</strong>
                  </td>
                  <td>OTPs, verification codes</td>
                  <td>~&#8377;0.115 / message</td>
                  <td>Similar to utility</td>
                </tr>
                <tr>
                  <td>
                    <strong>Service</strong>
                  </td>
                  <td>Replies to customer-initiated chats</td>
                  <td>Free</td>
                  <td>Within the 24-hour window</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>What Changed on 1 January 2026</h3>
          <p>
            Meta raised India&apos;s marketing rate by roughly 10% on 1 January
            2026&mdash;from &#8377;0.7846 to &#8377;0.8631 per marketing
            message&mdash;citing sustained high demand. Utility and
            authentication rates stayed broadly stable at around &#8377;0.115.
            If your 2025 budget assumed the old marketing rate, every
            promotional campaign now costs about a tenth more before you add
            anything else.
          </p>
        </div>

        {/* 24-hour window */}
        <div data-aos="fade-left">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">The 24-Hour Service Window:</span>{" "}
            How to Message for Free
          </h2>
          <p>
            When a customer messages your business first, a 24-hour customer
            service window opens. Inside it you can send unlimited free-form
            replies&mdash;text, images, files, even utility templates&mdash;at
            no per-message charge. Every new message from the customer resets
            the 24-hour timer, so an active support thread can stay free for
            days.
          </p>
          <p>
            For support-heavy businesses, routing conversations through this
            window is the single biggest lever for cutting WhatsApp costs. A few
            rules to remember:
          </p>

          <h3>Service Window Rules</h3>
          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-clock-history text-primary me-3"></i>
              <span>
                <strong>It resets on every customer reply.</strong> Each inbound
                message restarts the 24-hour clock, so long threads can remain
                free.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-slash-circle text-primary me-3"></i>
              <span>
                <strong>
                  No marketing or authentication templates inside it.
                </strong>{" "}
                Meta reserves the window for genuine support, not upselling.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-info-circle text-primary me-3"></i>
              <span>
                <strong>
                  The &ldquo;1,000 free&rdquo; allowance is service-only now.
                </strong>{" "}
                The free-marketing allowance some older guides mention has been
                rolled back.
              </span>
            </li>
          </ul>

          {/* internal link to sibling blog */}
          <p>
            Not sure whether you even need the API yet? Read our guide on{" "}
            {/* update href to your live slug for Blog #6 */}
            <Link
              href="/blogs/whatsapp-business-app-vs-api/"
              className="text-primary"
            >
              WhatsApp Business App vs API
            </Link>{" "}
            before you budget.
          </p>
        </div>

        {/* Hidden costs */}
        <div data-aos="fade-right">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">
              The Costs Meta Doesn&apos;t Show You:
            </span>{" "}
            BSP Fees, Markup &amp; GST
          </h2>
          <p>
            Meta&apos;s rate card is only the base layer. Your actual bill has
            three more components stacked on top&mdash;and this is exactly where
            a campaign budgeted at one number arrives at nearly double.
          </p>

          <h3>The Three Layers on Top of Meta&apos;s Rate</h3>
          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-credit-card text-primary me-3"></i>
              <span>
                <strong>BSP platform fees:</strong> You access the API through a
                Business Solution Provider (BSP) like Ojiva AI. Most charge a
                monthly platform subscription, commonly
                &#8377;999&ndash;&#8377;5,000/month, covering the dashboard,
                broadcasts, automation, team inbox, and template management.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-percent text-primary me-3"></i>
              <span>
                <strong>Per-message markup:</strong> Many Indian BSPs add a
                10&ndash;30% markup over Meta&apos;s base rate, so a
                &#8377;0.8631 marketing message can effectively cost
                &#8377;1.00&ndash;&#8377;1.15. Always ask whether a quoted rate
                is Meta&apos;s rate or Meta-plus-markup.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-receipt text-primary me-3"></i>
              <span>
                <strong>18% GST:</strong> GST applies on both Meta&apos;s
                charges and your BSP&apos;s platform fees. Meta&apos;s charges
                are treated as imported (OIDAR) services, and depending on your
                setup you may handle the reverse-charge mechanism
                yourself&mdash;confirm with your provider and accountant.
              </span>
            </li>
          </ul>

          <div className="mt-4 p-4 bg-light rounded">
            <h4 className="text-primary mb-3">
              Want pricing without the surprises?
            </h4>
            <p className="mb-3">
              Ojiva AI offers WhatsApp Business API with transparent,
              pass-through pricing&mdash;Meta&apos;s rates without surprise
              markups&mdash;plus broadcasts, automation, and a shared team
              inbox.
            </p>
            <div className="d-flex gap-3">
              <Link
                href="https://www.ojiva.ai/whatsapp/"
                className="btn btn-primary"
              >
                Explore WhatsApp API
              </Link>
              <Link
                href="https://www.ojiva.ai/contact/"
                className="btn btn-outline-primary"
              >
                Get a Price Quote
              </Link>
            </div>
          </div>
        </div>

        <div>
          <img loading="lazy" decoding="async"
            className="mt-3"
            width="100%"
            height="auto"
            src="/image/jun2(2).webp"
            alt="WhatsApp Business API Pricing in India 2026"
          />
        </div>

        {/* Real cost examples */}
        <div data-aos="fade-left">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">Real Cost Examples</span> for Indian
            Businesses
          </h2>
          <p>
            Approximate Meta-only charges (before BSP markup and GST), to show
            how category mix drives the bill. In all three, marketing volume is
            what runs up the cost&mdash;shifting eligible messages to
            utility/service categories and the free service window cuts spend
            dramatically.
          </p>

          <h3>Three Business Profiles</h3>
          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-shop-window text-primary me-3"></i>
              <span>
                <strong>Small business (support + OTPs):</strong> 2,000
                utility/auth (&times; &#8377;0.115 &asymp; &#8377;230) + 500
                marketing (&times; &#8377;0.8631 &asymp; &#8377;432) =
                ~&#8377;662 Meta + ~&#8377;1,500 platform + 18% GST &asymp;{" "}
                <strong>&#8377;2,550/month all-in</strong>.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-bag-heart text-primary me-3"></i>
              <span>
                <strong>Growing D2C brand (active marketing):</strong> Four
                monthly blasts to 25,000 opted-in customers = 100,000 marketing
                &times; &#8377;0.8631 &asymp; &#8377;86,310, plus 18% GST
                &asymp; <strong>&#8377;1,01,846 in Meta charges alone</strong>,
                before platform fees and markup.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-building text-primary me-3"></i>
              <span>
                <strong>High-volume sender:</strong> 500,000 marketing
                messages/month &times; &#8377;0.8631 &asymp;{" "}
                <strong>&#8377;4.31 lakh in Meta charges alone</strong>, plus
                GST and BSP fees.
              </span>
            </li>
          </ul>
        </div>

        {/* Reduce your bill */}
        <div data-aos="fade-right">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">
              How to Reduce Your WhatsApp API Bill:
            </span>{" "}
            Five Levers
          </h2>
          <p>
            Per-message billing creates clear optimisation levers that the old
            conversation model did not. Each of these reduces real spend, not
            just theoretical waste.
          </p>

          <h3>Five Ways to Cut Your WhatsApp Spend</h3>
          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-1-circle text-primary me-3"></i>
              <span>
                <strong>Audit your category mix.</strong> Send as
                utility/authentication anything that legitimately
                qualifies&mdash;they are ~7&ndash;8&times; cheaper than
                marketing.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-2-circle text-primary me-3"></i>
              <span>
                <strong>Use the 24-hour window.</strong> Handle support and
                follow-ups inside the free service window with automation.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-3-circle text-primary me-3"></i>
              <span>
                <strong>Stop blasting your whole list.</strong> The most
                expensive habit is broadcasting marketing to everyone weekly.
                Segment and target.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-4-circle text-primary me-3"></i>
              <span>
                <strong>Negotiate the markup.</strong> Ask your BSP for the
                exact per-message rate over Meta&apos;s base and push for
                transparent pass-through pricing.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-5-circle text-primary me-3"></i>
              <span>
                <strong>Bill in INR.</strong> Set up your WhatsApp Business
                Account with INR billing to avoid currency friction. Note:
                existing USD-billed accounts cannot be converted&mdash;you would
                need a new account.
              </span>
            </li>
          </ul>

          {/* internal link to sibling blog */}
          <p>
            Choosing a provider? Use our{" "}
            {/* update href to your live slug for Blog #8 */}
            <Link href="/blogs/best-whatsapp-bsp-india/" className="text-primary">
              2026 WhatsApp BSP buyer&apos;s checklist
            </Link>{" "}
            to compare on price transparency and support.
          </p>
        </div>

        {/* India vs world */}
        <div data-aos="fade-left">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">India vs the World:</span> Why India
            Is the Cheapest Market
          </h2>
          <p>
            WhatsApp pricing varies wildly by country, and India sits near the
            bottom&mdash;which is great news for Indian businesses. A marketing
            message that costs about $0.0107 in India costs roughly $0.0255 in
            the US and far more in parts of Europe, where marketing rates can
            run several times higher.
          </p>
          <p>
            If your audience is India-first, you are operating in one of the
            most cost-effective business messaging markets on the planet. Get
            your category mix right and use the free service window, and the
            channel becomes more efficient as you scale, not less.
          </p>
        </div>

        {/* FAQ Section */}
        <div data-aos="fade-right">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">Frequently Asked Questions:</span>{" "}
            WhatsApp API Pricing in India
          </h2>
          <div className="accordion mt-4" id="whatsappPricingFAQAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseOne"
                >
                  How much does WhatsApp Business API cost in India in 2026?
                </button>
              </h2>
              <div
                id="faqCollapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#whatsappPricingFAQAccordion"
              >
                <div className="accordion-body">
                  Meta&apos;s per-message rates are about &#8377;0.8631 for
                  marketing, ~&#8377;0.115 for utility, and ~&#8377;0.115 for
                  authentication; service messages within the 24-hour window are
                  free. On top of Meta&apos;s rates you pay your BSP platform
                  fee, any per-message markup, and 18% GST.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseTwo"
                >
                  Is WhatsApp Business API pricing per message or per
                  conversation in 2026?
                </button>
              </h2>
              <div
                id="faqCollapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#whatsappPricingFAQAccordion"
              >
                <div className="accordion-body">
                  Per message. Meta moved from per-conversation to
                  per-template-message pricing, so you pay for each template
                  message delivered, by category and recipient country.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseThree"
                >
                  Why did WhatsApp pricing increase in India in January 2026?
                </button>
              </h2>
              <div
                id="faqCollapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#whatsappPricingFAQAccordion"
              >
                <div className="accordion-body">
                  Meta raised India&apos;s marketing message rate by roughly
                  10%, from &#8377;0.7846 to &#8377;0.8631, effective 1 January
                  2026, citing sustained high demand. Utility and authentication
                  rates stayed broadly stable.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseFour"
                >
                  Are WhatsApp service messages really free?
                </button>
              </h2>
              <div
                id="faqCollapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#whatsappPricingFAQAccordion"
              >
                <div className="accordion-body">
                  Yes. Replies to customer-initiated chats are free within the
                  24-hour customer service window. You cannot send marketing or
                  authentication templates inside that window.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseFive"
                >
                  Does GST apply to WhatsApp Business API charges?
                </button>
              </h2>
              <div
                id="faqCollapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#whatsappPricingFAQAccordion"
              >
                <div className="accordion-body">
                  Yes, 18% GST applies to both Meta&apos;s charges and your BSP
                  platform fees. Meta&apos;s charges are treated as imported
                  OIDAR services; confirm reverse-charge handling with your BSP.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseSix"
                >
                  What is the minimum realistic monthly cost?
                </button>
              </h2>
              <div
                id="faqCollapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#whatsappPricingFAQAccordion"
              >
                <div className="accordion-body">
                  For a small team sending a couple of thousand utility or
                  authentication messages and a few hundred marketing messages,
                  expect roughly &#8377;2,000 to &#8377;2,500 per month all-in,
                  including platform fee, Meta charges, and GST.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseSeven"
                >
                  Do BSPs add markup on top of Meta&apos;s rates?
                </button>
              </h2>
              <div
                id="faqCollapseSeven"
                className="accordion-collapse collapse"
                data-bs-parent="#whatsappPricingFAQAccordion"
              >
                <div className="accordion-body">
                  Many do, commonly 10 to 30% per message. Always ask whether a
                  quoted rate is Meta&apos;s base rate or Meta-plus-markup
                  before budgeting.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseEight"
                >
                  Which WhatsApp message category is cheapest?
                </button>
              </h2>
              <div
                id="faqCollapseEight"
                className="accordion-collapse collapse"
                data-bs-parent="#whatsappPricingFAQAccordion"
              >
                <div className="accordion-body">
                  Service is free within the 24-hour window; utility and
                  authentication (~&#8377;0.115) are far cheaper than marketing
                  (~&#8377;0.8631). Mapping each message to the correct,
                  cheapest valid category is the easiest way to cut cost.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div data-aos="fade-left">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">
              Build Your Full Messaging Stack:
            </span>{" "}
            WhatsApp, Bulk SMS &amp; RCS
          </h2>
          <p>
            WhatsApp is the highest-converting channel for most Indian
            SMBs&mdash;but the strongest 2026 strategy pairs it with bulk SMS
            for guaranteed delivery and RCS for rich native messaging. Explore
            how the channels work together:
          </p>

          <div className="row mt-4">
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="bi bi-whatsapp text-primary me-2"></i>
                    WhatsApp Business API
                  </h5>
                  <p className="card-text">
                    Transparent, pass-through WhatsApp API pricing with
                    broadcasts, automation, chatbots, and a shared team
                    inbox&mdash;built for Indian businesses billing in INR.
                  </p>
                  <Link
                    href="https://www.ojiva.ai/whatsapp/"
                    className="btn btn-primary btn-sm"
                  >
                    Explore WhatsApp API
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="bi bi-chat-square-text text-primary me-2"></i>
                    Bulk SMS Services
                  </h5>
                  <p className="card-text">
                    Reach every customer on any handset with DLT-compliant bulk
                    SMS and direct operator routing&mdash;ideal for OTPs,
                    alerts, and guaranteed-delivery fallback.
                  </p>
                  <Link
                    href="https://www.ojiva.ai/sms/"
                    className="btn btn-primary btn-sm"
                  >
                    SMS Solutions
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="bi bi-broadcast text-primary me-2"></i>
                    RCS Messaging
                  </h5>
                  <p className="card-text">
                    Rich, branded, interactive messages with carousels, images,
                    and action buttons inside the native Messages app&mdash;with
                    SMS fallback for complete reach.
                  </p>
                  <Link
                    href="https://www.ojiva.ai/rcs/"
                    className="btn btn-primary btn-sm"
                  >
                    Learn About RCS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div data-aos="fade-right">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">Conclusion:</span> Budget WhatsApp
            the Right Way
          </h2>
          <p>
            WhatsApp Business API is one of the cheapest, highest-converting
            channels available to Indian businesses in 2026&mdash;but only if
            you understand the full cost stack: Meta&apos;s per-message rates,
            the BSP platform fee, the markup, and 18% GST.
          </p>
          <p>
            Get your category mix right and use the free 24-hour service window,
            and the channel gets more efficient as you scale, not less. The
            businesses that overspend are the ones blasting marketing to their
            whole list every week; the ones that win route support through the
            free window and reserve marketing for segmented, high-intent
            audiences.
          </p>

          <div className="mt-5 p-4 bg-primary text-white rounded">
            <h4 className="mb-3">
              Want WhatsApp API Pricing Without Surprises?
            </h4>
            <p className="mb-4">
              Ojiva AI offers WhatsApp Business API with transparent,
              pass-through pricing&mdash;Meta&apos;s rates without surprise
              markups&mdash;plus broadcasts, automation, and a shared team
              inbox. Get a clear quote before you commit a single rupee.
            </p>
            <div className="d-flex gap-3">
              <Link href="/contact/" className="btn btn-light">
                Get a WhatsApp API Quote
              </Link>
              <Link href="/whatsapp/" className="btn btn-outline-light">
                Explore WhatsApp API
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div data-aos="fade-left" className="mt-5">
          <h2 className="fw-bold">
            <span className="text-primary">
              Choose Ojiva AI for Transparent WhatsApp API Pricing
            </span>
          </h2>
          <p>
            Indian businesses trust Ojiva AI for WhatsApp Business API that is
            priced honestly&mdash;Meta&apos;s rates passed through without
            hidden markups, billed in INR, with the automation and support to
            keep your cost per result low.
          </p>

          <div className="row mt-4">
            <div className="col-md-3 mb-3 text-center">
              <i
                className="bi bi-cash-coin text-primary"
                style={{ fontSize: "3rem" }}
              ></i>
              <h5 className="mt-3">Pass-Through Pricing</h5>
              <p>Meta&apos;s rates with no surprise per-message markup</p>
            </div>
            <div className="col-md-3 mb-3 text-center">
              <i
                className="bi bi-currency-rupee text-primary"
                style={{ fontSize: "3rem" }}
              ></i>
              <h5 className="mt-3">INR Billing</h5>
              <p>Local billing, no currency-conversion friction</p>
            </div>
            <div className="col-md-3 mb-3 text-center">
              <i
                className="bi bi-robot text-primary"
                style={{ fontSize: "3rem" }}
              ></i>
              <h5 className="mt-3">Automation Built In</h5>
              <p>
                Chatbots &amp; the free service window to cut cost per result
              </p>
            </div>
            <div className="col-md-3 mb-3 text-center">
              <i
                className="bi bi-headset text-primary"
                style={{ fontSize: "3rem" }}
              ></i>
              <h5 className="mt-3">Expert Support</h5>
              <p>Guidance on category mix and budget optimisation</p>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link href="/contact/" className="btn btn-primary me-3">
              Get a WhatsApp API Quote
            </Link>
            <Link
              href="https://www.ojiva.ai/whatsapp/"
              className="btn btn-outline-primary"
            >
              Learn More About Solutions
            </Link>
          </div>
        </div>

        {/* E-E-A-T sources */}
        <p className="text-muted small mt-5">
          Sources: Meta WhatsApp Business Platform pricing documentation (2026
          rate card); Indian BSP pricing disclosures. Rates verified against
          Meta&apos;s India rate card as of mid-2026&mdash;always confirm
          current rates before forecasting.
        </p>
      </div>
    </>
  );
};

export default Jun02;
