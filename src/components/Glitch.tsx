export default function Glitch({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={`glitch ${className}`} data-text={text}>
      {text}
    </span>
  );
}
