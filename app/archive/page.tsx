import type { Metadata } from "next"
import Link from "next/link"
import ApkArchiveTable from "@/components/ApkArchiveTable"
import Disclaimer from "@/components/Disclaimer"
import { releases } from "@/lib/data"
import { buildBreadcrumbJsonLd, buildSoftwareApplicationJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: "APK Archive — All ReBrawl Versions",
  description:
    "Complete archive of all preserved ReBrawl APK versions. Every build is virus-scanned, SHA-256 verified, and available for free download.",
  alternates: {
    canonical: "/archive",
  },
}

export default function ArchivePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "APK Archive", url: "/archive" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSoftwareApplicationJsonLd()) }}
      />

      {/* Page hero */}
      <section
        className="pt-28 pb-16 border-b border-white/5"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 60%), #0b0b16",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-sm text-text-muted mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white" aria-current="page">
              APK Archive
            </span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
                APK <span className="text-brand-yellow">Archive</span>
              </h1>
              <p className="text-text-muted text-xl max-w-2xl">
                {releases.length} preserved builds — all virus-scanned, SHA-256 verified, and
                permanently available.
              </p>
            </div>
            <a
              href={releases.find((r) => r.latest)?.downloadUrl ?? "#"}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-brand-yellow text-bg-base rounded-xl font-extrabold hover:bg-brand-gold transition-colors shadow-lg shadow-brand-yellow/20 shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-8 2h16v2H4v-2z" />
              </svg>
              Download Latest
            </a>
          </div>
        </div>
      </section>

      <ApkArchiveTable data={releases} showHeading={false} />
      <Disclaimer />
    </>
  )
}
