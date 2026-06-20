# Graph Report - .  (2026-06-20)

## Corpus Check
- 79 files · ~92,221 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 242 nodes · 344 edges · 27 communities (14 shown, 13 thin omitted)
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 45 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Pages & Contact Flow|Pages & Contact Flow]]
- [[_COMMUNITY_Data Layer & Types|Data Layer & Types]]
- [[_COMMUNITY_Home Page & FAQ|Home Page & FAQ]]
- [[_COMMUNITY_Package Dependencies|Package Dependencies]]
- [[_COMMUNITY_Layout & Navigation|Layout & Navigation]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Download Components|Download Components]]
- [[_COMMUNITY_Brand & Visual Assets|Brand & Visual Assets]]
- [[_COMMUNITY_Starr Nova Icons|Starr Nova Icons]]
- [[_COMMUNITY_Strikers Sprays|Strikers Sprays]]
- [[_COMMUNITY_Edition Architecture|Edition Architecture]]
- [[_COMMUNITY_Strikers Player Icons|Strikers Player Icons]]
- [[_COMMUNITY_Claude Settings|Claude Settings]]
- [[_COMMUNITY_Brawler Image Component|Brawler Image Component]]
- [[_COMMUNITY_Trust Bar Component|Trust Bar Component]]
- [[_COMMUNITY_Contact API Route|Contact API Route]]
- [[_COMMUNITY_Esports & Scream Icons|Esports & Scream Icons]]
- [[_COMMUNITY_Anime Sprays|Anime Sprays]]
- [[_COMMUNITY_Project Docs|Project Docs]]
- [[_COMMUNITY_MHA Icons|MHA Icons]]
- [[_COMMUNITY_Schema.org SEO|Schema.org SEO]]
- [[_COMMUNITY_Data & Types Modules|Data & Types Modules]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Layout Metadata|Layout Metadata]]
- [[_COMMUNITY_Trust Bar Module|Trust Bar Module]]
- [[_COMMUNITY_Footer Module|Footer Module]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `buildBreadcrumbJsonLd()` - 16 edges
3. `buildSoftwareApplicationJsonLd()` - 10 edges
4. `downloadVersions` - 10 edges
5. `DownloadVersion` - 8 edges
6. `FaqItem` - 8 edges
7. `buildFaqJsonLd()` - 8 edges
8. `Home Page` - 8 edges
9. `releases` - 7 edges
10. `Brawl Stars (Original Game)` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Home Page` --calls--> `FeatureGrid Component`  [EXTRACTED]
  app/page.tsx → components/FeatureGrid.tsx
- `ApkArchiveTableProps` --references--> `ApkRelease`  [EXTRACTED]
  components/ApkArchiveTable.tsx → lib/types.ts
- `RootLayout()` --calls--> `Navbar()`  [EXTRACTED]
  app/layout.tsx → components/Navbar.tsx
- `DownloadCardProps` --references--> `DownloadVersion`  [EXTRACTED]
  components/DownloadCard.tsx → lib/types.ts
- `RootLayout()` --calls--> `Footer()`  [EXTRACTED]
  app/layout.tsx → components/Footer.tsx

## Hyperedges (group relationships)
- **Home Page Component Composition** — app_page, components_hero, components_featuregrid, components_aboutsection, components_downloadsection, components_faqaccordion [EXTRACTED 1.00]
- **Archive Page Component Composition** — archive_page, components_archiveversionpicker, components_apkarchivetable, components_disclaimer [EXTRACTED 1.00]
- **Version Detail Page Composition** — _slug__page, components_faqaccordion, components_disclaimer [EXTRACTED 1.00]
- **Centralized Data Layer** — lib_data, lib_data_downloadversions, lib_data_releases, lib_data_timeline, lib_data_faq, lib_data_features, lib_data_stats, lib_data_versionpages, lib_data_heroicons [EXTRACTED 1.00]
- **Shared Type System** — lib_types, lib_types_apkrelease, lib_types_downloadversion, lib_types_timelineevent, lib_types_faqitem, lib_types_feature, lib_types_stat, lib_types_versionpagedata [EXTRACTED 1.00]
- **SEO JSON-LD Builder Functions** — lib_seo, lib_seo_buildsoftwareapplicationjsonld, lib_seo_buildfaqjsonld, lib_seo_buildorganizationjsonld, lib_seo_buildwebsitejsonld, lib_seo_buildbreadcrumbjsonld [EXTRACTED 1.00]
- **Contact Form Submission Flow** — contact_page, components_contactform, contact_route, concept_resend_email [EXTRACTED 1.00]
- **Three Edition Product Architecture** — concept_rebrawl_mods, concept_rebrawl_classic, concept_rebrawl_legacy [EXTRACTED 1.00]
- **Anime Theme Collection** — icons_player_icon_anime_spike, icons_player_icon_anime_juju, icons_player_icon_anime_starrnova, icons_spray_anime_bow, icons_spray_anime_gem, icons_spray_bp_anime [INFERRED 0.95]
- **Strikers Theme Collection** — icons_player_icon_meeple_strikers, icons_player_icon_lou_strikers, icons_player_icon_otis_strikers, icons_spray_bp_strikers, icons_spray_strikers_bat, icons_spray_strikers_sign, icons_spray_strikers_bottle, icons_spray_strikers_catchball, icons_spray_strikers_star [INFERRED 0.95]
- **My Hero Academia Theme Collection** — icons_player_icon_mha_1, icons_player_icon_deku_mha, icons_spray_smash [INFERRED 0.85]
- **Scream Theme Collection** — icons_player_icon_scream_edgar, icons_player_icon_scream_bibi [INFERRED 0.95]
- **Starr Nova Theme Collection** — icons_starr_nova_portrait, icons_player_icon_anime_starrnova, icons_spray_starrnova_1, icons_spray_starrnova_2, icons_spray_starrnova_3, icons_spray_starrnova_thumbdown, icons_spray_starrnova_moon, icons_spray_box_starrnova [INFERRED 0.95]
- **Player Icons Asset Type** — icons_player_icon_anime_spike, icons_player_icon_meeple_strikers, icons_player_icon_mha_1, icons_player_icon_deku_mha, icons_player_icon_jacky_esports, icons_player_icon_scream_edgar, icons_player_icon_juju_starrgirl, icons_player_icon_anime_juju, icons_player_icon_scream_bibi, icons_player_icon_anime_starrnova, icons_player_icon_lou_strikers, icons_player_icon_otis_strikers [EXTRACTED 1.00]
- **Sprays Asset Type** — icons_spray_bp_strikers, icons_spray_strikers_bat, icons_spray_starrnova_3, icons_spray_smash, icons_spray_strikers_sign, icons_spray_strikers_bottle, icons_spray_anime_bow, icons_spray_starrnova_1, icons_spray_box_starrnova, icons_spray_strikers_catchball, icons_spray_starrnova_2, icons_spray_strikers_star, icons_spray_starrnova_thumbdown, icons_spray_bp_anime, icons_spray_icecream, icons_spray_anime_gem, icons_spray_starrnova_moon [EXTRACTED 1.00]

## Communities (27 total, 13 thin omitted)

### Community 0 - "Pages & Contact Flow"
Cohesion: 0.08
Nodes (22): About Page, AboutPage(), accentMap, branches, metadata, values, ArchivePage(), metadata (+14 more)

### Community 1 - "Data Layer & Types"
Cohesion: 0.12
Nodes (19): Archive Page, ApkArchiveTable Component, ApkArchiveTableProps, FeatureGrid Component, cn(), Feature(), HistoryTimeline Component, features (+11 more)

### Community 2 - "Home Page & FAQ"
Cohesion: 0.12
Nodes (17): Version Detail Page, Home Page, Home(), metadata, AboutSection Component, Disclaimer Component, FaqAccordion Component, FaqAccordionProps (+9 more)

### Community 3 - "Package Dependencies"
Cohesion: 0.09
Nodes (22): dependencies, next, react, react-dom, resend, devDependencies, eslint, eslint-config-next (+14 more)

### Community 4 - "Layout & Navigation"
Cohesion: 0.14
Nodes (12): barlowCondensed, inter, RootLayout(), Footer(), legalLinks, navLinks, accentColors, Navbar() (+4 more)

### Community 5 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 6 - "Download Components"
Cohesion: 0.16
Nodes (11): ArchiveVersionPicker Component, accents, AccentTokens, DownloadCard Component, accents, AccentStyle, DownloadCardProps, DownloadSection Component (+3 more)

### Community 7 - "Brand & Visual Assets"
Cohesion: 0.26
Nodes (13): About Background - Spike Cactus Character 3D Render, Brawl Pattern Tileable Background, Classic Background - Brawl Stars Halloween Scene, Legacy Background - Brawl Stars Stunt Brawler Action Scene, Mods Background - Brawl Stars Character Ensemble, Brawl Stars (Original Game), ReBrawl Classic Logo, Footer Brawl - El Primo Character Art (+5 more)

### Community 8 - "Starr Nova Icons"
Cohesion: 0.22
Nodes (11): Player Icon - Anime Juju, Player Icon - Anime Spike, Player Icon - Anime Starr Nova, Player Icon - Juju Starr Girl, Spray - Box Starr Nova, Spray - Starr Nova 1, Spray - Starr Nova 2, Spray - Starr Nova 3 (+3 more)

### Community 9 - "Strikers Sprays"
Cohesion: 0.29
Nodes (7): Spray - Brawl Pass Strikers, Spray - Smash, Spray - Strikers Bat, Spray - Strikers Bottle, Spray - Strikers Catchball, Spray - Strikers Sign, Spray - Strikers Star

### Community 10 - "Edition Architecture"
Cohesion: 0.38
Nodes (6): ReBrawl Archive Project, reBrawl Classic Edition, reBrawl Legacy Edition, reBrawl Mods Edition, Three Edition Architecture, nextConfig

### Community 11 - "Strikers Player Icons"
Cohesion: 0.67
Nodes (4): Player Icon - Lou Strikers, Player Icon - Meeple Strikers, Player Icon - Otis Strikers, Spray - Ice Cream

### Community 16 - "Esports & Scream Icons"
Cohesion: 0.67
Nodes (3): Player Icon - Jacky Esports, Player Icon - Scream Bibi, Player Icon - Scream Edgar

### Community 17 - "Anime Sprays"
Cohesion: 1.00
Nodes (3): Spray - Anime Bow, Spray - Anime Gem, Spray - Brawl Pass Anime

## Knowledge Gaps
- **100 isolated node(s):** `name`, `version`, `private`, `dev`, `build` (+95 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `buildBreadcrumbJsonLd()` connect `Pages & Contact Flow` to `Data Layer & Types`, `Home Page & FAQ`, `Layout & Navigation`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `downloadVersions` connect `Download Components` to `Pages & Contact Flow`, `Data Layer & Types`, `Home Page & FAQ`, `Layout & Navigation`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _101 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Pages & Contact Flow` be split into smaller, more focused modules?**
  _Cohesion score 0.07862903225806452 - nodes in this community are weakly interconnected._
- **Should `Data Layer & Types` be split into smaller, more focused modules?**
  _Cohesion score 0.11904761904761904 - nodes in this community are weakly interconnected._
- **Should `Home Page & FAQ` be split into smaller, more focused modules?**
  _Cohesion score 0.1225071225071225 - nodes in this community are weakly interconnected._
- **Should `Package Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._