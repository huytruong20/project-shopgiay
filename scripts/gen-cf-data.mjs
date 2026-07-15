// Sinh functions/api/_data.js từ mảng PRODUCTS trong shop.html.
// Dùng khi bạn sửa danh sách sản phẩm trong shop.html và muốn cập nhật
// dữ liệu cho Cloudflare Pages Functions.
//
//   node scripts/gen-cf-data.mjs
//
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(ROOT, 'shop.html'), 'utf8');

function extract(source, marker) {
  const d = source.indexOf(marker);
  if (d === -1) throw new Error(`Không tìm thấy "${marker}"`);
  const start = source.indexOf('[', d);
  let depth = 0;
  for (let i = start; i < source.length; i++) {
    const c = source[i];
    if (c === '[') depth++;
    else if (c === ']') { depth--; if (depth === 0) return source.slice(start, i + 1); }
  }
  throw new Error('Không tìm được ngoặc đóng của mảng PRODUCTS');
}

const lit = extract(html, 'let PRODUCTS =');
const PRODUCTS = Function(`"use strict"; return (${lit});`)();

const out = `// Dữ liệu sản phẩm cho Cloudflare Pages Functions.
// TỰ SINH từ shop.html — chỉnh sản phẩm ở shop.html rồi chạy lại: node scripts/gen-cf-data.mjs
export const PRODUCTS = ${JSON.stringify(PRODUCTS, null, 2)};
`;

mkdirSync(join(ROOT, 'functions', 'api'), { recursive: true });
writeFileSync(join(ROOT, 'functions', 'api', '_data.js'), out, 'utf8');
console.log('Đã ghi functions/api/_data.js với', PRODUCTS.length, 'sản phẩm');
