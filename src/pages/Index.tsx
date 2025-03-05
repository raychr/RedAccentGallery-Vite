
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 100,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-azuki-black text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Gallery />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
