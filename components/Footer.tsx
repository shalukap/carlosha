
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian pt-32 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-electric/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-12 lg:col-span-5">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-tr from-electric to-violet rounded-xl flex items-center justify-center">
                <span className="text-obsidian font-black text-xl italic">C</span>
              </div>
              <span className="text-white font-black tracking-tighter text-3xl leading-none">CARLOSHA</span>
            </div>
            <p className="text-white/40 text-lg font-medium leading-relaxed mb-10 max-w-sm">
              Architecting the next generation of digital experiences with artisanal precision and industrial-scale engineering.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                <motion.a 
                  key={idx}
                  whileHover={{ y: -5, backgroundColor: '#00f2ff', color: '#050505' }}
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase mb-10">Navigation</h4>
            <ul className="space-y-6">
              {['Solutions', 'Portfolio', 'Agency', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="group flex items-center gap-2 text-white/50 hover:text-white font-bold text-sm transition-all">
                    {link} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase mb-10">Services</h4>
            <ul className="space-y-6">
              {['Web Systems', 'Mobile Luxury', 'ERP Solutions', 'UI/UX Design'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/50 hover:text-white font-bold text-sm transition-all">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase mb-10">Contact</h4>
            <address className="not-italic space-y-6">
              <p className="text-white font-bold text-sm leading-relaxed">
                Hapugoda Kandana,<br />
                Sri Lanka
              </p>
              <div className="space-y-2">
                <a href="mailto:carloshatech@gmail.com" className="text-electric font-black text-sm block">carloshatech@gmail.com</a>
                <a href="tel:+94701314700" className="text-white/40 font-bold text-xs block">+94 70 131 4700</a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] font-black tracking-[0.4em] uppercase">
            © 2024 CARLOSHA • CRAFTED WITH RIGOR
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-white/20 hover:text-white text-[10px] font-black tracking-[0.3em] uppercase transition-colors">Privacy</a>
            <a href="#" className="text-white/20 hover:text-white text-[10px] font-black tracking-[0.3em] uppercase transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
