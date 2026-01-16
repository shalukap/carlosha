
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    { name: 'Services', href: '#services' },
    { name: 'Our Projects', href: '#projects' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f0720]/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="relative w-10 h-10 bg-gradient-to-br from-[#00d2ff] to-[#ff00ff] rounded-lg flex items-center justify-center transform rotate-45">
            <span className="text-white font-bold text-xl transform -rotate-45">C</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-widest text-xl leading-none">CARLOSHA</span>
            <span className="text-[8px] text-gray-400 tracking-[0.2em]">CRAFTING LUXURY DIGITAL</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#0f0720] border-t border-white/10 transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 text-lg hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-center font-semibold"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
