import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass py-3 shadow-sm' : 'py-6 bg-transparent'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[var(--unilag-maroon)] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight leading-none">AI UNIPOD</span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--undp-blue)] font-bold">University of Lagos</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#facilities" className="text-sm font-semibold hover:text-[var(--unilag-maroon)]">Facilities</a>
          <a href="#proposals" className="text-sm font-semibold hover:text-[var(--unilag-maroon)]">Proposals</a>
          <a href="#projects" className="text-sm font-semibold hover:text-[var(--unilag-maroon)]">Showcase</a>
          <button className="flex items-center gap-2 bg-[var(--unilag-maroon)] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all">
            <Calendar size={16} />
            Book a Space
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-[var(--border-light)] p-6 space-y-4 animate-fade-in">
          <a href="#facilities" className="block text-lg font-bold" onClick={() => setIsOpen(false)}>Facilities</a>
          <a href="#proposals" className="block text-lg font-bold" onClick={() => setIsOpen(false)}>Proposals</a>
          <a href="#projects" className="block text-lg font-bold" onClick={() => setIsOpen(false)}>Showcase</a>
          <button className="w-full flex items-center justify-center gap-2 bg-[var(--unilag-maroon)] text-white p-4 rounded-xl text-lg font-bold shadow-lg">
            <Calendar size={20} />
            Book a Space
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
