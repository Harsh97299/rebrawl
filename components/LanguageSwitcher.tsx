"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import type { Locale } from "@/lib/i18n"

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname()

  // Build the alternate locale URL
  const alternateLang = lang === "en" ? "tr" : "en"
  let alternatePath: string

  if (lang === "tr") {
    // Remove /tr prefix to get English URL
    alternatePath = pathname.replace(/^\/tr/, "") || "/"
  } else {
    // Add /tr prefix for Turkish URL
    alternatePath = `/tr${pathname}`
  }

  return (
    <Link
      href={alternatePath}
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-text-muted hover:text-white hover:bg-white/5 border border-white/10 transition-colors uppercase tracking-wider"
      title={lang === "en" ? "Türkçe" : "English"}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {alternateLang === "tr" ? "TR" : "EN"}
    </Link>
  )
}
