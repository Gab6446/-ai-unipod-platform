import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1581092162384-8987c1794ed9?auto=format&fit=crop&q=80&w=900',
    alt: 'Students in the Robotics Lab working on automation projects',
    category: 'Robotics Lab',
    span: 'wide',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=900',
    alt: 'Collaborative workstation session in the hub',
    category: 'Workstation Hub',
    span: 'normal',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=900',
    alt: 'Team brainstorm in the Think-Tank room',
    category: 'Think-Tank Room',
    span: 'tall',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=900',
    alt: 'A creative design session in the Design Lab',
    category: 'Design Lab',
    span: 'normal',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=900',
    alt: '3D printing session in the Creators Studio',
    category: 'Creators Studio',
    span: 'normal',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=900',
    alt: 'UNDP Demo Day event at the Conference Suite',
    category: 'Conference Suite',
    span: 'wide',
  },
];

const Lightbox = ({ items, index, onClose, onPrev, onNext }) => {
  const item = items[index];
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
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
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

const GallerySection = () => {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(galleryItems.map(i => i.category))];
  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(i => i.category === filter);

  const openLightbox = idx => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImg = () => setLightboxIdx(i => (i - 1 + filtered.length) % filtered.length);
  const nextImg = () => setLightboxIdx(i => (i + 1) % filtered.length);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Life at AI UNIPOD</span>
          <h2 className="section-title">Inside the <em className="serif italic">Hub</em></h2>
          <p className="section-subtitle">
            A glimpse into the creative spaces, collaborative sessions, and breakthrough moments that define our community.
          </p>
        </div>

        {/* Category filter */}
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

        {/* Masonry-style grid */}
        <motion.div layout className="gallery-grid">
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
  );
};

export default GallerySection;
