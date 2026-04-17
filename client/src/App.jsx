import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FacilitiesSection from './components/FacilitiesSection';
import SubmitProject from './components/SubmitProject';

const Footer = () => (
  <footer className="bg-white border-t border-[var(--border-light)] pt-20 pb-10">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[var(--unilag-maroon)] rounded flex items-center justify-center text-white font-bold">A</div>
            <span className="font-bold tracking-tight">AI UNIPOD</span>
          </div>
          <p className="text-[var(--text-secondary)] max-w-sm">
            The University of Lagos Academic Hub for Innovation, Design, and Robotics. Partnered with UNDP to foster the next generation of African innovators.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Resources</h4>
          <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
            <li><a href="#" className="hover:text-[var(--unilag-maroon)]">Brand Guidelines</a></li>
            <li><a href="#" className="hover:text-[var(--unilag-maroon)]">Research Portal</a></li>
            <li><a href="#" className="hover:text-[var(--unilag-maroon)]">Facility Manuals</a></li>
            <li><a href="#" className="hover:text-[var(--unilag-maroon)]">Alumni Network</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
          <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
            <li>University of Lagos, Akoka</li>
            <li>ai.unipod@unilag.edu.ng</li>
            <li>+234 812 345 6789</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-[var(--border-light)] gap-4">
        <p className="text-xs text-[var(--text-secondary)]">
          © {new Date().getFullYear()} AI UNIPOD. All rights reserved. 
        </p>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">
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
      <FacilitiesSection />
      <SubmitProject />
      <Footer />
    </main>
  );
}

export default App;
