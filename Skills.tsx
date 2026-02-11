import React from 'react';
import { SKILLS } from './constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">
              MY <br /><span className="accent-text">SKILLS</span>
            </h2>
            <p className="text-white/50 max-w-md text-sm leading-relaxed">
              These are the technical skills I have learned during my 6-month course. Every skill level is based on my project grades.
            </p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <p className="text-3xl font-display font-bold accent-text">10+</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Projects</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <p className="text-3xl font-display font-bold accent-text">480h</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Practice</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <p className="text-3xl font-display font-bold accent-text">6M</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Course</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <p className="text-3xl font-display font-bold accent-text">95%</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Attendance</p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="space-y-3 p-6 border border-white/5 bg-white/[0.01]">
              <div className="flex justify-between items-end">
                <h3 className="text-white font-bold text-[11px] uppercase tracking-[0.2em]">{skill.name}</h3>
                <span className="accent-text font-display text-xl">{skill.percentage}%</span>
              </div>
              <div className="h-[2px] w-full bg-white/10 relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-[#00A3FF] transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
