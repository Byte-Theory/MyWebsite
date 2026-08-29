import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../hooks/useScrollTo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const navItems = ['Services', 'Work', 'Process', 'About'];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const targetId = id.toLowerCase();
    const element = document.getElementById(targetId);
    
    if (element) {
      scrollToSection(e, targetId);
      setIsMenuOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/#' + targetId);
      setIsMenuOpen(false);
      return;
    }
    scrollToSection(e, targetId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${isScrolled ? 'bg-brand-bg/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="font-display text-xl font-bold tracking-tight flex items-center gap-2">
          <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
          ARJUN SANKHALA
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map(item => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleNavClick(e, item)}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <Link 
            to="/case-studies"
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
          >
            Case Studies
          </Link>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-3 bg-white text-black hover:bg-brand-primary hover:text-white transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-4 -mr-4 text-white/70 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 right-0 bg-brand-bg/98 backdrop-blur-2xl border-b border-white/5 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-8">
              {navItems.map(item => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-xl font-display font-bold uppercase tracking-[0.2em] text-white/70 hover:text-brand-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <Link 
                to="/case-studies"
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-display font-bold uppercase tracking-[0.2em] text-white/70 hover:text-brand-primary transition-colors"
              >
                Case Studies
              </Link>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-xl font-display font-bold uppercase tracking-[0.2em] text-brand-primary py-4 border-t border-white/5 mt-2"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
