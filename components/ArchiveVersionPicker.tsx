import Image from "next/image"
import Link from "next/link"
import type { Locale } from "@/lib/i18n"
import { localePath } from "@/lib/i18n"
import type { Dictionary } from "@/app/[lang]/dictionaries"

type AccentTokens = {
  border: string
  glow: string
  banner: string
  imageGlow: string
  badge: string
  bullet: string
  label: string
  button: string
}

const accents: Record<string, AccentTokens> = {
  purple: {
    border: "border-brand-purple/25 hover:border-brand-purple/60",
    glow: "hover:shadow-brand-purple/25",
    banner:
      "radial-gradient(120% 100% at 50% 0%, rgba(124,58,237,0.55) 0%, rgba(124,58,237,0.12) 55%, transparent 100%)",
    imageGlow: "drop-shadow-[0_12px_30px_rgba(124,58,237,0.55)]",
    badge: "bg-brand-purple/20 text-brand-purple border-brand-purple/30",
    bullet: "text-brand-purple",
    label: "text-brand-purple",
    button:
      "bg-brand-purple text-white hover:bg-brand-purple/90 shadow-brand-purple/30",
  },
  gold: {
    border: "border-brand-yellow/30 hover:border-brand-yellow/70",
    glow: "hover:shadow-brand-yellow/25",
    banner:
      "radial-gradient(120% 100% at 50% 0%, rgba(255,212,0,0.5) 0%, rgba(245,166,35,0.12) 55%, transparent 100%)",
    imageGlow: "drop-shadow-[0_12px_30px_rgba(255,212,0,0.5)]",
    badge: "bg-brand-yellow/20 text-brand-yellow border-brand-yellow/35",
    bullet: "text-brand-yellow",
    label: "text-brand-yellow",
    button:
      "bg-brand-yellow text-bg-base hover:bg-brand-gold shadow-brand-yellow/30",
  },
  blue: {
    border: "border-brand-blue/25 hover:border-brand-blue/60",
    glow: "hover:shadow-brand-blue/25",
    banner:
      "radial-gradient(120% 100% at 50% 0%, rgba(47,128,237,0.55) 0%, rgba(47,128,237,0.12) 55%, transparent 100%)",
    imageGlow: "drop-shadow-[0_12px_30px_rgba(47,128,237,0.55)]",
    badge: "bg-brand-blue/20 text-brand-blue border-brand-blue/30",
    bullet: "text-brand-blue",
    label: "text-brand-blue",
    button:
      "bg-brand-blue text-white hover:bg-brand-blue/90 shadow-brand-blue/30",
  },
}

const versionMeta = [
  { id: "mods", image: "/mods.webp", accent: "purple" },
  { id: "classic", image: "/classic.webp", accent: "gold" },
  { id: "legacy", image: "/legacy.webp", accent: "blue" },
]

interface ArchiveVersionPickerProps {
  lang: Locale
  dict: Dictionary
}

export default function ArchiveVersionPicker({ lang, dict }: ArchiveVersionPickerProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
      {versionMeta.map((v) => {
        const a = accents[v.accent]
        const vDict = dict.downloadVersions[v.id as keyof typeof dict.downloadVersions]

        return (
          <Link
            key={v.id}
            href={localePath(`/archive/${v.id}`, lang)}
            className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-bg-elevated border transition-all duration-300 hover:-translate-y-1.5 ${a.border} ${a.glow} shadow-xl shadow-black/30`}
          >
            {/* Featured image */}
            <div className="relative flex h-44 items-center justify-center p-4">
              <div
                className="absolute inset-0"
                style={{ background: a.banner }}
                aria-hidden="true"
              />
              {vDict.badge && (
                <span
                  className={`absolute top-4 left-4 z-10 rounded-full border px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${a.badge}`}
                >
                  ★ {vDict.badge}
                </span>
              )}
              <div className={`relative h-full aspect-square overflow-hidden rounded-xl ${a.imageGlow}`}>
                <Image
                  src={v.image}
                  alt={`${vDict.name} featured artwork`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-xl font-extrabold text-white">
                {vDict.name}
              </h3>
              <p className="mt-1 text-sm text-text-muted">{vDict.tagline}</p>

              <ul className="mt-4 space-y-2.5">
                {vDict.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-2 text-sm">
                    <span className={`mt-0.5 shrink-0 font-bold ${a.bullet}`} aria-hidden="true">
                      ›
                    </span>
                    <span className="text-text-muted leading-relaxed">
                      <span className={`font-bold ${a.label}`}>{f.label}:</span> {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <span
                className={`mt-6 flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-extrabold shadow-lg transition-all duration-200 group-hover:scale-[1.02] ${a.button}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-8 2h16v2H4v-2z" />
                </svg>
                {vDict.cta}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
