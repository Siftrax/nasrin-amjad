import { useEffect, useState } from "react";

import { Monogram } from "@/components/Ornaments";

/**
 * Full-screen "tap to open" envelope. Locks scrolling until the guest
 * opens it, then lifts away to reveal the invitation.
 */
export function Envelope({
  onOpen,
  onTap,
}: {
  onOpen?: () => void;
  onTap?: () => void;
}) {
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);

  const start = () => {
    if (opening) return;
    onTap?.();
    setOpening(true);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!opening) return;
    const t = window.setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
      onOpen?.();
    }, 1900);
    return () => window.clearTimeout(t);
  }, [opening, onOpen]);

  if (gone) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Open the invitation"
      onClick={start}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") start();
      }}
      className="envelope-shell fixed inset-0 z-[90] flex cursor-pointer select-none flex-col items-center justify-center px-6"
      style={{
        opacity: opening ? 0 : 1,
        transition: "opacity 1.1s ease 0.8s",
      }}
    >
      <div
        className="relative w-full max-w-[420px]"
        style={{
          perspective: "1200px",
          transform: opening ? "scale(1.06)" : "scale(1)",
          transition: "transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Envelope body */}
        <div
          className="relative aspect-[3/2] w-full border border-gold-line bg-cream"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          {/* Letter sliding out */}
          <div
            className="absolute inset-x-6 bottom-6 top-6 border border-gold-line bg-ivory"
            style={{
              transform: opening ? "translateY(-46%)" : "translateY(0)",
              transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
            }}
          />
          {/* Lower flaps */}
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(to top right, var(--linen) 49.6%, transparent 50%), linear-gradient(to top left, var(--linen) 49.6%, transparent 50%)",
            }}
          />
          <div
            className="absolute inset-0 border-t border-gold-line"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(to bottom, var(--sand) 49.6%, transparent 50%)",
              transformOrigin: "top center",
              transform: opening ? "rotateX(180deg)" : "rotateX(0deg)",
              transition: "transform 1.2s cubic-bezier(0.55, 0, 0.45, 1)",
              backfaceVisibility: "hidden",
            }}
          />
          {/* Wax seal */}
          <div
            className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold text-gold-deep"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, var(--gold-bright), var(--gold-deep))",
              boxShadow: "var(--shadow-gold)",
              opacity: opening ? 0 : 1,
              transform: opening
                ? "translate(-50%, -50%) scale(1.5) rotate(18deg)"
                : "translate(-50%, -50%) scale(1)",
              transition: "opacity 0.6s ease, transform 0.8s ease",
            }}
          >
            <Monogram className="h-14 w-14 text-ivory" />
          </div>
        </div>
      </div>

      <div
        className="mt-12 flex flex-col items-center gap-2"
        style={{ opacity: opening ? 0 : 1, transition: "opacity 0.4s ease" }}
      >
        <span className="eyebrow animate-pulse-label">Tap to open</span>
        <span
          className="h-2.5 w-2.5 rotate-45 border-b border-r border-gold animate-bob"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
