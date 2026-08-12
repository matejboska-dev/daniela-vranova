import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  href?: string;
  /** "sm" hlavička (40 px výška), "lg" patička (64 px výška). */
  size?: "sm" | "lg";
  className?: string;
  onClick?: () => void;
};

/* Přirozený poměr stran zdrojového PNG (250 × 144 px). */
const dimensions = {
  sm: { width: 69, height: 40 },
  lg: { width: 111, height: 64 },
} as const;

/*
 * "sm" (hlavička) se pod `sm` breakpointem (640 px) zmenší na 32 px výšky —
 * na úzkém mobilu si logo napevno vykreslené na 40 px bralo zbytečně moc
 * místa vedle přepínače jazyka a hamburgeru. `w-auto` dopočítá šířku podle
 * intrinsic poměru stran z `width`/`height` výš. "lg" (patička) zůstává
 * pevná, tam prostor není omezený.
 */
const imageSizeClassName = {
  sm: "h-8 w-auto sm:h-10",
  lg: "h-16 w-auto",
} as const;

/**
 * Klientčino stávající logo (modrý a černý blok, racek, wordmark) jako
 * hotová rastrová značka — nahrazuje dřívější kresebný návrh (pečeť s vránou
 * + Playfair wordmark), viz `Crow.tsx` a styleguide. Obrázek má vlastní
 * barvy a průhledné okolí, takže funguje beze změny na průhledné hlavičce
 * nad hero videem i na bílé hlavičce po odscrollování.
 */
export function Logo({ href = "#uvod", size = "sm", className, onClick }: LogoProps) {
  const { width, height } = dimensions[size];

  return (
    <a
      href={href}
      onClick={onClick}
      aria-label="Překlady Vránová – na úvod"
      className={cn("flex shrink-0 items-center", className)}
    >
      <Image
        src="/logo.png"
        alt="Překlady Vránová"
        width={width}
        height={height}
        className={imageSizeClassName[size]}
      />
    </a>
  );
}
