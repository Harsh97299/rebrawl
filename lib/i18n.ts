export const locales = ["en", "tr"] as const
export const defaultLocale = "en" as const
export type Locale = (typeof locales)[number]

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale)
}

export function localePath(path: string, lang: Locale): string {
  if (lang === defaultLocale) return path
  return `/${lang}${path}`
}

export const hreflangMap: Record<Locale, string> = {
  en: "en",
  tr: "tr-TR",
}
