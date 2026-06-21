"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import type { Locale } from "@/lib/i18n"

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname()

  // Build the alternate locale URL
  let alternatePath: string

  if (lang === "tr") {
    // Remove /tr prefix to get English URL
    alternatePath = pathname.replace(/^\/tr/, "") || "/"
  } else {
    // Add /tr prefix for Turkish URL
    alternatePath = `/tr${pathname}`
  }

  const flagSrc = lang === "en" ? "/flags/us.svg" : "/flags/tr.svg"
  const currentCode = lang === "en" ? "EN" : "TR"

  return (
    <Link
      href={alternatePath}
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-text-muted hover:text-white hover:bg-white/5 border border-white/10 transition-colors uppercase tracking-wider"
      title={lang === "en" ? "Türkçe" : "English"}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={flagSrc}
        alt=""
        width={20}
        height={14}
        className="rounded-[3px] ring-1 ring-white/15"
        aria-hidden="true"
      />
      {currentCode}
    </Link>
  )
}
