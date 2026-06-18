import type { Metadata } from "next"
import type { FaqItem } from "./types"

export const BASE_URL = "https://rebrawl.net"
export const SITE_NAME = "ReBrawl Archive"

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ReBrawl — Official Archive",
    template: "%s | ReBrawl Official Archive",
  },
  description:
    "The official ReBrawl archive. Download all preserved Brawl Stars private server APK versions. Verified, virus-scanned, and ready to install on Android.",
  keywords: [
    "ReBrawl",
    "ReBrawl APK",
    "ReBrawl download",
    "Brawl Stars private server",
    "Brawl Stars APK",
    "ReBrawl archive",
    "ReBrawl latest version",
  ],
  authors: [{ name: "ReBrawl Archive" }],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "ReBrawl — The Official Brawl Stars Private Server Archive",
    description:
      "Download and preserve the legacy of ReBrawl. All APK versions archived, verified, and available for the community.",
    url: BASE_URL,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ReBrawl — Official Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReBrawl — Official Archive",
    description:
      "The official ReBrawl APK archive. Verified builds, every version preserved.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export function buildSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ReBrawl",
    applicationCategory: "GameApplication",
    operatingSystem: "Android",
    softwareVersion: "44.0.100",
    downloadUrl: `${BASE_URL}/archive`,
    fileSize: "142 MB",
    requirements: "Android 6.0+",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "14200",
      bestRating: "5",
    },
    description:
      "ReBrawl is the legendary Brawl Stars private server offering unlimited gems, all brawlers unlocked, and custom game modes.",
  }
}

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: BASE_URL,
    description:
      "The official archive and preservation site for ReBrawl, the legendary Brawl Stars private server.",
  }
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/archive?v={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  }
}
