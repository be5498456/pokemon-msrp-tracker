# Data Model

## `Availability`
Represents future retailer stock status.

Allowed values:
- `in_stock`
- `out_of_stock`
- `preorder`
- `unknown`

## `SourceType`
Represents how price/stock data was obtained.

Allowed values:
- `mock`
- `manual`
- `api`
- `placeholder`

## `RetailerListing`
Represents one future-compatible retailer record for one product. The current MSRP-reference MVP keeps this field available but does not make retailer price or stock status prominent.

Fields:
- `retailer: string`
- `productUrl: string`
- `currentPrice: number | null` (null when unknown)
- `availability: Availability`
- `lastCheckedAt: string` (ISO timestamp)
- `sourceType: SourceType`

## `Product`
Represents a canonical Pokemon TCG sealed product MSRP reference.

Fields:
- `id: string`
- `name: string`
- `category: string`
- `msrp: number`
- `releaseDate: string` (ISO date)
- `setName: string`
- `imageUrl: string | null`
- `sourceNote?: string`
- `sourceUrls?: string[]`
- `retailerListings: RetailerListing[]`

## Current MVP Focus
- `msrp` is the primary public value.
- `releaseDate`, `setName`, and `category` support newest-first sorting and user filtering.
- `sourceNote` and `sourceUrls` document that values are static/manual references on current root app records.
- `retailerListings` remains for future live-price compatibility but can be empty for static reference records.
