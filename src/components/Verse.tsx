import { EVENT } from "@/lib/event";
import { Reveal } from "@/components/Reveal";
import { Sprig } from "@/components/Ornaments";

/** The Qur'anic verse on pairs. */
export function Verse() {
  return (
    <section className="bg-cream px-5 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="flex items-center justify-center gap-5 text-gold">
          <Sprig className="h-7 w-20" />
          <Sprig className="h-7 w-20" flip />
        </div>

        <p className="arabic mt-8 text-3xl sm:text-4xl">
          {EVENT.verse.arabic}
        </p>

        <p className="mt-8 font-body text-2xl italic leading-relaxed text-ink sm:text-3xl">
          {EVENT.verse.english}
        </p>

        <p className="mt-5 font-display text-[0.65rem] tracking-[0.32em] uppercase text-ink-faint">
          {EVENT.verse.reference}
        </p>
      </Reveal>
    </section>
  );
}
