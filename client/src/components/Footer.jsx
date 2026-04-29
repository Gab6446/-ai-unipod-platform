import React from 'react';

/**
 * Footer
 * Site-wide footer shown on all pages.
 * Displays UNDP/UNILAG branding, navigation links, and contact info.
 */
const Footer = () => (
  <footer className="site-footer">
    {/* UNDP Blue Partnership Stripe */}
    <div className="footer-undp-stripe">
      <span className="footer-undp-stripe__dot" />
      <span className="footer-undp-stripe__text">United Nations Development Programme</span>
      <span className="footer-undp-stripe__dot" />
      <span className="footer-undp-stripe__text">·</span>
      <span className="footer-undp-stripe__dot" />
      <span className="footer-undp-stripe__text">In Partnership with the University of Lagos</span>
      <span className="footer-undp-stripe__dot" />
    </div>

    <div className="container">
      <div className="footer-grid">

        {/* Brand Block */}
        <div className="footer-brand">
          <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/Images/unilag-logo.png" alt="UNILAG Logo" style={{ height: '36px', width: 'auto' }} />
            <img src="/Images/undp-logo.png"   alt="UNDP Logo"   style={{ height: '38px', width: 'auto' }} />
            <div>
              <span className="footer-logo__name">AI UNIPOD</span>
              <span className="footer-logo__sub">UNDP · University of Lagos</span>
            </div>
          </div>
          <p className="footer-brand__tagline">
            The University of Lagos Academic Hub for Innovation, Design, and Robotics.
            Partnered with UNDP to foster the next generation of African innovators.
          </p>
          <div className="footer-social">
            {['Twitter', 'LinkedIn', 'Instagram'].map(s => (
              <a key={s} href="#" className="footer-social__link">{s[0]}</a>
            ))}
          </div>
        </div>

        {/* Platform Links */}
        <div className="footer-links-group">
          <h4 className="footer-links__heading">Platform</h4>
          <ul className="footer-links">
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#projects">Showcase</a></li>
            <li><a href="#proposals">Submit Project</a></li>
          </ul>
        </div>

        {/* Resource Links */}
        <div className="footer-links-group">
          <h4 className="footer-links__heading">Resources</h4>
          <ul className="footer-links">
            <li><a href="/blog">Blog &amp; News</a></li>
            <li><a href="#">Research Portal</a></li>
            <li><a href="#">Facility Manuals</a></li>
            <li><a href="#">Alumni Network</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-links-group">
          <h4 className="footer-links__heading">Contact</h4>
          <ul className="footer-links footer-links--plain">
            <li>University of Lagos, Akoka</li>
            <li>ai.unipod@unilag.edu.ng</li>
            <li>+234 812 345 6789</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AI UNIPOD · University of Lagos. All rights reserved.</p>
        <div className="footer-bottom__links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Access</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
