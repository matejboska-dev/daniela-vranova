import type { ReactNode } from "react";
import { CrowSeal } from "@/components/brand/Crow";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  /** Varianta "ověřeno" nese vlevo ikonu razítka. */
  verified?: boolean;
  /**
   * Když je vyplněné, badge se vykreslí jako odkaz do nové karty. Používá se
   * u obou kvalifikací (revize 2. kolo, bod 3.4): "Jmenovaná Ministerstvem
   * spravedlnosti" vede do rejstříku na seznat.justice.cz, "Členka Komory
   * soudních tlumočníků ČR" na kstcr.cz.
   */
  href?: string;
  /**
   * Kompaktní sazba: běžná velikost písma místo verzálek `.util` s širokým
   * prostrkáním (0,08–0,1em). Pro krátký štítek ("AK Legato") je rozdíl
   * kosmetický, ale pro celou větu ("Jmenovaná Ministerstvem spravedlnosti")
   * dělá verzálkové prostrkání pilulku o desítky procent širší, než musí být.
   * Použití: sekce Kdo jsem (`/impeccable adapt`, 26. 8. 2026) — dvě takhle
   * dlouhé pilulky vedle sebe se v kompaktní sazbě vejdou na jeden řádek
   * a sekce se zase vejde na jednu obrazovku.
   */
  compact?: boolean;
  className?: string;
};

/** Štítek / badge — DM Sans 500 verzálkami na ploše accent soft. */
export function Badge({
  children,
  verified = false,
  href,
  compact = false,
  className,
}: BadgeProps) {
  const content = (
    <>
      {/* Pečeť v 14 px — mikro varianta, plná kresba vrány by se v téhle
          velikosti slila do skvrny. Barva z loga (revize 2. kolo, bod 12). */}
      {verified ? (
        <CrowSeal
          variant="micro"
          className="size-3.5 shrink-0 text-brand-deep [.on-deep_&]:text-brand-soft"
        />
      ) : null}
      {children}
    </>
  );

  const classes = cn(
    "inline-flex items-center rounded-full",
    compact
      ? "gap-1 px-2.5 py-1.5 text-small font-medium tracking-normal"
      : "util gap-1.5 px-3 py-1.5 tracking-[0.08em]",
    "bg-accent-soft text-accent-ink",
    "[.on-deep_&]:bg-white/10 [.on-deep_&]:text-on-deep",
    className,
  );

  /*
   * Odkaz nemá podtržení ani jinou barvu — badge je sám o sobě dost výrazný
   * prvek a podtržení uvnitř pilulky s verzálkami vypadá jako chyba sazby.
   * Rozpoznatelnost drží kurzor a hover, který pilulku prosvětlí.
   */
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          classes,
          "transition-colors duration-150 ease-micro",
          "hover:bg-accent-soft/70 [.on-deep_&]:hover:bg-white/20",
        )}
      >
        {content}
      </a>
    );
  }

  return <span className={classes}>{content}</span>;
}
