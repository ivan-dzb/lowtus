"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const links = [
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-[0.2em] text-text"
        >
          {site.displayName.split(" ")[0].toUpperCase()}
          <span className="text-pink">.</span>
        </a>

        <ul className="hidden gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-text">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-pink/40 px-4 py-1.5 text-sm font-medium text-text transition-all hover:border-pink hover:shadow-[0_0_20px_-4px_var(--color-pink)]"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
