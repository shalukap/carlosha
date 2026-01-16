
import React from 'react';

const TechItem: React.FC<{ name: string; icon: string }> = ({ name, icon }) => (
  <div className="flex flex-col items-center justify-center bg-white/80 p-6 rounded-2xl shadow-md border border-purple-100 hover:shadow-xl hover:border-blue-300 transition-all group">
    <img src={icon} alt={name} className="w-12 h-12 object-contain mb-3 grayscale group-hover:grayscale-0 transition-all duration-300" />
    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{name}</span>
  </div>
);

const Technologies: React.FC = () => {
  const techs = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  ];

  return (
    <section className="py-24 bg-[#f3e8ff] px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center mb-16 tracking-tight uppercase">OUR TECHNOLOGIES</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techs.map((tech, idx) => (
            <TechItem key={idx} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
