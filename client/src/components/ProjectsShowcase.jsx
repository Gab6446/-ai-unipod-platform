import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Tag, Users, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'SolarEdu — Off-Grid Learning Platform',
    author: 'Chioma Adebayo & Team',
    category: 'Education Technology',
    status: 'Active',
    description: 'A solar-powered e-learning device that works without internet, bringing digital education to 200+ rural students in Ogun State.',
    tags: ['EdTech', 'Sustainability', 'Hardware'],
    color: '#800000',
    avatar: 'CA',
  },
  {
    id: 2,
    title: 'AgroSense — Smart Farm Monitor',
    author: 'Dr. Olumide Fashola',
    category: 'Climate & Sustainability',
    status: 'Approved',
    description: 'IoT-enabled soil moisture and nutrient sensors connected to a mobile dashboard that helps smallholder farmers optimize yields in real time.',
    tags: ['IoT', 'AgriTech', 'Climate'],
    color: '#0468B1',
    avatar: 'OF',
  },
  {
    id: 3,
    title: 'LagosTrack — Urban Mobility Intelligence',
    author: 'Babatunde Okafor',
    category: 'Fintech for Inclusion',
    status: 'Approved',
    description: 'A data analytics platform mapping Lagos traffic patterns to help transport cooperatives plan efficient routes and reduce commute times by 30%.',
    tags: ['Data', 'Urban', 'Mobility'],
    color: '#C8A84B',
    avatar: 'BO',
  },
  {
    id: 4,
    title: 'MediBot — Community Health Assistant',
    author: 'Amara Ndoye',
    category: 'Robotics & Automation',
    status: 'Active',
    description: 'A conversational AI health screening bot deployed via WhatsApp to triage common ailments in low-connectivity communities across West Africa.',
    tags: ['AI', 'Health', 'Social Impact'],
    color: '#2D7D46',
    avatar: 'AN',
  },
  {
    id: 5,
    title: 'BioKraft — Biodegradable Packaging',
    author: 'Zainab Ibrahim & Team',
    category: 'Climate & Sustainability',
    status: 'Showcased',
    description: 'Award-winning research into cassava-starch polymer composites to replace single-use plastics for food vendors across Nigerian markets.',
    tags: ['Materials', 'Climate', 'Research'],
    color: '#6B4A2C',
    avatar: 'ZI',
  },
  {
    id: 6,
    title: 'SkillChain — Verified Learning Credentials',
    author: 'Emeka Nwosu',
    category: 'Education Technology',
    status: 'Active',
    description: 'Blockchain-based system for issuing tamper-proof digital certificates for informal skills training programs targeting Nigerian youth.',
    tags: ['Blockchain', 'EdTech', 'Workforce'],
    color: '#4A2C6B',
    avatar: 'EN',
  },
];

const STATUS_COLORS = {
  Active: { bg: '#E8F5E9', text: '#2D7D46' },
  Approved: { bg: '#E3F2FD', text: '#0468B1' },
  Showcased: { bg: '#FFF8E1', text: '#C8A84B' },
};

const ProjectCard = ({ project, index }) => {
  const status = STATUS_COLORS[project.status];
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
    >
      <div className="project-card__accent" style={{ background: project.color }} />
      <div className="project-card__body">
        <div className="project-card__top">
          <div className="project-avatar" style={{ background: project.color }}>
            {project.avatar}
          </div>
          <span className="project-status" style={{ background: status.bg, color: status.text }}>
            {project.status}
          </span>
        </div>
        <div className="project-card__category">
          <Tag size={11} /> {project.category}
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map(t => (
            <span key={t} className="project-tag">{t}</span>
          ))}
        </div>
        <div className="project-card__footer">
          <span className="project-author"><Users size={12} /> {project.author}</span>
          <button className="project-link"><ArrowUpRight size={14} /></button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsShowcase = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Education Technology', 'Climate & Sustainability', 'Robotics & Automation', 'Fintech for Inclusion'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <div>
            <span className="section-eyebrow">Innovation Showcase</span>
            <h2 className="section-title">
              Our <span className="serif italic">Projects.</span>
            </h2>
            <p className="section-subtitle">
              Browse active initiatives, research breakthroughs, and community-driven projects shaping the future of African innovation.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-tab ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          className="projects-grid"
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="projects-cta__text">
            <h3>Ready to start your own project?</h3>
            <p>Submit a proposal and join the growing community of UNILAG innovators making real-world impact.</p>
          </div>
          <a href="#proposals" className="projects-cta__btn">
            Submit Your Idea <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
