import React from 'react';
import LazyImage from './LazyImage';

interface HeroProps {
  onViewWork: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewWork }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center space-x-3 px-3 py-1.5 border border-white/10 bg-white/5 rounded-full">
                <span className="w-2 h-2 accent-bg rounded-full animate-pulse"></span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60">Student Submission</span>
              </div>
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 border border-[#00A3FF]/20 bg-[#00A3FF]/5 rounded-full">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" 
                  alt="Adobe Photoshop" 
                  className="w-4 h-4 shadow-[0_0_10px_rgba(0,163,255,0.3)]"
                />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#00A3FF]">Photoshop CC</span>
              </div>
            </div>
            <h1 className="text-7xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9]">
              MY <br />
              <span className="accent-text">WORK</span>
            </h1>
          </div>
          
          <div className="max-w-md space-y-6">
            <p className="text-white/50 text-lg leading-relaxed">
              This is my student portfolio for the Photoshop module. It shows my progress and the projects I have completed during my course.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onViewWork}
                className="btn-primary text-xs uppercase tracking-widest"
              >
                See Projects
              </button>
              <div className="px-6 py-4 border border-white/10 flex items-center space-x-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/30">ID: BC-4377</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="relative z-10 border border-white/10 bg-[#111] p-4 shadow-2xl overflow-hidden aspect-video lg:aspect-square">
            <LazyImage
              src="https://i.ibb.co/zHJyL1Mz/f548774b-e210-465b-8fbb-dd6add7719db.jpg"
              alt="Main Project"
              priority={true}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="mt-4 flex justify-between items-center text-[10px] uppercase font-mono text-white/40">
              <span>Project_Final.psd</span>
              <span>150 MB</span>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-full h-full border border-[#00A3FF]/10 -z-10 translate-x-4 translate-y-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;