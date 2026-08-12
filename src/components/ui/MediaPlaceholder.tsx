import { cn } from "@/lib/cn";

type MediaPlaceholderProps = {
  /** Popis toho, co sem přijde — čte ho čtečka i vývojář v DevTools. */
  label: string;
  className?: string;
};

/**
 * Plocha zastupující fotografii, kterou zatím nemáme nafocenou.
 * Chybí hlavně dokumentární detaily: razítko, podpis, svázaný překlad se
 * šňůrkou, papír, ruce. Až dorazí, nahrazuje se 1:1 za `next/image`
 * se stejnou třídou — layout se nemění.
 *
 * V DevTools se všechny najdou přes `[data-placeholder]`.
 */
export function MediaPlaceholder({ label, className }: MediaPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      data-placeholder={label}
      className={cn(
        "flex items-center justify-center rounded-lg border border-dashed",
        "border-line-strong bg-alt p-6 text-center",
        className,
      )}
    >
      <span className="util max-w-[24ch] text-ink-muted">{label}</span>
    </div>
  );
}
