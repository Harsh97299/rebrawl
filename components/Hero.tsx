import { stats, heroIcons } from "@/lib/data"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: "url('/hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark transparent overlay */}
      <div className="absolute inset-0 bg-black/85" aria-hidden="true" />

      {/* Subtle brand atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,58,237,0.10) 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex flex-col items-center text-center">
        {/* Official badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/30 text-brand-purple text-xs font-bold uppercase tracking-wider mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" aria-hidden="true" />
          Official ReBrawl Archive
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6">
          The Legendary
          <br />
          <span className="text-brand-yellow">Brawl Stars</span>
          <br />
          Private Server
        </h1>

        <p className="text-text-muted text-xl leading-relaxed mb-10 max-w-xl">
          The official ReBrawl archive. Every version preserved, verified, and ready to download.
          Relive unlimited gems, all brawlers unlocked, and exclusive game modes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-yellow text-bg-base rounded-xl font-extrabold text-lg hover:bg-brand-gold hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 shadow-xl shadow-brand-yellow/20"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-8 2h16v2H4v-2z" />
            </svg>
            Download Latest APK
          </a>
          <a
            href="/archive"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/15 text-white rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/25 transition-all duration-200"
          >
            Explore Archive
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl w-full mb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5"
            >
              <div className="font-display text-2xl font-extrabold text-brand-yellow">
                {stat.value}
              </div>
              <div className="text-text-muted text-xs mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Brawler collage */}
        <div className="relative w-full max-w-sm">
          <div className="grid grid-cols-3 gap-3" aria-hidden="true">
            {heroIcons.map((src, i) => (
              <div
                key={src}
                className={`relative aspect-square rounded-2xl overflow-hidden bg-bg-elevated border border-white/5 ${
                  i % 2 !== 0 ? "animate-float" : ""
                }`}
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <img
                  src={src}
                  alt="ReBrawl brawler"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/30 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
          {/* Decorative glow */}
          <div
            className="absolute inset-0 -z-10 blur-3xl scale-125 bg-brand-purple/15 rounded-3xl"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Bottom vignette — merges into ThunderDivider */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-bg-base to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
