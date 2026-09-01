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

/** TODO: potvrdit primární doménu (soudni-anglictina.cz / preklady-vranova.com / czech-translator.eu). */
export const SITE_URL = "https://www.soudni-anglictina.cz";

/** Přepnout na `true` při spuštění webu do světa. */
export const SITE_LAUNCHED = false;
