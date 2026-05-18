import { site } from "@/content/site";
import Section from "./Section";
import Glitch from "./Glitch";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section id="experience" index="03" kanji="経歴" label="track record" dark>
      <h2 className="font-[family-name:var(--display)] text-[clamp(2.2rem,7vw,4.6rem)] font-black uppercase leading-[0.92] [text-wrap:balance]">
        <Glitch text="Where I've shipped" />
      </h2>

      <ol className="mt-10 border-l pl-7">
        {site.experience.map((job) => (
          <Reveal
            key={job.company}
            as="li"
            className="relative pb-9 last:pb-0"
          >
            <span className="absolute -left-[33px] top-2 h-2.5 w-2.5 bg-[var(--pink)]" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-[family-name:var(--display)] text-[1.2rem] font-bold">
                {job.company}
              </h3>
              <span className="mono text-[0.6rem] tracking-[0.14em] text-[var(--stone)]">
                {job.period}
              </span>
            </div>
            <p className="mono mt-1 text-[0.62rem] tracking-[0.1em] text-[var(--pink)]">
              {job.title}
            </p>
            <p className="mt-2 max-w-[62ch] text-[0.92rem] text-[#b7b4ac]">
              {job.blurb}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
