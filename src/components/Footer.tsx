import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t bg-[var(--paper)]">
      <div className="mono mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-2 px-[clamp(1rem,4vw,2.5rem)] py-7 text-[var(--stone)] sm:flex-row">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>
          {site.location} · {site.timezone} · 開発
        </span>
      </div>
    </footer>
  );
}
