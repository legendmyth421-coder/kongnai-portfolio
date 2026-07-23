"use client";

import Reveal from "./Reveal";

const posts = [
  {
    title: "Building a 3D Maze Engine from Scratch",
    excerpt: "How I implemented real-time rendering with custom GLSL shaders, dynamic lighting, and borderless fullscreen support using OpenGL 3.3 Core. The project taught me the fundamentals of the graphics pipeline, from vertex transformation to fragment shading.",
    date: "2026-07-15",
    tags: ["OpenGL", "Graphics", "C++"],
    href: "https://github.com/legendmyth421-coder/3d-maze-game",
    readTime: "5 min read",
  },
  {
    title: "Reliable File Transfer over UDP",
    excerpt: "Implementing Go-Back-N ARQ with sliding windows, timeouts, and packet-level retransmission in Python. This project explored the tradeoffs between reliability and performance in network protocols.",
    date: "2026-06-20",
    tags: ["Networking", "Protocols", "Python"],
    href: "https://github.com/legendmyth421-coder/gbn-reliable-transfer",
    readTime: "4 min read",
  },
  {
    title: "Automated Security Log Analysis",
    excerpt: "Building an agent that ingests system logs and surfaces potential threats using pattern matching and heuristics. The agent processes logs in real-time and categorizes events by severity.",
    date: "2026-05-10",
    tags: ["Security", "Automation", "Python"],
    href: "https://github.com/legendmyth421-coder/security-agent",
    readTime: "3 min read",
  },
  {
    title: "Multi-Threaded CGI Web Server",
    excerpt: "A cross-platform HTTP server built from the ground up in C++ with raw socket programming. Supports CGI script execution, thread pooling, and graceful shutdown.",
    date: "2026-04-05",
    tags: ["C++", "HTTP", "Systems"],
    href: "https://github.com/legendmyth421-coder/webserver",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-28 px-6" aria-labelledby="blog-heading">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-mono text-purple uppercase tracking-[0.3em]">05 / Blog</p>
          <h2 id="blog-heading" className="mt-4 text-4xl sm:text-5xl font-bold text-gradient">Writing & Thoughts</h2>
          <p className="mt-6 text-white/60 max-w-2xl">
            Occasional posts about systems, graphics, and things I&apos;ve learned along the way.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 100}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2 focus:ring-offset-background"
                aria-label={`${post.title} - ${post.readTime}`}
              >
                <div className="flex items-center gap-3 text-sm text-white/40 font-mono">
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time>
                  <span aria-hidden="true">?</span>
                  <span>{post.readTime}</span>
                </div>
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
