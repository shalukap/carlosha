
import React, { useState } from 'react';
import { Layout, Smartphone, Database, ArrowUpRight, Zap, Shield, Globe } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const BentoCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  index: string;
  className?: string; 
  delay?: number;
  highlight?: boolean;
  children?: React.ReactNode;
}> = ({ title, description, icon, index, className = "", delay = 0, highlight = false, children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-[4rem] p-16 border border-white/5 bg-white/[0.02] backdrop-blur-3xl flex flex-col items-center justify-center text-center gap-12 ${className}`}
    >
      {/* Interactive Mesh Glow */}
      <motion.div 
        className="pointer-events-none absolute -inset-px rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(1000px circle at ${mouseX}px ${mouseY}px, rgba(0, 242, 255, 0.08), transparent 40%)`
        }}
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>

      <div className={`relative z-10 w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 ${highlight ? 'bg-electric text-obsidian scale-110 shadow-[0_0_50px_rgba(0,242,255,0.4)]' : 'bg-white/5 text-white group-hover:bg-white group-hover:text-obsidian'}`}>
        {React.cloneElement(icon as React.ReactElement, { size: 32 })}
      </div>
      
      <div className="relative z-10 w-full flex flex-col items-center gap-6">
        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[0.85] uppercase group-hover:text-electric transition-colors">{title}</h3>
        <p className="text-white/40 text-lg md:text-xl leading-relaxed font-medium group-hover:text-white/70 transition-colors max-w-[80%] mx-auto">
          {description}
        </p>

        {children}
      </div>

      {/* Subtle Glow Corner */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-electric/5 to-transparent rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </motion.div>
  );
};

const Solutions: React.FC = () => {
  return (
    <section id="services" className="py-80 bg-obsidian px-6 overflow-hidden relative">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.01] pointer-events-none select-none uppercase tracking-tighter">
        Solutions
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="flex flex-col items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 rounded-full border border-electric/30 bg-electric/5 text-electric text-[10px] font-black tracking-[0.4em] uppercase mb-10"
          >
            Capabilities & Excellence
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-16"
          >
            ORCHESTRATING THE <br />
            <span className="text-white/10 outline-text">DIGITAL FUTURE</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 max-w-2xl text-xl md:text-2xl font-medium leading-relaxed tracking-tight"
          >
            We don't provide services; we deliver <span className="text-white">digital dominance</span>. Our methodology blends artistic rigor with industrial-grade engineering to create legendary digital ecosystems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Main Hero Card - Bento Large */}
          <BentoCard
            className="md:col-span-4 md:row-span-2 min-h-[750px]"
            index="01"
            title="Bespoke Web Ecosystems"
            description="We build hyper-performance platforms that don't just exist—they lead. Every pixel is intentional, every interaction is a statement of quality."
            icon={<Layout />}
            highlight={true}
          >
            {/* Abstract Technical Graphic for Large Card - Now expanded and wider */}
            <div className="w-full mt-6 p-10 rounded-[2.5rem] bg-black/40 border border-white/5 relative overflow-hidden group/graphic">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00f2ff 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
              <div className="relative z-10 flex flex-col gap-12">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    {[1,2,3].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-electric/40 animate-pulse" style={{ animationDelay: `${i*0.2}s` }}></div>)}
                  </div>
                  <div className="text-[12px] font-mono text-electric/40 tracking-widest uppercase">SystemCore_V4 // GLOBAL_STABLE</div>
                </div>
                <div className="flex items-end gap-3 h-40 w-full px-4 content-center justify-center">
                  {[...Array(32)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ height: [40, 120, 60, 160, 80][i % 5] }}
                      transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.08 }}
                      className="flex-1 min-w-[4px] max-w-[8px] bg-gradient-to-t from-electric/10 via-electric/40 to-electric rounded-full opacity-60 group-hover/graphic:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>
          
          {/* Mobile Experience */}
          <BentoCard
            className="md:col-span-2"
            index="02"
            title="Mobile Luxury"
            description="Native performance, artisanal UI for the handheld era."
            icon={<Smartphone />}
            delay={0.1}
          />

          {/* Infrastructure */}
          <BentoCard
            className="md:col-span-2"
            index="03"
            title="Architectural ERP"
            description="Scalable enterprise systems engineered for robustness."
            icon={<Database />}
            delay={0.2}
          />

          {/* Small Feature Cards */}
          <BentoCard
            className="md:col-span-2"
            index="04"
            title="Global Performance"
            description="Optimized for planetary scale with edge intelligence."
            icon={<Globe />}
            delay={0.3}
          />
          
          <BentoCard
            className="md:col-span-2"
            index="05"
            title="Artisanal Security"
            description="Fortified by design, protecting what matters most."
            icon={<Shield />}
            delay={0.4}
          />

          <BentoCard
            className="md:col-span-2"
            index="06"
            title="Rapid Innovation"
            description="Moving at the speed of thought, delivering at pace."
            icon={<Zap />}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
