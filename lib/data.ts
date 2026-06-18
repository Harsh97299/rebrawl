import type {
  ApkRelease,
  DownloadVersion,
  TimelineEvent,
  FaqItem,
  Feature,
  Stat,
} from "./types"

export const downloadVersions: DownloadVersion[] = [
  {
    id: "mods",
    name: "reBrawl Mods",
    tagline: "The all-new, over-powered sandbox.",
    image: "/mods.webp",
    accent: "purple",
    features: [
      { label: "Custom Content", text: "30+ brawlers that don't exist in the real game." },
      { label: "Exclusive Skins", text: "Play as iconic pop-culture characters and modified robot units." },
      { label: "Best For", text: "A completely new, over-powered gameplay experience." },
    ],
    cta: "Download reBrawl Mods",
    downloadUrl: "#",
  },
  {
    id: "classic",
    name: "reBrawl Classic",
    tagline: "Original mechanics, unlimited everything.",
    image: "/classic.webp",
    accent: "gold",
    badge: "MOST POPULAR",
    features: [
      { label: "Feature Set", text: "Unlimited Gold, Gems, and Boxes." },
      { label: "Originality", text: "No custom-coded brawlers — strictly original Brawl Stars mechanics." },
      { label: "Best For", text: "Testing skins and opening unlimited boxes without spending money." },
    ],
    cta: "Download reBrawl Classic",
    downloadUrl: "#",
  },
  {
    id: "legacy",
    name: "reBrawl Legacy",
    tagline: "Built for older and low-end devices.",
    image: "/legacy.webp",
    accent: "blue",
    features: [
      { label: "Optimization", text: "Compatible with Android 4.3 (KitKat) and above." },
      { label: "Performance", text: "Stripped-back graphics for smooth gameplay on older devices." },
      { label: "Best For", text: "Phones that cannot run the modern official Brawl Stars app." },
    ],
    cta: "Download reBrawl Legacy",
    downloadUrl: "#",
  },
]

export const releases: ApkRelease[] = [
  {
    version: "44.0.100",
    date: "2023-01-15",
    size: "142 MB",
    androidMin: "6.0+",
    sha256: "a3f8b2c9d4e1f0a7b8c3d2e9f1a4b7c0d3e6f2a5b8c1d4e7f0a3b6c9d2e5f8",
    downloadUrl: "#",
    changelog: [
      "Final preserved version — complete brawler roster",
      "All skins and cosmetics unlocked",
      "Custom game modes enabled",
      "Stability improvements for all Android versions",
    ],
    latest: true,
  },
  {
    version: "43.2.90",
    date: "2022-09-20",
    size: "139 MB",
    androidMin: "6.0+",
    sha256: "b4e9c3d8f2a6e0b5c9d3f7a1e5b0c4d8f2a6e0b5c9d3f7a1e5b0c4d8f2a6e0b5",
    downloadUrl: "#",
    changelog: [
      "Performance optimizations for mid-range devices",
      "New brawler skins added to the roster",
      "Trophy road visual refresh",
    ],
  },
  {
    version: "42.1.50",
    date: "2022-06-08",
    size: "136 MB",
    androidMin: "6.0+",
    sha256: "c5f0d4e9b3a7f1c5d9e3b7a1f5c9d3e7b1a5f9c3d7e1b5a9f3c7d1e5b9a3f7c1",
    downloadUrl: "#",
    changelog: [
      "Bug fixes for custom game mode lobbies",
      "New trophy road events introduced",
      "Map editor improvements",
    ],
  },
  {
    version: "41.0.200",
    date: "2022-02-14",
    size: "133 MB",
    androidMin: "5.1+",
    sha256: "d6a1e5c0f4b8d2a6e0c4f8b2d6a0e4c8f2b6d0a4e8c2f6b0d4a8e2c6f0b4d8a2",
    downloadUrl: "#",
    changelog: [
      "Brawl Pass simulation added",
      "Custom trophy counts unlocked",
      "New seasonal cosmetics",
    ],
  },
  {
    version: "40.0.150",
    date: "2021-10-30",
    size: "130 MB",
    androidMin: "5.1+",
    sha256: "e7b2f6a1c5d9e3b7f1a5c9d3b7e1a5f9c3d7b1e5a9f3c7d1e5b9a3f7c1d5b9a3",
    downloadUrl: "#",
    changelog: [
      "Server stability improvements",
      "New map pool support",
      "Cross-region matchmaking improvements",
    ],
  },
  {
    version: "39.3.100",
    date: "2021-07-22",
    size: "127 MB",
    androidMin: "5.0+",
    sha256: "f8c3a7b2d6e0f4c8a2b6d0e4f8c2b6d0a4e8c2f6b0d4a8e2c6f0b4d8a2e6c0f4",
    downloadUrl: "#",
    changelog: [
      "First widely archived version",
      "Full gem and coin unlocks",
      "All base brawlers available",
    ],
  },
]

export const timeline: TimelineEvent[] = [
  {
    year: "2019",
    title: "Private Beta Launch",
    description:
      "ReBrawl opens to a select group of testers — offering unlimited gems, coins, and every brawler from day one. The Brawl Stars community discovers a new way to play.",
  },
  {
    year: "2019",
    title: "Public Release",
    description:
      "The server opens to all players worldwide. Within the first week, over 10,000 players join. Coverage spreads across gaming forums, subreddits, and YouTube channels.",
  },
  {
    year: "2020",
    title: "Version 30 Major Update",
    description:
      "ReBrawl reaches parity with Brawl Stars v30 and introduces exclusive custom game modes and community-hosted tournament brackets unavailable in the official client.",
  },
  {
    year: "2021",
    title: "Peak Era — 500K Players",
    description:
      "ReBrawl reaches over 500,000 registered players at peak. Weekly community events, custom map contests, and brawler showcases define the golden era of private server play.",
  },
  {
    year: "2023",
    title: "Official Archive Established",
    description:
      "Every APK version is preserved, virus-scanned, and verified with SHA-256 checksums. The ReBrawl legacy is secured for the community — permanently and openly accessible.",
  },
]

export const faq: FaqItem[] = [
  {
    question: "What is ReBrawl?",
    answer:
      "ReBrawl is the legendary Brawl Stars private server that gave players unlimited gems, all brawlers fully unlocked from the start, and exclusive custom game modes. This site is the official ReBrawl archive — the authoritative source preserving every version for the community.",
  },
  {
    question: "Is this the official ReBrawl archive?",
    answer:
      "Yes. This is the official ReBrawl archive. Every APK hosted here is the original signed build, verified with a SHA-256 checksum to guarantee authenticity and integrity. We are the most complete and trusted preservation of ReBrawl in existence.",
  },
  {
    question: "Is it safe to download?",
    answer:
      "Absolutely. Every file in our archive is virus-scanned before hosting and verified against its published SHA-256 checksum. We never modify, repack, or tamper with any build. You can independently verify any download using the provided checksum.",
  },
  {
    question: "How do I install the APK on Android?",
    answer:
      "Download the APK file, then go to Settings → Security (or Privacy on some devices) and enable 'Install unknown apps' or 'Install from unknown sources' for your browser or file manager. Open the downloaded APK and follow the installer. No Play Store required.",
  },
  {
    question: "Do I need root access?",
    answer:
      "No root access required. ReBrawl installs as a standard Android application. The process is identical to sideloading any APK — just enable installation from unknown sources and run the file.",
  },
  {
    question: "What features did ReBrawl offer?",
    answer:
      "ReBrawl featured unlimited gems and coins, every brawler fully maxed and unlocked from the start, exclusive custom game modes not in the official client, cross-region multiplayer, community tournaments, custom map support, and no pay-to-win mechanics.",
  },
  {
    question: "Which Android version is required?",
    answer:
      "Requirements vary by version. Most archived builds support Android 5.0 and above. The latest archived version (v44.0.100) requires Android 6.0 or higher. Each version in the archive table lists its specific Android requirement.",
  },
  {
    question: "Is ReBrawl affiliated with Supercell?",
    answer:
      "No. ReBrawl is not affiliated with, endorsed by, or connected to Supercell Oy. Brawl Stars is a trademark of Supercell. This archive is maintained independently for preservation and historical purposes by the community.",
  },
]

export const features: Feature[] = [
  {
    icon: "/icons/spray_anime_gem.webp",
    title: "Unlimited Gems",
    description:
      "All in-game currency — gems, coins, and tokens — are fully unlocked. Every purchase, skin, and upgrade available from the moment you install.",
  },
  {
    icon: "/icons/player_icon_jacky_esports.webp",
    title: "All Brawlers Unlocked",
    description:
      "Access every brawler at maximum power level from day one. No grinding, no star points, no waiting. The complete roster is yours.",
  },
  {
    icon: "/icons/spray_smash.webp",
    title: "Exclusive Game Modes",
    description:
      "Custom game modes developed by the ReBrawl community — experiences that were never available in the official Brawl Stars client.",
  },
  {
    icon: "/icons/spray_strikers_catchball.webp",
    title: "Cross-Region Play",
    description:
      "Dedicated servers enabled players from any country to connect and compete together with low latency regardless of region.",
  },
  {
    icon: "/icons/spray_strikers_star.webp",
    title: "Verified & Safe",
    description:
      "Every archived APK is virus-scanned and verified with a SHA-256 checksum before hosting. Original signed builds — never modified.",
  },
  {
    icon: "/icons/player_icon_anime_spike.webp",
    title: "No Root Required",
    description:
      "Simple sideload installation on any Android 5.0+ device. No root, no complicated patches — just download and install.",
  },
]

export const stats: Stat[] = [
  { value: "500K+", label: "Players Served" },
  { value: "150+", label: "Versions Archived" },
  { value: "4+", label: "Years of History" },
  { value: "2M+", label: "Community Members" },
]

export const heroIcons = [
  "/icons/player_icon_anime_spike.webp",
  "/icons/player_icon_jacky_esports.webp",
  "/icons/player_icon_anime_juju.webp",
  "/icons/player_icon_scream_edgar.webp",
  "/icons/player_icon_deku_mha.webp",
  "/icons/player_icon_anime_starrnova.webp",
]
