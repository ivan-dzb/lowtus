import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Stack() {
  return (
    <section id="stack" className="border-y border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          index="02"
          title="The full stack, top to bottom"
          kicker="One person across every layer — no handoffs, no gaps between frontend and backend."
        />

        <div className="space-y-px overflow-hidden rounded-2xl border border-border">
          {site.stack.map((group, index) => (
            <Reveal
              key={group.layer}
              delay={index * 70}
              className="grid grid-cols-1 gap-4 bg-surface p-6 sm:grid-cols-[140px_1fr] sm:items-center sm:gap-8 sm:p-7"
            >
              <div className="font-display text-sm font-semibold tracking-[0.16em] text-cyan">
                {group.layer.toUpperCase()}
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-bg px-3 py-1.5 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
