import { Router } from "@oak/oak";
import { ReviewRequest } from "./src/db/interface.ts";
import { GetLastReviews } from "./src/db/getLastReviews.ts";
import { GetAvgScoresByCafe } from "./src/db/getAvgScoresByCafe.ts";
import { AddReview } from "./src/db/addReview.ts";

export const router = new Router();

router.get("/api/getLastReviews", (ctx) => {
  const userReviews = GetLastReviews(3);

  ctx.response.body = { reviews: userReviews };
});

router.get("/api/getTopCoffees", (ctx) => {
  const topCoffees = GetAvgScoresByCafe("Coffee", 5);

  ctx.response.body = { reviews: topCoffees };
});

router.get("/api/getTopTostis", (ctx) => {
  const topTostis = GetAvgScoresByCafe("Tosti", 5);

  ctx.response.body = { reviews: topTostis };
});

router.post("/api/addReview", async (ctx) => {
  if (!ctx.request.hasBody) {
    throw new Error("There is no data specified");
  }

  try {
    const urlEncoded = await ctx.request.body.form();
    const user = urlEncoded.get("user");
    const cafe = urlEncoded.get("cafe");
    const product = urlEncoded.get("product");
    const score = urlEncoded.get("score");

    if (user == null || cafe == null || product === null || score == null) {
      throw new Error(
        "Rating data is insufficient. Please check: " + urlEncoded,
      );
    }

    const reviewRequest: ReviewRequest = {
      user: user,
      cafe: cafe,
      product: product,
      score: Number.parseInt(score),
    };

    AddReview(reviewRequest);
    ctx.response.redirect("/");
  } catch (err) {
    console.error(err);
    throw err;
  }
});
