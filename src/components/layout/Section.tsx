import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  /** Kotva do URL, např. "sluzby" → /#sluzby */
  id: string;
  /**
   * Plocha sekce. "deep" je sjednocená navy, na které jede celá stránka
   * (`--color-deep`, shodná s hero a patičkou).
   *
   * Dřív tu byla ještě varianta "navy" s druhým, sytějším tónem
   * (`--color-deep-alt`) pro alternující rytmus bílá / modrá. Ten rytmus
   * zadání opustilo (viz `page.tsx`) a variantu nepoužila ani jedna sekce.
   */
  tone?: "default" | "alt" | "deep";
  /**
   * "default" obsahové sekce · "band" nižší pásy · "compact" nejnižší pás.
   * Konkrétní hodnoty viz `spacingStyles` níž.
   */
  spacing?: "default" | "band" | "compact";
  /** Id nadpisu sekce pro aria-labelledby. */
  labelledBy?: string;
  children: ReactNode;
  className?: string;
};

const toneStyles = {
  default: "bg-surface",
  alt: "bg-alt",
  /* Třída on-deep přepne display font na váhu 500 a barvu focus ringu. */
  deep: "on-deep bg-deep text-on-deep-2",
} as const;

/*
 * VERTIKÁLNÍ RYTMUS (revize bod 19)
 *
 * `--section-y` je rozestup MEZI sekcemi, ne odsazení jedné z nich: 96 px
 * mobil, 128 px tablet, 160 px desktop. Sekce si proto bere polovinu nahoře
 * a polovinu dole a se sousedem dá dohromady přesně tu hodnotu.
 *
 * Dřív brala sekce celých 160 px na každé straně, takže mezi dvěma sekcemi
 * bylo 320 px. Rytmus ze styleguidu tím neplatil nikde na stránce a rozdíly
 * mezi pásy a sekcemi šly vidět na první pohled.
 */
const spacingStyles = {
  default: "py-[calc(var(--section-y)/2)]",
  /* Pásy jsou vědomě těsnější — nejsou to sekce, ale lišty mezi nimi. */
  band: "py-12 md:py-16",
  compact: "py-8 md:py-10",
} as const;

/** Obal jedné sekce stránky — řeší pozadí, vertikální rytmus a šířku obsahu. */
export function Section({
  id,
  tone = "default",
  spacing = "default",
  labelledBy,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        // Odsazení kotvy o výšku přilepené hlavičky.
        "scroll-mt-[var(--header-h)]",
        toneStyles[tone],
        spacingStyles[spacing],
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
