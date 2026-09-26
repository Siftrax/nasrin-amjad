import { EVENT } from "@/lib/event";
import { Crescent, MarqueeStrip, Star8 } from "@/components/Ornaments";

/** Closing seal of the invitation. */
export function Footer() {
  return (
    <footer className="relative bg-night-deep">
      <MarqueeStrip />

      <div className="relative overflow-hidden px-5 py-20 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 halo animate-glow" />

        <div className="relative">
          <Crescent className="mx-auto h-9 w-9 animate-twinkle text-gold" />

          <p className="foil mt-8 font-display text-4xl leading-none sm:text-5xl">
            {EVENT.bride.name}
            <span className="mx-3 font-body text-xl text-gold/70">&amp;</span>
            {EVENT.groom.name}
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 text-gold/60">
            <span className="rule-gold w-16" />
            <Star8 size={11} className="animate-twinkle" />
            <span className="rule-gold w-16" />
          </div>

          <p className="mt-8 text-[0.7rem] uppercase tracking-[0.3em] text-sage">
            {EVENT.dateLong}
          </p>
          <p className="mt-3 text-[0.7rem] uppercase tracking-[0.3em] text-sage-dim">
            {EVENT.timeShort} · {EVENT.venueLine}
          </p>

          <p className="mx-auto mt-12 max-w-md font-display text-xl italic text-gold-bright/90">
            Jazakumullahu khayran — may Allah reward you for coming.
          </p>

          <p className="mt-10 text-[0.62rem] uppercase tracking-[0.28em] text-sage-dim/70">
            {EVENT.bride.house}, {EVENT.bride.street} ·{" "}
            {EVENT.groom.house}
          </p>
        </div>
      </div>
    </footer>
  );
}
