
import React from 'react';
import { Rocket, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-neonBlue rounded flex items-center justify-center shadow-neonBlue">
                <Rocket className="text-black" size={16} />
              </div>
              <span className="font-display text-xl font-bold tracking-tighter text-white">SOLVIXDEV</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              The world-class development agency crafting high-end digital experiences that define the future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-darkGray border border-white/5 text-gray-400 hover:text-neonBlue hover:border-neonBlue hover:shadow-neonBlue transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-darkGray border border-white/5 text-gray-400 hover:text-neonPurple hover:border-neonPurple hover:shadow-neonPurple transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-darkGray border border-white/5 text-gray-400 hover:text-neonBlue hover:border-neonBlue hover:shadow-neonBlue transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-darkGray border border-white/5 text-gray-400 hover:text-green-500 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="text-gray-500 hover:text-neonBlue transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-gray-500 hover:text-neonBlue transition-colors">Our Projects</a></li>
              <li><a href="#pricing" className="text-gray-500 hover:text-neonBlue transition-colors">Pricing Plans</a></li>
              <li><a href="#reviews" className="text-gray-500 hover:text-neonBlue transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-neonPurple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-neonPurple transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-neonPurple transition-colors">Cookie Policy</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-neonPurple transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Solvixdev – All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            Designed for the future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
