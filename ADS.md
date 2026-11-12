# Ads — warota.wiki

The Native Banner slot after Quick Answer is wired and **turned off**.

`sites/warota/ads.config.ts` sets `enabled` to false. `afterQuickAnswer.id` is an empty string. `afterQuickAnswer.scriptSrc` and the site-wide `scriptSrc` are empty strings. `invokeBase` is empty. No zone key from another game is stored here.

`analytics.gaId` in `sites/warota/site.config.ts` is an empty string, so the base layout does not load Google Analytics.

Adult and sensitive categories stay off. The 404 page does not render a slot.
