import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Tag, ArrowRight, ChevronRight } from 'lucide-react';

export const blogPosts = [
  {
    id: 1,
    slug: 'undp-partnership-what-it-means',
    title: 'What the UNDP Partnership Means for UNILAG Students',
    excerpt: 'The UN Development Programme\'s backing of AI UNIPOD unlocks funding, mentorship, and a global network for Nigerian university innovators. Here is what that means in practice.',
    content: `
The announcement of AI UNIPOD's formal partnership with the United Nations Development Programme (UNDP) is more than a press statement. It is a structural shift in how students and researchers at the University of Lagos can access global resources to solve local problems.

## What the Partnership Provides

**1. Research Seed Funding**
Through the UNDP SDG Innovation Facility, qualifying student projects can access small grants ranging from ₦500,000 to ₦5,000,000. Projects must align with at least one of the 17 Sustainable Development Goals.

**2. Global Mentorship Network**
Students gain access to UNDP's roster of over 300 consultants across 170 countries. This means a student building a climate-tech startup in Lagos can connect directly with experts from Nairobi, Dhaka, or Geneva.

**3. Demo Day Platform**
UNDP co-hosts an annual showcase where the top 10 projects from AI UNIPOD get presented to government ministries, private investors, and international development organizations.

## How to Position Your Project

To qualify for UNDP support, your project should:
- Demonstrate a clear impact on a Nigerian community
- Include a data-driven baseline assessment
- Have at least one faculty advisor attached

Submit your proposal through the AI UNIPOD portal and indicate "UNDP Grant Track" during the project category selection.
    `,
    author: { name: 'Dr. Ngozi Okafor', role: 'Research Director, AI UNIPOD' },
    date: '2026-04-12',
    readTime: '5 min',
    category: 'Partnership',
    featured: true,
    image: '/Images/TNF-22.jpg',
  },
  {
    id: 2,
    slug: 'robotics-lab-semester-recap',
    title: 'Robotics Lab Spring Semester Recap: 14 Projects, 3 Awards',
    excerpt: 'From autonomous delivery drones to a hydroponic monitoring system, AI UNIPOD\'s Robotics Lab had its most productive semester yet. Here are the highlights.',
    content: `
Spring 2026 saw the Robotics & AI Lab host 14 concurrent student projects — a record that stretched our equipment roster but produced some extraordinary results.

## Standout Projects

**AeroDeliver** — A lightweight autonomous drone designed for last-mile medical supply delivery in Lagos traffic. The team of four (Engineering & Computer Science cross-faculty) won the Lagos State Tech Challenge.

**HydroWatch** — A low-cost IoT sensor array for monitoring hydroponic farms. Built entirely using off-the-shelf components, HydroWatch is now being piloted by a cooperative in Ogun State.

**SignBridge** — A computer vision glove that translates Nigerian Sign Language gestures in real-time. This project was presented at the UNDP Demo Day and attracted direct interest from the Ministry of Education.

## Equipment Highlights

We upgraded the lab with:
- 4 new NVIDIA Jetson Nano boards
- A Boston Dynamics Spot integration kit (donated)
- 2 additional soldering and PCB fabrication stations

Bookings are already filling up for the summer term. Reserve your slot early.
    `,
    author: { name: 'Tunde Balogun', role: 'Lab Coordinator, AI UNIPOD' },
    date: '2026-04-05',
    readTime: '4 min',
    category: 'Lab Updates',
    featured: false,
    image: '/Images/TNF-23.jpg',
  },
  {
    id: 3,
    slug: 'how-to-write-a-winning-proposal',
    title: 'How to Write a Winning AI UNIPOD Project Proposal',
    excerpt: 'Most rejected proposals share one flaw: they describe what they want to build, not why it matters. Dr. Okafor breaks down the review board\'s evaluation criteria.',
    content: `
Each semester, we receive dozens of project proposals. Roughly 40% are approved. The difference between a successful submission and a rejected one often comes down to a single, frequently overlooked element: **problem specificity**.

## The Framework We Use

Our review board evaluates every proposal against four criteria:

**1. Impact Clarity (30%)**
Can you name the specific community that will benefit? Generic statements like "this will help people in Nigeria" score poorly. "This will reduce maternal mortality response time in Surulere LGA by 40%" scores well.

**2. Technical Feasibility (25%)**
We want to see evidence that you understand the challenge. Reference existing literature, cite a relevant dataset, or describe a pilot experiment you've already run.

**3. Resource Justification (25%)**
Don't request the Robotic Lab for 10 sessions if you only need a soldering iron. Be precise about what you need and when.

**4. Team Composition (20%)**
Cross-faculty teams consistently outperform single-department projects. A computer science student + a biomedical engineering student + a business administration student is a formidable team.

## Common Mistakes to Avoid

- Submitting without a faculty advisor attached
- Vague timelines ("we will complete this in a few months")
- No mention of how you will measure success

Use the structured form on our portal — it's designed to guide you through each of these criteria.
    `,
    author: { name: 'Dr. Ngozi Okafor', role: 'Research Director, AI UNIPOD' },
    date: '2026-03-28',
    readTime: '6 min',
    category: 'Guides',
    featured: false,
    image: '/Images/TNF-24.jpg',
  },
  {
    id: 4,
    slug: 'creators-studio-media-projects',
    title: 'The Creators Studio Is Now Equipped for Professional Media Production',
    excerpt: 'New lighting, a podcast recording bay, and a green screen installation make the Creators Studio the go-to space for UNILAG\'s content creators and media students.',
    content: `
The AI UNIPOD Creators Studio has completed a major equipment upgrade, making it one of the most capable media production spaces on any Nigerian campus.

## What's New

**Podcast Bay**: Fully soundproofed alcove with four Shure SM7B microphones, a Focusrite Scarlett 18i8 interface, and acoustic treatment panels. Support for up to 4-person in-studio recordings.

**Green Screen Suite**: A 10ft × 12ft impact-resistant chromakey cyclorama with three-point LED lighting. Compatible with Adobe Premiere, DaVinci Resolve, and OBS.

**Photography Area**: A configurable studio space with four Godox AD400 Pro flash units, a full backdrop kit, and a retouching workstation running Capture One.

## Booking Protocols

All Creators Studio bookings through the AI UNIPOD portal require:
- A brief project description
- Stated output (podcast, video, photography)
- Minimum 24-hour advance booking

Priority is given to registered clubs and faculty-supervised projects. Personal and commercial projects can be accommodated during lower-demand windows.
    `,
    author: { name: 'Chioma Adeyemi', role: 'Studio Manager, AI UNIPOD' },
    date: '2026-03-14',
    readTime: '3 min',
    category: 'Facility News',
    featured: false,
    image: '/Images/TNF-25.jpg',
  },
];

const categoryColors = {
  'Partnership': { bg: '#E8F5E9', color: '#2D7D46' },
  'Lab Updates': { bg: '#E3F2FD', color: '#1565C0' },
  'Guides':      { bg: 'var(--gold-light)', color: '#7A5400' },
  'Facility News': { bg: 'var(--blue-light)', color: 'var(--blue)' },
};

export const BlogCard = ({ post, featured = false }) => {
  const catStyle = categoryColors[post.category] || {};
  return (
    <motion.article
      className={`blog-card ${featured ? 'blog-card--featured' : ''}`}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link to={`/blog/${post.slug}`} className="blog-card__img-link">
        <div className="blog-card__img-wrap">
          <img src={post.image} alt={post.title} className="blog-card__img" loading="lazy" />
          <div className="blog-card__img-overlay" style={{ background: catStyle.bg ? catStyle.bg.replace(')', ', 0.2)').replace('rgba', 'rgba') : undefined }} />
        </div>
      </Link>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span
            className="blog-card__cat"
            style={{ background: catStyle.bg, color: catStyle.color }}
          >
            <Tag size={10} /> {post.category}
          </span>
          <span className="blog-card__date-read">
            <Clock size={12} />
            {new Date(post.date).toLocaleDateString('en-NG', { year: 'numeric', month: 'short', day: 'numeric' })}
            &nbsp;·&nbsp;{post.readTime} read
          </span>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="blog-card__title">{post.title}</h3>
        </Link>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <div className="blog-card__footer">
          <div className="blog-card__author">
            <div className="blog-card__author-avatar">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <span className="blog-card__author-name">{post.author.name}</span>
              <span className="blog-card__author-role">{post.author.role}</span>
            </div>
          </div>
          <Link to={`/blog/${post.slug}`} className="blog-card__read-more">
            Read <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const BlogSection = () => {
  const preview = blogPosts.slice(0, 3);
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">From the Hub</span>
          <h2 className="section-title">Latest <em className="serif italic">Insights</em></h2>
          <p className="section-subtitle">
            News, guides, and lab updates from the AI UNIPOD team and our community of innovators.
          </p>
        </div>
        <div className="blog-preview-grid">
          {preview.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ height: '100%' }}
            >
              <BlogCard post={post} featured={false} />
            </motion.div>
          ))}
        </div>
        <div className="blog-section__cta">
          <Link to="/blog" className="blog-section__view-all">
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
