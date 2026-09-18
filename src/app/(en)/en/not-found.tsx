import { Button } from "@/components/ui/Button";

export default function EnNotFound() {
  return (
    <main className="on-deep flex min-h-[100svh] flex-col items-center justify-center gap-5 bg-deep px-6 text-center text-on-deep">
      <p className="util text-brand-soft">404</p>

      <h1 className="max-w-md text-h2">Page not found</h1>

      <p className="max-w-md text-body text-on-deep-2">
        The link may be out of date or the address may contain a typo. Try
        returning to the homepage.
      </p>

      <Button href="/en" className="mt-2">
        Back to homepage
      </Button>
    </main>
  );
}
