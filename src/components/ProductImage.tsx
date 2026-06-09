import Image from "next/image";

import type { Product } from "@/src/types/product";

interface ProductImageProps {
  product: Pick<Product, "category" | "imageUrl" | "name" | "setName">;
  size?: "card" | "hero";
}

export function ProductImage({ product, size = "card" }: ProductImageProps) {
  const isHero = size === "hero";

  if (product.imageUrl) {
    return (
      <div
        className={[
          "relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900",
          isHero ? "aspect-[4/3] w-full" : "aspect-[4/3] w-full md:w-48",
        ].join(" ")}
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes={isHero ? "(min-width: 1024px) 42vw, 100vw" : "(min-width: 768px) 192px, 100vw"}
          className="object-contain p-5"
          priority={isHero}
          unoptimized
        />
      </div>
    );
  }

  return (
    <div
      aria-label={`${product.name} product image missing`}
      className={[
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-950",
        isHero ? "aspect-[4/3] w-full" : "aspect-[4/3] w-full md:w-48",
      ].join(" ")}
      role="img"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-zinc-400">
        Product image needed
      </p>
      <p className="mt-2 line-clamp-3 text-sm font-medium text-slate-700 dark:text-zinc-200">
        {product.name}
      </p>
    </div>
  );
}
