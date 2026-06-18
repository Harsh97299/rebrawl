import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us — ReBrawl Archive",
  description:
    "Get in touch with the ReBrawl archive team. Report issues, ask questions, or share feedback about the official ReBrawl preservation project.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="pt-28 pb-16 border-b border-white/5"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 60%), #0b0b16",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-sm text-text-muted mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white" aria-current="page">
              Contact
            </span>
          </nav>

          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
            Contact <span className="text-brand-yellow">Us</span>
          </h1>
          <p className="text-text-muted text-xl">
            Have a question, found an issue, or want to contribute? Reach out to the ReBrawl archive team.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="relative py-20 bg-bg-elevated overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(124,58,237,0.18)", maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", WebkitMaskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')", maskRepeat: "repeat", WebkitMaskRepeat: "repeat", maskSize: "400px 400px", WebkitMaskSize: "400px 400px" }} aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-base rounded-2xl p-6 border border-white/5 hover:border-brand-purple/25 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">Email</h3>
              <p className="text-text-muted text-sm mb-4">For general inquiries, DMCA requests, or partnership questions.</p>
              <a href="mailto:contact@rebrawl.org" className="text-brand-yellow font-bold text-sm hover:text-brand-gold transition-colors">
                contact@rebrawl.org
              </a>
            </div>

            <div className="bg-bg-base rounded-2xl p-6 border border-white/5 hover:border-brand-purple/25 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">GitHub</h3>
              <p className="text-text-muted text-sm mb-4">Report bugs, suggest features, or contribute to the archive project.</p>
              <span className="text-brand-yellow font-bold text-sm">
                github.com/rebrawl
              </span>
            </div>

            <div className="bg-bg-base rounded-2xl p-6 border border-white/5 hover:border-brand-purple/25 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">Discord</h3>
              <p className="text-text-muted text-sm mb-4">Join the community server for real-time help, discussions, and updates.</p>
              <span className="text-brand-yellow font-bold text-sm">
                discord.gg/rebrawl
              </span>
            </div>

            <div className="bg-bg-base rounded-2xl p-6 border border-white/5 hover:border-brand-purple/25 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">Report an Issue</h3>
              <p className="text-text-muted text-sm mb-4">Found a broken download or incorrect checksum? Let us know immediately.</p>
              <a href="mailto:contact@rebrawl.org?subject=Issue%20Report" className="text-brand-yellow font-bold text-sm hover:text-brand-gold transition-colors">
                Report via email
              </a>
            </div>
          </div>

          <div className="mt-12 bg-bg-base rounded-2xl p-6 border border-white/5 text-center">
            <p className="text-text-muted text-sm leading-relaxed">
              We typically respond within 24–48 hours. For urgent DMCA or security concerns, please include
              <span className="text-white font-medium"> [URGENT] </span>
              in your subject line.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
