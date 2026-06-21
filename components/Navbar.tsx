"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import LanguageSwitcher from "./LanguageSwitcher"
import type { Locale } from "@/lib/i18n"
import { localePath } from "@/lib/i18n"

const accentColors: Record<string, string> = {
  purple: "text-brand-purple",
  gold: "text-brand-yellow",
  blue: "text-brand-blue",
}

type NavDict = {
  about: string
  faq: string
  contact: string
  archive: string
  allVersions: string
  downloadApk: string
  openMenu: string
  closeMenu: string
}

type VersionDict = {
  name: string
  badge: string
}

type DownloadVersionsDict = Record<string, VersionDict>

interface NavbarProps {
  lang: Locale
  dict: NavDict
  downloadVersions: DownloadVersionsDict
}

const versionMeta = [
  { id: "mods", image: "/mods.webp", accent: "purple" },
  { id: "classic", image: "/classic.webp", accent: "gold" },
  { id: "legacy", image: "/legacy.webp", accent: "blue" },
]

export default function Navbar({ lang, dict, downloadVersions }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [archiveOpen, setArchiveOpen] = useState(false)
  const [mobileArchiveOpen, setMobileArchiveOpen] = useState(false)
  const archiveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const navLinks = [
    { href: localePath("/about", lang), label: dict.about },
    { href: localePath("/faq", lang), label: dict.faq },
    { href: localePath("/contact", lang), label: dict.contact },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  function handleArchiveEnter() {
    if (archiveTimeout.current) clearTimeout(archiveTimeout.current)
    setArchiveOpen(true)
  }

  function handleArchiveLeave() {
    archiveTimeout.current = setTimeout(() => setArchiveOpen(false), 150)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-elevated/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={localePath("/", lang)} className="flex items-center gap-2.5 group">
            <Image
              src="/logo.webp"
              alt="ReBrawl logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-display text-2xl font-extrabold tracking-tight text-white group-hover:text-brand-yellow transition-colors">
              Re<span className="text-brand-yellow">Brawl</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Archive dropdown */}
            <div
              className="relative"
              onMouseEnter={handleArchiveEnter}
              onMouseLeave={handleArchiveLeave}
            >
              <Link
                href={localePath("/archive", lang)}
                className="flex items-center gap-1 text-text-muted hover:text-white text-sm font-medium transition-colors"
              >
                {dict.archive}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`transition-transform duration-200 ${archiveOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${
                  archiveOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="w-56 rounded-xl border border-white/10 bg-bg-elevated/95 backdrop-blur-md shadow-2xl shadow-black/50 overflow-hidden">
                  {versionMeta.map((v) => {
                    const vDict = downloadVersions[v.id]
                    return (
                      <Link
                        key={v.id}
                        href={localePath(`/archive/${v.id}`, lang)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                        onClick={() => setArchiveOpen(false)}
                      >
                        <Image
                          src={v.image}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-md object-contain"
                        />
                        <span className={`font-display font-bold text-sm ${accentColors[v.accent]}`}>
                          {vDict.name}
                        </span>
                        {vDict.badge && (
                          <span className="ml-auto text-[9px] font-extrabold uppercase tracking-wider text-brand-yellow bg-brand-yellow/15 border border-brand-yellow/25 rounded-full px-1.5 py-0.5">
                            {vDict.badge}
                          </span>
                        )}
                      </Link>
                    )
                  })}
                  <div className="border-t border-white/5">
                    <Link
                      href={localePath("/archive", lang)}
                      className="flex items-center gap-2 px-4 py-3 text-text-muted hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
                      onClick={() => setArchiveOpen(false)}
                    >
                      {dict.allVersions}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="ml-auto">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher lang={lang} />
            <a
              href={localePath("/archive", lang)}
              className={`px-4 py-2 rounded-xl font-bold text-sm max-[400px]:px-2.5 max-[400px]:py-1.5 max-[400px]:text-xs transition-all duration-200 ${
                scrolled
                  ? "bg-brand-yellow text-bg-base hover:bg-brand-gold shadow-md shadow-brand-yellow/20"
                  : "bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow hover:bg-brand-yellow hover:text-bg-base"
              }`}
            >
              {dict.downloadApk}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-white/5 transition-colors"
              aria-label={open ? dict.closeMenu : dict.openMenu}
              aria-expanded={open}
            >
              <span
                className={`w-5 h-[2px] bg-white rounded-full transition-all origin-center ${
                  open ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-white rounded-full transition-all ${
                  open ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-white rounded-full transition-all origin-center ${
                  open ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-bg-elevated/95 backdrop-blur-md border-t border-white/5 px-4 py-3 flex flex-col gap-1">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-text-muted hover:text-white py-3 px-3 rounded-lg hover:bg-white/5 text-sm font-medium transition-colors block"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile archive accordion */}
          <button
            onClick={() => setMobileArchiveOpen((o) => !o)}
            className="flex items-center justify-between text-text-muted hover:text-white py-3 px-3 rounded-lg hover:bg-white/5 text-sm font-medium transition-colors w-full text-left"
          >
            {dict.archive}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className={`transition-transform duration-200 ${mobileArchiveOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              mobileArchiveOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {versionMeta.map((v) => {
              const vDict = downloadVersions[v.id]
              return (
                <Link
                  key={v.id}
                  href={localePath(`/archive/${v.id}`, lang)}
                  onClick={() => { setOpen(false); setMobileArchiveOpen(false) }}
                  className={`flex items-center gap-3 py-2.5 px-6 text-sm font-medium transition-colors hover:bg-white/5 rounded-lg ${accentColors[v.accent]}`}
                >
                  <Image src={v.image} alt="" width={20} height={20} className="rounded object-contain" />
                  {vDict.name}
                </Link>
              )
            })}
            <Link
              href={localePath("/archive", lang)}
              onClick={() => { setOpen(false); setMobileArchiveOpen(false) }}
              className="py-2.5 px-6 text-sm font-medium text-text-muted hover:text-white transition-colors hover:bg-white/5 rounded-lg block"
            >
              {dict.allVersions}
            </Link>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-text-muted hover:text-white py-3 px-3 rounded-lg hover:bg-white/5 text-sm font-medium transition-colors block"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
