
import React from 'react';
import { motion } from 'framer-motion';
import { Feather, Layers, ShieldCheck } from 'lucide-react';

const ChoiceCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  index: number;
}> = ({ title, description, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="group p-12 rounded-[3.5rem] bg-white/5 border border-white/10 hover:border-electric/50 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center"
  >
    <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-obsidian transition-all duration-500 shadow-2xl">
      {icon}
    </div>
    <h4 className="text-3xl font-black text-white mb-6 tracking-tighter leading-tight uppercase">{title}</h4>
    <p className="text-white/40 text-base leading-relaxed font-medium max-w-[280px]">
      {description}
    </p>
    
    {/* Animated Corner Decoration */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </motion.div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-80 bg-obsidian px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
           <motion.span 
              initial={{ opacity:0 }}
              whileInView={{ opacity: 1 }}
              className="text-electric font-black tracking-[0.4em] uppercase text-xs mb-4 block"
            >
              The Carlosha Edge
            </motion.span>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-tight">
              WHY PARTNER <br />
              <span className="text-white/20 text-4xl lg:text-6xl">WITH THE BEST?</span>
            </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ChoiceCard 
            index={0}
            title="Artisanal Design" 
            description="We reject generic templates. Every design is a bespoke creation tailored to your unique brand DNA."
            icon={<Feather size={32} />} 
          />
          <ChoiceCard 
            index={1}
            title="High-Value Tech" 
            description="Our stack is built for the next decade. High performance, zero compromise on scalability."
            icon={<Layers size={32} />} 
          />
          <ChoiceCard 
            index={2}
            title="Sovereign Control" 
            description="We deliver full ownership, military-grade security, and precision-engineered reliability."
            icon={<ShieldCheck size={32} />} 
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
