import type { Product } from "@/src/types/product";
import { formatCurrency } from "@/src/lib/format";
import { RetailerPriceCard } from "@/src/components/RetailerPriceCard";

interface ProductTableProps {
  products: Product[];
}

export function ProductTable({ products }: ProductTableProps) {
  return (
    <section className="space-y-6">
      {products.map((product) => (
        <article key={product.id} className="rounded-lg border border-zinc-200 p-4 shadow-sm dark:border-zinc-800">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Set: {product.setName}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Category: {product.category}</p>
            </div>
            <div className="rounded bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-900 dark:bg-blue-950 dark:text-blue-200">
              MSRP: {formatCurrency(product.msrp)}
            </div>
          </div>

          <ul className="space-y-2">
            {product.retailerListings.map((listing) => (
              <RetailerPriceCard key={`${product.id}-${listing.retailer}`} listing={listing} />
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
