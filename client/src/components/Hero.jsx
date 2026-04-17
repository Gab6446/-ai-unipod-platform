import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(128,0,0,0.05),transparent_50%)]">
      {/* Background Decorative Element (Adinkra Symbol Mock) */}
      <div className="absolute top-1/4 -right-20 opacity-[0.03] select-none pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 100 100">
          {/* Mock Nyansapo (Wisdom Knot) */}
          <path d="M50 10 C 30 10, 10 30, 10 50 C 10 70, 30 90, 50 90 C 70 90, 90 70, 90 50 C 90 30, 70 10, 50 10 Z M50 20 C 65 20, 80 35, 80 50 C 80 65, 65 80, 50 80 C 35 80, 20 65, 20 50 C 20 35, 35 20, 50 20 Z" fill="var(--unilag-maroon)" />
          <path d="M40 50 L60 50 M50 40 L50 60" stroke="var(--unilag-maroon)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-[var(--border-light)] text-[var(--undp-blue)] font-bold text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--unilag-maroon)] animate-pulse" />
            Empowering UNILAG Innovators
          </div>
          
          <h1 className="text-5xl md:text-7xl leading-[1.1] text-[var(--text-primary)]">
            Where <span className="text-[var(--unilag-maroon)]">Heritage</span> Meets <br />
            <span className="serif italic">Digital Innovation.</span>
          </h1>
          
          <p className="text-xl text-[var(--text-secondary)] max-w-lg leading-relaxed font-light">
            AI UNIPOD provides students and researchers at the University of Lagos with world-class facilities, robotics labs, and a transparent platform to turn ideas into impact.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[var(--unilag-maroon)] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-[var(--unilag-maroon)]/20 hover:-translate-y-1 transition-all flex items-center gap-2">
              Explore Facilities <ArrowRight size={20} />
            </button>
            <button className="bg-white border-2 border-[var(--unilag-maroon)] text-[var(--unilag-maroon)] px-8 py-4 rounded-full font-bold hover:bg-[var(--unilag-maroon)]/5 transition-all flex items-center gap-2">
              <Rocket size={20} /> Submit Project
            </button>
          </div>

          <div className="pt-8 flex items-center gap-12 border-t border-[var(--border-light)] max-w-sm">
            <div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-xs uppercase tracking-widest text-[var(--text-secondary)]">Active Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold">7</div>
              <div className="text-xs uppercase tracking-widest text-[var(--text-secondary)]">Creative Spaces</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-xs uppercase tracking-widest text-[var(--text-secondary)]">Real-time Support</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Subagent Placeholder: Replace with actual image later */}
          <div className="absolute inset-0 bg-[var(--unilag-maroon)]/10 backdrop-blur-sm flex items-center justify-center border-4 border-white">
             <img 
               src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070" 
               alt="Innovation Lab" 
               className="object-cover w-full h-full mix-blend-multiply opacity-80"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             <div className="absolute bottom-10 left-10 text-white">
                <blockquote className="serif text-2xl italic leading-tight max-w-xs">
                  "The future of Nigeria is built right here at AI UNIPOD."
                </blockquote>
                <p className="mt-4 text-sm font-bold opacity-80 uppercase tracking-widest">— Prof. Rahamon Bello</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
