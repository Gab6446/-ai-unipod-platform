import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users, Wifi, Zap, Monitor, Mic, Cpu, Printer,
  Calendar, Clock, CheckCircle, ChevronLeft, ChevronRight,
  X, ArrowRight, Tag, Info,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import BookingModal from '../components/BookingModal';
// ── Facilities Data ───────────────────────────────────────────────────────────
const facilitiesData = [
  {
    id: 1, number: '01',
    name: 'Conference Room',
    description: 'Professional boardroom setup with 4K display and video conferencing for team meetings and presentations.',
    image: '/Images/TNF-2.jpg',
    capacity: 16, icon: Wifi,
    tags: ['Meetings', 'Presentations', 'Video Call'],
    equipment: ['85" 4K OLED display', 'Zoom/Teams room kit', 'Acoustic panels', 'Wireless presentation clicker', 'Conference table'],
    bestFor: 'Investor pitches, thesis defenses, team meetings, online workshops',
    availability: 'Mon–Fri, 8 AM–6 PM',
  },
  {
    id: 2, number: '02',
    name: 'Training Room',
    description: 'Flexible classroom-style space equipped for workshops, seminars, and group learning sessions.',
    image: '/Images/TNF-3.jpg',
    capacity: 30, icon: Users,
    tags: ['Workshops', 'Seminars', 'Learning'],
    equipment: ['HD Projector', 'Flexible modular seating', '360° whiteboard walls', 'Microphone system', 'Lectern'],
    bestFor: 'Group training, workshops, guest lectures, hackathon kickoffs',
    availability: 'Mon–Sat, 8 AM–8 PM',
  },
  {
    id: 3, number: '03',
    name: 'Maker Space',
    description: 'A hands-on workspace with tools, soldering stations, and materials for physical prototyping and hardware building.',
    image: '/Images/TNF-4.jpg',
    capacity: 20, icon: Cpu,
    tags: ['Prototyping', 'Hardware', 'DIY'],
    equipment: ['Heavy-duty workbenches', 'Hand & power tools', 'Soldering stations (×10)', 'Oscilloscopes', 'Multimeters', 'Electronics kits'],
    bestFor: 'Hardware projects, physical prototyping, DIY building, robotics',
    availability: 'Mon–Sat, 8 AM–9 PM',
  },
  {
    id: 4, number: '04',
    name: 'Design Space',
    description: 'Industrial 3D printers, laser cutters, and high-end workstations for product designers and digital artists.',
    image: '/Images/TNF-5.jpg',
    capacity: 12, icon: Monitor,
    tags: ['3D Printing', 'Laser Cut', 'Design Software'],
    equipment: ['Ultimaker S5 3D printers', 'K40 Laser Cutter', 'High-end Mac/PC workstations', 'Wacom drawing tablets', 'Vacuum forming table'],
    bestFor: 'Product design mockups, architectural models, visual brand projects',
    availability: 'Mon–Sun, 8 AM–9 PM',
  },
  {
    id: 5, number: '05',
    name: 'VR Space',
    description: 'Dedicated virtual reality environment with headsets and tracking sensors for immersive experiences and development.',
    image: '/Images/TNF-6.jpg',
    capacity: 6, icon: Zap,
    tags: ['Virtual Reality', 'Immersive', 'Simulation'],
    equipment: ['Meta Quest Pro headsets', 'HTC Vive Pro', 'High-performance VR PCs', 'Tracking base stations', 'Green screen backdrop'],
    bestFor: 'VR development, immersive testing, 3D simulations, interactive media',
    availability: 'Mon–Fri, 9 AM–7 PM',
  },
];

// ── Facility Card (booking page version) ─────────────────────────────────────
const FacilityBookingCard = ({ facility, onBook }) => {
  const Icon = facility.icon;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      className="bp-facility-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="bp-facility-card__image-wrap">
        <img src={facility.image} alt={facility.name} className="bp-facility-card__img" loading="lazy" />
        <div className="bp-facility-card__overlay" />
        <span className="bp-facility-card__number">{facility.number}</span>
        <div className="bp-facility-card__icon"><Icon size={18} /></div>
      </div>

      <div className="bp-facility-card__body">
        <div className="bp-facility-card__top">
          <h3 className="bp-facility-card__name">{facility.name}</h3>
          <span className="bp-facility-card__capacity"><Users size={13} /> {facility.capacity} seats</span>
        </div>
        <p className="bp-facility-card__desc">{facility.description}</p>

        <div className="bp-facility-card__tags">
          {facility.tags.map(t => <span key={t} className="facility-tag"><Tag size={10} /> {t}</span>)}
        </div>

        {/* Details toggle */}
        <button className="bp-facility-card__details-btn" onClick={() => setShowDetails(s => !s)}>
          <Info size={13} /> {showDetails ? 'Hide details' : 'View equipment & availability'}
        </button>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              className="bp-facility-card__details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="bp-detail-section">
                <p className="bp-detail-label">Equipment</p>
                <ul className="bp-equipment-list">
                  {facility.equipment.map(e => <li key={e}>{e}</li>)}
                </ul>
              </div>
              <div className="bp-detail-row">
                <div className="bp-detail-section">
                  <p className="bp-detail-label">Best For</p>
                  <p className="bp-detail-value">{facility.bestFor}</p>
                </div>
                <div className="bp-detail-section">
                  <p className="bp-detail-label">Hours</p>
                  <p className="bp-detail-value">{facility.availability}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="bp-book-btn"
          onClick={() => onBook(facility)}
        >
          <Calendar size={15} /> Book This Space
        </button>
      </div>
    </motion.div>
  );
};

// ── Booking Page ──────────────────────────────────────────────────────────────
const BookingPage = () => {
  const [bookingFacility, setBookingFacility] = useState(null);
  const [filterCap, setFilterCap] = useState('All');

  const capacityFilters = ['All', '1–8', '9–16', '17+'];
  const filtered = facilitiesData.filter(f => {
    if (filterCap === 'All') return true;
    if (filterCap === '1–8') return f.capacity <= 8;
    if (filterCap === '9–16') return f.capacity >= 9 && f.capacity <= 16;
    if (filterCap === '17+') return f.capacity >= 17;
    return true;
  });

  return (
    <div className="booking-page">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bp-hero">
        <div className="bp-hero__bg-orb bp-hero__bg-orb--1" />
        <div className="bp-hero__bg-orb bp-hero__bg-orb--2" />
        <div className="container bp-hero__inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">Reserve a Space</span>
            <h1 className="bp-hero__title">
              Book in Under <em className="serif italic" style={{ color: 'var(--blue)' }}>3 Minutes</em>
            </h1>
            <p className="bp-hero__subtitle">
              Browse AI UNIPOD's 5 world-class innovation spaces, view real-time availability, and secure your slot instantly — no emails, no waiting.
            </p>
          </motion.div>

          {/* Process steps */}
          <motion.div
            className="bp-process"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {[
              { n: '01', label: 'Pick a space', desc: 'Browse facilities below' },
              { n: '02', label: 'Choose date & time', desc: 'Select from available slots' },
              { n: '03', label: 'Fill your details', desc: 'Name, purpose & team size' },
              { n: '04', label: 'Get confirmed', desc: 'Instant booking ID issued' },
            ].map((s, i) => (
              <div key={i} className="bp-process__step">
                <div className="bp-process__num">{s.n}</div>
                <p className="bp-process__label">{s.label}</p>
                <p className="bp-process__desc">{s.desc}</p>
                {i < 3 && <div className="bp-process__arrow"><ArrowRight size={16} /></div>}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Notice Bar ── */}
      <div className="bp-notice">
        <div className="container bp-notice__inner">
          <span className="bp-notice__dot" />
          <p>All standard bookings are <strong>free of charge</strong> for UNILAG students and staff. Bookings are self-service and confirmed instantly.</p>
        </div>
      </div>

      {/* ── Facilities Grid ── */}
      <section className="bp-facilities">
        <div className="container">
          <div className="bp-facilities__header">
            <div>
              <h2 className="section-title">Choose Your <em className="serif italic">Space</em></h2>
              <p className="section-subtitle">{filtered.length} spaces available</p>
            </div>
            <div className="bp-cap-filters">
              <span className="bp-cap-filters__label">Filter by capacity:</span>
              {capacityFilters.map(f => (
                <button
                  key={f}
                  className={`gallery-filter-btn ${filterCap === f ? 'active' : ''}`}
                  onClick={() => setFilterCap(f)}
                >{f}</button>
              ))}
            </div>
          </div>

          <div className="bp-facilities-grid">
            {filtered.map(facility => (
              <FacilityBookingCard
                key={facility.id}
                facility={facility}
                onBook={setBookingFacility}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bp-faq">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-eyebrow">Need Help?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="bp-faq-grid">
            {[
              { q: 'Is booking really free?', a: 'Yes — all standard bookings are free for all UNILAG students, researchers, and faculty. No fees, ever.' },
              { q: 'Can I book on behalf of a group?', a: 'Absolutely. Enter your details as the group representative and specify your team size. The system will check capacity.' },
              { q: 'What if I need to cancel?', a: 'Please email ai.unipod@unilag.edu.ng with your Booking ID at least 2 hours before your slot so others can use the space.' },
              { q: 'Can I book recurring slots?', a: "Recurring weekly bookings are currently handled via email. Contact us and we'll set them up for you." },
              { q: 'Do I need to bring my own equipment?', a: 'All core equipment listed for each facility is provided free of charge. You may bring personal laptops and accessories.' },
              { q: 'What happens after I book?', a: 'You\'ll receive an on-screen confirmation with a Booking ID. Bring your student or staff ID when you arrive.' },
            ].map((faq, i) => (
              <motion.div
                key={i}
                className="bp-faq-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <h5 className="bp-faq-card__q">{faq.q}</h5>
                <p className="bp-faq-card__a">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {bookingFacility && (
        <BookingModal facility={bookingFacility} onClose={() => setBookingFacility(null)} />
      )}

      {/* ── Contact strip ── */}
      <div className="bp-contact-strip">
        <div className="container bp-contact-strip__inner">
          <div>
            <p className="bp-contact-strip__title">Still have questions?</p>
            <p className="bp-contact-strip__sub">Our team is available Monday–Friday, 9 AM–5 PM.</p>
          </div>
          <a href="mailto:ai.unipod@unilag.edu.ng" className="btn-primary-blue">
            ai.unipod@unilag.edu.ng
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
