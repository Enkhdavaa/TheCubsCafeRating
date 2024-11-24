import { Router } from "@oak/oak";
import { ReviewRequest } from "./src/db/interface.ts";
import { GetLastReviews } from "./src/db/postgres/getLastReviews.ts";
import { GetAvgScoresByCafe } from "./src/db/postgres/getAvgScoreByCafe.ts";
import { AddReview } from "./src/db/postgres/addReview.ts";

export const router = new Router();

router.get("/api/getLastReviews", async (ctx) => {
  const userReviews = await GetLastReviews(20);
  ctx.response.body = { reviews: userReviews };
});

router.get("/api/getTopProducts", async (ctx) => {
  const urlEncoded = await ctx.request.url.searchParams;
  const productName = urlEncoded.get("product");

  if (productName === null) {
    throw new Error("Rating data is insufficient. Please check: " + urlEncoded);
  }
  const products = await GetAvgScoresByCafe(productName, 5);

  ctx.response.body = { reviews: products };
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
        "Rating data is insufficient. Please check: " + urlEncoded
      );
    }

    const reviewRequest: ReviewRequest = {
      username: user,
      cafe: cafe,
      product: product,
      score: Number.parseInt(score),
    };

    await AddReview(reviewRequest);
    ctx.response.redirect("/");
  } catch (err) {
    console.error(err);
    throw err;
  }
});
