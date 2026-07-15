// Khởi tạo SQLite (module tích hợp của Node) và tạo bảng nếu chưa có.
import { DatabaseSync } from 'node:sqlite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const db = new DatabaseSync(join(__dirname, 'shop.db'));

db.exec(`
CREATE TABLE IF NOT EXISTS products (
  id        INTEGER PRIMARY KEY,
  name      TEXT    NOT NULL,
  cat       TEXT,
  gender    TEXT,
  price     INTEGER NOT NULL,
  origPrice INTEGER,
  isNew     INTEGER DEFAULT 0,
  sale      INTEGER DEFAULT 0,
  rating    REAL,
  reviews   INTEGER,
  tagline   TEXT,
  img       TEXT,
  descr     TEXT,
  colors    TEXT,   -- JSON
  sizes     TEXT,   -- JSON
  specs     TEXT    -- JSON
);
`);

export default db;
