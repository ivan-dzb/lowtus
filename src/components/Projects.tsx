import { site } from "@/content/site";
import Section from "./Section";
import Glitch from "./Glitch";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <Section id="work" index="04" kanji="作品" label="selected work">
      <h2 className="font-[family-name:var(--display)] text-[clamp(2.2rem,7vw,4.6rem)] font-black uppercase leading-[0.92] [text-wrap:balance]">
        <Glitch text="The work" />
      </h2>
      <p className="serif mt-5 max-w-[44ch] text-[clamp(1.05rem,1.6vw,1.35rem)] text-[#4a4842]">
        Case studies in progress. Client work is under NDA — these are builds I
        can show end to end.
      </p>

      <div className="mt-10 grid gap-[3px] bg-[var(--sumi)] p-[3px] md:grid-cols-3">
        {site.projects.map((project) => {
          const Card = project.href ? "a" : "div";
          return (
            <Reveal key={project.title}>
              <Card
                {...(project.href ? { href: project.href } : {})}
                className="flex h-full flex-col bg-[var(--paper)] p-6 transition-colors hover:bg-[var(--paper-2)]"
              >
                <span className="mono self-start border border-[color:var(--sumi)] px-2 py-1 text-[0.58rem] tracking-[0.12em]">
                  {project.status}
                </span>
                <h3 className="mt-6 font-[family-name:var(--display)] text-[1.2rem] font-bold">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-[0.88rem] text-[#4a4842]">
                  {project.body}
                </p>
                <ul className="mono mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[0.58rem] tracking-[0.1em] text-[var(--stone)]">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
