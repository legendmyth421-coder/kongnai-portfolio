import Reveal from "./Reveal";

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  accent: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "3D Maze Game",
    blurb:
      "A real-time 3D maze navigation game built on OpenGL 3.3 Core with custom GLSL shaders, dynamic lighting, and a borderless fullscreen renderer.",
    tags: ["C++", "OpenGL", "GLSL", "GLFW", "CMake"],
    accent: "from-purple to-pink",
    href: "https://github.com/legendmyth421-coder",
  },
  {
    title: "Go-Back-N Reliable Transfer",
    blurb:
      "A reliable file transfer protocol over UDP implementing Go-Back-N ARQ with sliding windows, timeouts, and packet-level retransmission.",
    tags: ["Python", "UDP", "Sockets", "Protocols"],
    accent: "from-cyan to-green",
    href: "https://github.com/legendmyth421-coder",
  },
  {
    title: "Log Analysis Security Agent",
    blurb:
      "An automated security agent that ingests and analyzes system logs to detect suspicious patterns and surface potential threats.",
    tags: ["Python", "Security", "Automation", "Logging"],
    accent: "from-orange to-pink",
    href: "https://github.com/legendmyth421-coder",
  },
  {
    title: "Multi-Threaded CGI Web Server",
    blurb:
      "A cross-platform, multi-threaded HTTP web server with CGI support, built from the ground up in C++ with raw socket programming.",
    tags: ["C++", "HTTP", "CGI", "Threads", "Sockets"],
    accent: "from-purple to-cyan",
    href: "https://github.com/legendmyth421-coder",
  },
  {
    title: "CO2 Emissions Visualization",
    blurb:
      "An interactive data visualization dashboard exploring global CO2 emission trends with charted insights and a clean UI.",
    tags: ["Python", "Data Viz", "Charts"],
    accent: "from-green to-cyan",
    href: "https://github.com/legendmyth421-coder",
  },
  {
    title: "ScaleFinder (OOP)",
    blurb:
      "An object-oriented music scale finder applying clean modeling principles to map notes, intervals, and scales.",
    tags: ["OOP", "Modeling", "Design"],
    accent: "from-pink to-orange",
    href: "https://github.com/legendmyth421-coder",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-pink">02 / Projects</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Things I&apos;ve <span className="text-gradient">built</span>
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/60 text-lg">
            A selection of projects across graphics, networking, security, and
            systems. Each one taught me something new.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full glass glass-hover rounded-3xl p-7 relative overflow-hidden"
              >
                <div
                  className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <span className="text-foreground/30 group-hover:text-foreground/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7M17 7H8M17 7v9" />
                      </svg>
                    </span>
                  </div>
                  <p className="mt-3 text-foreground/60 leading-relaxed">
                    {p.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-medium font-mono bg-white/5 border border-white/10 text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
