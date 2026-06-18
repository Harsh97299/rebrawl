# Graph Report - .  (2026-06-18)

## Corpus Check
- 37 files · ~126,840 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 141 nodes · 226 edges · 17 communities (11 shown, 6 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.89)
- Token cost: 9,800 input · 2,100 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Package & Dependencies|Package & Dependencies]]
- [[_COMMUNITY_APK Download Components|APK Download Components]]
- [[_COMMUNITY_App Shell & Routes|App Shell & Routes]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Visual UI Components|Visual UI Components]]
- [[_COMMUNITY_Page Composition Layer|Page Composition Layer]]
- [[_COMMUNITY_Archive Page & SEO|Archive Page & SEO]]
- [[_COMMUNITY_Claude Dev Settings|Claude Dev Settings]]
- [[_COMMUNITY_Project Docs|Project Docs]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Site Metadata|Site Metadata]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Home()` - 12 edges
3. `releases` - 10 edges
4. `ApkRelease` - 9 edges
5. `FaqItem` - 8 edges
6. `buildFaqJsonLd()` - 7 edges
7. `buildBreadcrumbJsonLd()` - 7 edges
8. `ApkArchiveTable()` - 6 edges
9. `Hero()` - 6 edges
10. `buildSoftwareApplicationJsonLd()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `ArchivePage` --calls--> `Disclaimer()`  [EXTRACTED]
  app/archive/page.tsx → components/Disclaimer.tsx
- `ApkArchiveTableProps` --references--> `ApkRelease`  [EXTRACTED]
  components/ApkArchiveTable.tsx → lib/types.ts
- `ArchivePage` --calls--> `ApkArchiveTable()`  [EXTRACTED]
  app/archive/page.tsx → components/ApkArchiveTable.tsx
- `Home()` --calls--> `ApkArchiveTable()`  [EXTRACTED]
  app/page.tsx → components/ApkArchiveTable.tsx
- `Home()` --calls--> `DownloadSection()`  [EXTRACTED]
  app/page.tsx → components/DownloadSection.tsx

## Hyperedges (group relationships)
- **Home page section composition** — app_page_home, components_hero_hero, components_downloadsection_downloadsection, components_thunderdivider_thunderdivider, components_featuregrid_featuregrid, components_historytimeline_historytimeline, components_apkarchivetable_apkarchivetable, components_faqaccordion_faqaccordion, components_disclaimer_disclaimer [EXTRACTED 1.00]
- **Sections sharing pattern.svg CSS mask background** — components_disclaimer_disclaimer, components_trustbar_trustbar, components_downloadsection_downloadsection, components_featuregrid_featuregrid, components_historytimeline_historytimeline, components_faqaccordion_faqaccordion, components_apkarchivetable_apkarchivetable, public_background_pattern_pattern [EXTRACTED 1.00]
- **ApkRelease type flows from types -> data -> components** — lib_types_apkrelease, lib_data_releases, components_apkarchivetable_apkarchivetable, components_downloadsection_downloadsection, components_downloadcard_downloadcard [EXTRACTED 1.00]
- **SEO JSON-LD builder functions used across pages** — lib_seo_buildsoftwareapplicationjsonld, lib_seo_buildfaqjsonld, lib_seo_buildorganizationjsonld, lib_seo_buildwebsitejsonld, lib_seo_buildbreadcrumbjsonld, app_page_home, app_layout_rootlayout, app_archive_page_archivepage, app_faq_page_faqpage [EXTRACTED 1.00]

## Communities (17 total, 6 thin omitted)

### Community 0 - "Package & Dependencies"
Cohesion: 0.09
Nodes (21): dependencies, next, react, react-dom, devDependencies, eslint, eslint-config-next, tailwindcss (+13 more)

### Community 1 - "APK Download Components"
Cohesion: 0.16
Nodes (14): ApkArchiveTable(), ApkArchiveTableProps, DownloadCard(), DownloadCardProps, formatDate(), DownloadSection(), badges, TrustBar() (+6 more)

### Community 2 - "App Shell & Routes"
Cohesion: 0.15
Nodes (14): barlowCondensed, inter, RootLayout(), robots(), sitemap(), Footer(), legalLinks, navLinks (+6 more)

### Community 3 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 4 - "Visual UI Components"
Cohesion: 0.17
Nodes (13): BrawlerImage(), BrawlerImageProps, FeatureGrid(), Hero(), HistoryTimeline(), features, heroHeroIds, heroHeroIds (+5 more)

### Community 5 - "Page Composition Layer"
Cohesion: 0.22
Nodes (12): FaqPage, Home(), metadata, Disclaimer(), FaqAccordion(), FaqAccordionProps, ThunderDivider(), FaqPage() (+4 more)

### Community 6 - "Archive Page & SEO"
Cohesion: 0.53
Nodes (5): ArchivePage, ArchivePage(), metadata, buildBreadcrumbJsonLd(), buildSoftwareApplicationJsonLd()

## Knowledge Gaps
- **54 isolated node(s):** `name`, `version`, `private`, `dev`, `build` (+49 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Home()` connect `Page Composition Layer` to `APK Download Components`, `Visual UI Components`, `Archive Page & SEO`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Why does `releases` connect `APK Download Components` to `Visual UI Components`, `Archive Page & SEO`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `Hero()` connect `Visual UI Components` to `Page Composition Layer`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `releases` (e.g. with `APK Preservation Archive` and `SHA-256 Verification`) actually correct?**
  _`releases` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _55 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Package & Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `App Shell & Routes` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._