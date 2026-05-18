import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const alt = `${site.displayName} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

const anton = await readFile(
  join(
    process.cwd(),
    "node_modules/@fontsource/anton/files/anton-latin-400-normal.woff",
  ),
);
const mono = await readFile(
  join(
    process.cwd(),
    "node_modules/@fontsource/space-mono/files/space-mono-latin-700-normal.woff",
  ),
);
const portrait = await readFile(
  join(process.cwd(), "public/portrait.jpg"),
  "base64",
);
const portraitSrc = `data:image/jpeg;base64,${portrait}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#f4f2ec",
          fontFamily: "Space Mono",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: 90,
            width: 460,
            height: 460,
            borderRadius: 9999,
            background: "#ff4d6d",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
            width: 720,
            height: "100%",
          }}
        >
          <div
            style={{
              color: "#8b867d",
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            {site.role}
          </div>
          <div
            style={{
              fontFamily: "Anton",
              fontSize: 150,
              lineHeight: 0.9,
              color: "#0d0d10",
              textTransform: "uppercase",
              marginTop: 16,
              display: "flex",
            }}
          >
            {site.displayName}
          </div>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 2,
              color: "#d81f4a",
              marginTop: 20,
              textTransform: "uppercase",
            }}
          >
            {site.headline}
          </div>
          <div style={{ color: "#8b867d", fontSize: 22, marginTop: 44 }}>
            lowtus.me
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 356,
              height: 430,
              borderRadius: 6,
              overflow: "hidden",
              border: "2px solid #0d0d10",
              position: "relative",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={portraitSrc}
              width={356}
              height={430}
              style={{
                objectFit: "cover",
                filter: "grayscale(1) contrast(1.18) brightness(1.08)",
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Anton", data: anton, weight: 400, style: "normal" },
        { name: "Space Mono", data: mono, weight: 700, style: "normal" },
      ],
    },
  );
}
