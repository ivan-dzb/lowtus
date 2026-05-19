import { ImageResponse } from "next/og";
import { lotusGroup } from "@/components/Lotus";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4f2ec",
        }}
      >
        <svg width="150" height="150" viewBox="0 0 100 100" fill="#ff4d6d">
          <g transform="translate(50 66) scale(1.25)">
            {lotusGroup.pads.map((d) => (
              <path key={d} d={d} />
            ))}
            {lotusGroup.petals.map((p) => (
              <path key={p.r} transform={`rotate(${p.r})`} d={p.d} />
            ))}
          </g>
        </svg>
      </div>
    ),
    { ...size },
  );
}
