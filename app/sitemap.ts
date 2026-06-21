import type { MetadataRoute } from "next"
import { BASE_URL } from "@/lib/seo"
import { locales, defaultLocale, hreflangMap } from "@/lib/i18n"

const routes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1, lastModified: "2026-06-21" },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8, lastModified: "2026-06-15" },
  { path: "/archive", changeFrequency: "weekly" as const, priority: 0.9, lastModified: "2026-06-21" },
  { path: "/archive/mods", changeFrequency: "weekly" as const, priority: 0.85, lastModified: "2026-06-21" },
  { path: "/archive/classic", changeFrequency: "weekly" as const, priority: 0.85, lastModified: "2026-06-21" },
  { path: "/archive/legacy", changeFrequency: "weekly" as const, priority: 0.85, lastModified: "2026-06-21" },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.7, lastModified: "2026-06-15" },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6, lastModified: "2026-06-01" },
  { path: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.3, lastModified: "2026-06-01" },
  { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3, lastModified: "2026-06-01" },
  { path: "/dmca", changeFrequency: "yearly" as const, priority: 0.3, lastModified: "2026-06-01" },
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
        lastModified: new Date(route.lastModified),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages },
      })
    }
  }

  return entries
}
