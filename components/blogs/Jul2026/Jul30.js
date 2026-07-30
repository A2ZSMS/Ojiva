"use client";

import React, { useEffect, useState } from "react";

// ── Table of contents (full section titles, in reading order) ──
const TOC_ITEMS = [
  { id: "introduction", label: "Introduction" },
  {
    id: "what-is-chatbot",
    label: "How a WhatsApp Chatbot Company in Bangalore Actually Works",
  },
  {
    id: "choose-agency",
    label: "How to Choose the Right WhatsApp Chatbot Agency in Bangalore",
  },
  {
    id: "features-checklist",
    label:
      "What to Look for in a WhatsApp Chatbot Development Company in Bangalore",
  },
  {
    id: "pricing",
    label: "WhatsApp Chatbot Pricing From a Bangalore Service Provider",
  },
  {
    id: "industries",
    label: "Which Bangalore Industries Get the Most from a WhatsApp Chatbot",
  },
  {
    id: "get-started",
    label: "Getting Started With a WhatsApp Automation Company in Bangalore",
  },
  {
    id: "compliance-support",
    label: "Meta Verification, Compliance and Local Support in Bangalore",
  },
  {
    id: "why-ojiva-ai",
    label: "Why Ojiva AI Is the Top WhatsApp Chatbot Company in Bangalore",
  },
  { id: "faq", label: "FAQs" },
];

// ── Related WhatsApp blogs for the sidebar (first one is featured) ──
const RELATED_BLOGS = [
  {
    slug: "best-whatsapp-chatbot-for-business-in-india",
    title: "Best WhatsApp Chatbot for Business in India",
    img: "/image/jul20(1).webp",
  },
  {
    slug: "best-whatsapp-business-api-provider-in-india",
    title: "Best WhatsApp Business API Provider in India",
    img: "/image/jul24(1).webp",
  },
  {
    slug: "best-whatsapp-api-service-provider-in-bangalore",
    title: "Best WhatsApp API Service Provider in Bangalore",
    img: "/image/jul15(1).webp",
  },
  {
    slug: "best-whatsapp-business-cloud-api-service-provider-in-bangalore",
    title: "Best WhatsApp Business Cloud API Service Provider in Bangalore",
    img: "/image/jul13(1).webp",
  },
  {
    slug: "whatsapp-business-api-for-real-estate",
    title: "WhatsApp Business API for Real Estate",
    img: "/image/jul23(1).webp",
  },
  {
    slug: "best-whatsapp-bsp-india",
    title: "How to Choose a WhatsApp BSP in India",
    img: "/image/jun13(1).webp",
  },
  {
    slug: "whatsapp-business-api-pricing-india",
    title: "WhatsApp Business API Pricing in India: Cost Breakdown",
    img: "/image/jun2(1).webp",
  },
  {
    slug: "whatsapp-api-message-templates-india",
    title: "WhatsApp API Message Templates for Indian Businesses",
    img: "/image/jun17(1).webp",
  },
  {
    slug: "whatsapp-business-app-vs-api",
    title: "WhatsApp Business App vs API: Which Do You Need?",
    img: "/image/jun10(1).webp",
  },
  {
    slug: "whatsapp-business-api-vs-regular-whatsapp-indian-businesses",
    title: "WhatsApp Business API vs Regular WhatsApp for Indian Businesses",
    img: "/image/whatsapp(1).webp",
  },
];

// ── Copy-link button uses this post's canonical URL ──
const SHARE_URL =
  "https://www.ojiva.ai/blogs/best-whatsapp-chatbot-service-provider-in-bangalore/";

// ── Ojiva AI official social profiles ──
const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/112715285/",
  x: "https://x.com/OjivaAi",
  facebook: "https://www.facebook.com/profile.php?id=61586231230793",
  instagram: "https://www.instagram.com/ojiva.ai/",
  youtube: "https://www.youtube.com/@ojivaai",
};

const Jul30 = () => {
  const [activeId, setActiveId] = useState("introduction");
  const [copied, setCopied] = useState(false);

  // Copy the post URL to the clipboard, with brief "copied" feedback
  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(SHARE_URL)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        })
        .catch(() => {});
    }
  };

  // Scroll-spy — highlight the section currently in view
  useEffect(() => {
    const sections = TOC_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean);
    if (!sections.length) return;

    // Track every section's visibility so we can always pick the
    // top-most one currently on screen (robust across callback batches).
    const visibility = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visibility.set(e.target.id, e.isIntersecting));
        const current = TOC_ITEMS.find((item) => visibility.get(item.id));
        if (current) setActiveId(current.id);
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Smooth-scroll to a section, offset for the sticky navbar
  const handleTocClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <>
      {/* Justify body text (flush left + right), like the reference */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .jul30-article p,
            .jul30-article .d-flex > span,
            .jul30-article .accordion-body {
              text-align: justify;
              text-justify: inter-word;
            }
            .jul30-toc-link {
              color: #5b6270;
              font-weight: 400;
              line-height: 1.45;
              transition: color .15s ease;
            }
            .jul30-toc-link:hover,
            .jul30-toc-link.active {
              color: var(--primary, #1B48E0);
            }
            .jul30-toc-link.active {
              font-weight: 600;
            }
            .jul30-share-btn {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              padding: 0;
              border-radius: 50%;
              border: 1px solid rgba(15, 23, 42, 0.12);
              background: #ffffff;
              color: #1b2330;
              transition: background .15s ease, color .15s ease, border-color .15s ease;
              cursor: pointer;
            }
            .jul30-share-btn:hover {
              background: var(--primary, #1B48E0);
              border-color: var(--primary, #1B48E0);
              color: #ffffff;
            }
          `,
        }}
      />
      <div className="container para-color py-4">
        <div className="row g-4 g-lg-5">
          {/* ── Main article column ───────────────────── */}
          <div className="col-lg-8 jul30-article">
            {/* H1 — Primary keyword, used once */}
            <h2 className="text-primary py-4">
              Best WhatsApp Chatbot Service Provider in Bangalore
            </h2>

            {/* Social share bar */}
            <div className="d-flex align-items-center flex-wrap gap-2 mb-4">
              <span className="text-muted small me-1">Share this post</span>

              <button
                type="button"
                onClick={handleCopyLink}
                className="jul30-share-btn"
                aria-label="Copy link"
                title={copied ? "Link copied!" : "Copy link"}
              >
                {copied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.5.5 0 0 1 .04-.045z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                  </svg>
                )}
              </button>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="jul30-share-btn"
                aria-label="Ojiva AI on LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>

              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="jul30-share-btn"
                aria-label="Ojiva AI on X"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="jul30-share-btn"
                aria-label="Ojiva AI on Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="jul30-share-btn"
                aria-label="Ojiva AI on Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>

              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="jul30-share-btn"
                aria-label="Ojiva AI on YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Introduction — answer-first, primary keyword once in the first 100 words */}
            <section id="introduction" className="mb-4">
              <p>
                Every WhatsApp chatbot vendor in Bangalore says the same three
                things on their homepage fast setup, AI-powered replies, "trusted
                by growing businesses." So how do you actually separate the{" "}
                <strong>best WhatsApp chatbot service provider in Bangalore</strong>{" "}
                from a reseller running someone else's platform under a new logo?
                The real differences show up once you ask about Meta verification,
                whether pricing is written down anywhere in INR, and whether support
                means a Bangalore-based team or a ticket routed to another city.
                This guide walks through how a local WhatsApp chatbot company
                actually works, what separates a genuine provider from a reseller,
                what it costs, and how to get started. Already using the{" "}
                <a href="/whatsapp/">WhatsApp Business API</a>? See our{" "}
                <a href="/whatsapp-chatbot/">AI chatbot</a> in action, read what
                makes the{" "}
                <a href="/blogs/best-whatsapp-api-service-provider-in-bangalore/">
                  best WhatsApp API provider in Bangalore
                </a>
                , or <a href="/book-demo/">book a free demo</a> to see it live.
              </p>
            </section>

            <div>
              <img
                loading="lazy"
                decoding="async"
                className="mt-1"
                width="100%"
                height="auto"
                src="/image/jul30(1).webp"
                alt="Best WhatsApp chatbot service provider in Bangalore — Ojiva AI chatbot dashboard for local businesses"
              />
            </div>

            {/* Section 1 — How it works locally */}
            <section id="what-is-chatbot" className="mb-5 mt-4">
              <h2 className="fw-bold">
                How a WhatsApp Chatbot Company in Bangalore Actually Works
              </h2>

              <p>
                A WhatsApp chatbot company in Bangalore builds and manages a bot
                that lives on the official WhatsApp Business API — not a personal
                WhatsApp number with auto-reply turned on. When a customer messages
                your business number, the bot reads the question, pulls the right
                answer from your catalog or FAQs, and replies in seconds, at any
                hour. It's the same app your customers already use to talk to
                friends and family, so there's no download and no new interface to
                learn. When a question needs a human — a complaint, a big order, a
                customer asking for a person — the bot hands the conversation over
                with the full history attached, so your team never asks a customer
                to repeat themselves.
              </p>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-whatsapp text-primary me-3 fs-4"></i>
                <span>
                  <b>Runs on the official WhatsApp Business API:</b> not a personal
                  number with auto-reply bolted on.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-lightning-charge-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Reads typed questions and replies in seconds:</b> day or night,
                  without a customer waiting on hold.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-arrow-left-right text-primary me-3 fs-4"></i>
                <span>
                  <b>Hands off to a human agent instantly:</b> with the full chat
                  history attached, so nobody repeats themselves.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-clock-history text-primary me-3 fs-4"></i>
                <span>
                  <b>Covers store hours, order status and pricing automatically:</b>{" "}
                  so your team isn't answering the same question all day.
                </span>
              </div>
            </section>

            {/* Section 2 — How to choose a provider (replaces generic feature comparison) */}
            <section id="choose-agency" className="mb-5">
              <h2 className="fw-bold">
                How to Choose the Right WhatsApp Chatbot Agency in Bangalore
              </h2>

              <p>
                Most people searching for a WhatsApp chatbot Bangalore option land
                on the same handful of names, and knowing how to choose a WhatsApp
                chatbot company in Bangalore comes down to a few pointed questions
                before you sign anything — not reading another feature list. Plenty
                of agencies resell someone else's platform with their own branding
                on top, which means your support ticket travels through two
                companies before anyone can actually fix it. A genuine local
                WhatsApp chatbot agency in Bangalore owns its own onboarding,
                support desk and rate card — and says so plainly when you ask.
              </p>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-patch-check-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Ask if they're an official Meta Business Partner,</b> or
                  reselling someone else's API access under their own name.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-currency-rupee text-primary me-3 fs-4"></i>
                <span>
                  <b>Check if pricing is written down in INR,</b> or hidden behind a
                  "contact sales" form.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-cpu-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Confirm the bot understands typed questions,</b> not just a
                  tree of button menus.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-geo-alt-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Look for a Bangalore-based support desk,</b> not a ticket queue
                  routed to another city.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-rocket-takeoff-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Ask how they handle smaller accounts:</b> a local WhatsApp
                  chatbot agency in Bangalore for startups should quote a
                  startup-sized plan, not just an enterprise package.
                </span>
              </div>

              <p>
                This matters even more if you're a small team — the best WhatsApp
                chatbot service provider in Bangalore for small business will say
                exactly that on a call, not bury it inside enterprise pricing.
              </p>
            </section>

            {/* Section 3 — Features checklist */}
            <section id="features-checklist" className="mb-5">
              <h2 className="fw-bold">
                What to Look for in a WhatsApp Chatbot Development Company in
                Bangalore
              </h2>

              <p>
                Once you've shortlisted a WhatsApp chatbot development company in
                Bangalore, Karnataka, the demo will look polished no matter who
                you're talking to. What actually matters is whether these six things
                work the way they're described, not just the way they're pitched.
              </p>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-graph-up-arrow text-primary me-3 fs-4"></i>
                <span>
                  <b>Lead qualification and scoring:</b> hot leads reach your sales
                  team while they're still typing.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-diagram-3-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>
                    A WhatsApp chatbot company in Bangalore with CRM integration:
                  </b>{" "}
                  every conversation should sync into Zoho, HubSpot, Salesforce or
                  Shopify automatically.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-translate text-primary me-3 fs-4"></i>
                <span>
                  <b>Replies in Kannada, Tamil, Telugu and Hindi:</b> detected
                  automatically, not a separate flow built per language.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-cart-check-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Catalog browsing and payment links:</b> inside the same thread,
                  with no app-switching.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-bar-chart-line-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Analytics on response time and drop-off points:</b> so you know
                  which answers need work.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-person-check-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Smart escalation rules:</b> frustrated or high-value
                  conversations route to a person instantly.
                </span>
              </div>
            </section>

            <div>
              <img
                loading="lazy"
                decoding="async"
                className="mt-1"
                width="100%"
                height="auto"
                src="/image/jul30(2).webp"
                alt="WhatsApp chatbot pricing for Bangalore businesses — Ojiva AI transparent INR rate card"
              />
            </div>

            {/* Section 4 — Pricing */}
            <section id="pricing" className="mb-5 mt-4">
              <h2 className="fw-bold">
                WhatsApp Chatbot Pricing From a Bangalore Service Provider
              </h2>

              <p>
                If you're comparing WhatsApp Business API chatbot company in
                Bangalore pricing across three or four vendors, look at these five
                line items, not just the headline number. An affordable WhatsApp
                chatbot service provider in Bangalore should be able to show you a
                rate card in the first conversation — true whether you're evaluating
                Ojiva AI or any other Bangalore chatbot service. Add 18% GST, billed
                in INR, and that's the whole picture.
              </p>

              <div className="table-responsive mb-4">
                <table className="table table-bordered align-middle">
                  <thead className="table-primary">
                    <tr>
                      <th>Cost Component</th>
                      <th>What It Covers</th>
                      <th>How It's Billed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>Platform subscription</b>
                      </td>
                      <td>Chatbot builder, team inbox, analytics dashboard</td>
                      <td>Monthly or annual plan, in INR</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Meta message charges</b>
                      </td>
                      <td>Marketing, utility and authentication templates</td>
                      <td>Per delivered message, by category</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Service window replies</b>
                      </td>
                      <td>Bot replies within the 24-hour customer window</td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Setup &amp; onboarding</b>
                      </td>
                      <td>API activation, flow design, template approvals</td>
                      <td>Included with Ojiva AI onboarding</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Taxes</b>
                      </td>
                      <td>GST on subscription and message charges</td>
                      <td>18%, with a GST invoice on every payment</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-cash-coin text-primary me-3 fs-4"></i>
                <span>
                  <b>Ask for cost per converted lead, not cost per message:</b>{" "}
                  <a href="/book-demo/">book a free demo</a> and we'll map real INR
                  pricing to your expected volume.
                </span>
              </div>
            </section>

            {/* Section 5 — Industries (combined, not repeated per-industry blocks) */}
            <section id="industries" className="mb-5">
              <h2 className="fw-bold">
                Which Bangalore Industries Get the Most from a WhatsApp Chatbot
              </h2>

              <p>
                Any Bangalore business already fielding the same five questions all
                day, every day, is a strong fit — the bot simply takes over the
                repetitive part.
              </p>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-bag-check-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>E-commerce &amp; retail:</b> a Bangalore based WhatsApp chatbot
                  provider for e-commerce nudges abandoned carts back to checkout
                  and confirms COD orders automatically. See{" "}
                  <a href="/solutions/ecommerce-retail/">E-commerce &amp; Retail</a>
                  .
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-heart-pulse-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Healthcare:</b> patients book, confirm or reschedule
                  appointments without calling the front desk. See{" "}
                  <a href="/solutions/healthcare/">Healthcare</a>.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-building-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Real estate:</b> brochures and site-visit slots go out the
                  moment someone enquires. See{" "}
                  <a href="/solutions/real-estate/">Real Estate</a>.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-bank2 text-primary me-3 fs-4"></i>
                <span>
                  <b>Banking &amp; finance:</b> EMI reminders and balance queries
                  from a verified sender. See{" "}
                  <a href="/solutions/banking-finance/">Banking &amp; Finance</a>.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-mortarboard-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Education:</b> admissions questions and fee reminders answered
                  instantly, even during peak season. See{" "}
                  <a href="/solutions/education/">Education</a>.
                </span>
              </div>
            </section>

            {/* Section 6 — Setup steps */}
            <section id="get-started" className="mb-5 mt-4">
              <h2 className="fw-bold">
                Getting Started With a WhatsApp Automation Company in Bangalore
              </h2>

              <p>
                Working with a WhatsApp chatbot provider in Bangalore that offers a
                48 hour setup means you're not waiting on a developer's calendar.
                Here's what the process actually looks like with Ojiva AI.
              </p>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-1-circle-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Share your business details:</b> company name, website and the
                  number you want customers to message.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-2-circle-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Get verified on the WhatsApp Business API:</b> we handle Meta
                  business verification and display name approval.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-3-circle-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Design your conversations:</b> feed the bot your FAQs, catalog
                  and policies using the drag-and-drop builder.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-4-circle-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Connect your CRM and catalog:</b> Zoho, HubSpot, Salesforce or
                  Shopify, synced automatically.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-5-circle-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Launch and improve:</b> go live, then use analytics to see
                  where customers drop off.
                </span>
              </div>

              <p>
                Prefer to see it running first?{" "}
                <a href="/book-demo/">Book a free demo</a> — we'll build a sample
                flow for your business on the call.
              </p>
            </section>

            {/* Section 7 — Compliance and support */}
            <section id="compliance-support" className="mb-5">
              <h2 className="fw-bold">
                Meta Verification, Compliance and Local Support in Bangalore
              </h2>

              <p>
                A Meta verified WhatsApp chatbot company in Bangalore should be able
                to walk you through the verified badge process, not just promise it
                exists. Compliance matters just as much as features once real
                customer data starts flowing through the bot.
              </p>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-patch-check-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Official Meta Business Partner status:</b> API access and
                  template approvals handled end to end.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-shield-lock-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>AES-256 encryption:</b> with DPDP and GDPR aligned data
                  handling for every conversation.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-file-earmark-lock2-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>DLT-registered messaging:</b> required for any business sending
                  templates to Indian numbers.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-headset text-primary me-3 fs-4"></i>
                <span>
                  <b>A Bangalore-based support desk:</b> Monday–Saturday IST hours,
                  not a ticket queue in another time zone.
                </span>
              </div>
            </section>

            {/* Section 8 — Why Ojiva AI */}
            <section id="why-ojiva-ai" className="mb-5">
              <h2 className="fw-bold">
                Why Ojiva AI Is the Top WhatsApp Chatbot Company in Bangalore
              </h2>

              <p>
                Plenty of tools can send an automated reply. Here's what separates
                Ojiva AI — a genuine AI chatbot company in Bangalore — from a
                reseller renting someone else's API access and calling itself a
                chatbot vendor.
              </p>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-cpu-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Real AI, not a renamed flow builder:</b> understands typed
                  questions, scores leads and enriches your CRM.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-patch-check-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Official Meta BSP onboarding:</b> live in about 48 hours, fully
                  compliant.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-translate text-primary me-3 fs-4"></i>
                <span>
                  <b>Speaks Kannada, Tamil, Telugu and Hindi automatically:</b> no
                  separate flows to build and maintain.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-diagram-3-fill text-primary me-3 fs-4"></i>
                <span>
                  <b>Every channel in one dashboard:</b>{" "}
                  <a href="/sms/">bulk SMS</a>, <a href="/rcs/">RCS</a>,{" "}
                  <a href="/voice/">voice</a> and <a href="/otp/">OTP</a>, with
                  smart fallback between them.
                </span>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="bi bi-cash-coin text-primary me-3 fs-4"></i>
                <span>
                  <b>Transparent INR pricing:</b> and a Bangalore-based team you can
                  actually call.
                </span>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-5">
              <h2 className="fw-bold">Conclusion</h2>

              <p>
                Choosing the best WhatsApp chatbot service provider in Bangalore
                comes down to three honest questions: are they a verified Meta
                partner or a reseller, is pricing written down anywhere in INR, and
                does support answer from Bangalore or somewhere else entirely. Get
                those three right, and the bot stops being another vendor to manage
                — it becomes the fastest-responding member of your team, running on
                the app your customers already have open.
              </p>

              <p>
                See it with your own customers: explore the{" "}
                <a href="/whatsapp-chatbot/">Ojiva AI WhatsApp chatbot</a>, pair it
                with the <a href="/whatsapp/">WhatsApp Business API</a> and{" "}
                <a href="/sms/">bulk SMS</a> for full coverage, and{" "}
                <a href="/book-demo/">book a free demo</a> — we'll walk through
                flows, integrations and real pricing for your business.
              </p>
            </section>

            {/* Author — E-E-A-T (single, consistent name and date — no top/bottom mismatch) */}
            <section className="mb-5">
              <p className="text-muted">
                <em>By Ananth · Published 30 July</em>
              </p>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-5">
              <div data-aos="fade-left">
                <h2 className="fw-bold mt-5">
                  <span className="text-primary">Frequently Asked Questions:</span>{" "}
                  WhatsApp Chatbot Service Provider in Bangalore
                </h2>

                <div className="accordion mt-4" id="chatbotBlrFAQ">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#chatbotBlrFaq1"
                      >
                        How do I choose the best WhatsApp chatbot service provider
                        in Bangalore?
                      </button>
                    </h2>
                    <div
                      id="chatbotBlrFaq1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#chatbotBlrFAQ"
                    >
                      <div className="accordion-body">
                        Start by confirming Meta Business Partner status, then ask
                        for a plain INR rate card, proof the bot understands typed
                        questions rather than just menus, and a support number based
                        in Bangalore. Ojiva AI covers all four, plus hands-on help
                        with Meta's verification process.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#chatbotBlrFaq2"
                      >
                        What does a WhatsApp chatbot agency in Bangalore typically
                        charge?
                      </button>
                    </h2>
                    <div
                      id="chatbotBlrFaq2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#chatbotBlrFAQ"
                    >
                      <div className="accordion-body">
                        Expect a monthly or annual platform subscription plus Meta's
                        per-message charges for templates you send. Replies inside
                        the 24-hour customer service window are free, and 18% GST
                        applies on top. Ojiva AI shares a plain rate card before you
                        commit.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#chatbotBlrFaq3"
                      >
                        Is Ojiva AI a Meta-verified WhatsApp chatbot company in
                        Bangalore?
                      </button>
                    </h2>
                    <div
                      id="chatbotBlrFaq3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#chatbotBlrFAQ"
                    >
                      <div className="accordion-body">
                        Yes. Ojiva AI is an official Meta Business Partner, handling
                        API access, business verification and template approvals as
                        part of onboarding, so you don't deal with Meta's paperwork
                        directly.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#chatbotBlrFaq4"
                      >
                        Can a Bangalore WhatsApp chatbot provider support Kannada
                        and other regional languages?
                      </button>
                    </h2>
                    <div
                      id="chatbotBlrFaq4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#chatbotBlrFAQ"
                    >
                      <div className="accordion-body">
                        Yes. Ojiva AI's chatbot detects the customer's language
                        automatically and replies in Kannada, Tamil, Telugu, Hindi
                        and more — you don't build a separate flow per language.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#chatbotBlrFaq5"
                      >
                        How long does a WhatsApp chatbot company in Bangalore take
                        to go live?
                      </button>
                    </h2>
                    <div
                      id="chatbotBlrFaq5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#chatbotBlrFAQ"
                    >
                      <div className="accordion-body">
                        Most businesses go live within 48 hours. Share your business
                        details, complete Meta verification with our guided help,
                        and our team sets up your number, first flows and template
                        approvals.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#chatbotBlrFaq6"
                      >
                        Do I need to be based in Bangalore to use a Bangalore
                        WhatsApp chatbot provider?
                      </button>
                    </h2>
                    <div
                      id="chatbotBlrFaq6"
                      className="accordion-collapse collapse"
                      data-bs-parent="#chatbotBlrFAQ"
                    >
                      <div className="accordion-body">
                        No. Ojiva AI works with businesses anywhere in India — being
                        Bangalore-based means your support team keeps the same
                        working hours and time zone as you, not that your business
                        needs a local address.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#chatbotBlrFaq7"
                      >
                        Can a WhatsApp automation company in Bangalore integrate
                        with my existing CRM?
                      </button>
                    </h2>
                    <div
                      id="chatbotBlrFaq7"
                      className="accordion-collapse collapse"
                      data-bs-parent="#chatbotBlrFAQ"
                    >
                      <div className="accordion-body">
                        Yes. Ojiva AI ships 200+ native connectors — Zoho, HubSpot,
                        Salesforce, Shopify and more — plus REST APIs and webhooks
                        for custom systems, so every conversation becomes a CRM
                        record automatically.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#chatbotBlrFaq8"
                      >
                        What makes a WhatsApp chatbot vendor in Bangalore different
                        from a generic SaaS tool?
                      </button>
                    </h2>
                    <div
                      id="chatbotBlrFaq8"
                      className="accordion-collapse collapse"
                      data-bs-parent="#chatbotBlrFAQ"
                    >
                      <div className="accordion-body">
                        A local vendor like Ojiva AI handles Meta verification,
                        template approvals and support in person or over a call in
                        your time zone — a generic SaaS tool leaves you to sort
                        Meta's paperwork and support tickets on your own.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* ── Sidebar: Table of Contents + Related WhatsApp blog ── */}
          <aside className="col-lg-4">
            <div>
              {/* Table of Contents — active section highlights on scroll */}
              <nav
                className="p-4 rounded-4 mb-4"
                style={{ background: "rgba(27, 72, 224, 0.05)" }}
                aria-label="Table of contents"
              >
                <ul className="list-unstyled mb-0">
                  {TOC_ITEMS.map((item, idx) => {
                    const active = activeId === item.id;
                    return (
                      <li
                        key={item.id}
                        className={idx === TOC_ITEMS.length - 1 ? "" : "mb-3"}
                      >
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => handleTocClick(e, item.id)}
                          className={`jul30-toc-link text-decoration-none d-block${
                            active ? " active" : ""
                          }`}
                          aria-current={active ? "true" : undefined}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Related WhatsApp blogs */}
              <div
                className="p-4 rounded-4"
                style={{ background: "rgba(27, 72, 224, 0.05)" }}
              >
                <h3 className="h6 fw-bold text-primary mb-3">
                  <i className="bi bi-whatsapp me-2"></i>Related WhatsApp Blogs
                </h3>

                {/* Featured post — image + title */}
                <a
                  href={`/blogs/${RELATED_BLOGS[0].slug}/`}
                  className="text-decoration-none text-reset d-block"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    className="img-fluid rounded-3 mb-2"
                    width="100%"
                    height="auto"
                    src={RELATED_BLOGS[0].img}
                    alt={RELATED_BLOGS[0].title}
                  />
                  <span className="d-block fw-semibold lh-sm">
                    {RELATED_BLOGS[0].title}
                  </span>
                </a>

                <hr className="my-3" style={{ opacity: 0.12 }} />

                {/* More WhatsApp guides — compact thumbnail rows */}
                {RELATED_BLOGS.slice(1).map((blog, idx, arr) => (
                  <a
                    key={blog.slug}
                    href={`/blogs/${blog.slug}/`}
                    className={`d-flex align-items-center gap-3 text-decoration-none text-reset${
                      idx < arr.length - 1 ? " mb-3" : ""
                    }`}
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      src={blog.img}
                      alt={blog.title}
                      width="64"
                      height="64"
                      className="rounded-3 flex-shrink-0"
                      style={{
                        width: "64px",
                        height: "64px",
                        objectFit: "cover",
                      }}
                    />
                    <span
                      className="fw-semibold lh-sm"
                      style={{ fontSize: "0.875rem" }}
                    >
                      {blog.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Jul30;
