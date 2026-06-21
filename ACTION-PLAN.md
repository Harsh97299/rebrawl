# SEO Action Plan — rebrawl.app (Updated)

**Generated:** 2026-06-21  
**Overall Score:** 88/100 (up from 62)  
**Status:** All critical and high-priority issues resolved

---

## Resolved Issues (13 of 13 action items completed)

- ✅ OpenGraph image (was 404, now 200)
- ✅ Favicon + apple-touch-icon (was missing, now present)
- ✅ Hreflang tags in HTML (confirmed working)
- ✅ Security headers (5 headers added)
- ✅ Title template duplication (fixed across EN + TR)
- ✅ H1 typos on legal pages (fixed)
- ✅ Missing pages in sitemap (+6 URLs, now 22 total)
- ✅ Font preload reduction (removed unused weight)
- ✅ Web manifest (created)
- ✅ Dead /terms-of-service link (no code references found)
- ✅ llms.txt for AI readiness (created)
- ✅ Organization schema enriched (logo, contactPoint, sameAs)
- ✅ Sitemap lastmod dates (meaningful dates, not build timestamps)
- ✅ Domain updated to rebrawl.app throughout

---

## Remaining Items

### Pre-Launch (Before DNS goes live)
1. **Configure DNS for rebrawl.app** — add A/CNAME records at your registrar pointing to your hosting provider
2. **Verify HTTPS certificate** — ensure SSL is provisioned for rebrawl.app before launch
3. **Submit sitemap to Google Search Console** — `https://rebrawl.app/sitemap.xml`

### Medium Priority (Fix Within 1 Month)
4. **Reduce homepage HTML payload** (130 KB) — audit serialized props, consider streaming
5. **Verify AggregateRating** — link to verifiable review source or consider removing
6. **Add visible breadcrumb navigation** — currently only in JSON-LD, not rendered

### Low Priority (Backlog)
7. Add `HowTo` schema for APK installation guides
8. Expand locale support (Spanish, Portuguese, etc.)
9. Add preconnect hints for external resources
10. Consider a blog/content section for topical authority
