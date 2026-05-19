import { site } from "@/content/site";
import Lotus from "./Lotus";

export default function Portrait() {
  const pic: React.CSSProperties = site.portrait
    ? {
        backgroundImage: `url(${site.portrait})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        filter: "grayscale(1) contrast(1.3) brightness(1.08)",
      }
    : { background: "#2a2740" };

  return (
    <div className="slam-target relative grid place-items-center">
      <Lotus
        className="pointer-events-none absolute w-[clamp(300px,42vw,500px)] text-[var(--pink)]"
        style={{ transform: "translate(13%, -28%)" }}
      />


      <div className="relative aspect-[4/5] w-[clamp(210px,28vw,330px)] overflow-hidden rounded-[5px] border-[1.5px] border-[color:var(--sumi)] bg-[var(--sumi)] [isolation:isolate]">
        <div className="absolute inset-0" style={pic} />
        <div
          className="absolute inset-0"
          style={{ ...pic, animation: "slice 5s steps(1) infinite" }}
        />
        <div
          className="absolute inset-0 opacity-30 mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(var(--sumi) 30%, transparent 32%)",
            backgroundSize: "3.5px 3.5px",
          }}
        />
        <span className="mono absolute bottom-3 left-3 bg-[rgba(13,13,16,0.72)] px-1.5 py-0.5 text-[0.55rem] tracking-[0.14em] text-[var(--paper)]">
          {site.displayName} · GDL
        </span>
      </div>

      <span
        className="absolute left-[-1.5rem] top-1/2 hidden -translate-y-1/2 font-[family-name:var(--display)] text-[1.05rem] font-bold tracking-[0.34em] text-[var(--pink-ink)] lg:block"
        style={{ writingMode: "vertical-rl" }}
        aria-hidden="true"
      >
        開発
      </span>
    </div>
  );
}
