import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import FaqAccordion from "@/components/FaqAccordion"
import Disclaimer from "@/components/Disclaimer"
import { buildFaqJsonLd, buildBreadcrumbJsonLd, getAlternates } from "@/lib/seo"
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
    title: dict.meta.faq.title,
    description: dict.meta.faq.description,
    alternates: getAlternates("/faq", lang),
  }
}

export default async function FaqPage({ params }: PageProps) {
  const { lang } = await params
  if (!isValidLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)
  const faqItems = dict.faq.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: dict.common.home, url: "/" },
              { name: "FAQ", url: "/faq" },
            ], lang as Locale)
          ),
        }}
      />

      {/* Page hero */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{
          backgroundImage: "url('/background/about-background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(47,128,237,0.2) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 50% 100%, rgba(47,128,237,0.2) 0%, transparent 50%)
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
              FAQ
            </span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
              {dict.faqPage.heading} <span className="text-brand-yellow">{dict.faqPage.headingHighlight}</span>
            </h1>
            <p className="text-text-muted text-xl">
              {dict.faqPage.subtitle}
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} lang={lang as Locale} />
      <Disclaimer dict={dict.disclaimer} />
    </>
  )
}
