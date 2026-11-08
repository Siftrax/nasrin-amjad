import { EVENT } from "@/lib/event";
import { Reveal } from "@/components/Reveal";
import { Divider, Sprig } from "@/components/Ornaments";

function Person({
  name,
  parents,
  lineageWords,
  house,
  street,
  locality,
}: {
  name: string;
  parents: string;
  lineageWords: string;
  house: string;
  street: string;
  locality: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="font-display text-[0.6rem] tracking-[0.32em] uppercase text-ink-faint">
        {lineageWords}
      </p>
      <p className="mt-3 font-display text-base tracking-[0.1em] uppercase text-ink sm:text-lg">
        {parents}
      </p>
      <Sprig className="mt-5 h-5 w-12 text-gold" />
      <h3 className="mt-4 font-script capitalize text-6xl leading-[1.3] text-gold-deep sm:text-7xl">
        {name}
      </h3>
      <p className="mt-4 font-body text-base italic leading-relaxed text-ink-soft">
        {[house, street, locality].filter(Boolean).join(", ")}
      </p>
    </div>
  );
}

/** The two families, presented in the formal invitation wording. */
export function Families() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="eyebrow">With the blessings of our families</p>
          <Divider className="mt-6" />
        </Reveal>

        <div className="mt-14 grid gap-14 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-8">
          <Reveal>
            <Person {...EVENT.bride} />
          </Reveal>

          <Reveal delay={120} className="flex justify-center">
            <div className="flex flex-col items-center gap-3">
              <span className="hidden h-16 w-px bg-gold-line sm:block" />
              <span className="font-body text-3xl italic text-gold-deep">
                with
              </span>
              <span className="hidden h-16 w-px bg-gold-line sm:block" />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <Person {...EVENT.groom} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
