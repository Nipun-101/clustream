export function Tags({
  tags,
  className = "",
}: {
  tags: string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-lg bg-surface-2 px-2.5 py-1.5 font-mono text-[11px] leading-[normal] text-[#c5ccda] uppercase"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
