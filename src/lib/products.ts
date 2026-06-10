import { mockProducts } from "@/src/data/mock-products";

export const SCARLET_VIOLET_START_DATE = "2023-03-31";

function isBuildBattleProduct(product: (typeof mockProducts)[number]) {
  const normalizedCategory = product.category.toLowerCase();
  const normalizedName = product.name.toLowerCase();

  return normalizedCategory.includes("build & battle") || normalizedName.includes("build & battle");
}

export const trackedProducts = mockProducts.filter(
  (product) => product.releaseDate >= SCARLET_VIOLET_START_DATE && !isBuildBattleProduct(product),
);
