import { Fragment } from "react";
import { TextLink } from "@/components/ui/Button";
import { getContent, type Locale } from "@/content";

/**
 * ODKAZY NA VEŘEJNÁ HODNOCENÍ — Firmy.cz a Expats.cz
 *
 * Revize 2. kolo, body 5.4 a 10.3. Stojí na dvou místech (pod výpisem
 * spolupracujících subjektů v Tlumočení a pod karuselem v Referencích), proto
 * je to sdílená komponenta nad jedním polem `reviewLinks` — dvě ručně psané
 * dvojice odkazů by se po první opravě URL rozešly.
 *
 * Vrací jen text s odkazy, žádný obal: volající si sám určí, do jakého
 * odstavce a jaké velikosti to sází. Spojka mezi posledními dvěma položkami
 * je " a ", mezi ostatními čárka — kvůli případnému třetímu portálu.
 */
export function ReviewLinks({ locale }: { locale: Locale }) {
  const { reviewLinks } = getContent(locale);

  return (
    <>
      {reviewLinks.map((link, i) => (
        <Fragment key={link.href}>
          {i > 0 ? (i === reviewLinks.length - 1 ? " a " : ", ") : null}
          <TextLink
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </TextLink>
        </Fragment>
      ))}
    </>
  );
}
