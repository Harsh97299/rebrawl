export const locales = ["en", "tr", "fr", "it", "ru", "uk"] as const
export const defaultLocale = "en" as const
export type Locale = (typeof locales)[number]

export const localeMeta: Record<Locale, { code: string; label: string; flag: string }> = {
  en: { code: "EN", label: "English", flag: "/flags/us.svg" },
  tr: { code: "TR", label: "Türkçe", flag: "/flags/tr.svg" },
  fr: { code: "FR", label: "Français", flag: "/flags/fr.svg" },
  it: { code: "IT", label: "Italiano", flag: "/flags/it.svg" },
  ru: { code: "RU", label: "Русский", flag: "/flags/ru.svg" },
  uk: { code: "UK", label: "Українська", flag: "/flags/ua.svg" },
}

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
  fr: "fr-FR",
  it: "it-IT",
  ru: "ru-RU",
  uk: "uk-UA",
}
