import {
  AndroidArt,
  DesktopArt,
  MobileWebArt,
} from "@/components/illustrations/ez-prep";
import { Accent } from "@/components/ui/accent";
import { SectionIntro, sectionClass } from "@/components/ui/section-intro";

const devices = [
  {
    name: "Desktop",
    Art: DesktopArt,
    width: "max-w-[340px]",
    caption: "Room to breathe on a big screen.",
  },
  {
    name: "Mobile browser",
    Art: MobileWebArt,
    width: "max-w-[200px]",
    caption: "Laid out for thumbs, not shrunk from desktop.",
  },
  {
    name: "Android app",
    Art: AndroidArt,
    width: "max-w-[200px]",
    caption: "A native feel with the very same flow.",
  },
];

export function Devices() {
  return (
    <section
      id="devices"
      aria-labelledby="devices-title"
      className={sectionClass}
    >
      <SectionIntro
        id="devices-title"
        eyebrow="One experience"
        title={
          <>
            The same Ez Prep on <Accent>every</Accent> screen.
          </>
        }
        lead="Most platforms treat mobile as an afterthought. Ez Prep looks and behaves the same on desktop, mobile and Android, so you can switch devices without relearning anything."
      />
      <ul className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
        {devices.map(({ name, Art, width, caption }) => (
          <li
            key={name}
            className="flex flex-col items-center gap-[18px] rounded-3xl border border-line bg-surface p-[26px] text-center duration-250 hover:border-sand/45 motion-safe:transition motion-safe:hover:-translate-y-[3px] md:p-8"
          >
            <h3 className="font-mono text-xs font-medium tracking-[0.1em] text-sand uppercase">
              {name}
            </h3>
            <div className={`flex w-full flex-1 items-center ${width}`}>
              <Art />
            </div>
            <p className="text-[15px] leading-[1.65] text-muted">{caption}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
