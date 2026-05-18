import { site } from "@/content/site";
import Section from "./Section";
import Glitch from "./Glitch";
import Reveal from "./Reveal";

export default function Stack() {
  return (
    <Section id="stack" index="02" kanji="技術" label="the stack">
      <h2 className="font-[family-name:var(--display)] text-[clamp(2.2rem,7vw,4.6rem)] font-black uppercase leading-[0.92] [text-wrap:balance]">
        <Glitch text="Top to bottom" />
      </h2>
      <p className="serif mt-5 max-w-[42ch] text-[clamp(1.05rem,1.6vw,1.35rem)] text-[#4a4842]">
        One person across every layer — no handoffs between frontend and backend.
      </p>

      <div className="mt-10 divide-y divide-[color:var(--rule)] border-y">
        {site.stack.map((group) => (
          <Reveal
            key={group.layer}
            className="grid gap-3 py-5 sm:grid-cols-[160px_1fr] sm:items-baseline sm:gap-8"
          >
            <span className="mono tracking-[0.14em] text-[var(--pink-ink)]">
              {group.layer}
            </span>
            <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[0.95rem] text-[#35342f]">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
