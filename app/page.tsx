import type { Metadata } from "next"
import Hero from "@/components/Hero"
import DownloadSection from "@/components/DownloadSection"
import FeatureGrid from "@/components/FeatureGrid"
import AboutSection from "@/components/AboutSection"
import FaqAccordion from "@/components/FaqAccordion"
import ThunderDivider from "@/components/ThunderDivider"
import { faq } from "@/lib/data"
import { buildSoftwareApplicationJsonLd, buildFaqJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: "reBrawl — Official Archive | Download Brawl Stars Private Server APK",
  description:
    "Looking for a fresh way to experience Brawl Stars? The Official reBrawl Archive has every reBrawl APK version ready to download — unlimited gems, all brawlers unlocked, custom game modes, and exclusive content. Verified and virus-scanned.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSoftwareApplicationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faq)) }}
      />
      <Hero />
      <ThunderDivider />
      <FeatureGrid />
      <ThunderDivider />
      <AboutSection />
      <ThunderDivider />
      <DownloadSection />
      <ThunderDivider />
      <FaqAccordion
        items={faq.slice(0, 3)}
        subtitle="Everything you need to know about reBrawl and the Official reBrawl Archive."
        showAllLink
      />
    </>
  )
}
