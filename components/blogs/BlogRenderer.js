import React from "react";

// Renders a single block based on its `type`.
// Each block gets a unique key from the caller.
const renderBlock = (block, blockIdx, sectionId) => {
  if (!block || !block.type) return null;

  switch (block.type) {
    case "p":
      return (
        <p
          key={blockIdx}
          dangerouslySetInnerHTML={{ __html: block.html || "" }}
        />
      );

    case "h": {
      const level = block.level === 4 ? 4 : 3;
      if (level === 4) {
        return (
          <h4 key={blockIdx} className="fw-bold mt-4">
            {block.text}
          </h4>
        );
      }
      return (
        <h3 key={blockIdx} className="fw-bold mt-4">
          {block.text}
        </h3>
      );
    }

    case "icon-list": {
      const items = Array.isArray(block.items) ? block.items : [];
      return (
        <div key={blockIdx}>
          {items.map((item, i) => (
            <div
              key={i}
              className="d-flex align-items-start mb-3"
            >
              <i
                className={`bi ${item.icon || ""} text-primary me-3 fs-4`}
              ></i>
              <span>
                <strong>{item.title}:</strong>{" "}
                <span
                  dangerouslySetInnerHTML={{ __html: item.desc || "" }}
                />
              </span>
            </div>
          ))}
        </div>
      );
    }

    case "image":
      return (
        <div key={blockIdx}>
          <img
            loading="lazy"
            decoding="async"
            className="mt-1 mb-3"
            width="100%"
            height="auto"
            src={block.src}
            alt={block.alt || ""}
          />
          {block.caption ? (
            <figcaption className="text-muted small text-center mb-3">
              {block.caption}
            </figcaption>
          ) : null}
        </div>
      );

    case "accordion": {
      const items = Array.isArray(block.items) ? block.items : [];
      const accId = `${sectionId || "section"}-acc-${blockIdx}`;
      return (
        <div key={blockIdx} className="accordion mt-4" id={accId}>
          {items.map((item, i) => {
            const itemId = `${accId}-item-${i}`;
            return (
              <div className="accordion-item" key={i}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${itemId}`}
                  >
                    {item.q}
                  </button>
                </h2>
                <div
                  id={itemId}
                  className="accordion-collapse collapse"
                  data-bs-parent={`#${accId}`}
                >
                  <div
                    className="accordion-body"
                    dangerouslySetInnerHTML={{ __html: item.a || "" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    case "table": {
      const headers = Array.isArray(block.headers) ? block.headers : [];
      const rows = Array.isArray(block.rows) ? block.rows : [];
      return (
        <div key={blockIdx} className="table-responsive mb-4">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-light">
              <tr>
                {headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  {(Array.isArray(row) ? row : []).map((cell, j) => (
                    <td
                      key={j}
                      dangerouslySetInnerHTML={{ __html: String(cell ?? "") }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    case "html":
      return (
        <div
          key={blockIdx}
          dangerouslySetInnerHTML={{ __html: block.content || "" }}
        />
      );

    default:
      return null;
  }
};

const BlogRenderer = ({ content }) => {
  if (!content || !Array.isArray(content.sections)) return null;

  return (
    <>
      {content.sections.map((section, sIdx) => {
        if (!section) return null;
        const sectionId = section.id || `section-${sIdx}`;
        const blocks = Array.isArray(section.blocks) ? section.blocks : [];

        return (
          <section key={sectionId} id={sectionId} className="mb-5 mt-4">
            {section.heading ? (
              <h2 className="fw-bold">{section.heading}</h2>
            ) : null}
            {blocks.map((block, bIdx) => renderBlock(block, bIdx, sectionId))}
          </section>
        );
      })}
    </>
  );
};

export default BlogRenderer;
