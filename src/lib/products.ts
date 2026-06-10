import { mockProducts } from "@/src/data/mock-products";

function isBuildBattleProduct(product: (typeof mockProducts)[number]) {
  const normalizedCategory = product.category.toLowerCase();
  const normalizedName = product.name.toLowerCase();

  return normalizedCategory.includes("build & battle") || normalizedName.includes("build & battle");
}

export const trackedProducts = mockProducts.filter((product) => !isBuildBattleProduct(product));
