import { useEffect, useRef, useState } from "react";

import { EVENT } from "@/lib/event";
import { Divider } from "@/components/Ornaments";

/**
 * Scratch-off foil panel that reveals the wedding date.
 * Guests drag a finger or the cursor across the gold coating.
 */
/** Deterministic confetti pieces — identical on server and client. */
const CONFETTI = Array.from({ length: 36 }, (_, i) => {
  const angle = (i / 36) * Math.PI * 2 + (i % 3) * 0.19;
  const distance = 110 + (i % 5) * 34;
  const palette = [
    "var(--gold)",
    "var(--gold-bright)",
    "var(--gold-deep)",
    "var(--champagne)",
    "var(--rose)",
    "var(--sage)",
  ];
  return {
    cx: `${(Math.cos(angle) * distance).toFixed(2)}px`,
    cy: `${(Math.sin(angle) * distance * 0.82).toFixed(2)}px`,
    cr: `${((i * 47) % 360).toFixed(2)}deg`,
    color: palette[i % palette.length],
    delay: `${((i % 6) * 35).toFixed(0)}ms`,
    round: i % 4 === 0,
  };
});

export function ScratchDate() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const drawing = useRef(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const paint = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);
      const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      grad.addColorStop(0, "#c8a45e");
      grad.addColorStop(0.35, "#efd9a4");
      grad.addColorStop(0.55, "#b98f46");
      grad.addColorStop(0.8, "#e8cf9b");
      grad.addColorStop(1, "#c19a52");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, rect.width, rect.height);
      ctx.font = "13px Cinzel, Georgia, serif";
      ctx.fillStyle = "rgba(90,66,30,0.75)";
      ctx.textAlign = "center";
      ctx.fillText(
        "✦  Scratch to reveal the date  ✦",
        rect.width / 2,
        rect.height / 2 + 4,
      );
    };

    paint();
    window.addEventListener("resize", paint);
    return () => window.removeEventListener("resize", paint);
  }, []);

  const scratchAt = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(clientX - rect.left, clientY - rect.top, 26, 0, Math.PI * 2);
    ctx.fill();
    checkCleared();
  };

  const checkCleared = () => {
    if (revealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width, height } = canvas;
    const data = ctx.getImageData(0, 0, width, height).data;
    let clear = 0;
    for (let i = 3; i < data.length; i += 4 * 40) {
      if (data[i] === 0) clear++;
    }
    const total = data.length / (4 * 40);
    if (clear / total > 0.45) setRevealed(true);
  };

  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-xl text-center">
        <p className="eyebrow">The Date</p>
        <Divider className="mt-6" />

        <div className="relative mx-auto mt-10 w-full max-w-md">
          {revealed ? (
            <div
              className="pointer-events-none absolute inset-0 z-20 overflow-visible"
              aria-hidden="true"
            >
              <span className="burst-ring" />
              {CONFETTI.map((c, i) => (
                <span
                  key={i}
                  className="confetti-bit"
                  style={{
                    background: c.color,
                    borderRadius: c.round ? "9999px" : "2px",
                    animationDelay: c.delay,
                    ["--cx" as string]: c.cx,
                    ["--cy" as string]: c.cy,
                    ["--cr" as string]: c.cr,
                  }}
                />
              ))}
            </div>
          ) : null}

          <div
            ref={wrapRef}
            className="card-paper relative h-56 w-full overflow-hidden"
          >
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center gap-1 ${
              revealed ? "animate-date-pop" : ""
            }`}
          >
            <p className="font-display text-6xl text-gold-deep sm:text-7xl">
              {EVENT.dateDay}
            </p>
            <p className="font-display text-lg tracking-[0.3em] uppercase text-ink">
              {EVENT.dateMonth}
            </p>
            <p className="font-sans text-xs tracking-[0.4em] text-ink-soft">
              {EVENT.dateYear}
            </p>
            <p className="mt-3 font-display text-sm tracking-[0.25em] uppercase text-gold-deep">
              {EVENT.timeShort}
            </p>
          </div>

          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full touch-none"
            style={{
              opacity: revealed ? 0 : 1,
              transition: "opacity 0.8s ease",
              pointerEvents: revealed ? "none" : "auto",
              cursor: "crosshair",
            }}
            onPointerDown={(e) => {
              drawing.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              scratchAt(e.clientX, e.clientY);
            }}
            onPointerMove={(e) => {
              if (drawing.current) scratchAt(e.clientX, e.clientY);
            }}
            onPointerUp={() => {
              drawing.current = false;
            }}
            onPointerLeave={() => {
              drawing.current = false;
            }}
          />
        </div>

        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="mt-6 font-sans text-[0.65rem] tracking-[0.3em] uppercase text-ink-faint underline-offset-4 hover:text-gold-deep hover:underline"
          style={{ visibility: revealed ? "hidden" : "visible" }}
        >
          Reveal it for me
        </button>
      </div>
    </section>
  );
}
