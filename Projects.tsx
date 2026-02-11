import React from 'react';
import { PROJECTS } from './constants';
import LazyImage from './LazyImage';

interface ProjectsProps {
  onProjectClick: (id: string) => void;
  onViewFullGallery: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick, onViewFullGallery }) => {
  const previewProjects = PROJECTS.slice(0, 6);

  return (
    <section id="work" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <p className="accent-text font-medium tracking-[0.3em] uppercase text-sm">Course Work</p>
            <h2 className="text-5xl md:text-7xl font-display text-white uppercase">MY <span className="accent-text">PROJECTS</span></h2>
          </div>
          <button 
            onClick={onViewFullGallery}
            className="accent-text font-medium uppercase tracking-widest text-sm border-b-2 border-[#00A3FF] pb-1 hover:text-white hover:border-white transition-all"
          >
            See Full List
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden cursor-pointer bg-[#0B0B0B] border border-white/10"
              onClick={() => onProjectClick(project.id)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8">
                <p className="accent-text uppercase tracking-[0.4em] text-xs mb-3">
                  {project.category}
                </p>
                <h3 className="text-white text-2xl font-display tracking-wider text-center">
                  {project.title}
                </h3>
                <span className="mt-6 px-4 py-2 border border-[#00A3FF] text-[#00A3FF] text-[10px] font-bold tracking-[0.2em] uppercase">
                  View Detail
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button 
            onClick={onViewFullGallery}
            className="px-12 py-5 border border-[#00A3FF] text-[#00A3FF] uppercase tracking-[0.4em] text-xs hover:bg-[#00A3FF] hover:text-white transition-all duration-500"
          >
            View All Submissions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
