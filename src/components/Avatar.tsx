import PortraitImage from "./PortraitImage";

export default function Avatar() {
  return (
    <div className="relative h-24 w-24">
      <div className="absolute -inset-2 rounded-full bg-[radial-gradient(circle,_rgba(255,60,172,0.4),_transparent_70%)] blur-md" />
      <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-pink/50 bg-bg shadow-[0_0_28px_-8px_rgba(255,60,172,0.6)]">
        <PortraitImage className="absolute inset-0" />
      </div>
      <span className="absolute -left-1 -top-1 h-2.5 w-2.5 border-l border-t border-cyan" />
      <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 border-b border-r border-cyan" />
    </div>
  );
}
