// Cloudflare Pages Function: GET /api/products/:id
import { PRODUCTS } from '../_data.js';

export function onRequestGet({ params }) {
  const id = Number(params.id);
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    return Response.json({ error: 'Không tìm thấy sản phẩm' }, { status: 404 });
  }
  return Response.json(product, {
    headers: { 'Cache-Control': 'public, max-age=300' },
  });
}
