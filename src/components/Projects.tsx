import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="work" className="border-y border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          index="04"
          title="Selected work"
          kicker="Case studies in progress. Client work under NDA — these are builds I can show end to end."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {site.projects.map((project, index) => {
            const Card = project.href ? "a" : "div";
            return (
              <Reveal key={project.title} delay={index * 80}>
                <Card
                  {...(project.href ? { href: project.href } : {})}
                  className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-cyan/50"
                >
                  <span className="self-start rounded-full border border-border px-2.5 py-1 font-display text-[11px] font-semibold tracking-[0.12em] text-faint">
                    {project.status.toUpperCase()}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-text">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.body}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-bg px-2.5 py-1 text-xs text-faint"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
