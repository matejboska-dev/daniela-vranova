import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline";
type ButtonSize = "md" | "sm";

/*
 * Jedna akční barva na obrazovce. Dvě modrá tlačítka vedle sebe znamenají,
 * že jedno z nich je ve skutečnosti sekundární — pak patří varianta outline.
 */
const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover hover:-translate-y-px",
  outline: cn(
    "border border-line-strong text-ink hover:border-accent hover:text-accent",
    /* Na navy pozadí světlá varianta, aby prošla kontrastem. */
    "[.on-deep_&]:border-white/30 [.on-deep_&]:text-white",
    "[.on-deep_&]:hover:border-white [.on-deep_&]:hover:bg-white/5",
  ),
};

/*
 * Rozměry jdou přes prop, ne přes className. Tailwind neřeší pořadí tříd
 * v atributu, takže `className="h-10"` by se se základní výškou přebíjelo
 * nepředvídatelně. Totéž platí pro skrývání — to patří na obalový prvek,
 * protože `hidden` by se pralo s `inline-flex`.
 */
const sizeStyles: Record<ButtonSize, string> = {
  /* 48 px na mobilu, 52 px od tabletu výš. */
  md: "h-12 px-7 text-[15px] md:h-13",
  sm: "h-11 px-5 text-small",
};

const baseStyles = cn(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium",
  "whitespace-nowrap transition duration-150 ease-micro active:translate-y-0",
);

type ButtonAsLink = { href: string } & ComponentPropsWithoutRef<"a">;
type ButtonAsButton = { href?: undefined } & ComponentPropsWithoutRef<"button">;

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
} & (ButtonAsLink | ButtonAsButton);

/** Tlačítko. S `href` se vykreslí jako odkaz, bez něj jako `<button>`. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className,
  );

  if (props.href !== undefined) {
    return (
      <a className={classes} {...(props as ButtonAsLink)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}

/**
 * Textový odkaz. V body textu se odkazy nikdy neodlišují jen barvou, proto
 * podtržení s odsazením 3 px.
 */
export function TextLink({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={cn(
        "text-accent underline decoration-1 underline-offset-[3px]",
        "transition-colors duration-150 hover:text-accent-hover",
        "[.on-deep_&]:text-on-deep-accent [.on-deep_&]:hover:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
