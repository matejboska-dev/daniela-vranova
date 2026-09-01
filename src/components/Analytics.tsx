import Script from "next/script";

/**
 * ---------------------------------------------------------------------------
 * ANALYTIKA – Plausible
 * ---------------------------------------------------------------------------
 * Plausible běží bez cookies a bez osobních údajů, takže nepotřebuje cookie
 * lištu ani souhlas (GDPR v pořádku) – sedí k webu, který jinak nic
 * netrackuje.
 *
 * Skript se načte jen když je nastavená proměnná
 * `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (např. "soudni-anglictina.cz"). Bez ní
 * komponenta nevykreslí nic, takže lokální běh i náhled zůstávají čisté
 * a analytika se zapne až tím, že se doména doplní do prostředí (Netlify /
 * `.env`). Do té doby je to prázdný slot.
 * ---------------------------------------------------------------------------
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
