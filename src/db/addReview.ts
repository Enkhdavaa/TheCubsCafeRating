import { Database } from "@db/sqlite";
import { ReviewRequest } from "./interface.ts";
import { db_path } from "./dbAccess.ts";

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
