import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoSection from './components/BentoSection';
import FacilitiesSection from './components/FacilitiesSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import SubmitProject from './components/SubmitProject';

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo__mark">A</div>
            <div>
              <span className="footer-logo__name">AI UNIPOD</span>
              <span className="footer-logo__sub">UNDP · University of Lagos</span>
            </div>
          </div>
          <p className="footer-brand__tagline">
            The University of Lagos Academic Hub for Innovation, Design, and Robotics. Partnered with UNDP to foster the next generation of African innovators.
          </p>
          <div className="footer-social">
            {['Twitter', 'LinkedIn', 'Instagram'].map(s => (
              <a key={s} href="#" className="footer-social__link">{s[0]}</a>
            ))}
          </div>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-links__heading">Platform</h4>
          <ul className="footer-links">
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#projects">Showcase</a></li>
            <li><a href="#proposals">Submit Project</a></li>
            <li><a href="#">How It Works</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-links__heading">Resources</h4>
          <ul className="footer-links">
            <li><a href="#">Brand Guidelines</a></li>
            <li><a href="#">Research Portal</a></li>
            <li><a href="#">Facility Manuals</a></li>
            <li><a href="#">Alumni Network</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-links__heading">Contact</h4>
          <ul className="footer-links footer-links--plain">
            <li>University of Lagos, Akoka</li>
            <li>ai.unipod@unilag.edu.ng</li>
            <li>+234 812 345 6789</li>
          </ul>
        </div>
      </div>

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

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BentoSection />
      <FacilitiesSection />
      <ProjectsShowcase />
      <SubmitProject />
      <Footer />
    </main>
  );
}

export default App;
