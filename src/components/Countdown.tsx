import { useEffect, useState } from "react";
import { EVENT } from "@/lib/event";
import { Reveal } from "@/components/Reveal";
import { Star8 } from "@/components/Ornaments";

const TARGET = new Date(EVENT.startISO).getTime();

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function remaining(): Remaining {
  const diff = TARGET - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
    done: false,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

function Plate({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="plate relative grid h-20 w-[4.6rem] place-items-center sm:h-24 sm:w-28 md:h-28 md:w-32">
        <span
          key={value}
          className="foil animate-tick font-display text-4xl leading-none tabular-nums sm:text-5xl md:text-6xl"
        >
          {value}
        </span>
        <span className="absolute inset-x-3 top-1/2 h-px bg-gold/10" />
      </div>
      <span className="eyebrow text-[0.58rem] sm:text-[0.65rem]">{label}</span>
    </div>
  );
}

/** Live countdown to the nikah, ticking every second. */
export function Countdown() {
  const [time, setTime] = useState<Remaining | null>(null);

  useEffect(() => {
    setTime(remaining());
    const id = window.setInterval(() => setTime(remaining()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const t = time ?? { days: 0, hours: 0, minutes: 0, seconds: 0, done: false };
  const ready = time !== null;

  return (
    <Reveal className="mx-auto w-full max-w-5xl px-5 py-20 text-center sm:py-28">
      <span className="eyebrow">Insha Allah</span>
      <h2 className="mt-5 font-display text-4xl text-parchment sm:text-5xl">
        Counting down to the <em className="foil not-italic">nikah</em>
      </h2>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-sage-dim">
        {EVENT.dateLong} · {EVENT.timeShort}
        <br />
        {EVENT.venueLine}
      </p>

      {t.done ? (
        <p className="mt-12 font-display text-3xl text-gold-bright">
          Alhamdulillah — the nikah has taken place.
        </p>
      ) : (
        <div className="mt-12 flex flex-wrap items-start justify-center gap-4 sm:gap-6">
          <Plate value={ready ? String(t.days) : "—"} label="Days" />
          <Plate value={ready ? pad(t.hours) : "—"} label="Hours" />
          <Plate value={ready ? pad(t.minutes) : "—"} label="Minutes" />
          <Plate value={ready ? pad(t.seconds) : "—"} label="Seconds" />
        </div>
      )}

      <div className="mt-12 flex items-center justify-center gap-3 text-gold/60">
        <span className="rule-gold w-16" />
        <Star8 size={12} className="animate-twinkle" />
        <span className="rule-gold w-16" />
      </div>
    </Reveal>
  );
}
