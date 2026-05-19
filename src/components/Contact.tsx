import { site } from "@/content/site";
import Section from "./Section";
import Glitch from "./Glitch";
import Lotus from "./Lotus";

const socials = [
  { label: "Upwork", href: site.links.upwork },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      index="05"
      kanji="連絡"
      label="get in touch"
      dark
      decoration={
        <Lotus className="pointer-events-none absolute -bottom-[8%] -right-[4%] h-[clamp(260px,42vw,560px)] w-[clamp(260px,42vw,560px)] text-[var(--pink)] opacity-[0.09]" />
      }
    >
      <h2 className="font-[family-name:var(--display)] text-[clamp(2.2rem,7vw,4.6rem)] font-black uppercase leading-[0.92] [text-wrap:balance]">
        <Glitch text="Let's build" />
      </h2>
      <p className="mt-5 max-w-[46ch] text-[clamp(1rem,1.4vw,1.15rem)] text-[#cfccc4]">
        {site.availability}. Send a short note about what you need built and I&apos;ll
        get back to you.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <a href={`mailto:${site.email}`} className="btn btn-solid">
          {site.email}
        </a>
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            {social.label}
          </a>
        ))}
      </div>
    </Section>
  );
}
