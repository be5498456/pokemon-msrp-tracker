# Project Plan: Pokemon TCG MSRP Reference Tracker

## Goal
Build a free-hosted web app that clearly tracks original MSRP reference values for sealed Pokemon TCG products, then later compares those MSRP values against compliant current/live prices.

## MVP Scope (Current Phase)
The MVP uses **manual static data only** and shows:
- Product name and category
- Set name
- Release date
- Original MSRP
- Manual source notes
- Search/filter by product, set, year, and category
- Newest-to-oldest default sorting

## Future Compatibility
The data model still keeps retailer listing fields for a later live-price phase, but those fields are not prominent in the current public MVP.

## Future Phases
1. **Data foundation hardening**
   - Add validation for product records
   - Add update scripts for manual data ingestion
2. **First live integration (Best Buy API)**
   - Add compliant server-side integration
   - Add refresh scheduling and failure handling
3. **Retailer expansion (compliant only)**
   - Keep manual or placeholder data for non-API sources until compliance is verified
4. **History and analytics**
   - Track price changes over time
   - Add charts and alerts
5. **Production readiness**
   - Monitoring, test coverage, and deploy automation

## Out of Scope (for now)
- Any scraping implementation
- Scraping during page load
- Live retailer fetching
- APIs or Supabase persistence
- CAPTCHA bypassing or bot evasion
- Login wall bypassing
- Checkout/cart automation
- Any access-control circumvention

## Hosting Direction
- Keep architecture compatible with free-tier hosting (e.g., Vercel free tier)
- Prefer static/manual data during MVP to keep cost and complexity minimal
