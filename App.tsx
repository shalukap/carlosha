
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Projects from './components/Projects';
import Story from './components/Story';
import WhyChooseUs from './components/WhyChooseUs';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-obsidian text-white">
      <Navbar />
      <div className="w-full">
        <Hero />
        <Solutions />
        <Projects />
        {/* Physical Spacer for Narrative Transition */}
        <div className="h-24 md:h-36 lg:h-[120px]" />
        <Story />
        <div className="h-24 md:h-36 lg:h-[120px]" />
        <WhyChooseUs />
        <div className="h-24 md:h-36 lg:h-[120px]" />
        <Technologies />
        <div className="h-24 md:h-36 lg:h-[120px]" />
        <Contact />
      </div>
      <div className="h-24 md:h-36 lg:h-[120px]" />
      <Footer />
    </div>
  );
};

export default App;
