import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/ContactForm"
import { buildBreadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Contact Us — Official reBrawl Archive",
  description:
    "Get in touch with the Official reBrawl Archive team. Report issues, ask questions about the reBrawl download, or share feedback about your Brawl Stars private server experience.",
  alternates: {
    canonical: "/contact",
  },
}

const channels = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    title: "Email",
    description: "For general inquiries, partnership questions, or anything reBrawl-related.",
    link: "mailto:contact@rebrawl.app",
    linkText: "contact@rebrawl.app",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 90 90" fill="none">
        <circle cx="45" cy="45" r="45" fill="#7c3aed" />
        <path d="M75.011 45c-.134-3.624-3.177-6.454-6.812-6.331-1.611.056-3.143.716-4.306 1.823-5.123-3.49-11.141-5.403-17.327-5.537l2.919-14.038 9.631 2.025c.268 2.472 2.483 4.262 4.955 3.993 2.472-.268 4.262-2.483 3.993-4.955s-2.483-4.262-4.955-3.993c-1.421.145-2.696.973-3.4 2.204L48.68 17.987c-.749-.168-1.499.302-1.667 1.063 0 .011 0 .011 0 .022l-3.322 15.615c-6.264.101-12.36 2.025-17.55 5.537-2.64-2.483-6.801-2.36-9.284.291-2.483 2.64-2.36 6.801.291 9.284.515.481 1.107.895 1.767 1.186-.045.66-.045 1.32 0 1.98 0 10.078 11.745 18.277 26.23 18.277 14.485 0 26.23-8.188 26.23-18.277.045-.66.045-1.32 0-1.98C73.635 49.855 75.056 47.528 75.011 45zM30.011 49.508c0-2.483 2.025-4.508 4.508-4.508 2.483 0 4.508 2.025 4.508 4.508s-2.025 4.508-4.508 4.508c-1.986-.023-4-.025-4.508-4.508zM56.152 62.058v-.179c-3.199 2.405-7.114 3.635-11.119 3.468-4.005.168-7.919-1.063-11.119-3.468-.425-.515-.347-1.286.168-1.711.447-.369 1.085-.369 1.544 0 2.707 1.98 6.007 2.987 9.362 2.83 3.356.179 6.667-.783 9.407-2.74.492-.481 1.297-.47 1.779.022.481.492.47 1.297-.022 1.778zM55.537 54.34c-.078 0-.145 0-.224 0l.034-.168c-2.483 0-4.508-2.025-4.508-4.508s2.025-4.508 4.508-4.508 4.508 2.025 4.508 4.508c.1 2.192-1.835 4.283-4.318 4.676z" fill="#fff" />
      </svg>
    ),
    title: "Reddit",
    description: "Join the active community at r/ReBrawl for discussions, exciting updates, and support.",
    link: "https://www.reddit.com/r/ReBrawl/",
    linkText: "r/ReBrawl",
  },
]

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Contact", url: "/contact" },
            ])
          ),
        }}
      />

      {/* ── Hero ── */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{
          backgroundImage: "url('/background/about-background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20" aria-hidden="true" />
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
              Contact
            </span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
              Contact <span className="text-brand-yellow">Us</span>
            </h1>
            <p className="text-text-muted text-xl leading-relaxed">
              Have a question, found an issue, or want to contribute to the community? Reach out to the Official reBrawl Archive team — we love hearing from fellow Brawl Stars fans.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
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

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
            Send a <span className="text-brand-purple">Message</span>
          </h2>
          <p className="text-text-muted text-lg mb-10">
            Fill out the form below and we&apos;ll get back to you within 24–48 hours.
          </p>

          <div className="bg-bg-base rounded-2xl p-6 sm:p-8 border border-white/5">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Other Channels ── */}
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
            Other <span className="text-brand-yellow">Channels</span>
          </h2>
          <p className="text-text-muted text-lg text-center max-w-2xl mx-auto mb-14">
            Prefer a different way to reach us? Pick the channel that works best for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {channels.map((ch) => (
              <div
                key={ch.title}
                className="bg-bg-elevated rounded-2xl p-6 border border-white/5 hover:border-brand-purple/25 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mb-5">
                  {ch.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  {ch.title}
                </h3>
                <p className="text-text-muted text-sm mb-4">{ch.description}</p>
                {ch.link ? (
                  <a
                    href={ch.link}
                    className="text-brand-yellow font-bold text-sm hover:text-brand-gold transition-colors"
                  >
                    {ch.linkText}
                  </a>
                ) : (
                  <span className="text-brand-yellow font-bold text-sm">
                    {ch.linkText}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-bg-elevated rounded-2xl p-6 border border-white/5 text-center">
            <p className="text-text-muted text-sm leading-relaxed">
              For urgent DMCA or security concerns, please include
              <span className="text-white font-medium"> [URGENT] </span>
              in your subject line.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
