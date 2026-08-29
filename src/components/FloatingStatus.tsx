import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../hooks/useScrollTo';

export const FloatingStatus = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Reset visibility when route changes
    setIsVisible(true);

    let observer: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout;
    let retries = 0;
    const maxRetries = 10; // Stop after 2 seconds (10 * 200ms)

    const startObserving = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        observer = new IntersectionObserver(
          ([entry]) => {
            // Hide when contact section is in view
            setIsVisible(!entry.isIntersecting);
          },
          { 
            threshold: 0,
            rootMargin: '0px 0px -10% 0px' // Trigger slightly before it hits the bottom
          }
        );
        observer.observe(contactSection);
      } else if (retries < maxRetries) {
        // If not found, retry after a short delay (useful for route transitions)
        retries++;
        timeoutId = setTimeout(startObserving, 200);
      }
    };

    startObserving();

    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 md:bottom-8 z-50 group"
        >
          <Link 
            to="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="relative flex items-center gap-4 p-2 pr-6 rounded-full bg-brand-bg/40 backdrop-blur-2xl border border-white/10 hover:border-brand-primary/50 hover:bg-brand-bg/60 transition-all duration-500 shadow-2xl shadow-black/50 overflow-hidden whitespace-nowrap"
          >
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/0 via-brand-primary/5 to-brand-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            {/* Icon Container */}
            <div className="relative w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/20 group-hover:scale-110 transition-transform duration-500">
              <MessageCircle className="w-5 h-5 text-white" />
              <div className="absolute inset-0 rounded-full bg-brand-primary animate-ping opacity-20" />
            </div>

            {/* Text Content */}
            <div className="relative flex flex-col">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-primary/80 leading-none mb-1">WORK WITH US</span>
              <span className="text-[11px] font-medium text-white/90 leading-none whitespace-nowrap">Launch your interactive prototype in 7 days</span>
            </div>

            {/* Arrow Icon */}
            <div className="relative ml-2 w-5 h-5 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
