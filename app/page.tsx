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
  title: "ReBrawl — Official Archive | Download Brawl Stars Private Server APK",
  description:
    "The official ReBrawl archive. Download all preserved Brawl Stars private server APK versions. Unlimited gems, all brawlers unlocked, custom game modes. Verified and virus-scanned.",
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
        subtitle="Everything you need to know about ReBrawl and the archive."
        showAllLink
      />
    </>
  )
}
