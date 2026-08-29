import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Spotlight } from './Spotlight';
import { Navbar } from './Navbar';
import { FloatingStatus } from './FloatingStatus';
import { Footer } from './Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return (
    <div className="bg-brand-bg text-white selection:bg-brand-primary selection:text-black min-h-screen flex flex-col">
      <Spotlight />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <FloatingStatus />
      <Footer />
    </div>
  );
};
