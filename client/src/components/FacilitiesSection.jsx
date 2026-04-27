import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Wifi, Zap, Monitor, Mic, Cpu, Printer, ArrowUpRight, Calendar } from 'lucide-react';
import BookingModal from './BookingModal';

const facilitiesData = [
  {
    id: 1,
    number: '01',
    name: 'Conference Room',
    description: 'Professional boardroom setup with 4K display and video conferencing for team meetings and presentations.',
    image: '/Images/TNF-2.jpg',
    capacity: 16,
    icon: Wifi,
    tags: ['Meetings', 'Presentations', 'Video Call'],
  },
  {
    id: 2,
    number: '02',
    name: 'Training Room',
    description: 'Flexible classroom-style space equipped for workshops, seminars, and group learning sessions.',
    image: '/Images/TNF-3.jpg',
    capacity: 30,
    icon: Users,
    tags: ['Workshops', 'Seminars', 'Learning'],
  },
  {
    id: 3,
    number: '03',
    name: 'Maker Space',
    description: 'A hands-on workspace with tools, soldering stations, and materials for physical prototyping and hardware building.',
    image: '/Images/TNF-4.jpg',
    capacity: 20,
    icon: Cpu,
    tags: ['Prototyping', 'Hardware', 'DIY'],
  },
  {
    id: 4,
    number: '04',
    name: 'Design Space',
    description: 'Industrial 3D printers, laser cutters, and high-end workstations for product designers and digital artists.',
    image: '/Images/TNF-5.jpg',
    capacity: 12,
    icon: Monitor,
    tags: ['3D Printing', 'Laser Cut', 'Design Software'],
  },
  {
    id: 5,
    number: '05',
    name: 'VR Space',
    description: 'Dedicated virtual reality environment with headsets and tracking sensors for immersive experiences and development.',
    image: '/Images/TNF-6.jpg',
    capacity: 6,
    icon: Zap,
    tags: ['Virtual Reality', 'Immersive', 'Simulation'],
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
  const [showAll, setShowAll] = useState(false);

  const displayedFacilities = showAll ? facilitiesData : facilitiesData.slice(0, 4);

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
          {displayedFacilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} onBook={setBookingFacility} />
          ))}
        </div>

        {facilitiesData.length > 4 && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button 
              className="btn-outline-blue" 
              onClick={() => setShowAll(!showAll)}
              style={{ cursor: 'pointer' }}
            >
              {showAll ? 'Show Less' : 'See More Spaces'}
            </button>
          </div>
        )}
      </div>

      {bookingFacility && (
        <BookingModal facility={bookingFacility} onClose={() => setBookingFacility(null)} />
      )}
    </section>
  );
};

export default FacilitiesSection;
