"use client";

import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-sm font-mono text-purple uppercase tracking-[0.3em]">04 / Contact</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gradient">Let&apos;s build something</h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-8 text-lg text-white/70 max-w-2xl leading-relaxed">
            I&apos;m open to internships, collaboration, and interesting conversations about systems, graphics, and networks. The fastest way to reach me is GitHub.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/legendmyth421-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple/50 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-lg font-medium text-white">GitHub</span>
              <svg className="w-5 h-5 text-purple group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple to-pink hover:opacity-90 transition-opacity duration-300"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-lg font-medium text-white">Download Resume</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
