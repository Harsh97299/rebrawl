import type { Metadata } from "next"
import type { FaqItem } from "./types"

export const BASE_URL = "https://rebrawl.net"
export const SITE_NAME = "Official reBrawl Archive"

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "reBrawl — Official Archive | Download Brawl Stars Private Server",
    template: "%s | Official reBrawl Archive",
  },
  description:
    "The Official reBrawl Archive. Download every reBrawl APK version — the legendary Brawl Stars private server with unlimited gems, all brawlers unlocked, and custom game modes. Verified and ready to install.",
  keywords: [
    "rebrawl",
    "official rebrawl archive",
    "rebrawl apk",
    "rebrawl download",
    "rebrawl mods",
    "rebrawl classic",
    "brawl stars private server",
    "rebrawl update",
    "rebrawl latest version",
    "custom brawlers",
    "custom skins",
  ],
  authors: [{ name: "Official reBrawl Archive" }],
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "reBrawl — Official Archive | The Legendary Brawl Stars Private Server",
    description:
      "Download reBrawl — the community favorite Brawl Stars private server. Every APK version available, verified, and ready to play.",
    url: BASE_URL,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "reBrawl — Official Archive | Brawl Stars Private Server",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "reBrawl — Official Archive",
    description:
      "The Official reBrawl Archive. Every version of the legendary Brawl Stars private server, verified and ready to download.",
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
      "reBrawl is the legendary Brawl Stars private server — the community favorite offering unlimited gems, all brawlers unlocked, exclusive custom game modes, and a fresh experience for every player.",
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
      "The Official reBrawl Archive — the community-driven home for reBrawl, the legendary Brawl Stars private server. Download every version, explore custom content, and discover what made reBrawl a player favorite.",
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
