import React, { useState } from 'react';
import { Mail, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="contact" className="py-10 md:py-19 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-primary/60 mb-8">Get in Touch</h2>
        <h3 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white/90">
          LET'S <span className="text-white/20 italic">BUILD</span> <br /> TOGETHER.
        </h3>
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed">
          Share a few details or book a call — I’ll help you turn your idea into a working solution.
        </p>

        <div className="max-w-4xl mx-auto relative group mb-20">
          {/* Background Glow */}
          <div className="absolute -inset-4 bg-brand-primary/5 blur-2xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-3xl backdrop-blur-2xl border border-white/10 overflow-hidden">
            <div className="bg-brand-bg/40 p-8 md:p-12 rounded-[1.4rem]">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                <div className="space-y-6 text-center lg:text-left flex-1">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[8px] font-bold uppercase tracking-[0.2em] text-brand-primary">
                      Availability Status
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-secondary"></span>
                      </div>
                      <h4 className="text-xl md:text-2xl font-display font-bold text-white/90">
                        Open for new projects
                      </h4>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed max-w-md mx-auto lg:mx-0">
                      Currently accepting high-impact projects in interactive 3D and product showcases, industrial simulations, and R&D prototyping.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">
                  <div className="w-full lg:w-auto text-center lg:text-right">
                    <button 
                      onClick={() => setIsFormOpen(true)}
                      className="group/btn relative flex items-center justify-center gap-4 px-8 py-5 bg-white text-black rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-brand-primary hover:text-white transition-all duration-500 shadow-2xl shadow-white/5 w-full lg:min-w-[280px]"
                    >
                      <span>Share Your Project</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform shrink-0" />
                    </button>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-3 font-bold">
                      Response within 24 hours
                    </p>
                  </div>

                  <button 
                    onClick={() => setIsFormOpen(true)}
                    className="group/btn relative flex items-center justify-center gap-4 px-8 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 w-full lg:min-w-[280px]"
                  >
                    <span>Book a 15-min discovery call</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <a 
            href="mailto:arjun@arjunsankhala.com" 
            className="group flex items-center gap-3 text-xl md:text-2xl font-display hover:text-brand-primary transition-colors"
          >
            <Mail className="w-6 h-6 text-brand-primary group-hover:scale-110 transition-transform" />
            arjun@arjunsankhala.com
          </a>
          <a 
            href="https://wa.me/917728999684" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-3 text-xl md:text-2xl font-display hover:text-brand-primary transition-colors"
          >
            <MessageCircle className="w-6 h-6 text-brand-primary group-hover:scale-110 transition-transform" />
            +91 7728999684
          </a>
        </div>
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};
