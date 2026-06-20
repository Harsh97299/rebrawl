"use client"
import { useState } from "react"
import type { FaqItem } from "@/lib/types"
import type { Locale } from "@/lib/i18n"
import { localePath } from "@/lib/i18n"

interface FaqAccordionProps {
  items: FaqItem[]
  subtitle?: string
  showAllLink?: boolean
  viewAllText?: string
  lang?: Locale
}

export default function FaqAccordion({ items, subtitle, showAllLink, viewAllText = "View all questions", lang = "en" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const heading1 = lang === "tr" ? "Sıkça Sorulan" : "Frequently Asked"
  const heading2 = lang === "tr" ? "Sorular" : "Questions"

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-bg-elevated overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-28 bg-linear-to-b from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(124,58,237,0.18)", maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", WebkitMaskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", maskRepeat: "repeat", WebkitMaskRepeat: "repeat", maskSize: "400px 400px", WebkitMaskSize: "400px 400px" }} aria-hidden="true" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            {heading1} <span className="text-brand-yellow">{heading2}</span>
          </h2>
          {subtitle && <p className="text-text-muted text-lg">{subtitle}</p>}
        </div>

        <div className="space-y-3" role="list">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                role="listitem"
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-brand-purple/40 bg-bg-hover"
                    : "border-white/5 bg-bg-base hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span
                    className={`font-display font-bold text-base pr-6 transition-colors ${
                      isOpen ? "text-brand-yellow" : "text-white"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      isOpen ? "bg-brand-purple text-white rotate-45" : "bg-white/10 text-text-muted"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div id={`faq-answer-${i}`} className="px-6 pb-6">
                    <p className="text-text-muted leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {showAllLink && (
          <div className="text-center mt-10">
            <a
              href={localePath("/faq", lang)}
              className="inline-flex items-center gap-2 text-brand-yellow font-display font-bold hover:text-brand-gold transition-colors"
            >
              {viewAllText}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
