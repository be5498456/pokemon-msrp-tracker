// Product image URLs are manually curated from public product-lineup articles or official retailer pages.
// Prefer official Pokemon Center / Pokemon product-gallery image URLs when available.
// PokeBeach is used for product-lineup images when official image URLs are blocked or unavailable.
// Bulbapedia archive images are used as an allowed fallback for exact product images.
// Do not use WordPress thumbnail URLs such as -200x200; use the original file URL for sharper images.

export const productImageUrls: Record<string, string> = {
  "mega-evolution-ascended-heroes-elite-trainer-box":
    "https://www.pokebeach.com/news/2025/11/Ascended-Heroes-Elite-Trainer-Box-1.jpg",
  "mega-evolution-ascended-heroes-pokemon-center-elite-trainer-box":
    "https://www.pokebeach.com/news/2025/11/Ascended-Heroes-Elite-Trainer-Box-Pokemon-Center.webp",
  "mega-evolution-ascended-heroes-booster-bundle":
    "https://www.pokebeach.com/news/2025/11/Pokemon_TCG_Mega_Evolution%E2%80%94Ascended_Heroes_Booster_Bundle-copy.jpg",

  "mega-evolution-perfect-order-booster-pack":
    "https://www.pokebeach.com/news/2026/01/Pokemon_TCG_Mega_Evolution%E2%80%94Perfect_Order_Booster_Wrap_Mega_Zygarde.jpg",
  "mega-evolution-perfect-order-booster-display-box":
    "https://www.pokebeach.com/news/2026/01/Perfect-Order-Booster-Box.jpg",
  "mega-evolution-perfect-order-elite-trainer-box":
    "https://www.pokebeach.com/news/2026/01/Pokemon_TCG_Mega_Evolution%E2%80%94Perfect_Order_Elite_Trainer_Box.jpg",
  "mega-evolution-perfect-order-pokemon-center-elite-trainer-box":
    "https://www.pokebeach.com/news/2026/01/Perfect-Order-Pokemon-Center-Elite-Trainer-Box-Tyrunt.webp",
  "mega-evolution-perfect-order-booster-bundle":
    "https://www.pokebeach.com/news/2026/01/Perfect-Order-Booster-Bundle.jpg",

  "mega-evolution-phantasmal-flames-booster-pack":
    "https://www.pokebeach.com/news/2025/09/Pokemon_TCG_Mega_Evolution%E2%80%94Phantasmal_Flames_Booster_Wrap_Mega_Charizard.png",
  "mega-evolution-phantasmal-flames-booster-display-box":
    "https://www.pokebeach.com/news/2025/09/Phantasmal-Flames-Box.jpeg",
  "mega-evolution-phantasmal-flames-elite-trainer-box":
    "https://www.pokebeach.com/news/2025/09/Phantasmal-Flames-ETB.jpeg",
  "mega-evolution-phantasmal-flames-pokemon-center-elite-trainer-box":
    "https://www.pokebeach.com/news/2025/09/Phantasmal-Flames-Pokemon-Center-ETB.webp",
  "mega-evolution-phantasmal-flames-booster-bundle":
    "https://www.pokebeach.com/news/2025/09/Phantasmal-Flames-Booster-Bundle-1.jpg",
  "mega-evolution-phantasmal-flames-build-battle-box":
    "https://www.pokebeach.com/news/2025/09/Phantasmal-Flames-Build-Battle.webp",
  "mega-charizard-x-ex-ultra-premium-collection":
    "https://www.pokebeach.com/news/2025/09/Mega-Charizard-X-ex-Ultra-Premium-Collection.jpg",

  "mega-evolution-booster-pack":
    "https://www.pokebeach.com/news/2025/07/Pokemon_TCG_Mega_Evolution_Booster_Wrap_Mega_Venusaur-copy.jpg",
  "mega-evolution-booster-display-box":
    "https://www.pokebeach.com/news/2025/09/Mega-Evolution-Box.webp",
  "mega-evolution-booster-bundle":
    "https://www.pokebeach.com/news/2025/07/Mega-Evolution-Booster-Bundle-copy.jpg",
  "mega-evolution-build-battle-box":
    "https://www.pokebeach.com/news/2025/07/Mega-Evolution-Build-Battle-2-copy.jpg",
  "mega-lucario-ex-figure-collection":
    "https://www.pokebeach.com/news/2025/08/20250818_184616.jpg",

  "black-bolt-elite-trainer-box":
    "https://www.pokebeach.com/news/2025/05/Black-Bolt-ETB.webp",
  "black-bolt-pokemon-center-elite-trainer-box":
    "https://www.pokebeach.com/news/2025/05/Black-Bolt-ETB-PC.jpg",
  "black-bolt-booster-bundle":
    "https://www.pokebeach.com/news/2025/05/Black-Bolt-Booster-Bundle.webp",
  "white-flare-elite-trainer-box":
    "https://www.pokebeach.com/news/2025/05/White-Flare-ETB.webp",
  "white-flare-pokemon-center-elite-trainer-box":
    "https://www.pokebeach.com/news/2025/05/White-Bolt-ETB-PC.jpg",
  "white-flare-booster-bundle":
    "https://www.pokebeach.com/news/2025/05/White-Flare-Booster-Bundle.webp",

  "scarlet-violet-destined-rivals-booster-pack":
    "https://www.pokebeach.com/news/2025/03/Pokemon_TCG_Scarlet_Violet%E2%80%94Destined_Rivals_Booster_Wraps_Cynthia_Garchomp.png",
  "scarlet-violet-destined-rivals-booster-display-box":
    "https://www.pokebeach.com/news/2025/03/Destined-Rivals-Booster-Box.webp",
  "scarlet-violet-destined-rivals-elite-trainer-box":
    "https://www.pokebeach.com/news/2025/03/Pokemon_TCG_Scarlet_Violet%E2%80%94Destined_Rivals_Elite_Trainer_Box.png",
  "scarlet-violet-destined-rivals-pokemon-center-elite-trainer-box":
    "https://www.pokebeach.com/news/2025/03/Destined-Rivals-ETB-PC.jpg",
  "scarlet-violet-destined-rivals-build-battle-box":
    "https://www.pokebeach.com/news/2025/03/Destined-Rivals-Build-Battle.webp",
  "scarlet-violet-destined-rivals-booster-bundle":
    "https://www.pokebeach.com/news/2025/03/Destined-Rivals-Booster-Bundle.webp",

  "scarlet-violet-journey-together-booster-pack":
    "https://www.pokebeach.com/news/2025/01/Pokemon_TCG_Scarlet_Violet%E2%80%94Journey_Together_Booster_Wrap_Iono_s_Bellibolt.png",
  "scarlet-violet-journey-together-booster-display-box":
    "https://www.pokebeach.com/news/2025/01/Journey-Together-Booster-Box-Closed.jpg",
  "scarlet-violet-journey-together-elite-trainer-box":
    "https://www.pokebeach.com/news/2025/01/Journey-Together-ETB-Front-N.jpg",
  "scarlet-violet-journey-together-booster-bundle":
    "https://www.pokebeach.com/news/2025/01/Journey-Together-Booster-Bundle.jpg",
  "journey-together-lillie-premium-tournament-collection":
    "https://www.pokebeach.com/news/2025/02/Lillie-Premium-Tournament-Collection-1.webp",

  "scarlet-violet-surging-sparks-booster-pack":
    "https://www.pokebeach.com/news/2024/08/Pokemon_TCG_Scarlet_Violet%E2%80%94Surging_Sparks_Booster_Wrap_Pikachu.png",
  "scarlet-violet-surging-sparks-booster-display-box":
    "https://www.pokebeach.com/news/2024/08/Pokemon-TCG-Scarlet-Violet-Surging-Sparks-Booster-Display_EN-copy-1.jpg",
  "scarlet-violet-surging-sparks-elite-trainer-box":
    "https://www.pokebeach.com/news/2024/08/Pokemon_TCG_Scarlet_Violet%E2%80%94Surging_Sparks_Elite_Trainer_Box.png",
  "scarlet-violet-surging-sparks-pokemon-center-elite-trainer-box":
    "https://www.pokebeach.com/news/2024/08/Pokemon_TCG_Scarlet_Violet%E2%80%94Surging_Sparks_Pokemon_Center_Elite_Trainer_Box.png",

  "scarlet-violet-stellar-crown-build-battle-box":
    "https://archives.bulbagarden.net/media/upload/8/81/SV7_Build_Battle_Box.jpg",
  "scarlet-violet-stellar-crown-elite-trainer-box":
    "https://archives.bulbagarden.net/media/upload/1/1d/SV7_Elite_Trainer_Box.png",
  "scarlet-violet-stellar-crown-pokemon-center-elite-trainer-box":
    "https://archives.bulbagarden.net/media/upload/9/95/SV7_Pok%C3%A9mon_Center_Elite_Trainer_Box.png",
  "scarlet-violet-stellar-crown-booster-display-box":
    "https://archives.bulbagarden.net/media/upload/e/e4/SV7_Booster_Display_Box.png",
  "scarlet-violet-stellar-crown-booster-bundle":
    "https://archives.bulbagarden.net/media/upload/1/1e/SV7_Booster_Bundle_1.jpg",

  "shrouded-fable-elite-trainer-box":
    "https://archives.bulbagarden.net/media/upload/5/5b/Shrouded_Fable_Elite_Trainer_Box.jpg",
  "shrouded-fable-pokemon-center-elite-trainer-box":
    "https://archives.bulbagarden.net/media/upload/1/11/Shrouded_Fable_Pok%C3%A9mon_Center_Elite_Trainer_Box.jpg",
  "shrouded-fable-booster-bundle":
    "https://archives.bulbagarden.net/media/upload/1/1a/Shrouded_Fable_Booster_Bundle_1.jpg",
  "shrouded-fable-kingdra-ex-special-illustration-collection":
    "https://archives.bulbagarden.net/media/upload/0/08/Shrouded_Fable_Kingdra_ex_Special_Illustration_Collection.jpg",
  "shrouded-fable-greninja-ex-special-illustration-collection":
    "https://archives.bulbagarden.net/media/upload/5/5d/Shrouded_Fable_Greninja_ex_Special_Illustration_Collection.jpg",

  "scarlet-violet-twilight-masquerade-build-battle-box":
    "https://archives.bulbagarden.net/media/upload/f/f9/SV6_Build_Battle_Box.jpg",
  "scarlet-violet-twilight-masquerade-elite-trainer-box":
    "https://archives.bulbagarden.net/media/upload/4/4d/SV6_Elite_Trainer_Box.png",
  "scarlet-violet-twilight-masquerade-pokemon-center-elite-trainer-box":
    "https://archives.bulbagarden.net/media/upload/7/74/SV6_Pok%C3%A9mon_Center_Elite_Trainer_Box.png",
  "scarlet-violet-twilight-masquerade-booster-display-box":
    "https://archives.bulbagarden.net/media/upload/d/db/SV6_Booster_Display_Box.png",
  "scarlet-violet-twilight-masquerade-booster-bundle":
    "https://archives.bulbagarden.net/media/upload/a/a4/SV6_Booster_Bundle_1.jpg",

  "prismatic-evolutions-pokemon-center-elite-trainer-box":
    "https://www.pokebeach.com/news/2024/11/Pokemon_TCG_Scarlet_Violet%E2%80%94Prismatic_Evolutions_Pokemon_Center_Elite_Trainer_Box-1.jpg",
  "prismatic-evolutions-elite-trainer-box":
    "https://www.pokebeach.com/news/2024/11/Pokemon_TCG_Scarlet_Violet%E2%80%94Prismatic_Evolutions_Elite_Trainer_Box-1.jpg",
  "prismatic-evolutions-binder-collection":
    "https://www.pokebeach.com/news/2024/11/Pokemon_TCG_Scarlet_Violet%E2%80%94Prismatic_Evolutions_Binder_Collection.jpg",
  "prismatic-evolutions-poster-collection":
    "https://www.pokebeach.com/news/2024/11/Pokemon_TCG_Scarlet_Violet%E2%80%94Prismatic_Evolutions_Poster_Collection.jpg",
  "prismatic-evolutions-mini-tin":
    "https://www.pokebeach.com/news/2024/11/Pokemon_TCG_Scarlet_Violet%E2%80%94Prismatic_Evolutions_Mini_Tin.jpg",
  "prismatic-evolutions-surprise-box":
    "https://www.pokebeach.com/news/2024/11/Pokemon_TCG_Scarlet_Violet%E2%80%94Prismatic_Evolutions_Surprise_Box.jpg",
  "prismatic-evolutions-booster-bundle":
    "https://www.pokebeach.com/news/2024/11/Pokemon_TCG_Scarlet_Violet%E2%80%94Prismatic_Evolutions_Booster_Bundle.jpg",

  "scarlet-violet-151-pokemon-center-elite-trainer-box":
    "https://www.pokebeach.com/news/2023/06/Pokemon_TCG_Scarlet_Violet%E2%80%94151_Pokemon_Center_Elite_Trainer_Box.png",
  "scarlet-violet-151-elite-trainer-box":
    "https://www.pokebeach.com/news/2023/06/Pokemon_TCG_Scarlet_Violet%E2%80%94151_Elite_Trainer_Box.png",
  "scarlet-violet-151-poster-collection":
    "https://www.pokebeach.com/news/2023/06/Pokemon_TCG_Scarlet_Violet%E2%80%94151_Poster_Collection.jpg",
  "scarlet-violet-151-binder-collection":
    "https://www.pokebeach.com/news/2023/06/Pokemon_TCG_Scarlet_Violet%E2%80%94151_Binder_Collection.jpg",
  "scarlet-violet-151-booster-bundle":
    "https://www.pokebeach.com/news/2023/06/Pokemon_TCG_Scarlet_Violet%E2%80%94151_Booster_Bundle.png",
  "scarlet-violet-151-ultra-premium-collection":
    "https://www.pokebeach.com/news/2023/06/Pokemon_TCG_Scarlet_Violet%E2%80%94151_Ultra-Premium_Collection.png",
  "scarlet-violet-151-alakazam-ex-collection":
    "https://www.pokebeach.com/news/2023/06/Pokemon_TCG_Scarlet_Violet%E2%80%94151_ex_Box%E2%80%94Alakazam_ex.jpg",
  "scarlet-violet-151-zapdos-ex-collection":
    "https://www.pokebeach.com/news/2023/06/Pokemon_TCG_Scarlet_Violet%E2%80%94151_ex_Box%E2%80%94Zapdos_ex.jpg",
  "scarlet-violet-151-mini-tin":
    "https://www.pokebeach.com/news/2023/06/Pokemon-TCG-Scarlet-Violet-151-Mini-Tin-Display-Front_EN-3376x4386-43f1fe7.jpg",
};
