const petals = [
  { r: -52, d: "M0 0C-11 -9 -10 -24 0 -31C10 -24 11 -9 0 0Z" },
  { r: 52, d: "M0 0C-11 -9 -10 -24 0 -31C10 -24 11 -9 0 0Z" },
  { r: -27, d: "M0 0C-13 -11 -11 -30 0 -39C11 -30 13 -11 0 0Z" },
  { r: 27, d: "M0 0C-13 -11 -11 -30 0 -39C11 -30 13 -11 0 0Z" },
  { r: 0, d: "M0 0C-12 -13 -11 -38 0 -48C11 -38 12 -13 0 0Z" },
];

const pads = [
  "M0 3C-14 -3 -33 0 -45 11C-30 16 -12 14 0 8Z",
  "M0 3C14 -3 33 0 45 11C30 16 12 14 0 8Z",
];

export const lotusGroup = { petals, pads };

export default function Lotus({
  className = "",
  style,
  title,
}: {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <g transform="translate(50 66)">
        {pads.map((d) => (
          <path key={d} d={d} />
        ))}
        {petals.map((p) => (
          <path key={p.r} transform={`rotate(${p.r})`} d={p.d} />
        ))}
      </g>
    </svg>
  );
}
