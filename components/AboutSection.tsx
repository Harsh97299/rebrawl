import type { Dictionary } from "@/app/[lang]/dictionaries"

interface AboutSectionProps {
  dict: Dictionary
}

export default function AboutSection({ dict }: AboutSectionProps) {
  const stats = [
    { value: "500K+", label: dict.stats.playersServed },
    { value: "150+", label: dict.stats.versionsArchived },
    { value: "4+", label: dict.stats.yearsOfHistory },
    { value: "2M+", label: dict.stats.communityMembers },
  ]

  return (
    <section id="about" className="relative py-20 md:py-28 bg-bg-elevated overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-28 bg-linear-to-b from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(124,58,237,0.18)", maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", WebkitMaskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", maskRepeat: "repeat", WebkitMaskRepeat: "repeat", maskSize: "400px 400px", WebkitMaskSize: "400px 400px" }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            {dict.aboutSection.heading} <span className="text-brand-yellow">{dict.aboutSection.headingHighlight}</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {dict.aboutSection.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-bg-base rounded-2xl p-6 border border-white/5">
            <h3 className="font-display font-bold text-xl text-white mb-3">{dict.aboutSection.whyTitle}</h3>
            <p className="text-text-muted leading-relaxed text-sm">{dict.aboutSection.whyText}</p>
          </div>

          <div className="bg-bg-base rounded-2xl p-6 border border-white/5">
            <h3 className="font-display font-bold text-xl text-white mb-3">{dict.aboutSection.archiveTitle}</h3>
            <p className="text-text-muted leading-relaxed text-sm">{dict.aboutSection.archiveText}</p>
          </div>

          <div className="bg-bg-base rounded-2xl p-6 border border-white/5">
            <h3 className="font-display font-bold text-xl text-white mb-3">{dict.aboutSection.communityTitle}</h3>
            <p className="text-text-muted leading-relaxed text-sm">{dict.aboutSection.communityText}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mt-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-bg-base rounded-xl p-5 text-center border border-white/5"
            >
              <div className="font-display text-2xl font-extrabold text-brand-yellow">{stat.value}</div>
              <div className="text-text-muted text-xs mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
