import { baseUrlHostPort } from "./endpoints.ts";
import { UserRate } from "./interface.ts";

export async function apiGetLastReviews(): Promise<UserRate[]> {
  const response = await fetch(new URL("/getRates", baseUrlHostPort));
  const result = await response.json();

  const userRates: UserRate[] = result.userRates.map((rate: any) => ({
    user: "Cub",
    cafe: rate.Cafe,
    product: rate.Product,
    score: rate.Score,
  }));

  return userRates;
}
