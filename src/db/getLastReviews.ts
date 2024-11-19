import { Database } from "@db/sqlite";
import { Review } from "./interface.ts";
import { db_path } from "./dbAccess.ts";

export function GetLastReviews(limit: number): Review[] {
  if (limit == 0) {
    console.error("Limit should NOT BE 0");
    return [];
  }

  const db = new Database(db_path);
  const rows = db
    .prepare(
      `
        SELECT User, Cafe, Product, Score 
        FROM CafeReview 
        ORDER BY Id DESC 
        LIMIT ?
        `
    )
    .all(limit);

  db.close();

  const reviews: Review[] = rows.map((row: any) => ({
    user: row.User,
    cafe: row.Cafe,
    product: row.Product,
    score: Number.parseInt(row.Score),
  }));

  return reviews;
}
