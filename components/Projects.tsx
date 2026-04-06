import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const MonitorFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full group/monitor">
      {/* Screen Frame - Ceramic White Finish */}
      <div className="relative aspect-[16/10] bg-[#f5f5f7] rounded-[2.5rem] p-4 shadow-[0_40px_120px_-20px_rgba(255,255,255,0.05)] border border-white/20 overflow-hidden ring-1 ring-white/30">
        {/* Subtle Screen Reflection */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/[0.05] to-transparent"></div>
        
        {/* The Screen Content */}
        <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-obsidian">
          {children}
          {/* Glass Overlay Light */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent opacity-0 group-hover/monitor:opacity-100 transition-opacity duration-1000"></div>
        </div>

        {/* Bezel Details - Darker text for white bezel */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-80">
          <div className="w-1.5 h-1.5 rounded-full bg-electric shadow-[0_0_8px_rgba(0,242,255,1)] animate-pulse"></div>
          <div className="text-[7px] font-mono text-obsidian/60 font-black tracking-tighter uppercase">STREAMS_ACTIVE</div>
        </div>
      </div>

      {/* Monitor Stand - Matte White / Silver */}
      <div className="relative w-full flex flex-col items-center -mt-1">
        {/* Stand Neck */}
        <div className="w-24 h-12 bg-gradient-to-b from-[#e5e5e7] to-[#d1d1d6] border-x border-white/20"></div>
        {/* Stand Base */}
        <div className="w-48 h-3 bg-white rounded-full shadow-2xl border-t border-white/50"></div>
        <div className="w-64 h-2 bg-white/5 blur-md -mt-1 scale-x-150"></div>
      </div>

      {/* Behind Screen Glow */}
      <div className="absolute -inset-10 bg-white/5 blur-[100px] opacity-0 group-hover/monitor:opacity-100 transition-opacity duration-700 -z-10"></div>
    </div>
  );
};

const ProjectCard: React.FC<{ 
  title: string; 
  category: string; 
  image: string; 
  index: number;
}> = ({ title, category, image, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
       transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className={`group relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-20 lg:gap-48 mb-64 lg:mb-[30rem]`}
    >
      {/* Monitor Container */}
      <div className="w-full md:w-3/5">
        <MonitorFrame>
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </MonitorFrame>
      </div>

      {/* Content Container - Precision Aligned to Screen Center */}
      <div className="w-full md:w-2/5 text-left md:pt-32 lg:pt-[160px]">
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-16 bg-electric"></span>
          <span className="text-electric font-black text-xs uppercase tracking-[0.4em]">{category}</span>
        </motion.div>
        
        <h3 className="text-4xl lg:text-7xl font-black text-white tracking-tighter leading-[0.85] uppercase">
          {title}
        </h3>
        
        {/* Physical Spacer for Guaranteed Gap */}
        <div className="h-12 md:h-16 lg:h-[64px]" />
        
        <div className="flex flex-wrap gap-6 items-center">
          <button className="btn-luxury group flex items-center gap-4 bg-white text-obsidian rounded-full font-black text-sm tracking-widest hover:bg-electric transition-all shadow-2xl shadow-white/5 active:scale-95">
            CASE STUDY 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-16 h-16 flex items-center justify-center border border-white/10 text-white rounded-full hover:bg-white/5 hover:border-white/30 transition-all">
            <ExternalLink size={24} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    { title: "Portal St. Joseph", category: "Education Ecosystem", image: "/assets/images/project-edu.png" },
    { title: "Unizone Hub", category: "Scalable LMS", image: "/assets/images/project-lms.png" },
    { title: "Vortex Trading", category: "Fintech Dashboard", image: "/assets/images/project-fintech.png" },
    { title: "Lumina Health", category: "Clinical Network", image: "/assets/images/project-health.png" },
  ];

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="projects" className="py-80 bg-obsidian px-6 relative overflow-hidden">
      {/* Decorative Branding */}
      <div className="absolute top-1/2 -right-20 rotate-90 text-[15vw] font-black text-white/[0.01] pointer-events-none select-none uppercase tracking-tighter">
        Display
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-56 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-2xl md:text-5xl font-black text-white/5 tracking-[0.05em] uppercase leading-none mb-4"
            >
              SELECTED SHOWCASE
            </motion.div>
            <h2 className="text-5xl md:text-9xl font-black text-white tracking-tighter uppercase relative z-10 leading-[0.85]">
              LIVE <span className="text-white/10 outline-text">PROTOTYPES</span>
            </h2>
        </header>

        <div className="relative">
           {projects.map((project, idx) => (
             <ProjectCard key={idx} {...project} index={idx} />
           ))}
        </div>

        {/* Physical Spacer for Global Spacing Synchronization */}
        <div className="h-24 md:h-32 lg:h-[160px]" />
        
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative p-24 md:p-32 rounded-[4rem] overflow-hidden group/cta"
        >
            {/* Animated Border Gradient Layer */}
            <div className="absolute inset-0 p-[2px] rounded-[4rem] overflow-hidden">
                <div className="absolute inset-[-1000%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_90deg,#00f2ff_180deg,transparent_270deg,transparent_360deg)] opacity-40 group-hover/cta:opacity-100 transition-opacity duration-1000"></div>
            </div>

            {/* Main Glass Panel */}
            <div className="relative h-full w-full bg-obsidian/90 backdrop-blur-3xl rounded-[3.9rem] p-16 md:p-24 flex flex-col items-center text-center border border-white/5 shadow-2xl">
                
                {/* Technical Node Background */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20 group-hover/cta:opacity-40 transition-opacity duration-1000">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <pattern id="node-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="1" cy="1" r="0.5" fill="white" fillOpacity="0.2" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#node-grid)" />
                        {/* Connecting Lines */}
                        <line x1="0" y1="20" x2="100" y2="80" stroke="white" strokeOpacity="0.05" strokeWidth="0.1" />
                        <line x1="20" y1="0" x2="80" y2="100" stroke="white" strokeOpacity="0.05" strokeWidth="0.1" />
                    </svg>
                </div>

                {/* Content Layer */}
                <div className="relative z-10 w-full">
                    <div className="flex flex-col items-center">
                        <motion.div 
                          animate={{ 
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                          }}
                          transition={{ 
                            duration: 5, 
                            repeat: Infinity, 
                            ease: "linear" 
                          }}
                          className="bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200%_auto] bg-clip-text"
                        >
                            <h4 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-[0.02em] uppercase leading-none">
                              HAVE A <span className="text-gradient-electric">VISION?</span>
                            </h4>
                        </motion.div>
                        
                        <p className="text-white/40 text-xl md:text-3xl font-medium mb-16 max-w-2xl mx-auto leading-tight italic">
                          "We don't just build websites; we engineer the <span className="text-white">future-proof ecosystems</span> that power global brands."
                        </p>
                        
                        <div className="relative group/btn">
                            {/* Button Highlight Glow */}
                            <div className="absolute -inset-1 bg-electric/40 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-full"></div>
                            
                            <button className="btn-luxury relative flex items-center gap-6 bg-white text-obsidian rounded-full font-black text-sm md:text-lg tracking-[0.2em] px-16 py-6 hover:bg-electric transition-all shadow-3xl active:scale-95">
                                INITIATE PARTNERSHIP
                                <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
                            </button>
                        </div>

                        {/* Status Bar */}
                        <div className="mt-16 pt-16 border-t border-white/5 w-full flex justify-between items-center opacity-30 text-[10px] font-mono tracking-widest uppercase">
                            <span>Encrypted Pipeline Ready</span>
                            <span>System.Status: Active</span>
                            <span>Awaiting Connection...</span>
                        </div>
                    </div>
                </div>

                {/* Animated Liquid Blob in Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric/10 blur-[120px] rounded-full animate-pulse z-[-1]"></div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
