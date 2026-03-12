import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="05" title="Let's build something" />

      <Reveal className="rounded-3xl border border-border bg-surface p-8 md:p-12">
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          {site.availability}. Currently taking on freelance projects — send a
          short note about what you need built and I&apos;ll get back to you.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-pink px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_32px_-6px_var(--color-pink)] hover:brightness-110"
          >
            {site.email}
          </a>
          <a
            href={site.links.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-cyan hover:text-cyan"
          >
            Upwork
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-cyan hover:text-cyan"
          >
            LinkedIn
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-cyan hover:text-cyan"
          >
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
