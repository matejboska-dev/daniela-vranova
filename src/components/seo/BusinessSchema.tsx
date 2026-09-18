import { getContent, type Locale } from "@/content";
import { brand as csBrand, legal as csLegal } from "@/content/home";
import { SITE_URL, absoluteUrl } from "@/lib/site";

/**
 * ---------------------------------------------------------------------------
 * STRUKTUROVANÁ DATA – ProfessionalService (podtyp LocalBusiness)
 * ---------------------------------------------------------------------------
 * Řekne Googlu a AI vyhledávačům, kdo web provozuje, kde působí a jak se
 * ozvat. Doplňuje `FAQPage` schema ze sekce Časté dotazy.
 *
 * ADRESA: klientka si nepřeje veřejnou uličku (pracuje z domova). Schema
 * proto nese jen `addressLocality: "Praha 3"` a oblast působnosti, žádné
 * číslo popisné – shodně s tím, jak bude vypadat Google firemní profil
 * (service area business).
 *
 * Generuje se v obou mutacích; `inLanguage`, `url` a lidsky psané řetězce
 * se liší, `@id` je společné, aby Google obě mutace spároval jako jeden
 * subjekt.
 * ---------------------------------------------------------------------------
 */
export function BusinessSchema({ locale }: { locale: Locale }) {
  const { brand, reviewLinks } = getContent(locale);
  const en = locale === "en";
  const url = en ? absoluteUrl("/en") : absoluteUrl("/");
  const logoUrl = absoluteUrl(`/${en ? "logo-web-en.png" : "logo-web-cz.png"}`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#business`,
    /*
     * `name` musí být na obou mutacích stejný řetězec – sdílené `@id` říká
     * Googlu, že jde o jeden subjekt, a ten musí mít jeden kanonický název
     * (shodný s budoucím Google Business Profilem). Lokalizovaný název i
     * jméno klientky jdou do `alternateName`.
     */
    name: csBrand.name,
    alternateName: en ? [brand.name, brand.person] : [brand.person],
    description: brand.tagline,
    url,
    logo: logoUrl,
    image: logoUrl,
    inLanguage: locale,
    telephone: brand.phone.href.replace("tel:", ""),
    email: brand.email.href.replace("mailto:", ""),
    /* IČO je veřejný identifikátor z ARES, ne adresa – na rozdíl od ulice
       (viz komentář u `address` níž) nejde o údaj, který si klientka
       nepřeje zveřejnit, naopak ho zákon vyžaduje v patičce i v obchodních
       podmínkách (`legal.ico` v `content/home.ts`). */
    taxID: csLegal.ico,
    knowsLanguage: ["cs", "en"],
    areaServed: [
      { "@type": "City", name: en ? "Prague" : "Praha" },
      { "@type": "AdministrativeArea", name: en ? "Bohemia" : "Čechy" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Praha 3",
      addressRegion: en ? "Prague" : "Praha",
      addressCountry: "CZ",
    },
    founder: {
      "@type": "Person",
      name: brand.person,
      jobTitle: en
        ? "Court-appointed translator and interpreter for English"
        : "Soudní překladatelka a tlumočnice pro anglický jazyk",
    },
    sameAs: [
      brand.social.instagram.href,
      brand.social.linkedin.href,
      ...reviewLinks.map((link) => link.href),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
