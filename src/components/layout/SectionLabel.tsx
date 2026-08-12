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
      className="h-px w-6 shrink-0 bg-accent [.on-deep_&]:bg-on-deep-accent"
    />
  );

  return (
    <p
      id={id}
      className={cn(
        "util flex items-center gap-3 text-ink-muted [.on-deep_&]:text-on-deep-2",
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
