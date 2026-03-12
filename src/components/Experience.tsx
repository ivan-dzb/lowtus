import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        index="03"
        title="Where I've worked"
        kicker="Product teams at companies shipping to millions of users."
      />

      <ol className="relative border-l border-border pl-8">
        {site.experience.map((job, index) => (
          <Reveal
            key={job.company}
            as="li"
            delay={index * 70}
            className="relative pb-10 last:pb-0"
          >
            <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-pink bg-bg" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-lg font-bold text-text">
                {job.company}
              </h3>
              <span className="font-display text-xs font-semibold tracking-[0.14em] text-faint">
                {job.period.toUpperCase()}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-cyan">{job.title}</p>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted">
              {job.blurb}
            </p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
