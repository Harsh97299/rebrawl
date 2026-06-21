import Image from "next/image"
import type { Dictionary } from "@/app/[lang]/dictionaries"

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

interface FeatureGridProps {
  dict: Dictionary
}

export default function FeatureGrid({ dict }: FeatureGridProps) {
  const featureIcons = [
    "/icons/spray_anime_gem.webp",
    "/icons/player_icon_jacky_esports.webp",
    "/icons/spray_smash.webp",
    "/icons/spray_strikers_catchball.webp",
    "/icons/spray_strikers_star.webp",
    "/icons/player_icon_anime_spike.webp",
  ]

  return (
    <section id="features" className="relative py-20 md:py-28 bg-bg-base overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-28 bg-linear-to-b from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />

      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(124,58,237,0.18)", maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", WebkitMaskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", maskRepeat: "repeat", WebkitMaskRepeat: "repeat", maskSize: "400px 400px", WebkitMaskSize: "400px 400px" }} aria-hidden="true" />

      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-purple/12 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-purple/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-3/4 w-72 h-72 rounded-full bg-brand-purple/10 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/6 w-64 h-64 rounded-full bg-brand-purple/8 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 text-center mb-4 relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
          {dict.features.heading}{" "}
          <span className="text-brand-yellow">{dict.features.headingHighlight}</span>
        </h2>
        <p className="mt-4 text-base text-text-muted max-w-2xl mx-auto">
          {dict.features.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
        {dict.features.items.map((feature, index) => (
          <Feature
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={featureIcons[index]}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

function Feature({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: string
  index: number
}) {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-white/10",
        (index === 0 || index === 3) && "lg:border-l border-white/10",
        index < 3 && "lg:border-b border-white/10",
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-t from-bg-elevated to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-b from-bg-elevated to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">
        <Image src={icon} alt={title} width={40} height={40} className="w-10 h-10 object-contain" />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/10 transition-all duration-200 origin-center">
          <div
            className="h-0 group-hover/feature:h-full w-full rounded-tr-full rounded-br-full transition-all duration-200"
            style={{ backgroundColor: "#7c3aed" }}
          />
        </div>
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-text-muted max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}
