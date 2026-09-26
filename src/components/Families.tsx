import { EVENT } from "@/lib/event";
import { Reveal } from "@/components/Reveal";
import { Divider, Monogram, StarLattice } from "@/components/Ornaments";

type Person = typeof EVENT.bride | typeof EVENT.groom;

function FamilyCard({
  person,
  delay,
  align,
}: {
  person: Person;
  delay: number;
  align: "left" | "right";
}) {
  const address = [person.house, person.street, person.locality].filter(
    (line) => line && line.length > 0,
  );

  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={`ornate group h-full px-8 py-12 text-center transition-transform duration-700 hover:-translate-y-1.5 sm:px-10 ${
          align === "right" ? "sm:text-right" : "sm:text-left"
        }`}
      >
        <div
          className={`flex ${align === "right" ? "sm:justify-end" : "sm:justify-start"} justify-center`}
        >
          <Monogram
            letter={person.name.charAt(0)}
            className="h-24 w-24 text-gold"
          />
        </div>

        <p className="eyebrow mt-8 text-[0.6rem]">{person.label}</p>

        <h3 className="foil mt-4 font-display text-5xl leading-none sm:text-6xl">
          {person.name}
        </h3>

        <p className="mt-6 text-sm leading-relaxed text-sage">
          {person.lineageWords}{" "}
          <span className="text-parchment">{person.father}</span>
          {" & "}
          <span className="text-parchment">{person.mother}</span>
        </p>

        <div className="rule-gold my-7" />

        <address className="not-italic text-[0.72rem] uppercase leading-[2] tracking-[0.22em] text-sage-dim">
          {address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      </article>
    </Reveal>
  );
}

/** Both families, bride and groom, in facing panels. */
export function Families() {
  return (
    <section id="families" className="relative py-24 sm:py-32">
      <StarLattice className="absolute inset-0 text-gold/10 opacity-70" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <span className="eyebrow">Two homes, one nikah</span>
          <h2 className="mt-5 font-display text-4xl text-parchment sm:text-5xl">
            The Families
          </h2>
          <Divider className="mx-auto mt-8 max-w-md" />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          <FamilyCard person={EVENT.bride} delay={0} align="left" />
          <FamilyCard person={EVENT.groom} delay={140} align="right" />
        </div>

        <Reveal delay={220} className="mt-10 text-center">
          <p className="font-display text-2xl italic text-gold-bright">
            Barakallahu feekum — your presence is our greatest gift.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
