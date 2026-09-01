"use client";

import "./globals.css";

/**
 * Poslední záchytná síť pro chyby, které spadnou až v kořenovém layoutu
 * (běžné chyby v sekcích chytá Next sám a ukáže vlastní overlay ve vývoji /
 * generickou hlášku v produkci). `global-error` nahrazuje celý layout, proto
 * si vykresluje `<html>` i `<body>` sám a musí to být klientská komponenta.
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="cs">
      <body className="bg-deep text-on-deep">
        <main className="on-deep mx-auto flex min-h-[100svh] max-w-md flex-col items-center justify-center gap-5 px-6 text-center">
          <p className="util text-brand-soft">Chyba</p>

          <h1 className="text-h2">Něco se pokazilo</h1>

          <p className="text-body text-on-deep-2">
            Zkuste stránku načíst znovu. Pokud potíž trvá, napište mi na{" "}
            <a
              href="mailto:daniela.vranova@seznam.cz"
              className="text-on-deep underline underline-offset-2"
            >
              daniela.vranova@seznam.cz
            </a>
            .
          </p>

          <button
            type="button"
            onClick={reset}
            className="mt-2 inline-flex h-12 items-center rounded-lg bg-accent px-6 text-body font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Zkusit znovu
          </button>
        </main>
      </body>
    </html>
  );
}
