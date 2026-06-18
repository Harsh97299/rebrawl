import { downloadVersions } from "@/lib/data"
import DownloadCard from "./DownloadCard"

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "#0b0b16" }}
    >
      {/* Top & bottom vignettes — merge into ThunderDivider */}
      <div className="absolute top-0 inset-x-0 h-28 bg-linear-to-b from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />

      {/* Single combined tile — all 4 icons in one 400×400 grid, guaranteed no overlap */}
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

      {/* Radial vignette — fades pattern toward center so content stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, #0b0b16 20%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            Download <span className="text-brand-yellow">Versions</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Three flavors of reBrawl — pick the build that fits your device and play style. Every
            version is verified and virus-scanned.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {downloadVersions.map((version) => (
            <DownloadCard key={version.id} version={version} />
          ))}
        </div>
      </div>
    </section>
  )
}
