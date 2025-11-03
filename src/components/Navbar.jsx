import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 z-50 w-full ${
        scrolled ? 'backdrop-blur-md/50 bg-[#040816]/70' : 'bg-transparent'
      } border-b border-white/5`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="group inline-flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_24px_6px_rgba(34,211,238,0.6)]"></div>
          <span className="text-white font-semibold tracking-widest uppercase text-sm group-hover:text-cyan-300 transition-colors">Eupho Connects</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#projects" className="hover:text-white transition-colors">Work</a>
          <a href="#team" className="hover:text-white transition-colors">Team</a>
          <a href="#contact" className="text-cyan-300 hover:text-cyan-200 transition-colors">Let’s Talk</a>
        </div>
      </nav>
    </motion.header>
  );
}
