import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GalleryPage from './components/GalleryPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'portfolio'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top when switching views, unless we're opening a project
    if (!selectedProjectId) {
      window.scrollTo(0, 0);
    }
  }, [currentView, selectedProjectId]);

  const handleProjectClick = (id: string) => {
    setSelectedProjectId(id);
    setCurrentView('portfolio');
  };

  const handleBackToHome = () => {
    setSelectedProjectId(null);
    setCurrentView('home');
  };

  return (
    <div className="relative bg-[#0a0a0a] text-[#e0e0e0] selection:bg-[#00A3FF] selection:text-white min-h-screen">
      <Navbar 
        onNavigate={(view) => {
          setCurrentView(view);
          setSelectedProjectId(null);
        }} 
        currentView={currentView} 
      />
      
      {currentView === 'home' ? (
        <main className="animate-fade-in">
          <Hero onViewWork={() => setCurrentView('portfolio')} />
          
          <div className="container mx-auto px-6">
            <div className="h-px w-full bg-white/5" />
          </div>
          
          <About />
          
          <div className="container mx-auto px-6">
            <div className="h-px w-full bg-white/5" />
          </div>
          
          <Projects 
            onProjectClick={handleProjectClick}
            onViewFullGallery={() => setCurrentView('portfolio')} 
          />
          
          <div className="container mx-auto px-6">
            <div className="h-px w-full bg-white/5" />
          </div>
          
          <Skills />

          <footer className="py-20 text-center border-t border-white/5 bg-black mt-20">
             <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] mb-4">Institute Submission Profile</p>
             <p className="text-white/10 text-[8px] uppercase tracking-widest">© 2024 HARMAN RANA | STUDENT ID: BC-4377</p>
          </footer>
        </main>
      ) : (
        <GalleryPage 
          initialProjectId={selectedProjectId}
          onClearSelection={() => setSelectedProjectId(null)}
          onBack={handleBackToHome} 
        />
      )}
      
      {currentView === 'home' && (
        <div className="bg-black py-10 text-center">
           <p className="text-white/[0.02] font-display text-8xl opacity-10 select-none uppercase">Harman Rana</p>
        </div>
      )}

      {/* Background Decorative lines */}
      <div className="fixed top-0 right-[10%] w-px h-full bg-white/[0.02] pointer-events-none z-0" />
      <div className="fixed top-0 left-[10%] w-px h-full bg-white/[0.02] pointer-events-none z-0" />
    </div>
  );
};

export default App;