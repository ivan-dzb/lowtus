import { site } from "@/content/site";
import Section from "./Section";
import Glitch from "./Glitch";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <Section id="services" index="01" kanji="仕事" label="what I do" dark>
      <h2 className="font-[family-name:var(--display)] text-[clamp(2.2rem,7vw,4.6rem)] font-black uppercase leading-[0.92] [text-wrap:balance]">
        <Glitch text="Built to ship" />
      </h2>
      <p className="serif mt-5 max-w-[42ch] text-[clamp(1.05rem,1.6vw,1.35rem)] text-[#cfccc4]">
        Frontend architecture that scales, features shipped end to end, and the
        APIs behind them.
      </p>

      <div className="mt-10 grid gap-[3px] bg-[var(--rule)] p-[3px] sm:grid-cols-2">
        {site.services.map((service, index) => (
          <Reveal
            key={service.title}
            className="flex flex-col justify-between bg-[var(--sumi-2)] p-6"
          >
            <span className="mono text-[0.6rem] tracking-[0.16em] text-[var(--stone)]">
              P.{String(index + 1).padStart(2, "0")}
            </span>
            <div className="mt-8">
              <h3 className="font-[family-name:var(--display)] text-[1.35rem] font-bold">
                {service.title}
              </h3>
              <p className="mt-2 text-[0.9rem] text-[#b7b4ac]">{service.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
