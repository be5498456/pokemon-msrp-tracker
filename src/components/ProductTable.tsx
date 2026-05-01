import { RetailerPriceCard } from "@/src/components/RetailerPriceCard";
import { formatCurrency, formatDate } from "@/src/lib/format";
import type { Product } from "@/src/types/product";

interface ProductTableProps {
  products: Product[];
}

export function ProductTable({ products }: ProductTableProps) {
  return (
    <section className="space-y-6">
      {products.map((product) => (
        <article
          key={product.id}
          className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="flex flex-col gap-4 border-b border-slate-100 p-5 md:flex-row md:items-start md:justify-between dark:border-zinc-800">
            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-zinc-800 dark:text-zinc-200">
                  {product.category}
                </span>
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-200">
                  Released {formatDate(product.releaseDate)}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{product.name}</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">Set: {product.setName}</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-left md:text-right dark:border-blue-900 dark:bg-blue-950/50">
              <p className="text-xs font-semibold uppercase text-blue-700 dark:text-blue-300">
                MSRP
              </p>
              <p className="mt-1 text-2xl font-bold text-blue-950 dark:text-blue-100">
                {formatCurrency(product.msrp)}
              </p>
            </div>
          </div>

          <ul className="grid gap-3 p-5 lg:grid-cols-2">
            {product.retailerListings.map((listing) => (
              <RetailerPriceCard key={`${product.id}-${listing.retailer}`} listing={listing} />
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
