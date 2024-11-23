import { ReviewRequest } from "../interface.ts";
import { connection } from "./dbAccess.ts";

export async function AddReview(request: ReviewRequest) {
  const username = request.username;
  const cafe = request.cafe;
  const product = request.product;
  const score = request.score;

  if (username == "" || cafe == "") {
    console.error("Input data is WRONG. User: " + username + " Cafe: " + cafe);
    return;
  }

  if (product != "Coffee" && product != "Tosti" && product != "Vibe") {
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
  try {
    await connection.queryObject`
        INSERT INTO CafeRating (Username, Cafe, Product, Score) VALUES (${username}, ${cafe}, ${product}, ${score});
      `;
  } catch (err) {
    console.error(err);
  } finally {
    connection.release();
  }
}
