import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { ChevronIcon } from "@/components/ui/ChevronIcon";
import { faq } from "@/content/home";

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
export function FaqSection() {
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

                <p className="max-w-measure pb-6 text-body">{item.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>

      <FaqStructuredData />
    </Section>
  );
}

/** Strukturovaná data FAQPage — generují se ze stejného zdroje jako texty výše. */
function FaqStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
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
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_20%,rgba(11,31,58,0.75)_0%,rgba(11,31,58,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(41,171,226,0.12)_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b1f3a] via-[#0b1f3a]/80 to-transparent" />
    </div>
  );
}
