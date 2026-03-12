export default function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute left-1/2 bottom-0 h-[300px] w-[300px] -translate-x-1/2 translate-y-[52%] sm:h-[400px] sm:w-[400px] sm:translate-y-[42%] lg:left-[70%] lg:bottom-[26%] lg:h-[420px] lg:w-[420px] lg:translate-y-0">
        <div
          className="h-full w-full rounded-full opacity-[0.42] blur-[2px]"
          style={{
            background:
              "linear-gradient(180deg, #ffd36e 0%, #ff8a5c 26%, #ff3cac 55%, #7c3aed 100%)",
            WebkitMaskImage:
              "repeating-linear-gradient(180deg, #000 0 8px, transparent 8px 12px), radial-gradient(circle, #000 60%, transparent 68%)",
            maskImage:
              "repeating-linear-gradient(180deg, #000 0 8px, transparent 8px 12px), radial-gradient(circle, #000 60%, transparent 68%)",
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }}
        />
        <div
          className="absolute inset-0 rounded-full opacity-[0.42] blur-[2px] [mask-image:linear-gradient(180deg,#000_0%,#000_42%,transparent_60%)]"
          style={{
            background:
              "linear-gradient(180deg, #ffd36e 0%, #ff8a5c 40%, #ff3cac 100%)",
          }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-[radial-gradient(ellipse_55%_70%_at_60%_100%,_rgba(255,60,172,0.22),_transparent_70%)]" />

      <div className="absolute inset-x-0 bottom-0 h-[42vh] overflow-hidden">
        <div
          className="absolute inset-x-[-60%] bottom-0 h-[130%] origin-bottom"
          style={{
            transform: "perspective(440px) rotateX(72deg)",
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,60,172,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
          }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg via-bg/80 to-transparent lg:h-24 lg:via-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-transparent" />
    </div>
  );
}
