export default function Footer() {
  return (
    <footer className="relative z-10 px-6 py-10 border-t border-white/5">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/50">
          Designed &amp; built by{" "}
          <span className="text-gradient font-semibold">Kong Nai</span>
        </p>
        <p className="font-mono text-xs text-foreground/40">
          Next.js + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
