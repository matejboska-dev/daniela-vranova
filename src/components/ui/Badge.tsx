import type { ReactNode } from "react";
import { CrowSeal } from "@/components/brand/Crow";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  /** Varianta "ověřeno" nese vlevo ikonu razítka. */
  verified?: boolean;
  className?: string;
};

/** Štítek / badge — DM Sans 500 verzálkami na ploše accent soft. */
export function Badge({ children, verified = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "util inline-flex items-center gap-1.5 rounded-full px-3 py-1.5",
        "bg-accent-soft tracking-[0.08em] text-accent-ink",
        "[.on-deep_&]:bg-white/10 [.on-deep_&]:text-on-deep",
        className,
      )}
    >
      {/* Pečeť v 14 px — mikro varianta, plná kresba vrány by se v téhle
          velikosti slila do skvrny. */}
      {verified ? (
        <CrowSeal variant="micro" className="size-3.5 shrink-0" />
      ) : null}
      {children}
    </span>
  );
}
