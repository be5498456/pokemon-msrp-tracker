import { productImageUrls } from "../src/data/product-images";
import { mockProducts } from "../src/data/mock-products";

const errors: string[] = [];
const warnings: string[] = [];
const seenIds = new Set<string>();

function isValidIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));

  return (
    parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day
  );
}

for (const product of mockProducts) {
  if (seenIds.has(product.id)) {
    errors.push(`Duplicate product id: ${product.id}`);
  }
  seenIds.add(product.id);

  if (!product.name) {
    errors.push(`Product ${product.id} is missing name.`);
  }

  if (!product.setName) {
    errors.push(`Product ${product.id} is missing setName.`);
  }

  if (!product.category) {
    errors.push(`Product ${product.id} is missing category.`);
  }

  if (typeof product.msrp !== "number" || product.msrp <= 0) {
    errors.push(`Product ${product.id} must have a positive numeric msrp.`);
  }

  if (!isValidIsoDate(product.releaseDate)) {
    errors.push(`Product ${product.id} has invalid releaseDate: ${product.releaseDate}`);
  }

  if (!product.sourceUrls || product.sourceUrls.length === 0) {
    errors.push(`Product ${product.id} must have at least one sourceUrl.`);
  }

  if (!product.imageUrl) {
    warnings.push(`Missing imageUrl: ${product.id} — ${product.name}`);
  }
}

const orphanedImageIds = Object.keys(productImageUrls).filter(
  (productId) => !seenIds.has(productId),
);

for (const productId of orphanedImageIds) {
  warnings.push(`Image URL has no matching product: ${productId}`);
}

if (warnings.length > 0) {
  console.warn("Product validation warnings:");
  for (const warning of warnings) {
    console.warn(`- ${warning}`);
  }
}

if (errors.length > 0) {
  console.error("Product validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

const imageCount = mockProducts.filter((product) => product.imageUrl).length;
console.log(
  `Product validation passed for ${mockProducts.length} products. Images mapped: ${imageCount}/${mockProducts.length}.`,
);
