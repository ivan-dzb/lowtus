import { site } from "@/content/site";

const duotone =
  "linear-gradient(158deg, #ff3cac 0%, #7c3aed 48%, #22d3ee 100%)";

export default function PortraitImage({ className = "" }: { className?: string }) {
  if (!site.portrait) {
    return (
      <div
        className={`bg-[radial-gradient(ellipse_at_50%_30%,_#3a3560,_#14122e)] ${className}`}
      >
        <svg
          viewBox="0 0 100 130"
          className="h-full w-full text-faint/40"
          fill="currentColor"
        >
          <circle cx="50" cy="45" r="22" />
          <path d="M12 130c0-24 17-40 38-40s38 16 38 40z" />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`[filter:contrast(1.15)_saturate(1.05)] ${className}`}
      style={{
        backgroundImage: `${duotone}, url(${site.portrait})`,
        backgroundBlendMode: "color",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    />
  );
}
