import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ── Components ──────────────────────────────────────
import Navbar          from './components/Navbar';
import Footer          from './components/Footer';
import Hero            from './components/Hero';
import BentoSection    from './components/BentoSection';
import FacilitiesSection from './components/FacilitiesSection';
import GallerySection  from './components/GallerySection';
import ProjectsShowcase from './components/ProjectsShowcase';
import BlogSection     from './components/BlogSection';
import SubmitProject   from './components/SubmitProject';

// ── Pages ───────────────────────────────────────────
import BlogPage        from './pages/BlogPage';
import BlogPostPage    from './pages/BlogPostPage';
import AdminPortal     from './pages/AdminPortal';
import AboutPage       from './pages/AboutPage';
import BookingPage     from './pages/BookingPage';


const HomePage = () => (
  <main className="min-h-screen">
    <Navbar />
    <Hero />
    <BentoSection />
    <FacilitiesSection />
    <GallerySection />
    <BlogSection />
    <SubmitProject />
    <Footer />
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/admin" element={<><Navbar /><AdminPortal /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
