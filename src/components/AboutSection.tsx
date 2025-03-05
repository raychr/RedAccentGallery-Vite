
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 relative">
      <div className="azuki-container">
        <div className="text-xs font-mono text-white/60 mb-2">02</div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl text-white font-medium mb-2">ABOUT PAGE</h3>
            <div className="text-xs font-mono text-white/60 mb-8">
              <p>Mobile: 360px</p>
              <p>Tablet: 600px</p>
              <p>Desktop: 1240px</p>
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <div className="rotate-180 text-azuki-red text-[80px] md:text-[120px] font-display font-bold leading-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                  ABOUT
                </div>
                <div className="text-azuki-red text-[80px] md:text-[120px] font-display font-bold leading-none">
                  US
                </div>
              </div>

              <div className="w-full lg:w-1/2 fade-in-bottom" style={{ animationDelay: '200ms' }}>
                <p className="text-white/80 mb-6 leading-relaxed">
                  LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. EST HARUM INCIDUNT ALIQUAM QUAM DISTINCTIO NOSTRUM ATQUE BLANDITIIS DUCIMUS A ADIPISCI, IPSUM, RERUM CONSEQUUNTUR, CONSEQUATUR MOLESTIAS APERIAM. AUT TENETUR EST EVENIET.
                </p>
                <p className="text-white/80 mb-6 leading-relaxed">
                  LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. EST HARUM INCIDUNT ALIQUAM QUAM DISTINCTIO NOSTRUM ATQUE BLANDITIIS DUCIMUS A ADIPISCI, IPSUM, RERUM CONSEQUUNTUR, CONSEQUATUR MOLESTIAS APERIAM. AUT TENETUR EST EVENIET.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 staggered-fade-in">
                  <img src="https://source.unsplash.com/random/300x300?anime" alt="Gallery item" className="w-full h-32 object-cover rounded hover-scale" />
                  <img src="https://source.unsplash.com/random/301x301?japan" alt="Gallery item" className="w-full h-32 object-cover rounded hover-scale" />
                  <img src="https://source.unsplash.com/random/302x302?digital" alt="Gallery item" className="w-full h-32 object-cover rounded hover-scale" />
                </div>

                <button className="azuki-btn mt-8">VIEW ALL WORKS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
