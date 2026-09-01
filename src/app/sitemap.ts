import type { MetadataRoute } from "next";
import { SITE_URL, SITE_LAUNCHED } from "@/lib/site";

/**
 * sitemap.xml (Next konvence `app/sitemap.ts`).
 *
 * Dvě URL: česká mutace na kořeni, anglická pod `/en`. `alternates.languages`
 * říká vyhledávači, že jde o překlady téže stránky (hreflang v sitemapě).
 *
 * Dokud web běží jako náhled, vrací prázdno – nemá smysl nabízet crawlerům
 * mapu webu, který je celý za `disallow`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_LAUNCHED) return [];

  const languages = { cs: `${SITE_URL}/`, en: `${SITE_URL}/en` };
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages },
    },
  ];
}
