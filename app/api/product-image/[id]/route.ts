import { NextResponse } from "next/server";

import { productImageUrls } from "@/src/data/product-images";

interface ProductImageRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_request: Request, { params }: ProductImageRouteProps) {
  const { id } = await params;
  const sourceUrl = productImageUrls[id];

  if (!sourceUrl) {
    return NextResponse.json({ error: "Product image not found" }, { status: 404 });
  }

  const response = await fetch(sourceUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; Pokemon MSRP Tracker; +https://github.com/be5498456/pokemon-msrp-tracker)",
      Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    },
    next: {
      revalidate: 60 * 60 * 24 * 7,
    },
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Unable to fetch product image", status: response.status },
      { status: 502 },
    );
  }

  const contentType = response.headers.get("content-type") ?? "image/jpeg";
  const imageBytes = await response.arrayBuffer();

  return new Response(imageBytes, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=604800",
    },
  });
}
