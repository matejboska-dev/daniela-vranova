import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Jednotná šířka obsahu a boční okraj pro celý web.
 *
 * Obsah se zastaví na 1240 px, okraj stránky roste s displejem (20 px mobil →
 * 80 px desktop). Kontejner je proto široký "obsah + dva okraje" — na velkém
 * monitoru vyjde obsah přesně na 1240 px, na užším displeji se drží okraj.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[calc(var(--container)+var(--page-x)*2)]",
        "px-[var(--page-x)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
