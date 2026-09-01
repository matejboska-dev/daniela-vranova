import Image from "next/image";
import { cn } from "@/lib/cn";

export type LogoLocale = "cs" | "en";
export type LogoTone = "on-deep" | "on-light";

export type LogoProps = {
  href?: string;
  /** "sm" hlavička, "lg" patička. */
  size?: "sm" | "lg";
  /** Jazyková mutace loga: `cs` = logo-web-cz.png, `en` = logo-web-en.png. */
  locale?: LogoLocale;
  tone?: LogoTone;
  className?: string;
  onClick?: () => void;
  priority?: boolean;
  scrolled?: boolean;
};

export const LOGO_CONFIG = {
  cs: {
    src: "/logo-web-cz.png",
    width: 1464,
    height: 812,
    alt: "Překlady Vránová",
    home: "Překlady Vránová – na úvod",
  },
  en: {
    src: "/logo-web-en.png",
    width: 1716,
    height: 916,
    alt: "Translations Vránová",
    home: "Translations Vránová – home",
  },
} as const;

export function Logo({
  href = "#uvod",
  size = "sm",
  locale = "cs",
  tone,
  className,
  onClick,
  priority = size === "sm",
  scrolled = false,
}: LogoProps) {
  const config = LOGO_CONFIG[locale] ?? LOGO_CONFIG.cs;

  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={config.home}
      className={cn("flex shrink-0 items-center", className)}
    >
      <Image
        src={config.src}
        alt={config.alt}
        width={config.width}
        height={config.height}
        priority={priority}
        className={cn(
          "w-auto object-contain transition-all duration-300 ease-micro",
          size === "sm"
            ? scrolled
              ? "h-11 sm:h-13 md:h-14"
              : "h-13 sm:h-16 md:h-20"
            : "h-20 w-auto sm:h-28 md:h-32",
        )}
      />
    </a>
  );
}

export function LogoMark({
  locale = "cs",
  className,
  title,
}: {
  locale?: LogoLocale;
  tone?: LogoTone;
  width?: number;
  height?: number;
  className?: string;
  title?: string;
}) {
  const config = LOGO_CONFIG[locale] ?? LOGO_CONFIG.cs;
  return (
    <Image
      src={config.src}
      alt={title ?? config.alt}
      width={config.width}
      height={config.height}
      className={cn("h-full w-auto object-contain", className)}
    />
  );
}
