export type ApkRelease = {
  version: string
  date: string
  size: string
  androidMin: string
  sha256: string
  downloadUrl: string
  changelog?: string[]
  latest?: boolean
}

export type DownloadVersion = {
  id: string
  name: string
  tagline: string
  image: string
  accent: "purple" | "gold" | "blue"
  features: { label: string; text: string }[]
  cta: string
  downloadUrl: string
  badge?: string
}

export type TimelineEvent = {
  year: string
  title: string
  description: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type Feature = {
  icon: string
  title: string
  description: string
}

export type Stat = {
  value: string
  label: string
}
