# Data Sources Strategy

## MVP Policy
MVP uses **mock and manual data only**.

- No scraping implementation
- No dynamic fetching from retailer sites on page load
- No bypassing CAPTCHA, anti-bot, login walls, or access controls

## Retailer Strategy
- Pokémon Center: manual/placeholder data until compliant source is confirmed
- Target: manual/placeholder data until compliant source is confirmed
- Walmart: manual/placeholder data until compliant source is confirmed
- Best Buy: first planned live integration via official API
- GameStop: manual/placeholder data until compliant source is confirmed

## First Live Integration: Best Buy API (Later)
When starting live data:
1. Implement a server-side Best Buy API client
2. Add rate-limit handling and retries
3. Persist normalized snapshots
4. Add `lastCheckedAt` updates and error states

## Compliance Principle
If compliant machine-readable access is unavailable, keep that retailer manual/placeholder.
