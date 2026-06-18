export default function Disclaimer() {
  return (
    <section className="relative py-12 bg-bg-base overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-28 bg-linear-to-b from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(124,58,237,0.18)", maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", WebkitMaskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", maskRepeat: "repeat", WebkitMaskRepeat: "repeat", maskSize: "400px 400px", WebkitMaskSize: "400px 400px" }} aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-bg-elevated rounded-2xl p-6 border border-white/5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-brand-blue text-lg leading-none">
              ℹ
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-white mb-2">Important Notice</h2>
              <p className="text-text-muted text-sm leading-relaxed">
                This is an independent preservation archive maintained by the ReBrawl community. ReBrawl is
                not affiliated with, endorsed by, or connected to Supercell Oy. Brawl Stars® is a registered
                trademark of Supercell. All APKs hosted here are preserved for historical and archival purposes
                only. Download and use at your own discretion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
