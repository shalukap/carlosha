
import React from 'react';
import { motion } from 'framer-motion';

const TechItem: React.FC<{ name: string; icon: string; index: number }> = ({ name, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.5 }}
    whileHover={{ y: -10, scale: 1.05, borderColor: '#00f2ff' }}
    className="flex flex-col items-center justify-center bg-white/5 p-12 rounded-[2.5rem] border border-white/5 transition-all group cursor-pointer"
  >
    <div className="relative w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-500">
      <img src={icon} alt={name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700" />
      <div className="absolute inset-0 bg-electric/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
    <span className="text-xs font-black text-white/40 uppercase tracking-[0.3em] group-hover:text-white transition-colors">{name}</span>
  </motion.div>
);

const Technologies: React.FC = () => {
  const techs = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ];

  return (
    <section className="py-80 bg-obsidian border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-24 gap-8 text-center max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/20 font-black tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            The Modern Stack
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            ENGINEERED FOR <br />
            <span className="text-gradient-electric">PERFORMANCE</span>
          </h2>
          <p className="text-white/40 max-w-lg text-lg md:text-xl font-medium leading-relaxed">
            We leverage a world-class technology stack to build resilient, scalable, and beautifully designed digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techs.map((tech, idx) => (
            <TechItem key={idx} {...tech} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
