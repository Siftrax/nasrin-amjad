import { useEffect, useState } from "react";

import cover from "@/assets/envelope-cover.jpg";

/**
 * Full-screen "tap to open" cover, modelled on the Timeless Grace opening:
 * envelope photo on ivory, pulsing "Tap to open" with a chevron, then a
 * golden light bloom from the seal before cross-fading into the invitation.
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
    }, 3000);
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
      className={`wei-overlay ${opening ? "is-opening" : ""}`}
    >
      <div className="wei-stage">
        <img
          src={cover}
          alt="Open your invitation"
          width={768}
          height={1376}
          draggable={false}
          className="wei-img"
        />
        <div className="wei-flap" aria-hidden="true">
          <img src={cover} alt="" draggable={false} />
        </div>
        <div className="wei-glow" aria-hidden="true" />
        <div className="wei-light" aria-hidden="true" />
      </div>

      <div className="wei-tap">
        <span className="wei-chevron" aria-hidden="true" />
        <span className="wei-tap-label">Tap to open</span>
      </div>
    </div>
  );
}
