import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function EnvelopeIntro() {
  const [phase, setPhase] = useState<"initial" | "playing" | "done">("initial");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleTap = () => {
    if (phase !== "initial") return;
    setPhase("playing");
    if (videoRef.current) {
      videoRef.current.play();
    }
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsAudioPlaying(true);
      }).catch(() => {
        // Autoplay policy prevented audio
      });
    }

    // Video is about 5 seconds long (guess based on standard envelope videos)
    // We'll fade it out after 4.5 seconds
    setTimeout(() => {
      setPhase("done");
    }, 4500);
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isAudioPlaying) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      audioRef.current.play();
      setIsAudioPlaying(true);
    }
  };

  return (
    <>
      {/* Background Audio */}
      <audio ref={audioRef} loop>
        <source src="https://pub-4dc8201144ca418fb604349c73e8c724.r2.dev/Einaudi_%20Divenire%20(1)%20(1).mp3" type="audio/mp3" />
      </audio>

      {/* Floating Audio Button */}
      {phase !== "initial" && (
        <button
          onClick={toggleAudio}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold shadow-gold transition-transform hover:scale-110"
        >
          {isAudioPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-white">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-white ml-1">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>
      )}

      {/* Intro Overlay */}
      {phase !== "done" && (
        <div className="fixed inset-0 z-[99999] bg-[#F9F0E0] overflow-hidden flex flex-col items-center justify-center">
          
          {/* Initial Tap Screen */}
          <div 
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-1000",
              phase === "initial" ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            onClick={handleTap}
          >
            <img 
              src="https://pub-96ce671efbac4dbfbc89b044c631a913.r2.dev/ChatGPT%20Image%20Jul%2027%2C%202026%2C%2001_02_07%20AM.png" 
              alt="Envelope" 
              className="w-full max-w-[440px] object-contain"
            />
            <div className="absolute bottom-[30%] flex flex-col items-center gap-2 animate-bounce">
              <div className="w-3 h-3 border-r-2 border-t-2 border-gold rotate-[135deg]"></div>
              <span className="font-caps text-xs uppercase tracking-[0.25em] text-gold-deep">Tap to open</span>
            </div>
          </div>

          {/* Video Screen */}
          <div 
            className={cn(
              "absolute inset-0 flex items-center justify-center bg-[#F9F0E0] pointer-events-none transition-opacity duration-1000",
              phase === "playing" ? "opacity-100" : "opacity-0"
            )}
          >
            <video 
              ref={videoRef}
              src="https://pub-96ce671efbac4dbfbc89b044c631a913.r2.dev/Envelope_opening_with_golden_light_202607270136.mp4" 
              muted 
              playsInline 
              preload="auto"
              className="w-full max-w-[440px] object-contain"
            />
          </div>
          
        </div>
      )}
    </>
  );
}
