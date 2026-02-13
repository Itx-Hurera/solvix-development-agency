
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-neonBlue selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Animated Background Separator */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-neonBlue/30 to-transparent"></div>
        
        <About />
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-neonPurple/30 to-transparent"></div>
        
        <Projects />
        
        <Pricing />
        
        <Reviews />
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
