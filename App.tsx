
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
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Solutions />
      <Projects />
      <Story />
      <WhyChooseUs />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
