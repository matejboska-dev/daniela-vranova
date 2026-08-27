import * as cs from "./home";
import * as en from "./home.en";

/**
 * ---------------------------------------------------------------------------
 * JAZYKOVÉ MUTACE
 * ---------------------------------------------------------------------------
 * `home.ts` je česká předloha a zároveň zdroj typu — anglická mutace
 * (`home.en.ts`) musí mít přesně stejnou strukturu klíčů, jinak to neprojde
 * typovou kontrolou. To je záměr: rozejít se obsahově dá, strukturně ne.
 *
 * `Widen` z české předlohy udělá obecný tvar: `label: "Kdo jsem"` (literál,
 * který vyrobí `as const`) se rozšíří na `label: string`, takže se anglická
 * verze smí lišit textem, ne tvarem. Bez toho by TypeScript trval na tom, že
 * i v EN mutaci stojí doslova "Kdo jsem".
 *
 * `readonly` u polí se schválně zachovává — `readonly T[]` není přiřaditelné
 * do `T[]`, takže by se bez toho každé pole z `as const` odmítlo.
 *
 * N-tice (`readonly [A, B, C]`, což z `as const` vyleze z každého pole) se
 * schválně nerozpouštějí na `readonly (A|B|C)[]`. Dvě věci by se tím rozbily:
 *
 *  · Sekce Cena a termín sahá na sloupce pozičně (`const [col1, col2, col3]`)
 *    a každý má jiné klíče — po rozpuštění na pole by TypeScript o pozicích
 *    nevěděl a hlásil by, že `metric` na prvním sloupci neexistuje.
 *  · Obě mutace tím musí mít stejně dlouhá pole. To je žádoucí: přidaná otázka
 *    v FAQ nebo krok navíc v procesu neprojde, dokud nepřibude i v druhé
 *    mutaci. Web s polovinou obsahu jen v jednom jazyce takhle nevznikne.
 * ---------------------------------------------------------------------------
 */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly [unknown, ...unknown[]]
        ? { [K in keyof T]: Widen<T[K]> }
        : T extends readonly (infer U)[]
          ? readonly Widen<U>[]
          : T extends object
            ? { [K in keyof T]: Widen<T[K]> }
            : T;

export type Locale = "cs" | "en";

/** Obecný tvar obsahu stránky, odvozený z české předlohy. */
export type Content = Widen<typeof cs>;

const dictionaries = { cs, en } satisfies Record<Locale, Content>;

/**
 * Obsah pro danou mutaci. Návratový typ je `Content`, ne sjednocení obou
 * modulů — komponenty tak pracují s jedním tvarem a nemusí řešit, že `.map()`
 * běží nad sjednocením dvou různě dlouhých `as const` polí.
 */
export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

/** Jazyky v přepínači. Pořadí drží pořadí v hlavičce. */
export const LOCALES: readonly Locale[] = ["cs", "en"];

/** Kořen mutace. Čeština sedí na kořeni webu, angličtina pod `/en`. */
export const localeHome: Record<Locale, string> = {
  cs: "/",
  en: "/en",
};
