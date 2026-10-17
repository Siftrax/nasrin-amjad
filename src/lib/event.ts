/**
 * Single source of truth for the invitation content.
 * Everything the site displays (names, families, date, venue) lives here.
 */

export const EVENT = {
  bride: {
    name: "Nasrin",
    label: "The Bride",
    lineage: "d/o",
    lineageWords: "Daughter of",
    parents: "Mr. & Mrs. Jafar and Maimoona",
    father: "Jafar",
    mother: "Maimoona",
    house: "Ayishas (H)",
    street: "Kayanam Parambu",
    locality: "Palazhi",
  },
  groom: {
    name: "Amjad",
    label: "The Groom",
    lineage: "s/o",
    lineageWords: "Son of",
    parents: "Mr. & Mrs. Abdul Latheef and Ayshabi",
    father: "Abdul Latheef",
    mother: "Ayshabi",
    house: "Pichappurath Meethal",
    street: "",
    locality: "Palazhi",
  },
  /** 10:00 AM India Standard Time, 26 December 2026 */
  startISO: "2026-12-26T10:00:00+05:30",
  dateLong: "Saturday, 26 December 2026",
  dateShort: "26 · 12 · 2026",
  dateDay: "26",
  dateMonth: "December",
  dateYear: "2026",
  timeLong: "10:00 in the morning",
  timeShort: "10:00 AM",
  venueName: "Nova Auditorium",
  venueLine: "Nova Auditorium, Palazhi",
  venueRegion: "Kozhikode, Kerala",
  rsvpBy: "30 November 2026",
  verse: {
    arabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
    english: "“And We created you in pairs.”",
    reference: "Surah An-Naba 78:8",
  },
  timeline: [
    { time: "10:00 am", label: "Nikah Ceremony" },
    { time: "10:45 am", label: "Duas & Blessings" },
    { time: "11:15 am", label: "Photographs with the Families" },
    { time: "12:00 pm", label: "Feast" },
  ],
  dressCode: {
    title: "Traditional Attire",
    note: "We kindly invite our guests to dress in soft pastel shades.",
    reserved:
      "Please avoid wearing ivory, as it has been reserved for the bride and groom.",
    swatches: [
      { name: "Champagne", token: "bg-champagne" },
      { name: "Soft Sage", token: "bg-sage" },
      { name: "Blush Rose", token: "bg-rose" },
      { name: "Warm Sand", token: "bg-sand" },
      { name: "Antique Gold", token: "bg-gold" },
    ],
  },
} as const;

/** Google Maps directions link for the hall (shared by the family). */
export function mapsUrl(): string {
  return "https://maps.app.goo.gl/FC52GVqoBDqgK6bY9";
}

const toStamp = (d: Date): string =>
  d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

/** Calendar file contents (.ics) for "Add to calendar". */
export function icsContent(): string {
  const start = new Date(EVENT.startISO);
  const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Nasrin and Amjad//Nikah Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:nikah-nasrin-amjad-26dec2026@invitation",
    `DTSTAMP:${toStamp(new Date())}`,
    `DTSTART:${toStamp(start)}`,
    `DTEND:${toStamp(end)}`,
    "SUMMARY:Nikah of Nasrin & Amjad",
    "DESCRIPTION:With the duas of our families — please join us.",
    `LOCATION:${EVENT.venueLine}\\, ${EVENT.venueRegion}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/** Build the calendar file in the browser and hand it to the OS. */
export function downloadCalendarFile(): void {
  const blob = new Blob([icsContent()], {
    type: "text/calendar;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "nasrin-amjad-nikah.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

/** Native share where available, otherwise copy the page link. */
export async function shareInvitation(): Promise<"shared" | "copied" | "failed"> {
  const url = typeof window === "undefined" ? "" : window.location.href;
  const nav = navigator as Navigator & {
    share?: (data: ShareData) => Promise<void>;
  };
  try {
    if (nav.share) {
      await nav.share({
        title: "The Nikah of Nasrin & Amjad",
        text: `${EVENT.dateLong} · ${EVENT.timeShort} · ${EVENT.venueLine}`,
        url,
      });
      return "shared";
    }
    await navigator.clipboard.writeText(url);
    return "copied";
  } catch {
    return "failed";
  }
}
