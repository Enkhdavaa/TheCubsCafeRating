import { ReviewRequest } from "../db/interface.ts";

export async function RateCafeProduct(
  user: string,
  cafe: string,
  product: string,
  score: number
) {
  const rating: ReviewRequest = {
    username: user,
    cafe: cafe,
    product: product,
    score: score,
  };

  try {
    const response = await fetch("/api/addReview", {
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
