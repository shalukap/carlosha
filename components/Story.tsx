
import React from 'react';
import { Target, Eye, Users, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Story: React.FC = () => {
  return (
    <section id="about" className="pt-40 pb-80 bg-obsidian px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-24 items-center lg:px-12">
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative lg:col-span-4"
          >
            <div className="aspect-square rounded-[4rem] overflow-hidden border border-white/5 bg-white/5 relative group">
              <img 
                src="/assets/images/agency-story.png" 
                alt="Carlosha Agency Architecture" 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
              
              {/* Floating Stat */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute bottom-10 left-10 p-8 glass-panel neon-border-blue flex flex-col items-center text-center"
              >
                <span className="text-4xl font-black text-white block">99%</span>
                <span className="text-[10px] text-electric font-bold tracking-widest uppercase">Client Satisfaction</span>
              </motion.div>
            </div>
            
            {/* Decorative Orbit */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-electric/20 rounded-full animate-orbit pointer-events-none hidden lg:block"></div>
          </motion.div>

          {/* Content Side */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <h3 className="text-electric font-black text-xs tracking-[0.4em] uppercase mb-4">The Manifesto</h3>
              <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none uppercase">
                WE BELIEVE IN THE <br />
                <span className="text-white/20">ART OF CODE</span>
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8 flex flex-col items-center lg:items-start"
            >
              <div className="relative pl-0 lg:pl-12 flex flex-col items-center lg:items-start">
                <Quote className="hidden lg:block absolute top-0 left-0 text-electric opacity-50" size={32} />
                <p className="text-xl lg:text-2xl text-white font-medium leading-tight max-w-xl">
                  At <span className="text-white">CARLOSHA</span>, we started with a simple belief: excellence is not an act, but a habit. We don't just build websites; we craft digital legacies.
                </p>
              </div>

              <p className="text-white/40 text-lg leading-relaxed max-w-xl">
                Today, we stand at the intersection of artisanal design and industrial-scale engineering. Every project we touch is a blend of thoughtful strategy and high-fidelity output, designed to elevate your brand to the global stage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 w-full">
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-electric/50 transition-all flex flex-col items-center text-center">
                  <Target className="text-electric mb-6" size={32} />
                  <h4 className="text-white font-bold text-sm uppercase mb-3 tracking-widest">Mission</h4>
                  <p className="text-white/40 text-xs leading-loose">Dominating the <br /> digital frontier.</p>
                </div>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-violet/50 transition-all flex flex-col items-center text-center">
                  <Eye className="text-violet mb-6" size={32} />
                  <h4 className="text-white font-bold text-sm uppercase mb-3 tracking-widest">Vision</h4>
                  <p className="text-white/40 text-xs leading-loose">Setting the <br /> global benchmark.</p>
                </div>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-white/50 transition-all flex flex-col items-center text-center">
                  <Users className="text-white mb-6" size={32} />
                  <h4 className="text-white font-bold text-sm uppercase mb-3 tracking-widest">Team</h4>
                  <p className="text-white/40 text-xs leading-loose">Collective <br /> human brilliance.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
