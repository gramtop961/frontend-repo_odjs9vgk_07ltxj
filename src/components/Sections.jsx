import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Sections() {
  return (
    <div className="relative bg-[#040816] text-white">
      {/* Background subtle grid / pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.06),transparent_45%)]"></div>

      {/* About */}
      <section id="about" className="relative scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <h2 className="text-3xl sm:text-4xl font-bold">About Us</h2>
            <p className="mt-6 text-white/70 max-w-3xl leading-relaxed">
              Eupho Connects is a full-service branding studio blending design, storytelling, and strategy to build magnetic brands. We craft social media, websites, shoots, campaigns, and identity systems that scale with ambition.
            </p>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Design', 'Storytelling', 'Strategy', 'Innovation'].map((k) => (
                <div key={k} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-white/80 backdrop-blur">
                  {k}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">
            What We Do
          </motion.h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: 'Brand Strategy & Identity', d: 'Positioning, naming, visual systems, style guides.' },
              { t: 'Social Media & Content', d: 'Playbooks, content engines, creator collaborations.' },
              { t: 'Website & UI/UX', d: 'High-conversion websites with immersive flows.' },
              { t: 'Photo & Video Shoots', d: 'Art direction, production, and cinematic edits.' },
              { t: 'Marketing Campaigns', d: 'Full-funnel creative campaigns built to perform.' },
              { t: 'Creative Direction', d: 'End-to-end guidance to make brands unforgettable.' },
            ].map((c, i) => (
              <motion.div
                key={c.t}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur hover:border-cyan-300/30"
              >
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-2" />
                <h3 className="text-lg font-semibold">{c.t}</h3>
                <p className="mt-2 text-white/70">{c.d}</p>
                <div className="mt-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-cyan-200 transition-transform duration-300 group-hover:scale-105">
                  Explore
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="relative scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">
            Featured Projects
          </motion.h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <motion.div
                key={n}
                whileHover={{ y: -4 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[conic-gradient(at_30%_30%,#0ea5e9_0,#0ea5e9_10%,#0ea5e908_20%,transparent_30%)] from-cyan-500/10 to-transparent"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-[#040816] to-transparent">
                  <div>
                    <p className="text-sm text-white/70">Branding / Concept</p>
                    <p className="font-semibold">Project {n}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">
            Client Reviews
          </motion.h2>
          <div className="mt-10 flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              {
                q: '“They transformed our positioning with a brand that actually moves people.”',
                a: 'VP Marketing, SaaS Unicorn',
              },
              {
                q: '“Cinematic, strategic, and obsessively detailed. A true creative partner.”',
                a: 'Founder, DTC Lifestyle',
              },
              {
                q: '“From social to site, they built a coherent system that converts.”',
                a: 'CMO, Fintech',
              },
            ].map((r, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="min-w-[320px] max-w-sm flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="text-white/90">{r.q}</p>
                <p className="mt-4 text-sm text-white/60">{r.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="relative scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">
            The Team
          </motion.h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: 'Ava R.', r: 'Creative Director' },
              { n: 'Milo K.', r: 'Brand Strategist' },
              { n: 'Sora L.', r: 'Design Lead' },
              { n: 'Kenji T.', r: 'Producer' },
            ].map((m) => (
              <motion.div
                key={m.n}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >
                <div className="aspect-[4/5] w-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.2),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_45%)]" />
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-t from-[#040816]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-semibold">{m.n}</p>
                  <p className="text-sm text-white/70">{m.r}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
