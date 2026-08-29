import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { 
  ArrowRight,
  Play,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SpotlightCard } from '../components/SpotlightCard';
import { ScrollSection } from '../components/ScrollSection';
import { Contact } from '../components/Contact';
import { scrollToSection } from '../hooks/useScrollTo';
import { SERVICES, TECH_ECOSYSTEM, PROJECTS } from '../data/constants';

const Hero = () => {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const titleLines = [
    "Interactive Systems",
    "for Product Showcasing,",
    "Training, and R&D"
  ];

  return (
    <section ref={containerRef} className="min-h-screen flex items-center pt-24 md:pt-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div 
          style={{ y: yText, opacity: opacityText }} 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
          className="z-10 text-center lg:text-left"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[9px] font-bold uppercase tracking-widest text-brand-primary/80 mb-8"
          >
            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
            Interactive Tech Studio
          </motion.div>
          
          <div className="mb-8">
            {titleLines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1 
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0 }
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 + (i * 0.1) }}
                  className={`font-display text-[1.8rem] sm:text-[2.5rem] md:text-[3.2rem] font-bold leading-[1.1] tracking-tighter uppercase ${i === 1 ? 'text-white/20' : ''}`}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg text-white/50 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            We help companies turn complex systems into interactive experiences that drive sales, training, and faster decisions.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8"
          >
            <a 
              href="#work" 
              onClick={(e) => scrollToSection(e, 'work')}
              className="group flex items-center gap-4 text-[13px] md:text-sm font-bold uppercase tracking-widest whitespace-nowrap"
            >
              See It in Action 
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </a>
            <a 
              href="https://calendly.com/a-asankhala/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-[13px] md:text-sm font-bold uppercase tracking-widest px-7 py-3.5 md:px-8 md:py-4 rounded-full bg-brand-primary text-white hover:bg-white hover:text-black transition-all duration-500 whitespace-nowrap text-center justify-center w-full sm:w-auto"
            >
              Book a 10-min call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[4/5] sm:aspect-video lg:aspect-square rounded-2xl overflow-hidden group cursor-pointer"
          onClick={togglePlay}
        >
          <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay z-10" />
          <video 
            ref={videoRef}
            src="https://videos.pexels.com/video-files/3129957/3129957-sd_640_360_25fps.mp4"
            poster="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className={`w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100`}
            loop
            muted
            autoPlay
            playsInline
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group"
              >
                <Play className="w-8 h-8 fill-white group-hover:fill-brand-primary transition-colors" />
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full" />
    </section>
  );
};

const Services = () => {
  return (
    <ScrollSection id="services">
      <div className="pt-10 md:pt-19 pb-5 md:pb-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-24 relative flex justify-center">
            <div className="absolute inset-0 bg-brand-primary/5 blur-[80px] rounded-full -z-10" />
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[1px] w-8 bg-brand-primary/30" />
                  <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-brand-primary/60">Core Objective</span>
                  <div className="h-[1px] w-8 bg-brand-primary/30" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white/90 leading-relaxed tracking-tight">
                  We design <span className="text-brand-primary italic">interactive product experiences</span>, industrial training simulations, and R&D prototypes that simplify complexity, increase sales, reduce training costs and operational risk, and accelerate decision-making.
                </h3>
                <div className="pt-8 space-y-4">
                  <p className="text-sm md:text-lg text-white/40 leading-relaxed">
                    Complex products don’t fail because they’re bad. <br />
                    They fail because customers don’t understand them fast enough.
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary">
                    We fix this with interactive product experiences.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-primary/60 mb-4">Engineering Clarity for Complex Products</h2>
              <h3 className="font-display text-3xl font-bold text-white/90 leading-tight">Use Cases & Business Impact</h3>
              <p className="text-white/40 leading-relaxed mt-8">
                Real-world applications of interactive systems — built to solve complex problems and deliver measurable business outcomes.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {SERVICES.map((s, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <SpotlightCard className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 h-full">
                    <div className="text-brand-primary mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                      {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
                    </div>
                    <h4 className="text-lg font-bold mb-6">{s.title}</h4>
                    <div className="space-y-6">
                      <div>
                        <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-brand-primary/60 mb-1.5">Use Case</div>
                        <p className="text-xs text-white/40 leading-relaxed">{s.useCase}</p>
                      </div>
                      <div>
                        <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-brand-primary/60 mb-1.5">Solution</div>
                        <p className="text-xs text-white/60 leading-relaxed">{s.solution}</p>
                      </div>
                      <div className="pt-4 border-t border-white/5">
                        <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-brand-primary/80 mb-1.5">Result</div>
                        <p className="text-xs text-brand-primary/90 font-medium leading-relaxed italic">{s.result}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-24 flex flex-col items-center gap-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary text-center">
              Engineered for real-world sales and training outcomes—not just visuals or demos.
            </p>
            <Link
              to="/case-studies"
              className="group flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-all duration-500"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 group-hover:text-white">View Case Studies</span>
              <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                <ArrowRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

const Work = () => {
  return (
    <ScrollSection id="work">
      <div className="pt-5 md:pt-10 pb-5 md:pb-10 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-primary/60 mb-4">Featured Projects</h2>
              <h3 className="font-display text-3xl font-bold text-white/90">High-Impact Interactive Solutions</h3>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-4xl font-display font-bold text-white/10">2017 — PRESENT</div>
            </div>
          </div>

          <div className="space-y-32">
            {PROJECTS.map((p, i) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="w-full lg:w-3/5 aspect-[16/10] rounded-2xl overflow-hidden glass-panel group relative cursor-pointer"
                >
                  <SpotlightCard className="w-full h-full" spotlightColor="rgba(0, 255, 136, 0.15)">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full"
                    >
                      <video 
                        src={p.video} 
                        className="w-full h-full object-cover transition-all duration-1000"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </motion.div>
                  </SpotlightCard>
                </motion.div>
                <div className="w-full lg:w-2/5">
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <div className="text-brand-primary/80 text-[9px] font-bold uppercase tracking-[0.4em] mb-4">{p.cat}</div>
                    <h4 className="font-display text-2xl font-bold mb-6">{p.title}</h4>
                    <p className="text-white/80 text-lg mb-4 leading-relaxed font-medium">
                      {p.desc}
                    </p>
                    {p.secondaryDesc && (
                      <p className="text-white/40 mb-8 leading-relaxed text-sm">
                        {p.secondaryDesc}
                      </p>
                    )}
                    {p.tags && (
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 rounded-md border border-white/5 bg-white/[0.02] text-[9px] font-mono text-brand-primary/60 tracking-wider uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="mt-10">
                      <Link
                        to={`/case-studies/${p.id}`}
                        className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary/80 hover:text-brand-primary transition-colors group"
                      >
                        View Case Study
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 flex flex-col items-center justify-center"
          >
            <Link
              to="/case-studies"
              className="group flex items-center gap-6 text-sm font-bold uppercase tracking-[0.3em] hover:text-brand-primary transition-colors"
            >
              View Case Studies
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all duration-500">
                <ArrowRight className="w-6 h-6" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </ScrollSection>
  );
};

const Process = () => {
  const steps = [
    { id: "01", title: "Discovery", desc: "We understand your product, use case, and constraints — so the solution is built right from day one.", trust: "No guesswork. No wasted effort." },
    { id: "02", title: "Prototyping", desc: "Quickly validate the core experience before full development — reducing risk and saving time.", trust: "Validate early before committing." },
    { id: "03", title: "Development", desc: "Build scalable, high-performance systems with clear milestones and continuous feedback.", trust: "Clear progress. No surprises." },
    { id: "04", title: "Optimization", desc: "Ensure smooth performance across devices — including low-end hardware.", trust: "Built for real-world performance." },
    { id: "05", title: "Deployment", desc: "Deliver a stable, ready-to-use solution with support for real-world use.", trust: "Ready to use from day one." }
  ];

  return (
    <ScrollSection id="process">
      <div className="pt-12 md:pt-24 pb-4 md:pb-7 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-primary/60 mb-4">Workflow</h2>
            <h3 className="font-display text-3xl font-bold text-white/90 mb-4">Development Process</h3>
            <p className="text-[11px] text-white/30 font-medium tracking-[0.2em] leading-relaxed">
              Built to Deliver Fast, Reliable Results — Without Guesswork
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 items-stretch">
            {steps.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="relative group p-6 rounded-2xl hover:bg-white/[0.02] transition-all duration-500 flex flex-col h-full"
              >
                <div className="text-6xl font-display font-bold text-white/[0.03] absolute -top-10 left-0 group-hover:text-brand-primary/10 transition-colors">
                  {s.id}
                </div>
                <div className="relative z-10 pt-4 flex flex-col h-full">
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <span className="w-1 h-1 bg-brand-primary rounded-full group-hover:scale-[3] transition-transform shrink-0" />
                      {s.title}
                    </h4>
                    <p className="text-sm text-white/40 leading-relaxed mb-6">
                      {s.desc}
                    </p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 text-[9px] font-bold tracking-widest text-brand-primary/60 min-h-[20px]">
                      <ShieldCheck size={10} className="shrink-0" />
                      <span className="leading-tight">{s.trust}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 pt-24 border-t border-white/5">
            <div className="mb-16">
              <h2 className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-primary/60 mb-4">Technical Ecosystem</h2>
              <h3 className="font-display text-2xl font-bold text-white/90 leading-snug mb-4">
                Built with a proven tech stack for performance, reliability, and scalability
              </h3>
              <p className="text-[11px] text-white/30 font-medium tracking-[0.2em] leading-relaxed">
                Everything is built to ensure your interactive experience is reliable, scalable, and ready for real-world use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
              {TECH_ECOSYSTEM.map((cat, i) => (
                <div key={i}>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary/60 mb-8 pb-4 border-b border-white/5">{cat.category}</h4>
                  <div className="space-y-10">
                    {cat.items.map((item, j) => (
                      <motion.div 
                        key={j}
                        whileHover={{ x: 5 }}
                        className="group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-brand-primary/50 group-hover:text-brand-primary group-hover:bg-brand-primary/10 transition-all">
                            {React.cloneElement(item.icon as React.ReactElement<any>, { size: 18 })}
                          </div>
                          <div>
                            <h5 className="text-sm font-bold mb-1">{item.name}</h5>
                            <p className="text-[11px] text-white/40 leading-relaxed mb-3">{item.desc}</p>
                            <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-white/[0.02] border border-white/5">
                              <div className="w-1 h-1 bg-brand-primary rounded-full" />
                              <span className="text-[8px] font-bold uppercase tracking-widest text-brand-primary/60">{item.expertise}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 py-6 border-y border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20">
                  <ShieldCheck size={16} className="text-brand-primary" />
                </div>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Performance Badge</span>
              </div>
              <div className="text-[10px] font-bold text-white uppercase tracking-[0.3em] text-center md:text-right">
                Built for smooth, stable, and reliable performance — even on low-end devices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

const About = () => {
  return (
    <ScrollSection id="about">
      <div className="py-10 md:py-19">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-6">The Engineering Behind the Interaction</h2>
              <h3 className="font-display text-3xl md:text-5xl font-bold mb-8">Arjun Sankhala</h3>
              <div className="space-y-6 text-lg text-white/60 leading-relaxed">
                <p>
                  I help companies turn complex products and processes into interactive experiences that are easier to understand, present, and sell.
                </p>
                <p>
                  With <span className="text-white font-bold">9+ years</span> in real-time 3D and simulation development, I specialize in building high-performance applications for product demos, industrial training, and R&D prototypes.
                </p>
                <p>
                  As an <span className="text-white font-bold">IIT Patna</span> graduate, I bring strong engineering thinking combined with practical execution — delivering solutions that are not just visually impressive, but reliable and scalable.
                </p>
                <p>
                  From mobile and PC to AR/VR, my focus is simple: build experiences that work smoothly and deliver real business impact.
                </p>
              </div>
              <div className="mt-12 flex gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-white">9+</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Years Exp</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="aspect-square rounded-2xl overflow-hidden glass-panel"
              >
                <motion.img 
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="/Images/My.jpg" 
                  alt="Arjun" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-1000 grayscale hover:grayscale-0" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-primary/20 blur-[60px] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 70;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 200);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <Work />
      <div className="section-divider" />
      <Process />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Contact />
    </>
  );
};
