# File Map

## Repository Root
- `package.json`: Main project scripts and dependencies. This is now the real Next.js app package file.
- `vercel.json`: Minimal Vercel configuration for the root Next.js app.
- `.github/workflows/ci.yml`: GitHub Actions workflow that runs install, lint, typecheck, and build from the repository root.
- `next.config.ts`: Next.js configuration.
- `tsconfig.json`: TypeScript configuration.
- `eslint.config.mjs`: ESLint configuration.
- `postcss.config.mjs`: PostCSS/Tailwind configuration.

## App
- `app/layout.tsx`: Global HTML layout and metadata for the tracker app.
- `app/page.tsx`: MVP landing page that renders mock products and mounts client-side search/filter controls.
- `app/globals.css`: Global styles, Tailwind import, and system font theme variables.

## Source Data & Types
- `src/components/ProductTable.tsx`: Reusable product list/table-style section for rendering product metadata, MSRP, and retailer listings.
- `src/components/SearchAndFilters.tsx`: Client component that handles product/set search, category filtering, and empty-state rendering.
- `src/components/RetailerPriceCard.tsx`: Reusable retailer listing card showing current price, availability, and last-checked timestamp.
- `src/types/product.ts`: Core types (`Product`, `RetailerListing`, `Availability`, `SourceType`).
- `src/data/mock-products.ts`: Mock Pokemon TCG product data with retailer listings.
- `src/lib/format.ts`: Reusable currency/date formatting helpers for UI.

## Legacy Nested Folder
- `pokemon-msrp-tracker/`: Legacy nested app folder from the initial create-next-app setup. New work should target the repository root files above.
- `pokemon-msrp-tracker/docs/`: Current project documentation until docs are moved to the repository root in a future cleanup task.

## Planning Docs
- `pokemon-msrp-tracker/docs/project-plan.md`: MVP goals, future phases, and out-of-scope items.
- `pokemon-msrp-tracker/docs/data-model.md`: Data model definitions and field notes.
- `pokemon-msrp-tracker/docs/data-sources.md`: Data-source policy and staged integration plan.
- `pokemon-msrp-tracker/docs/codex-workflow.md`: Small-batch Codex workflow for safer iteration.
- `pokemon-msrp-tracker/docs/retailer-rules.md`: Safety rules for retailer integrations.
- `pokemon-msrp-tracker/docs/task-backlog.md`: Ordered engineering backlog from MVP to live data.
- `pokemon-msrp-tracker/docs/prompt-templates.md`: Reusable prompts for future Codex sessions.
