
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const marqueeText = "ギャラリー用のウェブサイト テンプレート ギャラリー用のウェブサイト テンプレート ギャラリー用のウェブサイト テンプレート ギャラリー用のウェブサイト テンプレート ギャラリー用のウェブサイト テンプレート ギャラリー用のウェブサイト テンプレート";

  return (
    <section className="min-h-screen pt-24 pb-12 relative overflow-hidden">
      {/* Top marquee text */}
      <div className="marquee-container py-2 mb-12">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-white/70 font-mono text-sm mx-4">{marqueeText}</span>
          <span className="text-white/70 font-mono text-sm mx-4">{marqueeText}</span>
        </div>
      </div>

      <div className="azuki-container">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="text-xs font-mono text-white/60 mb-2 animate-fade-in">01</div>
            <div className="flex items-center space-x-2 mb-1">
              <div className="azuki-tag animate-fade-in-left">ライチャー</div>
              <div className="azuki-tag animate-fade-in-left" style={{ animationDelay: '100ms' }}>RAYCHR</div>
            </div>
            <div className="text-xs font-mono text-white/60 animate-fade-in-left" style={{ animationDelay: '200ms' }}>
              WEBSITE + TEMPLATE + GALLERY
            </div>
          </div>

          <div className="w-full md:w-3/4 relative">
            <h1 className="text-azuki-red font-display font-bold text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none mb-4 animate-fade-in-right">
              RAYCHR
            </h1>

            <div className="flex items-start mt-4">
              <div className="w-full md:w-1/2">
                <h2 className="text-azuki-red font-display text-[6vw] md:text-[4vw] lg:text-[3vw] mb-8 animate-fade-in-right" style={{ animationDelay: '100ms' }}>
                  ライチャー
                </h2>

                <div className="relative overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/a8/27/6a/a8276aad77128658d4f3cc707e16532e.jpg"
                    alt="ART"
                    className="w-full max-w-md object-cover rounded hover-scale animate-scale-in"
                    style={{ animationDelay: '300ms' }}
                  />
                </div>
              </div>

              <div className="hidden md:block absolute right-0 top-20 text-white/60 text-xs font-mono max-w-[200px] animate-fade-in" style={{ animationDelay: '400ms' }}>
                <p>THIS TEMPLATE WAS DESIGNED FOR USE IN GALLERY WEBSITES. ALL IMAGES USED WERE SOURCED FROM PINTEREST AND SHOULD BE PROPERLY CREDITED TO THEIR RESPECTIVE ARTISTS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
