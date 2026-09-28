import { EVENT } from "@/lib/event";
import { Reveal } from "@/components/Reveal";
import { Divider, Star8 } from "@/components/Ornaments";

/** Order of the day. */
export function Timeline() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-lg">
        <Reveal className="text-center">
          <p className="eyebrow">Wedding Timeline</p>
          <Divider className="mt-6" />
        </Reveal>

        <ol className="relative mt-14 space-y-10 pl-10">
          <span
            className="absolute bottom-2 left-[9px] top-2 w-px bg-gold-line"
            aria-hidden="true"
          />
          {EVENT.timeline.map((item, i) => (
            <Reveal key={item.time} delay={i * 90}>
              <li className="relative">
                <Star8
                  className="absolute -left-10 top-1 h-[19px] w-[19px] bg-background text-gold"
                  aria-hidden="true"
                />
                <p className="font-display text-sm tracking-[0.24em] uppercase text-gold-deep">
                  {item.time}
                </p>
                <p className="mt-2 font-body text-xl italic text-ink">
                  {item.label}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
