
import React from 'react';

const Team = () => {
  const teamMembers = [
    { id: 1, image: "https://i.pinimg.com/474x/95/d2/50/95d250f58cad96bad63e9e190f2699f9.jpg", name: "RAYANNA", role: "Founder" },
    { id: 2, image: "https://i.pinimg.com/236x/56/fb/0e/56fb0e72168995f8ec8e402bdf1ac7d7.jpg", name: "LOREM", role: "Artist" },
    { id: 3, image: "https://i.pinimg.com/236x/c8/7a/ff/c87affb13b37cfa5c318cfff1e1f6c13.jpg", name: "LOREM", role: "Developer" },
    { id: 4, image: "https://i.pinimg.com/236x/c8/7a/ff/c87affb13b37cfa5c318cfff1e1f6c13.jpg", name: "LOREM", role: "Community" },
  ];

  const communityMembers = [
    { id: 1, image: "https://i.pinimg.com/736x/72/b9/86/72b986b2fe0d8e6f3b6ef5329000b9a3.jpg", name: "LOREM" },
    { id: 2, image: "https://i.pinimg.com/736x/72/b9/86/72b986b2fe0d8e6f3b6ef5329000b9a3.jpg", name: "LOREM" },
    { id: 3, image: "https://i.pinimg.com/736x/0d/ff/83/0dff83d92fb2b5df9d3dfde8dc13ea4d.jpg", name: "LOREM" },
    { id: 4, image: "https://i.pinimg.com/736x/0d/ff/83/0dff83d92fb2b5df9d3dfde8dc13ea4d.jpg", name: "LOREM" },
    { id: 5, image: "https://i.pinimg.com/736x/0d/ff/83/0dff83d92fb2b5df9d3dfde8dc13ea4d.jpg", name: "LOREM" },
    { id: 6, image: "https://i.pinimg.com/736x/0d/ff/83/0dff83d92fb2b5df9d3dfde8dc13ea4d.jpg", name: "LOREM" },
    { id: 7, image: "https://i.pinimg.com/736x/0d/ff/83/0dff83d92fb2b5df9d3dfde8dc13ea4d.jpg", name: "LOREM" },
    { id: 8, image: "https://i.pinimg.com/736x/0d/ff/83/0dff83d92fb2b5df9d3dfde8dc13ea4d.jpg", name: "LOREM" },
  ];

  return (
    <section id="team" className="py-16 relative">
      <div className="azuki-container">
        <div className="text-xs font-mono text-white/60 mb-2">04</div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl text-white font-medium mb-2">TEAM</h3>
            <div className="text-xs font-mono text-white/60">
              <p>LOREM IPSUM DOLOR SIT AMET </p>
              <p>CONSECTETUR ADIPISICING ELIT.</p>
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <div className="mb-16 fade-in-bottom">
              <h3 className="text-azuki-red text-2xl font-display font-bold mb-6">LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT.</h3>
              <p className="text-white/80 mb-6">
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. EST HARUM INCIDUNT ALIQUAM QUAM DISTINCTIO NOSTRUM ATQUE BLANDITIIS DUCIMUS A ADIPISCI, IPSUM, RERUM CONSEQUUNTUR, CONSEQUATUR MOLESTIAS APERIAM. AUT TENETUR EST EVENIET.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 staggered-fade-in">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex flex-col items-center">
                    <div className="bg-azuki-red rounded-lg p-1 mb-3 hover-scale">
                      <img src={member.image} alt={member.name} className="w-16 h-16 object-cover rounded" />
                    </div>
                    <h4 className="text-white text-sm font-medium">{member.name}</h4>
                    <p className="text-white/60 text-xs">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in-bottom" style={{ animationDelay: '200ms' }}>
              <h3 className="text-azuki-red text-2xl font-display font-bold mb-6">COMMUNITY MEMBERS</h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 staggered-fade-in">
                {communityMembers.map((member) => (
                  <div key={member.id} className="flex flex-col items-center">
                    <div className="bg-azuki-red rounded-lg p-1 mb-2 hover-scale">
                      <img src={member.image} alt={member.name} className="w-12 h-12 object-cover rounded" />
                    </div>
                    <h4 className="text-white text-xs font-medium">{member.name}</h4>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <button className="azuki-btn">JOIN COMMUNITY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
