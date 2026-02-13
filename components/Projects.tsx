
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">LATEST WORK</h2>
          <div className="w-24 h-1 bg-neonBlue mx-auto shadow-neonBlue"></div>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">Explore our portfolio of future-ready applications and high-conversion platforms.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative bg-darkGray border border-white/5 rounded-2xl overflow-hidden hover:border-neonBlue/30 transition-all duration-500">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-neonBlue transition-colors">{project.name}</h3>
                    <p className="text-gray-400 mt-2 line-clamp-2">{project.description}</p>
                  </div>
                  <button className="p-2 bg-white/5 rounded-full hover:bg-neonBlue hover:text-black transition-all">
                    <ExternalLink size={20} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-widest border border-white/10 px-3 py-1 rounded-full text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
