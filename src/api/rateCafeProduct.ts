import { baseUrlHostPort, rateEndpoint } from "./endpoints.ts";

export async function RateCafeProduct(
  user: string,
  place: string,
  product: string,
  score: number
) {
  const response = await fetch(new URL(rateEndpoint, baseUrlHostPort));
  const config = await response.json();
  console.log(config);
}
