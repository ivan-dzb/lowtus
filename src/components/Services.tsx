import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        index="01"
        title="What I build for clients"
        kicker="Scoped work you can hand off and trust to land — from a single feature to a full product."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {site.services.map((service, index) => (
          <Reveal
            key={service.title}
            delay={index * 80}
            className="group rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-pink/50"
          >
            <div className="font-display text-sm font-semibold text-faint transition-colors group-hover:text-pink">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-3 font-display text-xl font-bold text-text">
              {service.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{service.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
