import "server-only"

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  tr: () => import("./dictionaries/tr.json").then((m) => m.default),
}

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>
export const getDictionary = async (locale: "en" | "tr") => dictionaries[locale]()
