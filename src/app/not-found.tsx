import { Button } from "@/components/ui/Button";
import "./globals.css";

/**
 * Stránka 404. Chytá adresy, které neodpovídají žádné routě.
 *
 * Web má dva kořenové layouty v route groups (`(cs)`, `(en)`) a žádný sdílený
 * `app/layout.tsx`. Next 16 pro nenavázaný `not-found` dodá vlastní kořenový
 * layout (`<html>`/`<body>`), takže tady se vrací jen obsah – vlastní
 * `<html>` by se s tím dodaným pral (hydration mismatch).
 *
 * Bez `next/font` (ten je jen v `RootShell`) – nadpis padne na Georgia
 * z fallbacku `--font-display`. Na 404 stránce je to v pořádku.
 */
export default function NotFound() {
  return (
    <main className="on-deep flex min-h-[100svh] flex-col items-center justify-center gap-5 bg-deep px-6 text-center text-on-deep">
      <p className="util text-brand-soft">404</p>

      <h1 className="text-h2 max-w-md">Tuhle stránku jsem nenašla</h1>

      <p className="max-w-md text-body text-on-deep-2">
        Odkaz je nejspíš starý nebo je v adrese překlep. Zkuste to z úvodní
        stránky.
      </p>

      <Button href="/" className="mt-2">
        Zpět na úvod
      </Button>
    </main>
  );
}
