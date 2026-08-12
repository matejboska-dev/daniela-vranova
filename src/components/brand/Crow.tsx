import { cn } from "@/lib/cn";

/*
 * ---------------------------------------------------------------------------
 * VRÁNA A PEČEŤ — signature prvek značky (styleguide §7b)
 * ---------------------------------------------------------------------------
 * Kreslí se jedním tahem, aby fungovala od 16px favikony po tisk na vizitce.
 * Používá se přesně na třech místech, čtvrté je už dekorace:
 *
 *   A · oddělovač sekcí  → <CrowDivider>   tenká linka, uprostřed dvě křídla
 *   B · značka v pečeti  → <CrowSeal>      logo, favicon, štítek "ověřeno"
 *   C · kresba v hero    → <CrowDrawing>   vykreslí se jednou při načtení
 *
 * Zakázáno: vrána letící přes stránku při scrollu, vrána jako kurzor, vrána
 * v každé kartě, otočená, vyplněná, v jiné barvě než accent / ink / bílá,
 * a vrána s pečetí současně v jednom bloku.
 *
 * PEČEŤ VE TŘECH VELIKOSTECH (revize bod 23). Není to jeden soubor zmenšený
 * na třetinu — každá velikost má vlastní počet detailů, jinak se buď slije,
 * nebo působí prázdně:
 *
 *   variant="micro" (12–18 px)  kruh + zjednodušená dvě křídla.  Badge, štítky,
 *                               trust lišta. Vrána v plné kresbě by v téhle
 *                               velikosti byla šedá kaše.
 *   variant="mark"  (20–120 px) kruh + jednotahová vrána, bez textu.
 *                               Logo lockup v hlavičce, favicon.
 *   variant="full"  (120 px +)  dvojitý kruh + text po obvodu + vrána.
 *                               Patička, watermark v pozadí sekce.
 *
 * POZOR — tohle je pracovní značka, ne hotové logo. Stávající silueta v logu
 * klientky je racek, ne vrána (rozpětí a ostrý úhel křídel odpovídají mořskému
 * ptáku), proto je tady pták z profilu: kratší zaoblená křídla složená u těla
 * a klínovitý ocas. Finální kresba s texturou (rytina, hlubotisk) je samostatná
 * položka dodávky a čeká na odsouhlasení směru klientkou.
 * ---------------------------------------------------------------------------
 */

/*
 * Obrys vrány z profilu, sedící, hlavou vlevo. Soustava 120 × 100.
 *
 * Na tvaru záleží víc, než by se zdálo: stávající značka klientky nese siluetu
 * racka (dlouhé rozpětí, ostrý úhel křídel) a je to hlavní obhajitelný argument
 * pro redesign. Kdyby ho nová kresba zopakovala jiným ptákem, argument padá.
 *
 * Znaky, které z ptáka dělají vránu a musí zůstat: krátký silný klínovitý
 * zobák (ne dlouhý tenký, ten má ledňáček), zaoblená lebka plynule přecházející
 * do těla, krátká křídla složená podél hřbetu a klínovitý ocas směřující dolů
 * za tělo.
 */
const CROW_BODY =
  "M14 32 C20 29 24 27 30 26 C34 18 42 14 50 17 " +
  "C60 21 66 29 70 38 C76 50 82 58 90 64 " +
  "L112 76 L106 82 L84 74 " +
  "C74 72 62 70 54 64 C46 59 40 50 38 42 C36 38 32 35 26 34 Z";

/** Složené křídlo, vedené podél hřbetu. */
const CROW_WING = "M45 34 C57 37 71 47 87 63";

/** Nohy s prsty. */
const CROW_LEGS = "M58 67 L58 83 M67 68 L67 83";

/** Výřez, který vránu těsně obepíná — usnadňuje vsazení do pečeti. */
const CROW_VIEWBOX = "10 10 106 78";

/**
 * Dvě křídla vyrůstající z linky. Linka leží na y = 16, tedy v půlce výšky.
 * Slouží dvakrát: jako oddělovač sekcí a jako mikro-značka uvnitř pečeti.
 */
export const WINGS_PATH =
  "M0 16 C12 15.5 18 8 24 5.5 C28.5 3.6 31 8 32 15 " +
  "C33 8 35.5 3.6 40 5.5 C46 8 52 15.5 64 16";

/** Výřez, ve kterém jsou křídla vysázená. */
export const WINGS_VIEWBOX = "0 0 64 32";

/** Kresba vrány bez vlastního výřezu — vkládá se do většího SVG. */
function CrowPaths({ strokeWidth = 1.5 }: { strokeWidth?: number }) {
  return (
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      /* Tah drží stejnou tloušťku od favikony po hero. */
      vectorEffect="non-scaling-stroke"
    >
      <path d={CROW_BODY} vectorEffect="non-scaling-stroke" pathLength={1000} />
      <path d={CROW_WING} vectorEffect="non-scaling-stroke" pathLength={1000} />
      <path d={CROW_LEGS} vectorEffect="non-scaling-stroke" pathLength={1000} />
      <circle cx="37" cy="28" r="1.6" fill="currentColor" stroke="none" />
    </g>
  );
}

type CrowProps = {
  className?: string;
  strokeWidth?: number;
};

/** Samotná vrána. Nepoužívat přímo, jen přes varianty níže. */
export function Crow({ className, strokeWidth }: CrowProps) {
  return (
    <svg viewBox={CROW_VIEWBOX} aria-hidden="true" className={className}>
      <CrowPaths strokeWidth={strokeWidth} />
    </svg>
  );
}

/**
 * A · ODDĚLOVAČ SEKCÍ
 * Tenká linka mezi sekcemi se uprostřed zvedne do dvou křídel. Dělá práci
 * oddělovače a zároveň nese značku, takže to není prvek navíc.
 *
 * Revize bod 24: původní verze byla plachá — křídla 64 px široká tahem 1,5 px
 * se na šířce kontejneru 1240 px ztrácela. Rozpětí je teď 112 px, tah 1,75 px
 * a linky vedou v `--color-line-strong`, aby prvek nesl váhu předělu sekcí.
 */
export function CrowDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center text-accent", className)}
    >
      <span className="h-px flex-1 bg-line-strong" />
      <svg
        viewBox="0 0 64 32"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-14 w-28 shrink-0"
      >
        <path d={WINGS_PATH} vectorEffect="non-scaling-stroke" />
      </svg>
      <span className="h-px flex-1 bg-line-strong" />
    </div>
  );
}

type SealVariant = "micro" | "mark" | "full";

type CrowSealProps = {
  /** Viz hlavička souboru — micro 12–18 px, mark 20–120 px, full 120 px +. */
  variant?: SealVariant;
  /** Text po obvodu u varianty "full". */
  text?: string;
  className?: string;
};

const SEAL_TEXT = "SOUDNÍ TLUMOČNICE · JMENOVANÁ SOUDEM";

/**
 * B · ZNAČKA V PEČETI
 * Kulaté razítko soudního tlumočníka je jediný artefakt, který v tomhle oboru
 * existuje a nikde jinde ne. Tenký kruhový outline, uvnitř jednotahová vrána.
 * Veškerá odvaha designu se utrácí tady, zbytek je disciplinovaný a tichý.
 */
export function CrowSeal({
  variant = "mark",
  text = SEAL_TEXT,
  className,
}: CrowSealProps) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <g fill="none" stroke="currentColor">
        <circle
          cx="50"
          cy="50"
          r={variant === "micro" ? 46 : 47}
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
        />
        {variant === "full" ? (
          <circle
            cx="50"
            cy="50"
            r="37"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
        ) : null}
      </g>

      {variant === "micro" ? (
        /*
         * Mikro varianta: v 14 px se z vrány stane skvrna, proto uvnitř leží
         * jen dvě křídla z oddělovače. Značka zůstane rozpoznatelná i tam,
         * kde je pečeť velká jako písmeno.
         */
        <svg x="18" y="40" width="64" height="32" viewBox="0 0 64 32">
          <path
            d={WINGS_PATH}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      ) : variant === "full" ? (
        <>
          <defs>
            <path
              id="pecet-ring"
              d="M50 50 m-42 0 a42 42 0 1 1 84 0 a42 42 0 1 1 -84 0"
            />
          </defs>
          <text
            fill="currentColor"
            fontSize="6.2"
            fontWeight="500"
            letterSpacing="1.15"
          >
            <textPath href="#pecet-ring" startOffset="25%" textAnchor="middle">
              {text}
            </textPath>
          </text>
          {/* Vnořené SVG vsadí vránu doprostřed, ať se nepočítají transformy. */}
          <svg x="22" y="30" width="56" height="41" viewBox={CROW_VIEWBOX}>
            <CrowPaths strokeWidth={1.25} />
          </svg>
        </>
      ) : (
        <svg x="16" y="25" width="68" height="50" viewBox={CROW_VIEWBOX}>
          <CrowPaths strokeWidth={1.25} />
        </svg>
      )}
    </svg>
  );
}

/**
 * Pečeť jako watermark. Třetí velikost z revize bodu 23 — velká, potichu,
 * v pozadí plochy. Vždy `aria-hidden` a bez vlastního toku, takže nikde
 * neposouvá layout.
 */
export function SealWatermark({ className }: { className?: string }) {
  return (
    <CrowSeal
      variant="full"
      className={cn("pointer-events-none absolute select-none", className)}
    />
  );
}

/**
 * C · KRESBA V HERO
 * Tah se vykreslí jednou při načtení stránky, 900 ms, pak už se nehýbe.
 * Je to jediná animace tohoto typu na celém webu, proto funguje.
 * Při prefers-reduced-motion se vykreslí rovnou hotová.
 */
export function CrowDrawing({ className }: { className?: string }) {
  return <Crow className={cn("crow-draw", className)} />;
}
