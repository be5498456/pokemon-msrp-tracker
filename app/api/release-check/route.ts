import { NextResponse } from "next/server";

import { dataReviewedAt } from "@/src/data/mock-products";
import { trackedProducts } from "@/src/lib/products";

const releaseSources = [
  {
    label: "Pokemon TCG product gallery",
    url: "https://www.pokemon.com/us/pokemon-tcg/product-gallery",
  },
  {
    label: "Pokemon Center TCG cards",
    url: "https://www.pokemoncenter.com/category/tcg-cards",
  },
  {
    label: "Bulbapedia Scarlet and Violet merchandise",
    url: "https://bulbapedia.bulbagarden.net/wiki/Scarlet_%26_Violet_TCG_Series_merchandise",
  },
];

function getNewestProduct() {
  return trackedProducts.reduce((newest, product) => {
    return product.releaseDate > newest.releaseDate ? product : newest;
  }, trackedProducts[0]);
}

export function GET() {
  const newestProduct = getNewestProduct();

  return NextResponse.json({
    checkedAt: new Date().toISOString(),
    dataReviewedAt,
    trackedProductCount: trackedProducts.length,
    newestTrackedProduct: {
      id: newestProduct.id,
      name: newestProduct.name,
      setName: newestProduct.setName,
      releaseDate: newestProduct.releaseDate,
    },
    releaseSources,
    message:
      "This MVP uses manually reviewed static MSRP data for Scarlet and Violet era products and newer. Use these source links to check for new releases before adding them to the curated product data.",
  });
}
