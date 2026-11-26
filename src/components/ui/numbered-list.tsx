export function NumberedList({
  points,
}: {
  points: { title: string; text: string }[];
}) {
  return (
    <ol className="border-t border-line">
      {points.map((point, index) => (
        <li
          key={point.title}
          className="grid grid-cols-[2.5rem_1fr] border-b border-line py-[22px] md:grid-cols-[3rem_1fr] md:py-7"
        >
          <span aria-hidden className="pt-1.5 font-mono text-[13px] text-sand">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-[22px] leading-[normal] tracking-[-0.015em] text-heading">
              {point.title}
            </h3>
            <p className="mt-2 leading-[1.65] text-muted">{point.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
