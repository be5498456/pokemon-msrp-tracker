# Pokemon TCG MSRP Tracker

Public-demo MVP for comparing Pokemon TCG MSRP against mock/manual retailer price and stock data.

## MVP Status

The active Next.js app lives at the repository root. The current public MVP uses mock/manual data only; prices and stock statuses are not live retailer data. Live retailer integrations are planned for a later phase after compliance and data-source rules are confirmed.

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
