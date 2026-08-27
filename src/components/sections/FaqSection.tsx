import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { ChevronIcon } from "@/components/ui/ChevronIcon";
import { getContent, type Locale } from "@/content";

/**
 * ČASTÉ DOTAZY
 *
 * Jádro briefu: web má odpovědět místo klientky na "co to obnáší, co to stojí,
 * jak dlouho to trvá". Kontaktní formulář není náhrada za chybějící informaci,
 * proto sekce stojí před ním.
 *
 * Revize bod 14: šest otázek s velkým rozestupem dělalo z nejužitečnější
 * sekce prázdnou stránku. Teď jich je dvanáct, sloupec je zúžený na 900 px
 * a řádky sedí těsněji. Otevřená otázka dostane podklad `--accent-soft`, ať
 * je při procházení vidět, kde člověk je.
 *
 * Rozbalování stojí na <details>, takže funguje bez JavaScriptu. Součástí je
 * i FAQPage JSON-LD kvůli dohledatelnosti v Google AI Overview a ChatGPT
 * (AEO dle nabídky CN-2026-014).
 *
 * Sekce jede na tmavě modré ploše (tone="navy"), proto má otevřený stav,
 * nadpisy i linky vlastní `[.on-deep_&]:` variantu — bez ní by `--accent-soft`
 * a tmavý text zmizely na tmavém pozadí.
 */
export function FaqSection({ locale }: { locale: Locale }) {
  const { faq } = getContent(locale);

  return (
    <Section
      id="faq"
      tone="deep"
      labelledBy="faq-title"
      className="relative isolate overflow-hidden"
    >
      <FaqBackdrop />
      <div className="mx-auto max-w-[900px]">
        <SectionLabel align="center">{faq.label}</SectionLabel>

        <h2
          id="faq-title"
          className="mt-6 text-center text-h2 text-ink [.on-deep_&]:text-on-deep"
        >
          {faq.title}
        </h2>

        <ul className="mt-12">
          {faq.items.map((item) => (
            <li key={item.id}>
              {/*
               * Vodorovné odsazení má i zavřený stav, jen průhledné. Kdyby ho
               * dostal až otevřený, text by při rozbalení odskočil do strany.
               */}
              <details className="group -mx-5 rounded-md border-b border-line px-5 transition-colors duration-200 ease-micro open:bg-accent-soft [.on-deep_&]:border-on-deep-line [.on-deep_&]:open:bg-white/8">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-h3 text-ink group-open:text-accent-ink [.on-deep_&]:text-on-deep [.on-deep_&]:group-open:text-on-deep-accent">
                    {item.question}
                  </h3>

                  <ChevronIcon
                    direction="down"
                    className="size-5 shrink-0 text-ink-muted transition-transform duration-300 ease-micro group-open:rotate-180 group-open:text-accent [.on-deep_&]:text-on-deep-2 [.on-deep_&]:group-open:text-on-deep-accent"
                  />
                </summary>

                <div className="max-w-measure pb-6">
                  <p className="text-body">{item.answer}</p>

                  {"details" in item && item.details ? (
                    <FaqDetails details={item.details} />
                  ) : null}

                  {"disclaimer" in item && item.disclaimer ? (
                    <p className="mt-5 text-small text-ink-muted [.on-deep_&]:text-on-deep-2">
                      {item.disclaimer}
                    </p>
                  ) : null}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>

      <FaqStructuredData locale={locale} />
    </Section>
  );
}

/**
 * Rozpad odpovědi na podpoložky — zatím jen u formátů ověřeného překladu
 * (bod 5 klientčina briefu). Čtyři formáty na jeden odstavec by splynuly
 * v souvislý text; tady mají vlastní titulek a jsou od sebe oddělené linkou,
 * stejně jako položky v `PricingSection`.
 */
function FaqDetails({
  details,
}: {
  details: readonly { title: string; text: string }[];
}) {
  return (
    <ol className="mt-5 space-y-4">
      {details.map((detail, i) => (
        <li
          key={detail.title}
          className="border-t border-line pt-4 first:border-t-0 first:pt-0 [.on-deep_&]:border-on-deep-line"
        >
          <p className="flex gap-3 text-body font-medium text-ink [.on-deep_&]:text-on-deep">
            <span
              aria-hidden="true"
              className="util shrink-0 text-accent [.on-deep_&]:text-on-deep-accent"
            >
              0{i + 1}
            </span>
            {detail.title}
          </p>
          <p className="mt-2 text-body">{detail.text}</p>
        </li>
      ))}
    </ol>
  );
}

/** Strukturovaná data FAQPage — generují se ze stejného zdroje jako texty výše. */
function FaqStructuredData({ locale }: { locale: Locale }) {
  const { faq } = getContent(locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => {
      const detailsText =
        "details" in item && item.details
          ? " " +
            item.details
              .map((detail) => `${detail.title}: ${detail.text}`)
              .join(" ")
          : "";
      const disclaimerText =
        "disclaimer" in item && item.disclaimer ? " " + item.disclaimer : "";

      return {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer + detailsText + disclaimerText,
        },
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Pozadí sekce — sytá tmavá navy plocha s radial gradientem pro tekutý "navy liquid glassy" efekt.
 */
function FaqBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep">
      <div className="absolute inset-0 section-veil" />
      <div className="absolute inset-0 section-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep via-deep/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep via-deep/80 to-transparent" />
    </div>
  );
}
