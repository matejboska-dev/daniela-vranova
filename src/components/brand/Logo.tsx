import { cn } from "@/lib/cn";
import {
  LOGO_BLOCK,
  LOGO_TYPE,
  LOGO_VIEWBOX,
  WING_PATH,
  type LogoLocale,
} from "./LogoMark";

type LogoTone = "on-deep" | "on-light";

type LogoProps = {
  href?: string;
  /** "sm" hlavička (40 px výška), "lg" patička (64 px výška). */
  size?: "sm" | "lg";
  /** Jazyková mutace wordmarku: `cs` = PŘEKLADY, `en` = TRANSLATIONS. */
  locale?: LogoLocale;
  /**
   * Na jaké ploše logo leží. `on-deep` (výchozí) je obrácená varianta pro
   * tmavě modré plochy webu — hlavička i patička na `--color-deep` jedou vždycky
   * na ní. `on-light` je základní navy značka pro bílé plochy a pro tisk.
   */
  tone?: LogoTone;
  className?: string;
  onClick?: () => void;
};

/**
 * ---------------------------------------------------------------------------
 * LOGO — vektorová značka klientky
 * ---------------------------------------------------------------------------
 * Revize (klientčin brief, 23. 8. 2026):
 *
 *  1. Žádná z dřív navržených AI variant (pečeť s vránou, viz `Crow.tsx`)
 *     se jako logo nepoužívá. Platí původní klientčino logo — blok, dvě slova
 *     pod sebou a kaligrafická nerovná křivka (racek), která mezi nimi
 *     prochází.
 *  2. Světlá modrá z původního loga (#008ACD) je pryč, blok je v navy. Navy
 *     se nevymýšlí nová: je to doslova `--color-deep` (#0B1F3A), tedy tentýž
 *     odstín, na kterém leží celý web, aby vedle sebe neseděly dvě různé modré.
 *  3. Přibyla anglická mutace wordmarku (TRANSLATIONS / VRÁNOVÁ) na stejném
 *     místě a ve stejném stylu jako česká. V logu není a nikdy nebyla URL.
 *
 * PROČ INLINE SVG A NE `<img>`: wordmark je živý text (`<text>`), takže se sází
 * webovým písmem stránky (DM Sans z `next/font`) a při přepnutí mutace se mění
 * jen řetězec, ne bitmapa. Zároveň barvy jedou z návrhových tokenů, takže se
 * značka nemůže rozejít se zbytkem webu. Původní `public/logo.png` (rastr,
 * 250 × 144, světle modrá) se na webu už nikde nepoužívá; zůstává v repu jen
 * jako podklad, ze kterého je křivka obtažená.
 *
 * DVOUBLOKOVÁ SKLADBA: původní logo mělo modrý blok nahoře a černý dole. Po
 * přebarvení na jednu navy by dva skoro černé bloky vedle sebe působily jako
 * chyba tisku, proto je blok jeden. Předěl mezi slovy dělá sama křivka — přesně
 * tam, kde vedla hranice bloků, takže skladba loga zůstává čitelná.
 *
 * DVĚ POLOHY BAREV, jedna značka:
 *
 *   `on-light`  ZÁKLADNÍ (tisk, bílé plochy). Navy blok, bílá slova, křivka
 *               navy vně bloku a bílá uvnitř — křivka je čitelná po celé délce
 *               bez ohledu na to, přes co zrovna jde.
 *
 *   `on-deep`   OBRÁCENÁ, pro tmavě modré plochy webu (hlavička, patička).
 *               Blok se nekreslí vůbec: leží na `--color-deep`, takže by na
 *               `--color-deep` ploše stejně nebyl vidět a pod poloprůhlednou
 *               skleněnou hlavičkou by navíc dělal neprůhlednou skvrnu. Zbyde
 *               wordmark a křivka v bílé, tedy přesně to, co značku dělá
 *               poznatelnou. Plná bílá deska se zkoušela a nefunguje — křivka
 *               se na hranách bloku láme do šachovnice a přestane číst jako
 *               jeden tah.
 * ---------------------------------------------------------------------------
 */

/* Přirozený poměr stran značky (250 × 144), shodný s původním PNG. */
const dimensions = {
  sm: { width: 69, height: 40 },
  lg: { width: 111, height: 64 },
} as const;

/*
 * "sm" (hlavička) se pod `sm` breakpointem (640 px) zmenší na 32 px výšky —
 * na úzkém mobilu si logo napevno vykreslené na 40 px bralo zbytečně moc
 * místa vedle přepínače jazyka a hamburgeru. "lg" (patička) zůstává pevná,
 * tam prostor není omezený.
 */
const svgSizeClassName = {
  sm: "h-8 w-auto sm:h-10",
  lg: "h-16 w-auto",
} as const;

const labels = {
  cs: { alt: "Překlady Vránová", home: "Překlady Vránová – na úvod" },
  en: { alt: "Translations Vránová", home: "Translations Vránová – home" },
} as const;

export function Logo({
  href = "#uvod",
  size = "sm",
  locale = "cs",
  tone = "on-deep",
  className,
  onClick,
}: LogoProps) {
  const { width, height } = dimensions[size];

  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={labels[locale].home}
      className={cn("flex shrink-0 items-center", className)}
    >
      <LogoMark
        locale={locale}
        tone={tone}
        width={width}
        height={height}
        className={svgSizeClassName[size]}
      />
    </a>
  );
}

/**
 * Samotná značka bez odkazu. Hodí se všude, kde logo není navigační prvek
 * (tiskové podklady, náhledy, dokumentace).
 */
export function LogoMark({
  locale = "cs",
  tone = "on-deep",
  width,
  height,
  className,
  title,
}: {
  locale?: LogoLocale;
  tone?: LogoTone;
  width?: number;
  height?: number;
  className?: string;
  title?: string;
}) {
  /*
   * Navy jde přes CSS proměnnou, ne přes literál — `--color-deep` je tentýž
   * token, na kterém leží plochy celého webu, takže se navy v logu a navy na
   * stránce nemůžou rozejít (bod 3 briefu).
   */
  const onDeep = tone === "on-deep";
  const navy = "var(--color-deep)";
  /** Barva slov: na tmavé ploše bílá, na světlé bílá vykrojená do navy bloku. */
  const type = "#fff";

  const top = LOGO_TYPE.top[locale];
  const bottom = LOGO_TYPE.bottom[locale];

  return (
    <svg
      viewBox={`0 0 ${LOGO_VIEWBOX.width} ${LOGO_VIEWBOX.height}`}
      width={width}
      height={height}
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {onDeep ? (
        /* Obrácená varianta: blok se nekreslí, celá křivka jde v bílé. */
        <path d={WING_PATH} fill={type} />
      ) : (
        <>
          <rect {...LOGO_BLOCK} fill={navy} />

          {/* Křivka vně bloku; uvnitř ji hned přebije bílá kopie níž. */}
          <path d={WING_PATH} fill={navy} />

          {/*
           * Křivka uvnitř bloku, vykrojená do bílé. Ořez dělá vnořené `<svg>`,
           * které si samo tvoří viewport přesně na rozměrech bloku — proti
           * `<clipPath>` to nepotřebuje `id`, takže se logo dá na stránku
           * vykreslit vícekrát (hlavička, mobilní menu, patička) bez kolize
           * identifikátorů.
           */}
          <svg
            x={LOGO_BLOCK.x}
            y={LOGO_BLOCK.y}
            width={LOGO_BLOCK.width}
            height={LOGO_BLOCK.height}
            viewBox={`${LOGO_BLOCK.x} ${LOGO_BLOCK.y} ${LOGO_BLOCK.width} ${LOGO_BLOCK.height}`}
          >
            <path d={WING_PATH} fill={type} />
          </svg>
        </>
      )}

      <g
        fill={type}
        fontWeight={400}
        /* Verzálky jsou v logu vysázené natvrdo, ne přes `text-transform`. */
        textAnchor="start"
        /*
         * Rodina písma jde přes `style`, ne přes prezentační atribut — `var()`
         * je v prezentačních atributech nespolehlivá, v inline stylu ne.
         */
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <text
          x={LOGO_TYPE.x}
          y={top.baseline}
          fontSize={top.fontSize}
          textLength={LOGO_TYPE.length}
          lengthAdjust="spacing"
        >
          {top.text}
        </text>

        <text
          x={LOGO_TYPE.x}
          y={bottom.baseline}
          fontSize={bottom.fontSize}
          textLength={LOGO_TYPE.length}
          lengthAdjust="spacing"
        >
          {bottom.text}
        </text>
      </g>
    </svg>
  );
}
