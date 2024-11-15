import { baseUrlHostPort, getTopsEndpoint } from "./endpoints.ts";

export async function GetTops(
  user: string,
  place: string,
  product: string,
  score: number
) {
  const response = await fetch(new URL(getTopsEndpoint, baseUrlHostPort));
  const config = await response.json();
  console.log(config);
}
