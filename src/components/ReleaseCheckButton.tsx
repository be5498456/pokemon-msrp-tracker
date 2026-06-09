"use client";

import { useState } from "react";

interface ReleaseSource {
  label: string;
  url: string;
}

interface ReleaseCheckResponse {
  checkedAt: string;
  dataReviewedAt: string;
  trackedProductCount: number;
  newestTrackedProduct: {
    id: string;
    name: string;
    setName: string;
    releaseDate: string;
  };
  releaseSources: ReleaseSource[];
  message: string;
}

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function ReleaseCheckButton() {
  const [releaseCheck, setReleaseCheck] = useState<ReleaseCheckResponse | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function checkForNewReleases() {
    setIsChecking(true);
    setError(null);

    try {
      const response = await fetch("/api/release-check", { cache: "no-store" });

      if (!response.ok) {
        throw new Error("Unable to check release sources right now.");
      }

      const nextReleaseCheck = (await response.json()) as ReleaseCheckResponse;
      setReleaseCheck(nextReleaseCheck);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to check releases.");
    } finally {
      setIsChecking(false);
    }
  }

  return (
    <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm dark:border-blue-900 dark:bg-blue-950/30">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="font-semibold text-blue-950 dark:text-blue-100">Check for new releases</h2>
          <p className="mt-1 leading-6 text-blue-900/80 dark:text-blue-100/80">
            Refresh the local release-check status and open source pages for manual review.
          </p>
        </div>
        <button
          type="button"
          onClick={checkForNewReleases}
          disabled={isChecking}
          className="rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          {isChecking ? "Checking..." : "Refresh check"}
        </button>
      </div>

      {error ? <p className="mt-3 text-sm font-medium text-red-700 dark:text-red-300">{error}</p> : null}

      {releaseCheck ? (
        <div className="mt-4 space-y-3 border-t border-blue-200 pt-4 text-blue-950 dark:border-blue-900 dark:text-blue-100">
          <p>
            Checked {formatDateTime(releaseCheck.checkedAt)}. Tracking {releaseCheck.trackedProductCount} products.
          </p>
          <p>
            Newest tracked: <span className="font-semibold">{releaseCheck.newestTrackedProduct.name}</span> (
            {releaseCheck.newestTrackedProduct.releaseDate}).
          </p>
          <p className="text-blue-900/80 dark:text-blue-100/80">{releaseCheck.message}</p>
          <div className="flex flex-wrap gap-2">
            {releaseCheck.releaseSources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-blue-300 bg-white px-3 py-1 text-xs font-semibold text-blue-800 hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100 dark:hover:bg-blue-900"
              >
                {source.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
