import { Database } from "@db/sqlite";

const db_path = "./src/db/cafeRatings.db";

export function AddReview(
  user: string,
  cafe: string,
  product: string,
  score: number
) {
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

export function GetLastReviews(count: number) {
  if (count == 0) {
    console.error("Count should NOT BE 0");
    return;
  }

  const db = new Database(db_path);
  const rows = db
    .prepare(
      `
      SELECT Cafe, Product, Score FROM CafeReview ORDER BY Id DESC LIMIT ?
      `
    )
    .all(count);

  db.close();
  return rows;
}

export function GetTopProducts(product: string, count: number) {
  if (product != "Coffee" && product != "Tosti" && product != "Vibe") {
    console.error("Product is NOT VALID");
    return;
  }

  if (count == 0) {
    console.error("Count should NOT BE 0");
    return;
  }

  const db = new Database(db_path);

  const rows = db
    .prepare(
      `
      SELECT Cafe, Product, Score FROM CafeReview WHERE Product = ? LIMIT ?
      `
    )
    .all(product, count);

  db.close();
  return rows;
}
