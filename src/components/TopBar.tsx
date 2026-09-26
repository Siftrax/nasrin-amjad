import { useEffect, useState } from "react";
import { EVENT } from "@/lib/event";
import { Crescent } from "@/components/Ornaments";

const LINKS = [
  { href: "#families", label: "Families" },
  { href: "#countdown", label: "Countdown" },
  { href: "#details", label: "Details" },
  { href: "#dua", label: "Duas" },
];

/** Slim floating bar that solidifies once you leave the arch. */
export function TopBar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        solid
          ? "border-b border-gold/15 bg-night-deep/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <Crescent className="h-5 w-5 text-gold" />
          <span className="font-display text-lg leading-none text-parchment">
            {EVENT.bride.name.charAt(0)}
            <span className="mx-1 text-gold/70">&amp;</span>
            {EVENT.groom.name.charAt(0)}
          </span>
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.62rem] uppercase tracking-[0.28em] text-sage-dim transition-colors duration-300 hover:text-gold-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#details"
          className="border border-gold/40 px-3 py-2 text-[0.58rem] uppercase tracking-[0.24em] text-gold transition-colors duration-300 hover:bg-gold-mist sm:hidden"
        >
          Details
        </a>
      </div>
    </header>
  );
}
