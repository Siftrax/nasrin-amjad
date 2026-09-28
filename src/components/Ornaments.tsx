/**
 * Shared decorative line-work. All geometry is fixed (no randomness at
 * render) so the server and client markup match exactly.
 */

const fx = (n: number, places = 3): string => n.toFixed(places);

/** Eight-pointed Islamic star. */
export function Star8({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 1.5 14.4 7 20 4.6 17.6 10.2 23 12l-5.4 1.8L20 19.4 14.4 17 12 22.5 9.6 17 4 19.4l2.4-5.6L1 12l5.4-1.8L4 4.6 9.6 7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Slim divider: rule — star — rule. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="rule-gold w-16 sm:w-28" />
      <Star8 className="h-4 w-4 text-gold" />
      <span className="rule-gold w-16 sm:w-28" />
    </div>
  );
}

/** Intertwined N & A monogram inside a gold ring. */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.55"
      />
      <circle
        cx="60"
        cy="60"
        r="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fontFamily="Cinzel, Georgia, serif"
        fontSize="34"
        fill="currentColor"
        letterSpacing="1"
      >
        N&amp;A
      </text>
    </svg>
  );
}

/** Botanical sprig used to flank headings. */
export function Sprig({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 80 40"
      className={className}
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M2 32C18 32 30 26 40 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M14 30c-1-5 2-9 6-10 1 5-2 9-6 10Zm10-4c0-5 3-8 7-9 0 5-3 8-7 9Zm11-5c1-5 4-7 8-8-1 5-4 8-8 8Z"
        fill="currentColor"
        opacity="0.55"
      />
      <circle cx="42" cy="15" r="2.2" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

/** A pointed arch frame that draws itself in. */
export function ArchFrame({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 460"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M10 450V180C10 96 78 26 160 10c82 16 150 86 150 170v270"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="1400"
        className="animate-draw"
        style={{ ["--dash" as string]: "1400" }}
      />
      <path
        d="M24 450V182C24 104 88 40 160 26c72 14 136 78 136 156v268"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.5"
      />
    </svg>
  );
}

const MOTES = Array.from({ length: 16 }, (_, i) => {
  const s = Math.sin(i * 12.9898) * 43758.5453;
  const r1 = s - Math.floor(s);
  const t = Math.sin(i * 78.233) * 12345.6789;
  const r2 = t - Math.floor(t);
  return {
    left: fx(6 + r1 * 88, 2),
    top: fx(4 + r2 * 90, 2),
    size: fx(2 + r1 * 3, 2),
    delay: fx(r2 * 6, 2),
    duration: fx(11 + r1 * 10, 2),
  };
});

/** Slow-drifting gold dust. */
export function Particles({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {MOTES.map((m, i) => (
        <span
          key={i}
          className="mote absolute rounded-full bg-gold animate-drift"
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}
