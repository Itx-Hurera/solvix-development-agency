
import React from 'react';
import NeonButton from './NeonButton';
import { ArrowRight, Code, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonBlue/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonPurple/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-darkGray border border-white/10 px-4 py-2 rounded-full mb-8 animate-bounce">
          <Zap size={16} className="text-neonBlue" />
          <span className="text-xs font-bold tracking-widest text-gray-300">WE BUILD THE FUTURE</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-none">
          WE BUILD MODERN <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple neon-glow-text">
            WEBSITES
          </span> THAT SCALE
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
          Solvixdev offers high-performance full-stack web solutions designed to solve real business problems and accelerate your digital growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <NeonButton onClick={() => window.location.href = '#pricing'}>
            Get a Website
          </NeonButton>
          <button className="flex items-center gap-2 text-white hover:text-neonBlue transition-all group font-bold tracking-wide">
            CONTACT US <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Floating Icons */}
        <div className="hidden lg:flex justify-center gap-16 mt-24 opacity-40">
          <div className="flex flex-col items-center gap-3">
            <Code size={40} className="text-neonBlue" />
            <span className="text-[10px] tracking-widest uppercase">Clean Code</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Shield size={40} className="text-neonPurple" />
            <span className="text-[10px] tracking-widest uppercase">Secure Systems</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Zap size={40} className="text-neonBlue" />
            <span className="text-[10px] tracking-widest uppercase">Fast Performance</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
