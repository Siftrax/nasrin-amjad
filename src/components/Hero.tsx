import { EVENT } from "@/lib/event";
import { ArchFrame, Monogram, Particles, Sprig } from "@/components/Ornaments";

/** Opening card: monogram, the two names, the essentials. */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-24">
      <Particles />
      <ArchFrame className="pointer-events-none absolute left-1/2 top-10 h-[86%] w-[min(92vw,620px)] -translate-x-1/2 text-gold opacity-40" />

      <div className="relative z-10 flex w-full min-w-0 flex-col items-center text-center animate-rise">
        <Monogram className="h-24 w-24 text-gold" />

        <p className="mt-8 arabic text-xl sm:text-2xl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        <p className="eyebrow mt-8">You are invited to the</p>
        <p className="eyebrow mt-1">Nikah ceremony of</p>

        <h1 className="mt-8 w-full min-w-0 px-3 font-script text-[3.25rem] leading-[1.25] text-ink min-[375px]:text-6xl sm:px-8 sm:text-8xl">
          <span className="foil">{EVENT.bride.name}</span>
          <span className="mx-3 text-gold-deep">&amp;</span>
          <span className="foil">{EVENT.groom.name}</span>
        </h1>

        <div className="mt-8 grid w-full max-w-sm grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 px-2 text-gold sm:gap-4 sm:px-0">
          <Sprig className="h-6 w-full min-w-0" />
          <p className="whitespace-nowrap font-display text-[0.65rem] tracking-[0.28em] uppercase text-ink-soft sm:text-xs sm:tracking-[0.34em]">
            {EVENT.dateShort}
          </p>
          <Sprig className="h-6 w-full min-w-0" flip />
        </div>

        <p className="mt-6 max-w-sm px-3 font-body text-lg italic leading-relaxed text-ink-soft sm:px-0">
          Join us for a morning of love, laughter and duas as we begin our
          forever.
        </p>
      </div>

      <a
        href="#date"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="eyebrow">Scroll down</span>
        <span
          className="h-2.5 w-2.5 rotate-45 border-b border-r border-gold animate-bob"
          aria-hidden="true"
        />
      </a>
    </section>
  );
}
