import { stats } from "@/lib/data"

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-bg-elevated overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-28 bg-linear-to-b from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(124,58,237,0.18)", maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", WebkitMaskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", maskRepeat: "repeat", WebkitMaskRepeat: "repeat", maskSize: "400px 400px", WebkitMaskSize: "400px 400px" }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            About <span className="text-brand-yellow">ReBrawl</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            The legendary Brawl Stars private server that redefined how the community played.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-bg-base rounded-2xl p-6 border border-white/5">
            <h3 className="font-display font-bold text-xl text-white mb-3">What was ReBrawl?</h3>
            <p className="text-text-muted leading-relaxed text-sm">
              ReBrawl was the most popular Brawl Stars private server ever created. From 2019 to 2023, it gave
              players unlimited gems, every brawler fully unlocked at max power, exclusive custom game modes,
              and cross-region multiplayer — all completely free. At its peak, over 500,000 players called
              ReBrawl home.
            </p>
          </div>

          <div className="bg-bg-base rounded-2xl p-6 border border-white/5">
            <h3 className="font-display font-bold text-xl text-white mb-3">The Official Archive</h3>
            <p className="text-text-muted leading-relaxed text-sm">
              This site is the official ReBrawl archive — the authoritative source preserving every version
              for the community. Every APK hosted here is the original signed build, virus-scanned and verified
              with a SHA-256 checksum. We never modify, repack, or tamper with any build.
            </p>
          </div>

          <div className="bg-bg-base rounded-2xl p-6 border border-white/5">
            <h3 className="font-display font-bold text-xl text-white mb-3">Our Mission</h3>
            <p className="text-text-muted leading-relaxed text-sm">
              ReBrawl may no longer have active servers, but its legacy lives on. Our mission is to preserve
              every version of ReBrawl so players can revisit the experience that defined private server gaming
              for the Brawl Stars community. Built by players, for players.
            </p>
          </div>
        </div>

        {/* Stats */}
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
