
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/10">
      <div className="azuki-container">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <span className="text-azuki-red font-bold text-lg mb-4 block">RAYCHR</span>
            <p className="text-white/60 text-xs max-w-xs">
              A BRAND FOR THE METAVERSE. BY THE PEOPLE
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white text-sm font-medium mb-4">EXPLORE</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white text-xs transition-colors story-link">About</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-xs transition-colors story-link">Gallery</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-xs transition-colors story-link">Team</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-xs transition-colors story-link">Gardens</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-medium mb-4">COMMUNITY</h4>
              <ul className="space-y-2">
                <li><a href="https://discord.gg/MtAb7Wpa" className="text-white/60 hover:text-white text-xs transition-colors story-link">Discord</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-xs transition-colors story-link">Twitter</a></li>
                <li><a href="https://www.instagram.com/rays_chris_/" className="text-white/60 hover:text-white text-xs transition-colors story-link">Instagram</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-medium mb-4">LEGAL</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white text-xs transition-colors story-link">Terms</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-xs transition-colors story-link">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10">
          <p className="text-white/40 text-xs mb-4 md:mb-0">© 2025 RAYCHR. ALL RIGHTS RESERVED.</p>
          <p className="text-white/40 text-xs">DESIGN BY RAYCHR</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
