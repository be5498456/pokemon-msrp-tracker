import { mockProducts } from "@/src/data/mock-products";

export const SCARLET_VIOLET_START_DATE = "2023-03-31";

export const trackedProducts = mockProducts.filter(
  (product) => product.releaseDate >= SCARLET_VIOLET_START_DATE,
);
