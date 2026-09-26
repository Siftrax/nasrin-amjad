import archImg from "@/assets/arch-frame.png";
import floralImg from "@/assets/floral-corner.png";
import { EVENT } from "@/lib/event";
import { ScratchCard } from "@/components/ScratchCard";
import { StarLattice } from "@/components/Ornaments";

export function Hero() {
  return (
    <section id="top" className="relative flex flex-col min-h-[100svh] items-center justify-start overflow-hidden bg-night-deep pb-32">
      <StarLattice className="absolute inset-0 text-gold/20 opacity-50 pointer-events-none" />
      
      {/* Scratch to Reveal Cards at the top */}
      <div className="relative w-full max-w-3xl mx-auto px-5 pt-16 flex flex-col items-center">
        {/* Floral Top Sprays */}
        <div className="w-full flex justify-between items-start opacity-80 pointer-events-none">
          <img src={floralImg} alt="" className="w-24 sm:w-32 rotate-[-90deg] -translate-y-4" />
          <img src={floralImg} alt="" className="w-24 sm:w-32 rotate-[180deg] scale-x-[-1] -translate-y-4" />
        </div>
        
        <div className="animate-rise -mt-8 text-center" style={{ animationDelay: "0.2s" }}>
          <p className="eyebrow text-gold-bright tracking-widest text-[0.6rem] sm:text-xs">
            Scratch to Reveal the Date
          </p>
        </div>

        <div className="mt-8 flex gap-4 sm:gap-8 justify-center animate-rise" style={{ animationDelay: "0.4s" }}>
          <ScratchCard 
            label="DAY" 
            className="w-20 h-28 sm:w-24 sm:h-32"
            hiddenContent={<span className="font-display text-3xl sm:text-4xl text-gold-deep">26</span>} 
          />
          <ScratchCard 
            label="MONTH" 
            className="w-20 h-28 sm:w-24 sm:h-32"
            hiddenContent={<span className="font-display text-3xl sm:text-4xl text-gold-deep uppercase">Dec</span>} 
          />
          <ScratchCard 
            label="YEAR" 
            className="w-20 h-28 sm:w-24 sm:h-32"
            hiddenContent={<span className="font-display text-3xl sm:text-4xl text-gold-deep">2026</span>} 
          />
        </div>
        
        <div className="mt-8 flex flex-col items-center animate-rise" style={{ animationDelay: "0.6s" }}>
          <span className="eyebrow text-[0.62rem] text-gold-bright">Scroll down</span>
          <span className="mx-auto mt-3 block h-12 w-px overflow-hidden bg-gold/20">
            <span className="block h-4 w-px animate-bob bg-gold" />
          </span>
        </div>
      </div>

      {/* Royal Archway Couple Presentation */}
      <div className="relative mt-16 w-full max-w-4xl mx-auto px-5 z-10">
        <div className="opener relative">
          <img 
            src={archImg} 
            alt="Islamic Archway" 
            className="absolute inset-0 w-full h-full object-fill opacity-90 drop-shadow-2xl pointer-events-none" 
          />
          <div className="relative px-6 py-20 text-center sm:px-16 sm:py-28 flex flex-col items-center">
            
            <p className="arabic animate-rise text-2xl leading-loose sm:text-3xl text-gold-deep drop-shadow-sm" style={{ animationDelay: "0.8s" }}>
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ
            </p>

            <p className="eyebrow animate-rise mt-8 text-[0.65rem] sm:text-[0.75rem]" style={{ animationDelay: "1s" }}>
              YOU ARE INVITED TO THE NIKKAH CEREMONY OF
            </p>

            <div className="mt-12 text-center animate-rise" style={{ animationDelay: "1.2s" }}>
              <h1 className="script text-6xl sm:text-7xl text-gold-deep leading-tight">
                Nasrin
              </h1>
              <p className="mt-4 text-xs sm:text-sm text-sage-dim italic font-display">
                D/o Jafar & Maimoona <br/>
                <span className="text-[0.6rem] uppercase tracking-widest text-parchment/60 not-italic">Ayishas(H), Kayanam Parambu, Palazhi</span>
              </p>
            </div>

            <p className="script text-3xl sm:text-4xl text-gold mt-10 mb-10 animate-rise" style={{ animationDelay: "1.4s" }}>
              With
            </p>

            <div className="text-center animate-rise" style={{ animationDelay: "1.6s" }}>
              <h1 className="script text-6xl sm:text-7xl text-gold-deep leading-tight">
                Amjad
              </h1>
              <p className="mt-4 text-xs sm:text-sm text-sage-dim italic font-display">
                S/o Abdul Latheef & Ayshabi <br/>
                <span className="text-[0.6rem] uppercase tracking-widest text-parchment/60 not-italic">Pichappuram Meethal, Palazhi</span>
              </p>
            </div>
            
            <div className="mt-16 text-center animate-rise" style={{ animationDelay: "1.8s" }}>
              <p className="font-display text-lg sm:text-xl text-sage">
                Dear Friends and Family,
              </p>
              <p className="font-display text-sm sm:text-base text-sage-dim mt-2 max-w-md mx-auto">
                We humbly request the honor of your presence and blessings on this joyous occasion as we begin our journey together.
              </p>
            </div>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-between px-12 pointer-events-none opacity-90">
              <img src={floralImg} alt="" className="w-20 sm:w-28 rotate-0 origin-bottom-left" />
              <img src={floralImg} alt="" className="w-20 sm:w-28 scale-x-[-1] origin-bottom-right" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
