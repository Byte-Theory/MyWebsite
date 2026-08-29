import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Play, 
  MonitorPlay, 
  Zap, 
  ExternalLink,
  ChevronLeft,
  Factory,
  X
} from 'lucide-react';
import { SpotlightCard } from '../components/SpotlightCard';
import { Contact } from '../components/Contact';
import { PROJECTS } from '../data/constants';
import { scrollToSection } from '../hooks/useScrollTo';

export const CaseStudyDetail = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/case-studies" replace />;
  }

  const { detail } = project;

  return (
    <div className="pt-32 md:pt-40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <div className="relative pointer-events-auto">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-brand-primary transition-colors mb-8 md:mb-12 group py-3 px-1"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>
        </div>

        {/* 1. Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="text-brand-primary/80 text-[9px] font-bold uppercase tracking-[0.4em] mb-6">{project.cat}</div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight">
              {detail.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed font-medium">
              {detail.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="group flex items-center justify-center gap-4 px-8 py-4 rounded-full bg-brand-primary text-white font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto"
              >
                Get A Prototype in 7-14 Days
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[16/10] rounded-3xl overflow-hidden glass-panel group"
          >
            <video 
              src={detail.heroVideo || project.video} 
              poster="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay pointer-events-none" />
          </motion.div>
        </div>

        {/* 2. Credibility Strip */}
        <div className="py-12 border-y border-white/5 mb-32">
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-10 opacity-40 grayscale">
            {detail.credibilityBadges.map((badge, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-center w-full sm:w-auto">
                <div className="flex items-center justify-center shrink-0">
                  {i === 0 ? <ShieldCheck size={20} className="text-brand-primary" /> : 
                   i === 1 ? <Factory size={20} className="text-brand-primary" /> : 
                   <Zap size={20} className="text-brand-primary" />}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] leading-tight">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Problem Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-32">
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary/60 mb-6">The Challenge</h2>
            <h3 className="font-display text-2xl md:text-4xl font-bold mb-8 leading-tight">
              {detail.problemTitle}
            </h3>
            <p className="text-base md:text-lg text-white/40 leading-relaxed italic border-l-2 border-brand-primary/30 pl-6 md:pl-8 mt-8 md:mt-12 whitespace-pre-line">
              {detail.problemPunchline}
            </p>
          </div>
          <div className="space-y-8">
            {detail.pains.map((pain, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <X size={18} className="text-red-500/60" />
                </div>
                <p className="text-lg text-white/70 font-medium">{pain}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Solution Section */}
        <div className="mb-32">
          <div className="max-w-3xl mb-16">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary/60 mb-6">Our Approach</h2>
            <h3 className="font-display text-2xl md:text-4xl font-bold mb-8 leading-tight">
              {detail.solutionTitle}
            </h3>
            <p className="text-lg md:text-xl text-white/50 leading-relaxed whitespace-pre-line">
              {detail.solutionSub}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpotlightCard className="p-10 rounded-3xl border border-white/5 bg-white/[0.01]">
              <div className="text-red-500/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Before</div>
              <ul className="space-y-4">
                {detail.beforePoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/40">
                    <X size={14} />
                    {point}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
            <SpotlightCard className="p-10 rounded-3xl border border-brand-primary/20 bg-brand-primary/[0.02]">
              <div className="text-brand-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6">After</div>
              <ul className="space-y-4">
                {detail.afterPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-primary">
                    <CheckCircle2 size={14} />
                    {point}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </div>
        </div>

        {/* 5. Visual Proof Section */}
        <div className="mb-32">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary/60 mb-8 text-center">Visual Proof & Interaction</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 aspect-video rounded-3xl overflow-hidden glass-panel">
              <video 
                src={detail.proofVideo || project.video} 
                poster="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
                playsInline 
              />
            </div>
            <div className="space-y-8">
              <div className="aspect-square rounded-3xl overflow-hidden glass-panel">
                <img 
                  src={detail.proofImages?.[0] || `https://picsum.photos/seed/${project.id}-1/800/800`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden glass-panel">
                <img 
                  src={detail.proofImages?.[1] || `https://picsum.photos/seed/${project.id}-2/800/800`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* 6. Impact Section */}
        <div className="mb-32 py-16 md:py-24 px-6 md:px-12 rounded-3xl md:rounded-[3rem] bg-brand-primary/5 border border-brand-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full -z-10" />
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary mb-4">Measured & Expected Impact</h2>
            {(detail as any).impactSubHeader && (
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-8">
                {(detail as any).impactSubHeader}
              </p>
            )}
            <h3 className="font-display text-2xl md:text-4xl font-bold mb-12 md:mb-16 leading-tight">
              {detail.impactTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {detail.impact.map((stat, i) => (
                <div key={i} className="space-y-4">
                  <div className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-12 md:mt-16 text-base md:text-lg text-brand-primary font-medium tracking-wide whitespace-pre-line">
              {detail.impactSub}
            </p>
          </div>
        </div>

        {/* 7. Use Case Fit Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-32">
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary/60 mb-6">Is This For Me?</h2>
            <h3 className="font-display text-2xl md:text-4xl font-bold mb-8 leading-tight">
              Ideal Use Case Fit
            </h3>
            <p className="text-base md:text-lg text-white/40 leading-relaxed">
              {detail.useCaseFitDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {detail.useCaseFit.map((fit, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <CheckCircle2 size={16} className="text-brand-primary" />
                <span className="text-sm font-medium text-white/80">{fit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Key Highlights */}
        <div className="mb-32">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary/60 mb-12 text-center">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detail.highlights.map((h, i) => (
              <div key={i}>
                <SpotlightCard className="p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                      <Zap size={14} className="text-brand-primary" />
                    </div>
                    <span className="text-sm font-bold text-white/90">{h}</span>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>

        {/* 9. Soft Authority Section */}
        <div className="mb-32 py-12 border-y border-white/5 text-center">
          <p className="text-sm text-white/40 italic">
            “{detail.softAuthorityText}”
          </p>
        </div>

        {/* 10. CTA Section */}
        <div className="mb-24 md:mb-32 text-center py-12 md:py-20 relative">
          <div className="absolute inset-0 bg-brand-primary/5 blur-[100px] rounded-full -z-10" />
          <h2 
            className="font-display text-2xl sm:text-4xl md:text-6xl font-bold mb-8 tracking-tighter"
            dangerouslySetInnerHTML={{ __html: detail.ctaTitle }}
          />
          <p className="text-base md:text-xl text-white/40 mb-10 md:mb-12 max-w-2xl mx-auto">
            {detail.ctaSub}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8">
            <a 
              href="https://calendly.com/a-asankhala/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 rounded-full bg-brand-primary text-white font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto"
            >
              Book A 10-min Call
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="group flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white/10 transition-all duration-500 w-full sm:w-auto"
            >
              Get A Prototype in 7-14 Days
              <Zap size={14} className="text-brand-primary" />
            </a>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};
