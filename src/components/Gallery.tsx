
import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "https://i.pinimg.com/236x/ac/30/f6/ac30f699162746e139e01bd44c5d4040.jpg",
      title: "LOREM"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/474x/73/bd/8f/73bd8f8971edef0ccf44f10fe9f9f2e9.jpg",
      title: "LOREM"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/0d/ff/83/0dff83d92fb2b5df9d3dfde8dc13ea4d.jpg",
      title: "LOREM"
    },
    {
      id: 4,
      image: "https://i.pinimg.com/736x/80/88/cb/8088cb1b6149f4e13ad2182d7907b408.jpg",
      title: "LOREM"
    },
    {
      id: 5,
      image: "https://i.pinimg.com/474x/02/45/ec/0245ecd14280539b402e8d13a596b02c.jpg",
      title: "LOREM"
    }
  ];

  return (
    <section id="gallery" className="py-16 relative bg-black">
      <div className="azuki-container">
        <div className="text-xs font-mono text-white/60 mb-2">03</div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl text-white font-medium mb-2">GALLERY</h3>
            <div className="text-xs font-mono text-white/60">
              <p>ALL IMAGES USED WERE SOURCED FROM PINTEREST AND SHOULD BE PROPERLY CREDITED TO THEIR RESPECTIVE ARTISTS.</p>
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 staggered-fade-in">
              {galleryItems.map((item) => (
                <div key={item.id} className="glass-card overflow-hidden hover-scale group">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4">
                        <h4 className="text-white font-medium text-sm">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="azuki-btn">EXPLORE MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
