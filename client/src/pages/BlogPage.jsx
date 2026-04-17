import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowLeft, Search, Filter } from 'lucide-react';
import { blogPosts, BlogCard } from '../components/BlogSection';
import Navbar from '../components/Navbar';

const BlogPage = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(p => p.category))];

  const filtered = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const featured = blogPosts.find(p => p.featured);

  return (
    <>
      <Navbar />
      <main className="blog-page">
        {/* Page hero */}
        <section className="blog-page-hero">
          <div className="blog-page-hero__bg" />
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="blog-page-hero__content"
            >
              <Link to="/" className="blog-page-back">
                <ArrowLeft size={16} /> Back to Home
              </Link>
              <span className="section-eyebrow">AI UNIPOD Blog</span>
              <h1 className="blog-page-hero__title">
                Ideas, Updates &amp; <span className="serif italic">Insights</span>
              </h1>
              <p className="blog-page-hero__sub">
                Lab recaps, partnership announcements, guides for innovators, and stories from the AI UNIPOD community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featured && (
          <section className="blog-featured">
            <div className="container">
              <span className="blog-featured__label">Featured Article</span>
              <Link to={`/blog/${featured.slug}`} className="blog-featured__card">
                <div className="blog-featured__img-wrap">
                  <img src={featured.image} alt={featured.title} className="blog-featured__img" />
                  <div className="blog-featured__img-overlay" />
                </div>
                <div className="blog-featured__body">
                  <span className="blog-featured__cat">
                    <Tag size={12} /> {featured.category}
                  </span>
                  <h2 className="blog-featured__title">{featured.title}</h2>
                  <p className="blog-featured__excerpt">{featured.excerpt}</p>
                  <div className="blog-featured__meta">
                    <div className="blog-featured__author">
                      <div className="blog-card__author-avatar">{featured.author.name.charAt(0)}</div>
                      <span>{featured.author.name}</span>
                    </div>
                    <span className="blog-featured__read">
                      <Clock size={14} />
                      {new Date(featured.date).toLocaleDateString('en-NG', { month: 'long', day: 'numeric', year: 'numeric' })}
                      &nbsp;·&nbsp;{featured.readTime} read
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Filter + Grid */}
        <section className="blog-list-section">
          <div className="container">
            {/* Toolbar */}
            <div className="blog-toolbar">
              <div className="blog-search">
                <Search size={16} className="blog-search__icon" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="blog-search__input"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <div className="blog-cat-filters">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results */}
            {filtered.length === 0 ? (
              <div className="blog-empty">
                <Filter size={32} />
                <p>No articles found for your search.</p>
              </div>
            ) : (
              <div className="blog-grid">
                {filtered.map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage;
