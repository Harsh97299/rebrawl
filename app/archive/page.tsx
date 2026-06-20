import type { Metadata } from "next";
import Link from "next/link";
import ArchiveVersionPicker from "@/components/ArchiveVersionPicker";
import Disclaimer from "@/components/Disclaimer";
import { releases } from "@/lib/data";
import {
  buildBreadcrumbJsonLd,
  buildSoftwareApplicationJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Official reBrawl Archive Downloads — All reBrawl APK Versions",
  description:
    "Browse the complete Official reBrawl Archive. Every reBrawl APK version is virus-scanned, SHA-256 verified, and ready for free download. Find reBrawl Mods, reBrawl Classic, and reBrawl Legacy.",
  alternates: {
    canonical: "/archive",
  },
};

export default function ArchivePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "APK Archive", url: "/archive" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildSoftwareApplicationJsonLd()),
        }}
      />

      {/* Page hero */}
      <section
        className="relative pt-28 pb-16 border-b border-white/5 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 60%), #0b0b16",
        }}
      >
        <div
          className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: "rgba(124,58,237,0.18)",
            maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')",
            WebkitMaskImage:
              "url('/background/brawl-pattern-new-SHECXIEU.png')",
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
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, #0b0b16 20%, transparent 70%)",
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
              APK Archive
            </span>
          </nav>

          <div className="mb-12">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
              Official reBrawl{" "}
              <span className="text-brand-yellow">Archive Downloads</span>
            </h1>
            <p className="text-text-muted text-xl max-w-2xl">
              {releases.length} reBrawl builds — all virus-scanned, SHA-256
              verified, and ready to download. Your one-stop destination for
              every reBrawl APK.
            </p>
          </div>

          <ArchiveVersionPicker lang="en" dict={{} as any} />
        </div>
      </section>

      {/* ── Edition Comparison ── */}
      <section className="relative py-16 bg-bg-base overflow-hidden">
        <div
          className="absolute top-0 inset-x-0 h-28 bg-linear-to-b from-bg-base to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: "rgba(124,58,237,0.18)",
            maskImage: "url('/background/brawl-pattern-new-SHECXIEU.png')",
            WebkitMaskImage:
              "url('/background/brawl-pattern-new-SHECXIEU.png')",
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
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, #0b0b16 20%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-3 text-center">
            Compare <span className="text-brand-yellow">Editions</span>
          </h2>
          <p className="text-text-muted text-center mb-10 max-w-xl mx-auto">
            Not sure which reBrawl edition to pick? Here&apos;s how the three
            versions stack up — each one brings a unique gameplay experience.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/2">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="px-6 py-4 text-text-muted font-semibold">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-brand-purple font-bold">
                    Mods Edition
                  </th>
                  <th className="px-6 py-4 text-brand-yellow font-bold">
                    Classic Edition
                  </th>
                  <th className="px-6 py-4 text-brand-blue font-bold">
                    Legacy Edition
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white">
                <tr>
                  <td className="px-6 py-4 text-text-muted">Custom Brawlers</td>
                  <td className="px-6 py-4">
                    <span className="text-green-400">&#10003;</span> Yes (70+)
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-red-400">&#10007;</span> No
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-red-400">&#10007;</span> No
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-text-muted">
                    Original Gameplay
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-red-400">&#10007;</span> Modified
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-green-400">&#10003;</span> Original
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-green-400">&#10003;</span> Original
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-text-muted">Android Version</td>
                  <td className="px-6 py-4">9.0+ Recommended</td>
                  <td className="px-6 py-4">6.0+</td>
                  <td className="px-6 py-4">4.3+ (Old Devices)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-text-muted">
                    Server Stability
                  </td>
                  <td className="px-6 py-4">High</td>
                  <td className="px-6 py-4">Maximum</td>
                  <td className="px-6 py-4">Maximum</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Disclaimer dict={{} as any} />
    </>
  );
}
