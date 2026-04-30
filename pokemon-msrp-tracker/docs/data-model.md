# Data Model

## `Availability`
Represents retailer stock status.

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
Represents one retailer record for one product.

Fields:
- `retailer: string`
- `productUrl: string`
- `currentPrice: number | null` (null when unknown)
- `availability: Availability`
- `lastCheckedAt: string` (ISO timestamp)
- `sourceType: SourceType`

## `Product`
Represents a canonical Pokémon TCG product.

Fields:
- `id: string`
- `name: string`
- `category: string`
- `msrp: number`
- `releaseDate: string` (ISO date)
- `setName: string`
- `imageUrl: string | null`
- `retailerListings: RetailerListing[]`
