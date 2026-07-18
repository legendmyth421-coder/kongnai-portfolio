export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full bg-purple/30 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-24 h-[40rem] w-[40rem] rounded-full bg-pink/25 blur-[120px] animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/4 h-[36rem] w-[36rem] rounded-full bg-cyan/20 blur-[120px] animate-blob [animation-delay:-12s]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
}
