import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wifi, Cpu, ArrowUpRight } from 'lucide-react';

const FacilityCard = ({ id, number, name, image, capacity, features, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative h-[450px] w-full rounded-2xl overflow-hidden cursor-pointer shadow-lg"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
        <div className="flex justify-between items-start">
          <div className="text-sm font-bold opacity-60 tracking-[0.2em]">{number}</div>
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
            <ArrowUpRight size={20} />
          </div>
        </div>

        <div>
          <h3 className="text-3xl mb-3 serif italic">{name}</h3>
          <p className="text-sm opacity-80 line-clamp-2 mb-4 font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {description}
          </p>

          <div className="flex items-center gap-6 pt-4 border-t border-white/20">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold">
              <Users size={14} className="text-[var(--unilag-gold)]" />
              {capacity} Seats
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold">
              <Wifi size={14} className="text-[var(--unilag-gold)]" />
              High Speed
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FacilityCard;
