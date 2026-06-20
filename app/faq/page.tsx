import type { Metadata } from "next"
import Link from "next/link"
import FaqAccordion from "@/components/FaqAccordion"
import Disclaimer from "@/components/Disclaimer"
import { faq } from "@/lib/data"
import { buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: "FAQ — reBrawl Questions & Answers",
  description:
    "Frequently asked questions about reBrawl, the Official reBrawl Archive, reBrawl APK safety, installation instructions, custom brawlers, and more. Everything you need to know about this Brawl Stars private server.",
  alternates: {
    canonical: "/faq",
  },
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "FAQ", url: "/faq" },
            ])
          ),
        }}
      />

      {/* Page hero */}
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
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(47,128,237,0.2) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 50% 100%, rgba(47,128,237,0.2) 0%, transparent 50%)
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
              FAQ
            </span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
              Frequently Asked <span className="text-brand-yellow">Questions</span>
            </h1>
            <p className="text-text-muted text-xl">
              Everything you need to know about reBrawl — downloading, installing, custom content, and the Official reBrawl Archive.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion items={faq} />
      <Disclaimer />
    </>
  )
}
