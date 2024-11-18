import { Router } from "@oak/oak";
import { CafeProductRating, TopCafe, UserRate } from "../api/interface.ts";
import { AddReview } from "../db/dbAccess.ts";

export const router = new Router();

router.get("/getRates", (ctx) => {
  const userRates: UserRate[] = [
    {
      user: "Dave",
      cafe: "Smaakmakers",
      product: "Tosti",
      score: 10,
    },
  ];

  ctx.response.body = { userRates: userRates };
});

router.get("/getTops", (ctx) => {
  const topCafes: TopCafe[] = [
    {
      cafe: "Smaakmakers",
      coffeeRating: 10,
      tostiRating: 10,
      vibeRating: 10,
      overallScore: 10,
    },
  ];

  ctx.response.body = { topCafes: topCafes };
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
