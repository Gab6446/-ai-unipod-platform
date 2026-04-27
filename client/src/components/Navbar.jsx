import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-root ${scrolled ? 'navbar-root--scrolled' : ''}`}>

      {/* ── UNDP Top Bar ── */}
      <div className="undp-topbar">
        <div className="undp-topbar__inner">
          <div className="undp-topbar__left">
            <Globe size={12} />
            <span>United Nations Development Programme (UNDP) Partner Institution</span>
          </div>
          <div className="undp-topbar__right">
            <a href="https://www.undp.org" target="_blank" rel="noreferrer" className="undp-topbar__link">
              undp.org ↗
            </a>
            <span className="undp-topbar__divider" />
            <a href="https://www.unilag.edu.ng" target="_blank" rel="noreferrer" className="undp-topbar__link">
              unilag.edu.ng ↗
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <div className="navbar-inner">
        {/* Brand */}
        <Link to="/" className="navbar-brand">
          <img src="/Images/unilag-logo.png" alt="UNILAG Logo" style={{ height: '38px', width: 'auto' }} />
          <div className="navbar-brand__text" style={{ marginLeft: '4px', marginRight: '4px' }}>
            <span className="navbar-brand__name">AI UNIPOD</span>
            <span className="navbar-brand__sub">University of Lagos</span>
          </div>
          <img src="/Images/undp-logo.png" alt="UNDP Logo" style={{ height: '42px', width: 'auto' }} />
        </Link>

        {/* Desktop Links */}
        <div className="navbar-links">
          <a href={isHome ? '#facilities' : '/#facilities'} className="navbar-link">Spaces</a>
          <a href={isHome ? '#incubation' : '/#incubation'} className="navbar-link">Incubation</a>
          <a href={isHome ? '#projects' : '/#projects'} className="navbar-link">Projects</a>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/blog" className="navbar-link">Blogs</Link>
          <a href="#contact" className="navbar-link">Contact Us</a>
          <Link to="/booking" className="navbar-cta">
            <Calendar size={15} />
            Book a Space
          </Link>
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
          <a href={isHome ? '#facilities' : '/#facilities'} className="navbar-drawer__link" onClick={() => setIsOpen(false)}>Spaces</a>
          <a href={isHome ? '#incubation' : '/#incubation'} className="navbar-drawer__link" onClick={() => setIsOpen(false)}>Incubation</a>
          <a href={isHome ? '#projects' : '/#projects'} className="navbar-drawer__link" onClick={() => setIsOpen(false)}>Projects</a>
          <Link to="/about" className="navbar-drawer__link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/blog" className="navbar-drawer__link" onClick={() => setIsOpen(false)}>Blogs</Link>
          <a href="#contact" className="navbar-drawer__link" onClick={() => setIsOpen(false)}>Contact Us</a>
          <Link to="/booking" className="navbar-drawer__cta" onClick={() => setIsOpen(false)}>
            <Calendar size={18} /> Book a Space
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
