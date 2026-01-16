
import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="flex items-center space-x-3 mb-6">
               <Mail className="text-blue-600" size={32} />
               <h2 className="text-4xl font-black text-slate-900 uppercase">GET IN TOUCH</h2>
            </div>
            <p className="text-slate-600 mb-12 text-lg leading-relaxed">
              Bring your project to us. Our experts will shape your ideas into something remarkable.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Our Location</h5>
                  <p className="text-slate-500 text-sm">368/14D St Mary's Garden Hapugoda Kandana.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Email Address</h5>
                  <p className="text-slate-500 text-sm">carloshatech@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center text-pink-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Contact Numbers</h5>
                  <p className="text-slate-500 text-sm">070-1314700 / 0112249612</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-purple-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
                  />
                </div>
                <textarea 
                  rows={5} 
                  placeholder="Your Message" 
                  className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm resize-none"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-[#00d2ff] hover:bg-[#00c2ee] text-white font-bold py-5 rounded-xl transition-all shadow-xl shadow-blue-400/30 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Contact Us Via Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
