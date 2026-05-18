const items = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux",
  "Zustand",
  ".NET",
  "Node",
  "5 years in production",
  "Brightcove",
  "Infobip",
  "Tech Mahindra",
];

function Row() {
  return (
    <>
      {items.map((item) => (
        <span key={item}>
          {item} <i>/</i>
        </span>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div
      className="ticker overflow-hidden border-y bg-[var(--paper)]"
      aria-hidden="true"
    >
      <div className="ticker-track py-2.5">
        <Row />
        <Row />
      </div>
    </div>
  );
}
