
import React from 'react';
import { Target, Eye, Users } from 'lucide-react';

const Story: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#f9f5ff] px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tight uppercase">OUR STORY</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-purple-50">
            <p className="text-slate-700 leading-relaxed text-lg font-medium">
              At <span className="font-bold text-purple-600">CARLOSHA</span>, we began with one goal: to make technology simple, meaningful, and beautifully designed. What started as a small creative team has grown into a studio that builds smart, user-focused digital solutions.
            </p>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-purple-50">
            <p className="text-slate-700 leading-relaxed text-lg">
              We combine thoughtful design with modern technology to create websites and platforms that are intuitive, scalable, and aligned with your brand's goals. Every project starts with understanding your vision and ends with delivering results that elevate your digital presence.
            </p>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-purple-50">
            <p className="text-slate-700 leading-relaxed text-lg">
              Today, CARLOSHA continues to innovate, crafting digital experiences that help businesses stand out, connect, and grow.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-[2rem] shadow-lg border border-white hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
              <Target size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              To empower businesses with innovative digital solutions and creative technology strategies that drive growth and long-term success.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white p-10 rounded-[2rem] shadow-lg border border-white hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
              <Eye size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              To become a globally trusted digital transformation partner, recognized for innovation, quality, and exceptional service.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-white p-10 rounded-[2rem] shadow-lg border border-white hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
              <Users size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Our Team</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              A passionate group of designers, developers, and strategists working together to turn ideas into impactful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
