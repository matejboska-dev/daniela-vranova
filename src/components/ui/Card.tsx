import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  /** Klikatelné karty mají hover, ostatní ne — jinak hover jen mate. */
  interactive?: boolean;
  padding?: "default" | "compact" | "tight" | "none";
  className?: string;
  /**
   * Pro čistě vizuální duplikáty (druhá polovina marquee smyčky v Referencích),
   * které čtečka nemá číst podruhé.
   */
  "aria-hidden"?: boolean;
};

const paddingStyles = {
  default: "p-6 md:p-8",
  compact: "p-5 md:p-6",
  tight: "p-3 sm:p-4",
  none: "",
} as const;

/**
 * Karta — služba, varianta ověření, reference.
 * Padding 32 px (24 px mobil), bez stínu. Odsazení a linka stačí, stín by
 * do jinak plochého a tichého designu nepatřil.
 */
export function Card({
  children,
  interactive = false,
  padding = "default",
  className,
  "aria-hidden": ariaHidden,
}: CardProps) {
  return (
    <div
      aria-hidden={ariaHidden}
      className={cn(
        "rounded-lg border border-line bg-surface",
        paddingStyles[padding],
        /*
         * `[.on-deep_&]:transform-gpu` drží karty s `backdrop-blur-2xl` na
         * vlastní, stabilní GPU vrstvě. Bez toho Chromium přepočítá snímek
         * pozadí pro blur, kdykoli se kdekoli na stránce objeví nová
         * kompozitní vrstva (třeba hover `-translate-y-px` na tlačítku
         * v sousední kartě) — projeví se to jako krátká svislá čára/záblesk
         * u okraje jiné, nesouvisející karty.
         */
        "[.on-deep_&]:border-white/15 [.on-deep_&]:bg-white/[0.07] [.on-deep_&]:backdrop-blur-2xl [.on-deep_&]:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.25)] [.on-deep_&]:text-on-deep-2 [.on-deep_&]:transform-gpu",
        interactive &&
          "transition duration-150 ease-micro hover:-translate-y-0.5 hover:border-accent [.on-deep_&]:hover:border-on-deep-accent",
        className,
      )}
    >
      {children}
    </div>
  );
}
