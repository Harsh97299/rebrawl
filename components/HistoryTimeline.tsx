import type { Dictionary } from "@/app/[lang]/dictionaries"

interface HistoryTimelineProps {
  dict: Dictionary
}

export default function HistoryTimeline({ dict }: HistoryTimelineProps) {
  return (
    <section id="history" className="relative py-20 md:py-28 bg-bg-elevated overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-28 bg-linear-to-b from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(124,58,237,0.18)", maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", WebkitMaskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", maskRepeat: "repeat", WebkitMaskRepeat: "repeat", maskSize: "400px 400px", WebkitMaskSize: "400px 400px" }} aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
            {dict.historyTimeline.heading} <span className="text-brand-yellow">{dict.historyTimeline.headingHighlight}</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {dict.historyTimeline.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative pl-10">
          <div
            className="absolute left-4 top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(124,58,237,0.5) 10%, rgba(124,58,237,0.5) 90%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {dict.timeline.map((event, i) => (
            <div key={i} className="relative mb-10 last:mb-0">
              <div
                className="absolute -left-[21px] top-4 w-3 h-3 rounded-full bg-brand-purple ring-4 ring-bg-elevated z-10"
                aria-hidden="true"
              />

              <article className="bg-bg-base rounded-2xl p-6 border border-white/5 hover:border-brand-purple/25 transition-all duration-300 group">
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1.5 bg-brand-yellow/10 text-brand-yellow text-xs font-extrabold px-3 py-1 rounded-full font-display">
                    {event.year}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-brand-yellow transition-colors">
                  {event.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm">{event.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
