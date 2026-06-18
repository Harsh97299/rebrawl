import Link from "next/link"
import { releases as allReleases } from "@/lib/data"
import type { ApkRelease } from "@/lib/types"

interface ApkArchiveTableProps {
  data?: ApkRelease[]
  compact?: boolean
  showHeading?: boolean
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export default function ApkArchiveTable({
  data,
  compact = false,
  showHeading = true,
}: ApkArchiveTableProps) {
  const rows = data ?? allReleases
  const displayed = compact ? rows.slice(0, 3) : rows

  return (
    <section
      id="archive-preview"
      className="relative py-20 bg-bg-base overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(124,58,237,0.18)", maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", WebkitMaskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", maskRepeat: "repeat", WebkitMaskRepeat: "repeat", maskSize: "400px 400px", WebkitMaskSize: "400px 400px" }} aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-3">
                Version <span className="text-brand-yellow">Archive</span>
              </h2>
              <p className="text-text-muted text-lg">
                {compact
                  ? "Recent preserved versions — all builds verified."
                  : `${rows.length} builds archived — all virus-scanned and SHA-256 verified.`}
              </p>
            </div>
            {compact && (
              <Link
                href="/archive"
                className="hidden sm:inline-flex items-center gap-2 text-brand-yellow font-bold text-sm hover:underline shrink-0"
              >
                View all {allReleases.length} versions
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            )}
          </div>
        )}

        <div className="overflow-x-auto rounded-2xl border border-white/5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 bg-bg-elevated">
                {[
                  { label: "Version", className: "" },
                  { label: "Date", className: "hidden sm:table-cell" },
                  { label: "Size", className: "hidden md:table-cell" },
                  { label: "Android", className: "hidden lg:table-cell" },
                  { label: "SHA-256", className: "hidden xl:table-cell" },
                  { label: "Download", className: "text-right" },
                ].map((col) => (
                  <th
                    key={col.label}
                    className={`${col.className} py-4 px-5 font-display font-bold text-text-muted text-xs uppercase tracking-wider text-left`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayed.map((release, i) => (
                <tr
                  key={release.version}
                  className={`border-b border-white/5 last:border-0 transition-colors hover:bg-bg-elevated/50 ${
                    i % 2 === 0 ? "bg-bg-base" : "bg-bg-elevated/20"
                  }`}
                >
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono font-bold text-white">v{release.version}</span>
                      {release.latest && (
                        <span className="text-xs bg-success/15 text-success border border-success/20 px-2 py-0.5 rounded-full font-bold">
                          LATEST
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-5 text-text-muted hidden sm:table-cell">
                    {formatDate(release.date)}
                  </td>
                  <td className="py-4 px-5 text-text-muted hidden md:table-cell">{release.size}</td>
                  <td className="py-4 px-5 text-text-muted hidden lg:table-cell">
                    {release.androidMin}
                  </td>
                  <td className="py-4 px-5 hidden xl:table-cell">
                    <span className="font-mono text-white/40 text-xs">
                      {release.sha256.slice(0, 16)}…
                    </span>
                  </td>
                  <td className="py-4 px-5 text-right">
                    <a
                      href={release.downloadUrl}
                      className="inline-flex items-center gap-1.5 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-brand-yellow hover:text-bg-base transition-all duration-200"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-8 2h16v2H4v-2z" />
                      </svg>
                      APK
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {compact && (
          <div className="mt-5 text-center sm:hidden">
            <Link
              href="/archive"
              className="inline-flex items-center gap-2 text-brand-yellow font-bold text-sm hover:underline"
            >
              View all {allReleases.length} versions
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
