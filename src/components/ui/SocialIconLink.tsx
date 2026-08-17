import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";

/**
 * Odkaz na sociální síť jako kulaté ikonové tlačítko.
 *
 * Revize (klientčin brief, bod 6 + zpětná vazba 17. 8. 2026): nejdřív šly
 * odkazy jako čitelný textový štítek ("Instagram" / "LinkedIn"), protože
 * design používá výhradně vlastní liniové ikony, ne cizí vyplněná loga sítí.
 * Klientka chtěla místo textu ikonky — `instagram` a `linkedin` v `Icon.tsx`
 * proto kreslí oba glyfy stejnou liniovou technikou (stroke, bez výplně) jako
 * zbytek sady, aby se nelišily stylem, jen tím, že představují značku.
 *
 * `size-11` (44 px) drží dotykový cíl nad doporučeným minimem a `aria-label`
 * nahrazuje viditelný text, který ikona nahradila.
 */
export function SocialIconLink({
  icon,
  label,
  href,
  className,
}: {
  icon: IconName;
  label: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition duration-150 ease-micro hover:border-accent hover:text-accent",
        "[.on-deep_&]:border-white/30 [.on-deep_&]:text-white [.on-deep_&]:hover:border-white [.on-deep_&]:hover:bg-white/5",
        className,
      )}
    >
      <Icon name={icon} className="size-5" />
    </a>
  );
}
