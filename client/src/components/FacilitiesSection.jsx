import React from 'react';
import { motion } from 'framer-motion';
import FacilityCard from './FacilityCard';

const facilitiesData = [
  {
    id: 1,
    number: "01",
    name: "Robotics & AI Lab",
    description: "Equipped with Arduino kits, soldering stations, and specialized hardware for prototyping robotics and AI solutions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
    capacity: 15
  },
  {
    id: 2,
    number: "02",
    name: "Creators Studio",
    description: "High-end podcasting equipment, video editing suites, and acoustic treatment for content creators.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=2070",
    capacity: 6
  },
  {
    id: 3,
    number: "03",
    name: "Design & 3D Lab",
    description: "Access to industrial 3D printers, laser cutters, and the full Adobe Creative Suite for product designers.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=2070",
    capacity: 12
  },
  {
    id: 4,
    number: "04",
    name: "Think-Tank Room",
    description: "Floor-to-ceiling whiteboards and modular furniture designed for high-intensity brainstorming sessions.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070",
    capacity: 20
  }
];

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="section-padding bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="serif italic text-[var(--unilag-maroon)] text-xl block mb-4">Discovery Hub</span>
            <h2 className="text-5xl md:text-6xl text-[var(--text-primary)] mb-6">World-Class <span className="serif italic">Innovation</span> Spaces.</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              Each room at AI UNIPOD is purpose-built to facilitate specific stages of the innovation lifecycle, from ideation to rapid prototyping.
            </p>
          </div>
          <button className="flex items-center gap-2 font-bold text-[var(--undp-blue)] hover:gap-4 transition-all">
            View All 7 Facilities <span className="text-2xl">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {facilitiesData.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FacilityCard {...facility} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
