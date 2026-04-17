import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, ArrowRight } from 'lucide-react';
import { blogPosts, BlogCard } from '../components/BlogSection';
import Navbar from '../components/Navbar';

const markdownToHtml = (md) => {
  if (!md) return '';
  return md
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/((<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hul])/gm, '<p>$&</p>')
    .replace(/<p><\/p>/g, '')
    .trim();
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="blog-not-found">
          <h2>Article not found</h2>
          <Link to="/blog" className="blog-page-back">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="blog-post">
        {/* Hero image */}
        <div className="blog-post-hero">
          <img src={post.image} alt={post.title} className="blog-post-hero__img" />
          <div className="blog-post-hero__overlay" />
          <div className="container blog-post-hero__content">
            <Link to="/blog" className="blog-page-back blog-page-back--light">
              <ArrowLeft size={16} /> All Articles
            </Link>
            <span className="blog-card__cat blog-post__cat">
              <Tag size={11} /> {post.category}
            </span>
            <h1 className="blog-post-hero__title">{post.title}</h1>
            <div className="blog-post-hero__meta">
              <div className="blog-card__author">
                <div className="blog-card__author-avatar">{post.author.name.charAt(0)}</div>
                <div>
                  <span className="blog-card__author-name" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    {post.author.name}
                  </span>
                  <span className="blog-card__author-role" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {post.author.role}
                  </span>
                </div>
              </div>
              <div className="blog-post-hero__read">
                <Clock size={14} />
                {new Date(post.date).toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })}
                &nbsp;·&nbsp;{post.readTime} read
              </div>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="container">
          <div className="blog-post-layout">
            <motion.article
              className="blog-post-body prose"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
            />

            <aside className="blog-post-aside">
              <div className="blog-aside-card">
                <h4>About the Author</h4>
                <div className="blog-aside-author">
                  <div className="blog-card__author-avatar blog-aside-author__avatar">
                    {post.author.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{post.author.name}</strong>
                    <p>{post.author.role}</p>
                  </div>
                </div>
              </div>
              <div className="blog-aside-card">
                <h4>Quick Links</h4>
                <ul className="blog-aside-links">
                  <li><Link to="/blog">← All Articles</Link></li>
                  <li><a href="/#proposals">Submit a Proposal</a></li>
                  <li><a href="/#facilities">Book a Space</a></li>
                </ul>
              </div>
            </aside>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <section className="blog-related">
              <h3 className="blog-related__title">More from the Hub</h3>
              <div className="blog-related__grid">
                {related.map(r => <BlogCard key={r.id} post={r} />)}
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link to="/blog" className="blog-section__view-all">
                  View All Articles <ArrowRight size={16} />
                </Link>
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
};

export default BlogPostPage;
