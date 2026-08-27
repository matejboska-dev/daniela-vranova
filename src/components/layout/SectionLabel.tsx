import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionLabelProps = {
  /** Používá se v `aria-labelledby` nadřazené sekce. */
  id?: string;
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/**
 * Eyebrow — malý prostrkaný nadpisek nad sekcí, DM Sans 500 verzálkami.
 *
 * JEDEN styl na celém webu (revize bod 18): vždy vlásková linka vlevo, vždy
 * v accentu. Dřív měla část eyebrow linku a část ne, a linka jela ve Sky —
 * ta se teď na stránce objevuje jedině v gradientu nad hero videem.
 *
 * U zarovnání na střed leží linka po obou stranách, aby popisek nesedl mimo
 * osu. Je to pořád stejný prvek, jen symetricky.
 *
 * Revize 2. kolo, bod 12: linka i text jedou v barvě z loga. Eyebrow je na
 * stránce dvanáctkrát, takže jedna změna tady obarví celý svislý rytmus webu,
 * aniž by se sáhlo na tlačítka, pozadí nebo fotky. Text měl dřív `--ink-muted`
 * / `--on-deep-2`, tedy šeď — právě ta dělala z webu „smutnou" stránku.
 */
export function SectionLabel({
  id,
  children,
  align = "left",
  className,
}: SectionLabelProps) {
  const rule = (
    <span
      aria-hidden="true"
      className="h-px w-6 shrink-0 bg-brand [.on-deep_&]:bg-brand-soft"
    />
  );

  return (
    <p
      id={id}
      className={cn(
        "util flex items-center gap-3 text-brand-deep [.on-deep_&]:text-brand-soft",
        align === "center" && "justify-center",
        className,
      )}
    >
      {rule}
      {children}
      {align === "center" ? rule : null}
    </p>
  );
}
