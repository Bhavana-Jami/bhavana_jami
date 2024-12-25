import React from 'react';

const SkillsBubbles = () => {
  // Using official brand colors for technologies
  const skills = {
    expert: [
      { name: 'React', icon: '⚛️', color: '#61DAFB' },
      { name: 'JavaScript', icon: 'JS', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
      { name: 'Next.js', icon: 'N', color: '#000000' },
      { name: 'Tailwind CSS', icon: '🌊', color: '#38B2AC' }
    ],
    intermediate: [
      { name: 'Node.js', icon: '📦', color: '#339933' },
      { name: 'Python', icon: '🐍', color: '#3776AB' },
      { name: 'GraphQL', icon: '◈', color: '#E535AB' },
      { name: 'Docker', icon: '🐋', color: '#2496ED' }
    ]
  };

  return (
    <div className="min-h-screen  p-8 w-screen overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-16">My Skills</h1>
        
        {/* Desktop Layout (Infinity Shape) */}
        <div className="hidden lg:block relative h-[400px]">
          {/* Left loop (Experience) */}
          <div className="absolute left-0 w-1/2 h-full">
            <h2 className="text-2xl font-semibold text-white text-center mb-8">Experience</h2>
            <div className="relative w-96 h-96 mx-auto">
              {skills.expert.map((skill, index) => {
                const angle = (index * (360 / skills.expert.length)) * (Math.PI / 180);
                const radius = 140; // Reduced radius for tighter spacing
                const left = Math.cos(angle) * radius + radius;
                const top = Math.sin(angle) * radius + radius;
                
                return (
                  <div
                    key={skill.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 
                             px-6 py-4 rounded-[2rem] flex items-center gap-2 
                             shadow-lg hover:scale-110 transition-all duration-300
                             bg-gradient-to-b from-[#00c7ff] to-[#123a79]
                             backdrop-blur-sm bg-opacity-20 border border-white/10
                             hover:border-white/20 hover:bg-opacity-30"
                    style={{
                      left: `${left}px`,
                      top: `${top}px`
                    }}
                  >
                    <span style={{ color: skill.color }} className="text-2xl">
                      {skill.icon}
                    </span>
                    <span className="text-white font-bold">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right loop (Familiar With) */}
          <div className="absolute right-0 w-1/2 h-full">
            <h2 className="text-2xl font-semibold text-white text-center mb-8">Familiar With</h2>
            <div className="relative w-96 h-96 mx-auto">
              {skills.intermediate.map((skill, index) => {
                const angle = (index * (360 / skills.intermediate.length)) * (Math.PI / 180);
                const radius = 140; // Reduced radius for tighter spacing
                const left = Math.cos(angle) * radius + radius;
                const top = Math.sin(angle) * radius + radius;
                
                return (
                  <div
                    key={skill.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 
                             px-6 py-4 rounded-[2rem] flex items-center gap-2 
                             shadow-lg hover:scale-110 transition-all duration-300
                             bg-gradient-to-b from-[#00c7ff] to-[#123a79]
                             backdrop-blur-sm bg-opacity-20 border border-white/10
                             hover:border-white/20 hover:bg-opacity-30"
                    style={{
                      left: `${left}px`,
                      top: `${top}px`
                    }}
                  >
                    <span style={{ color: skill.color }} className="text-2xl">
                      {skill.icon}
                    </span>
                    <span className="text-white font-bold">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-12">
          {/* Expert Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-white text-center mb-6">Experience</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.expert.map((skill) => (
                <div
                  key={skill.name}
                  className="px-6 py-4 rounded-[4rem] flex items-center gap-2 
                           shadow-lg hover:scale-110 transition-all duration-300
                           bg-gradient-to-b from-[#00c7ff] to-[#123a79]
                           backdrop-blur-sm bg-opacity-20 border border-white/10
                           hover:border-white/20 hover:bg-opacity-30"
                >
                  <span style={{ color: skill.color }} className="text-2xl">
                    {skill.icon}
                  </span>
                  <span className="text-white font-bold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Intermediate Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-white text-center mb-6">Familiar With</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.intermediate.map((skill) => (
                <div
                  key={skill.name}
                  className="px-6 py-4 rounded-[1rem] flex items-center gap-1
                           shadow-lg hover:scale-110 transition-all duration-300
                           bg-gradient-to-b from-[#00c7ff] to-[#123a79]
                           
                           hover:border-white/20 hover:bg-opacity-30"
                >
                  <span style={{ color: skill.color }} className="text-2xl">
                    {skill.icon}
                  </span>
                  <span className="text-white font-bold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsBubbles;

