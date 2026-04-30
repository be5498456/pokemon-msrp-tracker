# File Map

## Repository Root
- `package.json`: Root proxy scripts so deployment tools can run the nested Next.js app from the repository root.
- `vercel.json`: Vercel deployment configuration that installs and builds the nested Next.js app.
- `.github/workflows/ci.yml`: Root GitHub Actions workflow that runs install/lint/typecheck/build inside the nested app directory.
- `pokemon-msrp-tracker/`: Nested Next.js application folder containing all app source and project docs.

## Nested App Root (`pokemon-msrp-tracker/`)
- `README.md`: Beginner-friendly setup and run instructions.
- `package.json`: Actual Next.js project scripts and dependencies.

## App
- `app/layout.tsx`: Global HTML layout and metadata for the tracker app.
- `app/page.tsx`: MVP landing page that renders mock products and mounts client-side search/filter controls.
- `app/globals.css`: Global styles, Tailwind import, and system font theme variables.

## Source Data & Types
- `src/components/ProductTable.tsx`: Reusable product list/table-style section for rendering product metadata, MSRP, and retailer listings.
- `src/components/SearchAndFilters.tsx`: Client component that handles product/set search, category filtering, and empty-state rendering.
- `src/components/RetailerPriceCard.tsx`: Reusable retailer listing card showing current price, availability, and last-checked timestamp.
- `src/types/product.ts`: Core types (`Product`, `RetailerListing`, `Availability`, `SourceType`).
- `src/data/mock-products.ts`: Mock Pokémon TCG product data with retailer listings.
- `src/lib/format.ts`: Reusable currency/date formatting helpers for UI.

## Planning Docs
- `docs/project-plan.md`: MVP goals, future phases, and out-of-scope items.
- `docs/data-model.md`: Data model definitions and field notes.
- `docs/data-sources.md`: Data-source policy and staged integration plan.
- `docs/codex-workflow.md`: Small-batch Codex workflow for safer iteration.
- `docs/retailer-rules.md`: Safety rules for retailer integrations.
- `docs/task-backlog.md`: Ordered engineering backlog from MVP to live data.
- `docs/prompt-templates.md`: Reusable prompts for future Codex sessions.
