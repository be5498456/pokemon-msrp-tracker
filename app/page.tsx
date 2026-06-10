import { ReleaseCheckButton } from "@/src/components/ReleaseCheckButton";
import { SearchAndFilters } from "@/src/components/SearchAndFilters";
import { dataReviewedAt } from "@/src/data/mock-products";
import { formatCurrency, formatDate, formatTimestamp } from "@/src/lib/format";
import { trackedProducts } from "@/src/lib/products";

function getMostRecentProduct() {
  return trackedProducts.reduce((newest, product) => {
    return product.releaseDate > newest.releaseDate ? product : newest;
  }, trackedProducts[0]);
}

export default function Home() {
  const newestProduct = getMostRecentProduct();
  const releaseYears = new Set(trackedProducts.map((product) => product.releaseDate.slice(0, 4)));
  const categories = new Set(trackedProducts.map((product) => product.category));
  const lowestMsrp = Math.min(...trackedProducts.map((product) => product.msrp));
  const highestMsrp = Math.max(...trackedProducts.map((product) => product.msrp));

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="border-b border-slate-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:px-10 md:py-14">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase text-blue-700 dark:text-blue-300">
              Static MSRP reference
            </p>
            <h1 className="text-4xl font-bold tracking-normal text-slate-950 md:text-5xl dark:text-white">
              Pokemon TCG MSRP Tracker
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-zinc-300">
              Browse manually researched original MSRP values for sealed Pokemon TCG products released
              from Scarlet & Violet onward through May 1, 2026. This MVP is built for reference
              first, with live price comparison planned for a later phase.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs font-medium uppercase text-slate-500 dark:text-zinc-400">
                Products tracked
              </p>
              <p className="mt-2 text-3xl font-bold">{trackedProducts.length}</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/40">
              <p className="text-xs font-medium uppercase text-blue-700 dark:text-blue-300">
                MSRP range
              </p>
              <p className="mt-2 text-2xl font-bold text-blue-950 dark:text-blue-100">
                {formatCurrency(lowestMsrp)} - {formatCurrency(highestMsrp)}
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs font-medium uppercase text-slate-500 dark:text-zinc-400">
                Years covered
              </p>
              <p className="mt-2 text-3xl font-bold">{releaseYears.size}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
                {categories.size} product categories
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs font-medium uppercase text-slate-500 dark:text-zinc-400">
                Newest included
              </p>
              <p className="mt-2 text-base font-semibold">{newestProduct.setName}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
                {formatDate(newestProduct.releaseDate)}
              </p>
            </div>
          </div>

          <ReleaseCheckButton />

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
            MSRP values are manually researched static reference data, reviewed{" "}
            {formatTimestamp(dataReviewedAt)}. They are not live retailer prices, stock signals, or
            checkout guidance; no scraping or live retailer fetching runs in this app.
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-10">
        <SearchAndFilters products={trackedProducts} />
      </section>

      <footer className="border-t border-slate-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-5 text-sm text-slate-500 dark:text-zinc-400 md:px-10">
          Data reviewed {formatTimestamp(dataReviewedAt)}. Found a correction?{" "}
          <a
            href="https://github.com/be5498456/pokemon-msrp-tracker/issues"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
          >
            Open a GitHub issue
          </a>
          .
        </div>
      </footer>
    </main>
  );
}
