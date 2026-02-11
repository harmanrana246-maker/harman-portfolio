import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'portfolio') => void;
  currentView: 'home' | 'portfolio';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -80; 
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -80; 
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => onNavigate('home')} className="flex items-center space-x-3 group">
          <div className="w-8 h-8 bg-[#00A3FF] flex items-center justify-center font-bold text-black text-xs transition-transform group-hover:rotate-90">
            HR
          </div>
          <span className="text-lg font-display font-bold tracking-tighter uppercase">
            HARMAN<span className="accent-text">.RANA</span>
          </span>
        </button>
        
        <div className="hidden md:flex items-center space-x-8">
          {['home', 'about', 'work', 'skills'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item === 'home' ? 'home' : item)}
              className="text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('portfolio')}
            className={`px-4 py-2 border text-[10px] font-bold uppercase tracking-widest transition-all ${
              currentView === 'portfolio' ? 'bg-[#00A3FF] border-[#00A3FF] text-white' : 'border-white/20 text-white hover:border-[#00A3FF]'
            }`}
          >
            Full Gallery
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;