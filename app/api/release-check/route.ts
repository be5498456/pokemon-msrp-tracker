import { NextResponse } from "next/server";

import { dataReviewedAt, mockProducts } from "@/src/data/mock-products";

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
    label: "Bulbapedia Scarlet & Violet merchandise",
    url: "https://bulbapedia.bulbagarden.net/wiki/Scarlet_%26_Violet_TCG_Series_merchandise",
  },
  {
    label: "Bulbapedia Sword & Shield merchandise",
    url: "https://bulbapedia.bulbagarden.net/wiki/Sword_%26_Shield_TCG_Series_merchandise",
  },
];

function getNewestProduct() {
  return mockProducts.reduce((newest, product) => {
    return product.releaseDate > newest.releaseDate ? product : newest;
  }, mockProducts[0]);
}

export function GET() {
  const newestProduct = getNewestProduct();

  return NextResponse.json({
    checkedAt: new Date().toISOString(),
    dataReviewedAt,
    trackedProductCount: mockProducts.length,
    newestTrackedProduct: {
      id: newestProduct.id,
      name: newestProduct.name,
      setName: newestProduct.setName,
      releaseDate: newestProduct.releaseDate,
    },
    releaseSources,
    message:
      "This MVP uses manually reviewed static MSRP data. Use these source links to check for new releases before adding them to the curated product data.",
  });
}
