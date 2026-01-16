
import React from 'react';
import { Layout, Smartphone, Database } from 'lucide-react';

const SolutionCard: React.FC<{ title: string; description: string; icon: React.ReactNode; image: string }> = ({ title, description, icon, image }) => (
  <div className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-200/50">
    <div className="h-48 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
    </div>
    <div className="p-8">
      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
    </div>
  </div>
);

const Solutions: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#f3e8ff] to-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">OUR SOLUTIONS</h2>
          <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-purple-100 shadow-sm mb-12">
            <p className="text-slate-700 font-medium italic">
              "What sets us apart is our attention to detail, commitment to innovation, and customer-first mindset. We don't just design websites. We build powerful digital identities that elevate your brand and create lasting impact."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <SolutionCard
            title="Web Design & Development"
            description="Bespoke web experiences built with cutting-edge technologies. We focus on conversion, accessibility, and high-end aesthetics."
            icon={<Layout size={24} />}
            image="https://picsum.photos/seed/web/800/600"
          />
          <SolutionCard
            title="Mobile App Development"
            description="Native and cross-platform mobile applications that provide seamless performance and delightful user journeys on any device."
            icon={<Smartphone size={24} />}
            image="https://picsum.photos/seed/mobile/800/600"
          />
          <SolutionCard
            title="ERP / Enterprise Solutions"
            description="Custom-tailored business management systems that streamline your operations and harness the power of your organizational data."
            icon={<Database size={24} />}
            image="https://picsum.photos/seed/erp/800/600"
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
