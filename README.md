# Pokemon TCG MSRP Reference Tracker

Public MVP for browsing manually researched original MSRP values for sealed Pokemon TCG products.

## MVP Status

The active Next.js app lives at the repository root. The current public MVP is a static/manual MSRP reference covering sealed Pokemon TCG products released from 2022 through May 1, 2026. Prices are not live retailer data, and stock status is intentionally not part of the public focus.

## Data Scope

- MSRP values are manually researched static reference records.
- Data sources include official Pokemon product-gallery pages, indexed Pokemon Center listings, Bulbapedia merchandise pages for release/product cross-checks, and price-reference articles for recent high-demand sets.
- Product lines are represented comprehensively where practical, with common sealed formats such as booster packs, booster display boxes, Elite Trainer Boxes, Pokemon Center Elite Trainer Boxes, booster bundles, Build & Battle products, tins, and premium collections.
- Future live price comparison can reuse the retained retailer-listing model, but this MVP does not fetch retailer data.

## Run Locally

```bash
npm install
npm run dev
```

For validation from the repository root:

```bash
npm run lint
npm run typecheck
npm run build
```

## Project Notes

- Active app files are in `app/`, `src/`, and root config files.
- The nested `pokemon-msrp-tracker/` folder is legacy docs/storage unless a task explicitly says otherwise.
- Do not add scraping, bot bypassing, checkout automation, live retailer fetching, APIs, or Supabase during the mock/manual MVP phase.
