import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Wifi, Zap, Monitor, Mic, Cpu, Printer, ArrowUpRight, Calendar } from 'lucide-react';
import BookingModal from './BookingModal';

const facilitiesData = [
  {
    id: 1,
    number: '01',
    name: 'Robotics & AI Lab',
    description: 'Arduino kits, soldering stations, Raspberry Pi clusters, and specialized hardware for prototyping robotics and AI solutions.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070',
    capacity: 15,
    icon: Cpu,
    tags: ['Arduino', 'Soldering', 'AI Hardware'],
  },
  {
    id: 2,
    number: '02',
    name: 'Creators Studio',
    description: 'High-end podcasting equipment, video editing suites, and acoustic treatment for content creators and media researchers.',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=2070',
    capacity: 6,
    icon: Mic,
    tags: ['Podcast', 'Video Editing', 'Acoustic'],
  },
  {
    id: 3,
    number: '03',
    name: 'Design & 3D Lab',
    description: 'Industrial 3D printers, laser cutters, and the full Adobe Creative Suite for product designers and engineers.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=2070',
    capacity: 12,
    icon: Monitor,
    tags: ['3D Printing', 'Laser Cut', 'Adobe Suite'],
  },
  {
    id: 4,
    number: '04',
    name: 'Think-Tank Room',
    description: 'Floor-to-ceiling whiteboards and modular furniture designed for high-intensity brainstorming and ideation sessions.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070',
    capacity: 20,
    icon: Zap,
    tags: ['Whiteboard', 'Collaboration', 'Ideation'],
  },
  {
    id: 5,
    number: '05',
    name: 'Workstation Hub',
    description: 'Rows of high-performance computers with dual monitors, ergonomic chairs, and power outlets at every seat for solo focus work.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070',
    capacity: 30,
    icon: Monitor,
    tags: ['Computers', 'Focus', 'High-Speed WiFi'],
  },
  {
    id: 6,
    number: '06',
    name: 'Conference Suite',
    description: 'Boardroom-style setup with 4K display, video conferencing system, and whiteboard rails for hybrid team meetings and presentations.',
    image: 'https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?auto=format&fit=crop&q=80&w=2070',
    capacity: 16,
    icon: Wifi,
    tags: ['4K Display', 'Video Call', 'Presentations'],
  },
  {
    id: 7,
    number: '07',
    name: 'Printing & Media Room',
    description: 'Professional-grade A3/A4 color printers, plotters, and binding machines for research papers, posters, and physical prototypes.',
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&q=80&w=2070',
    capacity: 8,
    icon: Printer,
    tags: ['Color Print', 'Plotter', 'Binding'],
  },
];

const FacilityCard = ({ facility, onBook }) => {
  const Icon = facility.icon;
  return (
    <motion.div
      className="facility-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <div className="facility-card__image-wrap">
        <img src={facility.image} alt={facility.name} className="facility-card__image" />
        <div className="facility-card__overlay" />
        <span className="facility-card__number">{facility.number}</span>
        <div className="facility-card__icon-badge">
          <Icon size={18} />
        </div>
      </div>
      <div className="facility-card__body">
        <h3 className="facility-card__name">{facility.name}</h3>
        <p className="facility-card__desc">{facility.description}</p>
        <div className="facility-card__tags">
          {facility.tags.map(t => <span key={t} className="facility-tag">{t}</span>)}
        </div>
        <div className="facility-card__footer">
          <span className="facility-capacity"><Users size={13} /> {facility.capacity} seats</span>
          <button className="facility-book-btn" onClick={() => onBook(facility)}>
            <Calendar size={14} /> Book
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FacilitiesSection = () => {
  const [bookingFacility, setBookingFacility] = useState(null);

  return (
    <section id="facilities" className="facilities-section">
      <div className="container">
        <div className="facilities-header">
          <div>
            <span className="section-eyebrow">Discovery Hub</span>
            <h2 className="section-title">
              World-Class <span className="serif italic">Innovation</span> Spaces.
            </h2>
            <p className="section-subtitle">
              Each room at AI UNIPOD is purpose-built for a specific stage of the innovation lifecycle — from ideation to rapid prototyping to presentation.
            </p>
          </div>
        </div>

        <div className="facilities-grid">
          {facilitiesData.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} onBook={setBookingFacility} />
          ))}
        </div>
      </div>

      {bookingFacility && (
        <BookingModal facility={bookingFacility} onClose={() => setBookingFacility(null)} />
      )}
    </section>
  );
};

export default FacilitiesSection;
