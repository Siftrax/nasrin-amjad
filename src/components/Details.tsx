import { useState } from "react";

import { EVENT, downloadCalendarFile, mapsUrl, shareInvitation } from "@/lib/event";
import { Reveal } from "@/components/Reveal";
import { Divider, Star8 } from "@/components/Ornaments";

/** Date, time, venue and the practical actions. */
export function Details() {
  const [note, setNote] = useState<string | null>(null);

  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow">Ceremony &amp; Venue</p>
          <Divider className="mt-6" />
        </Reveal>

        <Reveal delay={100}>
          <div className="card-paper mt-12 px-6 py-12 sm:px-12">
            <Star8 className="mx-auto h-5 w-5 text-gold" />

            <p className="mt-6 font-display text-lg tracking-[0.2em] uppercase text-ink">
              {EVENT.dateLong}
            </p>
            <p className="mt-3 font-body text-2xl italic text-gold-deep">
              {EVENT.timeLong}
            </p>

            <span className="rule-gold mx-auto mt-8 block w-40" />

            <p className="mt-8 font-display text-2xl text-ink sm:text-3xl">
              {EVENT.venueName}
            </p>
            <p className="mt-2 font-body text-lg italic text-ink-soft">
              {EVENT.venueRegion}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={mapsUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
              >
                Get directions
              </a>
              <button
                type="button"
                onClick={() => downloadCalendarFile()}
                className="btn-ghost"
              >
                Add to calendar
              </button>
              <button
                type="button"
                onClick={async () => {
                  const r = await shareInvitation();
                  setNote(
                    r === "copied"
                      ? "Link copied."
                      : r === "failed"
                        ? "Couldn't share — please copy the address bar."
                        : null,
                  );
                }}
                className="btn-ghost"
              >
                Share
              </button>
            </div>

            {note ? (
              <p className="mt-5 font-body text-base italic text-ink-soft">
                {note}
              </p>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
