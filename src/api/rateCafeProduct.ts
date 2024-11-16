import { baseUrlHostPort } from "./endpoints.ts";
import { CafeProductRating } from "./interface.ts";

export async function RateCafeProduct(
  user: string,
  cafe: string,
  product: string,
  score: number
) {
  const rating: CafeProductRating = {
    user: user,
    cafe: cafe,
    product: product,
    score: score,
  };

  try {
    const response = await fetch(new URL("/rateCafeProduct", baseUrlHostPort), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rating),
    });
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
