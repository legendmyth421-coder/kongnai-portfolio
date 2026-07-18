import Reveal from "./Reveal";

const groups = [
  {
    title: "Languages",
    items: ["C / C++", "Python", "TypeScript", "JavaScript", "Java", "SQL"],
  },
  {
    title: "Graphics & Systems",
    items: ["OpenGL 3.3", "GLSL", "GLFW", "Verilog / VHDL", "FPGA (Vivado)"],
  },
  {
    title: "Web & Frameworks",
    items: ["Next.js", "React", "Node.js", "Flask", "CGI", "HTML / CSS"],
  },
  {
    title: "Networks & Security",
    items: [
      "TCP / UDP",
      "HTTP",
      "Go-Back-N",
      "Wireshark",
      "eNSP",
      "Log Analysis",
    ],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "CMake", "Linux", "PowerShell", "Docker"],
  },
];

const marquee = [
  "C++",
  "Python",
  "OpenGL",
  "GLSL",
  "Next.js",
  "React",
  "Networking",
  "Security",
  "Verilog",
  "FPGA",
  "Linux",
  "CMake",
  "Git",
  "Flask",
  "UDP",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-cyan">03 / Skills</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            My <span className="text-gradient">toolkit</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="glass glass-hover rounded-3xl p-7 h-full">
                <h3 className="text-lg font-bold text-gradient-cyan">
                  {g.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-foreground/75"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal delay={groups.length * 80}>
            <div className="rounded-3xl p-7 h-full bg-gradient-to-br from-purple/20 via-pink/15 to-orange/15 border border-white/10 flex flex-col justify-center">
              <p className="text-2xl font-bold leading-snug">
                Always <span className="text-gradient">learning</span>, always
                shipping.
              </p>
              <p className="mt-3 text-foreground/60">
                Comfortable across the stack, from silicon to screen.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 relative">
        <div className="flex gap-4 animate-marquee whitespace-nowrap will-change-transform">
          {[...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className="px-6 py-2 rounded-full glass font-mono text-sm text-foreground/50"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
