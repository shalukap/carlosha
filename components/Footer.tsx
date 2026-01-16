
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0720] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo Column */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative w-10 h-10 bg-gradient-to-br from-[#00d2ff] to-[#ff00ff] rounded-lg flex items-center justify-center transform rotate-45">
                <span className="text-white font-bold text-xl transform -rotate-45">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold tracking-widest text-xl leading-none">CARLOSHA</span>
                <span className="text-[8px] text-gray-400 tracking-[0.2em]">CRAFTING LUXURY DIGITAL</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              We create world-class software solutions for businesses ready to thrive in the digital era.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-bold mb-8 tracking-wider uppercase text-xs">Navigation</h4>
            <ul className="space-y-4">
              {['Services', 'Our Projects', 'About Us', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Column */}
          <div>
            <h4 className="text-white font-bold mb-8 tracking-wider uppercase text-xs">Office</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              368/14D St Mary's Garden<br />
              Hapugoda Kandana,<br />
              Sri Lanka
            </p>
            <p className="text-gray-400 text-sm">
              +94 70 131 4700
            </p>
          </div>

          {/* Follow Us Column */}
          <div>
            <h4 className="text-white font-bold mb-8 tracking-wider uppercase text-xs">Follow Us</h4>
            <div className="flex items-center space-x-4 text-blue-400">
               <Facebook size={20} className="cursor-pointer hover:text-white transition-all" />
               <Instagram size={20} className="cursor-pointer hover:text-white transition-all" />
               <Linkedin size={20} className="cursor-pointer hover:text-white transition-all" />
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-500 text-[10px] tracking-widest uppercase">
            © 2025 CARLOSHA. All rights reserved.
          </p>
          <div className="flex space-x-6 text-[10px] tracking-widest uppercase text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
