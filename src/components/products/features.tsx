import { Accent } from "@/components/ui/accent";
import { SectionIntro, sectionClass } from "@/components/ui/section-intro";

const features = [
  {
    title: "Curated by experts",
    text: "Content is curated by experts, so you spend your hours on what actually counts instead of wading through everything.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12.5l2.7 2.7L16 9.5" />
      </>
    ),
  },
  {
    title: "Affordable",
    text: "Good preparation should not be a luxury. Ez Prep is priced to stay within reach of every aspirant.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.5 9.2c-.6-.7-1.5-1.1-2.5-1.1-1.5 0-2.6.8-2.6 2s1 1.7 2.6 2 2.6.8 2.6 2-1.1 2-2.6 2c-1 0-1.9-.4-2.5-1.1" />
        <path d="M12 6.5v1.6M12 16v1.5" />
      </>
    ),
  },
  {
    title: "Smooth and fast",
    text: "Screens stay responsive and fluid, because speed was a design goal from the first line of code.",
    icon: (
      <>
        <path d="M13 3L5 13.5h6L10 21l8-10.5h-6Z" />
      </>
    ),
  },
  {
    title: "Modern foundations",
    text: "Built with the latest versions of modern languages and frameworks, and kept up to date, so it stays quick and easy to maintain.",
    icon: (
      <>
        <path d="M8 8l-4 4 4 4" />
        <path d="M16 8l4 4-4 4" />
        <path d="M13.5 6l-3 12" />
      </>
    ),
  },
  {
    title: "Secure by design",
    text: "Accounts and data are protected as a baseline, not as an afterthought.",
    icon: (
      <>
        <path d="M12 3l7 3v5.5c0 4.5-3 7.8-7 9.5-4-1.7-7-5-7-9.5V6Z" />
        <path d="M9 12l2.2 2.2L15 10.5" />
      </>
    ),
  },
  {
    title: "Ready for scale",
    text: "Engineered to stay steady when thousands of aspirants log in at once, such as on exam day.",
    icon: (
      <>
        <path d="M4 18h4v-5H4zM10 18h4V9h-4zM16 18h4V5h-4z" />
      </>
    ),
  },
];

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className={sectionClass}
    >
      <SectionIntro
        id="features-title"
        eyebrow="Why Ez Prep"
        title={
          <>
            Everything a serious aspirant needs. <Accent>Nothing</Accent> they
            do not.
          </>
        }
        lead="Ez Prep does fewer things, and does them properly."
      />
      <ul className="mt-14 grid gap-5 min-[640px]:grid-cols-2 min-[980px]:grid-cols-3">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="flex flex-col gap-3.5 rounded-3xl border border-line bg-surface p-[26px] duration-250 hover:border-sand/45 motion-safe:transition motion-safe:hover:-translate-y-[3px] md:p-8"
          >
            <span className="mb-2 flex size-[52px] items-center justify-center rounded-[14px] bg-surface-2 text-sand">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-[26px]"
              >
                {feature.icon}
              </svg>
            </span>
            <h3 className="text-2xl leading-[normal] tracking-[-0.02em] text-heading">
              {feature.title}
            </h3>
            <p className="leading-[1.65] text-muted">{feature.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
