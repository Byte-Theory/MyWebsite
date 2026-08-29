import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SpotlightCard } from '../components/SpotlightCard';
import { Contact } from '../components/Contact';
import { PROJECTS } from '../data/constants';

export const CaseStudies = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-8 tracking-tighter uppercase">
              REAL-WORLD <span className="text-brand-primary italic">IMPACT</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Explore how we help global companies simplify complexity, increase sales, and eliminate operational risk through high-fidelity interactive simulations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <Link to={`/case-studies/${p.id}`} className="group block">
                <SpotlightCard className="rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <video 
                      src={p.video} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-8">
                    <div className="text-brand-primary/60 text-[9px] font-bold uppercase tracking-[0.4em] mb-4">{p.cat}</div>
                    <h2 className="font-display text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{p.title}</h2>
                    <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-2">
                      {p.secondaryDesc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {p.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 rounded-md border border-white/5 bg-white/[0.02] text-[8px] font-mono text-white/40 tracking-wider uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary group-hover:gap-5 transition-all">
                      View Case Study
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-32">
        <Contact />
      </div>
    </div>
  );
};
