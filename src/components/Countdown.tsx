import { useEffect, useState } from "react";

import { EVENT } from "@/lib/event";
import { Reveal } from "@/components/Reveal";
import { Divider } from "@/components/Ornaments";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function remaining(): Parts {
  const diff = new Date(EVENT.startISO).getTime() - Date.now();
  const clamped = Math.max(0, diff);
  return {
    days: Math.floor(clamped / 86400000),
    hours: Math.floor((clamped / 3600000) % 24),
    minutes: Math.floor((clamped / 60000) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Live countdown to the ceremony. */
export function Countdown() {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(remaining());
    const id = window.setInterval(() => setParts(remaining()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const cells: Array<[string, string]> = [
    ["Days", parts ? pad(parts.days) : "—"],
    ["Hours", parts ? pad(parts.hours) : "—"],
    ["Minutes", parts ? pad(parts.minutes) : "—"],
    ["Seconds", parts ? pad(parts.seconds) : "—"],
  ];

  return (
    <section className="bg-cream px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow">The Celebration Begins</p>
          <Divider className="mt-6" />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-4 gap-2 sm:gap-4">
            {cells.map(([label, value]) => (
              <div key={label} className="plate px-1 py-6 sm:px-3 sm:py-8">
                <p className="font-display text-3xl text-gold-deep sm:text-5xl">
                  {value}
                </p>
                <p className="mt-3 font-display text-[0.55rem] tracking-[0.24em] uppercase text-ink-faint sm:text-[0.62rem]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
