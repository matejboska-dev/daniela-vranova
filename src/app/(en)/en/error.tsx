"use client";

export default function EnglishError({ reset }: { reset: () => void }) {
  return (
    <main className="on-deep mx-auto flex min-h-[100svh] max-w-md flex-col items-center justify-center gap-5 bg-deep px-6 text-center text-on-deep">
      <p className="util text-brand-soft">Error</p>
      <h1 className="text-h2">Something went wrong</h1>
      <p className="text-body text-on-deep-2">
        Try loading the page again. If the problem continues, e-mail me at{" "}
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
        Try again
      </button>
    </main>
  );
}
