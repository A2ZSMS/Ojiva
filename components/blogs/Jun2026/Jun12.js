import React from "react";

const Jun12 = () => {
  return (
    <>
      <div className="container para-color py-4">
        {/* H1 */}
        <h2 className="text-primary py-4">
          DLT Registration for Bulk SMS in India: 2026 Step-by-Step Guide
        </h2>

        {/* Introduction — GEO snippet answer first */}
        <section className="mb-5">
          <p>
            <strong>DLT registration</strong> is the TRAI-mandated process that
            every business must complete before sending commercial SMS in India.
            Under the TCCCPR 2018, you register three things on a DLT
            (Distributed Ledger Technology) operator portal — your{" "}
            <strong>entity</strong>, your <strong>sender IDs (headers)</strong>{" "}
            and your <strong>message templates</strong> — so operators can
            verify and deliver your messages. It costs about{" "}
            <strong>₹5,900 + GST</strong> one-time and takes roughly{" "}
            <strong>3–7 working days</strong>. Skipping it is not an option:
            unregistered SMS is simply blocked at the operator level. Worse,
            even registered senders see messages fail "silently" when content
            does not exactly match an approved template. This guide walks the
            full process step by step, lists the real fees and timelines for
            2026, and shows you the scrubbing traps that quietly kill delivery —
            so your first campaign actually lands. If you would rather have it
            handled for you, Ojiva AI guides DLT setup as part of onboarding to
            our <a href="/sms/">bulk SMS service</a>. But it pays to understand
            the process either way.
          </p>
        </section>

        {/* What is DLT */}
        <section className="mb-5">
          <h2 className="fw-bold">What Is DLT Registration?</h2>

          <p>
            DLT stands for Distributed Ledger Technology — a blockchain-based
            system that India's telecom operators use to record and verify who
            is allowed to send commercial SMS. TRAI introduced it under the
            Telecom Commercial Communications Customer Preference Regulations
            (TCCCPR) 2018 to stamp out spam and unsolicited messages. The
            principle is simple: if your entity, sender ID and exact message
            content are not on the ledger, the message does not go out.
          </p>

          <p>
            Every commercial SMS is checked in real time against these
            registered records — a process called scrubbing — before an operator
            delivers it. That is why DLT registration is the foundation of
            reliable SMS in India, not an optional formality.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-shield-check text-primary me-3 fs-4"></i>
            <span>
              <b>Mandatory for commercial SMS:</b> Promotional, transactional,
              service and OTP SMS all require DLT registration. Person-to-person
              messages do not.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-diagram-3-fill text-primary me-3 fs-4"></i>
            <span>
              <b>One ledger, all operators:</b> Jio, Airtel, Vi and BSNL share
              the same DLT backbone, so you register once and it applies
              network-wide.
            </span>
          </div>
        </section>

        <div>
          <img loading="lazy" decoding="async"
            className="mt-3"
            width="100%"
            height="auto"
            src="/image/jun12(2).webp"
            alt="WhatsApp Business API Pricing in India 2026"
          />
        </div>

        {/* Who needs it */}
        <section className="mb-5">
          <h2 className="fw-bold">Who Needs to Register?</h2>

          <p>
            Any business or organisation that sends commercial SMS to Indian
            mobile numbers needs DLT registration — regardless of size or
            volume. If you send OTPs, order updates, reminders, alerts or
            promotions, you are a Principal Entity (PE) in DLT terms and must be
            on the ledger.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-bank2 text-primary me-3 fs-4"></i>
            <span>
              <b>Banks, fintech and NBFCs:</b> OTPs, transaction alerts, EMI and
              KYC messages.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-cart-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>E-commerce and retail:</b> Order confirmations, delivery
              updates, offers and cart reminders.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-hospital-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Healthcare, education, logistics and services:</b> Appointment,
              fee, shipment and renewal messages — essentially every business
              that texts customers.
            </span>
          </div>
        </section>

        {/* The 3 things you register */}
        <section className="mb-5">
          <h2 className="fw-bold">
            The 3 Things You Register: Entity, Header &amp; Template
          </h2>

          <p>
            DLT registration is not one form — it is three linked registrations
            that must agree with each other. Getting the relationship right is
            what prevents failures later.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-building-fill text-primary me-3 fs-4"></i>
            <span>
              <b>1. Principal Entity (PE):</b> Your business itself — verified
              with GST/PAN and incorporation documents. This is the paid,
              one-time registration.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-fonts text-primary me-3 fs-4"></i>
            <span>
              <b>2. Header (Sender ID):</b> The 6-character alphanumeric ID
              customers see, e.g. OJIVAI. Each header is tied to a category
              (promotional, transactional or service).
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-file-earmark-text-fill text-primary me-3 fs-4"></i>
            <span>
              <b>3. Content Template:</b> The exact message text, with variables
              as {"{#var#}"}. Every content variation must be approved before
              you can send it.
            </span>
          </div>
        </section>

        {/* Step by step */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Step-by-Step: How to Complete DLT Registration
          </h2>

          <p>
            Here is the full process from zero to your first compliant campaign.
            Have your GST, PAN and incorporation documents ready before you
            start — missing paperwork is the number-one cause of delay.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-1-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Step 1 — Choose a DLT operator portal:</b> Register on any one
              of Jio, Vodafone Idea (Vilpower), Airtel (SmartPing) or BSNL. You
              only need one; the ledger syncs your data across all networks.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-2-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Step 2 — Register your Principal Entity (PE):</b> Submit
              business details, GST/PAN, authorised-signatory and address proof,
              and pay the ~₹5,900 + GST one-time fee. You receive a unique PE
              ID, usually in 1–3 working days.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-3-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Step 3 — Register your Header (Sender ID):</b> Request a
              6-character header under the right category. TRAI now requires the
              header to indicate the message type, so map promotional,
              transactional and service traffic to the correct headers. Approval
              is typically 1–2 days.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-4-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Step 4 — Register your Content Templates:</b> Submit each
              message with fixed text and variables written exactly as{" "}
              {"{#var#}"}. Choose the matching category. Each template is
              usually approved in 1–3 days.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-5-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Step 5 — Map to your SMS provider and send:</b> Link your
              approved entity, headers and templates to your{" "}
              <a href="/sms/">bulk SMS platform</a>, capture consent for
              promotional sends, and launch. Messages now pass scrubbing and
              deliver.
            </span>
          </div>
        </section>

        {/* Fees & timeline table — E-E-A-T real INR / snippet bait */}
        <section className="mb-5">
          <h2 className="fw-bold">
            DLT Registration Fees &amp; Timeline (2026)
          </h2>

          <p>
            Here is the honest cost-and-time picture so you can plan. Fees are
            one-time; the headline cost is the entity registration, while
            headers and templates are usually free on most portals.
          </p>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Registration step</th>
                  <th>Typical fee (2026)</th>
                  <th>Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Principal Entity (PE)</b>
                  </td>
                  <td>~₹5,900 + GST (one-time)</td>
                  <td>1–3 working days</td>
                </tr>
                <tr>
                  <td>
                    <b>Header (Sender ID)</b>
                  </td>
                  <td>Usually free</td>
                  <td>1–2 working days</td>
                </tr>
                <tr>
                  <td>
                    <b>Content Template</b>
                  </td>
                  <td>Usually free</td>
                  <td>1–3 working days each</td>
                </tr>
                <tr>
                  <td>
                    <b>Total to go live</b>
                  </td>
                  <td>~₹5,900 + GST</td>
                  <td>~3–7 working days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-info-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Fees vary by operator:</b> Airtel SmartPing and Jio commonly
              charge around ₹5,900 + GST for entity registration. Confirm the
              current fee on your chosen portal before you pay.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-hourglass-split text-primary me-3 fs-4"></i>
            <span>
              <b>Plan a buffer:</b> Timelines assume clean documents. A mismatch
              on GST name or signatory proof can add days, so submit carefully
              the first time.
            </span>
          </div>
        </section>

        {/* Header & template rules */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Header &amp; Template Rules That Trip People Up
          </h2>

          <p>
            Most DLT pain is not in registering — it is in getting templates
            approved and keeping sent content matched to them. These are the
            rules that catch teams out.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-braces text-primary me-3 fs-4"></i>
            <span>
              <b>Variables must be exactly {"{#var#}"}:</b> Not [name], not{" "}
              {"{{otp}}"}, not %s. Use {"{#var#}"} for every dynamic field, or
              the template is rejected.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-type text-primary me-3 fs-4"></i>
            <span>
              <b>Static text must match character-for-character:</b> The fixed
              parts of a sent message must match the approved template exactly —
              an extra space, emoji or word breaks the match.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-ui-checks text-primary me-3 fs-4"></i>
            <span>
              <b>Category must match content:</b> Marketing wording under a
              transactional header is rejected. Keep promotional, transactional
              and service templates under the right header.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-link-45deg text-primary me-3 fs-4"></i>
            <span>
              <b>Whitelist your URLs:</b> Links in transactional templates must
              be whitelisted. A non-whitelisted or shortened URL is a common
              silent rejection.
            </span>
          </div>
        </section>

        {/* Silent blocking */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Silent Blocking: Why Your SMS Fails Scrubbing
          </h2>

          <p>
            The most frustrating problem in Indian SMS is messages that show as
            "failed" with no obvious reason. This is almost never a network
            issue — it is DLT scrubbing rejecting a mismatch in real time.
            Scrubbing checks your PE ID, header, content template ID, the
            PE-to-telemarketer binding chain and the recipient's DND status on
            every single message. If any one fails, the message is dropped.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-x-octagon-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Template mismatch:</b> Sent content differs from the approved
              template — the most common cause. Fix the content or update and
              re-submit the template.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-tags-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Wrong category:</b> Promotional content sent on a transactional
              route gets scrubbed. Match the message to the right header and
              template category.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-slash-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Header issues:</b> An inactive, blacklisted or mismatched
              header — or one that does not pair with the template — fails the
              binding check.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-person-x-fill text-primary me-3 fs-4"></i>
            <span>
              <b>DND on promotional:</b> Promotional SMS to numbers on the
              DND/NCPR list is blocked. Transactional and service messages and
              OTPs are not affected by DND.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-clipboard2-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Read your delivery report:</b> A "failed" status with a DLT
              error code points to the exact mismatch. A good provider surfaces
              these so you can fix the template, not blame the network.
            </span>
          </div>
        </section>
        {/* Ojiva: handles registration */}
        <section className="mb-5">
          <h2 className="fw-bold">
            How Ojiva AI Handles Your DLT Registration
          </h2>

          <p>
            DLT is three linked records that must agree — and that's exactly
            where teams stumble. Ojiva AI sets it all up for you as part of
            onboarding to our <a href="/sms/">bulk SMS service</a>.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-card-checklist text-primary me-3 fs-4"></i>
            <span>
              <b>Document guidance:</b> We tell you exactly which GST, PAN and
              authorisation papers you need — so you clear entity approval the
              first time.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-diagram-3-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Entity, header &amp; template setup:</b> We register and map
              all three, in the correct categories, so they bind cleanly at
              scrubbing.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-ui-checks text-primary me-3 fs-4"></i>
            <span>
              <b>Category mapping done right:</b> Promotional, transactional and
              service traffic routed to the correct headers — no mismatched
              rejections.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-rocket-takeoff-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Faster go-live:</b> We keep the 3–7 day timeline on track and
              handle the back-and-forth. <a href="/book-demo/">Book a demo</a>{" "}
              to get sending.
            </span>
          </div>
        </section>

        {/* Ojiva: prevents silent failures */}
        <section className="mb-5">
          <h2 className="fw-bold">How Ojiva AI Prevents Silent SMS Failures</h2>

          <p>
            The worst DLT problem is messages that fail with no clear reason.
            Ojiva AI's platform catches the mismatch before it costs you a
            campaign.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-check2-square text-primary me-3 fs-4"></i>
            <span>
              <b>Template-match validation:</b> We check sent content against
              your approved template — including {"{#var#}"} placeholders — so
              it passes scrubbing.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-clipboard2-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Readable error codes:</b> When a message fails, we surface the
              exact DLT reason so you fix the template, not blame the network.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-link-45deg text-primary me-3 fs-4"></i>
            <span>
              <b>URL whitelisting help:</b> We flag non-whitelisted or shortened
              links — a common silent rejection — before you send.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-bar-chart-line-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Live delivery reports:</b> Real-time DLRs show what landed and
              what bounced, so issues are caught in minutes, not campaigns.
            </span>
          </div>
        </section>
        <div>
          <img loading="lazy" decoding="async"
            className="mt-3"
            width="100%"
            height="auto"
            src="/image/jun12(3).webp"
            alt="WhatsApp Business API Pricing in India 2026"
          />
        </div>

        {/* Ojiva: platform features */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Ojiva AI's Bulk SMS Platform: What You Get
          </h2>

          <p>
            Beyond compliance, the platform itself is built to make high-volume
            SMS simple, fast and measurable.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-calendar-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Scheduling &amp; campaigns:</b> Plan, schedule and personalise
              template campaigns from one dashboard — within the 9am–9pm promo
              window automatically.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-speedometer2 text-primary me-3 fs-4"></i>
            <span>
              <b>High-throughput OTP route:</b> A priority path keeps login
              codes landing in seconds, even during bulk sends.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-code-slash text-primary me-3 fs-4"></i>
            <span>
              <b>Simple REST API:</b> Fire SMS from your app, CRM or backend on
              real events — order placed, payment due, code requested.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-files text-primary me-3 fs-4"></i>
            <span>
              <b>Multi-template management:</b> Store and reuse all your
              approved templates and language variants, so you're never blocked
              mid-campaign.
            </span>
          </div>
        </section>

        {/* Ojiva: beyond SMS */}
        <section className="mb-5">
          <h2 className="fw-bold">
            One Platform Beyond SMS: WhatsApp, OTP, RCS &amp; Voice
          </h2>

          <p>
            SMS rarely works alone. With Ojiva AI, every channel lives on one
            platform — so a message that fails on one route has a fallback on
            another.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-whatsapp text-primary me-3 fs-4"></i>
            <span>
              <b>WhatsApp Business API:</b> Add rich, conversational messaging
              with no DLT needed — see{" "}
              <a href="/blogs/whatsapp-business-app-vs-api/">App vs API</a>.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-shield-lock-fill text-primary me-3 fs-4"></i>
            <span>
              <b>OTP across channels:</b> <a href="/otp/">OTP &amp; 2FA</a> over
              SMS, WhatsApp and voice with automatic fallback, so logins never
              stall.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-telephone-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Voice &amp; RCS:</b> Layer in <a href="/voice/">voice</a>{" "}
              reminders and branded RCS from the same dashboard and contact
              data.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-grid-1x2-fill text-primary me-3 fs-4"></i>
            <span>
              <b>One dashboard, one team:</b> Manage every channel, report and
              compliance setting in one place — no juggling vendors.
            </span>
          </div>
        </section>
        {/* Documents checklist */}
        <section className="mb-5">
          <h2 className="fw-bold">Documents You Need for DLT Registration</h2>

          <p>
            Missing paperwork is the number-one cause of delay. Have these ready
            before you start your entity registration and you'll clear approval
            in the first attempt.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-file-earmark-text-fill text-primary me-3 fs-4"></i>
            <span>
              <b>GST certificate &amp; PAN:</b> Company PAN plus the GST
              certificate — the name must match exactly across both and your
              entity application.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-building-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Incorporation / business proof:</b> Certificate of
              Incorporation, partnership deed, or shop &amp; establishment
              registration, depending on your entity type.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-person-badge-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Authorised signatory ID:</b> PAN/Aadhaar of the signatory plus
              a Letter of Authorisation on company letterhead.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-geo-alt-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Address &amp; contact proof:</b> Registered address proof, a
              company email and (often) a verifiable website or domain.
            </span>
          </div>
        </section>
        {/* SMS categories */}
        <section className="mb-5">
          <h2 className="fw-bold">
            SMS Categories: Promotional, Transactional &amp; Service
          </h2>

          <p>
            Every header and template is tied to a category, and the category
            decides the rules — including whether DND applies. Picking the wrong
            one is a top reason messages get scrubbed.
          </p>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Category</th>
                  <th>Used for</th>
                  <th>DND applies?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Promotional</b>
                  </td>
                  <td>Offers, discounts, marketing blasts</td>
                  <td>Yes (9am–9pm, opt-in)</td>
                </tr>
                <tr>
                  <td>
                    <b>Transactional</b>
                  </td>
                  <td>Banking OTPs, transaction alerts</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>
                    <b>Service (implicit)</b>
                  </td>
                  <td>Order/delivery updates to existing customers</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>
                    <b>Service (explicit)</b>
                  </td>
                  <td>Promotional-style messages to opted-in users</td>
                  <td>Needs consent</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-key-fill text-primary me-3 fs-4"></i>
            <span>
              <b>OTPs sit under transactional/authentication:</b> They're
              DND-exempt and high priority, which is why login codes still land
              on numbers that block promotions.
            </span>
          </div>
        </section>
        {/* Ongoing costs */}
        <section className="mb-5">
          <h2 className="fw-bold">
            DLT Costs Beyond Registration: What You Pay to Send
          </h2>

          <p>
            The ~₹5,900 + GST entity fee is one-time. Once you're live, your
            ongoing cost is per-message — and it's worth knowing the parts so a
            quote can't surprise you.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-cash-stack text-primary me-3 fs-4"></i>
            <span>
              <b>Per-SMS charge:</b> A few paise per SMS, varying by volume,
              route (promotional vs transactional) and provider. Higher volume
              lowers the rate.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-search text-primary me-3 fs-4"></i>
            <span>
              <b>Scrubbing charge:</b> A nominal per-message fee operators levy
              for the real-time DLT check — usually bundled into your SMS rate.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-arrow-repeat text-primary me-3 fs-4"></i>
            <span>
              <b>No recurring entity fee:</b> Header and template registration
              are typically free, and you don't re-pay the entity fee — you only
              pay for messages sent.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-receipt text-primary me-3 fs-4"></i>
            <span>
              <b>Add 18% GST:</b> GST applies on SMS spend. A transparent
              provider shows the route rate and GST separately — compare on our{" "}
              <a href="/blogs/best-bulk-sms-service-provider-india/">
                bulk SMS provider guide
              </a>
              .
            </span>
          </div>
        </section>
        {/* OTP & high-priority */}
        <section className="mb-5">
          <h2 className="fw-bold">DLT for OTP &amp; High-Priority Messages</h2>

          <p>
            OTPs are the most delivery-critical SMS you send — and DLT treats
            them differently from marketing. Getting this right means codes that
            land in seconds, every time.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-shield-lock-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Use authentication/transactional templates:</b> Register OTP
              content with the code as {"{#var#}"} under the correct category,
              or it won't pass scrubbing.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-person-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>DND-exempt:</b> OTP and transactional messages reach numbers on
              the DND/NCPR list — unlike promotional SMS.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-speedometer2 text-primary me-3 fs-4"></i>
            <span>
              <b>Prioritise a high-throughput route:</b> OTP traffic needs
              low-latency delivery; a dedicated route keeps codes from queuing
              behind bulk campaigns.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-arrow-left-right text-primary me-3 fs-4"></i>
            <span>
              <b>Plan a fallback:</b> If an SMS OTP fails, a WhatsApp or voice
              fallback rescues the login — our <a href="/otp/">OTP &amp; 2FA</a>{" "}
              service spans all three.
            </span>
          </div>
        </section>
        {/* DND, consent & timing */}
        <section className="mb-5">
          <h2 className="fw-bold">
            DND, Consent &amp; Timing Rules You Must Follow
          </h2>

          <p>
            DLT registration gets you delivery; these rules keep you compliant
            and your entity in good standing. They apply mainly to promotional
            traffic.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-person-x-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Respect DND/NCPR:</b> Promotional SMS to numbers on the
              National Customer Preference Register is blocked at scrubbing —
              clean your lists against it.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-clock-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Send promos 9am–9pm only:</b> TRAI restricts promotional sends
              to daytime hours. Transactional and OTP messages have no time
              limit.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-hand-thumbs-up-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Keep consent proof:</b> Maintain opt-in records for promotional
              recipients — your defence if a complaint is raised.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-box-arrow-right text-primary me-3 fs-4"></i>
            <span>
              <b>Offer a clear opt-out:</b> An easy STOP/unsubscribe protects
              your sender reputation and your quality of delivery over time.
            </span>
          </div>
        </section>
        {/* DLT vs channels */}
        <section className="mb-5">
          <h2 className="fw-bold">
            DLT vs Other Channels: SMS, WhatsApp, RCS &amp; Voice
          </h2>

          <p>
            DLT is SMS-specific. If you message across channels, each has its
            own compliance route — here's the quick map.
          </p>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Channel</th>
                  <th>Compliance route</th>
                  <th>Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>SMS</b>
                  </td>
                  <td>DLT (TRAI/TCCCPR)</td>
                  <td>OTPs, alerts, universal reach</td>
                </tr>
                <tr>
                  <td>
                    <b>WhatsApp</b>
                  </td>
                  <td>Meta verification + templates</td>
                  <td>Rich, conversational, media</td>
                </tr>
                <tr>
                  <td>
                    <b>RCS</b>
                  </td>
                  <td>Google / operator onboarding</td>
                  <td>Branded, rich messaging</td>
                </tr>
                <tr>
                  <td>
                    <b>Voice (OBD/IVR)</b>
                  </td>
                  <td>TRAI/TCCCPR &amp; consent</td>
                  <td>Reminders, confirmations, calls</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-info-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>No DLT for WhatsApp or RCS:</b> See{" "}
              <a href="/blogs/whatsapp-business-app-vs-api/">
                WhatsApp Business App vs API
              </a>{" "}
              for how WhatsApp verification works, and add{" "}
              <a href="/voice/">voice</a> for confirmations.
            </span>
          </div>
        </section>
        {/* Penalties */}
        <section className="mb-5">
          <h2 className="fw-bold">
            The Risks of Skipping or Breaking DLT Rules
          </h2>

          <p>
            DLT isn't optional, and non-compliance costs more than a blocked
            message. Here's what's actually at stake.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-x-octagon-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Messages simply don't deliver:</b> Unregistered SMS is blocked
              at the operator level — no entity, header and template means no
              delivery, full stop.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-slash-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Header blacklisting:</b> Repeated violations can get your
              sender ID blacklisted, killing a brand identity customers
              recognise.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-exclamation-triangle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Entity suspension &amp; penalties:</b> Spam complaints and rule
              breaches can trigger graded financial penalties and even
              suspension of your registered entity.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-graph-down-arrow text-primary me-3 fs-4"></i>
            <span>
              <b>Reputation damage:</b> A poor sending record drags down
              delivery for all your future traffic — hard to undo, easy to
              avoid.
            </span>
          </div>
        </section>

        {/* Best practices */}
        <section className="mb-5">
          <h2 className="fw-bold">DLT Compliance Best Practices</h2>

          <p>
            Once you are registered, a few habits keep delivery high and your
            entity in good standing.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-files text-primary me-3 fs-4"></i>
            <span>
              <b>Pre-register template variations:</b> Register every wording
              you expect to use, including language variants, so you are never
              blocked mid-campaign.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-hand-thumbs-up-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Keep clean consent records:</b> Maintain opt-in proof for
              promotional sends — it protects your entity if a complaint is
              raised.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-people-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Use a provider that manages DLT for you:</b> The easiest path
              is a platform that handles entity, header and template mapping and
              flags scrubbing errors. See our{" "}
              <a href="/blogs/best-bulk-sms-service-provider-india/">
                guide to the best bulk SMS service provider in India
              </a>{" "}
              for what to look for.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-shield-lock-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Remember other channels differ:</b> WhatsApp and RCS do not use
              DLT — see{" "}
              <a href="/blogs/whatsapp-business-app-vs-api/">
                WhatsApp Business App vs API
              </a>{" "}
              for how WhatsApp verification works instead. For login codes, our{" "}
              <a href="/otp/">OTP &amp; 2FA</a> service spans SMS, WhatsApp and
              voice.
            </span>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-5">
          <h2 className="fw-bold">Conclusion</h2>

          <p>
            DLT registration looks bureaucratic, but it is straightforward once
            you see it as three linked records — entity, header and template —
            that must agree. Budget around ₹5,900 + GST and 3–7 working days,
            write your variables as {"{#var#}"}, keep content matched to
            approved templates, and you will avoid the silent scrubbing failures
            that frustrate most senders.
          </p>

          <p>
            If you would rather skip the paperwork, Ojiva AI handles DLT entity,
            header and template setup as part of onboarding to our{" "}
            <a href="/sms/">bulk SMS service</a>, and flags scrubbing errors
            before they cost you a campaign.{" "}
            <a href="/book-demo/">Book a demo</a> to get registered and sending
            faster.
          </p>
        </section>

        {/* Author — E-E-A-T */}
        <section className="mb-5">
          <p className="text-muted">
            <em>By Ananth · Updated 12 June 2026</em>
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-5">
          <div data-aos="fade-left">
            <h2 className="fw-bold mt-5">
              <span className="text-primary">Frequently Asked Questions:</span>{" "}
              DLT Registration for Bulk SMS
            </h2>

            <div className="accordion mt-4" id="dltFAQ">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dltFaq1"
                  >
                    What is DLT registration for bulk SMS in India?
                  </button>
                </h2>
                <div
                  id="dltFaq1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#dltFAQ"
                >
                  <div className="accordion-body">
                    DLT (Distributed Ledger Technology) registration is a
                    TRAI-mandated process under the TCCCPR 2018. Every business
                    sending commercial SMS in India must register its entity,
                    sender IDs (headers) and message templates on a DLT operator
                    portal before messages will be delivered.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dltFaq2"
                  >
                    How much does DLT registration cost in India?
                  </button>
                </h2>
                <div
                  id="dltFaq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#dltFAQ"
                >
                  <div className="accordion-body">
                    Principal Entity (telemarketer) registration costs around
                    ₹5,900 plus GST as a one-time fee on operator portals such
                    as Airtel SmartPing and Jio. Header and template
                    registration are typically free on most portals.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dltFaq3"
                  >
                    How long does DLT registration take?
                  </button>
                </h2>
                <div
                  id="dltFaq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#dltFAQ"
                >
                  <div className="accordion-body">
                    If your documents are in order, the full process takes about
                    3–7 working days: entity registration approves in 1–3 days,
                    header registration in 1–2 days after the entity is live,
                    and each template in 1–3 days.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dltFaq4"
                  >
                    Do I need to register on all four DLT portals?
                  </button>
                </h2>
                <div
                  id="dltFaq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#dltFAQ"
                >
                  <div className="accordion-body">
                    No. You register on one operator portal — Jio, Vodafone Idea
                    (Vi), Airtel or BSNL — and the data is shared across all
                    four through the DLT blockchain backbone.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dltFaq5"
                  >
                    What is a header (sender ID) in DLT?
                  </button>
                </h2>
                <div
                  id="dltFaq5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#dltFAQ"
                >
                  <div className="accordion-body">
                    A header is the 6-character alphanumeric sender ID customers
                    see as the SMS sender, for example OJIVAI. Each header is
                    registered against a category (promotional, transactional,
                    service) and must match the templates sent under it.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dltFaq6"
                  >
                    Why are my SMS failing even after DLT registration?
                  </button>
                </h2>
                <div
                  id="dltFaq6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#dltFAQ"
                >
                  <div className="accordion-body">
                    Almost always a scrubbing mismatch, not a network fault.
                    Common causes are content that does not match the approved
                    template, variables not written as {"{#var#}"}, promotional
                    content sent under a transactional header, non-whitelisted
                    URLs, or a header–template mismatch.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dltFaq7"
                  >
                    How should variables be written in a DLT template?
                  </button>
                </h2>
                <div
                  id="dltFaq7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#dltFAQ"
                >
                  <div className="accordion-body">
                    Every dynamic field must use the exact placeholder{" "}
                    {"{#var#}"}. Formats like [name], {"{{otp}}"} or %s are
                    rejected. The static (fixed) text must match the approved
                    template character-for-character.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dltFaq8"
                  >
                    Does WhatsApp or RCS need DLT registration?
                  </button>
                </h2>
                <div
                  id="dltFaq8"
                  className="accordion-collapse collapse"
                  data-bs-parent="#dltFAQ"
                >
                  <div className="accordion-body">
                    No. DLT is specific to SMS. WhatsApp uses Meta verification
                    and template approval; RCS uses Google/operator onboarding.
                    Only SMS requires DLT entity, header and template
                    registration.
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

export default Jun12;
