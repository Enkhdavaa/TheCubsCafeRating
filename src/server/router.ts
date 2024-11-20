import { Router } from "@oak/oak";
import { ReviewRequest } from "../db/interface.ts";
import { GetLastReviews } from "../db/getLastReviews.ts";
import { GetAvgScoresByCafe } from "../db/getAvgScoresByCafe.ts";
import { AddReview } from "../db/addReview.ts";

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
    const reviewRequest = (await ctx.request.body.json()) as ReviewRequest;
    if (
      reviewRequest.cafe === "" ||
      reviewRequest.product === "" ||
      reviewRequest.score == 0
    ) {
      throw new Error(
        "Rating data is insufficient. Please check: " + reviewRequest
      );
    }

    AddReview(reviewRequest);

    ctx.response.body = { Result: "Success" };
  } catch (err) {
    ctx.response.body = { Result: "Failed" };
    throw err;
  }
});
