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
| `prices.json` | Starting market prices. Loaded the first time the app opens in a browser that has none saved. |

## Running it

The app loads `catalog.json` and `prices.json` with `fetch`, so it has to be served over HTTP, not opened as a file:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

It also works on GitHub Pages: Settings → Pages → deploy from the `main` branch.

Prices you change are saved in your browser's local storage. To move them between browsers, use **Export backup** and **Import**. To change the starting prices for everyone, edit `prices.json`.

## How costs are calculated

- **Craft cost** = mesos fee + the sum of each required item × its unit cost.
- **Crafted parts** (ingots, Processed Leather, Screws…) are valued at whichever is cheaper, their market price or their own craft cost. This can be switched to *always craft* or *market price when set*.
- **Additives / catalysts** are optional, so they're shown but not counted.
- **Profit per craft** = sell price × yield × (1 − sale fee %) − craft cost.
- **Materials lists** round intermediate crafts up to whole crafts and show the leftovers. For example, 21 Screws takes 3 crafts of 10, leaving 9 spare.

## Data source

Recipe and item data comes from [metaroad.gg](https://metaroad.gg/maplestory-classic/crafting-calculator) (fetched November 2026). Market prices are entered by hand.
