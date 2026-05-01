# Data Sources Strategy

## MVP Policy
MVP uses **manual MSRP reference data only**.

- No scraping implementation
- No dynamic fetching from retailer sites on page load
- No bypassing CAPTCHA, anti-bot, login walls, or access controls
- No checkout/cart automation
- No Supabase or API persistence yet

## Current MSRP Reference Sources
The public dataset in `src/data/mock-products.ts` is static and manually reviewed.

- Official Pokemon TCG product-gallery pages: product names, release timing, and product contents.
- Pokemon Center indexed product listings: MSRP cross-checks where pages/listings are available.
- Bulbapedia Sword & Shield and Scarlet & Violet merchandise pages: release/product lineup cross-checks.
- GamesRadar price-reference pages for recent high-demand releases: additional MSRP confirmation for Journey Together, Destined Rivals, and Perfect Order product formats.

## Source Notes
- Sword & Shield main expansion booster packs are represented at the common $3.99 MSRP and booster display boxes at $143.64.
- Scarlet & Violet and Mega Evolution main expansion booster packs are represented at the common $4.49 MSRP, booster display boxes at $161.64, and booster bundles at $26.94.
- Standard ETBs are represented at $39.99 for Sword & Shield main expansions and $49.99 for Scarlet & Violet-era main/special expansions unless a Pokemon Center exclusive or special product line differs.
- Pokemon Center ETBs are represented separately when sold as exclusive higher-MSRP products.
- Special collections use the manually researched collection MSRP rather than pack-count arithmetic.

## Future Retailer Strategy
- Pokemon Center: manual/reference data until compliant source is confirmed.
- Target: manual/reference data until compliant source is confirmed.
- Walmart: manual/reference data until compliant source is confirmed.
- Best Buy: first planned live integration via official API.
- GameStop: manual/reference data until compliant source is confirmed.

## First Live Integration: Best Buy API (Later)
When starting live data:
1. Implement a server-side Best Buy API client
2. Add rate-limit handling and retries
3. Persist normalized snapshots
4. Add `lastCheckedAt` updates and error states

## Compliance Principle
If compliant machine-readable access is unavailable, keep that retailer manual/placeholder.
