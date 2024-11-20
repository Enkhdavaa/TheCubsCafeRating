import { Review } from "../db/interface.ts";

export async function apiGetLastReviews(): Promise<Review[]> {
  const response = await fetch("/api/getLastReviews");
  const result = await response.json();

  const lastReviews = result.reviews as Review[];
  return lastReviews;
}
