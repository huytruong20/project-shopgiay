// Cloudflare Pages Function: GET /api/products
// Chạy trên Workers runtime của Cloudflare (KHÔNG phải Node.js).
// Hỗ trợ lọc: ?cat=Racing  ?sale=true  ?isNew=true  ?search=nimbus
import { PRODUCTS } from './_data.js';

export function onRequestGet({ request }) {
  const url = new URL(request.url);
  const cat = url.searchParams.get('cat');
  const sale = url.searchParams.get('sale');
  const isNew = url.searchParams.get('isNew');
  const search = url.searchParams.get('search');

  let list = PRODUCTS;
  if (cat) list = list.filter((p) => p.cat === cat);
  if (sale === 'true') list = list.filter((p) => p.sale);
  if (isNew === 'true') list = list.filter((p) => p.isNew);
  if (search) {
    const q = search.toLowerCase();
    list = list.filter((p) => p.name.toLowerCase().includes(q));
  }

  return Response.json(list, {
    headers: { 'Cache-Control': 'public, max-age=300' },
  });
}
