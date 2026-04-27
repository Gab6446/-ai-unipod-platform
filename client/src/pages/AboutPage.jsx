import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  X, ZoomIn, ChevronLeft, ChevronRight, Award, Users,
  Globe, Lightbulb, Target, ArrowUpRight, Calendar,
} from 'lucide-react';
import Navbar from '../components/Navbar';

// ── Gallery Data ──────────────────────────────────────────────────────────────
const galleryItems = [
  {
    id: 1,
    src: '/Images/TNF-7.jpg',
    alt: 'Students collaborating on robotics projects',
    category: 'Maker Space',
    span: 'wide',
  },
  {
    id: 2,
    src: '/Images/TNF-8.jpg',
    alt: 'Collaborative workstation session in the hub',
    category: 'Training Room',
    span: 'normal',
  },
  {
    id: 3,
    src: '/Images/TNF-9.jpg',
    alt: 'Team brainstorm in the Think-Tank room',
    category: 'Conference Room',
    span: 'tall',
  },
  {
    id: 4,
    src: '/Images/TNF-10.jpg',
    alt: 'A creative design session in the Design Lab',
    category: 'Design Space',
    span: 'normal',
  },
  {
    id: 5,
    src: '/Images/TNF-11.jpg',
    alt: '3D printing session in the Creators Studio',
    category: 'VR Space',
    span: 'normal',
  },
  {
    id: 6,
    src: '/Images/TNF-12.jpg',
    alt: 'UNDP Demo Day event at the Conference Suite',
    category: 'Conference Room',
    span: 'wide',
  },
  {
    id: 7,
    src: '/Images/TNF-13.jpg',
    alt: 'Students working together on a group project',
    category: 'Training Room',
    span: 'normal',
  },
  {
    id: 8,
    src: '/Images/TNF-14.jpg',
    alt: 'Podcast recording session',
    category: 'VR Space',
    span: 'tall',
  },
  {
    id: 9,
    src: '/Images/TNF-15.jpg',
    alt: 'Hands-on robotics and AI development',
    category: 'Maker Space',
    span: 'normal',
  },
];

// ── Lightbox Component ────────────────────────────────────────────────────────
const Lightbox = ({ items, index, onClose, onPrev, onNext }) => {
  const item = items[index];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="gallery-lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button className="lightbox-close" onClick={onClose}><X size={22} /></button>
      <button className="lightbox-nav lightbox-nav--prev" onClick={e => { e.stopPropagation(); onPrev(); }}>
        <ChevronLeft size={28} />
      </button>
      <motion.div
        key={index}
        className="lightbox-img-wrap"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        onClick={e => e.stopPropagation()}
      >
        <img src={item.src} alt={item.alt} className="lightbox-img" />
        <div className="lightbox-caption">
          <span className="lightbox-category">{item.category}</span>
          <p>{item.alt}</p>
        </div>
      </motion.div>
      <button className="lightbox-nav lightbox-nav--next" onClick={e => { e.stopPropagation(); onNext(); }}>
        <ChevronRight size={28} />
      </button>
      <div className="lightbox-counter">{index + 1} / {items.length}</div>
    </motion.div>
  );
};

// ── Stats ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: '5+', label: 'Innovation Spaces', icon: Target },
  { value: '500+', label: 'Students Served', icon: Users },
  { value: '120+', label: 'Projects Approved', icon: Award },
  { value: '12+', label: 'Partner Nations', icon: Globe },
];

// ── Team / Leadership ─────────────────────────────────────────────────────────
const team = [
  {
    name: 'Prof. Folasade T. Ogunsola',
    role: 'Vice-Chancellor, UNILAG (OON, FAS)',
    bio: "Professor Ogunsola championed the UniPod from the very first conversation, committing UNILAG as Nigeria's pioneer AI innovation university.",
    initials: 'FO',
    color: '#800000',
  },
  {
    name: 'Elsie G. Attafuah',
    role: 'Resident Representative, UNDP Nigeria',
    bio: "Ms. Attafuah has been the driving force of UNDP Nigeria's partnership with UNILAG, signing the MOU and co-leading the national UniPod activation strategy.",
    initials: 'EA',
    color: '#0468B1',
  },
  {
    name: 'Prof. Chika Yinka-Banjo',
    role: 'Pioneer Director AI Unipod',
    bio: "Head of Department (HOD) and Professor/Researcher in the Department of Computer Sciences, UNILAG.",
    initials: 'CY',
    color: '#C8A84B',
  },
];

// ── Values ────────────────────────────────────────────────────────────────────
const values = [
  {
    icon: Lightbulb,
    title: 'Accessible Innovation',
    desc: "Every UNILAG student has the right to world-class tools. No fees, no barriers \u2014 just ideas and access.",
  },
  {
    icon: Globe,
    title: 'Pan-African Reach',
    desc: "Our projects don't stop at Lagos. We collaborate with researchers across 12+ African nations via UNDP networks.",
  },
  {
    icon: Users,
    title: 'Community-Driven',
    desc: 'Every facility, policy, and program is shaped by the students and faculty who use them daily.',
  },
  {
    icon: Award,
    title: 'Excellence by Default',
    desc: 'From our lab equipment to our admin processes, we hold everything to the standard of the best innovation hubs in the world.',
  },
];

// ── About Page ────────────────────────────────────────────────────────────────
const AboutPage = () => {
  const [filter, setFilter] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const categories = ['All', ...new Set(galleryItems.map(i => i.category))];
  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(i => i.category === filter);

  const openLightbox = idx => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImg = () => setLightboxIdx(i => (i - 1 + filtered.length) % filtered.length);
  const nextImg = () => setLightboxIdx(i => (i + 1) % filtered.length);

  return (
    <div className="about-page">
      <Navbar />

      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero__bg-orb about-hero__bg-orb--1" />
        <div className="about-hero__bg-orb about-hero__bg-orb--2" />
        <div className="container about-hero__inner">
          <motion.div
            className="about-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">Our Story</span>
            <h1 className="about-hero__title">
              Where African Innovation<br />
              <em className="serif italic" style={{ color: 'var(--blue)' }}>Meets Global Ambition</em>
            </h1>
            <p className="about-hero__subtitle">
              AI UNIPOD is the University of Lagos Academic Hub for Innovation, Design, and Robotics. Born from a partnership with the United Nations Development Programme, we exist to make world-class innovation tools accessible to every Nigerian student and researcher — regardless of geography or economic background.
            </p>
            <div className="about-hero__actions">
              <Link to="/booking" className="btn-primary-blue">
                <Calendar size={17} /> Book a Space
              </Link>
              <a href="#gallery" className="btn-outline-blue">
                View Gallery <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="about-stats-strip"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div className="about-stat" key={i}>
                  <div className="about-stat__icon"><Icon size={20} /></div>
                  <div>
                    <div className="about-stat__value">{s.value}</div>
                    <div className="about-stat__label">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Values ── */}
      <section className="about-mission">
        <div className="container">
          <div className="about-mission__split">
            <motion.div
              className="about-mission__text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <span className="section-eyebrow">Mission</span>
              <h2 className="section-title">
                Democratizing Access to<br /><em className="serif italic">Cutting-Edge Tools</em>
              </h2>
              <p className="about-mission__body">
                At AI UNIPOD, we believe great ideas don't have a postcode. A student in Akoka should have the same access to 3D printers, AI hardware, and design software as a student at MIT. So we built the infrastructure to make that a reality.
              </p>
              <p className="about-mission__body">
                Through our UNDP partnership, we've equipped 5 world-class labs, trained over 500 students, and helped launch more than 120 approved innovation projects — many of which now address real challenges in healthcare, agriculture, and climate across Sub-Saharan Africa.
              </p>
            </motion.div>

            <motion.div
              className="about-values-grid"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={i}
                    className="about-value-card"
                    whileHover={{ y: -4 }}
                  >
                    <div className="about-value-card__icon"><Icon size={22} /></div>
                    <h4 className="about-value-card__title">{v.title}</h4>
                    <p className="about-value-card__desc">{v.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── UNDP Partnership Banner ── */}
      <section className="about-partnership">
        <div className="container">
          <motion.div
            className="about-partnership__card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="about-partnership__left">
              <div className="about-partnership__badge">UNDP × UNILAG</div>
              <h3 className="about-partnership__heading">
                A Partnership Built for Impact
              </h3>
              <p className="about-partnership__body">
                The United Nations Development Programme selected the University of Lagos as its flagship African innovation partner, providing funding, mentorship networks, and a mandate to scale solutions that address the Sustainable Development Goals across the continent.
              </p>
            </div>
            <div className="about-partnership__right">
              {[
                { num: 'SDG 4', label: 'Quality Education' },
                { num: 'SDG 8', label: 'Decent Work & Growth' },
                { num: 'SDG 9', label: 'Industry & Innovation' },
                { num: 'SDG 17', label: 'Partnerships for Goals' },
              ].map(sdg => (
                <div key={sdg.num} className="about-sdg-chip">
                  <span className="about-sdg-chip__num">{sdg.num}</span>
                  <span className="about-sdg-chip__label">{sdg.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="about-team">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-eyebrow">Leadership</span>
            <h2 className="section-title">The People Behind the Hub</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A dedicated team of academics, researchers, and operators committed to making AI UNIPOD the best innovation space in West Africa.
            </p>
          </div>
          <div className="about-team-grid">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="about-team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
              >
                <div className="about-team-card__avatar" style={{ background: member.color }}>
                  {member.initials}
                </div>
                <h4 className="about-team-card__name">{member.name}</h4>
                <span className="about-team-card__role">{member.role}</span>
                <p className="about-team-card__bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="about-gallery">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-eyebrow">Life at AI UNIPOD</span>
            <h2 className="section-title">Inside the <em className="serif italic">Hub</em></h2>
            <p className="section-subtitle">
              A glimpse into the creative spaces, collaborative sessions, and breakthrough moments that define our community.
            </p>
          </div>

          {/* Filters */}
          <div className="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`gallery-filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="gallery-grid about-gallery-grid">
            <AnimatePresence>
              {filtered.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`gallery-item gallery-item--${item.span}`}
                  onClick={() => openLightbox(idx)}
                >
                  <div className="gallery-item__inner">
                    <img src={item.src} alt={item.alt} className="gallery-item__img" loading="lazy" />
                    <div className="gallery-item__overlay">
                      <div className="gallery-item__info">
                        <span className="gallery-item__cat">{item.category}</span>
                        <ZoomIn size={20} className="gallery-item__zoom" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIdx !== null && (
            <Lightbox
              items={filtered}
              index={lightboxIdx}
              onClose={closeLightbox}
              onPrev={prevImg}
              onNext={nextImg}
            />
          )}
        </AnimatePresence>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            className="about-cta__inner"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Ready to Innovate?</span>
            <h2 className="about-cta__heading">Your next breakthrough<br />starts here.</h2>
            <p className="about-cta__body">
              Book a facility, submit your project proposal, or explore what's possible inside Africa's premier university innovation hub.
            </p>
            <div className="about-cta__actions">
              <Link to="/booking" className="about-cta__btn-primary">
                <Calendar size={17} /> Book a Space
              </Link>
              <Link to="/#proposals" className="about-cta__btn-secondary">
                Submit a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
