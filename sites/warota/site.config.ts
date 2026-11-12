export const siteConfig = {
  siteName: 'Warota Guide',
  domain: 'warota.wiki',
  url: 'https://warota.wiki',
  gameTitle: 'Warota',
  fullTitle: "Warota: I Live Next to The Demon King's Castle LOL",
  steamAppId: 2860490,
  steamUrl: 'https://store.steampowered.com/app/2860490/Warota_I_Live_Next_to_The_Demon_Kings_Castle_LOL/',
  demoUrl: 'https://store.steampowered.com/app/5214670/',
  officialUrl: 'https://one-or-eight.co.jp/WRT/',
  supportEmail: 'support@studio18.co.jp',
  social: [
    { href: 'https://one-or-eight.co.jp/WRT/', label: 'Official site' },
    { href: 'https://x.com/EarthWarsJP', label: 'X' },
    { href: 'https://www.youtube.com/channel/UC-7zVyb_F0a0xSVZ-ntsdAg', label: 'YouTube' },
    { href: 'https://www.tiktok.com/@1or8_tiktok_official/', label: 'TikTok' },
    { href: 'https://www.instagram.com/1or8_insta_official/', label: 'Instagram' },
    { href: 'https://discord.gg/M2WjEGP3sd', label: 'Discord' },
  ],
  developer: 'One or Eight, Team EARTHWARS',
  publisher: 'One or Eight',
  tagline: 'Unofficial English fan guide for the village-building action RPG beside the Demon King\'s castle.',
  locale: 'en',
  themeColor: '#161022',
  contentRoot: 'warota',
  homeTitle: "Warota Guide — Warota: I Live Next to The Demon King's Castle LOL",
  homeDescription:
    "Unofficial English guide to Warota: I Live Next to The Demon King's Castle LOL (Steam AppID 2860490). Village-building action RPG from One or Eight and Team EARTHWARS. Early Access is planned for 13 November 2026 and was still marked coming soon on 12 November 2026. Not affiliated with the developers or Valve.",
  analytics: {
    gaId: '',
  },
  art: {
    hero: '/images/official/steam/capsule-616x353.jpg',
    heroAlt:
      "Official Steam capsule for Warota: I Live Next to The Demon King's Castle LOL, showing a blonde idol with pink eyes in front of a village roof, a castle logo, and several smaller characters",
    header: '/images/official/steam/header.jpg',
    headerAlt:
      "Official Steam header for Warota: I Live Next to The Demon King's Castle LOL, with the title logo, a blonde idol, a village, and smaller characters",
    ogImage: '/images/official/steam/capsule-616x353.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    "warota.wiki is an unofficial fan-made guide for Warota: I Live Next to The Demon King's Castle LOL. It is not affiliated with, endorsed by, or sponsored by One or Eight, Team EARTHWARS, Valve, or Steam. All game content, names, artwork, and trademarks belong to their respective owners. The Steam legal notice reads © oneoreight All Rights Reserved. This site does not sell the game, recover accounts, or invent class lists, blessing tables, wave timers, or village recipes. The support email in the footer is the one in the Steam appdetails support field. Mail sent there does not reach the people who edit this wiki.",
  nav: [
    { href: '/guide', label: 'Guide' },
    { href: '/village', label: 'Village' },
    { href: '/hats', label: 'Hats' },
    { href: '/demon-king', label: 'Demon King' },
  ],
  moreNav: [
    { href: '/about', label: 'About' },
  ],
  footerNav: [
    { href: '/guide', label: 'Guide' },
    { href: '/village', label: 'Village' },
    { href: '/hats', label: 'Hats' },
    { href: '/demon-king', label: 'Demon King' },
    { href: '/about', label: 'About' },
  ],
  version: {
    label: 'Checked 12 Nov 2026',
    detail:
      'Store text, platforms, languages, categories, system requirements, the Early Access notes, and the demo listing are from the Steam appdetails API and the English store page on 12 Nov 2026. The official site at one-or-eight.co.jp/WRT/ was read the same day. No launch client was played. The full-game appdetails payload did not include a public price, and coming_soon was still true.',
  },
  databases: [
    {
      href: 'https://store.steampowered.com/app/2860490/Warota_I_Live_Next_to_The_Demon_Kings_Castle_LOL/',
      label: 'Steam store page',
    },
    {
      href: 'https://store.steampowered.com/app/5214670/',
      label: 'Steam demo page',
    },
    {
      href: 'https://one-or-eight.co.jp/WRT/',
      label: 'Official site',
    },
  ],
} as const;

export type NavItem = { href: string; label: string };
