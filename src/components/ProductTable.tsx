import Link from "next/link";

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
          <div className="flex flex-col gap-4 p-5 md:flex-row md:items-start md:justify-between">
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
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 dark:text-zinc-300">
                {product.sourceNote ??
                  "Manual MSRP reference data; not a live retailer price or stock signal."}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <Link
                  href={`/products/${product.id}`}
                  className="font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  View details
                </Link>
                {product.sourceUrls?.map((sourceUrl, index) => (
                  <a
                    key={`${sourceUrl}-${index}`}
                    href={sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-950 dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-white"
                  >
                    Source {index + 1}
                  </a>
                ))}
              </div>
            </div>
            <div className="min-w-36 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-left md:text-right dark:border-blue-900 dark:bg-blue-950/50">
              <p className="text-xs font-semibold uppercase text-blue-700 dark:text-blue-300">
                Original MSRP
              </p>
              <p className="mt-1 text-2xl font-bold text-blue-950 dark:text-blue-100">
                {formatCurrency(product.msrp)}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
