import { productImageUrls } from "@/src/data/product-images";
import type { Product } from "@/src/types/product";

const DATA_REVIEWED_AT = "2026-06-10T12:00:00.000Z";

const OFFICIAL_GALLERY_SOURCE =
  "https://www.pokemon.com/us/pokemon-tcg/product-gallery";
const POKEMON_CENTER_SOURCE = "https://www.pokemoncenter.com/category/tcg-cards";
const BULBAPEDIA_SV_SOURCE =
  "https://bulbapedia.bulbagarden.net/wiki/Scarlet_%26_Violet_TCG_Series_merchandise";
const BULBAPEDIA_MEGA_SOURCE =
  "https://bulbapedia.bulbagarden.net/wiki/Mega_Evolution_TCG_Series_merchandise";
const GAMESRADAR_JOURNEY_SOURCE =
  "https://www.gamesradar.com/tabletop-gaming/where-to-buy-pokemon-tcg-journey-together/";
const GAMESRADAR_DESTINED_SOURCE =
  "https://www.gamesradar.com/tabletop-gaming/where-to-buy-pokemon-destined-rivals-before-resellers-get-to-the-latest-tcg-set/";
const GAMESRADAR_PERFECT_ORDER_SOURCE =
  "https://www.gamesradar.com/tabletop-gaming/where-to-buy-pokemon-tcg-perfect-order/";
const GAMESTOP_TCG_SOURCE = "https://www.gamestop.com/toys-games/trading-cards";

const svSources = [OFFICIAL_GALLERY_SOURCE, POKEMON_CENTER_SOURCE, BULBAPEDIA_SV_SOURCE];
const megaSources = [OFFICIAL_GALLERY_SOURCE, POKEMON_CENTER_SOURCE, BULBAPEDIA_MEGA_SOURCE];
const recentPriceSources = [
  OFFICIAL_GALLERY_SOURCE,
  POKEMON_CENTER_SOURCE,
  GAMESRADAR_JOURNEY_SOURCE,
  GAMESRADAR_DESTINED_SOURCE,
  GAMESRADAR_PERFECT_ORDER_SOURCE,
];
const ascendedHeroesSources = [
  OFFICIAL_GALLERY_SOURCE,
  POKEMON_CENTER_SOURCE,
  BULBAPEDIA_MEGA_SOURCE,
  GAMESTOP_TCG_SOURCE,
];

type ProductInput = Omit<Product, "retailerListings" | "sourceNote" | "sourceUrls"> & {
  sourceNote?: string;
  sourceUrls?: string[];
};

type RegularSetOptions = {
  includeBuildBattleBox?: boolean;
  includeBuildBattleStadium?: boolean;
};

function getProductImageUrl(productId: string) {
  return productImageUrls[productId] ? `/api/product-image/${productId}` : null;
}

function product(input: ProductInput): Product {
  return {
    ...input,
    imageUrl: input.imageUrl ?? getProductImageUrl(input.id),
    sourceNote:
      input.sourceNote ??
      "Manual MSRP reference from official Pokemon product/gallery pages, indexed Pokemon Center listings, and standard product-line MSRP patterns.",
    sourceUrls: input.sourceUrls ?? svSources,
    retailerListings: [],
  };
}

function regularSetProducts(
  slug: string,
  setName: string,
  releaseDate: string,
  sourceUrls = svSources,
  options: RegularSetOptions = {},
): Product[] {
  const products = [
    product({
      id: `${slug}-booster-pack`,
      name: `${setName} Booster Pack`,
      category: "Booster Pack",
      msrp: 4.49,
      releaseDate,
      setName,
      imageUrl: null,
      sourceUrls,
    }),
    product({
      id: `${slug}-sleeved-booster-pack`,
      name: `${setName} Sleeved Booster Pack`,
      category: "Sleeved Booster Pack",
      msrp: 4.49,
      releaseDate,
      setName,
      imageUrl: null,
      sourceUrls,
    }),
    product({
      id: `${slug}-booster-display-box`,
      name: `${setName} Booster Display Box`,
      category: "Booster Box",
      msrp: 161.64,
      releaseDate,
      setName,
      imageUrl: null,
      sourceUrls,
    }),
    product({
      id: `${slug}-elite-trainer-box`,
      name: `${setName} Elite Trainer Box`,
      category: "Elite Trainer Box",
      msrp: 49.99,
      releaseDate,
      setName,
      imageUrl: null,
      sourceUrls,
    }),
    product({
      id: `${slug}-pokemon-center-elite-trainer-box`,
      name: `${setName} Pokemon Center Elite Trainer Box`,
      category: "Pokemon Center ETB",
      msrp: 59.99,
      releaseDate,
      setName,
      imageUrl: null,
      sourceUrls,
    }),
    product({
      id: `${slug}-three-pack-blister`,
      name: `${setName} Three-Pack Blister`,
      category: "Blister Pack",
      msrp: 13.99,
      releaseDate,
      setName,
      imageUrl: null,
      sourceUrls,
    }),
    product({
      id: `${slug}-booster-bundle`,
      name: `${setName} Booster Bundle",
      category: "Booster Bundle",
      msrp: 26.94,
      releaseDate,
      setName,
      imageUrl: null,
      sourceUrls,
    }),
  ];

  if (options.includeBuildBattleBox) {
    products.push(
      product({
        id: `${slug}-build-battle-box`,
        name: `${setName} Build & Battle Box`,
        category: "Build & Battle Box",
        msrp: 21.99,
        releaseDate,
        setName,
        imageUrl: null,
        sourceUrls,
      }),
    );
  }

  if (options.includeBuildBattleStadium) {
    products.push(
      product({
        id: `${slug}-build-battle-stadium`,
        name: `${setName} Build & Battle Stadium`,
        category: "Build & Battle Stadium",
        msrp: 59.99,
        releaseDate,
        setName,
        imageUrl: null,
        sourceUrls,
      }),
    );
  }

  return products;
}

function specialSetProduct(input: ProductInput): Product {
  return product({
    ...input,
    sourceNote:
      input.sourceNote ??
      "Manual MSRP reference for special-set sealed product; products without individual boosters use the listed collection MSRP.",
  });
}

function specialProduct(
  id: string,
  name: string,
  category: string,
  msrp: number,
  releaseDate: string,
  setName: string,
  sourceUrls = svSources,
) {
  return specialSetProduct({
    id,
    name,
    category,
    msrp,
    releaseDate,
    setName,
    imageUrl: null,
    sourceUrls,
  });
}

export const dataReviewedAt = DATA_REVIEWED_AT;

// Catalog rule: every included product row must represent an exact sealed-product
// identity with verifiable MSRP, release date, source URLs, and a matching exact
// image URL in product-images.ts. Products that cannot meet that bar stay out.
export const mockProducts: Product[] = [
  specialProduct(
    "mega-evolution-ascended-heroes-booster-pack",
    "Mega Evolution - Ascended Heroes Booster Pack",
    "Booster Pack",
    4.49,
    "2026-01-30",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "ascended-heroes-tech-sticker-collection-mega-charizard-y",
    "Ascended Heroes Tech Sticker Collection - Mega Charizard Y",
    "Tech Sticker Collection",
    18.99,
    "2026-01-30",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "ascended-heroes-tech-sticker-collection-mega-gengar",
    "Ascended Heroes Tech Sticker Collection - Mega Gengar",
    "Tech Sticker Collection",
    18.99,
    "2026-01-30",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "ascended-heroes-collection-erika",
    "Ascended Heroes Collection - Erika's Tangela",
    "Collection Box",
    9.99,
    "2026-02-20",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "ascended-heroes-collection-larry",
    "Ascended Heroes Collection - Larry's Komala",
    "Collection Box",
    9.99,
    "2026-02-20",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "mega-evolution-ascended-heroes-elite-trainer-box",
    "Mega Evolution - Ascended Heroes Elite Trainer Box",
    "Elite Trainer Box",
    49.99,
    "2026-02-20",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "mega-evolution-ascended-heroes-pokemon-center-elite-trainer-box",
    "Mega Evolution - Ascended Heroes Pokemon Center Elite Trainer Box",
    "Pokemon Center ETB",
    59.99,
    "2026-02-20",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "ascended-heroes-mini-tin",
    "Ascended Heroes Mini Tin",
    "Mini Tin",
    9.99,
    "2026-02-20",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "ascended-heroes-mega-charizard-x-ex-tin",
    "Ascended Heroes Mega Charizard X ex Tin",
    "Tin",
    28.99,
    "2026-02-20",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "ascended-heroes-mega-charizard-y-ex-tin",
    "Ascended Heroes Mega Charizard Y ex Tin",
    "Tin",
    28.99,
    "2026-02-20",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "ascended-heroes-premium-poster-collection-mega-lucario",
    "Ascended Heroes Premium Poster Collection - Mega Lucario",
    "Premium Collection",
    49.99,
    "2026-03-20",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "ascended-heroes-premium-poster-collection-mega-gardevoir",
    "Ascended Heroes Premium Poster Collection - Mega Gardevoir",
    "Premium Collection",
    49.99,
    "2026-03-20",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "ascended-heroes-first-partners-deluxe-pin-collection",
    "Ascended Heroes First Partners Deluxe Pin Collection",
    "Pin Collection",
    29.99,
    "2026-03-20",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "first-partner-illustration-collection-series-1",
    "First Partner Illustration Collection Series 1",
    "Collection Box",
    14.99,
    "2026-03-20",
    "Mega Evolution Series",
    megaSources,
  ),
  specialProduct(
    "mega-evolution-ascended-heroes-booster-bundle",
    "Mega Evolution - Ascended Heroes Booster Bundle",
    "Booster Bundle",
    26.94,
    "2026-04-24",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "ascended-heroes-mega-meganium-ex-box",
    "Ascended Heroes Mega Meganium ex Box",
    "Collection Box",
    21.99,
    "2026-04-24",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "ascended-heroes-mega-emboar-ex-box",
    "Ascended Heroes Mega Emboar ex Box",
    "Collection Box",
    21.99,
    "2026-04-24",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  specialProduct(
    "ascended-heroes-mega-feraligatr-ex-box",
    "Ascended Heroes Mega Feraligatr ex Box",
    "Collection Box",
    21.99,
    "2026-04-24",
    "Mega Evolution - Ascended Heroes",
    ascendedHeroesSources,
  ),
  ...regularSetProducts(
    "mega-evolution-perfect-order",
    "Mega Evolution - Perfect Order",
    "2026-03-27",
    recentPriceSources,
    { includeBuildBattleBox: true },
  ),
  ...regularSetProducts("mega-evolution-phantasmal-flames", "Mega Evolution - Phantasmal Flames", "2025-11-14", megaSources, {
    includeBuildBattleBox: true,
  }),
  specialProduct(
    "mega-charizard-x-ex-ultra-premium-collection",
    "Mega Charizard X ex Ultra-Premium Collection",
    "Ultra-Premium Collection",
    119.99,
    "2025-11-14",
    "Mega Evolution - Phantasmal Flames",
    megaSources,
  ),
  ...regularSetProducts("mega-evolution", "Mega Evolution", "2025-09-26", megaSources, {
    includeBuildBattleBox: true,
  }),
  specialProduct(
    "mega-lucario-ex-figure-collection",
    "Mega Lucario ex Figure Collection",
    "Collection Box",
    49.99,
    "2025-09-26",
    "Mega Evolution",
    megaSources,
  ),
  specialProduct("black-bolt-elite-trainer-box", "Black Bolt Elite Trainer Box", "Elite Trainer Box", 49.99, "2025-07-18", "Scarlet & Violet - Black Bolt", recentPriceSources),
  specialProduct("black-bolt-pokemon-center-elite-trainer-box", "Black Bolt Pokemon Center Elite Trainer Box", "Pokemon Center ETB", 59.99, "2025-07-18", "Scarlet & Violet - Black Bolt", recentPriceSources),
  specialProduct("black-bolt-booster-bundle", "Black Bolt Booster Bundle", "Booster Bundle", 26.94, "2025-07-18", "Scarlet & Violet - Black Bolt", recentPriceSources),
  specialProduct("white-flare-elite-trainer-box", "White Flare Elite Trainer Box", "Elite Trainer Box", 49.99, "2025-07-18", "Scarlet & Violet - White Flare", recentPriceSources),
  specialProduct("white-flare-pokemon-center-elite-trainer-box", "White Flare Pokemon Center Elite Trainer Box", "Pokemon Center ETB", 59.99, "2025-07-18", "Scarlet & Violet - White Flare", recentPriceSources),
  specialProduct("white-flare-booster-bundle", "White Flare Booster Bundle", "Booster Bundle", 26.94, "2025-07-18", "Scarlet & Violet - White Flare", recentPriceSources),
  ...regularSetProducts("scarlet-violet-destined-rivals", "Scarlet & Violet - Destined Rivals", "2025-05-30", recentPriceSources, {
    includeBuildBattleBox: true,
  }),
  ...regularSetProducts("scarlet-violet-journey-together", "Scarlet & Violet - Journey Together", "2025-03-28", recentPriceSources, {
    includeBuildBattleBox: true,
  }),
  specialProduct(
    "journey-together-lillie-premium-tournament-collection",
    "Lillie's Clefairy ex Premium Tournament Collection",
    "Premium Tournament Collection",
    39.99,
    "2025-04-25",
    "Scarlet & Violet - Journey Together",
    [OFFICIAL_GALLERY_SOURCE, POKEMON_CENTER_SOURCE, GAMESRADAR_JOURNEY_SOURCE],
  ),
  specialProduct("prismatic-evolutions-elite-trainer-box", "Prismatic Evolutions Elite Trainer Box", "Elite Trainer Box", 49.99, "2025-01-17", "Scarlet & Violet - Prismatic Evolutions", [OFFICIAL_GALLERY_SOURCE, POKEMON_CENTER_SOURCE]),
  specialProduct("prismatic-evolutions-pokemon-center-elite-trainer-box", "Prismatic Evolutions Pokemon Center Elite Trainer Box", "Pokemon Center ETB", 59.99, "2025-01-17", "Scarlet & Violet - Prismatic Evolutions", [OFFICIAL_GALLERY_SOURCE, POKEMON_CENTER_SOURCE]),
  specialProduct("prismatic-evolutions-booster-bundle", "Prismatic Evolutions Booster Bundle", "Booster Bundle", 26.94, "2025-03-07", "Scarlet & Violet - Prismatic Evolutions", [OFFICIAL_GALLERY_SOURCE, POKEMON_CENTER_SOURCE]),
  specialProduct("prismatic-evolutions-binder-collection", "Prismatic Evolutions Binder Collection", "Binder Collection", 29.99, "2025-01-17", "Scarlet & Violet - Prismatic Evolutions", [OFFICIAL_GALLERY_SOURCE, POKEMON_CENTER_SOURCE]),
  specialProduct("prismatic-evolutions-poster-collection", "Prismatic Evolutions Poster Collection", "Poster Collection", 14.99, "2025-01-17", "Scarlet & Violet - Prismatic Evolutions", [OFFICIAL_GALLERY_SOURCE, POKEMON_CENTER_SOURCE]),
  specialProduct("prismatic-evolutions-mini-tin", "Prismatic Evolutions Mini Tin", "Mini Tin", 9.99, "2025-02-07", "Scarlet & Violet - Prismatic Evolutions", [OFFICIAL_GALLERY_SOURCE, POKEMON_CENTER_SOURCE]),
  specialProduct("prismatic-evolutions-surprise-box", "Prismatic Evolutions Surprise Box", "Collection Box", 22.99, "2025-02-07", "Scarlet & Violet - Prismatic Evolutions", [OFFICIAL_GALLERY_SOURCE, POKEMON_CENTER_SOURCE]),
  specialProduct("prismatic-evolutions-premium-figure-collection", "Prismatic Evolutions Premium Figure Collection", "Premium Collection", 69.99, "2025-09-26", "Scarlet & Violet - Prismatic Evolutions", [OFFICIAL_GALLERY_SOURCE, POKEMON_CENTER_SOURCE]),
  specialProduct("prismatic-evolutions-super-premium-collection", "Prismatic Evolutions Super-Premium Collection", "Premium Collection", 89.99, "2025-05-16", "Scarlet & Violet - Prismatic Evolutions", [OFFICIAL_GALLERY_SOURCE, POKEMON_CENTER_SOURCE]),
  ...regularSetProducts("scarlet-violet-surging-sparks", "Scarlet & Violet - Surging Sparks", "2024-11-08", svSources, {
    includeBuildBattleBox: true,
  }),
  ...regularSetProducts("scarlet-violet-stellar-crown", "Scarlet & Violet - Stellar Crown", "2024-09-13", svSources, {
    includeBuildBattleBox: true,
  }),
  specialProduct("shrouded-fable-elite-trainer-box", "Shrouded Fable Elite Trainer Box", "Elite Trainer Box", 49.99, "2024-08-02", "Scarlet & Violet - Shrouded Fable"),
  specialProduct("shrouded-fable-pokemon-center-elite-trainer-box", "Shrouded Fable Pokemon Center Elite Trainer Box", "Pokemon Center ETB", 59.99, "2024-08-02", "Scarlet & Violet - Shrouded Fable"),
  specialProduct("shrouded-fable-booster-bundle", "Shrouded Fable Booster Bundle", "Booster Bundle", 26.94, "2024-09-06", "Scarlet & Violet - Shrouded Fable"),
  specialProduct("shrouded-fable-kingdra-ex-special-illustration-collection", "Shrouded Fable Kingdra ex Special Illustration Collection", "Collection Box", 29.99, "2024-08-02", "Scarlet & Violet - Shrouded Fable"),
  specialProduct("shrouded-fable-greninja-ex-special-illustration-collection", "Shrouded Fable Greninja ex Special Illustration Collection", "Collection Box", 29.99, "2024-08-02", "Scarlet & Violet - Shrouded Fable"),
  ...regularSetProducts("scarlet-violet-twilight-masquerade", "Scarlet & Violet - Twilight Masquerade", "2024-05-24", svSources, {
    includeBuildBattleBox: true,
  }),
  ...regularSetProducts("scarlet-violet-temporal-forces", "Scarlet & Violet - Temporal Forces", "2024-03-22", svSources, {
    includeBuildBattleBox: true,
  }),
  specialProduct("paldean-fates-elite-trainer-box", "Paldean Fates Elite Trainer Box", "Elite Trainer Box", 49.99, "2024-01-26", "Scarlet & Violet - Paldean Fates"),
  specialProduct("paldean-fates-pokemon-center-elite-trainer-box", "Paldean Fates Pokemon Center Elite Trainer Box", "Pokemon Center ETB", 59.99, "2024-01-26", "Scarlet & Violet - Paldean Fates"),
  specialProduct("paldean-fates-booster-bundle", "Paldean Fates Booster Bundle", "Booster Bundle", 26.94, "2024-02-23", "Scarlet & Violet - Paldean Fates"),
  specialProduct("paldean-fates-mini-tin", "Paldean Fates Mini Tin", "Mini Tin", 9.99, "2024-02-09", "Scarlet & Violet - Paldean Fates"),
  specialProduct("paldean-fates-tin", "Paldean Fates Tin", "Tin", 28.99, "2024-02-09", "Scarlet & Violet - Paldean Fates"),
  specialProduct("paldean-fates-premium-collection", "Paldean Fates ex Premium Collection", "Premium Collection", 49.99, "2024-02-09", "Scarlet & Violet - Paldean Fates"),
  ...regularSetProducts("scarlet-violet-paradox-rift", "Scarlet & Violet - Paradox Rift", "2023-11-03", svSources, {
    includeBuildBattleBox: true,
    includeBuildBattleStadium: true,
  }),
  specialProduct("scarlet-violet-151-elite-trainer-box", "151 Elite Trainer Box", "Elite Trainer Box", 49.99, "2023-09-22", "Scarlet & Violet - 151"),
  specialProduct("scarlet-violet-151-pokemon-center-elite-trainer-box", "151 Pokemon Center Elite Trainer Box", "Pokemon Center ETB", 59.99, "2023-09-22", "Scarlet & Violet - 151"),
  specialProduct("scarlet-violet-151-booster-bundle", "151 Booster Bundle", "Booster Bundle", 26.94, "2023-09-22", "Scarlet & Violet - 151"),
  specialProduct("scarlet-violet-151-ultra-premium-collection", "151 Ultra-Premium Collection", "Ultra-Premium Collection", 119.99, "2023-10-06", "Scarlet & Violet - 151"),
  specialProduct("scarlet-violet-151-poster-collection", "151 Poster Collection", "Poster Collection", 14.99, "2023-09-22", "Scarlet & Violet - 151"),
  specialProduct("scarlet-violet-151-binder-collection", "151 Binder Collection", "Binder Collection", 24.99, "2023-09-22", "Scarlet & Violet - 151"),
  specialProduct("scarlet-violet-151-zapdos-ex-collection", "151 Zapdos ex Collection", "Collection Box", 21.99, "2023-10-06", "Scarlet & Violet - 151"),
  specialProduct("scarlet-violet-151-alakazam-ex-collection", "151 Alakazam ex Collection", "Collection Box", 21.99, "2023-10-06", "Scarlet & Violet - 151"),
  ...regularSetProducts("scarlet-violet-obsidian-flames", "Scarlet & Violet - Obsidian Flames", "2023-08-11", svSources, {
    includeBuildBattleBox: true,
    includeBuildBattleStadium: true,
  }),
  ...regularSetProducts("scarlet-violet-paldea-evolved", "Scarlet & Violet - Paldea Evolved", "2023-06-09", svSources, {
    includeBuildBattleBox: true,
    includeBuildBattleStadium: true,
  }),
  ...regularSetProducts("scarlet-violet", "Scarlet & Violet", "2023-03-31", svSources, {
    includeBuildBattleBox: true,
    includeBuildBattleStadium: true,
  }),
];
