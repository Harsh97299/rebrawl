"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#about", label: "About" },
  { href: "/archive", label: "Archive" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-elevated/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg bg-brand-yellow flex items-center justify-center font-black text-bg-base text-lg leading-none select-none">
              ⚡
            </span>
            <span className="font-display text-2xl font-extrabold tracking-tight text-white group-hover:text-brand-yellow transition-colors">
              Re<span className="text-brand-yellow">Brawl</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
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
            <a
              href="#download"
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all duration-200 ${
                scrolled
                  ? "bg-brand-yellow text-bg-base hover:bg-brand-gold shadow-md shadow-brand-yellow/20"
                  : "bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow hover:bg-brand-yellow hover:text-bg-base"
              }`}
            >
              Download APK
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-white/5 transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
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
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-bg-elevated/95 backdrop-blur-md border-t border-white/5 px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
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
