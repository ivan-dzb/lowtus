import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-faint sm:flex-row">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span className="font-display tracking-[0.14em]">
          {site.location} · {site.timezone}
        </span>
      </div>
    </footer>
  );
}
