import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-display font-bold">CONTACT <span className="accent-text">ME</span></h2>
            <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Inquiries & Feedback</p>
          </div>
          
          <form className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full bg-[#111] border border-white/10 p-4 outline-none focus:border-[#00A3FF] transition-colors text-white" />
              <input type="email" placeholder="Your Email" className="w-full bg-[#111] border border-white/10 p-4 outline-none focus:border-[#00A3FF] transition-colors text-white" />
              <div className="pt-4 flex space-x-6 justify-center md:justify-start">
                 <a href="#" className="text-white/40 hover:text-[#00A3FF] transition-colors uppercase text-[10px] font-bold tracking-widest">Instagram</a>
                 <a href="#" className="text-white/40 hover:text-[#00A3FF] transition-colors uppercase text-[10px] font-bold tracking-widest">Behance</a>
              </div>
            </div>
            <div className="space-y-6">
              <textarea rows={4} placeholder="Your Message" className="w-full bg-[#111] border border-white/10 p-4 outline-none focus:border-[#00A3FF] transition-colors h-full min-h-[160px] text-white"></textarea>
              <button className="w-full btn-primary uppercase text-xs tracking-[0.2em]" onClick={(e) => e.preventDefault()}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;