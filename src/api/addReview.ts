import { ReviewRequest } from "../db/interface.ts";
import { baseUrlHostPort } from "./endpoints.ts";

export async function RateCafeProduct(
  user: string,
  cafe: string,
  product: string,
  score: number
) {
  const rating: ReviewRequest = {
    user: user,
    cafe: cafe,
    product: product,
    score: score,
  };

  try {
    const response = await fetch(new URL("/addReview", baseUrlHostPort), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rating),
    });
    await response.json();
  } catch (err) {
    console.error(err);
  }
}
