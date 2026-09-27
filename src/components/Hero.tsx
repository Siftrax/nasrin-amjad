import { EVENT } from "@/lib/event";
import { ScratchCard } from "@/components/ScratchCard";
import { StarLattice } from "@/components/Ornaments";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col min-h-[100svh] items-center justify-start overflow-hidden bg-night-deep pb-32"
    >
      {/* Star lattice background */}
      <StarLattice
        className="absolute inset-0 text-gold/15 opacity-40 pointer-events-none"
      />

      {/* Hero Scene Container */}
      <div className="relative w-full max-w-5xl mx-auto px-4 pt-10 pb-20 flex flex-col items-center">
        {/* Sunset Sky & Scene */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] max-w-[600px] animate-sunset-breathe">
          {/* Sunset Sky Background */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-sunset-lavender via-sunset-peach to-sunset-gold opacity-90" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-mosque-silhouette/20 via-transparent to-transparent"
            />
            {/* Atmospheric glow */}
            <div
              className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-lantern-glow/30 blur-[120px] opacity-60"
            />
            {/* Dust motes */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-gold-bright/40 animate-dust-float"
                  style={{
                    left: `${10 + (i * 7) % 80}%`,
                    top: `${80 + (i * 3) % 15}%`,
                    animationDelay: `${i * 1.2}s`,
                    animationDuration: `${12 + i * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Arched Entryway Frame */}
          <div className="relative z-10 w-full h-full">
            {/* Arch SVG - creates the arched doorway shape */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 500 550"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Arch path for clipping */}
                <path
                  id="archPath"
                  d="M0,550 L0,120 Q0,30 40,30 L460,30 Q500,30 500,120 L500,550 Z"
                />
                {/* Floral arrangement path at top of arch */}
                <path
                  id="floralTopPath"
                  d="M60,30 Q150,10 250,5 Q350,10 440,30"
                />
                {/* Side lantern paths */}
                <path
                  id="lanternLeftPath"
                  d="M40,30 L40,200"
                />
                <path
                  id="lanternRightPath"
                  d="M460,30 L460,200"
                />
              </defs>

              {/* Arch frame - dark silhouette */}
              <path
                d="M0,550 L0,120 Q0,30 40,30 L460,30 Q500,30 500,120 L500,550 Z"
                fill="url(#archGradient)"
                filter="drop-shadow(0 20px 40px oklch(0.15 0.02 240 / 0.5))"
              />
              <linearGradient id="archGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1a1a2e" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#16213e" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0f0f23" stopOpacity="0.95" />
              </linearGradient>

              {/* Gold inner border of arch */}
              <path
                d="M10,540 L10,125 Q10,35 45,35 L455,35 Q490,35 490,125 L490,540 Z"
                fill="none"
                stroke="url(#goldBorderGradient)"
                strokeWidth="2"
                opacity="0.8"
              />
              <linearGradient id="goldBorderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b8860b" />
                <stop offset="50%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#b8860b" />
              </linearGradient>

              {/* Floral arrangements at top of arch - LEFT cluster */}
              <g className="animate-floral-sway" style={{ transformOrigin: "80px 40px" }}>
                {/* Main floral cluster left */}
                <ellipse cx="85" cy="38" rx="28" ry="22" fill="#fffdf5" opacity="0.95" filter="drop-shadow(0 4px 12px oklch(0.85 0.08 75 / 0.4))" />
                <ellipse cx="70" cy="30" rx="18" ry="14" fill="#fffaf0" opacity="0.9" />
                <ellipse cx="100" cy="32" rx="16" ry="12" fill="#fef9f0" opacity="0.9" />
                <ellipse cx="90" cy="48" rx="14" ry="10" fill="#fffdf5" opacity="0.85" />
                {/* Small buds */}
                <circle cx="65" cy="25" r="4" fill="#fff8e7" opacity="0.8" />
                <circle cx="110" cy="28" r="3.5" fill="#fff8e7" opacity="0.8" />
                <circle cx="75" cy="52" r="3" fill="#fff5db" opacity="0.7" />
                {/* Gold accents */}
                <circle cx="85" cy="38" r="2" fill="#ffd700" opacity="0.6" />
                <circle cx="72" cy="31" r="1.5" fill="#ffd700" opacity="0.5" />
              </g>

              {/* Floral arrangements at top of arch - CENTER cluster (largest) */}
              <g className="animate-floral-sway" style={{ transformOrigin: "250px 20px", animationDelay: "0.5s" }}>
                <ellipse cx="250" cy="22" rx="35" ry="25" fill="#fffdf5" opacity="0.98" filter="drop-shadow(0 6px 16px oklch(0.85 0.08 75 / 0.5))" />
                <ellipse cx="235" cy="14" rx="22" ry="16" fill="#fffaf0" opacity="0.95" />
                <ellipse cx="265" cy="16" rx="20" ry="14" fill="#fef9f0" opacity="0.95" />
                <ellipse cx="245" cy="36" rx="18" ry="12" fill="#fffdf5" opacity="0.9" />
                <ellipse cx="255" cy="40" rx="15" ry="10" fill="#fffaf0" opacity="0.85" />
                {/* Hanging vines/flowers */}
                <path d="M250,45 Q240,60 250,75" stroke="#f5f0e0" strokeWidth="3" fill="none" opacity="0.7" strokeLinecap="round" />
                <path d="M235,48 Q225,65 230,80" stroke="#f5f0e0" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
                <path d="M265,48 Q275,65 270,80" stroke="#f5f0e0" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
                {/* Small buds */}
                <circle cx="220" cy="10" r="5" fill="#fff8e7" opacity="0.85" />
                <circle cx="280" cy="12" r="4.5" fill="#fff8e7" opacity="0.85" />
                <circle cx="235" cy="42" r="3.5" fill="#fff5db" opacity="0.75" />
                <circle cx="265" cy="42" r="3.5" fill="#fff5db" opacity="0.75" />
                {/* Gold accents */}
                <circle cx="250" cy="22" r="2.5" fill="#ffd700" opacity="0.7" />
                <circle cx="238" cy="16" r="2" fill="#ffd700" opacity="0.6" />
                <circle cx="262" cy="18" r="2" fill="#ffd700" opacity="0.6" />
              </g>

              {/* Floral arrangements at top of arch - RIGHT cluster */}
              <g className="animate-floral-sway" style={{ transformOrigin: "420px 40px", animationDelay: "1s" }}>
                <ellipse cx="415" cy="38" rx="28" ry="22" fill="#fffdf5" opacity="0.95" filter="drop-shadow(0 4px 12px oklch(0.85 0.08 75 / 0.4))" />
                <ellipse cx="400" cy="30" rx="18" ry="14" fill="#fffaf0" opacity="0.9" />
                <ellipse cx="430" cy="32" rx="16" ry="12" fill="#fef9f0" opacity="0.9" />
                <ellipse cx="420" cy="48" rx="14" ry="10" fill="#fffdf5" opacity="0.85" />
                <circle cx="395" cy="25" r="4" fill="#fff8e7" opacity="0.8" />
                <circle cx="440" cy="28" r="3.5" fill="#fff8e7" opacity="0.8" />
                <circle cx="410" cy="52" r="3" fill="#fff5db" opacity="0.7" />
                <circle cx="415" cy="38" r="2" fill="#ffd700" opacity="0.6" />
                <circle cx="402" cy="31" r="1.5" fill="#ffd700" opacity="0.5" />
              </g>

              {/* LEFT LANTERNS - hanging from arch side */}
              <g className="animate-lantern-sway origin-top-center" style={{ transformOrigin: "50px 35px", animationDelay: "0s" }}>
                {/* Lantern chain */}
                <path d="M50,35 Q50,55 50,75" stroke="#b8860b" strokeWidth="1.5" fill="none" opacity="0.7" strokeDasharray="4,3" />
                {/* Lantern body */}
                <rect x="40" y="75" width="20" height="35" rx="3" fill="url(#lanternGradient)" filter="drop-shadow(0 4px 12px oklch(0.75 0.11 70 / 0.5))" />
                <linearGradient id="lanternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#daa520" />
                  <stop offset="50%" stopColor="#ffd700" />
                  <stop offset="100%" stopColor="#b8860b" />
                </linearGradient>
                {/* Lantern top */}
                <path d="M40,75 Q50,68 60,75" fill="url(#lanternGradient)" />
                {/* Lantern bottom */}
                <path d="M40,110 Q50,118 60,110" fill="url(#lanternGradient)" />
                {/* Glass panels */}
                <rect x="43" y="80" width="14" height="25" rx="1" fill="#fffdf5" opacity="0.3" />
                {/* Lantern glow */}
                <ellipse
                  className="animate-lantern-glow"
                  cx="50"
                  cy="92"
                  rx="18"
                  ry="14"
                  fill="url(#lanternGlowGradient)"
                  style={{ transformOrigin: "50px 92px" }}
                />
                <radialGradient id="lanternGlowGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffd700" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#ffb300" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
                </radialGradient>
                {/* Decorative finial */}
                <circle cx="50" cy="65" r="3" fill="#b8860b" />
              </g>

              {/* Second left lantern */}
              <g className="animate-lantern-sway origin-top-center" style={{ transformOrigin: "50px 35px", animationDelay: "1.5s" }}>
                <path d="M50,35 Q50,95 50,115" stroke="#b8860b" strokeWidth="1.5" fill="none" opacity="0.7" strokeDasharray="4,3" />
                <rect x="40" y="115" width="20" height="35" rx="3" fill="url(#lanternGradient)" filter="drop-shadow(0 4px 12px oklch(0.75 0.11 70 / 0.5))" />
                <path d="M40,115 Q50,108 60,115" fill="url(#lanternGradient)" />
                <path d="M40,150 Q50,158 60,150" fill="url(#lanternGradient)" />
                <rect x="43" y="120" width="14" height="25" rx="1" fill="#fffdf5" opacity="0.3" />
                <ellipse
                  className="animate-lantern-glow"
                  cx="50"
                  cy="132"
                  rx="18"
                  ry="14"
                  fill="url(#lanternGlowGradient)"
                  style={{ transformOrigin: "50px 132px", animationDelay: "1.5s" }}
                />
                <circle cx="50" cy="105" r="3" fill="#b8860b" />
              </g>

              {/* RIGHT LANTERNS - hanging from arch side */}
              <g className="animate-lantern-sway origin-top-center" style={{ transformOrigin: "450px 35px", animationDelay: "0.7s" }}>
                <path d="M450,35 Q450,55 450,75" stroke="#b8860b" strokeWidth="1.5" fill="none" opacity="0.7" strokeDasharray="4,3" />
                <rect x="440" y="75" width="20" height="35" rx="3" fill="url(#lanternGradient)" filter="drop-shadow(0 4px 12px oklch(0.75 0.11 70 / 0.5))" />
                <path d="M440,75 Q450,68 460,75" fill="url(#lanternGradient)" />
                <path d="M440,110 Q450,118 460,110" fill="url(#lanternGradient)" />
                <rect x="443" y="80" width="14" height="25" rx="1" fill="#fffdf5" opacity="0.3" />
                <ellipse
                  className="animate-lantern-glow"
                  cx="450"
                  cy="92"
                  rx="18"
                  ry="14"
                  fill="url(#lanternGlowGradient)"
                  style={{ transformOrigin: "450px 92px" }}
                />
                <circle cx="450" cy="65" r="3" fill="#b8860b" />
              </g>

              {/* Second right lantern */}
              <g className="animate-lantern-sway origin-top-center" style={{ transformOrigin: "450px 35px", animationDelay: "2.2s" }}>
                <path d="M450,35 Q450,95 450,115" stroke="#b8860b" strokeWidth="1.5" fill="none" opacity="0.7" strokeDasharray="4,3" />
                <rect x="440" y="115" width="20" height="35" rx="3" fill="url(#lanternGradient)" filter="drop-shadow(0 4px 12px oklch(0.75 0.11 70 / 0.5))" />
                <path d="M440,115 Q450,108 460,115" fill="url(#lanternGradient)" />
                <path d="M440,150 Q450,158 460,150" fill="url(#lanternGradient)" />
                <rect x="443" y="120" width="14" height="25" rx="1" fill="#fffdf5" opacity="0.3" />
                <ellipse
                  className="animate-lantern-glow"
                  cx="450"
                  cy="132"
                  rx="18"
                  ry="14"
                  fill="url(#lanternGlowGradient)"
                  style={{ transformOrigin: "450px 132px", animationDelay: "2.2s" }}
                />
                <circle cx="450" cy="105" r="3" fill="#b8860b" />
              </g>

              {/* MOSQUE SILHOUETTE - in the background through the arch */}
              <g transform="translate(50, 130) scale(0.75)" fill="#0f0f23" opacity="0.85">
                {/* Main dome */}
                <ellipse cx="200" cy="120" rx="80" ry="35" />
                <ellipse cx="200" cy="115" rx="55" ry="25" fill="#16213e" />
                {/* Minarets */}
                <rect x="85" y="40" width="18" height="100" rx="2" />
                <rect x="297" y="40" width="18" height="100" rx="2" />
                {/* Minaret tops */}
                <path d="M85,40 Q94,30 103,40" fill="#0f0f23" />
                <path d="M297,40 Q306,30 315,40" fill="#0f0f23" />
                {/* Crescent moons on minarets */}
                <path d="M94,25 Q94,20 100,20 Q106,20 106,25" fill="#ffd700" opacity="0.8" />
                <path d="M306,25 Q306,20 312,20 Q318,20 318,25" fill="#ffd700" opacity="0.8" />
                {/* Main dome crescent */}
                <path d="M200,70 Q200,55 215,55 Q230,55 230,70" fill="#ffd700" opacity="0.8" />
                {/* Arched windows */}
                <g fill="#ffd700" opacity="0.4">
                  <path d="M140,140 Q140,110 160,110 Q180,110 180,140 Z" />
                  <path d="M220,140 Q220,110 240,110 Q260,110 260,140 Z" />
                  <path d="M155,155 Q155,145 165,145 Q175,145 175,155" />
                  <path d="M225,155 Q225,145 235,145 Q245,145 245,155" />
                </g>
                {/* Base platform */}
                <rect x="60" y="200" width="280" height="20" rx="3" fill="#1a1a2e" />
                <rect x="70" y="220" width="260" height="10" rx="2" fill="#16213e" />
              </g>

              {/* BRIDE & GROOM SILHOUETTES - walking towards mosque */}
              <g className="animate-couple-walk" style={{ animationDelay: "2s" }} transform="translate(250, 380)" fill="#0f0f23" opacity="0.9">
                {/* Groom - slightly taller, wearing sherwani */}
                <g transform="translate(-12, 0)">
                  {/* Head & turban */}
                  <ellipse cx="0" cy="-55" rx="9" ry="11" />
                  <ellipse cx="0" cy="-62" rx="11" ry="7" />
                  {/* Body - sherwani */}
                  <path d="M-14,-40 Q-18,-10 -16,15 L16,15 Q18,-10 14,-40 Z" />
                  {/* Legs walking */}
                  <path d="M-6,15 L-8,45" stroke="#0f0f23" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
                  <path d="M6,15 L8,50" stroke="#0f0f23" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
                  {/* Arms */}
                  <path d="M-14,-30 Q-25,-20 -28,-5" stroke="#0f0f23" strokeWidth="4" strokeLinecap="round" opacity="0.9" fill="none" />
                  <path d="M14,-30 Q20,-15 18,5" stroke="#0f0f23" strokeWidth="4" strokeLinecap="round" opacity="0.9" fill="none" />
                </g>

                {/* Bride - wearing lehenga/dupatta */}
                <g transform="translate(12, 0)">
                  {/* Head & bun */}
                  <ellipse cx="0" cy="-55" rx="8" ry="10" />
                  <ellipse cx="0" cy="-60" rx="9" ry="5" />
                  {/* Dupatta flowing */}
                  <path
                    d="M-12,-50 Q-25,-55 -30,-35 Q-28,-20 -15,-10"
                    stroke="#fffdf5"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.7"
                    strokeLinecap="round"
                  />
                  {/* Body - lehenga flare */}
                  <path d="M-12,-40 Q-20,-5 -15,20 L15,20 Q20,-5 12,-40 Z" fill="#0f0f23" />
                  {/* Legs walking */}
                  <path d="M-5,20 L-7,50" stroke="#0f0f23" strokeWidth="4.5" strokeLinecap="round" opacity="0.9" />
                  <path d="M5,20 L7,45" stroke="#0f0f23" strokeWidth="4.5" strokeLinecap="round" opacity="0.9" />
                  {/* Arms - one holding groom's hand */}
                  <path d="M-12,-30 Q-18,-20 -20,-5" stroke="#0f0f23" strokeWidth="3.5" strokeLinecap="round" opacity="0.9" fill="none" />
                  <path d="M12,-30 Q18,-25 16,-5" stroke="#0f0f23" strokeWidth="3.5" strokeLinecap="round" opacity="0.9" fill="none" />
                </g>
              </g>

              {/* Decorative arch keystone */}
              <g transform="translate(250, 30)">
                <path d="M-12,0 Q0,-12 12,0 Q0,6 -12,0" fill="url(#keystoneGradient)" />
                <linearGradient id="keystoneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffd700" />
                  <stop offset="100%" stopColor="#b8860b" />
                </linearGradient>
                <circle cx="0" cy="-3" r="3" fill="#fffdf5" opacity="0.8" />
              </g>
            </svg>

            {/* Content overlay inside the arch */}
            <div
              className="relative z-20 w-full h-full flex flex-col items-center justify-between px-6 py-10 sm:px-12 sm:py-16"
              style={{
                clipPath: "polygon(0% 100%, 0% 22%, 8% 6%, 92% 6%, 100% 22%, 100% 100%)",
              }}
            >
              {/* Top: Bismillah */}
              <div className="animate-rise text-center" style={{ animationDelay: "0.6s" }}>
                <p className="arabic text-2xl sm:text-3xl text-gold-deep drop-shadow-sm leading-tight">
                  بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ
                </p>
              </div>

              {/* Center: Names */}
              <div className="flex-1 flex flex-col items-center justify-center text-center animate-rise px-4" style={{ animationDelay: "0.9s" }}>
                <p className="eyebrow text-[0.6rem] sm:text-[0.7rem] text-gold-bright tracking-widest">
                  YOU ARE INVITED TO THE NIKKAH CEREMONY OF
                </p>

                <div className="mt-6 sm:mt-10">
                  <h1 className="script text-5xl sm:text-6xl lg:text-7xl text-gold-deep leading-tight foil">
                    {EVENT.bride.name}
                  </h1>
                  <p className="mt-3 text-xs sm:text-sm text-sage-dim italic font-display text-cream-soft">
                    {EVENT.bride.lineageWords} {EVENT.bride.father} & {EVENT.bride.mother}{" "}
                    <br />
                    <span className="text-[0.55rem] uppercase tracking-widest text-parchment/60 not-italic">
                      {EVENT.bride.house}, {EVENT.bride.street}, {EVENT.bride.locality}
                    </span>
                  </p>
                </div>

                <p className="script text-2xl sm:text-3xl text-gold mt-8 mb-8 foil" style={{ animationDelay: "1.2s" }}>
                  With
                </p>

                <div style={{ animationDelay: "1.4s" }}>
                  <h1 className="script text-5xl sm:text-6xl lg:text-7xl text-gold-deep leading-tight foil">
                    {EVENT.groom.name}
                  </h1>
                  <p className="mt-3 text-xs sm:text-sm text-sage-dim italic font-display text-cream-soft">
                    {EVENT.groom.lineageWords} {EVENT.groom.father} & {EVENT.groom.mother}{" "}
                    <br />
                    <span className="text-[0.55rem] uppercase tracking-widest text-parchment/60 not-italic">
                      {EVENT.groom.house}, {EVENT.groom.locality}
                    </span>
                  </p>
                </div>
              </div>

              {/* Bottom: Message & Scroll indicator */}
              <div className="animate-rise text-center pb-4" style={{ animationDelay: "1.8s" }}>
                <p className="font-display text-base sm:text-lg text-sage">
                  Dear Friends and Family,
                </p>
                <p className="font-display text-sm sm:text-base text-sage-dim mt-2 max-w-md mx-auto text-cream-soft">
                  We humbly request the honor of your presence and blessings on this joyous occasion as we begin our journey together.
                </p>

                <div className="mt-10 flex flex-col items-center">
                  <span className="eyebrow text-[0.55rem] text-gold-bright">Scroll down</span>
                  <span className="mx-auto mt-3 block h-14 w-px overflow-hidden bg-gold/20">
                    <span className="block h-5 w-px animate-bob bg-gold" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scratch to Reveal Date Cards - below the scene */}
        <div className="relative w-full max-w-3xl mx-auto px-5 mt-10 flex flex-col items-center">
          <div className="animate-rise text-center" style={{ animationDelay: "2.2s" }}>
            <p className="eyebrow text-gold-bright tracking-widest text-[0.6rem] sm:text-xs">
              Scratch to Reveal the Date
            </p>
          </div>

          <div className="mt-6 flex gap-3 sm:gap-6 justify-center animate-rise" style={{ animationDelay: "2.4s" }}>
            <ScratchCard
              label="DAY"
              className="w-20 h-28 sm:w-24 sm:h-32"
              hiddenContent={
                <span className="font-display text-3xl sm:text-4xl text-gold-deep">
                  {new Date(EVENT.startISO).getDate()}
                </span>
              }
            />
            <ScratchCard
              label="MONTH"
              className="w-20 h-28 sm:w-24 sm:h-32"
              hiddenContent={
                <span className="font-display text-3xl sm:text-4xl text-gold-deep uppercase">
                  {new Date(EVENT.startISO).toLocaleString("en", { month: "short" })}
                </span>
              }
            />
            <ScratchCard
              label="YEAR"
              className="w-20 h-28 sm:w-24 sm:h-32"
              hiddenContent={
                <span className="font-display text-3xl sm:text-4xl text-gold-deep">
                  {new Date(EVENT.startISO).getFullYear()}
                </span>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}