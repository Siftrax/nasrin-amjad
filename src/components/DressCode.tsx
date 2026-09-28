import { EVENT } from "@/lib/event";
import { Reveal } from "@/components/Reveal";
import { Divider } from "@/components/Ornaments";

/** Suggested palette for guests. */
export function DressCode() {
  return (
    <section className="bg-cream px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-xl text-center">
        <Reveal>
          <p className="eyebrow">Dress Code</p>
          <Divider className="mt-6" />
          <p className="mt-8 font-display text-xl tracking-[0.18em] uppercase text-ink">
            {EVENT.dressCode.title}
          </p>
          <p className="mt-5 font-body text-xl italic leading-relaxed text-ink-soft">
            {EVENT.dressCode.note}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-10 font-display text-[0.6rem] tracking-[0.3em] uppercase text-ink-faint">
            Recommended shades
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {EVENT.dressCode.swatches.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-3">
                <span
                  className={`h-12 w-12 rounded-full border border-gold-line ${s.token}`}
                />
                <span className="font-body text-sm italic text-ink-soft">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-10 font-body text-base italic text-ink-faint">
            {EVENT.dressCode.reserved}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
