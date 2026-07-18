"use client";

import Reveal from "./Reveal";

const projects = [
  {
    title: "3D Maze Game",
    blurb: "A real-time 3D maze navigation game built on OpenGL 3.3 Core with custom GLSL shaders, dynamic lighting, and a borderless fullscreen renderer.",
    tags: ["C++", "OpenGL", "GLSL", "GLFW", "CMake"],
    href: "https://github.com/legendmyth421-coder/3d-maze-game",
    image: "/maze-screenshot.png",
    accent: "from-purple to-pink",
  },
  {
    title: "Go-Back-N Reliable Transfer",
    blurb: "A reliable file transfer protocol over UDP implementing Go-Back-N ARQ with sliding windows, timeouts, and packet-level retransmission.",
    tags: ["Python", "UDP", "Sockets", "Protocols"],
    href: "https://github.com/legendmyth421-coder/gbn-reliable-transfer",
    image: null,
    accent: "from-pink to-orange",
  },
  {
    title: "Log Analysis Security Agent",
    blurb: "An automated security agent that ingests and analyzes system logs to detect suspicious patterns and surface potential threats.",
    tags: ["Python", "Security", "Automation", "Logging"],
    href: "https://github.com/legendmyth421-coder/security-agent",
    image: null,
    accent: "from-orange to-cyan",
  },
  {
    title: "Multi-Threaded CGI Web Server",
    blurb: "A cross-platform, multi-threaded HTTP web server with CGI support, built from the ground up in C++ with raw socket programming.",
    tags: ["C++", "HTTP", "CGI", "Threads", "Sockets"],
    href: "https://github.com/legendmyth421-coder/webserver",
    image: null,
    accent: "from-cyan to-green",
  },
  {
    title: "CO2 Emissions Visualization",
    blurb: "An interactive data visualization dashboard exploring global CO2 emission trends with charted insights and a clean UI.",
    tags: ["Python", "Data Viz", "Charts"],
    href: "https://github.com/legendmyth421-coder/co2-viz",
    image: null,
    accent: "from-green to-purple",
  },
  {
    title: "ScaleFinder (OOP)",
    blurb: "An object-oriented music scale finder applying clean modeling principles to map notes, intervals, and scales.",
    tags: ["OOP", "Modeling", "Design"],
    href: "https://github.com/legendmyth421-coder",
    image: null,
    accent: "from-purple to-pink",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-mono text-purple uppercase tracking-[0.3em]">02 / Projects</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gradient">Things I&apos;ve built</h2>
          <p className="mt-6 text-white/60 max-w-2xl">
            A selection of projects across graphics, networking, security, and systems. Each one taught me something new.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                {project.image && (
                  <div className="mb-4 rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <svg className="w-5 h-5 text-white/40 group-hover:text-purple group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="mt-3 text-sm text-white/60 leading-relaxed flex-grow">{project.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
