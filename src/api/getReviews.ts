import { baseUrlHostPort } from "./endpoints.ts";
import { Review } from "../db/interface.ts";

export async function apiGetLastReviews(): Promise<Review[]> {
  const response = await fetch(new URL("/getLastReviews", baseUrlHostPort));
  const result = await response.json();

  const lastReviews = result.reviews as Review[];
  return lastReviews;
}
