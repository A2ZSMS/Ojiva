'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CATEGORIES = ['All', 'Bulk SMS', 'WhatsApp API', 'RCS Messaging', 'Voice Call', 'AI & Automation'];
const BLOGS_PER_PAGE = 9;

function BlogSkeleton() {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <div className="bg-secondary" style={{ height: '200px', opacity: 0.2 }} />
        <div className="card-body">
          <div className="bg-secondary rounded mb-2" style={{ height: '20px', opacity: 0.2 }} />
          <div className="bg-secondary rounded mb-2" style={{ height: '14px', width: '60%', opacity: 0.15 }} />
          <div className="bg-secondary rounded" style={{ height: '60px', opacity: 0.1 }} />
        </div>
      </div>
    </div>
  );
}

export default function BlogList() {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('/data/blog.json')
      .then((res) => res.json())
      .then((data) => {
        setBlogsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading blogs:', err);
        setLoading(false);
      });
  }, []);

  const filteredBlogs =
    selectedCategory === 'All'
      ? blogsData
      : blogsData.filter((blog) => blog.category === selectedCategory);

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const indexOfLast = currentPage * BLOGS_PER_PAGE;
  const indexOfFirst = indexOfLast - BLOGS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);

  return (
    <section className="py-5" style={{ minHeight: '70vh' }}>
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <span
            className="badge rounded-pill px-3 py-2 mb-3 fw-semibold"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', color: '#fff', fontSize: '0.8rem', letterSpacing: '0.05em' }}
          >
            BLOG
          </span>
          <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            Bulk SMS, WhatsApp &amp; RCS Insights
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: '560px', fontSize: '1.05rem' }}>
            Expert articles on Bulk SMS, WhatsApp API, RCS Messaging, and AI Voice Call automation
            to help your business communicate smarter.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-5 text-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
              className={`btn me-2 mb-2 ${selectedCategory === cat ? 'btn-primary' : 'btn-outline-secondary'}`}
              style={{ borderRadius: '50px', fontSize: '0.85rem', padding: '6px 18px' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="row">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => <BlogSkeleton key={i} />)
          ) : currentBlogs.length > 0 ? (
            currentBlogs.map((blog) => (
              <div className="col-md-4 mb-4" key={blog.id}>
                <Link href={`/blogs/${blog.slug}`} className="text-decoration-none">
                  <div
                    className="card h-100 border-0 shadow-sm"
                    style={{ borderRadius: '16px', overflow: 'hidden', transition: 'transform 0.2s,box-shadow 0.2s' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(79,70,229,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <img
                      src={blog.image || '/og-image.jpg'}
                      alt={blog.title}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body d-flex flex-column p-4">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span
                          className="badge"
                          style={{ background: 'rgba(79,70,229,0.1)', color: '#4f46e5', fontSize: '0.75rem', borderRadius: '50px', padding: '4px 12px' }}
                        >
                          {blog.category}
                        </span>
                      </div>
                      <h5 className="card-title fw-bold mb-2" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                        {blog.title}
                      </h5>
                      <p className="text-muted small flex-grow-1 mb-3" style={{ lineHeight: '1.6' }}>
                        {blog.description.length > 120 ? blog.description.slice(0, 120) + '…' : blog.description}
                      </p>
                      <span className="fw-semibold" style={{ color: '#4f46e5', fontSize: '0.9rem' }}>
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted fs-5">No blogs found in this category.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-4">
            <ul className="pagination justify-content-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}

      </div>
    </section>
  );
}
