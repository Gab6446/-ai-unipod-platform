import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Decorative Elements */}
      <div className="hero-bg-accent hero-bg-accent--1" />
      <div className="hero-bg-accent hero-bg-accent--2" />
      
      {/* Subtly watermarked background pattern */}
      <div className="hero-watermark">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5L95 50L50 95L5 50L50 5Z" stroke="var(--maroon)" strokeWidth="0.5" strokeOpacity="0.1" />
          <circle cx="50" cy="50" r="30" stroke="var(--maroon)" strokeWidth="0.5" strokeOpacity="0.1" />
        </svg>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            <span className="hero-badge__dot" />
            <span className="hero-badge__text">Empowering UNILAG Innovators</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title"
          >
            Where <span className="hero-title__accent">Heritage</span> Meets <br />
            <span className="serif italic">Digital Innovation.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-description"
          >
            AI UNIPOD provides students and researchers at the University of Lagos with world-class facilities, robotics labs, and a transparent platform to turn ideas into impact.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-actions"
          >
            <button className="hero-btn-primary">
              Explore Facilities <ArrowRight size={18} />
            </button>
            <button className="hero-btn-secondary hero-btn-secondary--blue">
              <Rocket size={18} /> Submit Project
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-stats-row"
          >
            <div className="hero-stat-item">
              <div className="hero-stat-item__icon hero-stat-item__icon--blue"><ShieldCheck size={16} /></div>
              <span>UNDP Accredited</span>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-item__icon hero-stat-item__icon--blue"><Zap size={16} /></div>
              <span>24/7 Access</span>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-item__icon hero-stat-item__icon--blue"><Globe size={16} /></div>
              <span>Remote Ready</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="hero-visual__main">
            <img 
              src="https://images.unsplash.com/photo-1581092162384-8987c1794ed9?auto=format&fit=crop&q=80&w=2070" 
              alt="Innovation Hub" 
              className="hero-visual__img"
            />
            <div className="hero-visual__overlay" />
            
            {/* Floating Glass Piece */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hero-visual__floating-card glass"
            >
              <div className="floating-card__header">
                <span className="floating-card__dot" />
                Featured Lab
              </div>
              <div className="floating-card__body">
                <h4 className="serif">Robotics & AI Center</h4>
                <p>Equipped with state-of-the-art sensory arrays and automation kits.</p>
              </div>
            </motion.div>
          </div>

          {/* Smaller secondary image / element */}
          <div className="hero-visual__secondary">
             <div className="visual-secondary__accent" />
             <div className="visual-secondary__content">
                <span className="serif">50+ Projects</span>
                <p>Active this semester</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
