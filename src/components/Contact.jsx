import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="relative bg-gradient-to-b from-[#050b1e] via-[#040816] to-[#030713] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-96 w-[42rem] bg-cyan-400/10 blur-3xl rounded-full" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <p className="text-cyan-300/90 tracking-widest uppercase text-xs">Let’s Talk</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Let’s bring your vision to life.</h2>
          <p className="mt-4 text-white/70">Tell us about your brand and goals. We’ll get back to you within 24 hours.</p>
        </motion.div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 grid gap-6 sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/70 mb-2">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-300/60 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)] transition"
              placeholder="Your full name"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/70 mb-2">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-300/60 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)] transition"
              placeholder="you@company.com"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-white/70 mb-2">Project Details</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-300/60 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)] transition resize-y"
              placeholder="Tell us about your brand, timeline, and budget."
            />
          </div>
          <div className="sm:col-span-2 flex items-center gap-4">
            <button
              type="submit"
              className="relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-[#03101d] bg-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.45)] transition-transform hover:scale-[1.03] active:scale-[0.99]"
            >
              Send Message
            </button>
            <p className="text-sm text-white/60">We reply within 24 hours.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
