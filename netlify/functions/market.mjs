// Fetches maplestory-classic.com's public market.json for the calculator's "Update prices" button,
// for browsers that can't download it directly. Netlify's CDN caches the result for an hour,
// so the source site is asked at most about once an hour however many people click Update.
const SOURCE = 'https://maplestory-classic.com/market.json';

export default async () => {
  try {
    const res = await fetch(SOURCE, {
      headers: { 'User-Agent': 'MaplestoryCCC crafting calculator (https://maplestoryccc.netlify.app)' },
    });
    if (!res.ok) return json({ error: `Source returned ${res.status}` }, 502);
    return new Response(await res.text(), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300',
        'Netlify-CDN-Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (err) {
    return json({ error: 'Could not reach the market data source' }, 502);
  }
};

const json = (body, status) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' },
  });
