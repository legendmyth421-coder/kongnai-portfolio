"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

function AnimatedStat({ value, suffix = "", label }: { value: string; suffix?: string; label: string }) {
  const isNumeric = !isNaN(parseInt(value));
  const [displayValue, setDisplayValue] = useState(isNumeric ? "0" : value);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isNumeric) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
            const duration = 1500;
            const steps = 60;
            const increment = numericValue / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= numericValue) {
                setDisplayValue(value);
                clearInterval(timer);
              } else {
                setDisplayValue(Math.floor(current).toString());
              }
            }, duration / steps);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, isNumeric]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-gradient">
        {displayValue}{suffix}
      </div>
      <div className="mt-2 text-sm text-white/60">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-mono text-purple uppercase tracking-[0.3em]">01 / About</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gradient">A bit about me</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <Reveal className="lg:col-span-2">
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                I&apos;m a third-year Computer Science undergraduate who enjoys the intersection of performance, graphics, and correctness. My coursework has taken me from single-cycle CPUs and ALU design in Verilog to real-time 3D maze rendering with custom GLSL shaders.
              </p>
              <p>
                On the systems side, I&apos;ve built a multi-threaded CGI web server in C++ and a Go-Back-N reliable file transfer over UDP. On the security side, I developed a log-analysis agent that surfaces threats automatically. I care about writing code that is not just functional, but understandable.
              </p>
              <p>
                When I&apos;m not chasing down a buffer overflow or profiling a render loop, I&apos;m exploring data visualization and clean object-oriented design.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-2 gap-6">
              <AnimatedStat value="6" suffix="+" label="Major projects" />
              <AnimatedStat value="3" suffix="rd" label="Year undergrad" />
              <AnimatedStat value="C++" label="& Python core" />
              <AnimatedStat value="OpenGL" label="3.3 Core" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
