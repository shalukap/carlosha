
import React from 'react';

const TechIcon: React.FC<{ name: string; icon: string; top: string; left: string; delay: string }> = ({ name, icon, top, left, delay }) => (
  <div 
    className={`absolute hidden lg:flex flex-col items-center justify-center p-3 rounded-xl glass-card transition-all duration-1000 animate-bounce`}
    style={{ top, left, animationDelay: delay, animationDuration: '4s' }}
  >
    <img src={icon} alt={name} className="w-8 h-8 object-contain mb-1 opacity-80" />
    <span className="text-[10px] text-gray-400 font-semibold">{name}</span>
  </div>
);

const Hero: React.FC = () => {
  const icons = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', top: '15%', left: '85%', delay: '0s' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', top: '25%', left: '10%', delay: '0.5s' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', top: '10%', left: '70%', delay: '1s' },
    { name: 'JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', top: '75%', left: '50%', delay: '1.5s' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', top: '55%', left: '85%', delay: '2s' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', top: '65%', left: '20%', delay: '2.5s' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', top: '10%', left: '15%', delay: '3s' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg pt-20">
      {/* Network Animation Backdrop - Simulated with overlay pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff10 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Floating Icons */}
      {icons.map((icon, idx) => (
        <TechIcon key={idx} {...icon} />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-400 text-xs font-bold tracking-widest uppercase animate-pulse">
          Innovation at Scale
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
          CRAFTING LUXURY <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d2ff] via-[#ff00ff] to-[#00d2ff] bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
            DIGITAL EXPERIENCES
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Creative, responsive, and tailored solutions to grow your online presence. We build the future of digital craftsmanship.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-10 py-4 bg-white text-[#0f0720] rounded-full font-bold text-lg transition-all hover:bg-opacity-90 hover:scale-105 shadow-xl shadow-white/10">
            Get Started
          </button>
          <button className="px-10 py-4 border border-white/20 text-white rounded-full font-bold text-lg glass-card hover:bg-white/10 transition-all">
            View Projects
          </button>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
