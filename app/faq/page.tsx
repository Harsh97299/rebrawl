import type { Metadata } from "next"
import Link from "next/link"
import FaqAccordion from "@/components/FaqAccordion"
import Disclaimer from "@/components/Disclaimer"
import { faq } from "@/lib/data"
import { buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: "FAQ — ReBrawl Questions & Answers",
  description:
    "Frequently asked questions about ReBrawl, the official archive, APK safety, installation instructions, and more.",
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
        className="pt-28 pb-16 border-b border-white/5"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(47,128,237,0.12) 0%, transparent 60%), #0b0b16",
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
              FAQ
            </span>
          </nav>

          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
            Frequently Asked <span className="text-brand-yellow">Questions</span>
          </h1>
          <p className="text-text-muted text-xl">
            Everything you need to know about ReBrawl, downloading, installing, and the official archive.
          </p>
        </div>
      </section>

      <FaqAccordion items={faq} />
      <Disclaimer />
    </>
  )
}
