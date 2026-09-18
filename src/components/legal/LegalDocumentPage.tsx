import { Fragment } from "react";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import type { Locale } from "@/content";
import type { LegalDocument } from "@/content/legal";

/**
 * SPOLEČNÁ KOSTRA právních podstránek (Ochrana osobních údajů, Obchodní
 * podmínky). Komponenta obsluhuje českou i anglickou mutaci; jazyk přepíná
 * navigaci, patičku a popisky dokumentu.
 *
 * Plocha jede na jednom `bg-deep` bez střídání s `deep-light` (na rozdíl od
 * `HomePage.tsx`): je to jeden souvislý dokument ke čtení od začátku do
 * konce, ne sled tematicky oddělených sekcí, takže střídání pásů by čtení
 * spíš tříštilo. Navy základ zůstává – `body` v `globals.css` je navy
 * záměrně na celém webu (klientčina zpětná vazba 23. 8. 2026), bílá plocha
 * přes celou stránku by tenhle záměr porušila.
 *
 * Horní odsazení kopíruje `HeroSection.tsx` (`pt-[calc(var(--header-h)+…)]`),
 * jediné další místo, kde obsah začíná hned pod pevnou hlavičkou.
 */
export function LegalDocumentPage({
  doc,
  locale = "cs",
}: {
  doc: LegalDocument;
  locale?: Locale;
}) {
  const copy =
    locale === "en"
      ? { effective: "Effective from", contents: "Contents" }
      : { effective: "Účinné od", contents: "Obsah dokumentu" };

  return (
    <>
      <SiteHeader locale={locale} />

      <main className="on-deep bg-deep pb-24 pt-[calc(var(--header-h)+2.5rem)] text-on-deep-2 lg:pb-32 lg:pt-[calc(var(--header-h)+4rem)]">
        <Container className="max-w-[calc(720px+var(--page-x)*2)]">
          <SectionLabel>{doc.eyebrow}</SectionLabel>

          <h1 className="mt-6 text-h1 text-on-deep">{doc.title}</h1>

          <p className="mt-4 text-small">
            {copy.effective} {doc.updated}
          </p>

          <div className="mt-8 max-w-measure space-y-4 text-body">
            {doc.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <nav aria-label={copy.contents} className="mt-10 border-y border-on-deep-line py-6">
            <ol className="flex flex-wrap gap-x-6 gap-y-2 text-small">
              {doc.sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="transition-colors duration-150 hover:text-brand-soft"
                  >
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 space-y-12 lg:space-y-14">
            {doc.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-title`}
                className="scroll-mt-[calc(var(--header-h)+1rem)]"
              >
                <h2 id={`${section.id}-title`} className="text-h3 text-on-deep">
                  {section.title}
                </h2>

                <div className="mt-4 max-w-measure space-y-4 text-body">
                  {section.paragraphs?.map((paragraph, index) => (
                    <Fragment key={paragraph}>
                      <p>{paragraph}</p>

                      {/* Seznam patří za poslední odstavec, který ho uvádí
                          (viz "Cena a způsob úhrady" v `content/legal.ts`,
                          kde odstavec s dvojtečkou stojí až jako druhý). */}
                      {index === section.paragraphs!.length - 1 && section.list ? (
                        <ul className="list-disc space-y-2 pl-5 marker:text-on-deep-accent">
                          {section.list.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </Fragment>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
