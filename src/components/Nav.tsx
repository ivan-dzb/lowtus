import { site } from "@/content/site";

const links = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--paper)]">
      <div className="mono flex items-center justify-between gap-4 border-b px-[clamp(1rem,4vw,2.5rem)] py-2.5 text-[var(--stone)]">
        <span>
          <b className="font-bold text-[var(--sumi)]">{site.displayName}</b>{" "}
          &frasl; {site.role}
        </span>
        <span className="hidden sm:block text-[var(--sumi)]">
          {site.location.split(",")[0]} · {site.timezone}
        </span>
        <span className="flex items-center gap-2">
          <span className="pulse" />
          Available for contract
        </span>
      </div>

      <nav className="mx-auto flex max-w-[1300px] items-center justify-between gap-4 px-[clamp(1rem,4vw,2.5rem)] py-4">
        <a
          href="#top"
          className="font-[family-name:var(--display)] text-[1.05rem] font-black tracking-tight"
        >
          IVAN<span className="text-[var(--pink-ink)]">.</span>
        </a>

        <ul className="mono hidden gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative transition-colors hover:text-[var(--pink-ink)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.links.upwork}
          target="_blank"
          rel="noopener noreferrer"
          className="mono font-bold text-[var(--pink-ink)]"
        >
          Upwork &#8599;
        </a>
      </nav>
    </header>
  );
}
