
import React from 'react';
import { Mail, MapPin, Phone, ArrowRight, User, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactInfo: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-center gap-6 group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-electric/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,242,255,0.05)]">
    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-electric group-hover:text-obsidian group-hover:scale-110 transition-all duration-700 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      <div className="relative z-10">{icon}</div>
    </div>
    <div>
      <h5 className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase mb-1.5">{label}</h5>
      <p className="text-white font-black text-lg tracking-tight group-hover:text-electric transition-colors font-mono">{value}</p>
    </div>
  </div>
);

const InputField: React.FC<{
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  type?: string;
  isTextArea?: boolean;
  className?: string; // Add className for layout flexibility
}> = ({ icon, label, placeholder, type = "text", isTextArea = false, className = "" }) => (
  <div className={`space-y-4 group/input relative ${className}`}>
    <div className="flex justify-between items-end px-14">
      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.6em] group-focus-within/input:text-electric transition-colors duration-500">
        {label}
      </label>
      <div className="h-[1px] flex-grow mx-4 bg-white/5 group-focus-within/input:bg-electric/20 transition-colors duration-700"></div>
    </div>
    
    <div className={`relative group/field ${isTextArea ? 'h-full flex flex-col' : ''}`}>
      {/* Precision Icon Indicator */}
      <div className={`absolute left-14 ${isTextArea ? 'top-10' : 'top-1/2 -translate-y-1/2'} z-20 text-white/20 group-focus-within/input:text-electric transition-all duration-700 group-focus-within/input:scale-125 pointer-events-none`}>
        {icon}
      </div>

      {isTextArea ? (
        <textarea
          rows={6}
          placeholder={placeholder}
          className="w-full h-full min-h-[300px] bg-white/[0.03] border border-white/5 pl-32 pr-12 py-10 rounded-[2.5rem] focus:outline-none focus:border-electric/30 focus:bg-white/[0.05] transition-all duration-700 text-white placeholder:text-white/10 font-bold text-xl resize-none leading-relaxed tracking-tight flex-grow"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-white/[0.03] border border-white/5 pl-32 pr-12 py-10 rounded-full focus:outline-none focus:border-electric/30 focus:bg-white/[0.05] transition-all duration-700 text-white placeholder:text-white/10 font-bold text-xl tracking-tight"
        />
      )}

      {/* Interactive Progress Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-electric shadow-[0_0_15px_rgba(0,242,255,0.8)] group-focus-within/input:w-[80%] transition-all duration-1000 ease-expo rounded-full"></div>
      
      {/* Sub-surface Radial Glow */}
      <div className={`absolute inset-0 rounded-[2.5rem] opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_0_40px_rgba(0,242,255,0.05)] ${isTextArea ? 'rounded-[2.5rem]' : 'rounded-full'}`}></div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-80 bg-obsidian px-6 overflow-hidden relative">
      {/* High-Tech Node Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" className="text-white">
          <pattern id="node-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            <path d="M 2 2 L 100 2 M 2 2 L 2 100" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#node-grid)" />
        </svg>
      </div>

      {/* Narrative Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-electric/5 blur-[180px] rounded-full pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-center">

          {/* Header & Command Center Info */}
          <div className="lg:col-span-12 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center lg:text-left"
            >
              <span className="text-electric font-black tracking-[0.5em] uppercase text-xs mb-6 block drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]">
                Direct Channel
              </span>
              <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.8] mb-10">
                LET'S <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">BUILD</span> <br />
                <span className="text-gradient-electric">TOGETHER</span>
              </h2>
              <p className="text-white/40 text-xl font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                Bring your vision to the architects of the digital age. We shape raw ideas into world-class digital benchmarks.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 max-w-4xl mx-auto lg:mx-0">
              <ContactInfo
                icon={<MapPin size={22} />}
                label="Strategic Location"
                value="No 368/14D St Mary's Garden, Hapugoda, Kandana, Sri Lanka"
              />
              <ContactInfo
                icon={<Mail size={22} />}
                label="Digital Entry"
                value="hello@carlosha.com"
              />
              <div className="md:col-span-2 lg:col-span-1">
                <ContactInfo
                  icon={<Phone size={22} />}
                  label="Direct Protocol"
                  value="+94 70 131 4700"
                />
              </div>
            </div>
          </div>

          {/* Luxury Forge Form - Perfectly Proportional Scale */}
          <div className="lg:col-span-12 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-[1px] rounded-[4rem] overflow-hidden group/forge shadow-2xl"
            >
              {/* Technical Scanline Animation */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 opacity-20">
                <div className="w-full h-[1px] bg-electric/50 blur-[2px] absolute top-[-10%] animate-[scan_8s_linear_infinite]"></div>
              </div>

              {/* Rotating Forge Border */}
              <div className="absolute inset-[-500%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,#00f2ff_360deg)] opacity-20 group-hover/forge:opacity-100 transition-opacity duration-1000"></div>

              <div className="relative bg-obsidian p-10 md:p-20 rounded-[4rem] border border-white/5 overflow-hidden noise-overlay">
                {/* Visual Depth Gradients */}
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-electric/5 blur-[120px] rounded-full"></div>
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-violet/5 blur-[120px] rounded-full"></div>

                <form className="space-y-12 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Data Identity Stack */}
                    <div className="space-y-10">
                      <InputField
                        icon={<User size={20} />}
                        label="The Identity"
                        placeholder="Your Name / Organization"
                      />
                      <InputField
                        icon={<Mail size={20} />}
                        label="Secure Channel"
                        placeholder="contact@email.com"
                        type="email"
                      />
                      <InputField
                        icon={<ArrowRight size={20} />}
                        label="Service Area"
                        placeholder="Product / Strategy / Engineering"
                      />
                    </div>

                    {/* Objective Synthesis Area */}
                    <div className="lg:h-full">
                      <InputField
                        icon={<MessageSquare size={20} />}
                        label="Project Briefing"
                        placeholder="Outline your vision and technical objectives..."
                        isTextArea
                        className="h-full"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center pt-12">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="group relative px-20 h-20 bg-white text-obsidian rounded-full font-black tracking-[0.5em] text-xs uppercase overflow-hidden transition-all shadow-[0_0_50px_rgba(0,242,255,0.15)]"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-6 group-hover:translate-x-2 transition-transform duration-500">
                        INITIATE PARTNERSHIP <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform duration-500" />
                      </span>
                      {/* Interactive Highlight Surface */}
                      <div className="absolute inset-0 bg-electric translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-expo"></div>
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
