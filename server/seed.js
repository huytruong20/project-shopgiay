// Nạp dữ liệu sản phẩm từ mảng PRODUCTS trong shop.html vào SQLite.
// shop.html là "nguồn dữ liệu gốc" nên seed đọc trực tiếp từ đó,
// tránh trùng lặp dữ liệu ở hai nơi.
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import db from './db.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(join(__dirname, '..', 'shop.html'), 'utf8');

// --- Trích mảng literal PRODUCTS = [ ... ] bằng cách đếm ngoặc vuông ---
function extractArrayLiteral(source, marker) {
  const declIdx = source.indexOf(marker);
  if (declIdx === -1) throw new Error(`Không tìm thấy "${marker}" trong shop.html`);
  const start = source.indexOf('[', declIdx);
  let depth = 0;
  for (let i = start; i < source.length; i++) {
    const ch = source[i];
    if (ch === '[') depth++;
    else if (ch === ']') {
      depth--;
      if (depth === 0) return source.slice(start, i + 1);
    }
  }
  throw new Error('Không tìm được ngoặc đóng của mảng PRODUCTS');
}

const literal = extractArrayLiteral(html, 'let PRODUCTS =');
// Mảng là JS literal (key không đóng ngoặc kép) -> dùng Function để eval an toàn hơn eval trực tiếp.
const PRODUCTS = Function(`"use strict"; return (${literal});`)();

console.log(`Đọc được ${PRODUCTS.length} sản phẩm từ shop.html`);

const insert = db.prepare(`
  INSERT OR REPLACE INTO products
    (id, name, cat, gender, price, origPrice, isNew, sale, rating, reviews, tagline, img, descr, colors, sizes, specs)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

db.exec('BEGIN');
try {
  for (const p of PRODUCTS) {
    insert.run(
      p.id,
      p.name,
      p.cat ?? null,
      p.gender ?? null,
      p.price,
      p.origPrice ?? null,
      p.isNew ? 1 : 0,
      p.sale ? 1 : 0,
      p.rating ?? null,
      p.reviews ?? null,
      p.tagline ?? null,
      p.img ?? null,
      p.desc ?? null,
      JSON.stringify(p.colors ?? []),
      JSON.stringify(p.sizes ?? []),
      JSON.stringify(p.specs ?? {}),
    );
  }
  db.exec('COMMIT');
} catch (err) {
  db.exec('ROLLBACK');
  throw err;
}

const count = db.prepare('SELECT COUNT(*) AS n FROM products').get().n;
console.log(`Đã seed xong. Tổng số sản phẩm trong DB: ${count}`);
