import type { Metadata } from "next"
import { Inter, Barlow_Condensed } from "next/font/google"
import { notFound } from "next/navigation"
import "../globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { getDefaultMetadata, buildWebSiteJsonLd, buildOrganizationJsonLd } from "@/lib/seo"
import { locales, isValidLocale, type Locale } from "@/lib/i18n"
import { getDictionary } from "./dictionaries"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
})

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  display: "swap",
})

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isValidLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return getDefaultMetadata(lang, dict)
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params
  if (!isValidLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${barlowCondensed.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebSiteJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationJsonLd()) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-base text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-yellow text-bg-base px-4 py-2 rounded-lg font-bold z-[100]"
        >
          {dict.common.skipToContent}
        </a>
        <Navbar lang={lang as Locale} dict={dict.nav} downloadVersions={dict.downloadVersions} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer lang={lang as Locale} dict={dict.footer} />
      </body>
    </html>
  )
}
