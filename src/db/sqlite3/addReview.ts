import { Database } from "@db/sqlite";
import { ReviewRequest } from "../interface.ts";
import { db_path } from "./dbAccess.ts";
import { Product } from "../../types.ts";

export function AddReview(request: ReviewRequest) {
  const user = request.username;
  const cafe = request.cafe;
  const product = request.product;
  const score = request.score;

  if (user == "" || cafe == "") {
    console.error("Input data is WRONG. User: " + user + " Cafe: " + cafe);
    return;
  }

  if (!(Object.values(Product) as string[]).includes(product)) {
    console.error("Product is NOT VALID: " + product);
    return;
  }

  if (score < 1 || score > 10) {
    console.error("Score value is exceede LIMIT: " + score);
    return;
  }

  if (!Number.isInteger(score)) {
    console.error("Score value is not Integer: " + score);
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
