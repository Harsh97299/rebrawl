import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import ArchiveVersionPicker from "@/components/ArchiveVersionPicker"
import Disclaimer from "@/components/Disclaimer"
import { releases } from "@/lib/data"
import { buildBreadcrumbJsonLd, buildSoftwareApplicationJsonLd, getAlternates } from "@/lib/seo"
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
    title: dict.meta.archive.title,
    description: dict.meta.archive.description,
    alternates: getAlternates("/archive"),
  }
}

export default async function ArchivePage({ params }: PageProps) {
  const { lang } = await params
  if (!isValidLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: dict.common.home, url: "/" },
              { name: dict.common.apkArchive, url: "/archive" },
            ], lang as Locale)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSoftwareApplicationJsonLd()) }}
      />

      {/* Page hero */}
      <section
        className="relative pt-28 pb-16 border-b border-white/5 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 60%), #0b0b16",
        }}
      >
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
          <nav
            className="flex items-center gap-2 text-sm text-text-muted mb-8"
            aria-label="Breadcrumb"
          >
            <Link href={localePath("/", lang as Locale)} className="hover:text-white transition-colors">
              {dict.common.home}
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white" aria-current="page">
              {dict.common.apkArchive}
            </span>
          </nav>

          <div className="mb-12">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
              {dict.archive.heading} <span className="text-brand-yellow">{dict.archive.headingHighlight}</span>
            </h1>
            <p className="text-text-muted text-xl max-w-2xl">
              {dict.archive.subtitle.replace("{count}", String(releases.length))}
            </p>
          </div>

          <ArchiveVersionPicker lang={lang as Locale} dict={dict} />
        </div>
      </section>

      {/* ── Edition Comparison ── */}
      <section className="relative py-16 bg-bg-base overflow-hidden">
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
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-3 text-center">
          {dict.archive.compareHeading} <span className="text-brand-yellow">{dict.archive.compareHighlight}</span>
        </h2>
        <p className="text-text-muted text-center mb-10 max-w-xl mx-auto">
          {dict.archive.compareSubtitle}
        </p>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/2">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="px-6 py-4 text-text-muted font-semibold">{dict.archive.tableHeaders.feature}</th>
                <th className="px-6 py-4 text-brand-purple font-bold">{dict.archive.tableHeaders.mods}</th>
                <th className="px-6 py-4 text-brand-yellow font-bold">{dict.archive.tableHeaders.classic}</th>
                <th className="px-6 py-4 text-brand-blue font-bold">{dict.archive.tableHeaders.legacy}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white">
              <tr>
                <td className="px-6 py-4 text-text-muted">{dict.archive.tableRows.customBrawlers}</td>
                <td className="px-6 py-4">
                  <span className="text-green-400">&#10003;</span> {dict.archive.tableValues.yes70}
                </td>
                <td className="px-6 py-4">
                  <span className="text-red-400">&#10007;</span> {dict.archive.tableValues.no}
                </td>
                <td className="px-6 py-4">
                  <span className="text-red-400">&#10007;</span> {dict.archive.tableValues.no}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-text-muted">{dict.archive.tableRows.originalGameplay}</td>
                <td className="px-6 py-4">
                  <span className="text-red-400">&#10007;</span> {dict.archive.tableValues.modified}
                </td>
                <td className="px-6 py-4">
                  <span className="text-green-400">&#10003;</span> {dict.archive.tableValues.original}
                </td>
                <td className="px-6 py-4">
                  <span className="text-green-400">&#10003;</span> {dict.archive.tableValues.original}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-text-muted">{dict.archive.tableRows.androidVersion}</td>
                <td className="px-6 py-4">{dict.archive.tableValues.mods_android}</td>
                <td className="px-6 py-4">{dict.archive.tableValues.classic_android}</td>
                <td className="px-6 py-4">{dict.archive.tableValues.legacy_android}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-text-muted">{dict.archive.tableRows.serverStability}</td>
                <td className="px-6 py-4">{dict.archive.tableValues.high}</td>
                <td className="px-6 py-4">{dict.archive.tableValues.maximum}</td>
                <td className="px-6 py-4">{dict.archive.tableValues.maximum}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </section>


      <Disclaimer dict={dict.disclaimer} />
    </>
  )
}
