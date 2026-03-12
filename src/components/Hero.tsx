import { site } from "@/content/site";
import HeroBackdrop from "./HeroBackdrop";
import Portrait from "./Portrait";
import Avatar from "./Avatar";

export default function Hero() {
  const { hero } = site;

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      <HeroBackdrop />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-24 sm:pt-32 sm:pb-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <div className="hero-line mb-6 lg:hidden [animation-delay:60ms]">
            <Avatar />
          </div>

          <p className="hero-line font-display text-sm font-semibold tracking-[0.28em] text-cyan [animation-delay:120ms]">
            {hero.eyebrow.toUpperCase()}
          </p>

          <h1 className="hero-line mt-5 font-display text-5xl font-bold leading-[1.03] tracking-tight text-text sm:text-6xl xl:text-7xl [animation-delay:220ms]">
            {hero.title}
          </h1>

          <p className="hero-line mt-4 font-display text-xl font-semibold tracking-tight text-gradient sm:text-2xl [animation-delay:320ms]">
            {site.headline}
          </p>

          <p className="hero-line mt-6 max-w-xl text-lg leading-relaxed text-muted [animation-delay:440ms]">
            {hero.tagline}
          </p>

          <div className="hero-line mt-9 flex flex-wrap gap-4 [animation-delay:560ms]">
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-pink px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_32px_-6px_var(--color-pink)] hover:brightness-110"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-cyan hover:text-cyan"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <dl className="hero-line mt-12 flex flex-wrap gap-x-10 gap-y-4 [animation-delay:680ms]">
            {site.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-text">
                  {stat.value}
                </dt>
                <dd className="mt-1 max-w-[10rem] text-xs leading-snug text-faint">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hidden lg:block">
          <Portrait />
        </div>
      </div>
    </section>
  );
}
