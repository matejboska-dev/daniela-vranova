/** Spojí podmíněné CSS třídy do jednoho stringu. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
