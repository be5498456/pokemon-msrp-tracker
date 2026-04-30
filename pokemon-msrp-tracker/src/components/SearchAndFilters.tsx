"use client";

import { useMemo, useState } from "react";

import { ProductTable } from "@/src/components/ProductTable";
import type { Product } from "@/src/types/product";

interface SearchAndFiltersProps {
  products: Product[];
}

export function SearchAndFilters({ products }: SearchAndFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => {
    return Array.from(new Set(products.map((product) => product.category))).sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      if (!matchesCategory) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      return (
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.setName.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [products, searchQuery, selectedCategory]);

  return (
    <section className="space-y-6">
      <div className="rounded-lg border border-zinc-200 p-4 shadow-sm dark:border-zinc-800">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Search by product or set</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Try: Scarlet & Violet"
              className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-blue-500 transition focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Filter by category</span>
            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-blue-500 transition focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            >
              <option value="all">All categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded-lg border border-dashed border-zinc-300 p-8 text-center text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
          No products match your search and filter selection.
        </div>
      ) : (
        <ProductTable products={filteredProducts} />
      )}
    </section>
  );
}
