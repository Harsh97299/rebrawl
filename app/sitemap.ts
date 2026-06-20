import type { MetadataRoute } from "next"
import { BASE_URL } from "@/lib/seo"
import { locales, defaultLocale, hreflangMap } from "@/lib/i18n"

const routes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/archive", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/archive/mods", changeFrequency: "weekly" as const, priority: 0.85 },
  { path: "/archive/classic", changeFrequency: "weekly" as const, priority: 0.85 },
  { path: "/archive/legacy", changeFrequency: "weekly" as const, priority: 0.85 },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const route of routes) {
    for (const locale of locales) {
      const url =
        locale === defaultLocale
          ? `${BASE_URL}${route.path === "/" ? "" : route.path}`
          : `${BASE_URL}/${locale}${route.path === "/" ? "" : route.path}`

      const languages: Record<string, string> = {}
      for (const alt of locales) {
        const hreflang = hreflangMap[alt]
        languages[hreflang] =
          alt === defaultLocale
            ? `${BASE_URL}${route.path === "/" ? "" : route.path}`
            : `${BASE_URL}/${alt}${route.path === "/" ? "" : route.path}`
      }
      languages["x-default"] = `${BASE_URL}${route.path === "/" ? "" : route.path}`

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages },
      })
    }
  }

  return entries
}
