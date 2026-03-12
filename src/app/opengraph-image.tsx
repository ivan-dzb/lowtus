import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const alt = `${site.displayName} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

const chakra = await readFile(
  join(
    process.cwd(),
    "node_modules/@fontsource/chakra-petch/files/chakra-petch-latin-700-normal.woff",
  ),
);
const inter = await readFile(
  join(
    process.cwd(),
    "node_modules/@fontsource/inter/files/inter-latin-600-normal.woff",
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
          background: "#0b0a1e",
          fontFamily: "Inter",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(255,60,172,0.22) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 700,
            top: 70,
            width: 500,
            height: 500,
            borderRadius: 9999,
            background:
              "linear-gradient(180deg, #ffd36e 0%, #ff8a5c 28%, #ff3cac 60%, #7c3aed 100%)",
            opacity: 0.62,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -260,
            height: 460,
            background:
              "radial-gradient(ellipse at 65% 100%, rgba(255,60,172,0.35), transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 70px",
            width: 700,
            height: "100%",
          }}
        >
          <div
            style={{
              color: "#22d3ee",
              fontSize: 26,
              letterSpacing: 8,
              fontWeight: 600,
            }}
          >
            {site.role.toUpperCase()}
          </div>
          <div
            style={{
              fontFamily: "Chakra Petch",
              fontSize: 104,
              fontWeight: 700,
              color: "#f4f1ff",
              lineHeight: 1.05,
              marginTop: 14,
            }}
          >
            {site.displayName}
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              color: "#ff6ec7",
              marginTop: 18,
            }}
          >
            {site.headline}
          </div>
          <div style={{ color: "#a9a3c7", fontSize: 24, marginTop: 48 }}>
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
              width: 380,
              height: 380,
              borderRadius: 9999,
              overflow: "hidden",
              border: "3px solid rgba(255,60,172,0.55)",
              boxShadow: "0 0 80px -10px rgba(255,60,172,0.6)",
              position: "relative",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={portraitSrc}
              width={380}
              height={380}
              style={{
                objectFit: "cover",
                filter:
                  "grayscale(1) sepia(1) saturate(2.7) hue-rotate(272deg) contrast(1.05) brightness(1.02)",
              }}
              alt=""
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 380,
                height: 380,
                background:
                  "linear-gradient(158deg, rgba(255,60,172,0.12), rgba(124,58,237,0) 42%, rgba(34,211,238,0.52))",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Chakra Petch", data: chakra, weight: 700, style: "normal" },
        { name: "Inter", data: inter, weight: 600, style: "normal" },
      ],
    },
  );
}
