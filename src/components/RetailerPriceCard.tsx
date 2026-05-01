import { formatCurrency, formatTimestamp } from "@/src/lib/format";
import type { RetailerListing } from "@/src/types/product";

interface RetailerPriceCardProps {
  listing: RetailerListing;
}

function formatAvailabilityLabel(value: RetailerListing["availability"]): string {
  return value.replaceAll("_", " ");
}

function getAvailabilityClasses(value: RetailerListing["availability"]): string {
  if (value === "in_stock") {
    return "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200";
  }

  if (value === "out_of_stock") {
    return "border-rose-200 bg-rose-50 text-rose-800 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-200";
  }

  if (value === "preorder") {
    return "border-violet-200 bg-violet-50 text-violet-800 dark:border-violet-900 dark:bg-violet-950/40 dark:text-violet-200";
  }

  return "border-slate-200 bg-slate-100 text-slate-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200";
}

export function RetailerPriceCard({ listing }: RetailerPriceCardProps) {
  return (
    <li className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950/60">
      <div className="flex items-start justify-between gap-3">
        <a
          href={listing.productUrl}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-blue-500 dark:text-white dark:decoration-zinc-600"
        >
          {listing.retailer}
        </a>
        <span
          className={`rounded-full border px-2.5 py-1 text-xs font-semibold capitalize ${getAvailabilityClasses(
            listing.availability,
          )}`}
        >
          {formatAvailabilityLabel(listing.availability)}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-xs font-medium uppercase text-slate-500 dark:text-zinc-400">
            Current price
          </p>
          <p className="mt-1 text-xl font-bold text-slate-950 dark:text-white">
            {formatCurrency(listing.currentPrice)}
          </p>
        </div>
        <p className="text-xs text-slate-500 dark:text-zinc-400">
          Checked {formatTimestamp(listing.lastCheckedAt)}
        </p>
      </div>
    </li>
  );
}
