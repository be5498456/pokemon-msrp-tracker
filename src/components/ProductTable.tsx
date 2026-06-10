import Link from "next/link";

import { ProductImage } from "@/src/components/ProductImage";
import { formatCurrency, formatDate } from "@/src/lib/format";
import type { Product } from "@/src/types/product";

interface ProductTableProps {
  products: Product[];
}

function groupProductsBySet(products: Product[]) {
  return products.reduce<{ setName: string; products: Product[] }[]>((groups, product) => {
    const existingGroup = groups.find((group) => group.setName === product.setName);

    if (existingGroup) {
      existingGroup.products.push(product);
      return groups;
    }

    groups.push({ setName: product.setName, products: [product] });
    return groups;
  }, []);
}

function getSetReleaseRange(products: Product[]) {
  const releaseDates = products.map((product) => product.releaseDate).sort();
  const firstReleaseDate = releaseDates[0];
  const lastReleaseDate = releaseDates[releaseDates.length - 1];

  if (firstReleaseDate === lastReleaseDate) {
    return formatDate(firstReleaseDate);
  }

  return `${formatDate(firstReleaseDate)} - ${formatDate(lastReleaseDate)}`;
}

function getSetMsrpRange(products: Product[]) {
  const msrps = products.map((product) => product.msrp);
  const lowestMsrp = Math.min(...msrps);
  const highestMsrp = Math.max(...msrps);

  if (lowestMsrp === highestMsrp) {
    return formatCurrency(lowestMsrp);
  }

  return `${formatCurrency(lowestMsrp)} - ${formatCurrency(highestMsrp)}`;
}

export function ProductTable({ products }: ProductTableProps) {
  const groupedProducts = groupProductsBySet(products);

  return (
    <section className="space-y-8">
      {groupedProducts.map((group) => (
        <section
          key={group.setName}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="border-b border-slate-200 bg-slate-100/80 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-950/60">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                  Set
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">
                  {group.setName}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600 dark:text-zinc-300">
                <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200 dark:bg-zinc-900 dark:ring-zinc-800">
                  {group.products.length} {group.products.length === 1 ? "product" : "products"}
                </span>
                <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200 dark:bg-zinc-900 dark:ring-zinc-800">
                  {getSetReleaseRange(group.products)}
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-blue-800 ring-1 ring-blue-100 dark:bg-blue-950 dark:text-blue-200 dark:ring-blue-900">
                  MSRP {getSetMsrpRange(group.products)}
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 bg-slate-50 p-4 sm:grid-cols-2 xl:grid-cols-3 dark:bg-zinc-950/40">
            {group.products.map((product) => (
              <article
                key={product.id}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <ProductImage product={product} />

                <div className="flex flex-1 flex-col pt-4">
                  <div className="mb-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-zinc-800 dark:text-zinc-200">
                      {product.category}
                    </span>
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-200">
                      {formatDate(product.releaseDate)}
                    </span>
                  </div>

                  <h3 className="line-clamp-2 text-base font-semibold leading-6 text-slate-950 dark:text-white">
                    {product.name}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-zinc-300">
                    {product.sourceNote ??
                      "Manual MSRP reference data; not a live retailer price or stock signal."}
                  </p>

                  <div className="mt-auto pt-4">
                    <div className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 dark:border-blue-900 dark:bg-blue-950/50">
                      <p className="text-xs font-semibold uppercase text-blue-700 dark:text-blue-300">
                        Original MSRP
                      </p>
                      <p className="mt-1 text-xl font-bold text-blue-950 dark:text-blue-100">
                        {formatCurrency(product.msrp)}
                      </p>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
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
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
