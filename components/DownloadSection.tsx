import DownloadCard from "./DownloadCard"
import type { Dictionary } from "@/app/[lang]/dictionaries"
import { localePath, type Locale } from "@/lib/i18n"

interface DownloadSectionProps {
  dict: Dictionary
  lang: Locale
}

const versionMeta = [
  { id: "mods", image: "/mods.webp", accent: "purple" as const },
  { id: "classic", image: "/classic.webp", accent: "gold" as const },
  { id: "legacy", image: "/legacy.webp", accent: "blue" as const },
]

export default function DownloadSection({ dict, lang }: DownloadSectionProps) {
  return (
    <section
      id="download"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "#0b0b16" }}
    >
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
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, #0b0b16 20%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            {dict.download.heading} <span className="text-brand-yellow">{dict.download.headingHighlight}</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            {dict.download.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {versionMeta.map((v) => {
            const vDict = dict.downloadVersions[v.id as keyof typeof dict.downloadVersions]
            return (
              <DownloadCard
                key={v.id}
                name={vDict.name}
                tagline={vDict.tagline}
                image={v.image}
                accent={v.accent}
                features={vDict.features}
                cta={vDict.cta}
                href={localePath(`/archive/${v.id}`, lang)}
                badge={vDict.badge}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
