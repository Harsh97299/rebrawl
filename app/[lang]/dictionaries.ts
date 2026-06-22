import "server-only"
import type { Locale } from "@/lib/i18n"

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  tr: () => import("./dictionaries/tr.json").then((m) => m.default),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default),
  it: () => import("./dictionaries/it.json").then((m) => m.default),
  ru: () => import("./dictionaries/ru.json").then((m) => m.default),
  uk: () => import("./dictionaries/uk.json").then((m) => m.default),
}

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>
export const getDictionary = async (locale: Locale) => dictionaries[locale]()
