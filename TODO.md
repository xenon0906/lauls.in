# Lauls.in — SEO + AEO + GEO Optimization TODO List

> **Last Updated:** July 1, 2026
> **Status:** ✅ Phase 1 Complete — CRITICAL bugs fixed, build passing


## ✅ AEO/GEO Boosts (Just Completed 🚀)

Massive AEO/GEO improvements deployed:

| # | Task | Pages Affected | AEO/GEO Impact |
|---|------|----------------|----------------|
| A.1 | **Restructured H2s as Questions** for Featured Snippets | Ferro Alloys, Wire Rods, Steel Rounds, Precision Tubes | 🔥 **HIGH** — Question-format H2s directly target "People Also Ask" + AI answer extraction |
| A.2 | **Added visible FAQ sections** with Schema.org markup (`itemScope`, `itemProp`) | Ferro Alloys, Wire Rods, Steel Rounds, Precision Tubes, Logistics, EV Fleet | 🔥 **HIGH** — Google requires FAQ schema to represent visible content. Now FAQ is both visible AND in JSON-LD |
| A.3 | **Expanded FAQPage schema** from 4 → 11 questions | Homepage (Schema.tsx) | 🔥 **HIGH** — Covers all products: Ferro Chrome grades, Wire Rods, Steel Rounds, ERW tubes, EV payload, Logistics |
| A.4 | **Added ProductFAQ reusable component** with Schema.org microdata | All product/service pages | 🟢 **MEDIUM** — Each FAQ item has `itemScope`, `itemProp="mainEntity"`, `itemProp="name"`, `itemProp="acceptedAnswer"` for semantic clarity |

---

## ✅ Phase 1: CRITICAL BUGS (Fixed ✅)

Build verified — all fixes compile and generate correctly.

| # | Task | File | Status |
|---|------|------|--------|
| 1.1 | **Fix Blog 404** — `await params.slug` in Next.js 16 | `src/app/blog/[slug]/page.tsx` | ✅ **FIXED** |
| 1.2 | **Add meaningful SSR fallback** to detail pages (was showing "Loading...") | `src/app/logistics/details/page.tsx`, `src/app/csr/details/page.tsx` | ✅ **FIXED** |
| 1.3 | **Fix title duplication** — SEO Robot brand suffix removed | `src/lib/seo-robot.ts` | ✅ **FIXED** |
| 1.4 | **Add hreflang** for India (`en-IN` + `x-default`) | `src/app/layout.tsx` | ✅ **FIXED** |
| 1.5 | **Add Product schemas** for all 4 product lines | `src/components/seo/Schema.tsx` | ✅ **FIXED** |
| 1.6 | **Add Service schemas** for GEO (Logistics, EV, Ferro Alloys, Railway) | `src/components/seo/Schema.tsx` | ✅ **FIXED** |
| 1.7 | **Add `areaServed`** (Faridabad, Delhi, Gurugram, Noida, Haryana, India) | `src/components/seo/Schema.tsx` | ✅ **FIXED** |
| 1.8 | **Add `speakable` spec** for voice/AI answer extraction | `src/components/seo/Schema.tsx` | ✅ **FIXED** |
| 1.9 | **Add `potentialAction` (SearchAction)** for AI agent readiness | `src/components/seo/Schema.tsx` | ✅ **FIXED** |

---

## 🔴 Phase 2: HIGH PRIORITY (This Week)

### 2.1 Google Search Console
- [ ] Submit `https://lauls.in/sitemap.xml` in GSC
- [ ] Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in `.env.local`
- [ ] Check crawl errors & index coverage
- [ ] Monitor Core Web Vitals

### 2.2 Google Business Profile (Local SEO)
- [ ] Create "Lauls Private Limited" GBP
  - Address: 33-B, N.I.T., Faridabad, Haryana 121001
  - Category: Steel Distributor / Industrial Supply
  - Add 10+ photos, weekly posts, get reviews

### 2.3 Blog Content (5-8 Posts)
- [ ] "Complete Guide to Ferro Alloys Grades for Steel Manufacturing"
- [ ] "Why Faridabad is India's Industrial Hub for Steel Distribution" ← **Local SEO**
- [ ] "Ferro Chrome vs Ferro Manganese — Which Do You Need?" ← **Featured Snippet**
- [ ] "EV Logistics Revolution: Electric Trucks Transforming Supply Chains"
- [ ] "Steel Logistics from Delhi NCR to North India" ← **Local SEO**
- [ ] "RDSO Approval Process for Railway Track Fasteners"
- [ ] "How ERW Steel Tubes Are Made: Technical Guide"

### 2.4 Visible FAQ Content
- [ ] Add visible FAQ blocks on homepage matching JSON-LD FAQ
- [ ] Add product-specific FAQs on Ferro Alloys, Logistics, EV pages
  - NOTE: Google requires FAQ schema to represent **visible content**

### 2.5 Local Citations
- [ ] Create/claim: Justdial, IndiaMART, Sulekha
- [ ] Ensure NAP consistency across ALL listings

---

## 🟡 Phase 3: MEDIUM PRIORITY (Next 1-2 Weeks)

### 3.1 On-Page SEO
- [ ] Add keyword-rich H1s to product pages:
  - `/ferro-alloys`: "Ferro Alloys Supplier — Ferro Chrome, Ferro Manganese, Ferro Silicon"
  - `/wire-rods`: "Alloy Steel Wire Rods & Mild Steel Wire Rods Supplier India"
  - `/steel-rounds`: "Alloy Steel & Mild Steel Rounds for Heavy Engineering"
  - `/precision-tubes`: "ERW Steel Tubes & Hollow Sections for Industry"
- [ ] Ensure all meta descriptions are under 160 chars
- [ ] Improve product image alt texts

### 3.2 Internal Linking
- [ ] Cross-link blog posts ↔ product pages
- [ ] Add "Related Products" sections
- [ ] Per-page breadcrumb structured data

### 3.3 Technical
- [ ] Run PageSpeed Insights
- [ ] Check for 4xx/5xx errors
- [ ] Verify all canonical tags

### 3.4 AEO/GEO Enhancements
- [ ] Structure H2s as questions: "What Grades of Ferro Manganese...?"
- [ ] Add "Key Specifications" summary boxes per product

## 🟢 Phase 4: LONG TERM (1-3 Months)

### 4.1 Content Marketing
- [ ] Content calendar (2-4 posts/month)
- [ ] Topical clusters (4 pillars): Logistics, Ferro Alloys, Railway, EV
- [ ] Pillar pages with comprehensive cluster guides

### 4.2 Local SEO Expansion
- [ ] `/locations/faridabad` — "Steel Logistics & Distribution in Faridabad"
- [ ] `/locations/delhi-ncr` — "Industrial Steel Supply in Delhi NCR"
- [ ] `/locations/gurugram` — "Warehousing & Logistics in Gurugram"

### 4.3 Schema Enhancement
- [ ] `VideoObject` schema for factory/ops videos
- [ ] Per-page schemas (not just global)
- [ ] `HowTo` schema for product guides

### 4.4 Authority Building
- [ ] Guest posts on SteelMint, Steel360
- [ ] Backlinks from industrial directories
- [ ] LinkedIn Showcase Pages per vertical

### 4.5 Analytics
- [ ] GA4 goals: form submissions, quote requests
- [ ] Connect GA4 ↔ Google Search Console
- [ ] Track top 20 keyword rankings
- [ ] Monthly SEO reports

---

## 📊 Priority Keywords

### Brand (Protect)
| Keyword | Priority |
|---------|----------|
| "Lauls Private Limited" | Must rank #1 |
| "Lauls Ltd Faridabad" | Must rank #1 |

### Local Intent (HIGH)
| Keyword | Est. Volume |
|---------|-------------|
| "steel supplier Faridabad" | Medium |
| "logistics company Delhi NCR" | High |
| "ferro alloys distributor Haryana" | Low |
| "industrial steel supply Delhi" | Medium |

### Product/Service
| Keyword | Volume |
|---------|--------|
| "ferro chrome supplier India" | Medium |
| "alloy steel wire rods India" | Medium |
| "ERW steel tubes supplier" | High |
| "electric truck logistics India" | Low (growing) |

### AEO/GEO Targets (Featured Snippets)
| Query | Target |
|-------|--------|
| "What is ferro chrome used for?" | Position 0 |
| "How are ERW tubes made?" | Position 0 |
| "What is RDSO approval?" | Position 0 |
| "Best steel distributor in Faridabad?" | Local Pack |

---

## 📈 AEO/GEO Quick Wins Checklist

- [x] FAQPage schema present (JSON-LD)
- [x] Speakable specification added
- [x] Service schemas added (Logistics, EV, Ferro Alloys, Railway)
- [x] areaServed: Faridabad, Delhi NCR, Pan India
- [x] AI crawlers allowed in robots.txt
- [ ] Visible FAQ on homepage matching JSON-LD
- [ ] H2s structured as questions on product pages
- [ ] "Key Specifications" summary sections per product
- [ ] Dedicated comparison pages (Ferro Chrome vs Ferro Manganese)
- [ ] Real author names (not "Industrial Insights Team")

---

## 🚀 Deployment Checklist

After changes:
- [x] `npm run build` passes
- [ ] Verify blog posts load in production
- [ ] Verify detail pages show content (not "Loading...")
- [ ] Check sitemap.xml
- [ ] Test robots.txt allows AI bots
- [ ] Deploy to production
- [ ] Verify in Google Search Console

- [ ] Match FAQPage schema content with visible HTML