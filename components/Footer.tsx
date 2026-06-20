import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/archive", label: "APK Archive" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

const legalLinks = [
  { href: "/faq#disclaimer", label: "Disclaimer" },
  { href: "/faq#safety", label: "Safety Info" },
]

export default function Footer() {
  return (
    <footer className="relative bg-black/60 border-t border-white/5 overflow-visible">
      {/* Brawler character — on mobile: centered above footer content; on desktop: straddles right edge */}
      <div
        className="hidden lg:block absolute right-16 bottom-0 w-80 pointer-events-none z-30 -translate-y-[20%]"
        aria-hidden="true"
      >
        <Image
          src="/footer-brawl.webp"
          alt=""
          width={400}
          height={400}
          className="w-full h-auto opacity-80"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.webp" alt="ReBrawl logo" width={32} height={32} className="rounded-lg" />
              <span className="font-display text-2xl font-extrabold text-white">
                Re<span className="text-brand-yellow">Brawl</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              The Official reBrawl Archive — the legendary Brawl Stars private server. Every version
              verified and ready to download for the community.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold text-xs text-text-muted uppercase tracking-wider mb-4">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-bold text-xs text-text-muted uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5 mb-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-text-muted text-xs leading-relaxed">
              Not affiliated with Supercell Oy.
              <br />
              Brawl Stars® is a trademark of Supercell.
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Official reBrawl Archive. A community-driven project.
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs text-success bg-success/10 border border-success/20 px-3 py-1.5 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            Official Archive
          </span>
        </div>
      </div>
    </footer>
  )
}
