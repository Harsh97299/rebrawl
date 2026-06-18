const badges = [
  { icon: "✓", label: "Official Archive", highlight: true },
  { icon: "🛡", label: "Virus-Scanned" },
  { icon: "🔐", label: "SHA-256 Verified" },
  { icon: "📦", label: "150+ Versions Archived" },
  { icon: "📅", label: "Preserved Since 2019" },
  { icon: "⚡", label: "Free Download" },
]

export default function TrustBar() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#ffd400", paddingTop: "80px", paddingBottom: "28px" }}
      aria-label="Trust signals"
    >
      {/* Dark W-cut polygon — same shape as ThunderDivider */}
      <svg
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{ height: "80px" }}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polygon
          points="0,0 1440,0 1440,20 1080,64 720,20 360,64 0,20"
          fill="#0b0b16"
        />
      </svg>

      {/* Pattern overlay — dark icons on yellow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.10)",
          maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')",
          WebkitMaskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')",
          maskRepeat: "repeat",
          WebkitMaskRepeat: "repeat",
          maskSize: "400px 400px",
          WebkitMaskSize: "400px 400px",
        }}
      />

      {/* Badge row */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {badges.map((badge, i) => (
            <div key={badge.label} className="flex items-center gap-5">
              <div
                className={`flex items-center gap-2 text-sm font-bold ${
                  badge.highlight ? "text-black" : "text-black/60"
                }`}
              >
                <span className="text-base leading-none">{badge.icon}</span>
                <span>{badge.label}</span>
                {badge.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-black/40 animate-pulse" />
                )}
              </div>
              {i < badges.length - 1 && (
                <span className="text-black/20 text-lg font-light select-none">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
