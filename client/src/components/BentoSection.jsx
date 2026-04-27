import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, Cpu, Users, Rocket, ArrowUpRight,
  BookOpen, CheckCircle, Wifi, Clock, Star
} from 'lucide-react';

/* ─── Live Clock Helper ───────────────────────── */
const useClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

/* ─── Individual Card variants ───────────────── */

// Card A — Large booking CTA (spans 2 cols, 2 rows)
const BookCard = () => (
  <motion.div
    className="bento-card bento-card--book"
    whileHover={{ scale: 1.015 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="bento-card__bg-pattern" />
    <div className="bento-card__content">
      <div className="bento-tag bento-tag--light">
        <span className="bento-pulse" /> Live Availability
      </div>
      <h2 className="bento-book__title">Book a Space<br /><em>in 3 Minutes.</em></h2>
      <p className="bento-book__sub">
        Workstations, robotics labs, conference rooms — pick a slot and you're confirmed instantly.
      </p>
      <a href="#facilities" className="bento-book__cta">
        Browse Facilities <ArrowUpRight size={16} />
      </a>
    </div>
    {/* Decorative circles */}
    <div className="bento-book__circle bento-book__circle--1" />
    <div className="bento-book__circle bento-book__circle--2" />
  </motion.div>
);

// Card B — Live Clock + Status
const ClockCard = () => {
  const time = useClock();
  const hours = time.getHours();
  const isOpen = hours >= 8 && hours < 20;
  return (
    <motion.div className="bento-card bento-card--clock" whileHover={{ y: -4 }}>
      <div className="bento-card__content">
        <div className="bento-tag bento-tag--dark">
          <Clock size={11} />Operating Hours
        </div>
        <div className="bento-clock__time">
          {time.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit', hour12: true })}
        </div>
        <div className={`bento-status ${isOpen ? 'bento-status--open' : 'bento-status--closed'}`}>
          <span className="bento-pulse" />
          {isOpen ? 'OPEN NOW' : 'CLOSED'}
        </div>
        <p className="bento-clock__hours">Mon – Sat · 8 AM – 8 PM</p>
      </div>
    </motion.div>
  );
};

// Removed StatsCard per user request

// Card D — Facilities mini-showcase
const FacilitiesCard = () => {
  const rooms = [
    { icon: Cpu, name: 'Robotics & AI Lab', seats: 15, available: true },
    { icon: Users, name: 'Think-Tank Room', seats: 20, available: false },
    { icon: BookOpen, name: 'Conference Suite', seats: 16, available: true },
  ];
  return (
    <motion.div className="bento-card bento-card--facilities" whileHover={{ y: -4 }}>
      <div className="bento-card__content">
        <div className="bento-tag bento-tag--blue">
          <Wifi size={11} /> Real-Time Rooms
        </div>
        <div className="bento-rooms">
          {rooms.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.name} className="bento-room">
                <div className="bento-room__icon"><Icon size={16} /></div>
                <div className="bento-room__info">
                  <span className="bento-room__name">{r.name}</span>
                  <span className="bento-room__seats">{r.seats} seats</span>
                </div>
                <div className={`bento-room__dot ${r.available ? 'available' : 'occupied'}`} />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

// Card E — Submit Project CTA
const SubmitCard = () => (
  <motion.div className="bento-card bento-card--submit" whileHover={{ scale: 1.02 }}>
    <div className="bento-card__content">
      <div className="bento-submit__icon"><Rocket size={26} /></div>
      <h3 className="bento-submit__title">Submit Your Project</h3>
      <p className="bento-submit__sub">
        Remote or on-campus — pitch your research idea and get mentorship, resources & recognition.
      </p>
      <a href="#proposals" className="bento-submit__link">
        Start Submission <ArrowUpRight size={14} />
      </a>
    </div>
  </motion.div>
);

// Removed ApprovedCard per user request

// Card G — Quote / culture card
const QuoteCard = () => (
  <motion.div className="bento-card bento-card--quote" whileHover={{ y: -4 }}>
    <div className="bento-card__content">
      <div className="bento-quote__mark">"</div>
      <blockquote className="bento-quote__text">
        The future of Nigeria is built right here at AI UNIPOD.
      </blockquote>
      <cite className="bento-quote__cite">— Prof. Rahamon Bello, Vice-Chancellor, UNILAG</cite>
    </div>
    <div className="bento-quote__badge">UNDP Partner</div>
  </motion.div>
);

/* ─── Main Bento Grid ─────────────────────────── */
const BentoSection = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section className="bento-section">
      <div className="container">
        <motion.div
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={cardVariants} className="bento-area bento-area--book"><BookCard /></motion.div>
          <motion.div variants={cardVariants} className="bento-area bento-area--clock"><ClockCard /></motion.div>
          <motion.div variants={cardVariants} className="bento-area bento-area--facilities"><FacilitiesCard /></motion.div>
          <motion.div variants={cardVariants} className="bento-area bento-area--submit"><SubmitCard /></motion.div>
          <motion.div variants={cardVariants} className="bento-area bento-area--quote"><QuoteCard /></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoSection;
