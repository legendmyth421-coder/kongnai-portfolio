"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-background/70 border-b border-white/5"
          : "py-5"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-2 font-bold text-lg">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-purple via-pink to-orange text-white font-mono text-sm shadow-lg shadow-purple/40">
            KN
          </span>
          <span className="hidden sm:block">
            Kong<span className="text-gradient">Nai</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/legendmyth421-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple to-pink hover:opacity-90 transition-opacity"
          >
            GitHub
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden grid place-items-center h-10 w-10 rounded-lg glass"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-6 mt-3 rounded-2xl glass p-2 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium text-foreground/80 hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/legendmyth421-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple to-pink"
          >
            GitHub
          </a>
        </div>
      )}
    </header>
  );
}
