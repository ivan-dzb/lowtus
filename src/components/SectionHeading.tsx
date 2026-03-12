import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 font-display text-sm font-semibold tracking-[0.2em] text-cyan">
        <span>{index}</span>
        <span className="rule-sunset" />
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-text md:text-4xl">
        {title}
      </h2>
      {kicker && <p className="mt-3 max-w-xl text-muted">{kicker}</p>}
    </Reveal>
  );
}
