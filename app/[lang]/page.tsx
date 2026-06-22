import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Hero from "@/components/Hero"
import DownloadSection from "@/components/DownloadSection"
import FeatureGrid from "@/components/FeatureGrid"
import AboutSection from "@/components/AboutSection"
import FaqAccordion from "@/components/FaqAccordion"
import ThunderDivider from "@/components/ThunderDivider"
import { buildSoftwareApplicationJsonLd, buildFaqJsonLd, getAlternates } from "@/lib/seo"
import { isValidLocale, type Locale } from "@/lib/i18n"
import { getDictionary } from "./dictionaries"

type PageProps = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params
  if (!isValidLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    alternates: getAlternates("/", lang),
  }
}

export default async function Home({ params }: PageProps) {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSoftwareApplicationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqItems)) }}
      />
      <Hero lang={lang as Locale} dict={dict} />
      <ThunderDivider />
      <FeatureGrid dict={dict} />
      <ThunderDivider />
      <AboutSection dict={dict} />
      <ThunderDivider />
      <DownloadSection dict={dict} lang={lang as Locale} />
      <ThunderDivider />
      <FaqAccordion
        items={faqItems.slice(0, 3)}
        subtitle={dict.faq.homeSubtitle}
        showAllLink
        viewAllText={dict.faq.viewAll}
        lang={lang as Locale}
      />
    </>
  )
}
