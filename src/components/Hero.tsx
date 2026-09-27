import heroImg from "@/assets/hero-arch.jpg";
import { EVENT } from "@/lib/event";
import {
  ArchFrame,
  Particles,
  Star8,
  StarLattice,
  Lantern,
} from "@/components/Ornaments";

/** Opening screen: the arch, the names, the date. */
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        width={1024}
        height={1536}
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night-deep/85 via-night-deep/55 to-night-deep" />
      <div className="absolute inset-0" style={{ background: "var(--vignette)" }} />
      <StarLattice className="absolute inset-0 text-gold/20 opacity-50" />
      <Particles count={26} />

      <Lantern className="absolute left-6 top-24 h-24 w-14 animate-bob text-gold/40 sm:left-14" />
      <Lantern className="absolute right-6 top-40 hidden h-28 w-16 animate-bob text-gold/30 sm:block" />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 py-20">
        <div className="opener relative">
          <ArchFrame className="absolute inset-0 h-full w-full text-gold/55" />
          <div className="relative px-6 py-16 text-center sm:px-14 sm:py-20">
            <p
              className="arabic animate-rise text-xl leading-loose sm:text-2xl"
              style={{ animationDelay: "0.15s" }}
            >
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ
            </p>

            <p
              className="eyebrow animate-rise mt-8 text-[0.6rem] sm:text-[0.68rem]"
              style={{ animationDelay: "0.4s" }}
            >
              With the mercy of Allah and the duas of our families
            </p>

            <h1 className="mt-6">
              <span
                className="foil animate-rise block font-display text-[3.4rem] leading-[0.95] sm:text-8xl"
                style={{ animationDelay: "0.6s" }}
              >
                {EVENT.bride.name}
              </span>
              <span
                className="animate-rise my-3 flex items-center justify-center gap-4"
                style={{ animationDelay: "0.8s" }}
              >
                <span className="rule-gold w-12" />
                <Star8 size={14} className="animate-twinkle text-gold" />
                <span className="rule-gold w-12" />
              </span>
              <span
                className="foil animate-rise block font-display text-[3.4rem] leading-[0.95] sm:text-8xl"
                style={{ animationDelay: "1s" }}
              >
                {EVENT.groom.name}
              </span>
            </h1>

            <div
              className="animate-rise mt-10 space-y-2"
              style={{ animationDelay: "1.2s" }}
            >
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-parchment/80 sm:text-xs">
                {EVENT.dateLong}
              </p>
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-gold sm:text-xs">
                {EVENT.timeShort} in the morning
              </p>
              <p className="pt-3 font-display text-xl text-sage sm:text-2xl">
                {EVENT.venueName}
              </p>
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-sage-dim">
                {EVENT.bride.locality}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center">
        <span className="eyebrow text-[0.62rem] text-gold-bright">
          Kindly scroll
        </span>
        <span className="mx-auto mt-3 block h-12 w-px overflow-hidden bg-gold/20">
          <span className="block h-4 w-px animate-bob bg-gold" />
        </span>
      </div>
    </section>
  );
}
