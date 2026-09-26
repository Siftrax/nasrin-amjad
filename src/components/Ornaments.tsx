import { useId, type CSSProperties } from "react";

/** Deterministic pseudo-random so server and client render identically. */
const rand = (n: number) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

/** Two-decimal strings keep server HTML and client props byte-identical. */
const fx = (n: number) => n.toFixed(2);

/** Full-bleed eight-point star lattice, drawn as an SVG pattern. */
export function StarLattice({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={`lattice-${id}`}
          width="46"
          height="46"
          patternUnits="userSpaceOnUse"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
            opacity="0.5"
            transform="translate(23 23)"
          >
            <rect x="-9" y="-9" width="18" height="18" />
            <rect x="-9" y="-9" width="18" height="18" transform="rotate(45)" />
            <circle r="2" />
            <path d="M0 -23 L0 -13 M0 13 L0 23 M-23 0 L-13 0 M13 0 L23 0" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#lattice-${id})`} />
    </svg>
  );
}

/** A single eight-point star. */
export function Star8({
  className,
  size = 14,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
    >
      <rect x="5" y="5" width="14" height="14" />
      <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" />
    </svg>
  );
}

/** Ornamental horizontal divider: rule — star — rule. */
export function Divider({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className ?? ""}`}>
      <span className="rule-gold flex-1" />
      <Star8 className="animate-twinkle text-gold" size={13} />
      <span className="h-1 w-1 rotate-45 border border-gold/70" />
      <Star8 className="animate-twinkle text-gold" size={13} />
      <span className="rule-gold flex-1" />
    </div>
  );
}

/** Pointed Mughal arch that draws itself on load. */
export function ArchFrame({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 820"
      preserveAspectRatio="none"
      className={className}
      fill="none"
    >
      <path
        d="M40 800 V340 C40 180 160 80 300 30 C440 80 560 180 560 340 V800"
        stroke="currentColor"
        strokeWidth="1.1"
        pathLength={1}
        strokeDasharray="1"
        style={{ "--dash": 1 } as CSSProperties}
        className="animate-draw"
      />
      <path
        d="M74 800 V352 C74 208 178 116 300 70 C422 116 526 208 526 352 V800"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.55"
        pathLength={1}
        strokeDasharray="1"
        style={{ "--dash": 1, animationDelay: "0.35s" } as CSSProperties}
        className="animate-draw"
      />
    </svg>
  );
}

/** Circular seal with a letter, a slow-turning dashed ring and star ticks. */
export function Monogram({
  letter,
  className,
}: {
  letter: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
        <circle
          cx="60"
          cy="60"
          r="55"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.45"
          strokeDasharray="3 7"
          className="origin-center animate-spin-slow"
        />
        <circle
          cx="60"
          cy="60"
          r="44"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.8"
        />
        <rect
          x="34"
          y="34"
          width="52"
          height="52"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.5"
          className="origin-center animate-spin-slower"
        />
        <rect
          x="34"
          y="34"
          width="52"
          height="52"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.5"
          transform="rotate(45 60 60)"
          className="origin-center animate-spin-slower"
        />
      </svg>
      <span className="foil absolute inset-0 grid place-items-center font-display text-3xl leading-none">
        {letter}
      </span>
    </div>
  );
}

/** Hanging lantern silhouette used as a floating decoration. */
export function Lantern({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 70"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
    >
      <path d="M20 0 V14" />
      <path d="M12 14 h16" />
      <path d="M14 14 c-5 8 -6 20 0 30 h12 c6 -10 5 -22 0 -30z" />
      <path d="M14 44 h12 l-2 8 h-8z" />
      <path d="M20 52 v6" />
      <circle cx="20" cy="30" r="4" opacity="0.7" />
    </svg>
  );
}

/** Tiny crescent used in the footer and nav monogram. */
export function Crescent({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M16.5 3.5a9 9 0 1 0 4 12.4A7.4 7.4 0 0 1 16.5 3.5z" />
      <path d="M19 15.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" />
    </svg>
  );
}

/** Endless strip of stars + diamonds that scrolls across the page. */
export function MarqueeStrip() {
  const cells = Array.from({ length: 26 }, (_, i) => i);
  const row = (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {cells.map((i) => (
        <span key={i} className="flex items-center gap-8">
          {i % 3 === 0 ? (
            <Star8 size={11} className="text-gold/70" />
          ) : (
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/40" />
          )}
          <span className="h-px w-10 bg-gold/20" />
        </span>
      ))}
    </div>
  );
  return (
    <div
      aria-hidden="true"
      className="relative flex overflow-hidden border-y border-gold/15 py-3"
    >
      <div className="flex animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}

/** Drifting gold motes. Positions are deterministic (no hydration drift). */
export function Particles({ count = 30 }: { count?: number }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {Array.from({ length: count }, (_, i) => {
        const size = 1.5 + rand(i * 3) * 3.5;
        const left = rand(i * 7 + 1) * 100;
        const top = rand(i * 11 + 2) * 100;
        const dur = 9 + rand(i * 13 + 3) * 14;
        const delay = rand(i * 17 + 4) * -20;
        const twinkle = 2.8 + rand(i * 19 + 5) * 4;
        const glow = 0.35 + rand(i * 23) * 0.5;
        return (
          <span
            key={i}
            className="mote absolute animate-drift rounded-full bg-gold"
            style={{
              width: `${fx(size)}px`,
              height: `${fx(size)}px`,
              left: `${fx(left)}%`,
              top: `${fx(top)}%`,
              opacity: fx(glow),
              animationDuration: `${fx(dur)}s, ${fx(twinkle)}s`,
              animationDelay: `${fx(delay)}s, ${fx(delay / 2)}s`,
            }}
          />
        );
      })}
    </div>
  );
}
