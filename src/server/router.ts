import { Router } from "@oak/oak";
import { CafeProductRating } from "../api/interface.ts";
import { AddReview, GetLastReviews, GetTopProducts } from "../db/dbAccess.ts";

export const router = new Router();

router.get("/getRates", (ctx) => {
  const userReviews = GetLastReviews(3);

  ctx.response.body = { userRates: userReviews };
});

router.get("/getTopCoffees", (ctx) => {
  const topCoffees = GetTopProducts("Coffee", 1);

  ctx.response.body = { topCoffees: topCoffees };
});

router.post("/rateCafeProduct", async (ctx) => {
  if (!ctx.request.hasBody) {
    throw new Error("There is no data specified");
  }

  try {
    const ratedData = (await ctx.request.body.json()) as CafeProductRating;
    if (
      ratedData.cafe === "" ||
      ratedData.product === "" ||
      ratedData.score == 0
    ) {
      throw new Error("Rating data is insufficient. Please check" + ratedData);
    }
    console.log(ratedData);

    AddReview(
      ratedData.user,
      ratedData.cafe,
      ratedData.product,
      ratedData.score
    );

    ctx.response.body = { Result: "Success" };
  } catch (err) {
    ctx.response.body = { Result: "Failed" };
    throw err;
  }
});
