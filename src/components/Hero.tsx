import { site } from "@/content/site";
import Glitch from "./Glitch";
import Portrait from "./Portrait";

export default function Hero() {
  const { hero } = site;

  return (
    <section
      id="top"
      className="relative mx-auto grid max-w-[1300px] items-center gap-[clamp(1.5rem,4vw,3.5rem)] px-[clamp(1rem,4vw,2.5rem)] pt-[clamp(2rem,6vh,4.5rem)] pb-[clamp(3rem,8vh,6rem)] lg:grid-cols-[minmax(0,1fr)_clamp(280px,34vw,440px)]"
    >
      <span
        className="absolute left-[calc(clamp(1rem,4vw,2.5rem)-1.9rem)] top-1/2 hidden -translate-y-1/2 font-[family-name:var(--display)] text-[0.95rem] font-bold tracking-[0.42em] text-[var(--pink-ink)] [writing-mode:vertical-rl] xl:block"
        aria-hidden="true"
      >
        {site.displayNameKana}
      </span>

      <div>
        <p className="mono mb-6 text-[var(--stone)]">
          {site.role}{" "}
          <b className="font-bold text-[var(--sumi)]">— 東京発信 / signal</b>
        </p>

        <h1 className="slam-target font-[family-name:var(--display)] text-[clamp(3.4rem,11.5vw,9rem)] font-black uppercase leading-[0.88] tracking-[-0.01em] [text-wrap:balance]">
          {hero.title.split(" ").map((word) => (
            <span key={word} className="block">
              <Glitch text={word} />
            </span>
          ))}
        </h1>

        <p className="mono mt-6 text-[clamp(0.8rem,1.7vw,1rem)] tracking-[0.1em] text-[var(--pink-ink)]">
          {site.headline}
        </p>

        <p className="mt-6 max-w-[32ch] text-[clamp(1rem,1.35vw,1.18rem)] text-[#35342f]">
          I build and ship production web apps —{" "}
          <span className="serif">fast</span>, and the way you&apos;d build them
          yourself.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href={hero.primaryCta.href} className="btn btn-solid">
            {hero.primaryCta.label}
          </a>
          <a href="#work" className="btn btn-ghost">
            See the work →
          </a>
        </div>

        <dl className="mt-11 flex flex-wrap gap-8 border-t pt-6">
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-[family-name:var(--display)] text-[1.5rem] font-black">
                {stat.value}
              </dt>
              <dd className="mono mt-1 max-w-[15ch] text-[0.58rem] tracking-[0.1em] text-[var(--stone)]">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="order-first lg:order-none">
        <Portrait />
      </div>
    </section>
  );
}
