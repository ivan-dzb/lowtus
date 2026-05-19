import type { ReactNode } from "react";
import SectionLabel from "./SectionLabel";

export default function Section({
  id,
  index,
  kanji,
  label,
  dark = false,
  decoration,
  children,
}: {
  id: string;
  index: string;
  kanji: string;
  label: string;
  dark?: boolean;
  decoration?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      data-panel={dark ? "dark" : undefined}
      className="panel relative overflow-clip border-t"
    >
      {decoration}
      <div className="relative mx-auto grid max-w-[1300px] grid-cols-[2rem_1fr] gap-[clamp(1.25rem,4vw,3rem)] px-[clamp(1rem,4vw,2.5rem)] py-[clamp(3rem,9vh,6.5rem)]">
        <SectionLabel index={index} kanji={kanji} label={label} />
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
