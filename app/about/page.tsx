import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { buildBreadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: "About Us — Official reBrawl Archive",
  description:
    "Learn about the Official reBrawl Archive — the community-driven home for the world's most famous Brawl Stars private server. Explore custom content, exclusive skins, and everything reBrawl has to offer.",
  alternates: {
    canonical: "/about",
  },
}

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Verified Downloads",
    description:
      "We host every reBrawl version exactly as the original developers released it — verified, virus-scanned, and ready to download.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Safe & Trusted",
    description:
      "Every reBrawl APK in the Official reBrawl Archive is digitally scanned and verified. No malware, no adware — just clean builds you can trust.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Community First",
    description:
      "We provide honest, clear information. If something needs explaining, we break it down. The active community deserves transparency.",
  },
]

const branches = [
  {
    name: "reBrawl Mods",
    accent: "purple" as const,
    image: "/background/mods-background.webp",
    description:
      "The creative playground — 30+ custom brawlers, exclusive skins, and fan-made game modes that push the limits of Brawl Stars.",
  },
  {
    name: "reBrawl Classic",
    accent: "gold" as const,
    image: "/background/classic-background.webp",
    description:
      "The community favorite — original Brawl Stars mechanics with unlimited resources and every brawler unlocked from the start.",
  },
  {
    name: "reBrawl Legacy",
    accent: "blue" as const,
    image: "/background/legacy-background.webp",
    description:
      "Optimized for every device — smooth gameplay on older and budget Android phones so no player gets left behind.",
  },
]

const accentMap = {
  purple: {
    text: "text-brand-purple",
    border: "border-brand-purple/25",
    bg: "bg-brand-purple/10",
    glow: "shadow-brand-purple/10",
  },
  gold: {
    text: "text-brand-yellow",
    border: "border-brand-yellow/25",
    bg: "bg-brand-yellow/10",
    glow: "shadow-brand-yellow/10",
  },
  blue: {
    text: "text-brand-blue",
    border: "border-brand-blue/25",
    bg: "bg-brand-blue/10",
    glow: "shadow-brand-blue/10",
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{
          backgroundImage: "url('/background/about-background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80" aria-hidden="true" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
        {/* Accent atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.2) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,58,237,0.2) 0%, transparent 50%)
            `,
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-sm text-text-muted mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white" aria-current="page">
              About
            </span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
              About <span className="text-brand-yellow">Us</span>
            </h1>
            <p className="text-text-muted text-xl leading-relaxed">
              The community-driven home for reBrawl — the world&apos;s most famous Brawl Stars private server. Custom content, exclusive skins, and a fresh experience for every player.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative py-20 bg-bg-base overflow-hidden">
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
            background: "radial-gradient(ellipse 70% 70% at 50% 50%, #0b0b16 20%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-6">
              Who We <span className="text-brand-purple">Are</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Welcome to the Official reBrawl Archive. We&apos;re a team of dedicated Brawl Stars fans, mobile gaming enthusiasts, and long-time members of the reBrawl community.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              Our mission is simple: to provide a safe, transparent, and feature-packed resource for players who want to explore everything reBrawl has to offer — from the chaotic custom content of reBrawl Mods to the smooth, optimized experience of reBrawl Legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative py-20 bg-bg-elevated overflow-hidden">
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
            background: "radial-gradient(ellipse 70% 70% at 50% 50%, #0b0b16 20%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4 text-center">
            Why We <span className="text-brand-yellow">Built This</span>
          </h2>
          <p className="text-text-muted text-lg text-center max-w-2xl mx-auto mb-14">
            The reBrawl community deserves a trusted home for verified downloads, safe reBrawl APKs, and honest information about the Brawl Stars private server experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-bg-base rounded-2xl p-6 border border-white/5 hover:border-brand-purple/25 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mb-5">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="relative py-20 bg-bg-base overflow-hidden">
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
            background: "radial-gradient(ellipse 70% 70% at 50% 50%, #0b0b16 20%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4 text-center">
            Explore <span className="text-brand-yellow">reBrawl Editions</span>
          </h2>
          <p className="text-text-muted text-lg text-center max-w-2xl mx-auto mb-14">
            Three unique editions, each with its own flavor of the reBrawl experience. Discover custom brawlers, exclusive skins, and creative gameplay across all three.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {branches.map((branch) => {
              const colors = accentMap[branch.accent]
              return (
                <div
                  key={branch.name}
                  className={`relative rounded-2xl border ${colors.border} overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-lg ${colors.glow}`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={branch.image}
                      alt={branch.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-bg-base via-bg-base/60 to-transparent" />
                  </div>
                  <div className="relative p-6 -mt-8">
                    <h3 className={`font-display font-bold text-2xl ${colors.text} mb-3`}>
                      {branch.name}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {branch.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="relative py-20 bg-bg-elevated overflow-hidden">
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
            background: "radial-gradient(ellipse 70% 70% at 50% 50%, #0b0b16 20%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-6">
              Why <span className="text-brand-yellow">Trust</span> Us?
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              We are not the developers of reBrawl — we&apos;re an independent, community-driven project run by passionate Brawl Stars fans. By maintaining the Official reBrawl Archive, we make sure the incredible custom content, creative gameplay innovations, and community-driven features that the reBrawl team built are always accessible to players.
            </p>

            <div className="bg-bg-base rounded-2xl p-8 border border-white/5">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 12 2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  Transparency Over Clicks
                </h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed max-w-xl mx-auto">
                Our guides are written based on real device testing (Android 4.3 through Android 14) and hands-on experience with every reBrawl edition. We believe in honest, clear information — not clickbait.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-bg-base overflow-hidden">
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
            background: "radial-gradient(ellipse 70% 70% at 50% 50%, #0b0b16 20%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
            Explore the <span className="text-brand-yellow">Official reBrawl Archive</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
            Browse the complete collection of reBrawl builds, discover custom content, or get in touch with the team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/archive"
              className="px-8 py-3 rounded-xl bg-brand-yellow text-bg-base font-bold text-sm hover:bg-brand-gold transition-all duration-200 shadow-md shadow-brand-yellow/20"
            >
              Browse Archive
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow font-bold text-sm hover:bg-brand-yellow hover:text-bg-base transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
