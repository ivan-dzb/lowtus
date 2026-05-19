import { site } from "@/content/site";
import Lotus from "./Lotus";

export default function Footer() {
  return (
    <footer className="border-t bg-[var(--paper)]">
      <div className="mono mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-2 px-[clamp(1rem,4vw,2.5rem)] py-7 text-[var(--stone)] sm:flex-row">
        <span className="flex items-center gap-2">
          <Lotus className="h-3.5 w-3.5 text-[var(--pink-ink)]" />
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>
          {site.location} · {site.timezone} · 開発
        </span>
      </div>
    </footer>
  );
}
