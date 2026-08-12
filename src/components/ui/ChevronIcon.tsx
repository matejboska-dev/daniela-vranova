const paths = {
  left: "M15 5 8 12l7 7",
  right: "m9 5 7 7-7 7",
  down: "m5 9 7 7 7-7",
} as const;

type ChevronIconProps = {
  direction: keyof typeof paths;
  className?: string;
};

/** Šipka — karusel referencí a rozbalovací dotazy. */
export function ChevronIcon({ direction, className }: ChevronIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={paths[direction]} />
    </svg>
  );
}
