
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'Work', href: '#projects' },
    { name: 'Agency', href: '#about' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 pt-10 px-6 max-w-7xl mx-auto left-0 right-0"
    >
      <div className={`transition-all duration-500 ${scrolled ? 'backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] py-3 px-8 shadow-2xl' : 'bg-transparent py-4 px-0'}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 bg-gradient-to-tr from-electric to-violet rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
              <span className="text-obsidian font-black text-xl italic">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black tracking-tighter text-2xl leading-none">CARLOSHA</span>
              <span className="text-[7px] text-electric font-bold tracking-[0.3em] uppercase">Luxury Digital Atelier</span>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2, color: '#00f2ff' }}
                  className="text-white/60 hover:text-white transition-colors text-sm font-bold tracking-tight uppercase"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-luxury relative group overflow-hidden bg-white rounded-full text-sm font-black flex items-center gap-2 transition-all shadow-xl shadow-white/5 hover:shadow-white/10"
            >
              <span className="relative z-10 text-obsidian transition-colors group-hover:text-white uppercase tracking-widest">START A PROJECT</span>
              <ArrowRight size={16} className="relative z-10 text-obsidian group-hover:translate-x-1 transition-all group-hover:text-white" />
              <div className="absolute inset-0 bg-obsidian translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4 bg-obsidian/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-3xl"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-2xl font-black hover:text-electric transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsOpen(false)}
                className="bg-electric text-obsidian p-5 rounded-2xl text-center font-black text-lg shadow-xl shadow-electric/20"
              >
                START A PROJECT
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
