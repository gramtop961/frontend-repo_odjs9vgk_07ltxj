import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden bg-[#030711]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient glow overlays (non-interactive) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <p className="text-cyan-300/90 tracking-widest uppercase text-xs mb-4">Premium Creative Branding Agency</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-white drop-shadow-[0_8px_24px_rgba(0,255,255,0.1)]">
              We Build Brands That Speak. Create. Connect.
            </h1>
            <p className="mt-6 text-white/75 max-w-2xl">
              Visionary strategy, bold design, and cinematic storytelling for brands that want to lead.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a href="#contact" className="relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[#03101d] bg-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.45)] transition-transform hover:scale-[1.03] active:scale-[0.99]">
                Let’s Build Your Brand
              </a>
              <a href="#projects" className="text-white/70 hover:text-white transition-colors">See Our Work</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
