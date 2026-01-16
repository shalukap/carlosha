
import React from 'react';

const ChoiceCard: React.FC<{ title: string; image: string; color: string }> = ({ title, image, color }) => (
  <div className="group overflow-hidden rounded-[2rem] shadow-xl bg-white border border-slate-100 flex flex-col">
    <div className={`h-56 ${color} p-8 flex items-center justify-center relative overflow-hidden`}>
      <img src={image} alt={title} className="max-h-full max-w-full relative z-10 transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
    </div>
    <div className="bg-[#0f172a] py-6 px-8 text-center">
      <h4 className="text-white font-bold text-lg">{title}</h4>
    </div>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center mb-16 tracking-tight uppercase">WHY CHOOSE US?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ChoiceCard 
            title="Creative & User-Focused Design" 
            image="https://picsum.photos/seed/creative/400/300" 
            color="bg-slate-200" 
          />
          <ChoiceCard 
            title="Modern & High-Performance Technology" 
            image="https://picsum.photos/seed/tech/400/300" 
            color="bg-cyan-200" 
          />
          <ChoiceCard 
            title="Reliable On-Time Delivery" 
            image="https://picsum.photos/seed/delivery/400/300" 
            color="bg-blue-300" 
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
