/**
 * ---------------------------------------------------------------------------
 * ADRESA WEBU A STAV SPUŠTĚNÍ
 * ---------------------------------------------------------------------------
 * Jediné místo, kde se to nastavuje.
 *
 * `SITE_LAUNCHED` je vypínač spuštění. Dokud je `false`, web se chová jako
 * neveřejný náhled:
 *   · `robots.ts` zakáže crawlerům celý web
 *   · meta `robots` v obou layoutech drží `noindex, nofollow`
 *   · `sitemap.ts` vrací prázdno
 *   · OG a strukturovaná data se generují dál (ať jdou ověřit), jen se
 *     na ně z venku nikdo nedostane
 *
 * Při spuštění:
 *   1. potvrdit `SITE_URL` (finální doména – viz checklist bod 13)
 *   2. přepnout `SITE_LAUNCHED` na `true`
 * a indexace se zapne na jednom místě.
 * ---------------------------------------------------------------------------
 */

/** Primární doména bez `www`; varianta s `www` na ni přesměrovává. */
export const SITE_URL = "https://soudni-anglictina.cz";

/** Produkční web je veřejný a připravený k indexaci. */
export const SITE_LAUNCHED = true;

/**
 * Absolutní URL dané cesty na aktuální doméně (`SITE_URL`).
 *
 * Jediné místo, které skládá absolutní adresy – `sitemap.ts` i
 * `BusinessSchema.tsx` dřív stavěly URL kořene ručně jako `${SITE_URL}/`,
 * zatímco `alternates.canonical: "/"` se přes `metadataBase` vyrenderuje bez
 * koncového lomítka. Sitemapa a strukturovaná data tak ukazovaly na jinou URL
 * než `<link rel="canonical">` na téže stránce. Kořen (`"/"`) proto vrací
 * `SITE_URL` bez lomítka, shodně s tím, jak si lomítko odstraní Next; každá
 * jiná cesta (např. `"/en"`) se připojí za doménu beze změny.
 */
export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
