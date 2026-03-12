import PortraitImage from "./PortraitImage";

export default function Portrait() {
  return (
    <div className="hero-line relative mx-auto w-[240px] shrink-0 sm:w-[280px] lg:w-[340px] [animation-delay:420ms]">
      <div className="absolute -inset-6 rounded-[999px_999px_40px_40px] bg-[radial-gradient(ellipse_at_center,_rgba(255,60,172,0.35),_transparent_70%)] blur-lg" />

      <div
        className="absolute -inset-4 rounded-[999px_999px_40px_40px] opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(135deg, #000, transparent 65%)",
          WebkitMaskImage: "linear-gradient(135deg, #000, transparent 65%)",
        }}
      />

      <div className="relative overflow-hidden rounded-[999px_999px_32px_32px] border-2 border-pink/50 bg-bg shadow-[0_0_50px_-12px_rgba(255,60,172,0.6)]">
        <div className="relative aspect-[3/4]">
          <PortraitImage className="absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_15%,rgba(255,180,120,0.28),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.07] [background:repeating-linear-gradient(0deg,#000_0_2px,transparent_2px_4px)]" />
          <div className="absolute inset-0 [background:radial-gradient(ellipse_at_50%_38%,transparent_46%,rgba(11,10,30,0.7))]" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-bg via-bg/55 to-transparent" />
        </div>
      </div>

      <span className="absolute -left-1 -top-1 h-3 w-3 border-l border-t border-cyan" />
      <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-cyan" />
    </div>
  );
}
