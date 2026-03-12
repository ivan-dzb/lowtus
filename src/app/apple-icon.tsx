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
          alignItems: "flex-end",
          justifyContent: "center",
          background: "#0b0a1e",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 116,
            height: 92,
            marginBottom: 30,
            borderRadius: "58px 58px 8px 8px",
            background:
              "linear-gradient(180deg, #ffd36e 0%, #ff8a5c 30%, #ff3cac 62%, #7c3aed 100%)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
