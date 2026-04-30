# File Map

## Repository Root
- `.github/workflows/ci.yml`: Root GitHub Actions workflow that runs install/lint/typecheck/build inside the nested app directory.
- `pokemon-msrp-tracker/`: Nested Next.js application folder containing all app source and project docs.

## Nested App Root (`pokemon-msrp-tracker/`)
- `README.md`: Beginner-friendly setup and run instructions.
- `package.json`: Project scripts and dependencies.

## App
- `app/layout.tsx`: Global HTML layout and metadata for the tracker app.
- `app/page.tsx`: MVP landing page that renders the mock product list.
- `app/globals.css`: Global styles, Tailwind import, and system font theme variables.

## Source Data & Types
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
