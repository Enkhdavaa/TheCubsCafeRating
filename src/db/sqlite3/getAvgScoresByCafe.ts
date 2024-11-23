import { Database } from "@db/sqlite";
import { AvarageScore } from "../interface.ts";
import { db_path } from "./dbAccess.ts";

export function GetAvgScoresByCafe(
  product: string,
  limit: number
): AvarageScore[] {
  if (product != "Coffee" && product != "Tosti" && product != "Vibe") {
    console.error("Product is NOT VALID");
    return [];
  }

  if (limit == 0) {
    console.error("Limit should NOT BE 0");
    return [];
  }

  const db = new Database(db_path);

  const rows = db
    .prepare(
      `
        SELECT Cafe, AVG(Score) AS AvarageScore, COUNT(*) AS ReviewCount
        FROM CafeReview
        WHERE Product = ?
        GROUP BY Cafe
        ORDER BY AvarageScore DESC
        LIMIT ?
        `
    )
    .all(product, limit);

  db.close();

  const scores: AvarageScore[] = rows.map((row: any) => ({
    cafe: row.Cafe,
    product: product,
    score: Number.parseInt(row.AvarageScore),
    count: Number.parseInt(row.ReviewCount),
  }));

  return scores;
}
