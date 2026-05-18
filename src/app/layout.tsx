import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.displayName} — ${site.role}`,
  description: site.summary,
  openGraph: {
    title: `${site.displayName} — ${site.role}`,
    description: site.summary,
    url: site.url,
    siteName: site.displayName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.displayName} — ${site.role}`,
    description: site.summary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700;900&family=Shippori+Mincho:wght@600;800&family=Space+Mono:wght@400;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
