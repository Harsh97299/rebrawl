import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { downloadVersions, versionPages } from "@/lib/data"
import Disclaimer from "@/components/Disclaimer"
import FaqAccordion from "@/components/FaqAccordion"
import { buildBreadcrumbJsonLd, buildSoftwareApplicationJsonLd } from "@/lib/seo"

const accentStyles: Record<string, {
  gradient: string
  border: string
  badge: string
  bullet: string
  label: string
  button: string
  imageGlow: string
  highlight: string
  highlightBorder: string
  stepNumber: string
  tableAccent: string
}> = {
  purple: {
    gradient: "rgba(124,58,237,0.2)",
    border: "border-brand-purple/30",
    badge: "bg-brand-purple/20 text-brand-purple border-brand-purple/30",
    bullet: "text-brand-purple",
    label: "text-brand-purple",
    button: "bg-brand-purple text-white hover:bg-brand-purple/90 shadow-brand-purple/30",
    imageGlow: "drop-shadow-[0_16px_40px_rgba(124,58,237,0.5)]",
    highlight: "bg-brand-purple/5 border-brand-purple/15",
    highlightBorder: "border-l-brand-purple/40",
    stepNumber: "bg-brand-purple/15 text-brand-purple border-brand-purple/25",
    tableAccent: "border-brand-purple/20",
  },
  gold: {
    gradient: "rgba(255,212,0,0.15)",
    border: "border-brand-yellow/30",
    badge: "bg-brand-yellow/20 text-brand-yellow border-brand-yellow/35",
    bullet: "text-brand-yellow",
    label: "text-brand-yellow",
    button: "bg-brand-yellow text-bg-base hover:bg-brand-gold shadow-brand-yellow/30",
    imageGlow: "drop-shadow-[0_16px_40px_rgba(255,212,0,0.45)]",
    highlight: "bg-brand-yellow/5 border-brand-yellow/15",
    highlightBorder: "border-l-brand-yellow/40",
    stepNumber: "bg-brand-yellow/15 text-brand-yellow border-brand-yellow/25",
    tableAccent: "border-brand-yellow/20",
  },
  blue: {
    gradient: "rgba(47,128,237,0.2)",
    border: "border-brand-blue/30",
    badge: "bg-brand-blue/20 text-brand-blue border-brand-blue/30",
    bullet: "text-brand-blue",
    label: "text-brand-blue",
    button: "bg-brand-blue text-white hover:bg-brand-blue/90 shadow-brand-blue/30",
    imageGlow: "drop-shadow-[0_16px_40px_rgba(47,128,237,0.5)]",
    highlight: "bg-brand-blue/5 border-brand-blue/15",
    highlightBorder: "border-l-brand-blue/40",
    stepNumber: "bg-brand-blue/15 text-brand-blue border-brand-blue/25",
    tableAccent: "border-brand-blue/20",
  },
}

const heroBackgrounds: Record<string, string> = {
  mods: "/background/mods-background.webp",
  classic: "/background/classic-background.webp",
  legacy: "/background/legacy-background.webp",
}

const patternOverlay = (
  <>
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
  </>
)

export function generateStaticParams() {
  return downloadVersions.map((v) => ({ slug: v.id }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const version = downloadVersions.find((v) => v.id === slug)
  const page = versionPages[slug]
  if (!version || !page) return {}

  return {
    title: `${version.name} APK Download — Official reBrawl Archive`,
    description: page.description.slice(0, 160),
    alternates: { canonical: `/archive/${slug}` },
  }
}

export default async function VersionPage({ params }: PageProps) {
  const { slug } = await params
  const version = downloadVersions.find((v) => v.id === slug)
  const page = versionPages[slug]
  if (!version || !page) notFound()

  const a = accentStyles[version.accent]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "APK Archive", url: "/archive" },
              { name: version.name, url: `/archive/${slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSoftwareApplicationJsonLd()) }}
      />

      {/* ── Hero ── */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url('${heroBackgrounds[slug] ?? ""}')`,
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
              radial-gradient(ellipse 70% 50% at 50% 0%, ${a.gradient} 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 50% 100%, ${a.gradient} 0%, transparent 50%)
            `,
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-sm text-text-muted mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/archive" className="hover:text-white transition-colors">Archive</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white" aria-current="page">{version.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {version.badge && (
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-extrabold uppercase tracking-wider mb-6 ${a.badge}`}
                >
                  ★ {version.badge}
                </span>
              )}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5">
                {version.name} APK
                <span className="block text-lg sm:text-xl font-bold text-text-muted mt-2 font-sans tracking-normal">
                  (Official Archive)
                </span>
              </h1>
              <p className="text-text-muted text-lg leading-relaxed max-w-xl">
                {page.description}
              </p>
            </div>

            <div className="flex justify-center">
              <div className={`relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 ${a.imageGlow}`}>
                <Image
                  src={version.image}
                  alt={`${version.name} featured artwork`}
                  fill
                  sizes="320px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="relative py-20 bg-bg-elevated overflow-hidden">
        {patternOverlay}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {page.highlights.map((h) => (
              <div
                key={h.title}
                className={`rounded-xl border p-6 ${a.highlight} ${a.highlightBorder} border-l-4`}
              >
                <h3 className={`font-display text-lg font-extrabold mb-2 ${a.label}`}>
                  {h.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Details ── */}
      <section className="relative py-20 bg-bg-base overflow-hidden">
        {patternOverlay}
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">
            Technical <span className={a.label}>Details</span>
          </h2>
          <div className={`rounded-2xl border bg-bg-elevated overflow-hidden ${a.tableAccent}`}>
            <table className="w-full text-sm">
              <tbody>
                {page.techDetails.map((d, i) => (
                  <tr
                    key={d.label}
                    className={`border-b border-white/5 last:border-0 ${
                      i % 2 === 0 ? "" : "bg-white/[0.02]"
                    }`}
                  >
                    <td className="py-4 px-6 font-display font-bold text-text-muted text-xs uppercase tracking-wider w-1/3">
                      {d.label}
                    </td>
                    <td className="py-4 px-6 text-white font-medium">
                      {d.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Installation Guide ── */}
      <section className="relative py-20 bg-bg-elevated overflow-hidden">
        {patternOverlay}
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">
            Installation & <span className={a.label}>Setup Guide</span>
          </h2>
          <p className="text-text-muted text-center mb-10 -mt-4">
            Follow these steps to get reBrawl running on your device — it only takes a minute.
          </p>
          <div className="space-y-4">
            {page.installSteps.map((step, i) => (
              <div
                key={step.title}
                className="flex gap-5 items-start"
              >
                <span
                  className={`shrink-0 w-9 h-9 rounded-lg border flex items-center justify-center font-display font-extrabold text-sm ${a.stepNumber}`}
                >
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="font-display font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section className="relative py-20 bg-bg-base overflow-hidden">
        {patternOverlay}
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-2xl border bg-bg-elevated p-8 sm:p-10 text-center ${a.border}`}>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {page.downloadLabel}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-muted mb-8">
              <span>Version: <strong className="text-white">{page.downloadVersion}</strong></span>
              <span>Size: <strong className="text-white">{page.downloadSize}</strong></span>
              <span className="flex items-center gap-1.5">
                Status:
                <strong className="text-success flex items-center gap-1">
                  {page.downloadStatus}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </strong>
              </span>
            </div>
            <a
              href={version.downloadUrl}
              className={`inline-flex items-center gap-2.5 px-10 py-4 rounded-xl text-base font-extrabold shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] ${a.button}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-8 2h16v2H4v-2z" />
              </svg>
              {version.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {page.faq.length > 0 && (
        <FaqAccordion
          items={page.faq}
          subtitle={`Common questions about the ${version.name} edition.`}
        />
      )}

      {/* ── Other Versions ── */}
      <section className="relative py-16 bg-bg-base overflow-hidden">
        {patternOverlay}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-extrabold text-white mb-2">
            Choose Your reBrawl Edition
          </h2>
          <p className="text-text-muted mb-8">
            Each edition offers a unique gameplay experience. Find the one that fits your style.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {downloadVersions
              .filter((v) => v.id !== slug)
              .map((v) => {
                const va = accentStyles[v.accent]
                return (
                  <Link
                    key={v.id}
                    href={`/archive/${v.id}`}
                    className={`flex items-center gap-4 p-5 rounded-xl border bg-bg-elevated hover:bg-bg-hover transition-all duration-200 ${va.border}`}
                  >
                    <div className={`relative w-14 h-14 shrink-0 ${va.imageGlow}`}>
                      <Image
                        src={v.image}
                        alt={v.name}
                        fill
                        sizes="56px"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-white">{v.name}</h3>
                      <p className="text-sm text-text-muted truncate">{v.tagline}</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-text-muted shrink-0" aria-hidden="true">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>

      <Disclaimer />
    </>
  )
}
