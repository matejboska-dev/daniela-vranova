import { WINGS_PATH, WINGS_VIEWBOX } from "./Crow";
import { cn } from "@/lib/cn";

/*
 * ---------------------------------------------------------------------------
 * ANATOMIE OVĚŘENÉHO PŘEKLADU — bespoke nákresy (revize body 21 a 22)
 * ---------------------------------------------------------------------------
 * Dva rozložené nákresy: listinný svázaný překlad a jeho digitální dvojče.
 * Šest očíslovaných popisků, tah 1,5 px v accentu na bílé.
 *
 * Obě varianty kreslí JEDNA komponenta se sdíleným lešením — listy, jejich
 * odsazení, pozice značek i sazba legendy jsou v obou nákresech doslova
 * tytéž souřadnice. Kdyby to byly dva soubory, po první opravě by se
 * rozešly a druhý nákres by přestal vypadat jako dvojče prvního.
 *
 * Rozdíl je jen v tom, co drží dokument pohromadě:
 *   listinný  →  šňůrka, kulaté razítko, přelepka s podpisem
 *   digitální →  řetěz podpisu, elektronická pečeť, časové razítko
 *
 * Legenda NENÍ v SVG. Text uvnitř nákresu se škáluje s ním, a na kartě široké
 * 350 px (mobil 390 px) by z jedenáctibodového popisku zbylo 9,6 px. Legenda
 * proto jede jako <figcaption> v HTML: drží typografickou škálu na všech
 * šířkách, jde ji označit, přečte ji čtečka a v anglické mutaci se překládá
 * jako každý jiný text. V SVG zůstávají jen čísla u kresby.
 * ---------------------------------------------------------------------------
 */

/* ---------- sdílené lešení: tři odsazené listy ---------- */

const SHEET_W = 126;
const SHEET_H = 132;

/** Listy jdou zezadu doprava nahoru, přední list je vlevo dole. */
const SHEETS = [
  { x: 176, y: 14 }, // 1 · originál nebo jeho sken
  { x: 152, y: 36 }, // 2 · překlad
  { x: 128, y: 58 }, // 3 · doložka
];

/** Pozice očíslovaných značek. V obou nákresech shodné. */
const MARKERS = [
  { n: 1, x: 332, y: 24, to: [302, 24] },
  { n: 2, x: 332, y: 76, to: [278, 76] },
  { n: 3, x: 332, y: 128, to: [254, 128] },
  { n: 4, x: 300, y: 184, to: [236, 166] },
  { n: 5, x: 86, y: 50, to: [124, 66] },
  { n: 6, x: 72, y: 178, to: [104, 156] },
] as const;

type Variant = "paper" | "digital";

/** Popisky v pořadí čísel 1 až 6. */
const LABELS: Record<Variant, readonly string[]> = {
  paper: [
    "Ověřená kopie nebo originál",
    "Překlad",
    "Tlumočnická doložka",
    "Kulaté razítko",
    "Šňůrka",
    "Přelepka s podpisem",
  ],
  digital: [
    "Sken originálu",
    "Překlad",
    "Tlumočnická doložka",
    "Kvalifikovaný elektronický podpis",
    "Kvalifikované časové razítko",
    "Jedno PDF, doručené e-mailem",
  ],
};

const TITLES: Record<Variant, string> = {
  paper: "Anatomie listinného svázaného překladu",
  digital: "Anatomie digitálního ověřeného překladu",
};

/** Linkování textu uvnitř listu — ať list čte jako dokument, ne jako rámeček. */
function RuledLines({ x, y }: { x: number; y: number }) {
  const rows = [26, 40, 54, 68, 82, 96];

  return (
    <g strokeOpacity={0.32}>
      {rows.map((offset, index) => (
        <line
          key={offset}
          x1={x + 16}
          y1={y + offset}
          x2={x + SHEET_W - (index === rows.length - 1 ? 52 : 16)}
          y2={y + offset}
        />
      ))}
    </g>
  );
}

function Sheet({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={SHEET_W}
        height={SHEET_H}
        rx={3}
        fill="var(--color-surface)"
      />
      <RuledLines x={x} y={y} />
    </g>
  );
}

function Marker({ n, x, y, to }: { n: number; x: number; y: number; to: readonly number[] }) {
  return (
    <g>
      <line
        x1={x + (to[0] > x ? 10 : -10)}
        y1={y}
        x2={to[0]}
        y2={to[1]}
        strokeOpacity={0.45}
      />
      <circle cx={x} cy={y} r={11} fill="var(--color-surface)" />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
        fontWeight={500}
        stroke="none"
        fill="currentColor"
      >
        {n}
      </text>
    </g>
  );
}

/**
 * Legenda pod nákresem. Dva sloupce od 640 px výš, na mobilu jeden — šest
 * dvousloupcových popisků na 350px kartě by se lámalo po dvou slovech.
 */
function Legend({ variant }: { variant: Variant }) {
  return (
    <figcaption className="mt-6">
      <ol className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
        {LABELS[variant].map((label, index) => (
          <li key={label} className="flex items-start gap-2.5 text-small text-ink-2 [.on-deep_&]:text-on-deep-2">
            <span
              aria-hidden="true"
              className="mt-px flex size-5 shrink-0 items-center justify-center rounded-full border border-accent text-[11px] font-medium leading-none text-accent [.on-deep_&]:border-on-deep-accent [.on-deep_&]:text-on-deep-accent"
            >
              {index + 1}
            </span>
            {label}
          </li>
        ))}
      </ol>
    </figcaption>
  );
}

/* ---------- co drží dokument pohromadě: listinná varianta ---------- */

function PaperBinding() {
  return (
    <g>
      {/* 5 · šňůrka — prochází průvlekem v levém horním rohu a mizí
          pod přelepkou. Kreslí se před přelepkou, aby ji přelepka zakryla. */}
      <circle cx={140} cy={72} r={3.5} fill="none" />
      <path d="M140 72 C124 80 110 98 110 118 C110 133 119 142 130 142" fill="none" />
      <path d="M144 76 C130 86 118 100 118 118 C118 130 124 137 132 138" fill="none" strokeOpacity={0.5} />

      {/*
       * 4 · kulaté razítko — v obou nákresech na stejném místě a se stejným
       * poloměrem. Uvnitř leží křídla ze značky, ne křížek: razítko soudního
       * tlumočníka nese jeho jméno a symbol, ne zaměřovací kříž.
       */}
      <circle cx={218} cy={160} r={19} fill="var(--color-surface)" />
      <circle cx={218} cy={160} r={14} fill="none" strokeOpacity={0.5} />
      <svg x={205} y={156} width={26} height={13} viewBox={WINGS_VIEWBOX}>
        <path
          d={WINGS_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* 6 · přelepka s podpisem */}
      <rect x={100} y={120} width={60} height={40} rx={2} fill="var(--color-surface)" />
      <path
        d="M110 146 c6-10 10-12 13-6 c2 5 5 6 9 1 c3-4 7-3 11 3"
        fill="none"
      />
      <line x1={110} y1={132} x2={140} y2={132} strokeOpacity={0.32} />
    </g>
  );
}

/* ---------- co drží dokument pohromadě: digitální dvojče ---------- */

function DigitalBinding() {
  return (
    <g>
      {/* 5 · kvalifikované časové razítko — hodiny sedí přesně tam,
          kde má listinná varianta průvlek šňůrky */}
      <circle cx={140} cy={72} r={13} fill="var(--color-surface)" />
      <path d="M140 65 v7 l5 4" fill="none" />

      {/* Řetěz podpisu vede stejnou trasou jako šňůrka, jen přerušovaně —
          spojení je matematické, ne fyzické. */}
      <path
        d="M140 85 C124 96 110 104 110 118 C110 133 119 142 130 142"
        fill="none"
        strokeDasharray="1 6"
        strokeLinecap="round"
      />

      {/* 4 · elektronická pečeť — kruh o stejném poloměru jako razítko */}
      <circle cx={218} cy={160} r={19} fill="var(--color-surface)" />
      <circle
        cx={218}
        cy={160}
        r={14}
        fill="none"
        strokeOpacity={0.5}
        strokeDasharray="2 4"
      />
      <path d="M211 160 l5 5 l10 -10" fill="none" />

      {/* 6 · jedno PDF — tam, kde listinná varianta nese přelepku */}
      <path
        d="M100 122 h44 l16 16 v20 a2 2 0 0 1 -2 2 h-56 a2 2 0 0 1 -2 -2 v-34 a2 2 0 0 1 2 -2 z"
        fill="var(--color-surface)"
      />
      <path d="M144 122 v14 a2 2 0 0 0 2 2 h14" fill="none" />
      <text
        x={112}
        y={152}
        fontSize={11}
        fontWeight={500}
        stroke="none"
        fill="currentColor"
        letterSpacing="0.5"
      >
        PDF
      </text>
    </g>
  );
}

type AnatomyProps = {
  variant: Variant;
  className?: string;
};

/**
 * Rozložený nákres jedné z variant ověření. Kreslí se na bílé, proto patří
 * do karty s `--color-surface` pozadím, ne na `--color-alt`.
 */
export function Anatomy({ variant, className }: AnatomyProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-xl border border-line bg-surface p-6 md:p-8 text-accent [.on-deep_&]:border-white/15 [.on-deep_&]:bg-white/[0.05] [.on-deep_&]:backdrop-blur-xl",
        className
      )}
    >
      {/* Výřez končí na 200 — legenda je pod ním v HTML, ne v SVG. */}
      <svg
        viewBox="0 0 400 200"
        role="img"
        aria-label={TITLES[variant]}
        className="h-auto w-full"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {SHEETS.map((sheet) => (
            <Sheet key={sheet.x} x={sheet.x} y={sheet.y} />
          ))}

          {variant === "paper" ? <PaperBinding /> : <DigitalBinding />}

          {MARKERS.map((marker) => (
            <Marker key={marker.n} {...marker} />
          ))}
        </g>
      </svg>

      <Legend variant={variant} />
    </figure>
  );
}
