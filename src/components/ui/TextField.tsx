import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ChevronIcon } from "./ChevronIcon";
import { Icon } from "./Icon";
import { cn } from "@/lib/cn";

/*
 * Label je vždy nad polem, nikdy jen placeholder. Placeholder zmizí ve chvíli,
 * kdy člověk začne psát, a v delším formuláři pak nikdo neví, co kam vyplňoval.
 */
const fieldStyles = cn(
  "w-full rounded-md border border-line-strong bg-white px-4 text-body text-ink",
  "placeholder:text-ink-muted transition duration-150",
  "focus:border-accent focus:shadow-[var(--focus-ring)] focus:outline-none",
  "focus-visible:outline-none",
);

type FieldShellProps = {
  id: string;
  label: string;
  hint?: string;
  children: ReactNode;
  className?: string;
};

function FieldShell({ id, label, hint, children, className }: FieldShellProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block text-small font-medium text-ink [.on-deep_&]:text-on-deep"
      >
        {label}
      </label>
      {children}
      {hint ? (
        <p className="mt-2 text-small text-ink-muted [.on-deep_&]:text-on-deep-2">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

type TextFieldProps = {
  id: string;
  label: string;
  hint?: string;
} & ComponentPropsWithoutRef<"input">;

/** Jednořádkové pole formuláře, výška 52 px. */
export function TextField({
  id,
  label,
  hint,
  className,
  ...props
}: TextFieldProps) {
  return (
    <FieldShell id={id} label={label} hint={hint}>
      <input
        id={id}
        className={cn(fieldStyles, "h-[var(--control-h)]", className)}
        {...props}
      />
    </FieldShell>
  );
}

type SelectFieldProps = {
  id: string;
  label: string;
  hint?: string;
  placeholder?: string;
  options: readonly string[];
} & Omit<ComponentPropsWithoutRef<"select">, "children">;

/**
 * Výběr typu dokumentu. Nativní `<select>`, ne vlastní dropdown — na mobilu
 * otevře systémový picker, funguje z klávesnice a nepotřebuje JavaScript.
 * Šipka je vlastní, proto `appearance-none` a odsazení zprava.
 */
export function SelectField({
  id,
  label,
  hint,
  placeholder,
  options,
  className,
  ...props
}: SelectFieldProps) {
  return (
    <FieldShell id={id} label={label} hint={hint}>
      <div className="relative">
        <select
          id={id}
          defaultValue=""
          className={cn(
            fieldStyles,
            "h-[var(--control-h)] appearance-none pr-12",
            /* Prázdná hodnota se sází jako placeholder, ne jako vyplněný text. */
            "[&:invalid]:text-ink-muted",
            className,
          )}
          required
          {...props}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronIcon
          direction="down"
          className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-ink-muted"
        />
      </div>
    </FieldShell>
  );
}

type TextAreaFieldProps = {
  id: string;
  label: string;
  hint?: string;
} & ComponentPropsWithoutRef<"textarea">;

/** Víceřádkové pole formuláře, minimální výška 140 px. */
export function TextAreaField({
  id,
  label,
  hint,
  className,
  ...props
}: TextAreaFieldProps) {
  return (
    <FieldShell id={id} label={label} hint={hint}>
      <textarea
        id={id}
        rows={5}
        className={cn(fieldStyles, "min-h-35 resize-y py-3.5", className)}
        {...props}
      />
    </FieldShell>
  );
}

type DropZoneProps = {
  id: string;
  label: string;
  dropText: string;
  hint?: string;
};

/**
 * Drop zóna pro sken dokumentu.
 *
 * Přerušovaná linka v `--border-strong`, radius 12 px jako u karty. Zatím jde
 * o design slotu — soubor se nikam neodesílá, stejně jako zbytek formuláře.
 * Napojení (server action, antispam, limit velikosti) přijde ve fázi vývoje
 * dle nabídky CN-2026-014.
 *
 * Celá plocha je `<label>` obalující `<input type="file">`, takže funguje
 * kliknutím i z klávesnice, ještě než se dopíše logika přetažení.
 */
export function DropZone({ id, label, dropText, hint }: DropZoneProps) {
  return (
    <div>
      <span className="mb-2 block text-small font-medium text-ink [.on-deep_&]:text-on-deep">
        {label}
      </span>

      {/* Bílá plocha zóny je nezávislá na tónu sekce, obsah uvnitř proto
          nedostává [.on-deep_&] variantu — jen popisek nad ní, mimo bílý box. */}
      <label
        htmlFor={id}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center gap-3",
          "rounded-lg border border-dashed border-line-strong bg-white",
          "px-6 py-10 text-center transition duration-150",
          "hover:border-accent hover:bg-accent-soft/40",
          "focus-within:border-accent focus-within:shadow-[var(--focus-ring)]",
        )}
      >
        <Icon name="upload" className="size-7 text-accent" />

        <span className="text-body text-ink">{dropText}</span>

        {hint ? <span className="text-small text-ink-muted">{hint}</span> : null}

        <input
          id={id}
          name="dokument"
          type="file"
          multiple
          accept="application/pdf,image/jpeg,image/png"
          className="sr-only"
        />
      </label>
    </div>
  );
}
