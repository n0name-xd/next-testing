import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

export const dbPath =
  process.env.DATABASE_PATH ||
  path.resolve(process.cwd(), "entities/bd1/database.db");

const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS userData (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    userId TEXT NOT NULL,
    gender TEXT NOT NULL,
    test TEXT NOT NULL,
    answers TEXT NOT NULL,
    surveyResults TEXT NOT NULL,
    extraDictionary TEXT NOT NULL
  )
`);

export default db;
