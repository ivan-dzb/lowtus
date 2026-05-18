export default function SectionLabel({
  index,
  kanji,
  label,
}: {
  index: string;
  kanji: string;
  label: string;
}) {
  return (
    <span className="vlabel">
      <b>{index}</b> — {kanji} / {label}
    </span>
  );
}
