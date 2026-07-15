// Fastify server: phục vụ file tĩnh (frontend) + API sản phẩm.
import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import cors from '@fastify/cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import db from './db.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..'); // thư mục chứa index.html, shop.html, img/

const app = Fastify({ logger: true });

await app.register(cors, { origin: true });

// Phục vụ toàn bộ file tĩnh của trang (index.html mặc định ở "/")
await app.register(fastifyStatic, { root: ROOT, prefix: '/' });

// Chuyển 1 dòng DB -> object sản phẩm giống định dạng frontend đang dùng.
function rowToProduct(r) {
  return {
    id: r.id,
    name: r.name,
    cat: r.cat,
    gender: r.gender,
    price: r.price,
    origPrice: r.origPrice,
    isNew: !!r.isNew,
    sale: !!r.sale,
    rating: r.rating,
    reviews: r.reviews,
    tagline: r.tagline,
    img: r.img,
    desc: r.descr,
    colors: JSON.parse(r.colors || '[]'),
    sizes: JSON.parse(r.sizes || '[]'),
    specs: JSON.parse(r.specs || '{}'),
  };
}

// GET /api/products  — danh sách sản phẩm, hỗ trợ lọc cơ bản qua query.
//   ?cat=Racing  ?sale=true  ?isNew=true  ?search=nimbus
app.get('/api/products', (req, reply) => {
  const { cat, sale, isNew, search } = req.query;
  const where = [];
  const args = [];
  if (cat) { where.push('cat = ?'); args.push(cat); }
  if (sale === 'true') where.push('sale = 1');
  if (isNew === 'true') where.push('isNew = 1');
  if (search) { where.push('LOWER(name) LIKE ?'); args.push(`%${String(search).toLowerCase()}%`); }

  const sql = `SELECT * FROM products ${where.length ? 'WHERE ' + where.join(' AND ') : ''} ORDER BY id`;
  const rows = db.prepare(sql).all(...args);
  return rows.map(rowToProduct);
});

// GET /api/products/:id — chi tiết 1 sản phẩm.
app.get('/api/products/:id', (req, reply) => {
  const row = db.prepare('SELECT * FROM products WHERE id = ?').get(Number(req.params.id));
  if (!row) return reply.code(404).send({ error: 'Không tìm thấy sản phẩm' });
  return rowToProduct(row);
});

const PORT = process.env.PORT || 3000;
app.listen({ port: PORT, host: '0.0.0.0' })
  .then(() => app.log.info(`Server chạy tại http://localhost:${PORT}`))
  .catch((err) => { app.log.error(err); process.exit(1); });
