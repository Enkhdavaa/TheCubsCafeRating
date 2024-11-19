import { Database } from "@db/sqlite";
import { AvarageScore, Review, ReviewRequest } from "./interface.ts";

const db_path = "./src/db/cafeRatings.db";

export function AddReview(request: ReviewRequest) {
  const user = request.user;
  const cafe = request.cafe;
  const product = request.product;
  const score = request.score;

  if (user == "" || cafe == "") {
    console.error("Input data is WRONG. User: " + user + " Cafe: " + cafe);
    return;
  }

  if (product != "Coffee" && product != "Tosti" && product != "Vibe") {
    console.error("Product is NOT VALID: " + product);
    return;
  }

  if (score < 1 || score > 10) {
    console.error("Score value is exceede LIMIT" + score);
    return;
  }

  const db = new Database(db_path);

  db.prepare(
    `
    INSERT INTO CafeReview (User, Cafe, Product, Score) VALUES (?, ?, ?, ?)
    `
  ).run(user, cafe, product, score);

  db.close();
}

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
