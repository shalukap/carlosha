
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const TechBadge: React.FC<{ name: string; delay: number }> = ({ name, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
    className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white/50 uppercase tracking-widest hover:border-electric/50 hover:text-electric transition-colors cursor-default"
  >
    {name}
  </motion.div>
);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const words = "CRAFTING LUXURY DIGITAL EXPERIENCES".split(" ");

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-obsidian pt-40 pb-48 px-6">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/hero.png" 
          alt="Carlosha Background" 
          className="w-full h-full object-cover opacity-30 grayscale saturate-0 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/80 to-obsidian"></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-violet/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 mb-12 px-6 py-2.5 rounded-full border border-electric/30 bg-electric/5 text-electric text-[10px] font-black tracking-[0.3em] uppercase mx-auto"
        >
          <Sparkles size={12} className="animate-spin-slow" />
          ESTABLISHED 2024 • THE NEW STANDARD
        </motion.div>

        <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-white mb-20 tracking-tight leading-[1.1] uppercase">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-6 lg:mr-12">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block ${i >= 2 ? 'text-gradient-electric' : ''}`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg md:text-2xl text-white/40 mb-20 max-w-3xl mx-auto font-medium leading-tight tracking-tight px-4"
        >
          We are a boutique agency specializing in the intersection of <span className="text-white">high-end design</span> and <span className="text-white">technical excellence</span>. We don't just build, we orchestrate.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <button className="btn-luxury-hero group relative bg-white text-obsidian rounded-full font-black text-sm tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10">
            <span className="relative z-10">START YOUR JOURNEY</span>
            <div className="absolute inset-0 bg-electric translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
          
          <button className="group px-12 py-5 border border-white/10 text-white rounded-full font-black text-sm tracking-widest glass-panel hover:bg-white/5 transition-all">
            VIEW OUR MANIFESTO
          </button>
        </motion.div>

        {/* Floating Tech Stack Indicator */}
        <div className="mt-24 flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
           <TechBadge name="React" delay={1.2} />
           <TechBadge name="Node.js" delay={1.3} />
           <TechBadge name="Python" delay={1.4} />
           <TechBadge name="Framer Motion" delay={1.5} />
           <TechBadge name="Enterprise Cloud" delay={1.6} />
        </div>
      </div>

      {/* Parallax Floating Elements */}
      <motion.div style={{ y: y1, opacity }} className="absolute -bottom-20 left-10 w-64 h-64 border border-white/5 rounded-[3rem] rotate-12 bg-white/[0.02] backdrop-blur-3xl hidden lg:block"></motion.div>
      <motion.div style={{ y: y1, opacity }} className="absolute top-40 right-20 w-48 h-48 border border-white/5 rounded-full -rotate-12 bg-white/[0.01] backdrop-blur-2xl hidden lg:block" transition={{ delay: 0.5 }}></motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] font-black tracking-[0.5em] uppercase">SCROLL</span>
        <ChevronDown size={14} />
      </motion.div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
