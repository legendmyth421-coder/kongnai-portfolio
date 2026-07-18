import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 pt-28 pb-20"
    >
      <div className="mx-auto max-w-6xl w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-foreground/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
              </span>
              Available for opportunities
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Hi, I&apos;m <span className="text-gradient">Kong Nai</span>.
              <br />
              I build <span className="text-gradient-cyan">systems</span> &amp;{" "}
              <span className="text-gradient">graphics</span>.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-lg text-foreground/65 leading-relaxed">
              Third-year Computer Science undergraduate passionate about
              low-level systems, real-time graphics, and reliable networked
              software. From OpenGL engines to Go-Back-N protocols, I love
              turning complex ideas into working code.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-purple via-pink to-orange bg-[length:200%_auto] hover:bg-[position:100%_0] transition-all duration-500 shadow-lg shadow-pink/30"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full font-semibold glass glass-hover"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={250}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-purple/30 via-pink/20 to-cyan/20 blur-2xl" />
              <div className="relative glass rounded-[2rem] p-8 glow-purple">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-pink/80" />
                    <span className="h-3 w-3 rounded-full bg-orange/80" />
                    <span className="h-3 w-3 rounded-full bg-green/80" />
                  </div>
                  <span className="font-mono text-xs text-foreground/40">
                    ~/kongnai
                  </span>
                </div>
                <pre className="mt-6 font-mono text-sm leading-relaxed text-foreground/80 overflow-x-auto">
                  <code>{`const dev = {
  name: "Kong Nai",
  role: "CS Undergraduate",
  year: "3rd Year",
  focus: [
    "Computer Graphics",
    "Networks & Protocols",
    "Systems & Security",
  ],
  stack: ["C/C++", "Python", "OpenGL"],
  status: "building things",
};`}</code>
                </pre>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
