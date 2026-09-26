import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ScratchCardProps = {
  hiddenContent: React.ReactNode;
  label: string;
  className?: string;
};

export function ScratchCard({ hiddenContent, label, className }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScratched, setIsScratched] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to fit container
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Draw the gold foil gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#b8b28b"); // gold base
    gradient.addColorStop(0.3, "#e6e2cc"); // highlight
    gradient.addColorStop(0.5, "#d6d0b3");
    gradient.addColorStop(0.8, "#f2eed9");
    gradient.addColorStop(1, "#c4be9a");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the label
    ctx.fillStyle = "#ffffff";
    ctx.font = "600 14px 'Cinzel', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.letterSpacing = "4px";
    ctx.globalAlpha = 0.8;
    ctx.fillText(label, canvas.width / 2, canvas.height / 2);
    ctx.globalAlpha = 1.0;

    let isDrawing = false;
    let scratchedPixels = 0;
    const totalPixels = canvas.width * canvas.height;

    const getPosition = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      if ('touches' in e) {
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top
        };
      }
      return {
        x: (e as MouseEvent).clientX - rect.left,
        y: (e as MouseEvent).clientY - rect.top
      };
    };

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();

      // Check scratched percentage roughly
      scratchedPixels += Math.PI * 20 * 20;
      if (scratchedPixels / totalPixels > 0.4 && !isScratched) {
        setIsScratched(true);
      }
    };

    const onStart = (e: MouseEvent | TouchEvent) => {
      isDrawing = true;
      const pos = getPosition(e);
      scratch(pos.x, pos.y);
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return;
      e.preventDefault(); // Prevent scrolling on touch
      const pos = getPosition(e);
      scratch(pos.x, pos.y);
    };

    const onEnd = () => {
      isDrawing = false;
    };

    canvas.addEventListener("mousedown", onStart);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseup", onEnd);
    canvas.addEventListener("mouseleave", onEnd);
    canvas.addEventListener("touchstart", onStart, { passive: false });
    canvas.addEventListener("touchmove", onMove, { passive: false });
    canvas.addEventListener("touchend", onEnd);

    return () => {
      canvas.removeEventListener("mousedown", onStart);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseup", onEnd);
      canvas.removeEventListener("mouseleave", onEnd);
      canvas.removeEventListener("touchstart", onStart);
      canvas.removeEventListener("touchmove", onMove);
      canvas.removeEventListener("touchend", onEnd);
    };
  }, [label, isScratched]);

  return (
    <div 
      ref={containerRef} 
      className={cn(
        "relative overflow-hidden rounded-md border border-gold/40 shadow-vault",
        className
      )}
      onClick={() => {
        if (!isScratched) setIsScratched(true); // Fallback tap-to-reveal
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-night-raise text-gold-bright">
        {hiddenContent}
      </div>
      <canvas
        ref={canvasRef}
        className={cn(
          "absolute inset-0 cursor-pointer transition-opacity duration-700",
          isScratched ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      />
    </div>
  );
}
