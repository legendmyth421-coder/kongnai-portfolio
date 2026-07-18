import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative rounded-[2.5rem] overflow-hidden glass p-10 sm:p-16 text-center">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple/30 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan/25 blur-3xl" />
            <div className="relative">
              <p className="font-mono text-sm text-orange">04 / Contact</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
                Let&apos;s <span className="text-gradient">build something</span>
              </h2>
              <p className="mt-5 max-w-xl mx-auto text-foreground/65 text-lg leading-relaxed">
                I&apos;m open to internships, collaboration, and interesting
                conversations about systems, graphics, and networks. The fastest
                way to reach me is GitHub.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/legendmyth421-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-purple via-pink to-orange bg-[length:200%_auto] hover:bg-[position:100%_0] transition-all duration-500 shadow-lg shadow-pink/30"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="#top"
                  className="px-7 py-3.5 rounded-full font-semibold glass glass-hover"
                >
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
