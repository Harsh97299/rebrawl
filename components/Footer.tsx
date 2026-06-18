import Link from "next/link"

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
    <footer className="bg-black/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-lg bg-brand-yellow flex items-center justify-center font-black text-bg-base text-lg leading-none">
                ⚡
              </span>
              <span className="font-display text-2xl font-extrabold text-white">
                Re<span className="text-brand-yellow">Brawl</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              The official archive of ReBrawl — the legendary Brawl Stars private server. Every version
              preserved for the community.
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
            © {new Date().getFullYear()} ReBrawl Archive. Community preservation project.
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
