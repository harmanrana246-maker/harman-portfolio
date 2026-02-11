import React from 'react';
import LazyImage from './LazyImage';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="aspect-[3/4] bg-[#111] border border-white/10 relative overflow-hidden group">
              <LazyImage
                src="https://i.ibb.co/203kK5FJ/36341555-0019-4ecd-8bef-61321109b50b.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                 <p className="text-[10px] uppercase tracking-widest font-bold">Harman Rana</p>
                 <p className="text-[9px] text-white/40 uppercase">Student Designer</p>
              </div>
            </div>
            <div className="p-6 border border-white/5 bg-white/[0.02] space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Course Completion</p>
              <div className="w-full h-1 bg-white/10">
                <div className="w-full h-full bg-[#00A3FF]"></div>
              </div>
              <p className="text-[9px] text-right text-[#00A3FF]">100% MODULES DONE</p>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-display font-bold">ABOUT <span className="accent-text">ME.</span></h2>
              <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Basic Information</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <span className="text-4xl font-display font-bold text-white/10">01</span>
                <h3 className="text-xl font-bold">My Learning</h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  I am a student currently learning graphic design. My main focus is Adobe Photoshop. I have spent the last 6 months learning how to use tools, layers, and masks correctly.
                </p>
              </div>
              <div className="space-y-4">
                <span className="text-4xl font-display font-bold text-white/10">02</span>
                <h3 className="text-xl font-bold">My Goals</h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  I want to become better at photo editing and digital art. I enjoy making composites and working on magazine layouts for my class projects.
                </p>
              </div>
            </div>

            <div className="p-8 border-l-4 border-[#00A3FF] bg-white/[0.02]">
               <p className="text-lg text-white/80 font-medium">
                 "I focus on learning the technical side of Photoshop so I can build a strong foundation for my future work."
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;