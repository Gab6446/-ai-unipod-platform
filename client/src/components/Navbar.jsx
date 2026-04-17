import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-root ${scrolled ? 'navbar-root--scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Brand */}
        <a href="/" className="navbar-brand">
          <div className="navbar-brand__mark">A</div>
          <div className="navbar-brand__text">
            <span className="navbar-brand__name">AI UNIPOD</span>
            <span className="navbar-brand__sub">University of Lagos</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="navbar-links">
          <a href="#facilities" className="navbar-link">Facilities</a>
          <a href="#proposals" className="navbar-link">Proposals</a>
          <a href="#projects" className="navbar-link">Showcase</a>
          <a href="#proposals" className="navbar-cta">
            <Calendar size={15} />
            Book a Space
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="navbar-drawer">
          <a href="#facilities" className="navbar-drawer__link" onClick={() => setIsOpen(false)}>Facilities</a>
          <a href="#proposals" className="navbar-drawer__link" onClick={() => setIsOpen(false)}>Proposals</a>
          <a href="#projects" className="navbar-drawer__link" onClick={() => setIsOpen(false)}>Showcase</a>
          <a href="#proposals" className="navbar-drawer__cta" onClick={() => setIsOpen(false)}>
            <Calendar size={18} /> Book a Space
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
