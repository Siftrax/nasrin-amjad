import { Reveal } from "@/components/Reveal";
import { Lantern, StarLattice } from "@/components/Ornaments";

/** The prophetic supplication for those entering marriage. */
export function Dua() {
  return (
    <section
      id="dua"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <StarLattice className="absolute inset-0 text-gold/10 opacity-70" />
      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 halo animate-glow" />
      <Lantern className="absolute left-8 top-16 hidden h-24 w-14 animate-bob text-gold/30 lg:block" />
      <Lantern className="absolute right-10 bottom-16 hidden h-20 w-12 animate-bob text-gold/25 lg:block" />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <span className="eyebrow">A prayer for the couple</span>
          <p className="arabic mt-10 text-2xl sm:text-3xl">
            بِارَكِ اللّٰهُ لَكُمَا وَبَارَكَ عَلَيْكَمَا وَجَمَعَ بَيْنَكُمَا فِي
            خَيْرٍ
          </p>
          <div className="rule-gold mx-auto mt-10 max-w-xs" />
          <p className="mt-10 font-display text-2xl italic leading-relaxed text-parchment/90 sm:text-3xl">
            “May Allah bless you both, and shower His blessings upon you both,
            and join you both in goodness.”
          </p>
          <p className="eyebrow mt-6 text-[0.58rem]">
            Supplication of the Prophet ﷺ · Abu Dawud · At-Tirmidhi
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-14">
          <p className="text-sm leading-relaxed text-sage">
            We have no gift greater than your duas. Please remember Nasrin and
            Amjad in your prayers, that Allah grants their home
            <em className="text-gold-bright"> sakinah</em>,
            <em className="text-gold-bright"> mawaddah</em> and
            <em className="text-gold-bright"> rahmah</em>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
