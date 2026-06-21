import Image from "next/image"
import Link from "next/link"

interface DownloadCardProps {
  name: string
  tagline: string
  image: string
  accent: "purple" | "gold" | "blue"
  features: { label: string; text: string }[]
  cta: string
  href: string
  badge?: string
}

type AccentStyle = {
  border: string
  glow: string
  banner: string
  imageGlow: string
  badge: string
  bullet: string
  label: string
  button: string
}

const accents: Record<string, AccentStyle> = {
  purple: {
    border: "border-brand-purple/25 hover:border-brand-purple/60",
    glow: "hover:shadow-brand-purple/25",
    banner: "radial-gradient(120% 100% at 50% 0%, rgba(124,58,237,0.55) 0%, rgba(124,58,237,0.12) 55%, transparent 100%)",
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
    banner: "radial-gradient(120% 100% at 50% 0%, rgba(255,212,0,0.5) 0%, rgba(245,166,35,0.12) 55%, transparent 100%)",
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
    banner: "radial-gradient(120% 100% at 50% 0%, rgba(47,128,237,0.55) 0%, rgba(47,128,237,0.12) 55%, transparent 100%)",
    imageGlow: "drop-shadow-[0_12px_30px_rgba(47,128,237,0.55)]",
    badge: "bg-brand-blue/20 text-brand-blue border-brand-blue/30",
    bullet: "text-brand-blue",
    label: "text-brand-blue",
    button: "bg-brand-blue text-white hover:bg-brand-blue/90 shadow-brand-blue/30",
  },
}

export default function DownloadCard({ name, tagline, image, accent, features, cta, href, badge }: DownloadCardProps) {
  const a = accents[accent]

  return (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-bg-elevated border ${a.border} ${a.glow} shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-1.5`}
    >
      {/* Featured image */}
      <div className="relative flex h-52 items-center justify-center p-4">
        <div
          className="absolute inset-0"
          style={{ background: a.banner }}
          aria-hidden="true"
        />
        {badge && (
          <span
            className={`absolute top-6 left-6 z-10 rounded-full border px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${a.badge}`}
          >
            ★ {badge}
          </span>
        )}
        <div className={`relative h-full aspect-square overflow-hidden rounded-xl ${a.imageGlow}`}>
          <Image
            src={image}
            alt={`${name} featured artwork`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-extrabold text-white">{name}</h3>
        <p className="mt-1 text-sm text-text-muted">{tagline}</p>

        <ul className="mt-6 space-y-3.5">
          {features.map((f) => (
            <li key={f.label} className="flex items-start gap-2.5 text-sm">
              <span className={`mt-0.5 shrink-0 font-bold ${a.bullet}`} aria-hidden="true">
                ›
              </span>
              <span className="text-text-muted leading-relaxed">
                <span className={`font-bold ${a.label}`}>{f.label}:</span> {f.text}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className={`mt-8 flex items-center justify-center gap-2.5 rounded-xl py-4 text-base font-extrabold shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] ${a.button}`}
        >
          {cta}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
