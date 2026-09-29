import { createFileRoute } from "@tanstack/react-router";

import { Envelope } from "@/components/Envelope";
import { Hero } from "@/components/Hero";
import { ScratchDate } from "@/components/ScratchDate";
import { Verse } from "@/components/Verse";
import { Families } from "@/components/Families";
import { Countdown } from "@/components/Countdown";
import { Timeline } from "@/components/Timeline";
import { Details } from "@/components/Details";
import { DressCode } from "@/components/DressCode";
import { Rsvp } from "@/components/Rsvp";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Nasrin & Amjad — Nikah, Saturday 26 December 2026, Nova Auditorium, Palazhi",
      },
      {
        name: "description",
        content:
          "You are warmly invited to the nikah of Nasrin (d/o Jafar & Maimoona) and Amjad (s/o Abdul Latheef & Ayshabi) on Saturday 26 December 2026 at 10:00 AM, Nova Auditorium, Palazhi.",
      },
      { property: "og:title", content: "The Nikah of Nasrin & Amjad" },
      {
        property: "og:description",
        content:
          "Saturday 26 December 2026 · 10:00 AM · Nova Auditorium, Palazhi. Please keep us in your duas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "The Nikah of Nasrin & Amjad" },
      {
        name: "twitter:description",
        content:
          "Saturday 26 December 2026, 10:00 AM — Nova Auditorium, Palazhi.",
      },
    ],
  }),
  component: Invitation,
});

function Invitation() {
  return (
    <div className="min-h-screen bg-background">
      <Envelope />
      <main>
        <Hero />
        <div id="date">
          <ScratchDate />
        </div>
        <Verse />
        <Families />
        <div id="countdown">
          <Countdown />
        </div>
        <Timeline />
        <Details />
        <DressCode />
        <Rsvp />
      </main>
      <Footer />
    </div>
  );
}
