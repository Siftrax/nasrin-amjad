import { EVENT } from "@/lib/event";
import { Monogram, Star8 } from "@/components/Ornaments";

/** Closing note. */
export function Footer() {
  return (
    <footer className="border-t border-gold-line bg-cream px-5 py-16 text-center">
      <Monogram className="mx-auto h-16 w-16 text-gold" />

      <p className="arabic mt-8 text-xl">بَارَكَ اللَّهُ لَكُمَا</p>
      <p className="mt-4 font-body text-lg italic text-ink-soft">
        May Allah bless you both and unite you in goodness.
      </p>

      <span className="rule-gold mx-auto mt-10 block w-40" />

      <p className="mt-8 font-script text-4xl leading-[1.3] text-ink">
        {EVENT.bride.name} &amp; {EVENT.groom.name}
      </p>

      <Star8 className="mx-auto mt-8 h-4 w-4 text-gold" />
      <p className="mt-6 font-display text-[0.58rem] tracking-[0.3em] uppercase text-ink-faint">
        Hope to see you there
      </p>
    </footer>
  );
}
