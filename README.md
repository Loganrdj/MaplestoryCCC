# MapleStory Classic Crafting Calculator

A crafting cost and profit calculator for MapleStory Classic. Enter what materials cost you on the market, and it works out what every craftable item costs to make, what it sells for, and how much you make per craft.

## Features

- **Raw Materials** – market prices for ores, monster drops, Leather and other inputs, with NPC shop and vendor prices for reference. Base equipment (gear you upgrade, like Bronze Koif) and crafting catalysts are listed separately.
- **Craftable Items**
  - *Items to sell* – craft cost, sell price, profit per craft and margin.
  - *Crafting materials* – ingots, Processed Leather, Screws and the like, compared as craft vs. buy instead of profit.
- **Recipes** – a cost breakdown you can expand down to raw materials, plus a materials list for any number of crafts:
  - *Craft from raw* – everything made yourself, down to ores and drops.
  - *Cheapest plan* – buys any part that's cheaper to buy.
- **Filters** – by profession and profession level (1–10).
- **Multiple recipes per item** – e.g. Processed Leather from Leather, Jr. Necki Skin, Ligator Skin or Croco Skin. The cheapest one is used.
- **Import / export** – recipe CSVs, price lists (`name,price`), and JSON backups.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole app: one page, no build step. |
| `catalog.json` | Game data: 421 items and 366 recipes across Smithing, Weaponcrafting, Tailoring, Woodcrafting, Leatherworking and Arcforge. |
| `catalog.js` | The same data as `catalog.json`, as a script, so the page works when opened from the folder. |
| `prices.json` / `prices.js` | Starting market prices, used the first time the app opens in a browser. |

## Running it

Double-click `index.html`. It opens in your browser with no server needed.

Prices save automatically in that browser as you type them, and they're still there next time you open the file. The first time it opens, it starts from the prices in `prices.js`.

- **Move prices to another browser or computer:** use **Export backup**, then **Import** there.
- **Change the starting prices for a fresh browser:** edit `prices.js` (and `prices.json`).
- **Browser storage is per browser:** prices saved in Chrome won't show in Edge, and clearing site data clears them.

`catalog.js` and `prices.js` hold the same data as `catalog.json` and `prices.json`. They're scripts so the page works when opened straight from the folder. Served over HTTP (for example GitHub Pages), the page works either way.

## How costs are calculated

- **Craft cost** = mesos fee + the sum of each required item × its unit cost.
- **Crafted parts** (ingots, Processed Leather, Screws…) are valued at whichever is cheaper, their market price or their own craft cost. This can be switched to *always craft* or *market price when set*.
- **Additives / catalysts** are optional, so they're shown but not counted.
- **Profit per craft** = sell price × yield × (1 − sale fee %) − craft cost.
- **Materials lists** round intermediate crafts up to whole crafts and show the leftovers. For example, 21 Screws takes 3 crafts of 10, leaving 9 spare.

## Data source

Recipe and item data comes from [metaroad.gg](https://metaroad.gg/maplestory-classic/crafting-calculator) (fetched November 2026). Market prices are entered by hand.
