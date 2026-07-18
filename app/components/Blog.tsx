"use client";

import Reveal from "./Reveal";

const posts = [
  {
    title: "Building a 3D Maze Engine from Scratch",
    excerpt: "How I implemented real-time rendering with custom GLSL shaders, dynamic lighting, and borderless fullscreen support using OpenGL 3.3 Core.",
    date: "2026-07-15",
    tags: ["OpenGL", "Graphics", "C++"],
    href: "#",
  },
  {
    title: "Reliable File Transfer over UDP",
    excerpt: "Implementing Go-Back-N ARQ with sliding windows, timeouts, and packet-level retransmission in Python.",
    date: "2026-06-20",
    tags: ["Networking", "Protocols", "Python"],
    href: "#",
  },
  {
    title: "Automated Security Log Analysis",
    excerpt: "Building an agent that ingests system logs and surfaces potential threats using pattern matching and heuristics.",
    date: "2026-05-10",
    tags: ["Security", "Automation", "Python"],
    href: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-mono text-purple uppercase tracking-[0.3em]">05 / Blog</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gradient">Writing & Thoughts</h2>
          <p className="mt-6 text-white/60 max-w-2xl">
            Occasional posts about systems, graphics, and things I&apos;ve learned along the way.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 100}>
              <a
                href={post.href}
                className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-sm text-white/40 font-mono">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</div>
                <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-gradient transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed flex-grow">{post.excerpt}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
