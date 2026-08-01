"use client";

import React, { useEffect, useState } from "react";
import blogsData from "../../public/data/blog.json";

// ── Ojiva AI official social profiles ──
const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/112715285/",
  x: "https://x.com/OjivaAi",
  facebook: "https://www.facebook.com/profile.php?id=61586231230793",
  instagram: "https://www.instagram.com/ojiva.ai/",
  youtube: "https://www.youtube.com/@ojivaai",
};

const BlogLayout = ({ slug, title, category, toc = [], children }) => {
  const SHARE_URL = `https://www.ojiva.ai/blogs/${slug}/`;
  const firstId = toc.length ? toc[0].id : "";

  const [activeId, setActiveId] = useState(firstId);
  const [copied, setCopied] = useState(false);

  const relatedBlogs = React.useMemo(() => {
    return blogsData
      .filter(
        (entry) => entry.category === category && entry.slug !== slug,
      )
      .slice(0, 7);
  }, [category, slug]);

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

  useEffect(() => {
    if (!toc.length) return;
    const sections = toc
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!sections.length) return;

    const visibility = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) =>
          visibility.set(e.target.id, e.isIntersecting),
        );
        const current = toc.find((item) => visibility.get(item.id));
        if (current) setActiveId(current.id);
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [toc]);

  const handleTocClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveId(id);
  };

  const shareText = encodeURIComponent(title || "");
  const shareUrlEncoded = encodeURIComponent(SHARE_URL);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .blog-article p,
            .blog-article .d-flex > span,
            .blog-article .accordion-body {
              text-align: justify;
              text-justify: inter-word;
            }
            .blog-toc-link {
              color: #5b6270;
              font-weight: 400;
              line-height: 1.45;
              transition: color .15s ease;
            }
            .blog-toc-link:hover,
            .blog-toc-link.active {
              color: var(--primary, #1B48E0);
            }
            .blog-toc-link.active {
              font-weight: 600;
            }
            .blog-share-btn {
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
              text-decoration: none;
            }
            .blog-share-btn:hover {
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
          <div className="col-lg-8 blog-article">
            {title && (
              <h2 className="text-primary py-4">{title}</h2>
            )}

            {/* Social share bar */}
            <div className="d-flex align-items-center flex-wrap gap-2 mb-4">
              <span className="text-muted small me-1">Share this post</span>

              <button
                type="button"
                onClick={handleCopyLink}
                className="blog-share-btn"
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
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrlEncoded}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-share-btn"
                aria-label="Share on LinkedIn"
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
                href={`https://twitter.com/intent/tweet?url=${shareUrlEncoded}&text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-share-btn"
                aria-label="Share on X"
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
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrlEncoded}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-share-btn"
                aria-label="Share on Facebook"
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
                href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrlEncoded}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-share-btn"
                aria-label="Share on WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </a>

              <a
                href={`mailto:?subject=${shareText}&body=${shareUrlEncoded}`}
                className="blog-share-btn"
                aria-label="Share via Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </a>
            </div>

            {/* Article content passed in as children */}
            {children}
          </div>

          {/* ── Sidebar: Table of Contents + Related blogs ── */}
          <aside className="col-lg-4">
            <div style={{ position: "sticky", top: "90px" }}>
              {toc.length > 0 && (
                <nav
                  className="p-4 rounded-4 mb-4"
                  style={{ background: "rgba(27, 72, 224, 0.05)" }}
                  aria-label="Table of contents"
                >
                  <ul className="list-unstyled mb-0">
                    {toc.map((item, idx) => {
                      const active = activeId === item.id;
                      return (
                        <li
                          key={item.id}
                          className={idx === toc.length - 1 ? "" : "mb-3"}
                        >
                          <a
                            href={`#${item.id}`}
                            onClick={(e) => handleTocClick(e, item.id)}
                            className={`blog-toc-link text-decoration-none d-block${active ? " active" : ""}`}
                            aria-current={active ? "true" : undefined}
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}

              {relatedBlogs.length > 0 && (
                <div
                  className="p-4 rounded-4"
                  style={{ background: "rgba(27, 72, 224, 0.05)" }}
                >
                  <h3 className="h6 fw-bold text-primary mb-3">
                    <i className="bi bi-chat-dots-fill me-2"></i>Related Blogs
                  </h3>

                  <a
                    href={`/blogs/${relatedBlogs[0].slug}/`}
                    className="text-decoration-none text-reset d-block"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      className="img-fluid rounded-3 mb-2"
                      width="100%"
                      height="auto"
                      src={relatedBlogs[0].image}
                      alt={relatedBlogs[0].title}
                    />
                    <span className="d-block fw-semibold lh-sm">
                      {relatedBlogs[0].title}
                    </span>
                  </a>

                  {relatedBlogs.length > 1 && (
                    <hr className="my-3" style={{ opacity: 0.12 }} />
                  )}

                  {relatedBlogs.slice(1).map((blog, idx, arr) => (
                    <a
                      key={blog.slug}
                      href={`/blogs/${blog.slug}/`}
                      className={`d-flex align-items-center gap-3 text-decoration-none text-reset${idx < arr.length - 1 ? " mb-3" : ""}`}
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        src={blog.image}
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
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default BlogLayout;
