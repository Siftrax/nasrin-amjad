import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import track from "@/assets/the-sins-nasheed.mp3.asset.json";

export type MusicHandle = { play: () => void };

/** Looping background nasheed with a floating gold play/pause button. */
export const MusicToggle = forwardRef<MusicHandle, { visible: boolean }>(
  function MusicToggle({ visible }, ref) {
    const audio = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);

    const play = () => {
      const a = audio.current;
      if (!a) return;
      a.volume = 0.6;
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    };

    useImperativeHandle(ref, () => ({ play }));

    const toggle = () => {
      const a = audio.current;
      if (!a) return;
      if (a.paused) play();
      else {
        a.pause();
        setPlaying(false);
      }
    };

    return (
      <>
        <audio ref={audio} src={track.url} loop preload="auto" />
        {visible && (
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause music" : "Play music"}
            className="fixed bottom-5 right-5 z-[80] flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-ivory text-gold-deep"
            style={{ boxShadow: "var(--shadow-gold)" }}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        )}
      </>
    );
  },
);
