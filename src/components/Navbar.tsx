
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="azuki-container flex items-center justify-between py-4">
        <div className="flex items-center">
          <span className="text-azuki-red font-bold text-lg">RAYCHR</span>
          <div className="hidden ml-10 md:flex space-x-6">
            <a href="#about" className="text-sm text-white/80 hover:text-white transition-colors story-link">ABOUT</a>
            <a href="#gallery" className="text-sm text-white/80 hover:text-white transition-colors story-link">GALLERY</a>
            <a href="#team" className="text-sm text-white/80 hover:text-white transition-colors story-link">TEAM</a>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center text-xs font-mono text-white/60">
            <span>Mobile: 360px</span>
            <span className="mx-2">|</span>
            <span>Tablet: 600px</span>
            <span className="mx-2">|</span>
            <span>Desktop: 1240px</span>
          </div>
          <button className="azuki-btn">CONNECT</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
