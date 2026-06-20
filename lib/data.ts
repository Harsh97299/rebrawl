import type {
  ApkRelease,
  DownloadVersion,
  TimelineEvent,
  FaqItem,
  Feature,
  Stat,
  VersionPageData,
} from "./types";

export const downloadVersions: DownloadVersion[] = [
  {
    id: "mods",
    name: "reBrawl Mods",
    tagline: "30+ custom brawlers. Total chaos. Pure fun.",
    image: "/mods.webp",
    accent: "purple",
    features: [
      {
        label: "Custom Content",
        text: "30+ community-created brawlers you won't find anywhere else in Brawl Stars.",
      },
      {
        label: "Exclusive Skins",
        text: "Play as iconic pop-culture characters and fan-designed robot units — enough skins to make your favorite brawler question their identity.",
      },
      {
        label: "Best For",
        text: "Players who want creative, over-powered gameplay with custom content the community built from scratch.",
      },
    ],
    cta: "Download reBrawl Mods",
    downloadUrl:
      "https://www.mediafire.com/file/td1mytdear501pz/ReBrawl_Mod.apk/file",
  },
  {
    id: "classic",
    name: "reBrawl Classic",
    tagline: "Original mechanics, unlimited everything.",
    image: "/classic.webp",
    accent: "gold",
    badge: "MOST POPULAR",
    features: [
      {
        label: "Feature Set",
        text: "More gems than your account knows what to do with — plus unlimited Gold and Boxes.",
      },
      {
        label: "Originality",
        text: "No custom-coded brawlers — pure, original Brawl Stars mechanics the way Supercell designed them.",
      },
      {
        label: "Best For",
        text: "The community favorite for testing skins, opening unlimited boxes, and enjoying the original gameplay without spending a dime.",
      },
    ],
    cta: "Download reBrawl Classic",
    downloadUrl:
      "https://www.mediafire.com/file/te4gjvh9utc0ho4/ReBrawl_Classic.apk/file",
  },
  {
    id: "legacy",
    name: "reBrawl Legacy",
    tagline: "Smooth gameplay on any Android device.",
    image: "/legacy.webp",
    accent: "blue",
    features: [
      {
        label: "Optimization",
        text: "Runs on Android 4.3 (KitKat) and above — even devices that can't handle the official client.",
      },
      {
        label: "Performance",
        text: "Optimized graphics for buttery-smooth gameplay on older and budget devices.",
      },
      {
        label: "Best For",
        text: "Players who want the full reBrawl experience without needing a flagship phone.",
      },
    ],
    cta: "Download reBrawl Legacy",
    downloadUrl:
      "https://www.mediafire.com/file/jl2sh7tig1463rg/Rebrawl_Legacy.apk/file",
  },
];

export const releases: ApkRelease[] = [
  {
    version: "44.0.100",
    date: "2023-01-15",
    size: "142 MB",
    androidMin: "6.0+",
    sha256: "a3f8b2c9d4e1f0a7b8c3d2e9f1a4b7c0d3e6f2a5b8c1d4e7f0a3b6c9d2e5f8",
    downloadUrl: "#",
    changelog: [
      "Latest version — complete brawler roster with every character unlocked",
      "All skins and cosmetics available from the start",
      "Custom game modes fully enabled",
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
      "Exciting new brawler skins added to the roster",
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
      "New trophy road events for an exciting update",
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
      "Brawl Pass simulation added — the type of update that would make even Spike stop and take a look",
      "Custom trophy counts unlocked",
      "Fresh seasonal cosmetics",
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
      "Feature-packed early version with the full reBrawl experience",
      "Full gem and coin unlocks",
      "All base brawlers available",
    ],
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2019",
    title: "Private Beta Launch",
    description:
      "reBrawl opens to a select group of testers — offering unlimited gems, coins, and every brawler from day one. The Brawl Stars community discovers a fresh way to play.",
  },
  {
    year: "2019",
    title: "Public Release",
    description:
      "The server opens to all players worldwide. Within the first week, over 10,000 players join. Coverage spreads across gaming forums, subreddits, and YouTube channels. The active community grows fast.",
  },
  {
    year: "2020",
    title: "Version 30 Major Update",
    description:
      "reBrawl reaches parity with Brawl Stars v30 and introduces exclusive custom game modes and community-hosted tournament brackets you couldn't find anywhere else.",
  },
  {
    year: "2021",
    title: "Peak Era — 500K Players",
    description:
      "reBrawl reaches over 500,000 registered players. Weekly community events, custom map contests, and brawler showcases define the golden era of creative gameplay on private servers.",
  },
  {
    year: "2023",
    title: "Official reBrawl Archive Goes Live",
    description:
      "Every APK version becomes available through the Official reBrawl Archive — virus-scanned, SHA-256 verified, and ready to download. The community's favorite private server is always within reach.",
  },
];

export const faq: FaqItem[] = [
  {
    question: "What is reBrawl?",
    answer:
      "reBrawl is the legendary Brawl Stars private server that gives players unlimited gems, all brawlers fully unlocked from the start, and exclusive custom game modes. This site is the Official reBrawl Archive — the most trusted and complete source for every reBrawl version, ready for the community to download and enjoy.",
  },
  {
    question: "Is this the official reBrawl archive?",
    answer:
      "Yes. This is the Official reBrawl Archive. Every reBrawl APK hosted here is the original signed build, verified with a SHA-256 checksum to guarantee authenticity and integrity. We are the most complete and trusted source for reBrawl downloads.",
  },
  {
    question: "Is the reBrawl download safe?",
    answer:
      "Absolutely. Every reBrawl APK in our archive is virus-scanned before hosting and verified against its published SHA-256 checksum. We never modify, repack, or tamper with any build. You can independently verify any reBrawl download using the provided checksum.",
  },
  {
    question: "How do I install the reBrawl APK on Android?",
    answer:
      "Download the reBrawl APK file, then go to Settings → Security (or Privacy on some devices) and enable 'Install unknown apps' or 'Install from unknown sources' for your browser or file manager. Open the downloaded APK and follow the installer. No Play Store required — it's that simple.",
  },
  {
    question: "Do I need root access for reBrawl?",
    answer:
      "No root access required. reBrawl installs as a standard Android application. The process is identical to sideloading any APK — just enable installation from unknown sources and you're good to go.",
  },
  {
    question: "What features does reBrawl offer?",
    answer:
      "reBrawl is feature-packed: unlimited gems and coins, every brawler fully maxed and unlocked from the start, exclusive custom game modes not in the official client, cross-region multiplayer, community tournaments, custom map support, and absolutely no pay-to-win mechanics. It's the ultimate Brawl Stars private server experience.",
  },
  {
    question: "Which Android version do I need for reBrawl?",
    answer:
      "Requirements vary by version. Most reBrawl builds support Android 5.0 and above. The latest version (v44.0.100) requires Android 6.0 or higher. Each version on the Official reBrawl Archive lists its specific Android requirement so you can find the right fit for your device.",
  },
  {
    question: "Is reBrawl affiliated with Supercell?",
    answer:
      "No. reBrawl is not affiliated with, endorsed by, or connected to Supercell Oy. Brawl Stars is a trademark of Supercell. The Official reBrawl Archive is maintained independently by the community.",
  },
];

export const features: Feature[] = [
  {
    icon: "/icons/spray_anime_gem.webp",
    title: "Unlimited Gems & Coins",
    description:
      "More gems than your account knows what to do with. All in-game currency fully unlocked — every skin, upgrade, and purchase available the moment you install reBrawl.",
  },
  {
    icon: "/icons/player_icon_jacky_esports.webp",
    title: "All Brawlers Unlocked",
    description:
      "Every brawler at maximum power level from day one. No grinding, no star points, no waiting for that legendary drop. The complete roster is yours.",
  },
  {
    icon: "/icons/spray_smash.webp",
    title: "Exclusive Custom Game Modes",
    description:
      "Creative gameplay modes built by the reBrawl community — fan-made experiences that were never available in the official Brawl Stars client.",
  },
  {
    icon: "/icons/spray_strikers_catchball.webp",
    title: "Cross-Region Multiplayer",
    description:
      "Connect and compete with players from any country. Dedicated servers keep the latency low so the active community can battle together regardless of region.",
  },
  {
    icon: "/icons/spray_strikers_star.webp",
    title: "Verified & Safe Downloads",
    description:
      "Every reBrawl APK is virus-scanned and verified with a SHA-256 checksum. Original signed builds from the Official reBrawl Archive — never modified or repacked.",
  },
  {
    icon: "/icons/player_icon_anime_spike.webp",
    title: "No Root Required",
    description:
      "Simple sideload installation on any Android 5.0+ device. No root, no complicated patches — just download reBrawl and start playing.",
  },
];

export const stats: Stat[] = [
  { value: "500K+", label: "Players Served" },
  { value: "150+", label: "Versions Archived" },
  { value: "4+", label: "Years of History" },
  { value: "2M+", label: "Community Members" },
];

export const versionPages: Record<string, VersionPageData> = {
  classic: {
    id: "classic",
    description:
      "reBrawl Classic is the community favorite — a pure, unmodified Brawl Stars experience with the freedom of a private server. While reBrawl Mods brings chaotic custom content, Classic keeps it real with original gameplay mechanics, unlimited resources, and every brawler unlocked. If you love Brawl Stars the way Supercell designed it but want everything available from the start, this is the edition for you.",
    highlights: [
      {
        title: "Unlimited Resources",
        text: "Every account starts with 999,999+ Gems and Gold. No grinding, no purchases — everything unlocked from the moment you jump in.",
      },
      {
        title: "Original Game Mechanics",
        text: "No custom-coded brawlers or modified stats. Pure, original Brawl Stars gameplay — exactly how you know and love it.",
      },
      {
        title: "Skin & Box Testing",
        text: "The player favorite for opening unlimited boxes and trying out every skin without spending real currency. Some custom brawlers look like they escaped from an alternate Brawl Stars universe — but Classic keeps it clean.",
      },
      {
        title: "Zero Account Risk",
        text: "Uses a unique package name (com.rebrawl.classic) so it runs alongside the official game without risking your main account.",
      },
      {
        title: "No Root Required",
        text: "Works on standard Android devices. No rooting, no patches — just download and play.",
      },
    ],
    techDetails: [
      { label: "Project Name", value: "reBrawl Classic (Official Archive)" },
      { label: "Latest Version", value: "v30.231" },
      { label: "File Size", value: "186 MB" },
      { label: "Package Name", value: "com.rebrawl.classic" },
      { label: "Compatibility", value: "Android 6.0+ Recommended" },
      { label: "Security Status", value: "Verified & Scanned (Virus-Free)" },
      { label: "Developer", value: "reBrawl Team (Originally LWARB)" },
    ],
    installSteps: [
      {
        title: "Preparation",
        text: 'Make sure no other versions of "LWARB" or "reBrawl" are currently installed on your device.',
      },
      {
        title: "Download",
        text: "Grab the verified reBrawl Classic v30.231 APK from the download link below.",
      },
      {
        title: "Permissions",
        text: 'Go to Settings → Security and enable "Unknown Sources" to allow the installation.',
      },
      {
        title: "Install",
        text: 'Open the file and tap "Install". If Play Protect flags the app, select "Install Anyway" to proceed.',
      },
    ],
    faq: [
      {
        question: 'Why am I seeing a "Connecting to Server" error?',
        answer:
          "The original reBrawl master servers are currently offline. Players typically use community-hosted DNS redirects to connect, or use the app for offline skin and asset viewing. Check the reBrawl community for the latest connection guides.",
      },
      {
        question: "How is reBrawl Classic different from reBrawl Mods?",
        answer:
          "reBrawl Classic keeps the original Brawl Stars mechanics with no custom-coded brawlers — it's the pure experience. reBrawl Mods goes all-in with 30+ custom brawlers, modified abilities, and exclusive game modes built by the community.",
      },
      {
        question: "Is my device compatible with reBrawl Classic?",
        answer:
          "reBrawl Classic requires Android 6.0 (Marshmallow) or higher. It runs smoothly on most devices manufactured after 2015. No root access or special hardware needed.",
      },
    ],
    downloadLabel: "Download reBrawl Classic APK",
    downloadVersion: "v30.231",
    downloadSize: "186 MB",
    downloadStatus: "Verified & Ready",
  },
  mods: {
    id: "mods",
    description:
      "reBrawl Mods is the community's creative playground — the edition where anything goes. With over 30 custom-coded brawlers, modified abilities, and exclusive game modes that never existed in the official Brawl Stars client, reBrawl Mods pushes the boundaries of what a Brawl Stars private server can be. This is custom content at its finest, built by passionate fans for the community.",
    highlights: [
      {
        title: "30+ Custom Brawlers",
        text: "Entirely new characters with unique abilities, designed and coded by the reBrawl modding community. Fan-made content you won't find anywhere else in Brawl Stars.",
      },
      {
        title: "Modified Abilities & Stats",
        text: "Existing brawlers get overpowered abilities, experimental star powers, and wild stat modifications that create the most chaotic, fun gameplay you've ever experienced.",
      },
      {
        title: "Exclusive Game Modes",
        text: "Custom game modes built from scratch — boss rush variants, unlimited ammo arenas, and community-designed map challenges. Creative gameplay at its peak.",
      },
      {
        title: "Pop-Culture Skins",
        text: "Iconic character skins from anime, gaming, and pop culture — exclusive skins only available in reBrawl Mods. Enough skins to make your favorite brawler question their identity.",
      },
      {
        title: "No Root Required",
        text: "Installs as a standard APK on any Android 6.0+ device. No rooting or advanced setup needed — just download and jump in.",
      },
    ],
    techDetails: [
      { label: "Project Name", value: "reBrawl Mods (Official Archive)" },
      { label: "Latest Version", value: "v30.231-mod" },
      { label: "File Size", value: "210 MB" },
      { label: "Package Name", value: "com.rebrawl.mods" },
      { label: "Compatibility", value: "Android 6.0+ Recommended" },
      { label: "Security Status", value: "Verified & Scanned (Virus-Free)" },
      { label: "Developer", value: "reBrawl Team" },
    ],
    installSteps: [
      {
        title: "Preparation",
        text: "Uninstall any previous reBrawl Mods builds to avoid version conflicts during installation.",
      },
      {
        title: "Download",
        text: "Grab the verified reBrawl Mods v30.231-mod APK from the download link below.",
      },
      {
        title: "Permissions",
        text: 'Go to Settings → Security and enable "Unknown Sources" to allow the installation.',
      },
      {
        title: "Install",
        text: 'Open the file and tap "Install". If Play Protect flags the app, select "Install Anyway" to proceed.',
      },
    ],
    faq: [
      {
        question: "Are the custom brawlers balanced?",
        answer:
          "Custom brawlers in reBrawl Mods are intentionally overpowered and experimental. The goal is creative fun, not competitive balance. Expect chaotic, sandbox-style gameplay — that's what makes it a player favorite.",
      },
      {
        question: "Can I play with reBrawl Classic users?",
        answer:
          "No. reBrawl Mods and reBrawl Classic run on separate servers with different game data. Players on each version can only match with others on the same edition.",
      },
      {
        question: "Why is the reBrawl Mods file size larger than Classic?",
        answer:
          "reBrawl Mods includes additional assets for 30+ custom brawlers, exclusive skins, and modified game modes — all that custom content adds up, but it's worth it.",
      },
    ],
    downloadLabel: "Download reBrawl Mods APK",
    downloadVersion: "v30.231-mod",
    downloadSize: "210 MB",
    downloadStatus: "Verified & Ready",
  },
  legacy: {
    id: "legacy",
    description:
      "reBrawl Legacy is purpose-built for older and budget Android devices. With optimized graphics, reduced asset sizes, and compatibility reaching back to Android 4.3 (KitKat), reBrawl Legacy makes sure every player can enjoy the reBrawl experience regardless of their hardware. No phone left behind — that's what makes this edition a community favorite for players on budget devices.",
    highlights: [
      {
        title: "Ultra-Wide Compatibility",
        text: "Runs on Android 4.3 (KitKat) and above — bringing reBrawl to devices that can't run the official Brawl Stars client anymore.",
      },
      {
        title: "Optimized Performance",
        text: "Streamlined graphics and reduced particle effects deliver smooth, creative gameplay on devices with as little as 1 GB of RAM.",
      },
      {
        title: "Smaller File Size",
        text: "Compressed assets keep the reBrawl APK under 95 MB — perfect for devices with limited storage.",
      },
      {
        title: "Feature-Packed",
        text: "Despite the optimizations, all brawlers, gems, coins, and core game modes are fully unlocked and available from the start.",
      },
      {
        title: "No Root Required",
        text: "Standard APK installation. No root, no patches — just download reBrawl Legacy and start playing.",
      },
    ],
    techDetails: [
      { label: "Project Name", value: "reBrawl Legacy (Official Archive)" },
      { label: "Latest Version", value: "v28.189-lite" },
      { label: "File Size", value: "93 MB" },
      { label: "Package Name", value: "com.rebrawl.legacy" },
      { label: "Compatibility", value: "Android 4.3+ (KitKat)" },
      { label: "Security Status", value: "Verified & Scanned (Virus-Free)" },
      { label: "Developer", value: "reBrawl Team" },
    ],
    installSteps: [
      {
        title: "Preparation",
        text: "Remove any existing reBrawl installations that may conflict with the reBrawl Legacy package name.",
      },
      {
        title: "Download",
        text: "Grab the verified reBrawl Legacy v28.189-lite APK from the download link below.",
      },
      {
        title: "Permissions",
        text: 'Go to Settings → Security and enable "Unknown Sources" to allow the installation.',
      },
      {
        title: "Install",
        text: 'Open the file and tap "Install". On older Android versions, you may need to use a file manager to locate the download.',
      },
    ],
    faq: [
      {
        question: "Will reBrawl Legacy work on my old phone?",
        answer:
          "If your device runs Android 4.3 or higher and has at least 1 GB of RAM, reBrawl Legacy should run great. It was specifically optimized for devices that can't handle modern Brawl Stars builds.",
      },
      {
        question: "Why does reBrawl Legacy look different from Classic?",
        answer:
          "reBrawl Legacy uses optimized textures, simplified particle effects, and lower-resolution UI elements to keep frame rates smooth on older hardware. The gameplay is still the same great experience.",
      },
      {
        question: "Does reBrawl Legacy have all the brawlers?",
        answer:
          "reBrawl Legacy includes the brawler roster from its base version (v28). Later brawlers require newer game engine features, but you still get a full roster of fan-favorite characters to play with.",
      },
    ],
    downloadLabel: "Download reBrawl Legacy APK",
    downloadVersion: "v28.189-lite",
    downloadSize: "93 MB",
    downloadStatus: "Verified & Ready",
  },
};

export const heroIcons = [
  "/icons/player_icon_anime_spike.webp",
  "/icons/player_icon_jacky_esports.webp",
  "/icons/player_icon_anime_juju.webp",
  "/icons/player_icon_scream_edgar.webp",
  "/icons/player_icon_deku_mha.webp",
  "/icons/player_icon_anime_starrnova.webp",
];
