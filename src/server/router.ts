import { Router } from "@oak/oak";
import { TopCafe, UserRate } from "../api/interface.ts";

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

router.post("/rateCafeProduct", (ctx) => {
  console.log(ctx.request.body);
  console.log("Server says good here");
  ctx.response.body = { test: 24 };
});
