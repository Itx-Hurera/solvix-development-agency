
import React from 'react';
import { Globe, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-neonBlue to-neonPurple rounded-2xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
            <img
              src="https://picsum.photos/seed/solvixdev-team/800/800"
              alt="About Solvixdev"
              className="relative rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>

          <div>
            <span className="text-neonPurple font-bold tracking-widest text-sm uppercase mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Empowering Businesses to <br />
              <span className="text-neonBlue">Own the Digital Frontier</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Solvixdev is a full-stack development agency born from a passion for solving complex business problems through cutting-edge technology. We don't just build websites; we architect digital ecosystems that drive revenue and user engagement.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neonBlue/10 border border-neonBlue/30 rounded-lg flex items-center justify-center">
                  <Globe className="text-neonBlue" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Global Scale</h4>
                  <p className="text-gray-500">Helping businesses worldwide transition into the modern digital landscape with scalable cloud solutions.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neonPurple/10 border border-neonPurple/30 rounded-lg flex items-center justify-center">
                  <Users className="text-neonPurple" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Collaborative Model</h4>
                  <p className="text-gray-500">We work as your technology partners, handling the entire development lifecycle so you can focus on growth.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neonBlue/10 border border-neonBlue/30 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-neonBlue" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Digital Growth</h4>
                  <p className="text-gray-500">Every line of code we write is aimed at increasing your brand visibility and operational efficiency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
