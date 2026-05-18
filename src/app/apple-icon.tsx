import { ImageResponse } from "next/og";

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
          position: "relative",
          background: "#f4f2ec",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 40,
            top: 40,
            width: 84,
            height: 84,
            borderRadius: 9999,
            background: "#0d0d10",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 56,
            top: 56,
            width: 84,
            height: 84,
            borderRadius: 9999,
            background: "#ff4d6d",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
