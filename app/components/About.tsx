import Reveal from "./Reveal";

const stats = [
  { value: "6+", label: "Major projects" },
  { value: "3rd", label: "Year undergrad" },
  { value: "C++", label: "& Python core" },
  { value: "OpenGL", label: "3.3 Core" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-purple">01 / About</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            A bit <span className="text-gradient">about me</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7" delay={100}>
            <div className="space-y-5 text-lg text-foreground/70 leading-relaxed">
              <p>
                I&apos;m a third-year Computer Science undergraduate who enjoys
                the intersection of performance, graphics, and correctness. My
                coursework has taken me from single-cycle CPUs and ALU design in
                Verilog to real-time 3D maze rendering with custom GLSL shaders.
              </p>
              <p>
                On the systems side, I&apos;ve built a multi-threaded CGI web
                server in C++ and a Go-Back-N reliable file transfer over UDP.
                On the security side, I developed a log-analysis agent that
                surfaces threats automatically. I care about writing code that is
                not just functional, but understandable.
              </p>
              <p>
                When I&apos;m not chasing down a buffer overflow or profiling a
                render loop, I&apos;m exploring data visualization and clean
                object-oriented design.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass glass-hover rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-gradient">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-foreground/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
