import type { Product } from "@/src/types/product";

interface ProductImageProps {
  product: Pick<Product, "category" | "imageUrl" | "name" | "setName">;
  size?: "card" | "hero";
}

const toneClasses = [
  "from-blue-100 via-white to-sky-200 text-blue-950 dark:from-blue-950 dark:via-zinc-900 dark:to-sky-950 dark:text-blue-100",
  "from-fuchsia-100 via-white to-pink-200 text-fuchsia-950 dark:from-fuchsia-950 dark:via-zinc-900 dark:to-pink-950 dark:text-fuchsia-100",
  "from-emerald-100 via-white to-lime-200 text-emerald-950 dark:from-emerald-950 dark:via-zinc-900 dark:to-lime-950 dark:text-emerald-100",
  "from-amber-100 via-white to-orange-200 text-amber-950 dark:from-amber-950 dark:via-zinc-900 dark:to-orange-950 dark:text-amber-100",
  "from-violet-100 via-white to-indigo-200 text-violet-950 dark:from-violet-950 dark:via-zinc-900 dark:to-indigo-950 dark:text-violet-100",
];

function hashText(value: string) {
  return value.split("").reduce((hash, character) => hash + character.charCodeAt(0), 0);
}

function getToneClass(product: ProductImageProps["product"]) {
  return toneClasses[hashText(product.setName) % toneClasses.length];
}

function getFormatLabel(category: string) {
  if (category.includes("ETB")) return "ETB";
  if (category.includes("Booster Box")) return "BOX";
  if (category.includes("Booster")) return "PACK";
  if (category.includes("Tin")) return "TIN";
  if (category.includes("Collection")) return "COLL";
  if (category.includes("Blister")) return "3PK";
  if (category.includes("Build")) return "B&B";
  return "TCG";
}

export function ProductImage({ product, size = "card" }: ProductImageProps) {
  const isHero = size === "hero";
  const imageStyle = product.imageUrl
    ? {
        backgroundImage: `url(${product.imageUrl})`,
      }
    : undefined;

  if (product.imageUrl) {
    return (
      <div
        aria-label={`${product.name} product image`}
        className={[
          "overflow-hidden rounded-xl border border-slate-200 bg-white bg-contain bg-center bg-no-repeat shadow-sm dark:border-zinc-800 dark:bg-zinc-900",
          isHero ? "aspect-[4/3] w-full" : "aspect-[4/3] w-full md:w-44",
        ].join(" ")}
        role="img"
        style={imageStyle}
      />
    );
  }

  return (
    <div
      aria-label={`${product.name} generated product image`}
      className={[
        "relative isolate overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br shadow-sm dark:border-zinc-800",
        getToneClass(product),
        isHero ? "aspect-[4/3] w-full" : "aspect-[4/3] w-full md:w-44",
      ].join(" ")}
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.85),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.65),transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.08)_0_1px,transparent_1px_12px)]" />
      <div className="absolute inset-x-4 bottom-4 top-4 rounded-lg border border-white/70 bg-white/45 shadow-inner backdrop-blur-[1px] dark:border-white/10 dark:bg-black/20" />
      <div className="absolute left-5 top-5 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest shadow-sm dark:bg-black/30">
        {getFormatLabel(product.category)}
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <p className="line-clamp-2 text-sm font-black leading-tight md:text-base">{product.setName}</p>
        <p className="mt-1 line-clamp-1 text-[11px] font-semibold uppercase tracking-wide opacity-70">
          {product.category}
        </p>
      </div>
      <div className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/55 px-3 py-2 text-lg font-black shadow-sm dark:border-white/10 dark:bg-black/25">
        TCG
      </div>
    </div>
  );
}
