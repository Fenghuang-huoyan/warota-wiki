# Warota Guide

Unofficial English fan guide for [Warota: I Live Next to The Demon King's Castle LOL](https://store.steampowered.com/app/2860490/Warota_I_Live_Next_to_The_Demon_Kings_Castle_LOL/) (Steam AppID **2860490**), aimed at **warota.wiki**.

Not affiliated with One or Eight, Team EARTHWARS, Valve, or Steam. The site does not sell the game or recover accounts.

Early Access is planned for **13 November 2026**. On 12 November 2026 the Steam appdetails payload still had `coming_soon: true`.

## Build

```bash
npm install
npm run dev      # http://localhost:4329
npm run build
npm run preview  # http://localhost:4329
```

Node 22. The build is a static Astro site (`dist/`). `astro.config.mjs` sets `site` to `https://warota.wiki`.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/warota/site.config.ts` | Domain, Steam AppID, theme, nav |
| Ads | `sites/warota/ads.config.ts` | Ad slot left empty for this domain |
| Active site | `sites/active` → `warota` | What the build reads |
| Framework | `framework/` | Layout, SEO, ad slot |
| Content | `content/warota/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is empty, so the base layout does not load GA4. The Adsterra Native Banner after Quick Answer is disabled until this domain has its own zone key. See [ADS.md](ADS.md).

Steam art lives in `public/images/official/steam/` with `ATTRIBUTION.txt`. Unhashed library-hero URLs returned HTTP 404 on 12 November 2026, so the hero uses the store capsule. This repository does not buy a domain, edit DNS, or deploy. Vercel can serve the static `dist/` output.
