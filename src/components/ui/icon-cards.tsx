import type { ComponentType, SVGProps } from "react";
import { cardClass } from "./card";

/** Up to four raised cards in a row, each led by an icon. */
export function IconCards({
  cards,
  className = "",
}: {
  cards: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
    text: string;
  }[];
  className?: string;
}) {
  return (
    <ul
      className={`grid gap-5 min-[641px]:grid-cols-2 min-[1101px]:grid-cols-4 ${className}`}
    >
      {cards.map(({ icon: Icon, title, text }) => (
        <li key={title} className={`${cardClass} gap-3.5 p-7`}>
          <span className="mb-2 flex size-[52px] items-center justify-center rounded-[14px] bg-surface-2 text-sand">
            <Icon className="size-[26px]" />
          </span>
          <h3 className="text-[22px] leading-[normal] tracking-[-0.02em] text-heading">
            {title}
          </h3>
          <p className="leading-[1.65] text-muted">{text}</p>
        </li>
      ))}
    </ul>
  );
}
