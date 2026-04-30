import type { RetailerListing } from "@/src/types/product";
import { formatCurrency, formatTimestamp } from "@/src/lib/format";

interface RetailerPriceCardProps {
  listing: RetailerListing;
}

function formatAvailabilityLabel(value: RetailerListing["availability"]): string {
  return value.replaceAll("_", " ");
}

export function RetailerPriceCard({ listing }: RetailerPriceCardProps) {
  return (
    <li className="rounded border border-zinc-100 p-3 text-sm dark:border-zinc-800">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <a href={listing.productUrl} target="_blank" rel="noreferrer" className="font-medium underline">
          {listing.retailer}
        </a>
        <span className="font-semibold">Current Price: {formatCurrency(listing.currentPrice)}</span>
      </div>

      <p className="mt-1 text-zinc-600 dark:text-zinc-300">
        Availability: {formatAvailabilityLabel(listing.availability)} - Last checked: {formatTimestamp(listing.lastCheckedAt)}
      </p>
    </li>
  );
}
