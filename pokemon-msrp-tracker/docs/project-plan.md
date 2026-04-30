# Project Plan: Pokémon TCG MSRP Tracker

## Goal
Build a free-hosted web app that clearly tracks Pokémon TCG product MSRP vs. current retailer pricing.

## MVP Scope (Current Phase)
The MVP uses **mock/manual data only** and shows:
- Product name and category
- MSRP
- Retailer links
- Current retailer price (if available)
- Stock status
- Last checked timestamp
- Clear visual separation between MSRP and current retailer price

Retailers represented in MVP:
- Pokémon Center
- Target
- Walmart
- Best Buy
- GameStop

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
- CAPTCHA bypassing or bot evasion
- Login wall bypassing
- Checkout/cart automation
- Any access-control circumvention

## Hosting Direction
- Keep architecture compatible with free-tier hosting (e.g., Vercel free tier)
- Prefer static/mock data during MVP to keep cost and complexity minimal
