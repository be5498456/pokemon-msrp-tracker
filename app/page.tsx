import { SearchAndFilters } from "@/src/components/SearchAndFilters";
import { mockProducts } from "@/src/data/mock-products";
import { formatDate, formatTimestamp } from "@/src/lib/format";

function getMostRecentProduct() {
  return mockProducts.reduce((newest, product) => {
    return product.releaseDate > newest.releaseDate ? product : newest;
  }, mockProducts[0]);
}

export default function Home() {
  const productsWithStock = mockProducts.filter((product) =>
    product.retailerListings.some((listing) => listing.availability === "in_stock"),
  ).length;
  const newestProduct = getMostRecentProduct();
  const lastMockUpdate = mockProducts
    .flatMap((product) => product.retailerListings.map((listing) => listing.lastCheckedAt))
    .sort()
    .at(-1);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="border-b border-slate-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:px-10 md:py-14">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase text-blue-700 dark:text-blue-300">
              Public MVP tracker
            </p>
            <h1 className="text-4xl font-bold tracking-normal text-slate-950 md:text-5xl dark:text-white">
              Pokemon TCG MSRP Tracker
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-zinc-300">
              Compare MSRP against mock/manual retailer prices for a small public demo dataset. Prices
              and stock statuses are not live retailer data.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs font-medium uppercase text-slate-500 dark:text-zinc-400">
                Products tracked
              </p>
              <p className="mt-2 text-3xl font-bold">{mockProducts.length}</p>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/40">
              <p className="text-xs font-medium uppercase text-emerald-700 dark:text-emerald-300">
                With in-stock listing
              </p>
              <p className="mt-2 text-3xl font-bold text-emerald-900 dark:text-emerald-100">
                {productsWithStock}
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs font-medium uppercase text-slate-500 dark:text-zinc-400">
                Newest product
              </p>
              <p className="mt-2 text-base font-semibold">{newestProduct.name}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
                {formatDate(newestProduct.releaseDate)}
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs font-medium uppercase text-slate-500 dark:text-zinc-400">
                Last mock data update
              </p>
              <p className="mt-2 text-base font-semibold">
                {lastMockUpdate ? formatTimestamp(lastMockUpdate) : "Unknown"}
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
            This MVP uses mock/manual data only. Live retailer integrations are planned for a later
            phase, so current prices and stock labels should be treated as public-demo placeholders.
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-10">
        <SearchAndFilters products={mockProducts} />
      </section>
    </main>
  );
}
