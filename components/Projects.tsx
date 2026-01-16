
import React from 'react';

const ProjectCard: React.FC<{ title: string; category: string; image: string }> = ({ title, category, image }) => (
  <div className="group relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10]">
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-[#0f0720]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
      <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">{category}</span>
      <h3 className="text-white text-2xl font-bold">{title}</h3>
      <button className="mt-6 w-fit px-6 py-2 border border-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-black transition-all">
        View Case Study
      </button>
    </div>
    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-slate-800 shadow-lg group-hover:opacity-0 transition-opacity">
      FEATURED
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    { title: "St. Joseph's College Portal", category: "Education Platform", image: "https://picsum.photos/seed/college/1200/800" },
    { title: "Unizone Learning Hub", category: "LMS Solution", image: "https://picsum.photos/seed/uni/1200/800" },
    { title: "Vortex Crypto Dashboard", category: "Fintech", image: "https://picsum.photos/seed/crypto/1200/800" },
    { title: "Lumina Health App", category: "Healthcare", image: "https://picsum.photos/seed/health/1200/800" },
  ];

  return (
    <section id="projects" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">OUR PROJECTS</h2>
            <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mt-4 rounded-full"></div>
          </div>
          <p className="text-slate-500 max-w-md font-medium">
            Explore our portfolio of premium digital solutions crafted for international and enterprise-level clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col">
               <h4 className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-4">{project.title}</h4>
               <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
