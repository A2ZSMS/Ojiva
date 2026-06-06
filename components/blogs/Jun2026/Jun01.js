import Link from "next/link";
import React from "react";

const Jun01 = () => {
  // FAQPage + Article + BreadcrumbList schema (mirrors the on-page FAQ below)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Bulk SMS in India 2026: The Complete DLT & Campaign Guide",
        description:
          "Send bulk SMS in India in 2026 the right way — DLT registration, promotional vs transactional rules, real INR pricing, and how to launch your first campaign.",
        image: "https://www.ojiva.ai/Images/bulk-sms-in-india-2026.png",
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
          "@id": "https://www.ojiva.ai/bulk-sms-in-india/",
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
            name: "Bulk SMS in India",
            item: "https://www.ojiva.ai/bulk-sms-in-india/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is bulk SMS legal in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Bulk SMS is legal provided you complete DLT registration under TRAI's TCCCPR 2018 rules, use approved sender IDs and templates, respect DND for promotional messages, and obtain consent where required.",
            },
          },
          {
            "@type": "Question",
            name: "How much does DLT registration cost in 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A one-time entity registration fee of approximately Rs5,000 plus GST, standardised across the Jio, Airtel, Vi and BSNL portals; some portals list it as around Rs5,900.",
            },
          },
          {
            "@type": "Question",
            name: "How long does DLT registration take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "With correct documents, roughly 3 to 7 working days end to end: about 1 to 3 days for the entity, 1 to 2 days for headers, and 1 to 3 days per template.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between promotional and transactional SMS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Promotional messages are marketing content that only reaches non-DND numbers during approved daytime hours and needs consent. Transactional messages such as OTPs and bank alerts are service-critical, reach any number 24/7, and are DND-exempt when correctly classified.",
            },
          },
          {
            "@type": "Question",
            name: "Can I send promotional SMS to DND numbers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Promotional content is blocked to numbers on the Do-Not-Disturb registry. Only genuine transactional and service messages reach DND numbers.",
            },
          },
          {
            "@type": "Question",
            name: "Why are my SMS not delivered even after registration?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The most common cause is a template mismatch: the message sent must exactly match the approved template. Other causes are non-whitelisted URLs, wrong message category, and DND blocking for promotional content.",
            },
          },
          {
            "@type": "Question",
            name: "What happens if I send SMS without DLT registration?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The messages are blocked at the operator level and never delivered. You may still be billed for submission, and repeated attempts can get your activity flagged for spam.",
            },
          },
          {
            "@type": "Question",
            name: "How much does bulk SMS cost in India in 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Per-SMS rates typically start from around Rs0.11 to Rs0.20, depending on volume, route, and whether the message is transactional or promotional. Longer messages split into multiple billed 160-character segments.",
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
        <h1 className="text-primary py-4">
          Bulk SMS in India 2026: The Complete DLT &amp; Campaign Guide
        </h1>

        {/* Introduction */}
        <h2 className="">
          Why Bulk SMS Still Wins for Indian Businesses in 2026
        </h2>
        <p>
          A business loads up its contact list, writes a clean offer, hits send
          to 50,000 customers&mdash;and almost nothing arrives. No error, no
          bounce, no obvious reason. The campaign just quietly fails. Nine times
          out of ten this is not a gateway problem; it is a compliance problem.
          In India, every commercial SMS passes through a regulatory filter
          before it reaches a phone, and if your business is not registered
          correctly, the message is blocked at the operator level and silently
          dropped. This guide walks you through everything you need to send bulk
          SMS in India in 2026&mdash;what bulk SMS actually is, the three
          message routes, the full DLT registration process, real pricing in
          rupees, and a step-by-step playbook for launching your first campaign
          without burning budget on undelivered messages. Bulk SMS remains the
          most reliable business messaging channel in the country: every phone
          can receive it, no app or internet required, with open rates that sit
          far above email and reach that extends from a flagship device in
          Bengaluru to a basic feature phone in a tier-3 town.
        </p>

        <div>
          <img
            className="mt-3"
            width="100%"
            height="auto"
            src="/Image/jun1(1).png"
            alt="Bulk SMS in India 2026 DLT campaign guide dashboard"
          />
        </div>

        {/* The Three SMS Routes */}
        <div data-aos="fade-left">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">The Three SMS Routes:</span>{" "}
            Promotional, Transactional &amp; Service
          </h2>
          <p>
            Before you send a single message, you have to know which category it
            falls into. This one decision controls when your message can be
            delivered, whether it reaches Do-Not-Disturb (DND) numbers, and
            whether you need consent. Get the category wrong and your message is
            blocked&mdash;or worse, your sender ID gets flagged. An OTP or a
            genuine order update is transactional or service and can reach any
            number around the clock. A festival discount is promotional and will
            only land on non-DND numbers during approved daytime hours.
          </p>
          <p>
            Disguising a promotional message as transactional to dodge those
            rules is the fastest way to get your header suspended&mdash;TRAI
            treats misclassification seriously. Here is how the three routes
            compare for Indian businesses in 2026:
          </p>

          <div className="table-responsive my-4">
            <table className="table table-bordered align-middle">
              <thead>
                <tr className="text-primary">
                  <th>Category</th>
                  <th>Use case</th>
                  <th>DND numbers</th>
                  <th>Delivery window</th>
                  <th>Consent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Promotional</strong>
                  </td>
                  <td>Offers, discounts, marketing</td>
                  <td>Blocked to DND</td>
                  <td>
                    Daytime only (operators commonly enforce ~10 AM&ndash;9 PM)
                  </td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>
                    <strong>Transactional</strong>
                  </td>
                  <td>OTPs, bank alerts, payment confirmations</td>
                  <td>Delivered (DND-exempt)</td>
                  <td>24/7</td>
                  <td>Customer-initiated</td>
                </tr>
                <tr>
                  <td>
                    <strong>Service</strong>
                  </td>
                  <td>Order updates, reminders, account notices</td>
                  <td>Service-explicit needs consent</td>
                  <td>Generally daytime; varies</td>
                  <td>Explicit needs opt-in</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* DLT Registration */}
        <div data-aos="fade-right">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">DLT Registration:</span> The
            Step-by-Step Process That Decides If Your SMS Arrives
          </h2>
          <p>
            DLT (Distributed Ledger Technology) registration is mandatory for
            every business sending commercial SMS in India, and skipping it is
            the single biggest reason campaigns fail. DLT is a blockchain-based
            registry the Telecom Regulatory Authority of India (TRAI) introduced
            under the TCCCPR 2018 regulations to kill spam. Every business (a
            &ldquo;Principal Entity&rdquo;), every sender ID, every template,
            and every consent record is logged on the ledger and checked in real
            time as your message is sent&mdash;a process called scrubbing.
          </p>
          <p>
            The four operator-managed DLT portals are Jio, Airtel (SmartPing),
            Vodafone Idea (Vi), and BSNL. You register once and your headers and
            templates sync across all of them. The impact is not subtle: a
            common pattern across Indian businesses is promotional delivery
            sitting below 30%, discovering they were never DLT-registered,
            completing the process, and delivery jumping past 95%. Compliance
            directly drives deliverability.
          </p>

          <h3>The Four DLT Registration Steps</h3>
          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-1-circle text-primary me-3"></i>
              <span>
                <strong>Principal Entity (PE) Registration:</strong> Your
                business&apos;s KYC for the messaging ecosystem. Submit business
                PAN, GST certificate, a Letter of Authorisation on company
                letterhead, and ID proof of the authorised signatory. Cost is a
                one-time ~&#8377;5,000 + GST (some portals list ~&#8377;5,900),
                approved in 1&ndash;3 working days. The #1 delay is a
                company-name mismatch across PAN, GST, and incorporation
                documents&mdash;make them match exactly first.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-2-circle text-primary me-3"></i>
              <span>
                <strong>Sender ID (Header) Approval:</strong> A header is the
                6-character alphanumeric name customers see as the sender, such
                as HDFCBK or SHOPCL. Each header is mapped to a category;
                transactional headers start with a letter and are DND-exempt. In
                2026 TRAI rejects generic, unrelated headers&mdash;yours must
                clearly relate to your brand. Approval usually takes 1&ndash;2
                days once your entity is live.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-3-circle text-primary me-3"></i>
              <span>
                <strong>Template Registration:</strong> Every distinct message
                must be pre-registered as a content template and approved before
                use. Mark every variable explicitly, include your brand name,
                avoid special characters the portal rejects, and ensure the
                message you send matches the approved template
                exactly&mdash;even a small deviation triggers a mismatch and
                silent blocking. Approval typically takes 1&ndash;3 days.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-4-circle text-primary me-3"></i>
              <span>
                <strong>Consent &amp; URL Whitelisting:</strong> For promotional
                messaging, maintain genuine opt-in consent records. Two traps
                catch businesses out in 2026: no URL shorteners (every link must
                be a full, whitelisted URL, or it is silently blocked), and
                keeping consent logs current to avoid sends to non-consented or
                DND numbers.
              </span>
            </li>
          </ul>

          <div className="mt-4 p-4 bg-light rounded">
            <h4 className="text-primary mb-3">
              Want the full DLT walkthrough?
            </h4>
            <p className="mb-3">
              A clean submission gets you fully live in roughly 3&ndash;7
              working days; document mismatches add a 3&ndash;7 day revision
              cycle each time. For the complete portal-by-portal walkthrough
              with screenshots, read our dedicated DLT registration
              guide&mdash;or let Ojiva AI handle the entire registration for
              you.
            </p>
            <div className="d-flex gap-3">
              {/* update href to your live DLT blog slug */}
              <Link
                href="/dlt-registration-bulk-sms-india/"
                className="btn btn-primary"
              >
                DLT Registration Guide
              </Link>
              <Link href="/bulk-sms/" className="btn btn-outline-primary">
                Explore Bulk SMS
              </Link>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div data-aos="fade-left">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">
              Bulk SMS Pricing in India 2026:
            </span>{" "}
            What You Actually Pay
          </h2>
          <p>
            Bulk SMS remains the cheapest business messaging channel in India.
            Per-SMS rates typically start from around
            &#8377;0.11&ndash;&#8377;0.20 per message, depending on volume,
            route, and whether the SMS is transactional or promotional.
            Transactional and OTP routes are usually priced slightly higher
            because of their priority delivery and DND-exempt status.
          </p>
          <p>
            The headline rate is only part of the story&mdash;three things move
            your effective cost, and the cheapest quoted rate is often the most
            expensive in practice if half your messages never arrive.
          </p>

          <h3>The Three Levers That Move Your SMS Cost</h3>
          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-graph-up text-primary me-3"></i>
              <span>
                <strong>Volume Tier:</strong> Higher monthly volume earns lower
                per-SMS rates. Most providers offer tiered pricing, so
                consolidating your sends with one partner usually beats
                spreading volume thin.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-textarea-t text-primary me-3"></i>
              <span>
                <strong>Message Length:</strong> A single SMS is 160 characters.
                Longer messages split into multiple billed segments, so tight,
                well-written copy directly lowers cost.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-diagram-3 text-primary me-3"></i>
              <span>
                <strong>Route Quality:</strong> Direct operator connectivity
                costs more than grey routes but delivers reliably and
                compliantly. Cheap grey routes are a false economy&mdash;you pay
                for messages that get blocked.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <img
            className="mt-3"
            width="100%"
            height="auto"
            src="/Image/jun1(2).png"
            alt="Bulk SMS in India 2026 DLT campaign guide dashboard"
          />
        </div>

        {/* Launch Steps */}
        <div data-aos="fade-right">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">Launch Playbook:</span> How to Run
            Your First Bulk SMS Campaign in India
          </h2>
          <p>
            Once your DLT registration is in place, launching a campaign is
            straightforward&mdash;provided you follow the sequence. The most
            common mistake is rushing to send before headers and templates are
            fully approved, which guarantees a failed first campaign.
          </p>
          <p>
            Here is the seven-step process Ojiva AI uses with clients to take a
            campaign from list to delivered:
          </p>

          <h3>Seven Steps to a High-Delivery Campaign</h3>
          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-1-circle text-primary me-3"></i>
              <span>
                <strong>Pick the right category.</strong> Decide whether each
                message is promotional, transactional, or service&mdash;this
                drives everything else.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-2-circle text-primary me-3"></i>
              <span>
                <strong>Complete DLT registration.</strong> Entity, header, then
                templates. Do not send anything until all three are approved.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-3-circle text-primary me-3"></i>
              <span>
                <strong>Get your sender ID live.</strong> Use a recognisable,
                brand-related 6-character header.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-4-circle text-primary me-3"></i>
              <span>
                <strong>Register your templates.</strong> Pre-approve every
                message variant with variables marked correctly.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-5-circle text-primary me-3"></i>
              <span>
                <strong>Clean and segment your list.</strong> Remove duplicates
                and unconsented numbers; segment so each message is relevant.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-6-circle text-primary me-3"></i>
              <span>
                <strong>Schedule inside the permitted window.</strong> Send
                promotional campaigns during approved daytime hours to non-DND
                numbers; transactional can go 24/7.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-7-circle text-primary me-3"></i>
              <span>
                <strong>Read your delivery reports.</strong> Track delivered,
                failed, and DND-blocked rates&mdash;and use them to fix
                templates and routing, not just to admire the dashboard.
              </span>
            </li>
          </ul>
        </div>

        {/* Why SMS Fails */}
        <div data-aos="fade-left">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">Troubleshooting:</span> Why Bulk SMS
            Fails to Deliver (and How to Fix It)
          </h2>
          <p>
            Almost every &ldquo;the SMS did not arrive&rdquo; problem in India
            traces back to the compliance layer, not the gateway. Fix these
            first before you blame your provider or your list.
          </p>
          <p>
            Here are the five most common causes of failed delivery and the
            exact fix for each:
          </p>

          <h3>Five Delivery Killers &amp; Their Fixes</h3>
          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-shield-exclamation text-primary me-3"></i>
              <span>
                <strong>Not DLT-registered:</strong> Register the entity,
                header, and templates. Without this, every message is blocked at
                the operator level.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-file-text text-primary me-3"></i>
              <span>
                <strong>Template mismatch:</strong> The sent text must match the
                approved template character-for-character. Re-check variables
                and spacing.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-person-x text-primary me-3"></i>
              <span>
                <strong>Promotional message to DND numbers:</strong> Only
                transactional and service messages reach DND. Clean your
                promotional list against the registry.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-link-45deg text-primary me-3"></i>
              <span>
                <strong>Non-whitelisted URL:</strong> Use full, registered links
                only&mdash;no shorteners&mdash;or the message is silently
                blocked.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-tags text-primary me-3"></i>
              <span>
                <strong>Wrong category:</strong> An OTP sent on a promotional
                header gets time-restricted and DND-blocked. Match the category
                to the content.
              </span>
            </li>
          </ul>
        </div>

        {/* Industry Use Cases */}
        <div data-aos="fade-right">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">Industry Use Cases:</span> How Indian
            Businesses Use Bulk SMS in 2026
          </h2>
          <p>
            Bulk SMS is the channel businesses reach for when a message
            absolutely has to arrive. Because it works on every handset without
            an app, it remains the backbone of transactional communication
            across sectors&mdash; even as WhatsApp and RCS grow as engagement
            layers on top.
          </p>
          <p>
            Here is where bulk SMS delivers the most value, industry by
            industry:
          </p>

          <h3>Sector-Specific Bulk SMS Applications</h3>
          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-shop text-primary me-3"></i>
              <span>
                <strong>E-commerce &amp; Retail:</strong> Order confirmations,
                OTPs, shipping and delivery updates, COD confirmation, and
                abandoned-cart nudges&mdash;the high-priority messages a
                customer expects instantly, where SMS guarantees reach.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-bank text-primary me-3"></i>
              <span>
                <strong>Banking &amp; Fintech:</strong> Transaction alerts,
                secure OTPs, payment reminders, and fraud notifications via
                DND-exempt transactional routes, delivered 24/7 to any number.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-hospital text-primary me-3"></i>
              <span>
                <strong>Healthcare:</strong> Appointment reminders, report-ready
                alerts, and medication reminders that reduce
                no-shows&mdash;reliable even for patients on basic phones.
              </span>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="bi bi-mortarboard text-primary me-3"></i>
              <span>
                <strong>Education:</strong> Fee reminders, exam and result
                notifications, attendance alerts, and parent communication,
                where SMS reaches every guardian regardless of device.
              </span>
            </li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div data-aos="fade-left">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">Frequently Asked Questions:</span>{" "}
            Bulk SMS &amp; DLT in India
          </h2>
          <div className="accordion mt-4" id="bulkSmsFAQAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeadingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseOne"
                >
                  Is bulk SMS legal in India?
                </button>
              </h2>
              <div
                id="faqCollapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#bulkSmsFAQAccordion"
              >
                <div className="accordion-body">
                  Yes. Bulk SMS is legal provided you complete DLT registration
                  under TRAI&apos;s TCCCPR 2018 rules, use approved sender IDs
                  and templates, respect DND for promotional messages, and
                  obtain consent where required.
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
                  How much does DLT registration cost in 2026?
                </button>
              </h2>
              <div
                id="faqCollapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#bulkSmsFAQAccordion"
              >
                <div className="accordion-body">
                  A one-time entity registration fee of approximately
                  &#8377;5,000 + GST, standardised across the Jio, Airtel, Vi,
                  and BSNL portals. Some portals list it as around &#8377;5,900.
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
                  How long does DLT registration take?
                </button>
              </h2>
              <div
                id="faqCollapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#bulkSmsFAQAccordion"
              >
                <div className="accordion-body">
                  With correct documents, roughly 3&ndash;7 working days end to
                  end&mdash;about 1&ndash;3 days for the entity, 1&ndash;2 days
                  for headers, and 1&ndash;3 days per template. Document
                  mismatches add revision cycles.
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
                  What is the difference between promotional and transactional
                  SMS?
                </button>
              </h2>
              <div
                id="faqCollapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#bulkSmsFAQAccordion"
              >
                <div className="accordion-body">
                  Promotional messages are marketing content&mdash;they only
                  reach non-DND numbers during approved daytime hours and need
                  consent. Transactional messages (OTPs, bank alerts) are
                  service-critical, reach any number 24/7, and are DND-exempt
                  when correctly classified.
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
                  Can I send promotional SMS to DND numbers?
                </button>
              </h2>
              <div
                id="faqCollapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#bulkSmsFAQAccordion"
              >
                <div className="accordion-body">
                  No. Promotional content is blocked to numbers on the
                  Do-Not-Disturb registry. Only genuine transactional and
                  service messages reach DND numbers.
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
                  Why are my SMS not delivered even after registration?
                </button>
              </h2>
              <div
                id="faqCollapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#bulkSmsFAQAccordion"
              >
                <div className="accordion-body">
                  The most common cause is a template mismatch&mdash;the message
                  sent must exactly match the approved template. Other causes
                  are non-whitelisted URLs, wrong message category, and DND
                  blocking for promotional content.
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
                  What happens if I send SMS without DLT registration?
                </button>
              </h2>
              <div
                id="faqCollapseSeven"
                className="accordion-collapse collapse"
                data-bs-parent="#bulkSmsFAQAccordion"
              >
                <div className="accordion-body">
                  The messages are blocked at the operator level and never
                  delivered. You may still be billed for submission, and
                  repeated attempts can get your activity flagged for spam.
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
                  How much does bulk SMS cost in India in 2026?
                </button>
              </h2>
              <div
                id="faqCollapseEight"
                className="accordion-collapse collapse"
                data-bs-parent="#bulkSmsFAQAccordion"
              >
                <div className="accordion-body">
                  Per-SMS rates typically start from around
                  &#8377;0.11&ndash;&#8377;0.20, depending on volume, route, and
                  whether the message is transactional or promotional. Longer
                  messages split into multiple billed 160-character segments.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div data-aos="fade-right">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">
              Build Your Full Messaging Stack:
            </span>{" "}
            Bulk SMS, WhatsApp &amp; RCS
          </h2>
          <p>
            Bulk SMS is the reliable foundation&mdash;but the strongest 2026
            strategy layers it with richer channels for engagement while keeping
            SMS as the guaranteed-delivery fallback. Explore how the channels
            work together:
          </p>

          <div className="row mt-4">
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="bi bi-chat-square-text text-primary me-2"></i>
                    Bulk SMS Services
                  </h5>
                  <p className="card-text">
                    Reach every customer on any handset with DLT-compliant bulk
                    SMS, direct operator routing, and real-time delivery
                    reports&mdash;ideal for OTPs, alerts, and transactional
                    notifications.
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
                    <i className="bi bi-whatsapp text-primary me-2"></i>
                    WhatsApp Business API
                  </h5>
                  <p className="card-text">
                    Add rich, two-way conversations, catalogs, and chatbots on
                    the channel 500+ million Indians use daily&mdash;perfect for
                    engagement, support, and conversational commerce.
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
                    <i className="bi bi-broadcast text-primary me-2"></i>
                    RCS Messaging
                  </h5>
                  <p className="card-text">
                    Upgrade SMS to rich, branded, interactive messages with
                    carousels, images, and action buttons inside the native
                    Messages app&mdash;with SMS fallback for guaranteed reach.
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
        <div data-aos="fade-left">
          <h2 className="fw-bold mt-5">
            <span className="text-primary">Conclusion:</span> Send Bulk SMS That
            Actually Arrives
          </h2>
          <p>
            The hard part of bulk SMS in India is not the sending&mdash;it is
            the compliance layer underneath it. Get DLT registration, sender
            IDs, templates, and consent right, and you move from a sub-30%
            delivery rate to consistently above 95%. Get them wrong, and even a
            perfectly written campaign disappears silently before it reaches a
            single phone.
          </p>
          <p>
            For Indian businesses in 2026, bulk SMS is still the channel you
            trust with the message that has to land&mdash;the OTP, the delivery
            confirmation, the time-sensitive alert. Pair it with WhatsApp and
            RCS for engagement, and you have a messaging stack that covers every
            customer on every device.
          </p>
          <p>
            Ojiva AI handles the entire stack&mdash;DLT registration support,
            sender ID and template management, direct operator routing, and
            real-time delivery reports&mdash;so your messages land the first
            time, every time.
          </p>

          <div className="mt-5 p-4 bg-primary text-white rounded">
            <h4 className="mb-3">Ready to Launch Bulk SMS That Delivers?</h4>
            <p className="mb-4">
              Partner with Ojiva AI for DLT-compliant bulk SMS in India&mdash;
              registration support, brand-verified sender IDs, direct operator
              routing, and transparent per-SMS pricing. Reach every customer, on
              every handset, with messages that actually arrive.
            </p>
            <div className="d-flex gap-3">
              <Link href="/contact/" className="btn btn-light">
                Book a Free Bulk SMS Demo
              </Link>
              <Link
                href="https://www.ojiva.ai/sms/"
                className="btn btn-outline-light"
              >
                Explore Bulk SMS
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div data-aos="fade-right" className="mt-5">
          <h2 className="fw-bold">
            <span className="text-primary">
              Choose Ojiva AI for DLT-Compliant Bulk SMS
            </span>
          </h2>
          <p>
            Indian businesses trust Ojiva AI for bulk SMS that clears DLT
            scrubbing and reaches the inbox. From entity, header, and template
            registration through direct operator routing and delivery reporting,
            we make sure every campaign is compliant, fast, and measurable.
          </p>

          <div className="row mt-4">
            <div className="col-md-3 mb-3 text-center">
              <i
                className="bi bi-shield-check text-primary"
                style={{ fontSize: "3rem" }}
              ></i>
              <h5 className="mt-3">DLT Compliance</h5>
              <p>
                Entity, header &amp; template registration handled end to end
              </p>
            </div>
            <div className="col-md-3 mb-3 text-center">
              <i
                className="bi bi-lightning-charge-fill text-primary"
                style={{ fontSize: "3rem" }}
              ></i>
              <h5 className="mt-3">Direct Operator Routing</h5>
              <p>High-deliverability routes, not cheap grey routes</p>
            </div>
            <div className="col-md-3 mb-3 text-center">
              <i
                className="bi bi-bar-chart text-primary"
                style={{ fontSize: "3rem" }}
              ></i>
              <h5 className="mt-3">Real-Time Reports</h5>
              <p>Track delivered, failed &amp; DND-blocked rates live</p>
            </div>
            <div className="col-md-3 mb-3 text-center">
              <i
                className="bi bi-headset text-primary"
                style={{ fontSize: "3rem" }}
              ></i>
              <h5 className="mt-3">Expert Support</h5>
              <p>Guidance from registration to your first delivered campaign</p>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link href="/contact/" className="btn btn-primary me-3">
              Get Started with Bulk SMS
            </Link>
            <Link
              href="https://www.ojiva.ai/blogs/"
              className="btn btn-outline-primary"
            >
              Learn More About Solutions
            </Link>
          </div>
        </div>

        {/* E-E-A-T sources */}
        <p className="text-muted small mt-5">
          Sources: TRAI &mdash; TCCCPR 2018 (trai.gov.in); operator DLT portals
          (Jio, Airtel SmartPing, Vi, BSNL). Rates and timelines verified
          against current operator portals as of mid-2026; confirm current fees
          before registering.
        </p>
      </div>
    </>
  );
};

export default Jun01;
