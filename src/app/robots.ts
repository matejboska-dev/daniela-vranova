import type { MetadataRoute } from "next";
import { SITE_URL, SITE_LAUNCHED } from "@/lib/site";

/**
 * robots.txt (Next konvence `app/robots.ts`).
 *
 * Dokud web běží jako náhled (`SITE_LAUNCHED === false`), zakazuje crawlerům
 * všechno – shodně s meta `robots: noindex` v obou layoutech. Po spuštění
 * povolí procházení a odkáže na sitemapu.
 */
export default function robots(): MetadataRoute.Robots {
  if (!SITE_LAUNCHED) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
