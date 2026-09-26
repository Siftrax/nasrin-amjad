import { useState } from "react";
import {
  EVENT,
  downloadCalendarFile,
  mapsUrl,
  shareInvitation,
} from "@/lib/event";
import { Reveal } from "@/components/Reveal";
import { Divider, StarLattice } from "@/components/Ornaments";

function InfoBlock({
  eyebrow,
  value,
  sub,
}: {
  eyebrow: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="ornate px-6 py-10 text-center transition-transform duration-700 hover:-translate-y-1">
      <p className="eyebrow text-[0.58rem]">{eyebrow}</p>
      <p className="foil mt-5 font-display text-2xl leading-tight sm:text-3xl">
        {value}
      </p>
      {sub ? (
        <p className="mt-4 text-[0.7rem] uppercase tracking-[0.24em] text-sage-dim">
          {sub}
        </p>
      ) : null}
    </div>
  );
}

/** Date, time, venue and the three actions a guest needs. */
export function Details() {
  const [shareState, setShareState] = useState<
    "idle" | "shared" | "copied" | "failed"
  >("idle");

  const onShare = async () => {
    setShareState("idle");
    const result = await shareInvitation();
    setShareState(result);
  };

  return (
    <section
      id="details"
      className="relative overflow-hidden border-y border-gold/10 bg-night py-24 sm:py-32"
    >
      <StarLattice className="absolute inset-0 text-gold/15 opacity-70" />
      <div className="absolute inset-0" style={{ background: "var(--vignette)" }} />

      <div className="relative mx-auto max-w-5xl px-5">
        <Reveal className="text-center">
          <span className="eyebrow">When &amp; where</span>
          <h2 className="mt-5 font-display text-4xl text-parchment sm:text-5xl">
            The Invitation
          </h2>
          <Divider className="mx-auto mt-8 max-w-md" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <Reveal delay={0}>
            <InfoBlock
              eyebrow="The Day"
              value={EVENT.dateLong}
              sub={EVENT.dateShort}
            />
          </Reveal>
          <Reveal delay={120}>
            <InfoBlock
              eyebrow="The Hour"
              value={EVENT.timeShort}
              sub="In the morning"
            />
          </Reveal>
          <Reveal delay={240}>
            <InfoBlock
              eyebrow="The Place"
              value={EVENT.venueName}
              sub={`${EVENT.venueLine}, ${EVENT.venueRegion}`}
            />
          </Reveal>
        </div>

        <Reveal delay={320} className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => downloadCalendarFile()}
              className="btn-gold"
            >
              Add to calendar
            </button>
            <a
              href={mapsUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Get directions
            </a>
            <button
              type="button"
              onClick={onShare}
              className="btn-ghost"
            >
              {shareState === "copied"
                ? "Link copied ✓"
                : shareState === "shared"
                  ? "Thank you ✓"
                  : shareState === "failed"
                    ? "Press & hold to copy"
                    : "Share invitation"}
            </button>
          </div>

          <p className="mx-auto mt-10 max-w-lg text-center text-sm leading-relaxed text-sage-dim">
            Guests are kindly requested to arrive a little before the ceremony
            so that the nikah may begin on time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
