/**
 * Single source of truth for the invitation content.
 * Everything the site displays (names, families, date, venue) lives here.
 */

export const EVENT = {
  bride: {
    name: "Nasrin",
    label: "The Bride",
    lineage: "d/o",
    lineageWords: "daughter of",
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
    lineageWords: "son of",
    father: "Abdul Latheef",
    mother: "Ayshabi",
    house: "Pichappuram Meethal",
    street: "",
    locality: "Palazhi",
  },
  /** 10:00 AM India Standard Time, 26 December 2026 */
  startISO: "2026-12-26T10:00:00+05:30",
  dateLong: "Saturday, 26 December 2026",
  dateShort: "26 · 12 · 2026",
  timeLong: "10:00 in the morning",
  timeShort: "10:00 AM",
  venueName: "Nova Auditorium",
  venueLine: "Nova Auditorium, Palazhi",
  venueRegion: "Palakkad, Kerala",
} as const;

/** Google Maps directions link for the hall. */
export function mapsUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${EVENT.venueLine}, ${EVENT.venueRegion}`,
  )}`;
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
