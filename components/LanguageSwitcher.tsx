"use client"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { locales, localeMeta, defaultLocale, type Locale } from "@/lib/i18n"

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Strip any existing locale prefix to get the unprefixed base path
  const basePath =
    pathname.replace(/^\/(tr|fr|it|ru|uk)(?=\/|$)/, "") || "/"

  function pathFor(target: Locale): string {
    if (target === defaultLocale) return basePath
    return `/${target}${basePath === "/" ? "" : basePath}`
  }

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  const current = localeMeta[lang]

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-text-muted hover:text-white hover:bg-white/5 border border-white/10 transition-colors uppercase tracking-wider"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.flag}
          alt=""
          width={20}
          height={14}
          className="rounded-[3px] ring-1 ring-white/15"
          aria-hidden="true"
        />
        {current.code}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        role="listbox"
        className={`absolute right-0 top-full pt-2 transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="w-40 rounded-xl border border-white/10 bg-bg-elevated/95 backdrop-blur-md shadow-2xl shadow-black/50 overflow-hidden">
          {locales.map((loc) => {
            const meta = localeMeta[loc]
            const active = loc === lang
            return (
              <Link
                key={loc}
                href={pathFor(loc)}
                role="option"
                aria-selected={active}
                onClick={() => setOpen(false)}
                hrefLang={loc}
                className={`flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/5 text-white"
                    : "text-text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={meta.flag}
                  alt=""
                  width={20}
                  height={14}
                  className="rounded-[3px] ring-1 ring-white/15"
                  aria-hidden="true"
                />
                {meta.label}
                {active && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="ml-auto text-brand-yellow"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
