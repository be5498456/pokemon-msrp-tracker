import { mockProducts } from "@/src/data/mock-products";
import { formatCurrency, formatTimestamp } from "@/src/lib/format";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-6 md:p-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Pokémon TCG MSRP Tracker (MVP)</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Mock-data preview showing MSRP and current retailer pricing side-by-side.
        </p>
      </header>

      <section className="space-y-6">
        {mockProducts.map((product) => (
          <article key={product.id} className="rounded-lg border border-zinc-200 p-4 shadow-sm dark:border-zinc-800">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {product.category} • {product.setName}
                </p>
              </div>
              <div className="rounded bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-900 dark:bg-blue-950 dark:text-blue-200">
                MSRP: {formatCurrency(product.msrp)}
              </div>
            </div>

            <ul className="space-y-2">
              {product.retailerListings.map((listing) => (
                <li key={`${product.id}-${listing.retailer}`} className="rounded border border-zinc-100 p-3 text-sm dark:border-zinc-800">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <a href={listing.productUrl} target="_blank" rel="noreferrer" className="font-medium underline">
                      {listing.retailer}
                    </a>
                    <span className="font-semibold">
                      Retailer Price: {formatCurrency(listing.currentPrice)}
                    </span>
                  </div>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-300">
                    Stock: {listing.availability.replaceAll("_", " ")} • Last checked: {formatTimestamp(listing.lastCheckedAt)}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
