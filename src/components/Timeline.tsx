import { Reveal } from "@/components/Reveal";
import { StarLattice } from "@/components/Ornaments";

const timelineEvents = [
  { time: "10:00 AM", title: "Guest Arrival & Welcoming" },
  { time: "10:30 AM", title: "Nikah Ceremony & Duas" },
  { time: "11:30 AM", title: "Feast & Celebration" },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32">
      <StarLattice className="absolute inset-0 text-gold/10 opacity-70" />
      <div className="relative mx-auto max-w-2xl px-5 text-center">
        <Reveal>
          <span className="eyebrow">The Schedule</span>
          <h2 className="mt-5 font-display text-4xl text-parchment sm:text-5xl">
            Wedding Timeline
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-[20px] top-4 bottom-4 w-px bg-gold/30 sm:left-1/2 sm:-ml-px"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <Reveal key={index} delay={index * 120} className="relative flex items-center sm:justify-center">
                {/* Diamond Node */}
                <div className="absolute left-[20px] sm:left-1/2 w-3 h-3 -ml-[5px] rotate-45 bg-night border border-gold ring-4 ring-night-deep z-10" />

                {/* Event Content */}
                <div
                  className={`w-full pl-12 sm:pl-0 sm:w-1/2 flex flex-col ${
                    index % 2 === 0
                      ? "sm:pr-12 sm:text-right sm:items-end sm:-ml-[50%]"
                      : "sm:pl-12 sm:text-left sm:items-start sm:ml-[50%]"
                  }`}
                >
                  <span className="eyebrow text-gold">{event.time}</span>
                  <h3 className="mt-2 text-xl font-display text-parchment">{event.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
