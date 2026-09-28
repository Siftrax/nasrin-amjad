import { useState } from "react";

import { EVENT } from "@/lib/event";
import { Reveal } from "@/components/Reveal";
import { Divider, Star8 } from "@/components/Ornaments";

/**
 * Attendance card. Replies are confirmed on screen only — once the family
 * shares a phone number or email we can deliver them there too.
 */
export function Rsvp() {
  const [name, setName] = useState("");
  const [coming, setComing] = useState<"yes" | "no" | null>(null);
  const [guests, setGuests] = useState("1");
  const [sent, setSent] = useState(false);

  const field =
    "w-full border border-gold-line bg-ivory px-4 py-3 font-body text-lg text-ink outline-none transition focus:border-gold";

  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-lg text-center">
        <Reveal>
          <p className="eyebrow">RSVP</p>
          <Divider className="mt-6" />
          <p className="mt-8 font-body text-xl italic leading-relaxed text-ink-soft">
            To help us prepare for a joyful celebration, kindly confirm your
            attendance by {EVENT.rsvpBy}.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="card-paper mt-10 px-6 py-10 text-left sm:px-10">
            {sent ? (
              <div className="py-8 text-center">
                <Star8 className="mx-auto h-6 w-6 text-gold" />
                <p className="mt-5 font-display text-xl text-ink">
                  Thank you, {name || "dear guest"}.
                </p>
                <p className="mt-3 font-body text-lg italic text-ink-soft">
                  {coming === "yes"
                    ? "We look forward to seeing you, insha'Allah."
                    : "You will be missed — thank you for your duas."}
                </p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label className="eyebrow block">Your full name</label>
                  <input
                    className={`${field} mt-3`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <span className="eyebrow block">Will you come?</span>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {(
                      [
                        ["yes", "Yes, I will"],
                        ["no", "Unfortunately, I can't"],
                      ] as const
                    ).map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setComing(value)}
                        className={
                          coming === value ? "btn-gold" : "btn-ghost"
                        }
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {coming === "yes" ? (
                  <div>
                    <label className="eyebrow block">
                      Number of guests attending
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      className={`${field} mt-3`}
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    />
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={!coming}
                  className="btn-gold w-full disabled:opacity-50"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
