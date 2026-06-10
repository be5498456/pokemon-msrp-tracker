# Repository Instructions

## GitHub-Only Workflow

- Do not run, compile, test, or execute code locally.
- Do not create or edit local files for this repository.
- Use GitHub file/API tools for repository reads and writes.
- If validation would normally require local execution, skip it and state that it was not run because this repository is GitHub-only.

## Product Image Backfill

When continuing the product image work, keep the scope to Scarlet & Violet-era and later products from `src/data/mock-products.ts`.

Primary files:

- `src/data/product-images.ts`: canonical product image URL map.
- `scripts/product-image-report.json`: current coverage report and `needs-review` list.
- `src/data/mock-products.ts`: source of product ids, names, categories, set names, and release dates.

Hard rules:

- Do not add or standardize anything before Scarlet & Violet unless it already exists and is unrelated to the current work.
- Every populated image URL in `src/data/product-images.ts` must be a canonical full-size Bulbagarden Archives URL under `https://archives.bulbagarden.net/media/upload/`.
- Do not use Pokemon Center, PokeBeach, generic, thumbnail, resized WordPress, or unrelated pack-art URLs in `src/data/product-images.ts`.
- Use Bulbapedia merchandise or set pages as source evidence, and use Bulbagarden Archives file pages or media paths for the selected URL.
- Convert archive thumbnail URLs like `/media/upload/thumb/8/81/File.jpg/120px-File.jpg` to `/media/upload/8/81/File.jpg`.
- Only add high-confidence exact product matches.
- Leave unavailable, non-real, generated, ambiguous, or unmatched rows absent from `src/data/product-images.ts` and mark them `needs-review` in `scripts/product-image-report.json`.

Preferred source pages:

- `https://bulbapedia.bulbagarden.net/wiki/Scarlet_%26_Violet_TCG_Series_merchandise`
- `https://bulbapedia.bulbagarden.net/wiki/Mega_Evolution_TCG_Series_merchandise`
- Individual set pages for plain booster-pack art when merchandise pages do not list booster packs.
- Bulbagarden Archives `File:` pages for confirming canonical full-size media URLs.

Current state after commit `8be85e40c920640cd4461495a12e4ba5eea65d03`:

- `src/data/product-images.ts` is archive-only for populated URLs.
- `scripts/product-image-report.json` is archive-policy aligned.
- Missing SV+ image count: 61.
- Missing by set:
  - Mega Evolution - Ascended Heroes: 8
  - Mega Evolution - Perfect Order: 3
  - Mega Evolution - Phantasmal Flames: 3
  - Mega Evolution: 6
  - Scarlet & Violet - Destined Rivals: 8
  - Scarlet & Violet - Journey Together: 7
  - Scarlet & Violet - Prismatic Evolutions: 4
  - Scarlet & Violet - Surging Sparks: 6
  - Scarlet & Violet - Stellar Crown: 3
  - Scarlet & Violet - Twilight Masquerade: 3
  - Scarlet & Violet - Temporal Forces: 3
  - Scarlet & Violet - Paradox Rift: 2
  - Scarlet & Violet - Obsidian Flames: 2
  - Scarlet & Violet - Paldea Evolved: 2
  - Scarlet & Violet: 1

Suggested continuation process:

1. Fetch current `src/data/product-images.ts`, `src/data/mock-products.ts`, and `scripts/product-image-report.json` from GitHub before editing.
2. Work in small batches of exact matches, starting with older Scarlet & Violet regular-set missing images and then moving forward.
3. For each candidate, confirm that the product id/name/category match the source page and that the selected URL is a full-size Archives media URL.
4. Update `src/data/product-images.ts` with only confirmed URLs.
5. Update `scripts/product-image-report.json` so selected entries are recorded and remaining missing rows stay `needs-review`.
6. Commit through GitHub.
7. After every commit, summarize which SV+ sets still have missing images and the total count still missing.
