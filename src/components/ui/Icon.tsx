import { cn } from "@/lib/cn";

/*
 * Ikony: stroke 1,5 px, 24 px v UI a 28 px v kartách. Nikdy vyplněné ikony,
 * nikdy dva různé sety. Kreslené inline, aby web netahal celou knihovnu kvůli
 * hrstce tvarů — načtení pod dvě sekundy je v nabídce garantované.
 *
 * DVA STAVY DODÁVKY (revize bod 25):
 *   · vlastní kresba — certificate, diploma, rings. Hotové, v accentu.
 *   · Lucide v šedé — zbytek. Drží mřížku ve správných proporcích, ale je
 *     vidět, že jde o zástupný tvar. Kresba dojde později.
 *
 * Ten rozdíl je záměrně vidět i v návrhu. Kdyby zástupné ikony jely v accentu
 * jako hotové, na odsouhlasení by nikdo nepoznal, co ještě chybí.
 */

const icons = {
  /* ---------- vlastní kresba ---------- */

  /** Listina s kulatou pečetí a stuhou — rodný a oddací list. */
  certificate: [
    "M16 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5",
    "M16 3l3 3",
    "M19 6v4",
    "M8 8h7",
    "M8 11.5h5",
    "M20.5 16a3.5 3.5 0 1 1-7 0 3.5 3.5 0 1 1 7 0",
    "M15.2 18.7 14 22l3-1.2 3 1.2-1.2-3.3",
  ],

  /** Akademický klobouk — diplom a nostrifikace. */
  diploma: [
    "M2 9 12 4l10 5-10 5L2 9Z",
    "M6 11.4V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.6",
    "M22 9v5.5",
  ],

  /** Dva prsteny s kamenem — tlumočení na svatbě a u notáře. */
  rings: [
    "M14 14a5 5 0 1 1-10 0 5 5 0 1 1 10 0",
    "M20 13a5 5 0 1 1-10 0 5 5 0 1 1 10 0",
    "M15 4.5 16.9 7.6h-3.8L15 4.5Z",
  ],

  /* ---------- zástupné tvary (Lucide), k překreslení ---------- */

  /** Štít s fajfkou — výpis z rejstříku trestů. */
  shieldCheck: [
    "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z",
    "m9 12 2 2 4-4",
  ],

  /** Listina s odstavci — smlouvy. */
  contract: [
    "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    "M14 2v4a2 2 0 0 0 2 2h4",
    "M8 13h8",
    "M8 17h5",
  ],

  /** Pero — plná moc. */
  signature: [
    "M12 20h9",
    "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",
  ],

  /** Budova — výpis z obchodního rejstříku. */
  registry: [
    "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
    "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
    "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
    "M10 6h4",
    "M10 10h4",
    "M10 14h4",
  ],

  /** Dvě listiny — ostatní úřední dokumenty. */
  documents: [
    "M20 7h-3a2 2 0 0 1-2-2V2",
    "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",
    "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",
  ],

  /* ---------- UI ---------- */

  /** Telefon. */
  phone: [
    "M13.83 19a11.9 11.9 0 0 1-8.83-8.83 2 2 0 0 1 1.72-2.15l1.6-.22a1 1 0 0 1 1.1.7l.7 2.2a1 1 0 0 1-.4 1.13l-.9.6a9 9 0 0 0 4 4l.6-.9a1 1 0 0 1 1.13-.4l2.2.7a1 1 0 0 1 .7 1.1l-.22 1.6A2 2 0 0 1 15 20a12 12 0 0 1-1.17-1Z",
  ],

  /** Obálka. */
  mail: [
    "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
    "m2 7 9.4 6.27a2 2 0 0 0 2.2 0L22 7",
  ],

  /** Nahrání souboru — drop zóna ve formuláři. */
  upload: [
    "M12 15V3",
    "m8 7 4-4 4 4",
    "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
  ],

  /** Kalkulačka / výpočet. */
  calculator: [
    "M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",
    "M8 6h8",
    "M16 14v.01",
    "M12 14v.01",
    "M8 14v.01",
    "M16 18v.01",
    "M12 18v.01",
    "M8 18v.01",
    "M8 10v.01",
    "M12 10v.01",
    "M16 10v.01",
  ],

  /** Listina s textem — normostrana. */
  fileText: [
    "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    "M14 2v4a2 2 0 0 0 2 2h4",
    "M10 9H8",
    "M16 13H8",
    "M16 17H8",
  ],

  /** Hodiny — rychlost a termín. */
  clock: [
    "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    "M12 6v6l4 2",
  ],

  /** Vážky — soudní tlumočení. */
  scale: [
    "M12 3v18",
    "M7 21h10",
    "M3 7h4c1.5 0 3.5-.6 5-1.5C13.5 6.4 15.5 7 17 7h4",
    "m5 7-3 8c.8.7 1.9 1 3 1s2.2-.3 3-1L5 7Z",
    "m19 7-3 8c.8.7 1.9 1 3 1s2.2-.3 3-1l-3-8Z",
  ],

  /** Auto — tlumočení pro autoškoly. */
  car: [
    "M3 17V10l2-5h10l3 5h3a1 1 0 0 1 1 1v6h-2",
    "M8 17h6",
    "M5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z",
    "M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z",
  ],

  /** Mikrofon — konsekutivní a simultánní tlumočení. */
  mic: [
    "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
    "M19 10v2a7 7 0 0 1-14 0v-2",
    "M12 19v3",
    "M8 22h8",
  ],
} as const;

export type IconName = keyof typeof icons;

/** Ikony, které už mají vlastní kresbu. Zbytek je Lucide, k překreslení. */
export const DRAWN_ICONS: readonly IconName[] = [
  "certificate",
  "diploma",
  "rings",
];

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-6", className)}
    >
      {icons[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
