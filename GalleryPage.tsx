import React, { useState, useEffect, useCallback } from 'react';
import { PROJECTS as INITIAL_PROJECTS } from './constants';
import { Project } from '../types';
import LazyImage from './LazyImage';

interface GalleryPageProps {
  onBack: () => void;
  initialProjectId?: string | null;
  onClearSelection?: () => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onBack, initialProjectId, onClearSelection }) => {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [filter, setFilter] = useState('All');
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(() => {
    if (initialProjectId) {
      return INITIAL_PROJECTS.find(p => p.id === initialProjectId) || null;
    }
    return null;
  });

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    category: 'Class Assignment',
    image: '',
    mockupImage: '',
    description: ''
  });

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    if (onClearSelection) onClearSelection();
    window.scrollTo(0, 0);
  }, [onClearSelection]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProject();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeProject]);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.image) return;

    const projectToAdd: Project = {
      id: Date.now().toString(),
      title: newProject.title,
      category: newProject.category,
      image: newProject.image,
      mockupImage: newProject.mockupImage || undefined,
      description: newProject.description
    };

    setProjects([projectToAdd, ...projects]);
    setShowUploadModal(false);
    setNewProject({ title: '', category: 'Class Assignment', image: '', mockupImage: '', description: '' });
  };

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-black text-white relative z-[9999] animate-fade-in overflow-x-hidden">
        <div className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-[100] bg-black/90 backdrop-blur-xl border-b border-white/5">
          <button 
            onClick={closeProject}
            className="flex items-center space-x-3 text-[#00A3FF] hover:text-white transition-all group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Back to Gallery</span>
          </button>
          
          <button 
            onClick={closeProject}
            className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 hover:border-[#00A3FF] hover:text-[#00A3FF] transition-all rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="container max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="space-y-8">
              <div className="border border-white/10 bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
                 <LazyImage src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto object-contain" priority={true} />
              </div>
              {selectedProject.mockupImage && (
                <div className="border border-white/10 bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
                   <LazyImage src={selectedProject.mockupImage} alt="Mockup" className="w-full h-auto object-contain" />
                </div>
              )}
            </div>

            <div className="space-y-12 lg:sticky lg:top-40">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 border border-[#00A3FF]/40 bg-[#00A3FF]/5 text-[#00A3FF] text-[9px] font-black uppercase tracking-[0.5em]">
                  {selectedProject.category}
                </span>
                <h2 className="text-5xl md:text-8xl font-display font-bold text-white leading-none uppercase tracking-tighter">
                  {selectedProject.title}
                </h2>
              </div>

              <div className="space-y-10">
                <p className="text-white/60 text-xl md:text-2xl leading-relaxed font-light border-l-4 border-[#00A3FF] pl-8">
                  {selectedProject.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="p-6 bg-white/[0.03] border border-white/5">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-2">Primary Tool</p>
                    <p className="text-sm font-bold text-white uppercase tracking-wider">Adobe Photoshop</p>
                  </div>
                  <div className="p-6 bg-white/[0.03] border border-white/5">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-2">Module</p>
                    <p className="text-sm font-bold text-white uppercase tracking-wider">Digital Graphics</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={closeProject}
                className="group flex items-center space-x-6 text-[10px] uppercase tracking-[0.6em] font-black text-white/40 hover:text-[#00A3FF] transition-all pt-12"
              >
                <div className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-[#00A3FF] transition-all"></div>
                <span>Close Project View</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-40 pb-32 relative z-10 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="space-y-6">
            <button 
              onClick={onBack}
              className="flex items-center space-x-3 text-[#00A3FF] hover:text-white transition-all text-[10px] uppercase font-bold tracking-[0.4em]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back Home</span>
            </button>
            <h1 className="text-6xl md:text-9xl font-display text-white uppercase leading-none tracking-tighter select-none">
              ALL <br /><span className="accent-text">PROJECTS</span>
            </h1>
          </div>
          
          <div className="flex flex-col items-end gap-8">
            <div className="flex flex-wrap justify-end gap-3 max-w-2xl">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-[9px] uppercase tracking-[0.3em] font-black px-5 py-2.5 border transition-all ${
                    filter === cat ? 'text-[#00A3FF] border-[#00A3FF] bg-[#00A3FF]/10' : 'text-white/30 border-white/10 hover:text-white hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button 
              onClick={() => setShowUploadModal(true)}
              className="px-10 py-4 bg-[#00A3FF] text-white text-[11px] font-black uppercase tracking-[0.4em] hover:scale-105 active:scale-95 transition-all shadow-[0_15px_30px_rgba(0,163,255,0.2)]"
            >
              + Add Submission
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden cursor-pointer flex flex-col hover:border-[#00A3FF]/40 transition-all duration-500"
              onClick={() => {
                setSelectedProject(project);
                window.scrollTo(0, 0);
              }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#111]">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
              </div>
              <div className="p-8 bg-black border-t border-white/5 relative">
                <div className="absolute top-0 left-8 w-12 h-1 bg-[#00A3FF] transform -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <p className="text-[#00A3FF] text-[9px] font-black uppercase tracking-[0.5em] mb-3">{project.category}</p>
                <h3 className="text-white text-2xl font-display uppercase group-hover:text-[#00A3FF] transition-colors">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showUploadModal && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-6 bg-black/98 backdrop-blur-2xl animate-fade-in">
          <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 w-full max-w-2xl relative shadow-2xl">
            <button className="absolute top-8 right-8 text-white/40 hover:text-[#00A3FF]" onClick={() => setShowUploadModal(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-4xl font-display text-white mb-10 uppercase tracking-tighter">ADD <span className="accent-text">NEW PROJECT</span></h2>
            <form onSubmit={handleUpload} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input required type="text" placeholder="Title" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} className="w-full bg-black border border-white/10 px-5 py-4 text-white outline-none focus:border-[#00A3FF] text-sm" />
                <input required type="text" placeholder="Category" value={newProject.category} onChange={e => setNewProject({...newProject, category: e.target.value})} className="w-full bg-black border border-white/10 px-5 py-4 text-white outline-none focus:border-[#00A3FF] text-sm" />
              </div>
              <input required type="text" placeholder="Image URL" value={newProject.image} onChange={e => setNewProject({...newProject, image: e.target.value})} className="w-full bg-black border border-white/10 px-5 py-4 text-white outline-none focus:border-[#00A3FF] text-sm" />
              <textarea rows={3} placeholder="Project Description" value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} className="w-full bg-black border border-white/10 px-5 py-4 text-white outline-none focus:border-[#00A3FF] text-sm"></textarea>
              <button type="submit" className="w-full py-5 bg-[#00A3FF] text-white font-black uppercase tracking-[0.4em] text-xs hover:brightness-110 transition-all">Submit to Portfolio</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
