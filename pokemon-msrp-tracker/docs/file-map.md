# File Map

## Root
- `README.md`: Beginner-friendly setup and run instructions.
- `package.json`: Project scripts and dependencies.
- `.github/workflows/ci.yml`: CI checks for install, lint, and build.

## App
- `app/layout.tsx`: Global HTML layout.
- `app/page.tsx`: MVP landing page that renders the mock product list.
- `app/globals.css`: Global styles and Tailwind import.

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
