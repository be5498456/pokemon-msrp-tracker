import { ProductTable } from "@/src/components/ProductTable";
import { mockProducts } from "@/src/data/mock-products";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-6 md:p-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Pokémon TCG MSRP Tracker (MVP)</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Mock-data preview showing MSRP and current retailer pricing side-by-side.
        </p>
      </header>

      <ProductTable products={mockProducts} />
    </main>
  );
}
