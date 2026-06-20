import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { buildBreadcrumbJsonLd, getAlternates } from "@/lib/seo"
import { isValidLocale, localePath, type Locale } from "@/lib/i18n"
import { getDictionary } from "../dictionaries"

type PageProps = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params
  if (!isValidLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return {
    title: dict.meta.about.title,
    description: dict.meta.about.description,
    alternates: getAlternates("/about"),
  }
}

const valueIcons = [
  (
    <svg key="shield" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  (
    <svg key="check-circle" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  (
    <svg key="book" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
]

const branches = [
  { accent: "purple" as const, image: "/background/mods-background.webp" },
  { accent: "gold" as const, image: "/background/classic-background.webp" },
  { accent: "blue" as const, image: "/background/legacy-background.webp" },
]

const accentMap = {
  purple: {
    text: "text-brand-purple",
    border: "border-brand-purple/25",
    bg: "bg-brand-purple/10",
    glow: "shadow-brand-purple/10",
  },
  gold: {
    text: "text-brand-yellow",
    border: "border-brand-yellow/25",
    bg: "bg-brand-yellow/10",
    glow: "shadow-brand-yellow/10",
  },
  blue: {
    text: "text-brand-blue",
    border: "border-brand-blue/25",
    bg: "bg-brand-blue/10",
    glow: "shadow-brand-blue/10",
  },
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params
  if (!isValidLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)
  const t = dict.aboutPage

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: dict.common.home, url: "/" },
              { name: dict.common.about, url: "/about" },
            ], lang as Locale)
          ),
        }}
      />

      {/* Hero */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{
          backgroundImage: "url('/background/about-background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80" aria-hidden="true" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
        {/* Accent atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.2) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,58,237,0.2) 0%, transparent 50%)
            `,
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-sm text-text-muted mb-8"
            aria-label="Breadcrumb"
          >
            <Link href={localePath("/", lang as Locale)} className="hover:text-white transition-colors">
              {dict.common.home}
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white" aria-current="page">
              {dict.common.about}
            </span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
              About <span className="text-brand-yellow">Us</span>
            </h1>
            <p className="text-text-muted text-xl leading-relaxed">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative py-20 bg-bg-base overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-28 bg-linear-to-b from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: "rgba(124,58,237,0.18)",
            maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')",
            WebkitMaskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')",
            maskRepeat: "repeat",
            WebkitMaskRepeat: "repeat",
            maskSize: "400px 400px",
            WebkitMaskSize: "400px 400px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 70% at 50% 50%, #0b0b16 20%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-6">
              {t.whoWeAre.heading} <span className="text-brand-purple">{t.whoWeAre.headingHighlight}</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              {t.whoWeAre.p1}
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              {t.whoWeAre.p2}
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative py-20 bg-bg-elevated overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-28 bg-linear-to-b from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: "rgba(124,58,237,0.18)",
            maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')",
            WebkitMaskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')",
            maskRepeat: "repeat",
            WebkitMaskRepeat: "repeat",
            maskSize: "400px 400px",
            WebkitMaskSize: "400px 400px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 70% at 50% 50%, #0b0b16 20%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4 text-center">
            {t.values.heading} <span className="text-brand-yellow">{t.values.headingHighlight}</span>
          </h2>
          <p className="text-text-muted text-lg text-center max-w-2xl mx-auto mb-14">
            {t.values.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.values.items.map((value, index) => (
              <div
                key={value.title}
                className="bg-bg-base rounded-2xl p-6 border border-white/5 hover:border-brand-purple/25 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mb-5">
                  {valueIcons[index]}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="relative py-20 bg-bg-base overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-28 bg-linear-to-b from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: "rgba(124,58,237,0.18)",
            maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')",
            WebkitMaskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')",
            maskRepeat: "repeat",
            WebkitMaskRepeat: "repeat",
            maskSize: "400px 400px",
            WebkitMaskSize: "400px 400px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 70% at 50% 50%, #0b0b16 20%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4 text-center">
            {t.editions.heading} <span className="text-brand-yellow">{t.editions.headingHighlight}</span>
          </h2>
          <p className="text-text-muted text-lg text-center max-w-2xl mx-auto mb-14">
            {t.editions.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {branches.map((branch, index) => {
              const colors = accentMap[branch.accent]
              const edition = t.editions.items[index]
              return (
                <div
                  key={edition.name}
                  className={`relative rounded-2xl border ${colors.border} overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-lg ${colors.glow}`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={branch.image}
                      alt={edition.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-bg-base via-bg-base/60 to-transparent" />
                  </div>
                  <div className="relative p-6 -mt-8">
                    <h3 className={`font-display font-bold text-2xl ${colors.text} mb-3`}>
                      {edition.name}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {edition.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="relative py-20 bg-bg-elevated overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-28 bg-linear-to-b from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: "rgba(124,58,237,0.18)",
            maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')",
            WebkitMaskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')",
            maskRepeat: "repeat",
            WebkitMaskRepeat: "repeat",
            maskSize: "400px 400px",
            WebkitMaskSize: "400px 400px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 70% at 50% 50%, #0b0b16 20%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-6">
              {t.trust.heading} <span className="text-brand-yellow">{t.trust.headingHighlight}</span> {t.trust.headingSuffix}
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              {t.trust.text}
            </p>

            <div className="bg-bg-base rounded-2xl p-8 border border-white/5">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 12 2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  {t.trust.boxTitle}
                </h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed max-w-xl mx-auto">
                {t.trust.boxText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-bg-base overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-28 bg-linear-to-b from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: "rgba(124,58,237,0.18)",
            maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')",
            WebkitMaskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')",
            maskRepeat: "repeat",
            WebkitMaskRepeat: "repeat",
            maskSize: "400px 400px",
            WebkitMaskSize: "400px 400px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 70% at 50% 50%, #0b0b16 20%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
            {t.cta.heading} <span className="text-brand-yellow">{t.cta.headingHighlight}</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={localePath("/archive", lang as Locale)}
              className="px-8 py-3 rounded-xl bg-brand-yellow text-bg-base font-bold text-sm hover:bg-brand-gold transition-all duration-200 shadow-md shadow-brand-yellow/20"
            >
              {t.cta.browseArchive}
            </Link>
            <Link
              href={localePath("/contact", lang as Locale)}
              className="px-8 py-3 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow font-bold text-sm hover:bg-brand-yellow hover:text-bg-base transition-all duration-200"
            >
              {t.cta.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
