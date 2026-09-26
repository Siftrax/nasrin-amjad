import medallionImg from "@/assets/medallion.jpg";
import { Reveal } from "@/components/Reveal";
import { StarLattice } from "@/components/Ornaments";

/** Bismillah verse from the Qur'an — Surah Ar-Rum 30:21. */
export function Verse() {
  return (
    <section
      id="verse"
      className="relative overflow-hidden border-b border-gold/10 py-24 sm:py-32"
    >
      <StarLattice className="absolute inset-0 text-gold/15 opacity-60" />
      <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 halo animate-glow" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <Reveal className="mx-auto w-full max-w-xs sm:max-w-sm">
          <div className="relative rounded-t-[999px] border border-gold/30 p-2 shadow-vault">
            <img
              src={medallionImg}
              alt="Gold arabesque medallion"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-auto w-full rounded-t-[999px] object-cover"
            />
            <span className="absolute inset-0 rounded-t-[999px] ring-1 ring-inset ring-gold/20" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="arabic text-2xl sm:text-[1.9rem]">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
            لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ
            إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
          </p>
          <div className="rule-gold mt-8" />
          <p className="mt-8 font-display text-xl italic leading-relaxed text-parchment/90 sm:text-2xl">
            “And among His signs is that He created for you mates from among
            yourselves, that you may find tranquillity in them; and He placed
            between you affection and mercy. Indeed in that are signs for a
            people who reflect.”
          </p>
          <p className="eyebrow mt-6 text-[0.6rem]">
            Surah Ar-Rum · 30 : 21
          </p>
        </Reveal>
      </div>
    </section>
  );
}
