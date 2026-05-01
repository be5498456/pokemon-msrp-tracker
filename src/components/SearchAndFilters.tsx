"use client";

import { useMemo, useState } from "react";

import { ProductTable } from "@/src/components/ProductTable";
import type { Availability, Product } from "@/src/types/product";

interface SearchAndFiltersProps {
  products: Product[];
}

type SortOption = "newest" | "oldest" | "msrp-asc" | "msrp-desc" | "name-asc";
type StockFilter = "all" | Availability;

const stockFilterOptions: { label: string; value: StockFilter }[] = [
  { label: "All", value: "all" },
  { label: "In stock", value: "in_stock" },
  { label: "Out of stock", value: "out_of_stock" },
  { label: "Preorder", value: "preorder" },
  { label: "Unknown", value: "unknown" },
];

const sortOptions: { label: string; value: SortOption }[] = [
  { label: "Newest first", value: "newest" },
  { label: "Oldest first", value: "oldest" },
  { label: "MSRP low to high", value: "msrp-asc" },
  { label: "MSRP high to low", value: "msrp-desc" },
  { label: "A to Z", value: "name-asc" },
];

export function SearchAndFilters({ products }: SearchAndFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStock, setSelectedStock] = useState<StockFilter>("all");
  const [selectedSort, setSelectedSort] = useState<SortOption>("newest");

  const categories = useMemo(() => {
    return Array.from(new Set(products.map((product) => product.category))).sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesStock =
        selectedStock === "all" ||
        product.retailerListings.some((listing) => listing.availability === selectedStock);

      if (!matchesCategory || !matchesStock) {
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
  }, [products, searchQuery, selectedCategory, selectedStock]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((first, second) => {
      if (selectedSort === "oldest") {
        return first.releaseDate.localeCompare(second.releaseDate);
      }

      if (selectedSort === "msrp-asc") {
        return first.msrp - second.msrp;
      }

      if (selectedSort === "msrp-desc") {
        return second.msrp - first.msrp;
      }

      if (selectedSort === "name-asc") {
        return first.name.localeCompare(second.name);
      }

      return second.releaseDate.localeCompare(first.releaseDate);
    });
  }, [filteredProducts, selectedSort]);

  return (
    <section className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Browse products</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
              Showing {sortedProducts.length} of {products.length} mock products.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-zinc-200">
              Search by product or set
            </span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Try: Scarlet & Violet"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-blue-500 transition focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-zinc-200">Category</span>
            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-blue-500 transition focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            >
              <option value="all">All categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-zinc-200">
              Stock status
            </span>
            <select
              value={selectedStock}
              onChange={(event) => setSelectedStock(event.target.value as StockFilter)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-blue-500 transition focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            >
              {stockFilterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-zinc-200">Sort</span>
            <select
              value={selectedSort}
              onChange={(event) => setSelectedSort(event.target.value as SortOption)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-blue-500 transition focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {sortedProducts.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
          No products match your search and filter selection.
        </div>
      ) : (
        <ProductTable products={sortedProducts} />
      )}
    </section>
  );
}
