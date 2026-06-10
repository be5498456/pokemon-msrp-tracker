import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductImage } from "@/src/components/ProductImage";
import { formatCurrency, formatDate } from "@/src/lib/format";
import { trackedProducts } from "@/src/lib/products";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = trackedProducts.find((entry) => entry.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-950 dark:bg-zinc-950 dark:text-zinc-50 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="text-sm font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
        >
          Back to homepage
        </Link>

        <article className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="border-b border-slate-200 p-6 dark:border-zinc-800 lg:border-b-0 lg:border-r">
              <ProductImage product={product} size="hero" />
            </div>

            <div className="border-b border-slate-200 p-6 dark:border-zinc-800">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-zinc-800 dark:text-zinc-200">
                  {product.category}
                </span>
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-200">
                  Released {formatDate(product.releaseDate)}
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-normal text-slate-950 dark:text-white">
                {product.name}
              </h1>
              <p className="mt-2 text-base text-slate-500 dark:text-zinc-400">Set: {product.setName}</p>
            </div>
          </div>

          <dl className="grid gap-px bg-slate-200 text-sm dark:bg-zinc-800 md:grid-cols-2">
            <div className="bg-white p-5 dark:bg-zinc-900">
              <dt className="text-xs font-semibold uppercase text-slate-500 dark:text-zinc-400">
                Set name
              </dt>
              <dd className="mt-2 font-medium">{product.setName}</dd>
            </div>
            <div className="bg-white p-5 dark:bg-zinc-900">
              <dt className="text-xs font-semibold uppercase text-slate-500 dark:text-zinc-400">
                Category
              </dt>
              <dd className="mt-2 font-medium">{product.category}</dd>
            </div>
            <div className="bg-white p-5 dark:bg-zinc-900">
              <dt className="text-xs font-semibold uppercase text-slate-500 dark:text-zinc-400">
                Release date
              </dt>
              <dd className="mt-2 font-medium">{formatDate(product.releaseDate)}</dd>
            </div>
            <div className="bg-blue-50 p-5 dark:bg-blue-950/50">
              <dt className="text-xs font-semibold uppercase text-blue-700 dark:text-blue-300">
                Original MSRP
              </dt>
              <dd className="mt-2 text-2xl font-bold text-blue-950 dark:text-blue-100">
                {formatCurrency(product.msrp)}
              </dd>
            </div>
          </dl>

          <div className="space-y-5 p-6">
            <section>
              <h2 className="text-sm font-semibold uppercase text-slate-500 dark:text-zinc-400">
                Source note
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-300">
                {product.sourceNote ??
                  "Manual MSRP reference data; not a live retailer price or stock signal."}
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase text-slate-500 dark:text-zinc-400">
                Sources
              </h2>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
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
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
