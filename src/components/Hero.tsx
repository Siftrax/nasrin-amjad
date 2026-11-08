import { EVENT } from "@/lib/event";
import { ArchFrame, Monogram, Particles, Sprig } from "@/components/Ornaments";
import heroVideo from "@/assets/nasrin-amjad-hero.mp4.asset.json";

/** Opening card: monogram, the two names, the essentials. */
export function Hero() {
  return (
    <section className="hero-video-section relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-24">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={heroVideo.url} type="video/mp4" />
      </video>
      <div className="hero-video-scrim absolute inset-0" aria-hidden="true" />
      <Particles />
      <ArchFrame className="pointer-events-none absolute left-1/2 top-10 h-[86%] w-[min(92vw,620px)] -translate-x-1/2 text-gold opacity-40" />

      <div className="relative z-10 flex w-full min-w-0 flex-col items-center text-center animate-rise">
        <Monogram className="h-24 w-24 text-gold" />

        <p className="mt-8 arabic text-xl sm:text-2xl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        <p className="eyebrow mt-8">You are invited to the</p>
        <p className="eyebrow mt-1">Nikah ceremony of</p>

        <h1 className="mt-8 flex w-full min-w-0 flex-col items-center gap-1 px-3 font-script capitalize text-[3.75rem] leading-[1.25] text-ink min-[375px]:text-7xl sm:px-8 sm:text-9xl">
          <span className="hero-name inline-block px-[0.25em] py-[0.1em]">{EVENT.bride.name}</span>
          <span className="hero-ampersand block text-gold-bright">&amp;</span>
          <span className="hero-name inline-block px-[0.25em] py-[0.1em]">{EVENT.groom.name}</span>
        </h1>

        <div className="mt-8 flex w-full max-w-sm items-center justify-center gap-3 text-gold sm:gap-4">
          <Sprig className="h-6 w-20 min-w-0" />
          <Sprig className="h-6 w-20 min-w-0" flip />
        </div>

        <p className="hero-video-copy mt-6 max-w-sm px-8 font-body text-lg italic leading-relaxed sm:px-0">
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
