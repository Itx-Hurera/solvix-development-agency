
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, Rocket } from 'lucide-react';

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md py-4 border-b border-neonBlue/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-neonBlue rounded-lg flex items-center justify-center shadow-neonBlue group-hover:shadow-[0_0_20px_rgba(0,242,255,0.8)] transition-all">
            <Rocket className="text-black" size={24} />
          </div>
          <span className="font-display text-2xl font-bold tracking-tighter text-white">SOLVIXDEV</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-neonBlue transition-colors font-medium text-sm tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-neonPurple px-6 py-2 rounded-full text-sm font-bold shadow-neonPurple hover:shadow-[0_0_20px_rgba(188,19,254,0.6)] transition-all">
            GET STARTED
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-neonPurple/20 animate-fade-in-down">
          <div className="flex flex-col p-6 gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-neonBlue text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-neonBlue text-black px-6 py-3 rounded-full font-bold text-center">
              GET STARTED
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
