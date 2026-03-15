import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView, useSpring, useMotionValue, useMotionTemplate } from 'motion/react';
import { 
  Gamepad2, 
  Cpu, 
  Glasses, 
  GraduationCap, 
  Building2, 
  Zap, 
  ChevronRight, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Menu, 
  X,
  Stethoscope,
  Factory,
  CheckCircle2,
  ArrowRight,
  Play,
  MessageCircle
} from 'lucide-react';

// --- Data ---
const SERVICES = [
  { title: "Game Development", desc: "High-performance games for Mobile, PC, and Console using Unity and Unreal.", icon: <Gamepad2 /> },
  { title: "Architectural Visualization", desc: "Photorealistic 3D walkthroughs and immersive VR walkthroughs.", icon: <Building2 /> },
  { title: "Simulations", desc: "Realistic physics-based simulations for industrial training.", icon: <Cpu /> },
  { title: "Training Systems", desc: "Interactive training for complex machinery and procedures.", icon: <GraduationCap /> },
  { title: "AR/VR", desc: "Immersive experiences for Meta Quest, HTC Vive, and mobile AR.", icon: <Glasses /> },
  { title: "Optimization", desc: "Performance profiling and technical debt reduction.", icon: <Zap /> }
];

const PROJECTS = [
  { 
    id: "01", 
    title: "", 
    cat: "Game Development", 
    video: "/videos/GamesShowCase_Website.mp4",
    desc: "High-fidelity, multi-platform games from initial prototype to final production, optimized for Mobile, PC, and Console. Specializing in advanced physics and realistic aesthetics, we transform complex creative visions into polished, market-ready gaming experiences."
  },
  { 
    id: "02", 
    title: "", 
    cat: "Architectural Visualization", 
    video: "/videos/ArchiViz_Website.mp4",
    desc: "Photorealistic 3D walkthroughs and immersive VR experiences that allow clients to explore buildings in real-time. From interactive interiors to large-scale developments, we transform blueprints into high-fidelity, navigable environments designed to sell the vision."
  },
  { 
    id: "03", 
    title: "", 
    cat: "Training Simulations", 
    video: "/videos/Training_Website.mp4",
    desc: "Realistic simulations for learning how to operate heavy machinery and perform complex medical or teaching procedures. These interactive tools let people practice difficult tasks in a safe, digital environment, making sure they are fully prepared for the real job."
  },
  { 
    id: "04", 
    title: "", 
    cat: "AI and Interactive Product Showcases", 
    video: "/videos/AIandProductDemo_Website.mp4",
    desc: "Advanced virtual sandboxes to train and test AI, providing a safe and controlled 3D environment for smart systems to learn. We also build high-end interactive demos that let customers explore products like cars or startup tech with realistic, hands-on detail."
  }
];

// --- Components ---

const RevealText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <div ref={ref} className={`text-reveal ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const navItems = ['Services', 'Work', 'Process', 'About'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-bg/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-display text-xl font-bold tracking-tight flex items-center gap-2">
          <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
          ARJUN SANKHALA
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <a href="#contact" className="text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-3 bg-white text-black hover:bg-brand-primary hover:text-white transition-all">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-brand-bg/95 backdrop-blur-2xl border-b border-white/5 md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navItems.map(item => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-display font-bold uppercase tracking-widest text-white/70 hover:text-brand-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-display font-bold uppercase tracking-widest text-brand-primary"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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

  return (
    <section ref={containerRef} className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div style={{ y, opacity }} className="z-10">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-8">
            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
            Interactive Tech Studio
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
            GAME <br /> <span className="text-white/20">DEV &</span> <br /> SIMULATION
          </h1>
          <p className="text-lg text-white/50 max-w-md mb-10 leading-relaxed">
            High-fidelity interactive experience, training simulations, VR/AR experiences, and multi-platform games built with Unity and Unreal.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#work" className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
              View Work 
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden group cursor-pointer"
          onClick={togglePlay}
        >
          <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay z-10" />
          
          {/* Video Element */}
          <video 
            ref={videoRef}
            src="https://videos.pexels.com/video-files/3129957/3129957-sd_640_360_25fps.mp4"
            poster="https://picsum.photos/seed/tech-video/1000/1000"
            className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 ${isPlaying ? 'grayscale-0' : ''}`}
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
      
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full" />
    </section>
  );
};

const ScrollSection = ({ children, id }: { children: React.ReactNode, id?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      id={id} 
      ref={ref} 
      style={{ scale, opacity }}
      className="relative"
    >
      {children}
    </motion.section>
  );
};

const Spotlight = () => {
  const mouseX = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });
  const mouseY = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isVisible]);

  const background = useMotionTemplate`radial-gradient(700px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.12), transparent 80%)`;

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-30"
      style={{
        background,
        opacity: isVisible ? 1 : 0
      }}
    />
  );
};

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(0, 255, 136, 0.1)" }: { children: React.ReactNode, className?: string, spotlightColor?: string }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

const Services = () => {
  return (
    <ScrollSection id="services">
      <div className="py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-6">Capabilities</h2>
              <h3 className="font-display text-5xl font-bold leading-tight mb-8">Engineering <br /> the Future of <br /> Interaction.</h3>
              <p className="text-white/40 leading-relaxed">
                From complex industrial simulations to engaging mobile games, we provide end-to-end technical solutions.
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
                      {React.cloneElement(s.icon as React.ReactElement, { size: 32 })}
                    </div>
                    <h4 className="text-xl font-bold mb-4">{s.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Industries Sub-section */}
          <div className="mt-32 pt-20 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-6">Sectors</h2>
                <h3 className="font-display text-4xl font-bold">Industries We <br /> Serve.</h3>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {[
                    "Game Studios",
                    "Education",
                    "Medical Training",
                    "Architecture",
                    "Industrial Training"
                  ].map((industry, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 group cursor-default"
                    >
                      <div className="w-1 h-1 bg-brand-primary rounded-full group-hover:scale-[3] group-hover:shadow-[0_0_10px_rgba(0,255,136,0.5)] transition-all" />
                      <span className="text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                        {industry}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

const Work = () => {
  return (
    <ScrollSection id="work">
      <div className="py-32 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-6">Selected Work</h2>
              <h3 className="font-display text-5xl font-bold">Featured Projects</h3>
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
                    <div className="text-brand-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">{p.cat}</div>
                    <h4 className="font-display text-4xl font-bold mb-6">{p.title}</h4>
                    <p className="text-white/40 mb-8 leading-relaxed">
                      {p.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

const About = () => {
  return (
    <ScrollSection id="about">
      <div className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-6">The Founder</h2>
              <h3 className="font-display text-5xl font-bold mb-8">Arjun Sankhala</h3>
              <div className="space-y-6 text-lg text-white/60 leading-relaxed">
                <p>
                  Unity developer with 9+ years of experience building games and simulations across multiple platforms including mobile, PC, console, and VR.
                </p>
                <p>
                  Graduate of <span className="text-white font-bold">IIT Patna</span>, combining technical rigor with a passion for interactive storytelling and simulation accuracy.
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
                  src="/Images/My.jpg.jpeg" 
                  alt="Arjun" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
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

const Process = () => {
  const steps = [
    { id: "01", title: "Discovery", desc: "Deep dive into project goals, target audience, and technical constraints." },
    { id: "02", title: "Prototyping", desc: "Rapid development of core mechanics to validate the interactive concept." },
    { id: "03", title: "Development", desc: "Iterative production cycles with regular builds and transparent feedback." },
    { id: "04", title: "Optimization", desc: "Fine-tuning performance and ensuring stability across all target platforms." }
  ];

  return (
    <ScrollSection id="process">
      <div className="py-32 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-6">Workflow</h2>
            <h3 className="font-display text-5xl font-bold">Development Process</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="relative group p-6 rounded-2xl hover:bg-white/[0.02] transition-all duration-500"
              >
                <div className="text-6xl font-display font-bold text-white/[0.03] absolute -top-10 left-0 group-hover:text-brand-primary/10 transition-colors">
                  {s.id}
                </div>
                <div className="relative z-10 pt-4">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-1 h-1 bg-brand-primary rounded-full group-hover:scale-[3] transition-transform" />
                    {s.title}
                  </h4>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-8">Get in Touch</h2>
        <h3 className="font-display text-6xl md:text-8xl font-bold tracking-tighter mb-12">
          LET'S <span className="text-white/20 italic">BUILD</span> <br /> TOGETHER.
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-20">
          <a 
            href="mailto:a.asankhala@gmail.com" 
            className="group flex items-center gap-3 text-2xl font-display hover:text-brand-primary transition-colors"
          >
            <Mail className="w-6 h-6 text-brand-primary group-hover:scale-110 transition-transform" />
            a.asankhala@gmail.com
          </a>
          <a 
            href="https://www.linkedin.com/in/arjun-sankhala-97ab6435a/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-3 text-2xl font-display hover:text-brand-primary transition-colors"
          >
            <Linkedin className="w-6 h-6 text-brand-primary group-hover:scale-110 transition-transform" />
            LinkedIn
          </a>
          <a 
            href="https://wa.me/917728999684" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-3 text-2xl font-display hover:text-brand-primary transition-colors"
          >
            <MessageCircle className="w-6 h-6 text-brand-primary group-hover:scale-110 transition-transform" />
            +91 7728999684
          </a>
        </div>
        <div className="max-w-2xl mx-auto p-1 bg-white/5 rounded-2xl backdrop-blur-xl border border-white/10">
          <div className="p-10 text-left">
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-8">Status</div>
            <div className="flex items-center gap-4 text-xl font-medium">
              <div className="w-3 h-3 bg-brand-secondary rounded-full animate-pulse" />
              Currently accepting new projects in all spaces.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/5">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
      <div>© 2026 Arjun Sankhala</div>
      <div>IIT Patna Alumnus</div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-brand-bg text-white selection:bg-brand-primary selection:text-black">
      <Spotlight />
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}
