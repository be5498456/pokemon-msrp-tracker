export type Availability = "in_stock" | "out_of_stock" | "preorder" | "unknown";

export type SourceType = "mock" | "manual" | "api" | "placeholder";

export interface RetailerListing {
  retailer: string;
  productUrl: string;
  currentPrice: number | null;
  availability: Availability;
  lastCheckedAt: string;
  sourceType: SourceType;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  msrp: number;
  releaseDate: string;
  setName: string;
  imageUrl: string | null;
  sourceNote?: string;
  sourceUrls?: string[];
  retailerListings: RetailerListing[];
}
